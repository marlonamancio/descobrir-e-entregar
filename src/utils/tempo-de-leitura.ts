/**
 * Tempo de leitura estimado a partir do texto-fonte em Markdown ou MDX.
 *
 * Desconta frontmatter, blocos de código, comentários e tags HTML (inclusive
 * componentes MDX), linhas de import/export do MDX, imagens e a sintaxe de
 * links (conta só o texto do link). Tabelas contam normalmente. Conta como
 * palavra todo trecho entre espaços que tenha ao menos uma letra ou um número.
 */

export const PALAVRAS_POR_MINUTO = 200;

export function contarPalavras(fonte: string): number {
	const texto = fonte
		// frontmatter, caso venha junto
		.replace(/^---\r?\n[\s\S]*?\r?\n---(\r?\n|$)/, '')
		// blocos de código cercados por ``` ou ~~~
		.replace(/^ {0,3}(`{3,}|~{3,})[^\n]*\n[\s\S]*?^ {0,3}\1[^\n]*$/gm, ' ')
		// import e export do MDX
		.replace(/^(import|export)\s.*$/gm, ' ')
		// comentários HTML
		.replace(/<!--[\s\S]*?-->/g, ' ')
		// imagens: ![alt](url) e ![alt][ref]
		.replace(/!\[[^\]]*\](\([^)]*\)|\[[^\]]*\])/g, ' ')
		// links: [texto](url) e [texto][ref] viram só o texto
		.replace(/\[([^\]]*)\](\([^)]*\)|\[[^\]]*\])/g, '$1')
		// definições de links por referência: [ref]: url
		.replace(/^ {0,3}\[[^\]]+\]:\s.*$/gm, ' ')
		// tags HTML, componentes MDX e autolinks <https://...>
		.replace(/<[^>\n]+>/g, ' ');

	return texto.split(/\s+/).filter((trecho) => /[\p{L}\p{N}]/u.test(trecho)).length;
}

/** Minutos de leitura: 200 palavras por minuto, arredondado para cima, no mínimo 1. */
export function minutosDeLeitura(fonte: string): number {
	return Math.max(1, Math.ceil(contarPalavras(fonte) / PALAVRAS_POR_MINUTO));
}
