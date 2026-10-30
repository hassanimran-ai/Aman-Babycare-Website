// Content collections. Blog posts live in src/content/blog/{ar,en}/<file>.md; the two languages of one
// post share the same English slug and translationKey. Drafts (and posts whose publishDate is still in
// the future) are never built, so they never reach the sitemap.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({
    pattern: '{ar,en}/*.md',
    base: './src/content/blog',
    // "ar/<slug>" and "en/<slug>": the same slug in both languages without an id clash.
    generateId: ({ entry, data }) => `${entry.split('/')[0]}/${data.slug}`,
  }),
  schema: z.object({
    title: z.string().max(60),
    description: z.string().max(155),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    date: z.coerce.date(),
    /** Not built before this date (seasonal posts go live ahead of demand). */
    publishDate: z.coerce.date().optional(),
    draft: z.boolean().default(true),
    relatedServices: z.array(z.string()).min(2), // service slugs; each post links to 2+ service pages
    translationKey: z.string(),
    targetKeyword: z.string(),
    /** Worker-mode variants (src/data/seo.ts), used when business.domesticWorkerKeywords is true. */
    worker: z
      .object({ title: z.string().max(60), description: z.string().max(155), targetKeyword: z.string() })
      .optional(),
  }),
});

export const collections = { blog };
