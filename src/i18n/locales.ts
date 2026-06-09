export const defaultLocale = 'es' as const;

export const locales = ['es', 'en', 'nl'] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, { short: string; name: string; nativeName: string }> = {
  es: { short: 'ES', name: 'Spanish', nativeName: 'Español' },
  en: { short: 'EN', name: 'English', nativeName: 'English' },
  nl: { short: 'NL', name: 'Dutch', nativeName: 'Nederlands' },
};

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);
