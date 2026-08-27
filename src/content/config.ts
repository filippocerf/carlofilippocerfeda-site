import { defineCollection, z } from 'astro:content';

// Collezione "writing": pensieri e commenti ad articoli.
const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lang: z.enum(['it', 'en']),
    // 'thought' = pensiero tuo; 'commentary' = commento a un articolo esterno
    type: z.enum(['thought', 'commentary']).default('thought'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // Solo per i commenti: link e titolo dell'articolo commentato
    sourceUrl: z.string().url().optional(),
    sourceTitle: z.string().optional(),
  }),
});

// Collezione "projects": cose che costruisci.
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lang: z.enum(['it', 'en']),
    stack: z.array(z.string()).default([]),
    status: z.enum(['active', 'completed', 'archived', 'wip']).default('active'),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    repoUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing, projects };
