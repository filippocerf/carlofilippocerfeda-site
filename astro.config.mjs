import { defineConfig } from 'astro/config';

// Quando deciderai dove pubblicare, imposta qui il dominio finale.
// Esempi: 'https://carlofilippocerfeda.github.io' oppure 'https://tuodominio.com'
export default defineConfig({
  site: 'https://carlofilippocerfeda-site.vercel.app',
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: {
      prefixDefaultLocale: false, // italiano alla radice /, inglese sotto /en/
    },
  },
});
