import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gabriel-bory.github.io',
  base: '/henry-bory-prevez-portfolio',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'es',
    locales: ["es", "en", "nl", "pt", "fr", "de", "it"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
