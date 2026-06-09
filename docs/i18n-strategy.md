# Estrategia i18n para el portafolio Astro

La forma recomendada es usar el soporte integrado de Astro para i18n y separar contenido por idioma.

Idiomas previstos:

- Español (`es`) — idioma base.
- English (`en`) — prioritario por CV 2025 y proyección internacional.
- Nederlands (`nl`) — pendiente de traducción y validación humana.

Fase actual: el selector de idioma se muestra en el header, pero English y Nederlands quedan como idiomas en preparación para evitar rutas vacías o traducciones automáticas no revisadas.

Siguiente fase: configurar `i18n` en `astro.config.mjs`, crear rutas localizadas y traducir contenido con revisión humana.
