// Photo slots. A file in src/assets/photos/ named after its slot (e.g. hero.jpg) fills that slot.
// Rules: docs/build/imagery.md. Credits: src/assets/photos/CREDITS.md.
import type { ImageMetadata } from 'astro';
import type { L } from '../i18n/ui';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{jpg,jpeg,png,webp}', { eager: true });
const bySlot = new Map(Object.entries(files).map(([path, mod]) => [path.split('/').pop()!.replace(/\.\w+$/, ''), mod.default]));

// What each photo shows (alt text) and where to centre crops (CSS object-position). REVIEW-AR
const meta: Record<string, { alt: L; focus?: string }> = {
  hero: {
    alt: { ar: 'مقدّمة رعاية بالحجاب تقرأ قصة مصوّرة مع طفلة مبتسمة على الأريكة', en: 'A caregiver in a hijab reading a picture book with a smiling little girl on the sofa' },
    focus: '42% 50%',
  },
  babysitting: {
    alt: { ar: 'مقدّمة رعاية تبني بيتاً من المكعبات الخشبية مع طفل صغير يضحك', en: 'A caregiver building a wooden block house with a laughing toddler' },
    focus: '52% 50%',
  },
  'home-cleaning': {
    alt: { ar: 'مقدّمة رعاية تمسح سطح المطبخ الرخامي في مطبخ مشرق', en: 'A caregiver wiping a marble kitchen island in a bright kitchen' },
    focus: '45% 50%',
  },
  'elderly-companionship': {
    alt: { ar: 'مقدّمة رعاية تصبّ القهوة العربية لسيدة مسنّة مبتسمة في المجلس', en: 'A caregiver pouring Arabic coffee for a smiling elderly woman in the majlis' },
    focus: '52% 50%',
  },
  'pick-up-drop-off': {
    alt: { ar: 'مقدّمة رعاية تمشي مع تلميذ يداً بيد في شارع تحفّه النخيل', en: 'A caregiver walking hand in hand with a schoolboy along a palm-lined street' },
    focus: '50% 50%',
  },
  errands: {
    alt: { ar: 'مقدّمة رعاية تحمل كيسين من المشتريات إلى مدخل الفيلا', en: 'A caregiver carrying two bags of groceries into a villa entrance' },
    focus: '50% 30%',
  },
  trust: {
    alt: { ar: 'أم تستقبل مقدّمة الرعاية بابتسامة عند باب البيت', en: 'A mother welcoming a caregiver at her front door with a smile' },
    focus: '47% 50%',
  },
  'services-hero': {
    alt: { ar: 'غرفة معيشة عائلية هادئة ومرتبة مع سلة ألعاب خشبية', en: 'A calm, tidy family living room with a basket of wooden toys' },
  },
  'packages-hero': {
    alt: { ar: 'أم تستمتع بفنجان قهوة بينما تلعب مقدّمة الرعاية مع طفلها', en: 'A mother enjoying a cup of coffee while a caregiver plays with her son' },
    focus: '30% 50%',
  },
  'how-it-works': {
    alt: { ar: 'يدان تكتبان رسالة على الهاتف بجانب فنجان قهوة وتمر', en: 'Hands typing a message on a phone beside Arabic coffee and dates' },
  },
};

export const photo = (slot: string) => bySlot.get(slot);
export const hasPhoto = (slot: string) => bySlot.has(slot);
export const photoMeta = (slot: string) => meta[slot];
