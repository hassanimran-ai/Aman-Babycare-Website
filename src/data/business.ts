// Single source of truth for business facts. Never invent values: unknowns stay as [PLACEHOLDER] and are
// hidden from the UI until set. Legal name and CR number match the client's CR certificate
// (brand_assets/Certifications and business docs/CR Certificate.pdf, issued 11/03/2025).
import type { L } from '../i18n/ui';

export const business = {
  // Always "Babycare", one word.
  brand: {
    en: 'Aman Babycare & Home Services',
    ar: 'أمان لرعاية المواليد والخدمات المنزلية',
  },
  shortName: { en: 'Aman', ar: 'أمان' },
  // Footer operator line.
  shortBrand: { en: 'Aman Babycare', ar: 'أمان لرعاية المواليد' },
  // From the logo.
  tagline: {
    en: 'Your Comfort, Our Priority',
    ar: 'راحتكم أولويتنا', // REVIEW-AR
  },

  // The registered legal entity (also the data controller in the privacy policy).
  legalName: {
    ar: 'شركة عادل احمد منصور عكاش للتجارة والمقاولات',
    en: 'Adel Ahmed Mansour Akkash Trading & Contracting Company',
  },
  crNumber: '7049385276',

  // Any format works: spaces, dashes and "+" are stripped when building links.
  whatsapp: '+966 59 500 2539',
  phone: '+966 59 500 2539',
  email: '[EMAIL]',
  privacyEmail: '[PRIVACY_EMAIL]',
  address: { en: '[ADDRESS]', ar: '[ADDRESS]' },

  // Booking/office hours (when we answer WhatsApp), not service hours: night and 24-hour shifts run outside them.
  hours: {
    opens: '08:00',
    closes: '20:00',
    label: { ar: 'ساعات الحجز: 8 صباحاً – 8 مساءً', en: 'Booking hours: 8am–8pm' } as L,
    time: { ar: '8 صباحاً – 8 مساءً', en: '8am–8pm' } as L,
  },

  areaServed: { en: 'Riyadh', ar: 'الرياض' },
  country: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
  countryCode: 'SA',

  // Languages our caregivers speak.
  languages: { ar: 'الإنجليزية والعربية الأساسية', en: 'English and basic Arabic' },

  // Service shifts (when care happens), from the client's SEO brief of 30 Oct 2026. Not the booking hours above.
  shifts: {
    day: { label: { ar: 'الفترة الصباحية', en: 'Day shift' } as L, time: { ar: '8 صباحاً – 8 مساءً', en: '8am–8pm' } as L },
    night: { label: { ar: 'الفترة الليلية', en: 'Night shift' } as L, time: { ar: '8 مساءً – 8 صباحاً', en: '8pm–8am' } as L },
  },
  // Live-in: the caregiver stays in the family's home. Live-out: comes for the shift and goes home.
  liveIn: true,
  liveOut: true,
  // Families choose a male or a female caregiver.
  caregiverGenderChoice: true,

  // Trust claims. Background checks are long-standing; "certified" comes from the client's brief of
  // 30 Oct 2026 and overrides the old ban in CLAUDE.md. Set certified to null to remove it everywhere.
  backgroundChecked: {
    en: 'Background-checked staff',
    ar: 'فريق عمل خضع للتحقق من الخلفية', // REVIEW-AR
  },
  certified: {
    en: 'Certified caregivers and nannies',
    ar: 'مقدّمو رعاية ومربيات معتمدون', // REVIEW-AR
  } as L | null,

  // Keyword mode (src/data/seo.ts). true = target household-worker searches (عاملة منزلية، عاملات بالساعة).
  domesticWorkerKeywords: false, // TODO(client): confirm the CR/licence covers supplying hourly/monthly domestic workers
  // Can families choose the caregiver's nationality? null = unknown: the nationality FAQ stays hidden.
  caregiverNationalityChoice: null as null | { ar: string; en: string }, // TODO(client): can customers choose the caregiver's nationality?

  // business.sa verification badge: shown in the footer only once set.
  businessSaBadge: null as null | { url: string; image: string },
} as const;

// tel: link built from the phone number ("+966 59 500 2539" → "tel:+966595002539").
export const telUrl = () => `tel:${business.phone.replace(/[^\d+]/g, '')}`;
