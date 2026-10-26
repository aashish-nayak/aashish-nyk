import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const site = (process.env.SITE_URL?.trim() || 'https://aashish-nyk.vercel.app').replace(/\/$/, '');
if (!/^https:\/\/[^/]+$/.test(site)) throw new Error('SITE_URL must be an HTTPS origin without a path.');

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'never',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
