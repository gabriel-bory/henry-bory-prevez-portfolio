import { localeLabels, type Locale } from '../i18n/locales';

export const languages = (Object.keys(localeLabels) as Locale[]).map((code) => ({
  code,
  label: localeLabels[code].short,
  fullLabel: localeLabels[code].nativeName,
  status: 'active',
  href: code === 'es' ? '' : `${code}/`,
})) as Array<{
  code: Locale;
  label: string;
  fullLabel: string;
  status: 'active';
  href: string;
}>;
