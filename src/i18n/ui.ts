import type { Locale, RouteKey } from './locales';
import { localizedRoutes } from './routes';

type NavKey = 'home' | 'about' | 'research' | 'publications' | 'projects' | 'software' | 'cv' | 'contact';

export const navLabels: Record<Locale, Record<NavKey, string>> = {
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
  pt: {
    home: 'Início',
    about: 'Sobre',
    research: 'Pesquisa',
    publications: 'Publicações',
    projects: 'Projetos',
    software: 'Software',
    cv: 'CV',
    contact: 'Contato',
  },
  fr: {
    home: 'Accueil',
    about: 'À propos',
    research: 'Recherche',
    publications: 'Publications',
    projects: 'Projets',
    software: 'Software',
    cv: 'CV',
    contact: 'Contact',
  },
  de: {
    home: 'Start',
    about: 'Profil',
    research: 'Forschung',
    publications: 'Publikationen',
    projects: 'Projekte',
    software: 'Software',
    cv: 'CV',
    contact: 'Kontakt',
  },
  it: {
    home: 'Home',
    about: 'Profilo',
    research: 'Ricerca',
    publications: 'Pubblicazioni',
    projects: 'Progetti',
    software: 'Software',
    cv: 'CV',
    contact: 'Contatto',
  },
};

export const footerCopy: Record<Locale, string> = {
  es: 'Portafolio profesional multilingüe en construcción. Español es la versión editorial base; las demás lenguas se publican gradualmente con revisión humana y validación final.',
  en: 'Multilingual professional portfolio under development. Spanish is the editorial source version; other languages are published gradually after human review and validation.',
  nl: 'Meertalig professioneel portfolio in ontwikkeling. Spaans is de redactionele basisversie; andere talen worden geleidelijk gepubliceerd na menselijke controle en validatie.',
  pt: 'Portfólio profissional multilíngue em desenvolvimento. O espanhol é a versão editorial de base; os demais idiomas serão publicados gradualmente após revisão humana.',
  fr: 'Portfolio professionnel multilingue en cours de développement. L’espagnol est la version éditoriale de base; les autres langues seront publiées progressivement après révision humaine.',
  de: 'Mehrsprachiges professionelles Portfolio im Aufbau. Spanisch ist die redaktionelle Ausgangsversion; weitere Sprachen werden schrittweise nach menschlicher Prüfung veröffentlicht.',
  it: 'Portfolio professionale multilingue in sviluppo. Lo spagnolo è la versione editoriale di base; le altre lingue saranno pubblicate gradualmente dopo revisione umana.',
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
  pt: 'Selecionar idioma',
  fr: 'Choisir la langue',
  de: 'Sprache wählen',
  it: 'Seleziona lingua',
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
    statusText: 'Esta es la versión editorial base del portafolio. Las versiones internacionales se publican por fases con revisión humana para mantener precisión académica.',
    spanishButton: 'Ver versión española',
    homeButton: 'Ir al inicio',
  },
  en: {
    badge: 'English version',
    statusTitle: 'English version under review',
    statusText: 'This page is part of the multilingual structure. The final English content is reviewed against the academic CV and verified evidence before publication.',
    spanishButton: 'Open Spanish source page',
    homeButton: 'Go to home',
  },
  nl: {
    badge: 'Nederlandse versie',
    statusTitle: 'Nederlandse versie in voorbereiding',
    statusText: 'Deze pagina maakt deel uit van de meertalige structuur. De definitieve Nederlandse inhoud wordt gecontroleerd op basis van het academische CV en gevalideerde bronnen.',
    spanishButton: 'Open Spaanse bronpagina',
    homeButton: 'Naar startpagina',
  },
  pt: {
    badge: 'Versão em português',
    statusTitle: 'Versão em português em preparação',
    statusText: 'Esta página faz parte da estrutura multilíngue. O conteúdo final em português será revisado com base no CV acadêmico e nas evidências verificadas.',
    spanishButton: 'Abrir página fonte em espanhol',
    homeButton: 'Ir para o início',
  },
  fr: {
    badge: 'Version française',
    statusTitle: 'Version française en préparation',
    statusText: 'Cette page fait partie de la structure multilingue. Le contenu final en français sera révisé à partir du CV académique et des preuves vérifiées.',
    spanishButton: 'Ouvrir la page source en espagnol',
    homeButton: 'Aller à l’accueil',
  },
  de: {
    badge: 'Deutsche Version',
    statusTitle: 'Deutsche Version in Vorbereitung',
    statusText: 'Diese Seite ist Teil der mehrsprachigen Struktur. Die endgültigen deutschen Inhalte werden anhand des akademischen Lebenslaufs und geprüfter Nachweise validiert.',
    spanishButton: 'Spanische Quellseite öffnen',
    homeButton: 'Zur Startseite',
  },
  it: {
    badge: 'Versione italiana',
    statusTitle: 'Versione italiana in preparazione',
    statusText: 'Questa pagina fa parte della struttura multilingue. Il contenuto finale in italiano sarà revisionato sulla base del CV accademico e delle evidenze verificate.',
    spanishButton: 'Apri la pagina fonte in spagnolo',
    homeButton: 'Vai alla home',
  },
};
