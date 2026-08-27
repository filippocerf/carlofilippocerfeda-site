# Il mio sito personale

Sito personale bilingue (IT/EN) costruito con [Astro](https://astro.build): progetti, pensieri e commenti ad articoli, in un posto solo.

## Comandi

Prima di tutto, una volta sola:

```bash
npm install
```

Poi, ogni volta che ci lavori:

| Comando           | Cosa fa                                        |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Avvia il sito in locale su http://localhost:4321 |
| `npm run build`   | Genera il sito statico nella cartella `dist/`  |
| `npm run preview` | Mostra il sito già buildato, come sarà online  |

> Nota: `node` è stato installato con Homebrew. Se un giorno il comando `node` non venisse trovato, assicurati che `/opt/homebrew/bin` sia nel tuo PATH.

## Dove metto le cose

### I miei dati di base

Nome, ruolo, bio breve, email e link social stanno tutti in **un solo file**:

```
src/site.config.ts
```

Il testo lungo di "Chi sono" sta invece in `src/components/views/About.astro`.

### Scrivere un pensiero o un commento

Crea un file `.md` dentro:

- `src/content/writing/it/` per l'italiano
- `src/content/writing/en/` per l'inglese

Copia uno degli esempi già presenti. In cima al file (il "frontmatter") imposti:

```yaml
---
title: Titolo dello scritto
description: Frase breve che appare nelle liste.
pubDate: 2026-08-26        # la data
lang: it                  # it oppure en
type: thought             # 'thought' = pensiero tuo, 'commentary' = commento a un articolo
tags: [ai, note]
# solo per i commenti:
sourceUrl: https://...    # link all'articolo commentato
sourceTitle: Titolo dell'articolo
draft: false              # metti true per tenerlo nascosto online
---
```

Sotto il frontmatter scrivi in **Markdown** normale (titoli con `##`, grassetto con `**`, elenchi con `-`, ecc.).

### Aggiungere un progetto

Stessa cosa, dentro `src/content/projects/it/` o `.../en/`. Frontmatter:

```yaml
---
title: Nome del progetto
description: Cosa fa, in una frase.
pubDate: 2026-08-24
lang: it
stack: [Python, LLM, FastAPI]   # tecnologie usate
status: active                  # active | completed | wip | archived
featured: true                  # true = compare anche in home
order: 1                        # ordine tra i progetti (più basso = più in alto)
repoUrl: https://github.com/... # link al codice (opzionale)
liveUrl: https://...            # link alla demo (opzionale)
---
```

## Pubblicare online

Il sito è statico: la cartella `dist/` (creata da `npm run build`) può stare ovunque.
Quando avrai scelto dove pubblicarlo, apri `astro.config.mjs` e imposta il campo `site`
con l'indirizzo finale (serve per SEO e link social). Poi si può collegare a
GitHub Pages, Vercel o Netlify — chiedimi pure e lo configuriamo insieme.
