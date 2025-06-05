import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';

export default defineConfig({
 
  experimental: {
    session: true, 
  },
  output: 'server',      
  adapter: netlify(),    
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
});
