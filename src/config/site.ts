// Single source of truth for business facts. Never invent values: unknowns stay as [PLACEHOLDER].
// Facts below come from the client's logo and reference mock-up (brand_assets/).

export type Locale = 'ar' | 'en';

export const site = {
  // While false: noindex,nofollow on every page and robots.txt disallows all.
  isLive: false,

  name: {
    en: 'Aman Baby Care & Home Services',
    ar: 'أمان لرعاية المواليد والخدمات المنزلية',
  },
  shortName: { en: 'Aman', ar: 'أمان' },
  // From the logo.
  tagline: {
    en: 'Your Comfort, Our Priority',
    ar: 'راحتكم أولويتنا', // REVIEW-AR
  },

  city: { en: 'Riyadh', ar: 'الرياض' },
  country: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
  countryCode: 'SA',

  // Any format works: spaces, dashes and "+" are stripped when building links.
  whatsappNumber: '+966 59 500 2539',
  phoneDisplay: '[PHONE]',
  email: '[EMAIL]',
  address: { en: '[ADDRESS]', ar: '[ADDRESS]' },
  crNumber: '[CR_NUMBER]',
  // Privacy policy: the registered legal entity (data controller) and its privacy contact.
  legalName: { en: '[LEGAL_NAME]', ar: '[LEGAL_NAME]' },
  privacyEmail: '[PRIVACY_EMAIL]',

  // The only allowed trust claim.
  trust: {
    backgroundChecked: {
      en: 'Background-checked staff',
      ar: 'فريق عمل خضع للتحقق من الخلفية', // REVIEW-AR
    },
  },

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

// Main services: each gets its own page. Client-approved order: the three core services first
// (Babysitting, Elderly Companionship, Home Cleaning), then "more help at home".
export const mainServices: Service[] = [
  { slug: 'babysitting', name: { en: 'Babysitting', ar: 'رعاية الأطفال' } },
  { slug: 'elderly-companionship', name: { en: 'Elderly Companionship', ar: 'مرافقة كبار السن' } },
  { slug: 'home-cleaning', name: { en: 'Home Cleaning', ar: 'تنظيف المنازل' } },
  { slug: 'errands', name: { en: 'Errands & Personal Assistance', ar: 'المشتريات والمساعدة الشخصية' } },
  { slug: 'pick-up-drop-off', name: { en: 'Pick-up & Drop-off', ar: 'التوصيل والاستقبال' } },
  { slug: 'pet-sitting', name: { en: 'Dog & Cat Sitting', ar: 'رعاية الكلاب والقطط' } },
];

// PHASE 2: Newborn & mother care, all on one combined page. Not linked anywhere yet.
export const newbornCarePage = {
  slug: 'newborn-care',
  name: { en: 'Newborn & Mother Care', ar: 'رعاية المواليد والأمهات' }, // REVIEW-AR
};

export const newbornServices: Service[] = [
  { slug: 'newborn-care-at-home', name: { en: 'Newborn Care at Home', ar: 'رعاية المواليد في المنزل' } },
  { slug: 'feeding-support', name: { en: 'Feeding Support', ar: 'دعم الرضاعة والتغذية' } },
  { slug: 'baby-bathing-hygiene', name: { en: 'Baby Bathing & Hygiene', ar: 'استحمام الطفل ونظافته' } },
  { slug: 'sleep-comfort', name: { en: 'Sleep & Comfort', ar: 'النوم والراحة' } },
  { slug: 'mother-baby-support', name: { en: 'Mother & Baby Support', ar: 'دعم الأم والطفل' } },
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
  if (isPlaceholder(site.whatsappNumber)) return `https://wa.me/${text}`;
  return `https://wa.me/${site.whatsappNumber.replace(/\D/g, '')}${text}`;
}
