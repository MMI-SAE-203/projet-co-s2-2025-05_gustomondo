// astro.config.mjs
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';

export default defineConfig({
  experimental: {
    session: true,
  },
  output: 'server',
  adapter: netlify(),

  integrations: [vue()],
  vite: {
    plugins: [tailwindcss()],
  },
});
