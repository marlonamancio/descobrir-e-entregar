/**
 * Integração do Astro que confere, no início do build e do dev, se os arquivos
 * em src/content/docs/ batem com src/data/sumario.ts:
 * - capítulo ou apêndice não planejado precisa ter arquivo, com o mesmo status;
 * - capítulo planejado não tem arquivo;
 * - capítulo com arquivo precisa ter número, parte e slug iguais aos do sumário.
 * Qualquer divergência faz o build falhar.
 */
import type { AstroIntegration } from 'astro';
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { apendices, capitulos } from '../data/sumario';

interface Pagina {
	arquivo: string;
	slug?: string;
	status?: string;
	capitulo?: number;
	parte?: number;
}

function listarArquivos(pasta: string): string[] {
	return readdirSync(pasta, { withFileTypes: true }).flatMap((item) => {
		const caminho = join(pasta, item.name);
		if (item.isDirectory()) return listarArquivos(caminho);
		return /\.mdx?$/.test(item.name) ? [caminho] : [];
	});
}

/** Lê só os campos de primeiro nível usados na conferência. */
function lerFrontmatter(caminho: string, raiz: string): Pagina {
	const texto = readFileSync(caminho, 'utf8');
	const bloco = texto.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
	const campo = (nome: string) =>
		bloco
			.match(new RegExp(`^${nome}:\\s*(.+?)\\s*(#.*)?$`, 'm'))?.[1]
			?.replace(/^['"]|['"]$/g, '');
	const numero = (nome: string) => (campo(nome) ? Number(campo(nome)) : undefined);
	return {
		arquivo: relative(raiz, caminho),
		slug: campo('slug'),
		status: campo('status'),
		capitulo: numero('capitulo'),
		parte: numero('parte'),
	};
}

export function conferirSumario(): AstroIntegration {
	return {
		name: 'conferir-sumario',
		hooks: {
			'astro:config:setup': ({ config, logger }) => {
				const raiz = fileURLToPath(config.root);
				const pasta = join(raiz, 'src/content/docs');
				const paginas = listarArquivos(pasta).map((c) => lerFrontmatter(c, raiz));
				const porSlug = new Map(paginas.filter((p) => p.slug).map((p) => [p.slug, p]));
				const erros: string[] = [];

				for (const c of capitulos) {
					const pagina = porSlug.get(c.slug);
					const nome = `Capítulo ${c.numero} (${c.slug})`;
					if (c.status === 'planejado') {
						if (pagina) erros.push(`${nome} está planejado no sumário, mas tem arquivo: ${pagina.arquivo}`);
						continue;
					}
					if (!pagina) {
						erros.push(`${nome} está como "${c.status}" no sumário, mas não há arquivo com esse slug.`);
						continue;
					}
					if (pagina.status !== c.status)
						erros.push(`${nome}: status "${pagina.status}" no arquivo e "${c.status}" no sumário.`);
					if (pagina.capitulo !== c.numero)
						erros.push(`${nome}: capitulo ${pagina.capitulo} no arquivo e ${c.numero} no sumário.`);
					if (pagina.parte !== c.parte)
						erros.push(`${nome}: parte ${pagina.parte} no arquivo e ${c.parte} no sumário.`);
				}

				for (const a of apendices) {
					const pagina = porSlug.get(a.slug);
					const nome = `Apêndice ${a.letra} (${a.slug})`;
					if (a.status === 'planejado') {
						if (pagina) erros.push(`${nome} está planejado no sumário, mas tem arquivo: ${pagina.arquivo}`);
					} else if (!pagina) {
						erros.push(`${nome} está como "${a.status}" no sumário, mas não há arquivo com esse slug.`);
					} else if (pagina.status !== a.status) {
						erros.push(`${nome}: status "${pagina.status}" no arquivo e "${a.status}" no sumário.`);
					}
				}

				const slugsDoSumario = new Set(capitulos.map((c) => c.slug));
				for (const p of paginas) {
					if (p.capitulo !== undefined && !slugsDoSumario.has(p.slug ?? ''))
						erros.push(`${p.arquivo} tem "capitulo: ${p.capitulo}", mas o slug "${p.slug}" não está no sumário.`);
				}

				if (erros.length > 0) {
					throw new Error(
						`O sumário (src/data/sumario.ts) e os arquivos divergem:\n- ${erros.join('\n- ')}`,
					);
				}
				logger.info('Sumário e arquivos conferidos.');
			},
		},
	};
}
