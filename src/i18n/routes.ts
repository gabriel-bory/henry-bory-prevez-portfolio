import { defaultLocale, isLocale, type Locale } from './locales';

export type RouteKey =
  | 'home'
  | 'about'
  | 'research'
  | 'publications'
  | 'projects'
  | 'software'
  | 'cv'
  | 'contact'
  | 'teaching'
  | 'dossier'
  | 'researchBioPhysics'
  | 'researchEnergyPower'
  | 'researchPelton'
  | 'researchOtec'
  | 'publicationDetail';

export const localizedRoutes: Record<RouteKey, Record<Locale, string>> = {
  home: {
    es: '',
    en: 'en/',
    nl: 'nl/',
    pt: 'pt/',
    fr: 'fr/',
    de: 'de/',
    it: 'it/',
  },
  about: {
    es: 'sobre-mi/',
    en: 'en/about/',
    nl: 'nl/over-mij/',
    pt: 'pt/sobre/',
    fr: 'fr/a-propos/',
    de: 'de/ueber-mich/',
    it: 'it/chi-sono/',
  },
  research: {
    es: 'investigacion/',
    en: 'en/research/',
    nl: 'nl/onderzoek/',
    pt: 'pt/pesquisa/',
    fr: 'fr/recherche/',
    de: 'de/forschung/',
    it: 'it/ricerca/',
  },
  publications: {
    es: 'publicaciones/',
    en: 'en/publications/',
    nl: 'nl/publicaties/',
    pt: 'pt/publicacoes/',
    fr: 'fr/publications/',
    de: 'de/publikationen/',
    it: 'it/pubblicazioni/',
  },
  projects: {
    es: 'proyectos/',
    en: 'en/projects/',
    nl: 'nl/projecten/',
    pt: 'pt/projetos/',
    fr: 'fr/projets/',
    de: 'de/projekte/',
    it: 'it/progetti/',
  },
  software: {
    es: 'software/',
    en: 'en/software/',
    nl: 'nl/software/',
    pt: 'pt/software/',
    fr: 'fr/software/',
    de: 'de/software/',
    it: 'it/software/',
  },
  cv: {
    es: 'cv/',
    en: 'en/cv/',
    nl: 'nl/cv/',
    pt: 'pt/cv/',
    fr: 'fr/cv/',
    de: 'de/cv/',
    it: 'it/cv/',
  },
  contact: {
    es: 'contacto/',
    en: 'en/contact/',
    nl: 'nl/contact/',
    pt: 'pt/contato/',
    fr: 'fr/contact/',
    de: 'de/kontakt/',
    it: 'it/contatto/',
  },
  teaching: {
    es: 'docencia/',
    en: 'en/teaching/',
    nl: 'nl/onderwijs/',
    pt: 'pt/ensino/',
    fr: 'fr/enseignement/',
    de: 'de/lehre/',
    it: 'it/didattica/',
  },
  dossier: {
    es: 'dossier/',
    en: 'en/dossier/',
    nl: 'nl/dossier/',
    pt: 'pt/dossier/',
    fr: 'fr/dossier/',
    de: 'de/dossier/',
    it: 'it/dossier/',
  },
  researchBioPhysics: {
    es: 'investigacion/biofisica-oncologia-matematica/',
    en: 'en/research/biophysics-mathematical-oncology/',
    nl: 'nl/onderzoek/biofysica-wiskundige-oncologie/',
    pt: 'pt/pesquisa/biofisica-oncologia-matematica/',
    fr: 'fr/recherche/biophysique-oncologie-mathematique/',
    de: 'de/forschung/biophysik-mathematische-onkologie/',
    it: 'it/ricerca/biofisica-oncologia-matematica/',
  },
  researchEnergyPower: {
    es: 'investigacion/energia-electronica-potencia/',
    en: 'en/research/energy-power-electronics/',
    nl: 'nl/onderzoek/energie-vermogenselektronica/',
    pt: 'pt/pesquisa/energia-eletronica-potencia/',
    fr: 'fr/recherche/energie-electronique-puissance/',
    de: 'de/forschung/energie-leistungselektronik/',
    it: 'it/ricerca/energia-elettronica-potenza/',
  },
  researchPelton: {
    es: 'investigacion/micro-hidroelectricas-pelton/',
    en: 'en/research/pelton-micro-hydropower/',
    nl: 'nl/onderzoek/pelton-micro-waterkracht/',
    pt: 'pt/pesquisa/micro-hidreletricas-pelton/',
    fr: 'fr/recherche/micro-hydroelectricite-pelton/',
    de: 'de/forschung/pelton-mikrowasserkraft/',
    it: 'it/ricerca/micro-idroelettrico-pelton/',
  },
  researchOtec: {
    es: 'investigacion/otec-energia-oceanica/',
    en: 'en/research/otec-ocean-energy/',
    nl: 'nl/onderzoek/otec-oceaanenergie/',
    pt: 'pt/pesquisa/otec-energia-oceanica/',
    fr: 'fr/recherche/otec-energie-oceanique/',
    de: 'de/forschung/otec-meeresenergie/',
    it: 'it/ricerca/otec-energia-oceanica/',
  },
  publicationDetail: {
    es: 'publicaciones/',
    en: 'en/publications/',
    nl: 'nl/publicaties/',
    pt: 'pt/publicacoes/',
    fr: 'fr/publications/',
    de: 'de/publikationen/',
    it: 'it/pubblicazioni/',
  },
};

export const normalizePath = (pathname: string, base = import.meta.env.BASE_URL) => {
  const cleanBase = base.replace(/^\/+|\/+$/g, '');
  let value = pathname.replace(/^https?:\/\/[^/]+/i, '').replace(/^\/+/, '');

  if (cleanBase && value.startsWith(`${cleanBase}/`)) {
    value = value.slice(cleanBase.length + 1);
  }

  return value.replace(/^\/+|\/+$/g, '');
};

export const getCurrentLocale = (pathname: string, base = import.meta.env.BASE_URL): Locale => {
  const path = normalizePath(pathname, base);
  const firstSegment = path.split('/')[0];

  return isLocale(firstSegment) ? firstSegment : defaultLocale;
};

export const getRouteKeyFromPath = (pathname: string, base = import.meta.env.BASE_URL): RouteKey => {
  const normalized = normalizePath(pathname, base);
  const normalizedWithSlash = normalized ? `${normalized}/` : '';

  for (const [key, byLocale] of Object.entries(localizedRoutes) as Array<[RouteKey, Record<Locale, string>]>) {
    if (Object.values(byLocale).some((candidate) => candidate === normalizedWithSlash)) {
      return key;
    }
  }

  const publicationPrefixes = Object.values(localizedRoutes.publicationDetail);
  if (publicationPrefixes.some((prefix) => normalizedWithSlash.startsWith(prefix))) {
    return 'publicationDetail';
  }

  const researchPrefixes = Object.values(localizedRoutes.research);
  if (researchPrefixes.some((prefix) => normalizedWithSlash.startsWith(prefix))) {
    return 'research';
  }

  return 'home';
};

export const getLocalizedPath = (
  pathname: string,
  targetLocale: Locale,
  base = import.meta.env.BASE_URL,
) => {
  const routeKey = getRouteKeyFromPath(pathname, base);
  const targetPath = localizedRoutes[routeKey][targetLocale];
  const cleanBase = base.endsWith('/') ? base : `${base}/`;

  return `${cleanBase}${targetPath}`;
};

export const getLocalizedRouteByKey = (
  routeKey: RouteKey,
  locale: Locale,
  base = import.meta.env.BASE_URL,
) => {
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${localizedRoutes[routeKey][locale]}`;
};
