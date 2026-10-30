// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

const { PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  // Cloudflare preview address until the real domain is known; PUBLIC_SITE_URL overrides it.
  site: PUBLIC_SITE_URL || 'https://aman-babycare-website.friends-enterprises5486.workers.dev',
  output: 'static',
  trailingSlash: 'always',
  // Keeps visual-QA screenshots clean.
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // 404 never listed. Disabled pages (40-day package) and draft posts are never built, so never listed.
      filter: (page) => !new URL(page).pathname.startsWith('/404'),
      i18n: {
        defaultLocale: 'ar',
        locales: { ar: 'ar-SA', en: 'en' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
