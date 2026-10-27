import type { APIRoute } from 'astro';
import { site } from '../config/site';

export const GET: APIRoute = ({ site: siteUrl }) => {
  const body = site.isLive
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', siteUrl).href}\n`
    : 'User-agent: *\nDisallow: /\n';

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
