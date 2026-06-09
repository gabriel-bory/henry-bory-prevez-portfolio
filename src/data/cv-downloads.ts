import type { Locale } from '../i18n/locales';

export type DownloadAvailability = 'ready' | 'source-ready' | 'in-review' | 'planned' | 'not-recommended';

export interface CvDownloadItem {
  title: string;
  description: string;
  pdf?: string;
  docx?: string;
  status: string;
  availability: DownloadAvailability;
}

export interface CvDownloadGroup {
  locale: Locale;
  language: string;
  nativeLanguage: string;
  availabilityNote: string;
  items: CvDownloadItem[];
}

const plannedInternationalItems = (localeName: string): CvDownloadItem[] => [
  {
    title: `CV ejecutivo internacional (${localeName})`,
    description: 'Versión ejecutiva internacional pendiente de traducción y revisión humana. Mantendrá foto oficial de CV cuando se publique.',
    pdf: '',
    docx: '',
    status: 'En preparación',
    availability: 'planned',
  },
  {
    title: `CV académico completo (${localeName})`,
    description: 'Versión académica larga pendiente de adaptación terminológica, revisión bibliográfica y validación de secciones académicas.',
    pdf: '',
    docx: '',
    status: 'En preparación',
    availability: 'planned',
  },
  {
    title: `CV ATS (${localeName})`,
    description: 'Versión limpia, sin foto ni diseño complejo, pendiente de revisión terminológica para sistemas automatizados.',
    pdf: '',
    docx: '',
    status: 'En preparación',
    availability: 'planned',
  },
  {
    title: `CV de una página (${localeName})`,
    description: 'Resumen breve para QR, eventos y presentación institucional, pendiente de traducción y ajuste de maquetación.',
    pdf: '',
    docx: '',
    status: 'En preparación',
    availability: 'planned',
  },
  {
    title: `Dossier profesional (${localeName})`,
    description: 'Documento narrativo institucional pendiente de traducción revisada, adaptación cultural y validación final.',
    pdf: '',
    docx: '',
    status: 'En preparación',
    availability: 'planned',
  },
];

export const cvDownloads: CvDownloadGroup[] = [
  {
    locale: 'es',
    language: 'Español',
    nativeLanguage: 'Español',
    availabilityNote: 'Versión fuente y base editorial del portafolio.',
    items: [
      {
        title: 'CV ejecutivo internacional',
        description: 'Versión ejecutiva para cooperación internacional, universidades y proyectos tecnológicos. Formato imprimible con foto profesional.',
        pdf: 'files/cv/es/cv-ejecutivo-internacional-henry-bory-prevez.pdf',
        docx: 'files/cv/es/cv-ejecutivo-internacional-henry-bory-prevez.docx',
        status: 'Disponible',
        availability: 'ready',
      },
      {
        title: 'CV académico completo',
        description: 'Versión amplia para evaluación académica, expedientes y colaboración científica.',
        pdf: 'files/cv/es/cv-academico-completo-henry-bory-prevez.pdf',
        docx: 'files/cv/es/cv-academico-completo-henry-bory-prevez.docx',
        status: 'Disponible',
        availability: 'ready',
      },
      {
        title: 'CV ATS',
        description: 'Versión simple, sin foto ni columnas, optimizada para sistemas automatizados.',
        pdf: 'files/cv/es/cv-ats-henry-bory-prevez.pdf',
        docx: 'files/cv/es/cv-ats-henry-bory-prevez.docx',
        status: 'Disponible',
        availability: 'ready',
      },
      {
        title: 'CV de una página',
        description: 'Versión breve para eventos, networking académico, QR y presentación rápida. Formato imprimible con foto oficial de CV.',
        pdf: 'files/cv/es/cv-resumen-una-pagina-henry-bory-prevez.pdf',
        docx: 'files/cv/es/cv-resumen-una-pagina-henry-bory-prevez.docx',
        status: 'Disponible',
        availability: 'ready',
      },
      {
        title: 'Dossier profesional',
        description: 'Documento institucional con trayectoria, líneas de investigación, proyectos, software y evidencias. Formato imprimible con foto oficial de CV.',
        pdf: 'files/dossier/es/dossier-profesional-henry-bory-prevez.pdf',
        docx: 'files/dossier/es/dossier-profesional-henry-bory-prevez.docx',
        status: 'Disponible',
        availability: 'ready',
      },
    ],
  },
  {
    locale: 'en',
    language: 'English',
    nativeLanguage: 'English',
    availabilityNote: 'Versión internacional prioritaria para cooperación académica, revisión institucional y difusión científica.',
    items: [
      {
        title: 'Executive CV',
        description: 'Reviewed executive version for international cooperation, academic networking and project presentation. Print-oriented version with official CV photo.',
        pdf: 'files/cv/en/cv-executive-henry-bory-prevez-en.pdf',
        docx: 'files/cv/en/cv-executive-henry-bory-prevez-en.docx',
        status: 'Available',
        availability: 'ready',
      },
      {
        title: 'Academic CV 2025',
        description: 'Source English academic CV provided for the portfolio evidence base.',
        pdf: 'files/cv/en/cv-academic-henry-bory-prevez-english-2025.pdf',
        docx: '',
        status: 'PDF available',
        availability: 'source-ready',
      },
      {
        title: 'ATS CV',
        description: 'Plain-format English version without photo, optimized for automated screening systems.',
        pdf: 'files/cv/en/cv-ats-henry-bory-prevez-en.pdf',
        docx: 'files/cv/en/cv-ats-henry-bory-prevez-en.docx',
        status: 'Available',
        availability: 'ready',
      },
      {
        title: 'One-page CV',
        description: 'Concise international profile for QR, conferences, institutional introductions and professional networking.',
        pdf: '',
        docx: '',
        status: 'In review',
        availability: 'in-review',
      },
      {
        title: 'Professional dossier',
        description: 'Narrative institutional document for research, projects, software and cooperation opportunities.',
        pdf: '',
        docx: '',
        status: 'In review',
        availability: 'in-review',
      },
    ],
  },
  {
    locale: 'nl',
    language: 'Nederlands',
    nativeLanguage: 'Nederlands',
    availabilityNote: 'Estructura preparada; traducción pendiente de revisión humana.',
    items: plannedInternationalItems('Nederlands'),
  },
  {
    locale: 'pt',
    language: 'Português',
    nativeLanguage: 'Português',
    availabilityNote: 'Estructura preparada para cooperación con Brasil, Portugal y redes iberoamericanas.',
    items: plannedInternationalItems('Português'),
  },
  {
    locale: 'fr',
    language: 'Français',
    nativeLanguage: 'Français',
    availabilityNote: 'Estructura preparada para cooperación francófona y movilidad académica internacional.',
    items: plannedInternationalItems('Français'),
  },
  {
    locale: 'de',
    language: 'Deutsch',
    nativeLanguage: 'Deutsch',
    availabilityNote: 'Estructura preparada para cooperación técnica y académica en países DACH.',
    items: plannedInternationalItems('Deutsch'),
  },
  {
    locale: 'it',
    language: 'Italiano',
    nativeLanguage: 'Italiano',
    availabilityNote: 'Estructura preparada para cooperación académica europea y difusión profesional.',
    items: plannedInternationalItems('Italiano'),
  },
];
