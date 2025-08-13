import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  integrations: [tailwind()],
  site: 'https://your-site.vercel.app', // Reemplaza con tu URL de Vercel
  build: {
    assets: '_astro'
  }
});