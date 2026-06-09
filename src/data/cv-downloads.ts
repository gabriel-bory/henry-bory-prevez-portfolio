import type { Locale } from '../i18n/locales';

export interface CvDownloadItem { title: string; description: string; pdf?: string; docx?: string; status: string; }
export interface CvDownloadGroup { locale: Locale; language: string; items: CvDownloadItem[]; }

export const cvDownloads: CvDownloadGroup[] = [
  {
    "locale": "es",
    "language": "Español",
    "items": [
      {
        "title": "CV académico completo",
        "description": "Versión amplia para evaluación académica, publicaciones, docencia, proyectos, software y colaboración científica.",
        "pdf": "files/cv/es/cv-academic-henry-bory-prevez-es.pdf",
        "docx": "files/cv/es/cv-academic-henry-bory-prevez-es.docx",
        "status": "Disponible"
      },
      {
        "title": "CV ejecutivo internacional",
        "description": "Versión sintética para cooperación internacional, universidades y proyectos tecnológicos. Incluye foto oficial de CV.",
        "pdf": "files/cv/es/cv-executive-henry-bory-prevez-es.pdf",
        "docx": "files/cv/es/cv-executive-henry-bory-prevez-es.docx",
        "status": "Disponible"
      },
      {
        "title": "CV ATS",
        "description": "Versión limpia sin foto, sin columnas complejas y optimizada para sistemas automáticos.",
        "pdf": "files/cv/es/cv-ats-henry-bory-prevez-es.pdf",
        "docx": "files/cv/es/cv-ats-henry-bory-prevez-es.docx",
        "status": "Disponible"
      },
      {
        "title": "CV de una página",
        "description": "Resumen visual para eventos, QR, networking académico y presentación rápida. Incluye foto oficial de CV.",
        "pdf": "files/cv/es/cv-one-page-henry-bory-prevez-es.pdf",
        "docx": "files/cv/es/cv-one-page-henry-bory-prevez-es.docx",
        "status": "Disponible"
      },
      {
        "title": "Dossier profesional",
        "description": "Documento institucional con trayectoria, investigación, publicaciones, software, proyectos y evidencias. Incluye foto oficial de CV.",
        "pdf": "files/dossier/es/dossier-professional-henry-bory-prevez-es.pdf",
        "docx": "files/dossier/es/dossier-professional-henry-bory-prevez-es.docx",
        "status": "Disponible"
      }
    ]
  },
  {
    "locale": "en",
    "language": "English",
    "items": [
      {
        "title": "Full academic CV",
        "description": "Long-form version for academic review, publications, teaching, projects, software and scientific collaboration.",
        "pdf": "files/cv/en/cv-academic-henry-bory-prevez-en.pdf",
        "docx": "files/cv/en/cv-academic-henry-bory-prevez-en.docx",
        "status": "Available"
      },
      {
        "title": "International executive CV",
        "description": "Concise version for international cooperation, universities and technology projects. Includes the official CV photo.",
        "pdf": "files/cv/en/cv-executive-henry-bory-prevez-en.pdf",
        "docx": "files/cv/en/cv-executive-henry-bory-prevez-en.docx",
        "status": "Available"
      },
      {
        "title": "ATS CV",
        "description": "Plain version without photo or complex columns, optimized for automated systems.",
        "pdf": "files/cv/en/cv-ats-henry-bory-prevez-en.pdf",
        "docx": "files/cv/en/cv-ats-henry-bory-prevez-en.docx",
        "status": "Available"
      },
      {
        "title": "One-page CV",
        "description": "Visual summary for events, QR, academic networking and quick presentation. Includes the official CV photo.",
        "pdf": "files/cv/en/cv-one-page-henry-bory-prevez-en.pdf",
        "docx": "files/cv/en/cv-one-page-henry-bory-prevez-en.docx",
        "status": "Available"
      },
      {
        "title": "Professional dossier",
        "description": "Institutional document covering trajectory, research, publications, software, projects and evidence. Includes the official CV photo.",
        "pdf": "files/dossier/en/dossier-professional-henry-bory-prevez-en.pdf",
        "docx": "files/dossier/en/dossier-professional-henry-bory-prevez-en.docx",
        "status": "Available"
      }
    ]
  },
  {
    "locale": "nl",
    "language": "Nederlands",
    "items": [
      {
        "title": "Volledig academisch CV",
        "description": "Uitgebreide versie voor academische beoordeling, publicaties, onderwijs, projecten, software en wetenschappelijke samenwerking.",
        "pdf": "files/cv/nl/cv-academic-henry-bory-prevez-nl.pdf",
        "docx": "files/cv/nl/cv-academic-henry-bory-prevez-nl.docx",
        "status": "Beschikbaar"
      },
      {
        "title": "Internationaal executive CV",
        "description": "Beknopte versie voor internationale samenwerking, universiteiten en technologische projecten. Bevat de officiële CV-foto.",
        "pdf": "files/cv/nl/cv-executive-henry-bory-prevez-nl.pdf",
        "docx": "files/cv/nl/cv-executive-henry-bory-prevez-nl.docx",
        "status": "Beschikbaar"
      },
      {
        "title": "ATS-CV",
        "description": "Eenvoudige versie zonder foto of complexe kolommen, geoptimaliseerd voor automatische systemen.",
        "pdf": "files/cv/nl/cv-ats-henry-bory-prevez-nl.pdf",
        "docx": "files/cv/nl/cv-ats-henry-bory-prevez-nl.docx",
        "status": "Beschikbaar"
      },
      {
        "title": "Eénpagina-CV",
        "description": "Visuele samenvatting voor evenementen, QR, academisch netwerken en snelle presentatie. Bevat de officiële CV-foto.",
        "pdf": "files/cv/nl/cv-one-page-henry-bory-prevez-nl.pdf",
        "docx": "files/cv/nl/cv-one-page-henry-bory-prevez-nl.docx",
        "status": "Beschikbaar"
      },
      {
        "title": "Professioneel dossier",
        "description": "Institutioneel document over loopbaan, onderzoek, publicaties, software, projecten en bewijsmateriaal. Bevat de officiële CV-foto.",
        "pdf": "files/dossier/nl/dossier-professional-henry-bory-prevez-nl.pdf",
        "docx": "files/dossier/nl/dossier-professional-henry-bory-prevez-nl.docx",
        "status": "Beschikbaar"
      }
    ]
  },
  {
    "locale": "pt",
    "language": "Português",
    "items": [
      {
        "title": "CV acadêmico completo",
        "description": "Versão ampla para avaliação acadêmica, publicações, docência, projetos, software e colaboração científica.",
        "pdf": "files/cv/pt/cv-academic-henry-bory-prevez-pt.pdf",
        "docx": "files/cv/pt/cv-academic-henry-bory-prevez-pt.docx",
        "status": "Disponível"
      },
      {
        "title": "CV executivo internacional",
        "description": "Versão sintética para cooperação internacional, universidades e projetos tecnológicos. Inclui foto oficial do CV.",
        "pdf": "files/cv/pt/cv-executive-henry-bory-prevez-pt.pdf",
        "docx": "files/cv/pt/cv-executive-henry-bory-prevez-pt.docx",
        "status": "Disponível"
      },
      {
        "title": "CV ATS",
        "description": "Versão limpa sem foto nem colunas complexas, otimizada para sistemas automáticos.",
        "pdf": "files/cv/pt/cv-ats-henry-bory-prevez-pt.pdf",
        "docx": "files/cv/pt/cv-ats-henry-bory-prevez-pt.docx",
        "status": "Disponível"
      },
      {
        "title": "CV de uma página",
        "description": "Resumo visual para eventos, QR, networking acadêmico e apresentação rápida. Inclui foto oficial do CV.",
        "pdf": "files/cv/pt/cv-one-page-henry-bory-prevez-pt.pdf",
        "docx": "files/cv/pt/cv-one-page-henry-bory-prevez-pt.docx",
        "status": "Disponível"
      },
      {
        "title": "Dossiê profissional",
        "description": "Documento institucional com trajetória, pesquisa, publicações, software, projetos e evidências. Inclui foto oficial do CV.",
        "pdf": "files/dossier/pt/dossier-professional-henry-bory-prevez-pt.pdf",
        "docx": "files/dossier/pt/dossier-professional-henry-bory-prevez-pt.docx",
        "status": "Disponível"
      }
    ]
  },
  {
    "locale": "fr",
    "language": "Français",
    "items": [
      {
        "title": "CV académique complet",
        "description": "Version détaillée pour évaluation académique, publications, enseignement, projets, logiciels et collaboration scientifique.",
        "pdf": "files/cv/fr/cv-academic-henry-bory-prevez-fr.pdf",
        "docx": "files/cv/fr/cv-academic-henry-bory-prevez-fr.docx",
        "status": "Disponible"
      },
      {
        "title": "CV exécutif international",
        "description": "Version synthétique pour coopération internationale, universités et projets technologiques. Inclut la photo officielle du CV.",
        "pdf": "files/cv/fr/cv-executive-henry-bory-prevez-fr.pdf",
        "docx": "files/cv/fr/cv-executive-henry-bory-prevez-fr.docx",
        "status": "Disponible"
      },
      {
        "title": "CV ATS",
        "description": "Version simple sans photo ni colonnes complexes, optimisée pour les systèmes automatisés.",
        "pdf": "files/cv/fr/cv-ats-henry-bory-prevez-fr.pdf",
        "docx": "files/cv/fr/cv-ats-henry-bory-prevez-fr.docx",
        "status": "Disponible"
      },
      {
        "title": "CV d’une page",
        "description": "Résumé visuel pour événements, QR, réseautage académique et présentation rapide. Inclut la photo officielle du CV.",
        "pdf": "files/cv/fr/cv-one-page-henry-bory-prevez-fr.pdf",
        "docx": "files/cv/fr/cv-one-page-henry-bory-prevez-fr.docx",
        "status": "Disponible"
      },
      {
        "title": "Dossier professionnel",
        "description": "Document institutionnel avec parcours, recherche, publications, logiciels, projets et éléments probants. Inclut la photo officielle du CV.",
        "pdf": "files/dossier/fr/dossier-professional-henry-bory-prevez-fr.pdf",
        "docx": "files/dossier/fr/dossier-professional-henry-bory-prevez-fr.docx",
        "status": "Disponible"
      }
    ]
  },
  {
    "locale": "de",
    "language": "Deutsch",
    "items": [
      {
        "title": "Vollständiger akademischer Lebenslauf",
        "description": "Ausführliche Version für akademische Bewertung, Publikationen, Lehre, Projekte, Software und wissenschaftliche Zusammenarbeit.",
        "pdf": "files/cv/de/cv-academic-henry-bory-prevez-de.pdf",
        "docx": "files/cv/de/cv-academic-henry-bory-prevez-de.docx",
        "status": "Verfügbar"
      },
      {
        "title": "Internationaler Executive CV",
        "description": "Kompakte Version für internationale Zusammenarbeit, Universitäten und Technologieprojekte. Enthält das offizielle CV-Foto.",
        "pdf": "files/cv/de/cv-executive-henry-bory-prevez-de.pdf",
        "docx": "files/cv/de/cv-executive-henry-bory-prevez-de.docx",
        "status": "Verfügbar"
      },
      {
        "title": "ATS-Lebenslauf",
        "description": "Einfache Version ohne Foto und komplexe Spalten, optimiert für automatische Systeme.",
        "pdf": "files/cv/de/cv-ats-henry-bory-prevez-de.pdf",
        "docx": "files/cv/de/cv-ats-henry-bory-prevez-de.docx",
        "status": "Verfügbar"
      },
      {
        "title": "Einseitiger Lebenslauf",
        "description": "Visuelle Zusammenfassung für Veranstaltungen, QR, akademisches Networking und Kurzpräsentation. Enthält das offizielle CV-Foto.",
        "pdf": "files/cv/de/cv-one-page-henry-bory-prevez-de.pdf",
        "docx": "files/cv/de/cv-one-page-henry-bory-prevez-de.docx",
        "status": "Verfügbar"
      },
      {
        "title": "Professionelles Dossier",
        "description": "Institutionelles Dokument zu Werdegang, Forschung, Publikationen, Software, Projekten und Nachweisen. Enthält das offizielle CV-Foto.",
        "pdf": "files/dossier/de/dossier-professional-henry-bory-prevez-de.pdf",
        "docx": "files/dossier/de/dossier-professional-henry-bory-prevez-de.docx",
        "status": "Verfügbar"
      }
    ]
  },
  {
    "locale": "it",
    "language": "Italiano",
    "items": [
      {
        "title": "CV accademico completo",
        "description": "Versione estesa per valutazione accademica, pubblicazioni, didattica, progetti, software e collaborazione scientifica.",
        "pdf": "files/cv/it/cv-academic-henry-bory-prevez-it.pdf",
        "docx": "files/cv/it/cv-academic-henry-bory-prevez-it.docx",
        "status": "Disponibile"
      },
      {
        "title": "CV executive internazionale",
        "description": "Versione sintetica per cooperazione internazionale, università e progetti tecnologici. Include la foto ufficiale del CV.",
        "pdf": "files/cv/it/cv-executive-henry-bory-prevez-it.pdf",
        "docx": "files/cv/it/cv-executive-henry-bory-prevez-it.docx",
        "status": "Disponibile"
      },
      {
        "title": "CV ATS",
        "description": "Versione pulita senza foto né colonne complesse, ottimizzata per sistemi automatici.",
        "pdf": "files/cv/it/cv-ats-henry-bory-prevez-it.pdf",
        "docx": "files/cv/it/cv-ats-henry-bory-prevez-it.docx",
        "status": "Disponibile"
      },
      {
        "title": "CV di una pagina",
        "description": "Sintesi visiva per eventi, QR, networking accademico e presentazione rapida. Include la foto ufficiale del CV.",
        "pdf": "files/cv/it/cv-one-page-henry-bory-prevez-it.pdf",
        "docx": "files/cv/it/cv-one-page-henry-bory-prevez-it.docx",
        "status": "Disponibile"
      },
      {
        "title": "Dossier professionale",
        "description": "Documento istituzionale con percorso, ricerca, pubblicazioni, software, progetti ed evidenze. Include la foto ufficiale del CV.",
        "pdf": "files/dossier/it/dossier-professional-henry-bory-prevez-it.pdf",
        "docx": "files/dossier/it/dossier-professional-henry-bory-prevez-it.docx",
        "status": "Disponibile"
      }
    ]
  }
];
