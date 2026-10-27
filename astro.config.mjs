// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://tactical-watch.netlify.app',
  vite: {
    plugins: [tailwindcss()]
  }
});