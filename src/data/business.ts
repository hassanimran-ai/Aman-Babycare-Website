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
  },

  areaServed: { en: 'Riyadh', ar: 'الرياض' },
  country: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
  countryCode: 'SA',

  // Languages our caregivers speak.
  languages: { ar: 'الإنجليزية والعربية الأساسية', en: 'English and basic Arabic' },

  // The only allowed trust claim.
  backgroundChecked: {
    en: 'Background-checked staff',
    ar: 'فريق عمل خضع للتحقق من الخلفية', // REVIEW-AR
  },

  // business.sa verification badge: shown in the footer only once set.
  businessSaBadge: null as null | { url: string; image: string },
} as const;

// tel: link built from the phone number ("+966 59 500 2539" → "tel:+966595002539").
export const telUrl = () => `tel:${business.phone.replace(/[^\d+]/g, '')}`;
