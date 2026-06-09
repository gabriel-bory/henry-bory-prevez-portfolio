# v13 — Corrección de foto oficial en currículos descargables

## Problema corregido

La versión v12 añadía la nueva foto oficial para CVs imprimibles, pero el CV ejecutivo español existente seguía enlazando a archivos previos que todavía contenían la foto del sitio web.

## Corrección aplicada

- Se reemplazó la imagen embebida del CV ejecutivo internacional español por la foto oficial de CV.
- Se regeneró el PDF desde el DOCX corregido.
- Se mantiene la política visual:
  - Sitio web: foto del portafolio.
  - CVs imprimibles: foto oficial de CV.
  - CV ATS: sin foto.

## Archivos principales

- `public/files/cv/es/cv-ejecutivo-internacional-henry-bory-prevez.docx`
- `public/files/cv/es/cv-ejecutivo-internacional-henry-bory-prevez.pdf`
- `public/images/cv/hbp-cv-photo-official-v01.png`

## Nota

El CV académico completo español es una versión académica extensa sin foto. No se le insertó foto en este bloque para no alterar su estructura larga. Si se desea, conviene crear una variante separada: `cv-academico-imprimible-con-foto`.
