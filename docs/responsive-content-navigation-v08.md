# v08 — Corrección final de header, chips y software

## Problemas corregidos

- El header en desktop se desalineaba porque `Contacto` podía bajar a una segunda línea.
- En móvil, el botón hamburguesa podía parecer fuera de lugar por falta de espacio.
- En Software, los registros sin año podían mostrar `0` por renderizado condicional.
- Los chips de áreas en Publicaciones podían solaparse o quedar con alturas irregulares.

## Solución

- Nuevo archivo `src/styles/responsive-v08.css`, importado después de v05/v06/v07.
- En desktop: marca a la izquierda, navegación centrada y acciones a la derecha.
- En pantallas normales se oculta visualmente la etiqueta “Seleccionar idioma” para ahorrar espacio, manteniendo accesibilidad.
- En móvil: idioma compacto `ES`, botón de tema y hamburguesa se reducen progresivamente hasta 250 px.
- En Software: se reemplaza el renderizado condicional del año para que `0` no se pinte.
- En tags: `flex-wrap`, altura natural y `overflow-wrap` controlado.

## Validación

```bash
npm run build
npm run preview
```

Revisar:
- `/`
- `/software/`
- `/publicaciones/`
- `/proyectos/`
- `/cv/`

Breakpoints:
- 250 px
- 280 px
- 320 px
- 360 px
- 390 px
- 430 px
- 768 px
- 1024 px
- 1280 px
- 1440 px
