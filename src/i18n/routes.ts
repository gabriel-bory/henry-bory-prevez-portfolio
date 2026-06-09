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
  },
  about: {
    es: 'sobre-mi/',
    en: 'en/about/',
    nl: 'nl/over-mij/',
  },
  research: {
    es: 'investigacion/',
    en: 'en/research/',
    nl: 'nl/onderzoek/',
  },
  publications: {
    es: 'publicaciones/',
    en: 'en/publications/',
    nl: 'nl/publicaties/',
  },
  projects: {
    es: 'proyectos/',
    en: 'en/projects/',
    nl: 'nl/projecten/',
  },
  software: {
    es: 'software/',
    en: 'en/software/',
    nl: 'nl/software/',
  },
  cv: {
    es: 'cv/',
    en: 'en/cv/',
    nl: 'nl/cv/',
  },
  contact: {
    es: 'contacto/',
    en: 'en/contact/',
    nl: 'nl/contact/',
  },
  teaching: {
    es: 'docencia/',
    en: 'en/teaching/',
    nl: 'nl/onderwijs/',
  },
  dossier: {
    es: 'dossier/',
    en: 'en/dossier/',
    nl: 'nl/dossier/',
  },
  researchBioPhysics: {
    es: 'investigacion/biofisica-oncologia-matematica/',
    en: 'en/research/biophysics-mathematical-oncology/',
    nl: 'nl/onderzoek/biofysica-wiskundige-oncologie/',
  },
  researchEnergyPower: {
    es: 'investigacion/energia-electronica-potencia/',
    en: 'en/research/energy-power-electronics/',
    nl: 'nl/onderzoek/energie-vermogenselektronica/',
  },
  researchPelton: {
    es: 'investigacion/micro-hidroelectricas-pelton/',
    en: 'en/research/pelton-micro-hydropower/',
    nl: 'nl/onderzoek/pelton-micro-waterkracht/',
  },
  researchOtec: {
    es: 'investigacion/otec-energia-oceanica/',
    en: 'en/research/otec-ocean-energy/',
    nl: 'nl/onderzoek/otec-oceaanenergie/',
  },
  publicationDetail: {
    es: 'publicaciones/',
    en: 'en/publications/',
    nl: 'nl/publicaties/',
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

  if (
    normalizedWithSlash.startsWith('publicaciones/') ||
    normalizedWithSlash.startsWith('en/publications/') ||
    normalizedWithSlash.startsWith('nl/publicaties/')
  ) {
    return 'publicationDetail';
  }

  if (
    normalizedWithSlash.startsWith('investigacion/') ||
    normalizedWithSlash.startsWith('en/research/') ||
    normalizedWithSlash.startsWith('nl/onderzoek/')
  ) {
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
