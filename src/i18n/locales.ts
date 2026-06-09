export const defaultLocale = 'es' as const;

export const locales = ["es", "en", "nl", "pt", "fr", "de", "it"] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, { short: string; name: string; nativeName: string }> = {
  "es": {
    "short": "ES",
    "name": "Spanish",
    "nativeName": "Español"
  },
  "en": {
    "short": "EN",
    "name": "English",
    "nativeName": "English"
  },
  "nl": {
    "short": "NL",
    "name": "Dutch",
    "nativeName": "Nederlands"
  },
  "pt": {
    "short": "PT",
    "name": "Portuguese",
    "nativeName": "Português"
  },
  "fr": {
    "short": "FR",
    "name": "French",
    "nativeName": "Français"
  },
  "de": {
    "short": "DE",
    "name": "German",
    "nativeName": "Deutsch"
  },
  "it": {
    "short": "IT",
    "name": "Italian",
    "nativeName": "Italiano"
  }
} as const;

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);
