// SEO QA over the built site. Run after `npm run build`: node scripts/seo-check.mjs [distDir]
// Fails (exit 1) when any page has: a missing or duplicate title; a title > 60 or description > 155 chars;
// not exactly one H1; no canonical; missing hreflang ar/en/x-default; FAQPage schema that differs from the
// visible FAQ; Review/AggregateRating schema; a raw [PLACEHOLDER]; an image without alt (decorative
// images need alt="" + aria-hidden); an internal link to a missing page; or a banned word.
// Prints: url | title length | desc length | H1 | words | schema types.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const dist = process.argv[2] ?? 'dist';

// Banned until the related TODO(client) is resolved (src/data/business.ts, src/data/seo.ts).
const banned = [
  { word: 'خادمة', why: 'always «عاملة منزلية»' },
  { word: 'مرافق مريض', why: 'no patient care' },
  { word: 'تمريض', why: 'no nursing' },
  { word: 'سائق', why: 'TODO(client): do caregivers drive?' },
  { word: /\bdrivers?\b/i, why: 'TODO(client): do caregivers drive?' },
];

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
  });

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&nbsp;|&#160;/g, ' ');
const text = (html) => decode(html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
// A bare attribute (Astro writes alt="" as plain `alt`) counts as empty.
const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}(?:="([^"]*)")?(?=[\\s/>])`));
  return m ? (m[1] ?? '') : undefined;
};
const urlOf = (file) => '/' + relative(dist, file).split(sep).join('/').replace(/index\.html$/, '').replace(/\.html$/, '/');

// A path on this site → does dist have it?
const exists = (path) => {
  const clean = decodeURIComponent(path.split(/[?#]/)[0]);
  if (clean === '' || clean === '/') return existsSync(join(dist, 'index.html'));
  const p = join(dist, clean);
  return existsSync(p) && statSync(p).isFile() ? true : existsSync(join(p, 'index.html'));
};

const files = walk(dist);
const rows = [];
const errors = [];
const titles = new Map();

for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const url = urlOf(file);
  const is404 = url === '/404/';
  const fail = (msg) => errors.push(`${url}: ${msg}`);

  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '').trim();
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
  if (!title) fail('missing <title>');
  else titles.set(title, [...(titles.get(title) ?? []), url]);
  if (title.length > 60) fail(`title is ${title.length} chars (max 60)`);
  if (desc.length > 155) fail(`description is ${desc.length} chars (max 155)`);
  if (!desc) fail('missing meta description');

  const h1s = [...html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)].map((m) => text(m[0]));
  if (h1s.length !== 1) fail(`${h1s.length} H1s (need exactly 1)`);

  // Language pairs: every page except the 404 has a canonical and all three hreflangs.
  if (is404) {
    if (!/<meta name="robots" content="noindex/.test(html)) fail('404 must be noindex');
  } else {
    if (!/<link rel="canonical" href="[^"]+"/.test(html)) fail('missing canonical');
    for (const lang of ['ar', 'en', 'x-default']) if (!html.includes(`hreflang="${lang}"`)) fail(`missing hreflang ${lang}`);
    for (const m of html.matchAll(/<link rel="alternate" hreflang="[^"]+" href="([^"]+)"/g)) {
      const path = new URL(m[1]).pathname;
      if (!exists(path)) fail(`hreflang points to a missing page: ${path}`);
    }
  }

  // JSON-LD
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => {
    try {
      return JSON.parse(m[1]);
    } catch {
      fail('invalid JSON-LD');
      return {};
    }
  });
  const types = schemas.map((s) => s['@type']).filter(Boolean);
  if (is404 && schemas.length) fail('404 must have no schema');
  if (/"@type":"(Review|AggregateRating)"/.test(html)) fail('Review/AggregateRating schema is not allowed');

  // FAQPage must match the visible accordion, question for question and answer for answer.
  const faqSchema = schemas.find((s) => s['@type'] === 'FAQPage');
  const visible = [...html.matchAll(/<details[\s\S]*?<summary[^>]*>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g)].map((m) => ({
    q: text(m[1]),
    a: text(m[2]),
  }));
  if (faqSchema) {
    const inSchema = faqSchema.mainEntity.map((e) => ({ q: e.name.trim(), a: e.acceptedAnswer.text.trim() }));
    const same = inSchema.length === visible.length && inSchema.every((e, i) => e.q === visible[i].q && e.a === visible[i].a);
    if (!same) fail(`FAQPage schema (${inSchema.length}) does not match the visible FAQ (${visible.length})`);
  } else if (visible.length) fail('visible FAQ without FAQPage schema');

  // Raw placeholders such as [PHONE] or [PRICE].
  for (const m of html.matchAll(/\[[A-Z_]+\]/g)) fail(`raw placeholder ${m[0]}`);

  // Images: alt required; alt="" only with aria-hidden.
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    const alt = attr(m[0], 'alt');
    if (alt === undefined) fail(`image without alt: ${attr(m[0], 'src')}`);
    else if (alt === '' && attr(m[0], 'aria-hidden') !== 'true') fail(`decorative image without aria-hidden: ${attr(m[0], 'src')}`);
  }

  // Internal links must resolve.
  for (const m of html.matchAll(/<a\b[^>]*\shref="(\/[^"]*)"/g)) if (!exists(m[1])) fail(`link to a missing page: ${m[1]}`);

  const body = text(html);
  for (const b of banned) {
    const hit = typeof b.word === 'string' ? body.includes(b.word) : b.word.test(body);
    if (hit) fail(`banned word "${b.word}" (${b.why})`);
  }

  const main = text(html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? '');
  rows.push({ url, title: title.length, desc: desc.length, h1: h1s[0] ?? '-', words: main ? main.split(' ').length : 0, schema: types.join(', ') });
}

for (const [title, urls] of titles) if (urls.length > 1) errors.push(`duplicate title "${title}": ${urls.join(', ')}`);

rows.sort((a, b) => a.url.localeCompare(b.url));
const cols = ['url', 'title', 'desc', 'h1', 'words', 'schema'];
const head = { url: 'url', title: 'title', desc: 'desc', h1: 'H1', words: 'words', schema: 'schema types' };
const width = Object.fromEntries(cols.map((c) => [c, Math.min(60, Math.max(...[head, ...rows].map((r) => String(r[c]).length)))]));
const line = (r) => '| ' + cols.map((c) => String(r[c]).slice(0, 60).padEnd(width[c])).join(' | ') + ' |';
console.log(line(head));
console.log('|' + cols.map((c) => '-'.repeat(width[c] + 2)).join('|') + '|');
rows.forEach((r) => console.log(line(r)));

if (errors.length) {
  console.error(`\n${errors.length} problem(s):`);
  errors.forEach((e) => console.error(`  - ${e}`));
  process.exit(1);
}
console.log(`\nSEO check passed: ${rows.length} pages.`);
