import type { Locale, RouteKey } from './locales';
import { localizedRoutes } from './routes';

export const navLabels: Record<Locale, Record<'home' | 'about' | 'research' | 'publications' | 'projects' | 'software' | 'cv' | 'contact', string>> = {
  es: {
    home: 'Inicio',
    about: 'Sobre mí',
    research: 'Investigación',
    publications: 'Publicaciones',
    projects: 'Proyectos',
    software: 'Software',
    cv: 'CV',
    contact: 'Contacto',
  },
  en: {
    home: 'Home',
    about: 'About',
    research: 'Research',
    publications: 'Publications',
    projects: 'Projects',
    software: 'Software',
    cv: 'CV',
    contact: 'Contact',
  },
  nl: {
    home: 'Home',
    about: 'Over mij',
    research: 'Onderzoek',
    publications: 'Publicaties',
    projects: 'Projecten',
    software: 'Software',
    cv: 'CV',
    contact: 'Contact',
  },
};

export const footerCopy: Record<Locale, string> = {
  es: 'Portafolio profesional multilingüe en construcción. Español es la versión editorial base; English y Nederlands se publican de forma gradual con revisión humana y validación final.',
  en: 'Multilingual professional portfolio under development. Spanish is the editorial source version; English and Dutch are being published gradually after human review and validation.',
  nl: 'Meertalig professioneel portfolio in ontwikkeling. Spaans is de redactionele basisversie; Engels en Nederlands worden geleidelijk gepubliceerd na menselijke controle en validatie.',
};

export const getNavigationForLocale = (locale: Locale) =>
  (['home', 'about', 'research', 'publications', 'projects', 'software', 'cv', 'contact'] as const).map((key) => ({
    label: navLabels[locale][key],
    href: localizedRoutes[key as RouteKey][locale],
  }));

export const languageSelectorLabels: Record<Locale, string> = {
  es: 'Seleccionar idioma',
  en: 'Select language',
  nl: 'Taal selecteren',
};

export const preparationCopy: Record<Locale, {
  badge: string;
  statusTitle: string;
  statusText: string;
  spanishButton: string;
  homeButton: string;
}> = {
  es: {
    badge: 'Versión base',
    statusTitle: 'Contenido disponible en español',
    statusText: 'Esta es la versión editorial base del portafolio. Las versiones en inglés y neerlandés se publicarán con revisión humana para mantener precisión académica.',
    spanishButton: 'Ver versión española',
    homeButton: 'Ir al inicio',
  },
  en: {
    badge: 'English version',
    statusTitle: 'English version in preparation',
    statusText: 'This page is part of the multilingual structure. The final English content will be reviewed against the academic CV and the verified evidence before publication.',
    spanishButton: 'Open Spanish source page',
    homeButton: 'Go to home',
  },
  nl: {
    badge: 'Nederlandse versie',
    statusTitle: 'Nederlandse versie in voorbereiding',
    statusText: 'Deze pagina maakt deel uit van de meertalige structuur. De definitieve Nederlandse inhoud wordt gecontroleerd op basis van het academische CV en de gevalideerde bronnen.',
    spanishButton: 'Open Spaanse bronpagina',
    homeButton: 'Naar startpagina',
  },
};
