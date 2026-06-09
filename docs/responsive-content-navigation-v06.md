# v06 — Header a la derecha, textos coherentes y overflow

## Objetivo

Corregir detalles detectados después de v05:

- el select de idioma cortaba `Español` en pantallas pequeñas;
- en Software aparecía scroll horizontal en 250 px;
- la parte de idioma/modo claro-oscuro debe quedar a la derecha en desktop;
- los textos introductorios deben describir mejor lo que ha hecho el Dr. Henry Bory Prevez.

## Decisiones

- El selector usa códigos compactos `ES`, `EN`, `NL` para no romper el header.
- En desktop, la grilla del header queda: marca izquierda, navegación centro, acciones derecha.
- En móvil, los controles se compactan progresivamente hasta 250 px.
- Los textos de `section-summaries.ts` se reescriben para conectar cada sección con currículo, publicaciones, software, investigación y colaboración.

## Validar

```bash
npm run build
npm run preview
```

Revisar a 250, 280, 320, 360, 390, 430, 768, 1024, 1280 y 1440 px.
