# v10 — Tipografía responsive para ES / EN / NL

## Problema corregido

En pantallas estrechas, títulos largos en español como `Líneas de investigación` podían partirse dentro de la palabra:

```text
investigació
n
```

Esto ocurría por reglas agresivas de `overflow-wrap: anywhere` y por `max-width` demasiado pequeño en los títulos.

## Solución

- Se añade `src/styles/responsive-i18n-typography-v10.css`.
- Los títulos principales usan más ancho disponible en móvil.
- Se evita `word-break` agresivo en títulos, subtítulos, botones y chips.
- Se usa `text-wrap: balance` y `text-wrap: pretty` cuando el navegador lo soporte.
- Se mantienen chips flexibles para publicaciones y áreas.
- Se prioriza legibilidad en 250–360 px.
