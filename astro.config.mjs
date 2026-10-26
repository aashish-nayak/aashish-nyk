import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL?.trim();
if (site && !/^https:\/\/[^/]+\/?$/.test(site)) throw new Error('SITE_URL must be an HTTPS origin without a path.');
export default defineConfig({
  site: site || undefined,
  output: 'static',
  trailingSlash: 'never',
  integrations: site ? [sitemap()] : [],
  vite: { plugins: [tailwindcss()] },
});
