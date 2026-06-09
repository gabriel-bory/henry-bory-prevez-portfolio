import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://Leirgb.github.io',
  base: '/henry-bory-prevez-portfolio',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'nl'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
