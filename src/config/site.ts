// Site settings. Business facts (name, legal entity, CR, contact, hours) live in src/data/business.ts.
import { business } from '../data/business';

export type Locale = 'ar' | 'en';

export const site = {
  // While false: noindex,nofollow on every page and robots.txt disallows all.
  isLive: false,

  // Tag IDs. Empty = that tag never loads. PHASE 2: cookie banner; tags load only after consent.
  analytics: { ga4: '', meta: '', snapchat: '' },

  social: {
    instagram: '',
    tiktok: '',
    snapchat: '',
    x: '',
  },
} as const;

// While false: no "was" prices, strike-throughs or "Save SAR" badges anywhere on the site.
// Turn on only once the client confirms the discounts are real.
export const SHOW_DISCOUNTS = false;

export interface Service {
  slug: string;
  name: Record<Locale, string>;
}

// Main services: each gets its own page. Client-approved order: Newborn & Mother Care (featured, one
// combined page with its sub-services), the three core services (Babysitting, Elderly Companionship,
// Home Cleaning), then "more help at home".
export const mainServices: Service[] = [
  { slug: 'newborn-care', name: { en: 'Newborn & Mother Care', ar: 'رعاية المواليد والأمهات' } }, // REVIEW-AR
  { slug: 'babysitting', name: { en: 'Babysitting', ar: 'رعاية الأطفال' } },
  { slug: 'elderly-companionship', name: { en: 'Elderly Companionship', ar: 'مرافقة كبار السن' } },
  { slug: 'home-cleaning', name: { en: 'Home Cleaning', ar: 'تنظيف المنازل' } },
  { slug: 'errands', name: { en: 'Errands & Personal Assistance', ar: 'المشتريات والمساعدة الشخصية' } },
  { slug: 'pick-up-drop-off', name: { en: 'Pick-up & Drop-off', ar: 'التوصيل والاستقبال' } },
  { slug: 'pet-sitting', name: { en: 'Dog & Cat Sitting', ar: 'رعاية الكلاب والقطط' } },
];

// Lives on the Packages page.
export const personalizedCarePlans = {
  name: { en: 'Personalized Care Plans', ar: 'خطط رعاية مخصصة' },
  price: '[PRICE]',
};

export function isPlaceholder(value: string): boolean {
  return /^\[.+\]$/.test(value);
}

// wa.me link with a prefilled message. Without a real number it opens WhatsApp's contact picker.
export function whatsappUrl(message: string): string {
  const text = `?text=${encodeURIComponent(message)}`;
  if (isPlaceholder(business.whatsapp)) return `https://wa.me/${text}`;
  return `https://wa.me/${business.whatsapp.replace(/\D/g, '')}${text}`;
}
