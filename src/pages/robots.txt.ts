import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = site ? new URL('sitemap-index.xml', site).href : 'https://aashish-nyk.vercel.app/sitemap-index.xml';
  const content = [
    'User-agent: *',
    'Allow: /',
    '',
    '# Generative Engine Optimization (GEO) & AI Crawlers',
    'User-agent: GPTBot',
    'Allow: /',
    '',
    'User-agent: ChatGPT-User',
    'Allow: /',
    '',
    'User-agent: PerplexityBot',
    'Allow: /',
    '',
    'User-agent: ClaudeBot',
    'Allow: /',
    '',
    'User-agent: Google-Extended',
    'Allow: /',
    '',
    'User-agent: Applebot-Extended',
    'Allow: /',
    '',
    `Sitemap: ${sitemapUrl}`,
    '',
  ].join('\n');

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
