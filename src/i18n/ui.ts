import type { Lang } from '../site.config';

// Stringhe dell'interfaccia, tradotte. Per aggiungere una voce, mettila
// in entrambe le lingue con la stessa chiave.
export const ui = {
  it: {
    'nav.home': 'Home',
    'nav.writing': 'Scritti',
    'nav.projects': 'Progetti',
    'nav.about': 'Chi sono',
    'home.latestWriting': 'Ultimi scritti',
    'home.featuredProjects': 'Progetti in evidenza',
    'home.viewAll': 'Vedi tutti',
    'contact.title': 'Contatti',
    'contact.line': 'Resto a disposizione per un confronto.',
    'writing.title': 'Scritti',
    'writing.intro': 'Pensieri e commenti su articoli che leggo.',
    'writing.empty': 'Non ho ancora pubblicato nulla. Torna presto.',
    'writing.readMore': 'Leggi',
    'projects.title': 'Progetti',
    'projects.intro': 'Cose che ho costruito o su cui sto lavorando.',
    'projects.empty': 'Nessun progetto pubblicato per ora.',
    'projects.repo': 'Codice',
    'projects.live': 'Leggi',
    'projects.source': 'Fonte',
    'about.title': 'Chi sono',
    'type.thought': 'Pensiero',
    'type.commentary': 'Commento',
    'commentary.on': 'A proposito di',
    'backTo.writing': 'Tutti gli scritti',
    'backTo.projects': 'Tutti i progetti',
    'footer.builtWith': 'Costruito con Astro.',
    'lang.switch': 'EN',
    'lang.switchLabel': 'English',
  },
  en: {
    'nav.home': 'Home',
    'nav.writing': 'Writing',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'home.latestWriting': 'Latest writing',
    'home.featuredProjects': 'Featured projects',
    'home.viewAll': 'View all',
    'contact.title': 'Contact',
    'contact.line': 'I remain available for a conversation.',
    'writing.title': 'Writing',
    'writing.intro': 'Thoughts and commentary on articles I read.',
    'writing.empty': 'Nothing published yet. Check back soon.',
    'writing.readMore': 'Read',
    'projects.title': 'Projects',
    'projects.intro': 'Things I have built or am working on.',
    'projects.empty': 'No projects published yet.',
    'projects.repo': 'Code',
    'projects.live': 'Read',
    'projects.source': 'Source',
    'about.title': 'About',
    'type.thought': 'Thought',
    'type.commentary': 'Commentary',
    'commentary.on': 'On',
    'backTo.writing': 'All writing',
    'backTo.projects': 'All projects',
    'footer.builtWith': 'Built with Astro.',
    'lang.switch': 'IT',
    'lang.switchLabel': 'Italiano',
  },
} as const;

export function t(lang: Lang) {
  return (key: keyof (typeof ui)['it']) => ui[lang][key];
}

// Prefisso URL per lingua: italiano alla radice, inglese sotto /en
export function localePath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+/, '');
  const base = lang === 'en' ? '/en' : '';
  return `${base}/${clean}`.replace(/\/+$/, '') || '/';
}
