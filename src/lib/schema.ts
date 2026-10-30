// JSON-LD builders. LocalBusiness is added by BaseLayout on every page.
import type { Locale } from '../config/site';
import { business } from '../data/business';
import type { L } from '../i18n/ui';

export const faqSchema = (lang: Locale, items: { q: L; a: L }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({
    '@type': 'Question',
    name: i.q[lang],
    acceptedAnswer: { '@type': 'Answer', text: i.a[lang] },
  })),
});

export const breadcrumbSchema = (items: { name: string; url: string }[], base: URL | undefined) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: new URL(item.url, base).href,
  })),
});

export const serviceSchema = (lang: Locale, name: string, description: string, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  url,
  areaServed: { '@type': 'City', name: business.areaServed[lang] },
  provider: { '@type': 'LocalBusiness', name: business.brand[lang] },
});
