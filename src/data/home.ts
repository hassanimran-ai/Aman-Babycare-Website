// Home page FAQ (general questions; service-specific ones live in services.ts).
// REVIEW-AR: Arabic is a first draft.
import type { L } from '../i18n/ui';

export const homeFaq: { q: L; a: L }[] = [
  {
    q: { ar: 'في أي مناطق تقدمون خدماتكم؟', en: 'Which areas do you cover?' },
    a: {
      ar: 'نخدم العائلات في الرياض. أرسلوا لنا الحي على واتساب ونؤكد لكم التوفر.',
      en: 'We serve families in Riyadh. Send us your neighbourhood on WhatsApp and we will confirm availability.',
    },
  },
  {
    q: { ar: 'كيف أحجز؟', en: 'How do I book?' },
    a: {
      ar: 'كل الحجوزات عبر واتساب: أخبرونا بالخدمة والموعد، ونؤكد لكم مقدّمة الرعاية والسعر.',
      en: 'All bookings happen on WhatsApp: tell us the service and time, and we confirm the caregiver and price.',
    },
  },
  {
    q: { ar: 'هل يمكن لمقدّمة رعاية واحدة تقديم أكثر من خدمة؟', en: 'Can one caregiver do more than one service?' },
    a: {
      ar: 'نعم، هذا ما يميز أمان. يمكن جمع رعاية الأطفال مع ترتيب البيت مثلاً، حسب حجم العمل. استخدموا أداة تكوين الباقة لتجربة ذلك.',
      en: 'Yes, that is what makes Aman different. For example, babysitting can be combined with light housework, depending on the workload. Try the bundle builder to see how.',
    },
  },
  {
    q: { ar: 'هل فريقكم موثوق؟', en: 'Can I trust your team?' },
    a: {
      ar: 'كل فرد في الفريق يخضع للتحقق من الخلفية قبل العمل مع أي عائلة.',
      en: 'Everyone on the team is background-checked before working with any family.',
    },
  },
  {
    q: { ar: 'هل أسعار الباقات نهائية؟', en: 'Are the package prices final?' },
    a: {
      ar: 'الأسعار المعروضة مبدئية. نؤكد السعر النهائي معكم على واتساب قبل أي حجز.',
      en: 'The prices shown are provisional. We confirm the final price with you on WhatsApp before any booking.',
    },
  },
];
