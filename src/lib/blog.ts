// Blog helpers. A post is built only when draft is false and its publishDate (if any) has passed at build
// time; until then it has no page, no sitemap entry and no links.
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../config/site';
import { workerMode } from '../data/seo';

export type Post = CollectionEntry<'blog'>;

export const postLang = (post: Post) => post.id.split('/')[0] as Locale;

export const isPublished = (post: Post, now = new Date()) => !post.data.draft && (!post.data.publishDate || post.data.publishDate <= now);

export const publishedPosts = async (lang: Locale) =>
  (await getCollection('blog', (p) => postLang(p) === lang && isPublished(p))).sort((a, b) => +b.data.date - +a.data.date);

/** Title, description and keyword for the current keyword mode. */
export const postMeta = (post: Post) => (workerMode && post.data.worker ? { ...post.data, ...post.data.worker } : post.data);
