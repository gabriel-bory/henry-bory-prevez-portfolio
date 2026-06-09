import type { Locale } from '../i18n/locales';

export type LocalizedPageKey = 'home' | 'about' | 'research' | 'publications' | 'projects' | 'software' | 'cv' | 'contact' | 'teaching' | 'dossier';

export const localizedPages: Record<Locale, Record<LocalizedPageKey, { eyebrow: string; title: string; lead: string; summaryTitle: string; summary: string }>> = {
  "es": {
    "home": {
      "eyebrow": "Dr. en Ciencias · Profesor Titular · Universidad de Oriente",
      "title": "Henry Bory Prevez",
      "lead": "Profesor Titular y Doctor en Ciencias en Automática, con trabajo académico y tecnológico en control avanzado, electrónica de potencia, micro-hidroeléctricas, sistemas OTEC, energía undimotriz, software científico, laboratorios virtuales y modelado matemático aplicado.",
      "summaryTitle": "Visión general",
      "summary": "Trayectoria integrada en docencia universitaria, investigación aplicada, publicaciones científicas, registros de software y proyectos vinculados a energías renovables, simulación, biofísica computacional y formación de ingenieros."
    },
    "about": {
      "eyebrow": "Perfil académico",
      "title": "Sobre el Dr. Henry Bory Prevez",
      "lead": "Doctor en Ciencias en Automática y Profesor Titular de la Universidad de Oriente, con experiencia docente desde 2002 y producción científica relacionada con control, energía, simulación, software y modelado matemático.",
      "summaryTitle": "Trayectoria integrada",
      "summary": "Formación doctoral, docencia universitaria, competencias técnicas, proyectos internacionales y software académico registrado articulan un perfil científico orientado a la aplicación."
    },
    "research": {
      "eyebrow": "Investigación",
      "title": "Líneas de investigación",
      "lead": "Sus líneas conectan Automática, electrónica de potencia, micro-hidroeléctricas aisladas, OTEC, energía oceánica, software científico y biofísica computacional.",
      "summaryTitle": "Mapa científico",
      "summary": "El eje común es el modelado, control y simulación de sistemas complejos: desde regulación de frecuencia y convertidores hasta crecimiento tumoral y herramientas docentes."
    },
    "publications": {
      "eyebrow": "Producción científica",
      "title": "Publicaciones seleccionadas",
      "lead": "Catálogo curado de publicaciones vinculadas a control, electrónica de potencia, energías renovables, OTEC, COVID-19, software educativo y biofísica computacional.",
      "summaryTitle": "Aporte científico",
      "summary": "Las publicaciones muestran una evolución desde aplicaciones energéticas y convertidores hasta modelado interdisciplinario, laboratorios virtuales y herramientas computacionales."
    },
    "projects": {
      "eyebrow": "Proyectos y aplicaciones",
      "title": "Proyectos",
      "lead": "Proyectos y líneas aplicadas sobre micro-hidroeléctricas, regulación de frecuencia, OTEC, control en tiempo real, software científico y cooperación internacional.",
      "summaryTitle": "Trabajo aplicado",
      "summary": "El trabajo aplicado se concentra en soluciones energéticas y de simulación: micro-hidroeléctricas, convertidores, cargas, plantas maremotérmicas, prototipos y herramientas docentes."
    },
    "software": {
      "eyebrow": "Software · registros · herramientas académicas",
      "title": "Software y soluciones tecnológicas",
      "lead": "Software registrado, herramientas MATLAB, laboratorios virtuales y recursos computacionales para control, energía, COVID-19, docencia, simulación y análisis de sistemas.",
      "summaryTitle": "Producción tecnológica",
      "summary": "Incluye registros como Niord, AnaRed, TabPer, Cal_Arr_Fre y Calc_Covid19, además de herramientas docentes y laboratorios virtuales vinculados a publicaciones."
    },
    "cv": {
      "eyebrow": "Currículum Vitae · Descargas profesionales",
      "title": "CV descargable",
      "lead": "Centro documental para descargar currículos académico, ejecutivo, ATS, una página y dossier en varios idiomas.",
      "summaryTitle": "Documentación profesional",
      "summary": "Los documentos reúnen perfil académico, publicaciones, proyectos, software, competencias técnicas y líneas de investigación para evaluación, cooperación y difusión internacional."
    },
    "contact": {
      "eyebrow": "Contacto y colaboración",
      "title": "Contacto",
      "lead": "Espacio para orientar colaboración académica, científica, tecnológica e institucional.",
      "summaryTitle": "Áreas de cooperación",
      "summary": "Oportunidades centradas en proyectos energéticos, control avanzado, software académico, laboratorios virtuales, modelado matemático y difusión científica."
    },
    "teaching": {
      "eyebrow": "Docencia y formación",
      "title": "Docencia y formación académica",
      "lead": "Labor docente en Automática, control, electrónica de potencia, máquinas eléctricas, modelado, laboratorios virtuales y software académico.",
      "summaryTitle": "Aporte formativo",
      "summary": "La docencia se vincula con herramientas MATLAB, laboratorios virtuales y recursos computacionales que apoyan la formación de ingenieros e investigadores."
    },
    "dossier": {
      "eyebrow": "Dossier institucional",
      "title": "Dossier profesional de investigación",
      "lead": "Documento narrativo sobre trayectoria, docencia, publicaciones, software, proyectos y colaboración.",
      "summaryTitle": "Narrativa institucional",
      "summary": "El dossier conecta sus aportes en Automática, energía, software, simulación y modelado para presentación institucional."
    }
  },
  "en": {
    "home": {
      "eyebrow": "PhD · Full Professor · Universidad de Oriente",
      "title": "Henry Bory Prevez",
      "lead": "Full Professor and Doctor of Sciences in Automatic Control, with academic and technological work in advanced control, power electronics, micro-hydropower, OTEC systems, wave energy, scientific software, virtual laboratories and applied mathematical modelling.",
      "summaryTitle": "Overview",
      "summary": "His trajectory integrates university teaching, applied research, scientific publications, software registrations and projects related to renewable energy, simulation, computational biophysics and engineering education."
    },
    "about": {
      "eyebrow": "Academic profile",
      "title": "About Dr. Henry Bory Prevez",
      "lead": "Doctor of Sciences in Automatic Control and Full Professor at Universidad de Oriente, with teaching experience since 2002 and scientific output in control, energy, simulation, software and mathematical modelling.",
      "summaryTitle": "Integrated trajectory",
      "summary": "Doctoral training, university teaching, technical skills, international projects and registered academic software shape a profile oriented toward applied research."
    },
    "research": {
      "eyebrow": "Research",
      "title": "Research lines",
      "lead": "His research connects automatic control, power electronics, isolated micro-hydropower, OTEC, ocean energy, scientific software and computational biophysics.",
      "summaryTitle": "Scientific map",
      "summary": "The common thread is modelling, control and simulation of complex systems: from frequency regulation and converters to tumour-growth modelling and educational tools."
    },
    "publications": {
      "eyebrow": "Scientific output",
      "title": "Selected publications",
      "lead": "Curated catalogue of publications related to control, power electronics, renewable energy, OTEC, COVID-19, educational software and computational biophysics.",
      "summaryTitle": "Scientific contribution",
      "summary": "The publications show an evolution from energy applications and converters to interdisciplinary modelling, virtual laboratories and computational tools."
    },
    "projects": {
      "eyebrow": "Projects and applications",
      "title": "Projects",
      "lead": "Applied projects and lines of work on micro-hydropower, frequency regulation, OTEC, real-time control, scientific software and international cooperation.",
      "summaryTitle": "Applied work",
      "summary": "Applied work focuses on energy and simulation solutions: micro-hydropower, converters, load calculations, ocean thermal plants, control prototypes and teaching tools."
    },
    "software": {
      "eyebrow": "Software · registrations · academic tools",
      "title": "Software and technological solutions",
      "lead": "Registered software, MATLAB tools, virtual laboratories and computational resources for control, energy, COVID-19, teaching, simulation and systems analysis.",
      "summaryTitle": "Technological production",
      "summary": "Includes software such as Niord, AnaRed, TabPer, Cal_Arr_Fre and Calc_Covid19, together with educational tools and virtual laboratories linked to publications."
    },
    "cv": {
      "eyebrow": "Curriculum Vitae · Professional downloads",
      "title": "Downloadable CV",
      "lead": "Document centre to download academic, executive, ATS, one-page CV and dossier versions in multiple languages.",
      "summaryTitle": "Professional documentation",
      "summary": "The documents summarize academic profile, publications, projects, software, technical skills and research lines for evaluation, cooperation and international visibility."
    },
    "contact": {
      "eyebrow": "Contact and collaboration",
      "title": "Contact",
      "lead": "Space for academic, scientific, technological and institutional collaboration.",
      "summaryTitle": "Collaboration areas",
      "summary": "Opportunities focus on energy projects, advanced control, academic software, virtual laboratories, mathematical modelling and scientific dissemination."
    },
    "teaching": {
      "eyebrow": "Teaching and training",
      "title": "Teaching and academic training",
      "lead": "Teaching activity in automatic control, power electronics, machines, drives, modelling, virtual laboratories and academic software.",
      "summaryTitle": "Educational contribution",
      "summary": "Teaching is connected to MATLAB tools, virtual laboratories and computational resources supporting engineering and research training."
    },
    "dossier": {
      "eyebrow": "Institutional dossier",
      "title": "Professional research dossier",
      "lead": "Narrative document on trajectory, teaching, publications, software, projects and collaboration.",
      "summaryTitle": "Institutional narrative",
      "summary": "The dossier connects contributions in automatic control, energy, software, simulation and modelling for institutional presentation."
    }
  },
  "nl": {
    "home": {
      "eyebrow": "Doctor in de Wetenschappen · Hoogleraar · Universidad de Oriente",
      "title": "Henry Bory Prevez",
      "lead": "Hoogleraar en Doctor in de Automatische Regeling, met academisch en technologisch werk in geavanceerde regeling, vermogenselektronica, micro-waterkracht, OTEC-systemen, golfenergie, wetenschappelijke software, virtuele laboratoria en toegepaste wiskundige modellering.",
      "summaryTitle": "Overzicht",
      "summary": "Zijn traject combineert universitair onderwijs, toegepast onderzoek, wetenschappelijke publicaties, softwareregistraties en projecten rond hernieuwbare energie, simulatie, computationele biofysica en ingenieursopleiding."
    },
    "about": {
      "eyebrow": "Academisch profiel",
      "title": "Over Dr. Henry Bory Prevez",
      "lead": "Doctor in de Automatische Regeling en hoogleraar aan de Universidad de Oriente, met onderwijservaring sinds 2002 en wetenschappelijke productie in regeling, energie, simulatie, software en wiskundige modellering.",
      "summaryTitle": "Geïntegreerd traject",
      "summary": "Doctorale opleiding, universitair onderwijs, technische competenties, internationale projecten en geregistreerde academische software vormen een toepassingsgericht onderzoeksprofiel."
    },
    "research": {
      "eyebrow": "Onderzoek",
      "title": "Onderzoekslijnen",
      "lead": "Zijn onderzoek verbindt automatische regeling, vermogenselektronica, geïsoleerde micro-waterkracht, OTEC, oceaanenergie, wetenschappelijke software en computationele biofysica.",
      "summaryTitle": "Wetenschappelijke kaart",
      "summary": "De rode draad is modellering, regeling en simulatie van complexe systemen: van frequentieregeling en omzetters tot tumorgroeimodellering en onderwijstools."
    },
    "publications": {
      "eyebrow": "Wetenschappelijke productie",
      "title": "Geselecteerde publicaties",
      "lead": "Gecurateerde catalogus van publicaties over regeling, vermogenselektronica, hernieuwbare energie, OTEC, COVID-19, educatieve software en computationele biofysica.",
      "summaryTitle": "Wetenschappelijke bijdrage",
      "summary": "De publicaties tonen een ontwikkeling van energietoepassingen en omzetters naar interdisciplinaire modellering, virtuele laboratoria en computationele tools."
    },
    "projects": {
      "eyebrow": "Projecten en toepassingen",
      "title": "Projecten",
      "lead": "Toegepaste projecten rond micro-waterkracht, frequentieregeling, OTEC, real-time regeling, wetenschappelijke software en internationale samenwerking.",
      "summaryTitle": "Toegepast werk",
      "summary": "Het toegepaste werk richt zich op energie- en simulatieoplossingen: micro-waterkracht, omzetters, belastingsberekening, oceaanthermische centrales, regelprototypes en onderwijsinstrumenten."
    },
    "software": {
      "eyebrow": "Software · registraties · academische tools",
      "title": "Software en technologische oplossingen",
      "lead": "Geregistreerde software, MATLAB-tools, virtuele laboratoria en computationele middelen voor regeling, energie, COVID-19, onderwijs, simulatie en systeemanalyse.",
      "summaryTitle": "Technologische productie",
      "summary": "Omvat software zoals Niord, AnaRed, TabPer, Cal_Arr_Fre en Calc_Covid19, naast onderwijstools en virtuele laboratoria verbonden met publicaties."
    },
    "cv": {
      "eyebrow": "Curriculum Vitae · Professionele downloads",
      "title": "Downloadbaar CV",
      "lead": "Documentcentrum voor academisch, uitvoerend, ATS, éénpagina-CV en dossier in meerdere talen.",
      "summaryTitle": "Professionele documentatie",
      "summary": "De documenten vatten academisch profiel, publicaties, projecten, software, technische vaardigheden en onderzoekslijnen samen voor evaluatie, samenwerking en internationale zichtbaarheid."
    },
    "contact": {
      "eyebrow": "Contact en samenwerking",
      "title": "Contact",
      "lead": "Ruimte voor academische, wetenschappelijke, technologische en institutionele samenwerking.",
      "summaryTitle": "Samenwerkingsgebieden",
      "summary": "Kansen liggen bij energieprojecten, geavanceerde regeling, academische software, virtuele laboratoria, wiskundige modellering en wetenschappelijke verspreiding."
    },
    "teaching": {
      "eyebrow": "Onderwijs en vorming",
      "title": "Onderwijs en academische vorming",
      "lead": "Onderwijsactiviteit in automatische regeling, vermogenselektronica, machines, aandrijvingen, modellering, virtuele laboratoria en academische software.",
      "summaryTitle": "Educatieve bijdrage",
      "summary": "Onderwijs is verbonden met MATLAB-tools, virtuele laboratoria en computationele middelen voor ingenieurs- en onderzoekstraining."
    },
    "dossier": {
      "eyebrow": "Institutioneel dossier",
      "title": "Professioneel onderzoeksdossier",
      "lead": "Narratief document over loopbaan, onderwijs, publicaties, software, projecten en samenwerking.",
      "summaryTitle": "Institutioneel verhaal",
      "summary": "Het dossier verbindt bijdragen in regeling, energie, software, simulatie en modellering voor institutionele presentatie."
    }
  },
  "pt": {
    "home": {
      "eyebrow": "Doutor em Ciências · Professor Titular · Universidade de Oriente",
      "title": "Henry Bory Prevez",
      "lead": "Professor Titular e Doutor em Ciências em Automática, com trabalho acadêmico e tecnológico em controle avançado, eletrônica de potência, micro-hidrelétricas, sistemas OTEC, energia undimotriz, software científico, laboratórios virtuais e modelagem matemática aplicada.",
      "summaryTitle": "Visão geral",
      "summary": "Sua trajetória integra docência universitária, pesquisa aplicada, publicações científicas, registros de software e projetos ligados a energias renováveis, simulação, biofísica computacional e formação de engenheiros."
    },
    "about": {
      "eyebrow": "Perfil acadêmico",
      "title": "Sobre o Dr. Henry Bory Prevez",
      "lead": "Doutor em Ciências em Automática e Professor Titular da Universidade de Oriente, com experiência docente desde 2002 e produção científica em controle, energia, simulação, software e modelagem matemática.",
      "summaryTitle": "Trajetória integrada",
      "summary": "Formação doutoral, docência universitária, competências técnicas, projetos internacionais e software acadêmico registrado compõem um perfil orientado à aplicação."
    },
    "research": {
      "eyebrow": "Investigação",
      "title": "Linhas de investigação",
      "lead": "Suas linhas conectam Automática, eletrônica de potência, micro-hidrelétricas isoladas, OTEC, energia oceânica, software científico e biofísica computacional.",
      "summaryTitle": "Mapa científico",
      "summary": "O eixo comum é modelagem, controle e simulação de sistemas complexos: de regulação de frequência e conversores a crescimento tumoral e ferramentas didáticas."
    },
    "publications": {
      "eyebrow": "Produção científica",
      "title": "Publicações selecionadas",
      "lead": "Catálogo curado de publicações sobre controle, eletrônica de potência, energias renováveis, OTEC, COVID-19, software educativo e biofísica computacional.",
      "summaryTitle": "Contribuição científica",
      "summary": "As publicações mostram evolução de aplicações energéticas e conversores para modelagem interdisciplinar, laboratórios virtuais e ferramentas computacionais."
    },
    "projects": {
      "eyebrow": "Projetos e aplicações",
      "title": "Projetos",
      "lead": "Projetos aplicados sobre micro-hidrelétricas, regulação de frequência, OTEC, controle em tempo real, software científico e cooperação internacional.",
      "summaryTitle": "Trabalho aplicado",
      "summary": "O trabalho aplicado concentra-se em soluções energéticas e de simulação: micro-hidrelétricas, conversores, cálculo de cargas, plantas maremotérmicas, protótipos de controle e ferramentas docentes."
    },
    "software": {
      "eyebrow": "Software · registros · ferramentas acadêmicas",
      "title": "Software e soluções tecnológicas",
      "lead": "Software registrado, ferramentas MATLAB, laboratórios virtuais e recursos computacionais para controle, energia, COVID-19, docência, simulação e análise de sistemas.",
      "summaryTitle": "Produção tecnológica",
      "summary": "Inclui registros como Niord, AnaRed, TabPer, Cal_Arr_Fre e Calc_Covid19, além de ferramentas docentes e laboratórios virtuais vinculados a publicações."
    },
    "cv": {
      "eyebrow": "Curriculum Vitae · Downloads profissionais",
      "title": "CV para download",
      "lead": "Centro documental para baixar CV acadêmico, executivo, ATS, versão de uma página e dossiê em vários idiomas.",
      "summaryTitle": "Documentação profissional",
      "summary": "Os documentos reúnem perfil acadêmico, publicações, projetos, software, competências técnicas e linhas de investigação para avaliação, cooperação e difusão internacional."
    },
    "contact": {
      "eyebrow": "Contato e colaboração",
      "title": "Contato",
      "lead": "Espaço para colaboração acadêmica, científica, tecnológica e institucional.",
      "summaryTitle": "Áreas de cooperação",
      "summary": "Oportunidades em projetos energéticos, controle avançado, software acadêmico, laboratórios virtuais, modelagem matemática e difusão científica."
    },
    "teaching": {
      "eyebrow": "Docência e formação",
      "title": "Docência e formação acadêmica",
      "lead": "Atividade docente em Automática, controle, eletrônica de potência, máquinas elétricas, modelagem, laboratórios virtuais e software acadêmico.",
      "summaryTitle": "Contribuição formativa",
      "summary": "A docência se conecta a ferramentas MATLAB, laboratórios virtuais e recursos computacionais para formar engenheiros e pesquisadores."
    },
    "dossier": {
      "eyebrow": "Dossiê institucional",
      "title": "Dossiê profissional de investigação",
      "lead": "Documento narrativo sobre trajetória, docência, publicações, software, projetos e colaboração.",
      "summaryTitle": "Narrativa institucional",
      "summary": "O dossiê conecta contribuições em Automática, energia, software, simulação e modelagem para apresentação institucional."
    }
  },
  "fr": {
    "home": {
      "eyebrow": "Docteur en sciences · Professeur titulaire · Universidad de Oriente",
      "title": "Henry Bory Prevez",
      "lead": "Professeur titulaire et docteur en sciences en automatique, avec des travaux académiques et technologiques en contrôle avancé, électronique de puissance, micro-hydroélectricité, systèmes OTEC, énergie houlomotrice, logiciels scientifiques, laboratoires virtuels et modélisation mathématique appliquée.",
      "summaryTitle": "Vue d’ensemble",
      "summary": "Son parcours réunit enseignement universitaire, recherche appliquée, publications scientifiques, enregistrements logiciels et projets liés aux énergies renouvelables, à la simulation, à la biophysique computationnelle et à la formation d’ingénieurs."
    },
    "about": {
      "eyebrow": "Profil académique",
      "title": "À propos du Dr. Henry Bory Prevez",
      "lead": "Docteur en sciences en automatique et professeur titulaire à l’Universidad de Oriente, avec une expérience d’enseignement depuis 2002 et une production scientifique en contrôle, énergie, simulation, logiciel et modélisation mathématique.",
      "summaryTitle": "Parcours intégré",
      "summary": "Formation doctorale, enseignement universitaire, compétences techniques, projets internationaux et logiciels académiques enregistrés composent un profil scientifique appliqué."
    },
    "research": {
      "eyebrow": "Recherche",
      "title": "Axes de recherche",
      "lead": "Ses axes relient automatique, électronique de puissance, micro-hydroélectricité isolée, OTEC, énergie océanique, logiciels scientifiques et biophysique computationnelle.",
      "summaryTitle": "Carte scientifique",
      "summary": "Le fil conducteur est la modélisation, le contrôle et la simulation de systèmes complexes : régulation de fréquence, convertisseurs, croissance tumorale et outils pédagogiques."
    },
    "publications": {
      "eyebrow": "Production scientifique",
      "title": "Publications sélectionnées",
      "lead": "Catalogue organisé de publications sur contrôle, électronique de puissance, énergies renouvelables, OTEC, COVID-19, logiciels éducatifs et biophysique computationnelle.",
      "summaryTitle": "Contribution scientifique",
      "summary": "Les publications montrent une évolution des applications énergétiques vers la modélisation interdisciplinaire, les laboratoires virtuels et les outils computationnels."
    },
    "projects": {
      "eyebrow": "Projets et applications",
      "title": "Projets",
      "lead": "Projets appliqués sur micro-hydroélectricité, régulation de fréquence, OTEC, contrôle en temps réel, logiciels scientifiques et coopération internationale.",
      "summaryTitle": "Travail appliqué",
      "summary": "Le travail appliqué porte sur des solutions énergétiques et de simulation : micro-hydroélectricité, convertisseurs, calcul de charges, centrales marémothermiques, prototypes de contrôle et outils pédagogiques."
    },
    "software": {
      "eyebrow": "Logiciels · enregistrements · outils académiques",
      "title": "Logiciels et solutions technologiques",
      "lead": "Logiciels enregistrés, outils MATLAB, laboratoires virtuels et ressources computationnelles pour contrôle, énergie, COVID-19, enseignement, simulation et analyse de systèmes.",
      "summaryTitle": "Production technologique",
      "summary": "Inclut Niord, AnaRed, TabPer, Cal_Arr_Fre et Calc_Covid19, ainsi que des outils pédagogiques et laboratoires virtuels liés aux publications."
    },
    "cv": {
      "eyebrow": "Curriculum Vitae · Téléchargements professionnels",
      "title": "CV téléchargeable",
      "lead": "Centre documentaire pour télécharger CV académique, exécutif, ATS, CV d’une page et dossier en plusieurs langues.",
      "summaryTitle": "Documentation professionnelle",
      "summary": "Les documents réunissent profil académique, publications, projets, logiciels, compétences techniques et axes de recherche pour évaluation, coopération et visibilité internationale."
    },
    "contact": {
      "eyebrow": "Contact et collaboration",
      "title": "Contact",
      "lead": "Espace destiné à la collaboration académique, scientifique, technologique et institutionnelle.",
      "summaryTitle": "Domaines de coopération",
      "summary": "Opportunités en projets énergétiques, contrôle avancé, logiciels académiques, laboratoires virtuels, modélisation mathématique et diffusion scientifique."
    },
    "teaching": {
      "eyebrow": "Enseignement et formation",
      "title": "Enseignement et formation académique",
      "lead": "Activité d’enseignement en automatique, contrôle, électronique de puissance, machines électriques, modélisation, laboratoires virtuels et logiciels académiques.",
      "summaryTitle": "Contribution pédagogique",
      "summary": "L’enseignement est lié aux outils MATLAB, laboratoires virtuels et ressources computationnelles pour la formation des ingénieurs et chercheurs."
    },
    "dossier": {
      "eyebrow": "Dossier institutionnel",
      "title": "Dossier professionnel de recherche",
      "lead": "Document narratif sur parcours, enseignement, publications, logiciels, projets et collaboration.",
      "summaryTitle": "Narratif institutionnel",
      "summary": "Le dossier relie les contributions en automatique, énergie, logiciel, simulation et modélisation pour une présentation institutionnelle."
    }
  },
  "de": {
    "home": {
      "eyebrow": "Doktor der Wissenschaften · Professor · Universidad de Oriente",
      "title": "Henry Bory Prevez",
      "lead": "Professor und Doktor der Wissenschaften in Automatisierung, mit akademischer und technologischer Arbeit in fortgeschrittener Regelung, Leistungselektronik, Mikro-Wasserkraft, OTEC-Systemen, Wellenenergie, wissenschaftlicher Software, virtuellen Laboren und angewandter mathematischer Modellierung.",
      "summaryTitle": "Überblick",
      "summary": "Sein Profil verbindet universitäre Lehre, angewandte Forschung, wissenschaftliche Publikationen, Software-Registrierungen und Projekte zu erneuerbaren Energien, Simulation, computergestützter Biophysik und Ingenieurausbildung."
    },
    "about": {
      "eyebrow": "Akademisches Profil",
      "title": "Über Dr. Henry Bory Prevez",
      "lead": "Doktor der Wissenschaften in Automatisierung und Professor an der Universidad de Oriente, mit Lehrerfahrung seit 2002 und wissenschaftlicher Arbeit in Regelung, Energie, Simulation, Software und mathematischer Modellierung.",
      "summaryTitle": "Integrierter Werdegang",
      "summary": "Promotion, universitäre Lehre, technische Kompetenzen, internationale Projekte und registrierte akademische Software formen ein anwendungsorientiertes Forschungsprofil."
    },
    "research": {
      "eyebrow": "Forschung",
      "title": "Forschungslinien",
      "lead": "Seine Forschung verbindet automatische Regelung, Leistungselektronik, isolierte Mikro-Wasserkraft, OTEC, Meeresenergie, wissenschaftliche Software und computergestützte Biophysik.",
      "summaryTitle": "Wissenschaftliche Karte",
      "summary": "Der gemeinsame Kern ist Modellierung, Regelung und Simulation komplexer Systeme: Frequenzregelung, Umrichter, Tumorwachstumsmodelle und Lehrwerkzeuge."
    },
    "publications": {
      "eyebrow": "Wissenschaftliche Produktion",
      "title": "Ausgewählte Publikationen",
      "lead": "Kuratierter Katalog von Publikationen zu Regelung, Leistungselektronik, erneuerbaren Energien, OTEC, COVID-19, Bildungssoftware und computergestützter Biophysik.",
      "summaryTitle": "Wissenschaftlicher Beitrag",
      "summary": "Die Publikationen zeigen eine Entwicklung von Energieanwendungen und Umrichtern zu interdisziplinärer Modellierung, virtuellen Laboren und Rechenwerkzeugen."
    },
    "projects": {
      "eyebrow": "Projekte und Anwendungen",
      "title": "Projekte",
      "lead": "Angewandte Projekte zu Mikro-Wasserkraft, Frequenzregelung, OTEC, Echtzeitregelung, wissenschaftlicher Software und internationaler Zusammenarbeit.",
      "summaryTitle": "Angewandte Arbeit",
      "summary": "Die angewandte Arbeit konzentriert sich auf Energie- und Simulationslösungen: Mikro-Wasserkraft, Umrichter, Lastberechnung, Meereswärmekraftwerke, Regelprototypen und Lehrwerkzeuge."
    },
    "software": {
      "eyebrow": "Software · Registrierungen · akademische Werkzeuge",
      "title": "Software und technologische Lösungen",
      "lead": "Registrierte Software, MATLAB-Werkzeuge, virtuelle Labore und Rechenressourcen für Regelung, Energie, COVID-19, Lehre, Simulation und Systemanalyse.",
      "summaryTitle": "Technologische Produktion",
      "summary": "Umfasst Niord, AnaRed, TabPer, Cal_Arr_Fre und Calc_Covid19 sowie Lehrwerkzeuge und virtuelle Labore im Zusammenhang mit Publikationen."
    },
    "cv": {
      "eyebrow": "Lebenslauf · Professionelle Downloads",
      "title": "Lebenslauf zum Download",
      "lead": "Dokumentenzentrum für akademischen CV, Executive CV, ATS-CV, einseitigen CV und Dossier in mehreren Sprachen.",
      "summaryTitle": "Professionelle Dokumentation",
      "summary": "Die Dokumente bündeln akademisches Profil, Publikationen, Projekte, Software, technische Kompetenzen und Forschungslinien für Bewertung, Kooperation und internationale Sichtbarkeit."
    },
    "contact": {
      "eyebrow": "Kontakt und Zusammenarbeit",
      "title": "Kontakt",
      "lead": "Raum für akademische, wissenschaftliche, technologische und institutionelle Zusammenarbeit.",
      "summaryTitle": "Kooperationsbereiche",
      "summary": "Möglichkeiten in Energieprojekten, fortgeschrittener Regelung, akademischer Software, virtuellen Laboren, mathematischer Modellierung und wissenschaftlicher Verbreitung."
    },
    "teaching": {
      "eyebrow": "Lehre und Ausbildung",
      "title": "Lehre und akademische Ausbildung",
      "lead": "Lehrtätigkeit in Automatisierung, Regelung, Leistungselektronik, elektrischen Maschinen, Modellierung, virtuellen Laboren und akademischer Software.",
      "summaryTitle": "Bildungsbeitrag",
      "summary": "Die Lehre ist mit MATLAB-Werkzeugen, virtuellen Laboren und Rechenressourcen zur Ausbildung von Ingenieuren und Forschern verbunden."
    },
    "dossier": {
      "eyebrow": "Institutionelles Dossier",
      "title": "Professionelles Forschungsdossier",
      "lead": "Narratives Dokument zu Werdegang, Lehre, Publikationen, Software, Projekten und Zusammenarbeit.",
      "summaryTitle": "Institutionelle Darstellung",
      "summary": "Das Dossier verbindet Beiträge in Automatisierung, Energie, Software, Simulation und Modellierung für institutionelle Präsentationen."
    }
  },
  "it": {
    "home": {
      "eyebrow": "Dottore in Scienze · Professore Ordinario · Universidad de Oriente",
      "title": "Henry Bory Prevez",
      "lead": "Professore e Dottore in Scienze dell’Automatica, con attività accademica e tecnologica in controllo avanzato, elettronica di potenza, micro-idroelettrico, sistemi OTEC, energia del moto ondoso, software scientifico, laboratori virtuali e modellazione matematica applicata.",
      "summaryTitle": "Panoramica",
      "summary": "Il suo percorso integra docenza universitaria, ricerca applicata, pubblicazioni scientifiche, registrazioni software e progetti legati a energie rinnovabili, simulazione, biofisica computazionale e formazione ingegneristica."
    },
    "about": {
      "eyebrow": "Profilo accademico",
      "title": "Profilo del Dr. Henry Bory Prevez",
      "lead": "Dottore in Scienze dell’Automatica e Professore presso la Universidad de Oriente, con esperienza didattica dal 2002 e produzione scientifica in controllo, energia, simulazione, software e modellazione matematica.",
      "summaryTitle": "Percorso integrato",
      "summary": "Formazione dottorale, docenza universitaria, competenze tecniche, progetti internazionali e software accademico registrato definiscono un profilo orientato all’applicazione."
    },
    "research": {
      "eyebrow": "Ricerca",
      "title": "Linee di ricerca",
      "lead": "Le sue linee collegano automatica, elettronica di potenza, micro-idroelettrico isolato, OTEC, energia oceanica, software scientifico e biofisica computazionale.",
      "summaryTitle": "Mappa scientifica",
      "summary": "Il filo conduttore è modellazione, controllo e simulazione di sistemi complessi: regolazione di frequenza, convertitori, crescita tumorale e strumenti didattici."
    },
    "publications": {
      "eyebrow": "Produzione scientifica",
      "title": "Pubblicazioni selezionate",
      "lead": "Catalogo curato di pubblicazioni su controllo, elettronica di potenza, energie rinnovabili, OTEC, COVID-19, software educativo e biofisica computazionale.",
      "summaryTitle": "Contributo scientifico",
      "summary": "Le pubblicazioni mostrano l’evoluzione da applicazioni energetiche e convertitori verso modellazione interdisciplinare, laboratori virtuali e strumenti computazionali."
    },
    "projects": {
      "eyebrow": "Progetti e applicazioni",
      "title": "Progetti",
      "lead": "Progetti applicati su micro-idroelettrico, regolazione di frequenza, OTEC, controllo in tempo reale, software scientifico e cooperazione internazionale.",
      "summaryTitle": "Lavoro applicato",
      "summary": "Il lavoro applicato si concentra su soluzioni energetiche e di simulazione: micro-idroelettrico, convertitori, calcolo dei carichi, impianti maremotermici, prototipi di controllo e strumenti didattici."
    },
    "software": {
      "eyebrow": "Software · registri · strumenti accademici",
      "title": "Software e soluzioni tecnologiche",
      "lead": "Software registrato, strumenti MATLAB, laboratori virtuali e risorse computazionali per controllo, energia, COVID-19, didattica, simulazione e analisi dei sistemi.",
      "summaryTitle": "Produzione tecnologica",
      "summary": "Include Niord, AnaRed, TabPer, Cal_Arr_Fre e Calc_Covid19, oltre a strumenti didattici e laboratori virtuali collegati alle pubblicazioni."
    },
    "cv": {
      "eyebrow": "Curriculum Vitae · Download professionali",
      "title": "CV scaricabile",
      "lead": "Centro documentale per scaricare CV accademico, executive, ATS, una pagina e dossier in più lingue.",
      "summaryTitle": "Documentazione professionale",
      "summary": "I documenti riuniscono profilo accademico, pubblicazioni, progetti, software, competenze tecniche e linee di ricerca per valutazione, cooperazione e visibilità internazionale."
    },
    "contact": {
      "eyebrow": "Contatto e collaborazione",
      "title": "Contatto",
      "lead": "Spazio per collaborazione accademica, scientifica, tecnologica e istituzionale.",
      "summaryTitle": "Aree di cooperazione",
      "summary": "Opportunità in progetti energetici, controllo avanzato, software accademico, laboratori virtuali, modellazione matematica e diffusione scientifica."
    },
    "teaching": {
      "eyebrow": "Didattica e formazione",
      "title": "Didattica e formazione accademica",
      "lead": "Attività didattica in automatica, controllo, elettronica di potenza, macchine elettriche, modellazione, laboratori virtuali e software accademico.",
      "summaryTitle": "Contributo formativo",
      "summary": "La didattica è collegata a strumenti MATLAB, laboratori virtuali e risorse computazionali per la formazione di ingegneri e ricercatori."
    },
    "dossier": {
      "eyebrow": "Dossier istituzionale",
      "title": "Dossier professionale di ricerca",
      "lead": "Documento narrativo su percorso, didattica, pubblicazioni, software, progetti e collaborazione.",
      "summaryTitle": "Narrazione istituzionale",
      "summary": "Il dossier collega i contributi in automatica, energia, software, simulazione e modellazione per la presentazione istituzionale."
    }
  }
} as const;
