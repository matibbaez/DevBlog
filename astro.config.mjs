import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), mdx(), react()],
  site: "https://devblog-astro-6y7xr.kinsta.page",

  content: {
    collections: {
      blog: {
        schema: ({ z }) => 
          z.object({
            title: z.string(),          // Título del artículo
            pubDate: z.string(),        // Fecha de publicación
            intro: z.string(),          // Introducción o resumen
            tag: z.string(),            // Etiqueta del artículo
            author: z.string(),         // Autor del artículo
            image: z.string().optional() // Imagen asociada (opcional)
          }),
      },
    },
  },
});

