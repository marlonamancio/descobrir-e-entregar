/**
 * Sumário do livro: fonte única para o menu lateral, a página Roteiro
 * e a conferência de status feita no build.
 *
 * Ao mudar o status de um capítulo, atualizar aqui E no frontmatter do arquivo.
 * Capítulo "planejado" não tem arquivo em src/content/docs/, só a linha abaixo.
 * Os slugs são fixos: a URL não muda quando um capítulo é renumerado.
 */

export const STATUS = ['planejado', 'rascunho', 'pesquisado', 'revisado'] as const;
export type Status = (typeof STATUS)[number];

export interface Parte {
	numero: number;
	titulo: string;
}

export interface Capitulo {
	numero: number;
	titulo: string;
	slug: string;
	parte: number;
	status: Status;
}

export interface Apendice {
	letra: string;
	titulo: string;
	slug: string;
	status: Status;
}

export const partes: Parte[] = [
	{ numero: 1, titulo: 'O ponto de partida' },
	{ numero: 2, titulo: 'O modelo' },
	{ numero: 3, titulo: 'Discovery na prática' },
	{ numero: 4, titulo: 'Delivery contínuo com design embarcado' },
	{ numero: 5, titulo: 'Em grandes organizações' },
	{ numero: 6, titulo: 'Pondo em prática' },
];

export const capitulos: Capitulo[] = [
	{ numero: 1, parte: 1, status: 'rascunho', slug: 'por-que-descobrir-e-entregar', titulo: 'Por que descobrir e entregar ao mesmo tempo' },
	{ numero: 2, parte: 1, status: 'rascunho', slug: 'uma-historia-de-ideias', titulo: 'Uma história de ideias' },
	{ numero: 3, parte: 2, status: 'rascunho', slug: 'o-que-e-e-o-que-nao-e', titulo: 'Discovery e delivery contínuos: o que é e o que não é' },
	{ numero: 4, parte: 2, status: 'planejado', slug: 'uma-equipe-duas-trilhas', titulo: 'Uma equipe, duas trilhas' },
	{ numero: 5, parte: 2, status: 'planejado', slug: 'como-as-trilhas-se-conversam', titulo: 'Como as trilhas se conversam' },
	{ numero: 6, parte: 3, status: 'planejado', slug: 'resultados-antes-de-entregas', titulo: 'Resultados antes de entregas' },
	{ numero: 7, parte: 3, status: 'planejado', slug: 'conversar-com-pessoas', titulo: 'Conversar com pessoas toda semana' },
	{ numero: 8, parte: 3, status: 'planejado', slug: 'mapear-oportunidades', titulo: 'Mapear oportunidades' },
	{ numero: 9, parte: 3, status: 'planejado', slug: 'testar-antes-de-construir', titulo: 'Testar antes de construir' },
	{ numero: 10, parte: 4, status: 'planejado', slug: 'do-validado-ao-entregavel', titulo: 'Do validado ao entregável' },
	{ numero: 11, parte: 4, status: 'planejado', slug: 'design-dentro-da-entrega', titulo: 'Design dentro da entrega' },
	{ numero: 12, parte: 4, status: 'planejado', slug: 'medir-e-fechar-o-ciclo', titulo: 'Medir e fechar o ciclo' },
	{ numero: 13, parte: 5, status: 'planejado', slug: 'muitos-times-muitos-papeis', titulo: 'Muitos times, muitos papéis' },
	{ numero: 14, parte: 5, status: 'planejado', slug: 'frameworks-de-escala', titulo: 'Frameworks de escala' },
	{ numero: 15, parte: 5, status: 'planejado', slug: 'ambientes-regulados', titulo: 'Ambientes regulados e de alta complexidade' },
	{ numero: 16, parte: 5, status: 'planejado', slug: 'ux-em-escala', titulo: 'UX em escala' },
	{ numero: 17, parte: 6, status: 'planejado', slug: 'comecando-aos-poucos', titulo: 'Começando aos poucos' },
];

export const apendices: Apendice[] = [
	{ letra: 'A', status: 'planejado', slug: 'glossario', titulo: 'Glossário' },
	{ letra: 'B', status: 'planejado', slug: 'guia-por-papel', titulo: 'Guia por papel' },
	{ letra: 'C', status: 'planejado', slug: 'exercicios-e-modelos', titulo: 'Exercícios e modelos' },
	{ letra: 'D', status: 'planejado', slug: 'referencias', titulo: 'Referências' },
];

export const publicado = (item: { status: Status }) => item.status !== 'planejado';

/** Menu lateral do Starlight: só o que não está planejado. */
export function gerarSidebar() {
	const grupos = partes
		.map((parte) => ({
			label: `Parte ${parte.numero}. ${parte.titulo}`,
			items: capitulos
				.filter((c) => c.parte === parte.numero && publicado(c))
				.map((c) => ({ slug: c.slug, label: `${c.numero}. ${c.titulo}` })),
		}))
		.filter((grupo) => grupo.items.length > 0);

	const apendicesPublicados = apendices
		.filter(publicado)
		.map((a) => ({ slug: a.slug, label: `${a.letra}. ${a.titulo}` }));

	return [
		{ slug: 'introducao' },
		...grupos,
		...(apendicesPublicados.length > 0 ? [{ label: 'Apêndices', items: apendicesPublicados }] : []),
		{
			label: 'Sobre o livro',
			items: [{ slug: 'roteiro' }, { slug: 'como-contribuir' }],
		},
	];
}
