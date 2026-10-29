// Shared interface strings. Page copy lives in src/data/.
import { getRelativeLocaleUrl } from 'astro:i18n';
import type { Locale } from '../config/site';

export type L = Record<Locale, string>;

/** Same-slug URL for a locale, e.g. href('en', 'services/babysitting') → /en/services/babysitting/ */
export const href = (lang: Locale, path = '') => getRelativeLocaleUrl(lang, path);

export const other = (lang: Locale): Locale => (lang === 'ar' ? 'en' : 'ar');

export const ui = {
  nav: {
    home: { ar: 'الرئيسية', en: 'Home' },
    services: { ar: 'الخدمات', en: 'Services' },
    packages: { ar: 'الباقات', en: 'Packages' },
    offers: { ar: 'العروض', en: 'Offers' },
    faq: { ar: 'الأسئلة الشائعة', en: 'FAQ' },
    faqShort: { ar: 'الأسئلة', en: 'FAQ' }, // nav ribbon, where space is tight
    privacy: { ar: 'سياسة الخصوصية', en: 'Privacy policy' },
  },
  langName: { ar: 'العربية', en: 'English' },
  switchTo: { ar: 'Switch to English', en: 'التبديل إلى العربية' },
  mainNav: { ar: 'التنقل الرئيسي', en: 'Main navigation' },
  bookWhatsApp: { ar: 'احجز عبر واتساب', en: 'Book on WhatsApp' },
  chatWhatsApp: { ar: 'تواصل معنا عبر واتساب', en: 'Chat with us on WhatsApp' },
  askPrice: { ar: 'اسأل عن السعر', en: 'Ask for a price' },
  viewOffer: { ar: 'تفاصيل العرض', en: 'See the offer' },
  seePackages: { ar: 'تصفّح الباقات', en: 'See packages' },
  learnMore: { ar: 'اعرف المزيد', en: 'Learn more' },
  breadcrumb: { ar: 'مسار التنقل', en: 'Breadcrumb' },
  sar: { ar: 'ر.س', en: 'SAR' },
  was: { ar: 'بدلاً من', en: 'was' },
  perHour: { ar: 'للساعة', en: 'per hour' },
  from: { ar: 'تبدأ من', en: 'From' },
  draftPrice: { ar: 'سعر مبدئي', en: 'Draft price' },
  endsIn: { ar: 'ينتهي خلال', en: 'Ends in' },
  days: { ar: 'يوم', en: 'days' },
  hours: { ar: 'ساعة', en: 'hrs' },
  minutes: { ar: 'دقيقة', en: 'min' },
  expected: { ar: 'متوقع', en: 'expected' },
  comingNext: { ar: 'قريباً', en: 'Coming soon' },
  footerServices: { ar: 'خدماتنا', en: 'Our services' },
  footerExplore: { ar: 'تصفّح', en: 'Explore' },
  footerContact: { ar: 'تواصل', en: 'Contact' },
  serving: { ar: 'نخدم العائلات في الرياض', en: 'Serving families in Riyadh' },
  rights: { ar: 'جميع الحقوق محفوظة', en: 'All rights reserved' },
} satisfies Record<string, L>;

/** Western digits with thousands separators in both languages (see docs/build/packages-and-pricing.md). */
export const money = (n: number) => n.toLocaleString('en-US', { maximumFractionDigits: 2 });
