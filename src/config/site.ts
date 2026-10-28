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

  city: { en: 'Riyadh', ar: 'الرياض' },
  country: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
  countryCode: 'SA',

  // Digits only, international format without "+", e.g. 9665XXXXXXXX.
  whatsappNumber: '+966 59 500 2539',
  phoneDisplay: '[PHONE]',
  email: '[EMAIL]',
  address: { en: '[ADDRESS]', ar: '[ADDRESS]' },
  crNumber: '[CR_NUMBER]',

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

export interface Service {
  slug: string;
  name: Record<Locale, string>;
}

// Main services: each gets its own page.
export const mainServices: Service[] = [
  { slug: 'babysitting', name: { en: 'Babysitting', ar: 'رعاية الأطفال' } },
  { slug: 'home-cleaning', name: { en: 'Home Cleaning', ar: 'تنظيف المنازل' } },
  { slug: 'elderly-companionship', name: { en: 'Elderly Companionship', ar: 'مرافقة كبار السن' } },
  { slug: 'pet-sitting', name: { en: 'Dog & Cat Sitting', ar: 'رعاية الكلاب والقطط' } },
  { slug: 'pick-up-drop-off', name: { en: 'Pick-up & Drop-off', ar: 'التوصيل والاستقبال' } },
  { slug: 'errands', name: { en: 'Errands & Personal Assistance', ar: 'المشتريات والمساعدة الشخصية' } },
];

// Newborn & mother care: all on one combined page.
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

// wa.me link with a prefilled message. Returns null until the real number is set.
export function whatsappUrl(message: string): string | null {
  if (isPlaceholder(site.whatsappNumber)) return null;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
