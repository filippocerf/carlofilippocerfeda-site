// =====================================================================
//  I TUOI DATI — modifica solo questo file per aggiornare le info di base.
//  Tutto ciò che vedi tra virgolette lo puoi cambiare liberamente.
// =====================================================================

export const site = {
  // Nome che appare nell'header e nei titoli delle pagine
  name: 'Carlo Filippo Cerfeda',

  // Iniziali (usate come etichetta accessibile del logo)
  initials: 'CFC',

  // Email di contatto (mostrata nel footer e nella pagina About)
  email: 'cfcerfeda@gmail.com',

  // Anno di partenza (usato nel footer: © 2024–oggi)
  startYear: 2024,

  // Frase-guida per lingua (compare sotto il nome in home)
  tagline: {
    it: 'Porto l’intelligenza artificiale dentro il lavoro legale.',
    en: 'I bring artificial intelligence into legal work.',
  },

  // Ruolo / posizione attuale (breve)
  role: {
    it: 'AI & Legal Innovation Officer',
    en: 'AI & Legal Innovation Officer',
  },

  // Bio breve per la home (2–3 frasi)
  bioShort: {
    it: 'Giurista (110/110 e lode) e praticante avvocato, nel team Innovation di Linklaters. Appassionato di legal tech: automazione documentale, workflow digitali e AI generativa applicata al lavoro legale, con un occhio a privacy e compliance.',
    en: 'Law graduate (110/110 cum laude) and trainee lawyer in Linklaters’ Innovation team. Passionate about legal tech: document automation, digital workflows, and generative AI applied to legal work, with an eye on privacy and compliance.',
  },

  // Link ai profili. Lascia stringa vuota '' per nascondere una voce.
  links: {
    linkedin: 'https://www.linkedin.com/in/carlofilippocerfeda',
    github: '', // vuoto = nascosto (aggiungilo se un giorno ti servirà)
    x: '', // vuoto = nascosto
    email: 'mailto:cfcerfeda@gmail.com',
  },
};

export type Lang = 'it' | 'en';
