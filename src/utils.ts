import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './site.config';

const isProd = import.meta.env.PROD;

// Formatta una data secondo la lingua (es. "26 agosto 2026" / "August 26, 2026")
export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'it' ? 'it-IT' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

// Rimuove il prefisso di lingua/cartella dallo slug del file,
// così "primo-pensiero" resta "primo-pensiero" a prescindere da come nomini i file.
export function baseSlug(slug: string): string {
  return slug.replace(/^(it|en)\//, '').replace(/\.(it|en)$/, '');
}

// Scritti di una lingua, ordinati dal più recente, senza bozze in produzione.
export async function getWriting(lang: Lang) {
  const all = await getCollection('writing', (e) => e.data.lang === lang && (!isProd || !e.data.draft));
  return all.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

// Progetti di una lingua: prima i "featured", poi per ordine, poi per data.
export async function getProjects(lang: Lang) {
  const all = await getCollection('projects', (e) => e.data.lang === lang && (!isProd || !e.data.draft));
  return all.sort((a, b) => {
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    if (a.data.order !== b.data.order) return a.data.order - b.data.order;
    return b.data.pubDate.getTime() - a.data.pubDate.getTime();
  });
}

export type WritingEntry = CollectionEntry<'writing'>;
export type ProjectEntry = CollectionEntry<'projects'>;
