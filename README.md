# DevBlog hecho con Astro

Este es un proyecto de blog de desarrollo creado con Astro. El blog permite publicar artículos, mostrar información de autores, y más.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

src/
  ├── content/           # Archivos de contenido
  ├── components/        # Componentes reutilizables
  ├── layouts/           # Layouts de las páginas
  ├── pages/             # Páginas del blog
  └── css/               # Estilos CSS con Tailwind
astro.config.mjs          # Configuración de Astro

## Instalación

npm install
npm run dev    # Inicia el servidor de desarrollo.
npm run build  # Construye el proyecto para producción.
npm run preview  # Previsualiza el proyecto construido.

## Configuración

El archivo de configuración principal es `astro.config.mjs`. Aquí puedes ajustar las configuraciones de Astro según tus necesidades.

## Colecciones de Contenido

Las colecciones de contenido están definidas en `src/content/config.ts`. Actualmente, hay colecciones para blogs, autores y páginas.

## Componentes

Los componentes están ubicados en `src/components/`. Algunos componentes importantes incluyen:

- `AuthorInfo.astro`
- `LatestPosts.astro`
- `PublishDate.astro`
- `Tag.astro`
- `Footer.astro`
- `Header.astro`
- `Navigation.astro`

## Layouts

Los layouts están ubicados en `src/layouts/`. El layout principal es `Base.astro`.

## Páginas

Las páginas están ubicadas en `src/pages/`. Algunas páginas importantes incluyen:

- `blog/[slug].astro`
- `blog/[...page].astro`
- `rss.xml.js`
- `search.astro`

## Estilos

Los estilos están definidos en `src/css/` y se utilizan Tailwind CSS para el diseño.

## Licencia

Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que te gustaría hacer.

## Contacto

Para cualquier consulta, puedes contactarme a través de contacto@matiasbaez.com.
