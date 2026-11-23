import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { STATUS } from './data/sumario';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				/** Número do capítulo (1 a 17). Só em capítulos. */
				capitulo: z.number().int().positive().optional(),
				/** Número da parte (1 a 6). Só em capítulos. */
				parte: z.number().int().positive().optional(),
				/** Estágio do texto; aparece como selo no título e no Roteiro. */
				status: z.enum(STATUS).optional(),
				/** Nomes de usuário no GitHub de quem contribuiu com a página. */
				colaboradores: z.array(z.string()).optional(),
			}),
		}),
	}),
};
