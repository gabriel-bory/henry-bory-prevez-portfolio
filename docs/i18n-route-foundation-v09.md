# v09 — Fundamento i18n por rutas y selector automático

## Objetivo

Dejar preparado el portafolio para cambiar de idioma desde el selector sin enviar al usuario a páginas inexistentes.

## Decisiones

- Español queda como versión base sin prefijo.
- Inglés usa `/en/`.
- Neerlandés usa `/nl/`.
- El selector calcula automáticamente la ruta equivalente según la página actual.
- Las páginas EN/NL son placeholders profesionales hasta tener traducción revisada.
- El layout integra `ClientRouter` para navegación cliente tipo SPA conservando el enfoque estático de Astro.

## Rutas principales

```text
/                  -> /en/                  -> /nl/
/sobre-mi/         -> /en/about/            -> /nl/over-mij/
/investigacion/    -> /en/research/         -> /nl/onderzoek/
/publicaciones/    -> /en/publications/     -> /nl/publicaties/
/proyectos/        -> /en/projects/         -> /nl/projecten/
/software/         -> /en/software/         -> /nl/software/
/cv/               -> /en/cv/               -> /nl/cv/
/contacto/         -> /en/contact/          -> /nl/contact/
```

## Validación

```bash
npm run build
npm run preview
```

Revisar selector en:

```text
/
/software/
/publicaciones/
/proyectos/
/cv/
/en/software/
/nl/software/
```
