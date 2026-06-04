import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const evidenceStatus = z.enum([
  'verificada',
  'validada_usuario',
  'pendiente',
  'no_publicable',
]);

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    venue: z.string().optional(),
    doi: z.string().optional(),
    url: z.string().url().optional(),
    area: z.string(),
    evidenceStatus,
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    area: z.string(),
    status: z.string(),
    evidenceStatus,
    summary: z.string(),
  }),
});

const software = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/software' }),
  schema: z.object({
    title: z.string(),
    registration: z.string().optional(),
    year: z.number().optional(),
    type: z.string(),
    evidenceStatus,
    summary: z.string(),
  }),
});

export const collections = {
  publications,
  projects,
  software,
};
