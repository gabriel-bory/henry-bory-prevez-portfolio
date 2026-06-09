import type { Locale, RouteKey } from './locales';
import { localizedRoutes } from './routes';

export const navLabels: Record<Locale, Record<'home' | 'about' | 'research' | 'publications' | 'projects' | 'software' | 'cv' | 'contact', string>> = {
  "es": {
    "home": "Inicio",
    "about": "Sobre mí",
    "research": "Investigación",
    "publications": "Publicaciones",
    "projects": "Proyectos",
    "software": "Software",
    "cv": "CV",
    "contact": "Contacto"
  },
  "en": {
    "home": "Home",
    "about": "About",
    "research": "Research",
    "publications": "Publications",
    "projects": "Projects",
    "software": "Software",
    "cv": "CV",
    "contact": "Contact"
  },
  "nl": {
    "home": "Home",
    "about": "Over mij",
    "research": "Onderzoek",
    "publications": "Publicaties",
    "projects": "Projecten",
    "software": "Software",
    "cv": "CV",
    "contact": "Contact"
  },
  "pt": {
    "home": "Início",
    "about": "Sobre",
    "research": "Investigação",
    "publications": "Publicações",
    "projects": "Projetos",
    "software": "Software",
    "cv": "CV",
    "contact": "Contato"
  },
  "fr": {
    "home": "Accueil",
    "about": "Profil",
    "research": "Recherche",
    "publications": "Publications",
    "projects": "Projets",
    "software": "Logiciels",
    "cv": "CV",
    "contact": "Contact"
  },
  "de": {
    "home": "Start",
    "about": "Profil",
    "research": "Forschung",
    "publications": "Publikationen",
    "projects": "Projekte",
    "software": "Software",
    "cv": "Lebenslauf",
    "contact": "Kontakt"
  },
  "it": {
    "home": "Home",
    "about": "Profilo",
    "research": "Ricerca",
    "publications": "Pubblicazioni",
    "projects": "Progetti",
    "software": "Software",
    "cv": "CV",
    "contact": "Contatto"
  }
};

export const footerCopy: Record<Locale, string> = {
  "es": "Portafolio profesional multilingüe. Español es la fuente editorial principal; las demás versiones se publican como traducciones funcionales revisables para difusión académica internacional.",
  "en": "Multilingual professional portfolio. Spanish is the editorial source; the other versions are published as reviewable functional translations for international academic visibility.",
  "nl": "Meertalig professioneel portfolio. Spaans is de redactionele bron; de andere versies zijn controleerbare functionele vertalingen voor internationale academische zichtbaarheid.",
  "pt": "Portfólio profissional multilíngue. O espanhol é a fonte editorial; as demais versões são traduções funcionais revisáveis para visibilidade acadêmica internacional.",
  "fr": "Portfolio professionnel multilingue. L’espagnol est la source éditoriale; les autres versions sont des traductions fonctionnelles révisables pour la visibilité académique internationale.",
  "de": "Mehrsprachiges professionelles Portfolio. Spanisch ist die redaktionelle Quelle; die weiteren Versionen sind überprüfbare funktionale Übersetzungen für internationale akademische Sichtbarkeit.",
  "it": "Portfolio professionale multilingue. Lo spagnolo è la fonte editoriale; le altre versioni sono traduzioni funzionali revisionabili per la visibilità accademica internazionale."
};

export const getNavigationForLocale = (locale: Locale) =>
  (['home', 'about', 'research', 'publications', 'projects', 'software', 'cv', 'contact'] as const).map((key) => ({
    label: navLabels[locale][key],
    href: localizedRoutes[key as RouteKey][locale],
  }));

export const languageSelectorLabels: Record<Locale, string> = {
  "es": "Seleccionar idioma",
  "en": "Select language",
  "nl": "Taal selecteren",
  "pt": "Selecionar idioma",
  "fr": "Choisir la langue",
  "de": "Sprache wählen",
  "it": "Seleziona lingua"
};


export const preparationCopy = {
  es: {
    badge: 'Versión base',
    statusTitle: 'Contenido disponible en español',
    statusText:
      'Esta es la versión editorial base del portafolio. Las versiones multilingües se publican de forma progresiva con revisión humana para mantener precisión académica.',
    spanishButton: 'Ver versión española',
    homeButton: 'Ir al inicio',
  },
  en: {
    badge: 'English version',
    statusTitle: 'English version available',
    statusText:
      'This page is part of the multilingual structure. The English content and downloadable CVs are being expanded and reviewed for international academic use.',
    spanishButton: 'Open Spanish source page',
    homeButton: 'Go to home',
  },
  nl: {
    badge: 'Nederlandse versie',
    statusTitle: 'Nederlandse versie beschikbaar in voorbereiding',
    statusText:
      'Deze pagina maakt deel uit van de meertalige structuur. De Nederlandse inhoud en downloadbare CV’s worden geleidelijk gecontroleerd en uitgebreid.',
    spanishButton: 'Open Spaanse bronpagina',
    homeButton: 'Naar startpagina',
  },
  pt: {
    badge: 'Versão em português',
    statusTitle: 'Versão em português em preparação',
    statusText:
      'Esta página faz parte da estrutura multilíngue. O conteúdo em português e os currículos para download serão revisados antes da publicação final.',
    spanishButton: 'Abrir versão espanhola',
    homeButton: 'Ir ao início',
  },
  fr: {
    badge: 'Version française',
    statusTitle: 'Version française en préparation',
    statusText:
      'Cette page fait partie de la structure multilingue. Le contenu français et les CV téléchargeables seront révisés avant publication finale.',
    spanishButton: 'Ouvrir la version espagnole',
    homeButton: 'Aller à l’accueil',
  },
  de: {
    badge: 'Deutsche Version',
    statusTitle: 'Deutsche Version in Vorbereitung',
    statusText:
      'Diese Seite ist Teil der mehrsprachigen Struktur. Die deutschen Inhalte und herunterladbaren Lebensläufe werden vor der endgültigen Veröffentlichung geprüft.',
    spanishButton: 'Spanische Version öffnen',
    homeButton: 'Zur Startseite',
  },
  it: {
    badge: 'Versione italiana',
    statusTitle: 'Versione italiana in preparazione',
    statusText:
      'Questa pagina fa parte della struttura multilingue. I contenuti italiani e i CV scaricabili saranno revisionati prima della pubblicazione finale.',
    spanishButton: 'Apri la versione spagnola',
    homeButton: 'Vai alla home',
  },
} as const;
