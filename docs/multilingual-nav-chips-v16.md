# v16 — Menú multilingüe y chips de publicaciones

## Problemas corregidos

- En publicaciones, los chips del índice por áreas podían quedar visualmente demasiado pegados.
- En algunos idiomas, el menú superior podía perder elementos o partirse por etiquetas largas.
- En pantallas medias, se prioriza menú hamburguesa para no forzar una navegación horizontal insuficiente.

## Decisión responsive

- Más de 1320 px: navegación completa horizontal.
- Hasta 1320 px: menú hamburguesa con grid de enlaces.
- En móviles: menú en dos columnas o una columna según ancho.
- Chips de áreas: separación mayor, altura mínima y comportamiento de ancho completo en móvil.

## Validación

```bash
npm run build
npm run preview
```

Revisar:

```text
/publicaciones/
/en/publications/
/fr/publications/
/de/publikationen/
/it/pubblicazioni/
/nl/publicaties/
/pt/publicacoes/
```
