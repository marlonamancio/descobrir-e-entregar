// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import { gerarSidebar } from './src/data/sumario.ts';
import { conferirSumario } from './src/integrations/conferir-sumario.ts';

const REPOSITORIO = 'https://github.com/marlonamancio/descobrir-e-entregar';

export default defineConfig({
	site: 'https://descobrir-e-entregar.com.br',
	integrations: [
		conferirSumario(),
		starlight({
			title: 'Descoberta e Entrega Contínuas',
			description: 'Um guia para equipes de produtos. Livro aberto e colaborativo, em construção.',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Português', lang: 'pt-BR' },
			},
			favicon: '/favicon.svg',
			social: [{ icon: 'github', label: 'GitHub', href: REPOSITORIO }],
			editLink: {
				baseUrl: `${REPOSITORIO}/edit/main/`,
			},
			lastUpdated: true,
			sidebar: gerarSidebar(),
			customCss: ['./src/styles/tema.css'],
			components: {
				Banner: './src/components/Banner.astro',
				PageTitle: './src/components/PageTitle.astro',
				Footer: './src/components/Footer.astro',
			},
			plugins: [starlightLinksValidator()],
		}),
	],
});
