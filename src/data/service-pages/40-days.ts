// The 40-Day Package (/packages/40-days/). Built on the service-page layout.
// enabled: false → not built, not in the sitemap, not linked anywhere.
// TODO(client): confirm the package contents and price, then set enabled: true. REVIEW-AR
import type { ServiceContent } from '../services';
import { business } from '../business';

const { day, night } = business.shifts;

const page: ServiceContent = {
  slug: '40-days',
  enabled: false,
  tier: 'more',
  icon: 'mother',
  photo: 'newborn-care',
  name: { ar: 'باقة الأربعين', en: 'The 40-Day Package' },
  card: { ar: 'رعاية الأم والمولود طوال الأربعين', en: 'Mother and newborn care for the first forty days' },
  tagline: { ar: 'أربعون يوماً لراحة الأم، ومولودها بين يدين أمينتين', en: 'Forty days of rest for mum, with baby in safe hands' },
  intro: {
    title: { ar: 'ما هي باقة الأربعين؟', en: 'What the 40-day package is' },
    text: [
      {
        ar: 'باقة الأربعين خطة واحدة لرعاية الأم والمولود في البيت بالرياض طوال فترة النفاس: الشخص نفسه من فريق الرعاية يرافقكم من الأسبوع الأول حتى اليوم الأربعين، نهاراً أو ليلاً أو بإقامة كاملة.',
        en: 'The 40-day package is one plan for mother and newborn care at home in Riyadh through the weeks after birth: the same caregiver is with you from the first week to day forty, by day, by night or live-in.',
      },
      {
        ar: 'بدلاً من الحجز أسبوعاً بأسبوع، تُرتّب الأربعون يوماً مرة واحدة قبل الولادة، فتعود الأم من المستشفى وكل شيء جاهز.',
        en: 'Instead of booking week by week, the forty days are arranged once before the birth, so mum comes home to everything ready.',
      },
    ],
  },
  who: {
    title: { ar: 'لمن تناسب باقة الأربعين؟', en: 'Who the 40-day package suits' },
    items: [
      { title: { ar: 'أم تنتظر مولودها الأول', en: 'A first-time mother' }, text: { ar: 'تريد أن تعرف من سيكون معها قبل أن تصل إلى البيت.', en: "She wants to know who will be with her before she gets home." } },
      { title: { ar: 'عائلة بعيدة عن الأهل', en: 'A family far from relatives' }, text: { ar: 'لا جدّة قريبة تقضي معها الأربعين.', en: 'No grandmother nearby to spend the forty days with her.' } },
      { title: { ar: 'أم لديها أطفال آخرون', en: 'A mother with other children' }, text: { ar: 'تحتاج راحة حقيقية وهي ترعى المولود والإخوة.', en: 'She needs real rest while caring for the baby and the older ones.' } },
    ],
  },
  included: {
    title: { ar: 'ما تشمله باقة الأربعين', en: 'What the 40-day package includes' },
    items: [
      { ar: 'الشخص نفسه من فريق الرعاية طوال الأربعين', en: 'The same caregiver for all forty days' },
      { ar: 'العناية اليومية بالمولود: الاستحمام والحفاض والنوم', en: 'Daily baby care: bathing, nappies and sleep' },
      { ar: 'المساعدة في الرضعات حسب تعليمات الأم', en: "Help with feeds, following mum's instructions" },
      { ar: 'وجبات خفيفة للأم وترتيب البيت', en: 'Light meals for mum and tidying the home' },
      { ar: 'تجهيز البيت والضيافة لاستقبال المهنئين', en: 'Getting the home and hospitality ready for visitors' },
    ],
  },
  notIncluded: [
    { ar: 'أي رعاية صحية للأم أو المولود', en: 'Any health care for mother or baby' },
    { ar: 'استشارات الرضاعة أو التغذية', en: 'Feeding or nutrition advice' },
    { ar: 'إعطاء المولود أي دواء', en: 'Giving the baby any medicine' },
  ],
  shifts: {
    title: { ar: 'اختاروا فترة الأربعين', en: 'Choose how the forty days run' },
    text: {
      ar: `${day.label.ar} ${day.time.ar}، أو ${night.label.ar} ${night.time.ar}، أو إقامة كاملة مع العائلة.`,
      en: `Day shift ${day.time.en}, night shift ${night.time.en}, or live-in with the family.`,
    },
    options: ['day', 'night', 'live-in'],
  },
  steps: {
    title: { ar: 'كيف تحجزون باقة الأربعين', en: 'How to book the 40-day package' },
    items: [
      { title: { ar: 'قبل الولادة بأسابيع', en: 'A few weeks before the birth' }, text: { ar: 'أرسلوا موعد الولادة المتوقع والفترة المفضلة على واتساب.', en: 'Send us your due date and preferred shift on WhatsApp.' } },
      { title: { ar: 'نرشّح ونؤكد', en: 'We match and confirm' }, text: { ar: 'نختار الشخص المناسب ونؤكد السعر والتفاصيل.', en: 'We choose the right person and confirm the price and details.' } },
      { title: { ar: 'نبدأ يوم عودتكم', en: 'We start when you come home' }, text: { ar: 'نكون في البيت يوم عودة الأم بمولودها بإذن الله.', en: 'We are at home the day mum brings the baby back.' } },
    ],
  },
  why: {
    title: { ar: 'لماذا باقة الأربعين من أمان؟', en: 'Why the 40-day package from Aman' },
    text: {
      ar: 'لأن الثبات أهم ما تحتاجه الأم في هذه الأيام: وجه واحد تعرفه، خضع للتحقق من الخلفية، ويحترم خصوصية بيتها.',
      en: 'Because steadiness is what a new mother needs most: one familiar, background-checked face who respects the privacy of her home.',
    },
  },
  packages: {
    title: { ar: 'سعر باقة الأربعين', en: 'The 40-day package price' },
    text: { ar: 'نؤكد سعر الباقة معكم على واتساب حسب الفترة المختارة.', en: 'We confirm the package price with you on WhatsApp, based on the shift you choose.' },
    ids: [],
  },
  riyadh: {
    title: { ar: 'باقة الأربعين في كل أنحاء الرياض', en: 'The 40-day package across Riyadh' },
    text: { ar: 'نخدم العائلات في الرياض كلها، ونرتب البداية حسب موعد الولادة المتوقع.', en: 'We serve families all over Riyadh and plan the start around your due date.' },
  },
  faqTitle: { ar: 'أسئلة عن باقة الأربعين', en: 'Questions about the 40-day package' },
  faq: [
    {
      q: { ar: 'متى نحجز باقة الأربعين؟', en: 'When should we book the 40-day package?' },
      a: { ar: 'قبل موعد الولادة المتوقع بأسابيع، لنرتب كل شيء مبكراً.', en: 'A few weeks before your due date, so everything is arranged early.' },
    },
    {
      q: { ar: 'هل يبقى الشخص نفسه طوال الأربعين؟', en: 'Does the same person stay for all forty days?' },
      a: { ar: 'نعم، هذا جوهر الباقة.', en: 'Yes, that is the heart of the package.' },
    },
    {
      q: { ar: 'هل تشمل الباقة رعاية صحية؟', en: 'Does the package include health care?' },
      a: { ar: 'لا. الباقة مساعدة ودعم في البيت، وما يخص الصحة يبقى مع الطبيب.', en: 'No. It is help and support at home; anything about health stays with your doctor.' },
    },
  ],
  relatedTitle: { ar: 'خدمات قريبة من باقة الأربعين', en: 'Related services' },
  related: ['newborn-care', 'night-nanny', 'home-cleaning'],
  whatsapp: { ar: 'السلام عليكم، أرغب بالاستفسار عن باقة الأربعين.', en: "Hello, I'd like to ask about the 40-day package." },
  booking: 'newborn-care',
  hub: {
    bestFor: { ar: 'الأربعون يوماً بعد الولادة', en: 'The forty days after birth' },
    shifts: { ar: 'نهاري، ليلي، إقامة', en: 'Day, night, live-in' },
    combine: ['home-cleaning'],
  },
};

export default page;
