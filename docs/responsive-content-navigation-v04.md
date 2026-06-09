# Responsive, contenido y navegación — v04

## Objetivo

Pulir el sitio para pantallas desde 250 px hasta desktop amplio, evitando solapamientos en header y homogeneizando el resumen conductor de cada sección.

## Breakpoints validados

- 250 px
- 320 px
- 360 px
- 390 px
- 430 px
- 768 px
- 1024 px
- 1280 px
- 1440 px+

## Cambios

- Header con nombre compacto `HBP` y ocultación progresiva del texto.
- Botón menú con icono en pantallas muy estrechas.
- Selector de idioma real con `<select>`.
- `PageIntro` reutilizable para cada sección.
- `section-summaries.ts` centraliza el propósito editorial de cada página.
- Mantiene i18n como fundamento visual, sin publicar rutas traducidas no validadas.

## Validación

Ejecutar:

```bash
npm run build
npm run preview
```

Revisar:

```text
/
 /sobre-mi/
 /investigacion/
 /publicaciones/
 /proyectos/
 /software/
 /cv/
 /contacto/
```
