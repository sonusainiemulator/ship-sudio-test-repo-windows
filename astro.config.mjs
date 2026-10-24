// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import { SITE_URL } from './src/consts.ts';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) =>
        page !== `${SITE_URL}/discover-ai-agents` &&
        page !== `${SITE_URL}/discover-ai-agents/`
    })
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ['**/.shipstudio/**']
      }
    }
  }
});