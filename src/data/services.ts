// Service page content, both languages. Rules: docs/build/service-pages.md, docs/build/culture-and-copy.md
// REVIEW-AR: all Arabic in this file is a first draft and needs a native review.
import type { L } from '../i18n/ui';
import type { IconName } from '../components/icons';

export interface ServiceContent {
  slug: string;
  tier: 'core' | 'more'; // core: the three headline services, shown first and larger
  icon: IconName;
  name: L;
  card: L; // one line for cards
  meta: { title: L; description: L };
  h1: L;
  intro: L;
  visit: { title: L; text: L }[];
  included: L[];
  prepare: L[];
  related: string[];
  faq: { q: L; a: L }[];
  whatsapp: L; // prefilled message
}

export const services: ServiceContent[] = [
  {
    slug: 'babysitting',
    tier: 'core',
    icon: 'child',
    name: { ar: 'رعاية الأطفال', en: 'Babysitting' },
    card: { ar: 'وقت آمن وممتع لأطفالكم في البيت', en: 'Safe, happy time for your children at home' },
    meta: {
      title: { ar: 'رعاية الأطفال في المنزل بالرياض | أمان', en: 'Babysitting at Home in Riyadh | Aman' },
      description: {
        ar: 'جليسة أطفال في بيتك بالرياض، بالساعة أو بخطة أسبوعية أو شهرية. فريق خضع للتحقق من الخلفية. احجز عبر واتساب.',
        en: 'A babysitter in your Riyadh home, by the hour, weekly or monthly. Background-checked staff. Book on WhatsApp.',
      },
    },
    h1: { ar: 'أطفالكم في أمان، وأنتم مطمئنون', en: 'Your children are safe, and you can breathe' },
    intro: {
      ar: 'لمشوار عاجل أو دوام طويل أو مناسبة عائلية: مقدّمة رعاية هادئة تلعب وتقرأ وتطعم أطفالكم، وتلتزم بقواعد بيتكم كما هي.',
      en: "For a quick errand, a long work day or a family occasion: a calm caregiver who plays, reads and feeds your children, and keeps your house rules exactly as they are.",
    },
    visit: [
      { title: { ar: 'تعارف قصير', en: 'A short hello' }, text: { ar: 'نتعرف على الأطفال ومواعيد النوم والأكل والممنوعات.', en: 'We meet the children and learn naps, meals and house rules.' } },
      { title: { ar: 'لعب وتعلّم', en: 'Play and learning' }, text: { ar: 'أنشطة تناسب أعمارهم، وقراءة، وواجبات مدرسية.', en: 'Age-appropriate activities, reading and homework help.' } },
      { title: { ar: 'وجبات وراحة', en: 'Meals and rest' }, text: { ar: 'وجبات حسب تعليماتكم، وقيلولة في موعدها.', en: 'Meals as you instruct, naps on schedule.' } },
      { title: { ar: 'ملخص عند عودتكم', en: 'A handover when you return' }, text: { ar: 'ماذا أكلوا، متى ناموا، وكيف كان يومهم.', en: 'What they ate, when they slept, how their day went.' } },
    ],
    included: [
      { ar: 'لعب وأنشطة حسب العمر', en: 'Age-appropriate play and activities' },
      { ar: 'تحضير وجبات خفيفة وإطعام', en: 'Preparing snacks and feeding' },
      { ar: 'مساعدة في الواجبات', en: 'Homework help' },
      { ar: 'روتين النوم والقيلولة', en: 'Bedtime and nap routines' },
      { ar: 'ترتيب ألعاب وغرفة الأطفال', en: "Tidying toys and the children's room" },
    ],
    prepare: [
      { ar: 'جدول الطفل اليومي', en: "Your child's daily routine" },
      { ar: 'أي حساسية أو تعليمات طعام', en: 'Any allergies or food instructions' },
      { ar: 'أرقام الطوارئ', en: 'Emergency contacts' },
    ],
    related: ['pick-up-drop-off', 'home-cleaning', 'errands'],
    faq: [
      {
        q: { ar: 'ما الأعمار التي ترعونها؟', en: 'What ages do you look after?' },
        a: { ar: 'أخبرونا بأعمار أطفالكم عند الحجز لنرشح لكم مقدّمة الرعاية المناسبة.', en: "Tell us your children's ages when you book, and we'll match the right caregiver." },
      },
      {
        q: { ar: 'هل يمكن الحجز لساعات قليلة؟', en: 'Can I book for just a few hours?' },
        a: { ar: 'نعم، يوجد حجز بالساعة، وخطط أسبوعية وشهرية لمن يحتاج رعاية منتظمة.', en: 'Yes. There is hourly booking, plus weekly and monthly plans for regular care.' } },
      {
        q: { ar: 'هل تبقى نفس الجليسة كل مرة؟', en: 'Will we have the same sitter each time?' },
        a: { ar: 'في الخطط الأسبوعية والشهرية نحرص على نفس مقدّمة الرعاية ليعتاد عليها الأطفال.', en: 'On weekly and monthly plans we keep the same caregiver so your children can settle.' } },
    ],
    whatsapp: { ar: 'السلام عليكم، أرغب بحجز رعاية أطفال.', en: 'Hello, I would like to book babysitting.' },
  },
  {
    slug: 'elderly-companionship',
    tier: 'core',
    icon: 'elder',
    name: { ar: 'مرافقة كبار السن', en: 'Elderly Companionship' },
    card: { ar: 'صحبة طيبة ومساعدة يومية لوالديكم', en: 'Warm company and everyday help for your parents' },
    meta: {
      title: { ar: 'مرافقة كبار السن في المنزل بالرياض | أمان', en: 'Elderly Companionship at Home in Riyadh | Aman' },
      description: {
        ar: 'صحبة ومساعدة يومية لوالديكم في البيت بالرياض: حديث، مشي، وجبات، ومرافقة للمواعيد. احجز يوماً أو خطة شهرية عبر واتساب.',
        en: 'Company and daily help for your parents at home in Riyadh: conversation, walks, meals and rides to appointments. Book a day or a monthly plan on WhatsApp.',
      },
    },
    h1: { ar: 'صحبة طيبة لمن ربّونا', en: 'Kind company for the ones who raised us' },
    intro: {
      ar: 'برّ الوالدين لا يتوقف حين تنشغلون. نرافق والديكم بالحديث والمشي والمساعدة اليومية، باحترام وصبر، وتبقون على اطلاع.',
      en: "Caring for your parents doesn't pause when life gets busy. We keep them company with conversation, walks and daily help, with patience and respect, and keep you informed.",
    },
    visit: [
      { title: { ar: 'نتعرف عليهم', en: 'Getting to know them' }, text: { ar: 'اهتماماتهم، روتينهم، وما يريحهم.', en: 'Their interests, routine and what puts them at ease.' } },
      { title: { ar: 'صحبة وحديث', en: 'Company and conversation' }, text: { ar: 'قهوة، قراءة، وحديث هادئ.', en: 'Coffee, reading and unhurried conversation.' } },
      { title: { ar: 'مساعدة يومية', en: 'Everyday help' }, text: { ar: 'تحضير وجبات خفيفة وتذكير بالمواعيد.', en: 'Light meals and appointment reminders.' } },
      { title: { ar: 'تحديث للعائلة', en: 'A note to the family' }, text: { ar: 'رسالة قصيرة عن يومهم.', en: 'A short message about their day.' } },
    ],
    included: [
      { ar: 'صحبة وحديث وقراءة', en: 'Company, conversation and reading' },
      { ar: 'مشي خفيف داخل البيت أو قربه', en: 'Gentle walks at or near home' },
      { ar: 'تحضير وجبات خفيفة', en: 'Preparing light meals' },
      { ar: 'تذكير بمواعيد الدواء حسب جدولكم', en: 'Medication reminders from your schedule' },
      { ar: 'مرافقة للمواعيد والمشاوير', en: 'Accompanying them to appointments' },
    ],
    prepare: [
      { ar: 'روتينهم اليومي وما يحبون', en: 'Their daily routine and what they enjoy' },
      { ar: 'جدول الأدوية مكتوباً', en: 'A written medication schedule' },
      { ar: 'أرقام العائلة للتواصل', en: 'Family contact numbers' },
    ],
    related: ['pick-up-drop-off', 'errands', 'home-cleaning'],
    faq: [
      {
        q: { ar: 'هل تقدمون رعاية تمريضية؟', en: 'Do you provide nursing care?' },
        a: { ar: 'لا. خدمتنا مرافقة ومساعدة يومية. الاحتياجات الصحية تحتاج مختصين.', en: 'No. Our service is companionship and everyday help. Health needs require specialists.' },
      },
      {
        q: { ar: 'هل يمكن مرافقتهم إلى المواعيد؟', en: 'Can you take them to appointments?' },
        a: { ar: 'نعم، ويمكن جمعها مع خدمة التوصيل.', en: 'Yes, and it can be combined with pick-up and drop-off.' } },
      {
        q: { ar: 'هل يوجد خطة شهرية؟', en: 'Is there a monthly plan?' },
        a: { ar: 'نعم، خطط ٥ أو ٦ أو ٧ أيام في الأسبوع، أو يوم واحد عند الحاجة.', en: 'Yes: 5, 6 or 7 days a week, or a single day when you need it.' } },
    ],
    whatsapp: { ar: 'السلام عليكم، أرغب بحجز مرافقة لكبار السن.', en: 'Hello, I would like to book elderly companionship.' },
  },
  {
    slug: 'home-cleaning',
    tier: 'core',
    icon: 'sparkle',
    name: { ar: 'تنظيف المنازل', en: 'Home Cleaning' },
    card: { ar: 'بيت مرتب ونظيف دون أن تشغلوا بالكم', en: 'A clean, calm home without the effort' },
    meta: {
      title: { ar: 'تنظيف المنازل في الرياض | أمان', en: 'Home Cleaning in Riyadh | Aman' },
      description: {
        ar: 'تنظيف منزلي دوري أو قبل الضيوف والمناسبات في الرياض. فريق خضع للتحقق من الخلفية. احجز عبر واتساب.',
        en: 'Regular home cleaning or a refresh before guests and occasions in Riyadh. Background-checked staff. Book on WhatsApp.',
      },
    },
    h1: { ar: 'بيت نظيف يستقبلكم ويستقبل ضيوفكم', en: 'A clean home, ready for you and your guests' },
    intro: {
      ar: 'من الترتيب الأسبوعي إلى التجهيز قبل العزائم والأعياد، نهتم بالتفاصيل التي تجعل البيت مريحاً، وتتفرغون أنتم لأهلكم.',
      en: 'From the weekly tidy to getting ready for gatherings and Eid, we take care of the details that make a home feel restful, so you can be with your family.',
    },
    visit: [
      { title: { ar: 'نتفق على الأولويات', en: 'We agree priorities' }, text: { ar: 'الغرف، المجلس، المطبخ، وما يحتاج عناية خاصة.', en: 'Rooms, majlis, kitchen, and anything that needs special care.' } },
      { title: { ar: 'من الأعلى إلى الأسفل', en: 'Top to bottom' }, text: { ar: 'غبار الأسطح، ثم الأرضيات، غرفة بعد غرفة.', en: 'Dusting surfaces first, then floors, room by room.' } },
      { title: { ar: 'المطبخ ودورات المياه', en: 'Kitchen and bathrooms' }, text: { ar: 'تعقيم الأسطح والأحواض وترتيب الأدوات.', en: 'Surfaces and sinks sanitised, everything put back in place.' } },
      { title: { ar: 'جولة أخيرة معكم', en: 'A final walk-through' }, text: { ar: 'نتأكد أن كل شيء كما تحبون قبل المغادرة.', en: "We check everything is as you like it before we leave." } },
    ],
    included: [
      { ar: 'تنظيف الغرف والمجالس', en: 'Bedrooms, living areas and majlis' },
      { ar: 'المطبخ والأسطح والأحواض', en: 'Kitchen, counters and sinks' },
      { ar: 'دورات المياه', en: 'Bathrooms' },
      { ar: 'كنس ومسح الأرضيات', en: 'Vacuuming and mopping' },
      { ar: 'ترتيب وتنظيم خفيف', en: 'Light tidying and organising' },
    ],
    prepare: [
      { ar: 'أدوات ومواد التنظيف المفضلة لديكم إن وُجدت', en: 'Your preferred cleaning products, if any' },
      { ar: 'الغرف أو القطع التي لا تُلمس', en: 'Rooms or items that should not be touched' },
      { ar: 'الوقت المناسب للزيارة', en: 'A convenient visit time' },
    ],
    related: ['errands', 'babysitting', 'pet-sitting'],
    faq: [
      {
        q: { ar: 'هل تحضرون مواد التنظيف؟', en: 'Do you bring cleaning products?' },
        a: { ar: 'أخبرونا عند الحجز؛ يمكننا استخدام موادكم أو الاتفاق على غير ذلك.', en: 'Tell us when you book. We can use your products or agree on another option.' },
      },
      {
        q: { ar: 'هل يمكن التنظيف قبل المناسبات؟', en: 'Can you clean before an occasion?' },
        a: { ar: 'نعم، احجزوا مبكراً قبل رمضان والأعياد لأن المواعيد تمتلئ.', en: 'Yes. Book early before Ramadan and Eid, when slots fill up.' } },
      {
        q: { ar: 'هل يمكن أن تنظف وتجالس الأطفال في نفس الزيارة؟', en: 'Can one visit cover cleaning and babysitting?' },
        a: { ar: 'يمكن جمع الخدمتين لمقدّمة رعاية واحدة حسب حجم البيت وعمر الأطفال؛ نتفق على التفاصيل معكم.', en: "One caregiver can combine both, depending on the size of the home and the children's ages. We'll agree the details with you." } },
    ],
    whatsapp: { ar: 'السلام عليكم، أرغب بحجز تنظيف للمنزل.', en: 'Hello, I would like to book home cleaning.' },
  },
  {
    slug: 'errands',
    tier: 'more',
    icon: 'bag',
    name: { ar: 'المشتريات والمساعدة الشخصية', en: 'Errands & Personal Assistance' },
    card: { ar: 'مقاضي البيت والمشاوير الصغيرة عنكم', en: 'Groceries and small errands, off your list' },
    meta: {
      title: { ar: 'المشتريات والمساعدة الشخصية في الرياض | أمان', en: 'Errands & Personal Assistance in Riyadh | Aman' },
      description: {
        ar: 'مقاضي البيت، استلام الطلبات، والمشاوير الصغيرة في الرياض. وفّروا وقتكم لعائلتكم. احجز عبر واتساب.',
        en: 'Groceries, collecting orders and small errands in Riyadh. Save your time for your family. Book on WhatsApp.',
      },
    },
    h1: { ar: 'قائمة مهامكم، أقصر من اليوم', en: 'Your to-do list, shorter from today' },
    intro: {
      ar: 'مقاضي الأسبوع، طلب ينتظر الاستلام، هدية العيد، أو ترتيب الخزانة: نهتم بالمهام الصغيرة التي تأخذ وقتكم من عائلتكم.',
      en: 'The weekly shop, an order waiting to be collected, an Eid gift, a cupboard to sort: we handle the small jobs that take your time away from your family.',
    },
    visit: [
      { title: { ar: 'أرسلوا القائمة', en: 'Send the list' }, text: { ar: 'على واتساب، مع التفضيلات والميزانية.', en: 'On WhatsApp, with preferences and budget.' } },
      { title: { ar: 'نؤكد التفاصيل', en: 'We confirm the details' }, text: { ar: 'البدائل إن لم يتوفر صنف، والموعد.', en: "Substitutes if an item is out, and the time." } },
      { title: { ar: 'ننجز المهمة', en: 'We get it done' }, text: { ar: 'تسوق، استلام، أو ترتيب.', en: 'Shopping, collecting or organising.' } },
      { title: { ar: 'نسلّم ونرتب', en: 'Delivered and put away' }, text: { ar: 'مع الفاتورة وصورة لكل شيء.', en: 'With the receipt and a photo of everything.' } },
    ],
    included: [
      { ar: 'مقاضي البقالة والصيدلية', en: 'Grocery and pharmacy shopping' },
      { ar: 'استلام الطلبات والطرود', en: 'Collecting orders and parcels' },
      { ar: 'ترتيب الخزائن والمخزن', en: 'Organising cupboards and the pantry' },
      { ar: 'تجهيزات المناسبات والأعياد', en: 'Preparing for gatherings and Eid' },
    ],
    prepare: [
      { ar: 'القائمة والتفضيلات', en: 'Your list and preferences' },
      { ar: 'الميزانية وطريقة الدفع', en: 'Budget and payment method' },
      { ar: 'موعد التسليم', en: 'A delivery time' },
    ],
    related: ['home-cleaning', 'elderly-companionship', 'pet-sitting'],
    faq: [
      {
        q: { ar: 'كيف أدفع ثمن المشتريات؟', en: 'How do I pay for the shopping?' },
        a: { ar: 'نتفق على طريقة الدفع عند الحجز، ونرسل لكم الفاتورة دائماً.', en: 'We agree the payment method when you book, and always send you the receipt.' },
      },
      {
        q: { ar: 'ماذا لو لم يتوفر صنف؟', en: "What if an item isn't available?" },
        a: { ar: 'نرسل لكم صورة للبدائل قبل الشراء.', en: 'We send you a photo of alternatives before buying.' } },
      {
        q: { ar: 'هل يمكن المساعدة في تجهيز العيد؟', en: 'Can you help get ready for Eid?' },
        a: { ar: 'نعم، من شراء الضيافة والهدايا إلى ترتيب المجلس. اجمعوها مع تنظيف المنزل.', en: 'Yes, from hospitality and gifts to setting up the majlis. Pair it with home cleaning.' } },
    ],
    whatsapp: { ar: 'السلام عليكم، أرغب بحجز خدمة المشتريات والمساعدة الشخصية.', en: 'Hello, I would like to book errands and personal assistance.' },
  },
  {
    slug: 'pick-up-drop-off',
    tier: 'more',
    icon: 'car',
    name: { ar: 'التوصيل والاستقبال', en: 'Pick-up & Drop-off' },
    card: { ar: 'مشاوير المدرسة والنادي والمواعيد، بأمان', en: 'School runs, clubs and appointments, safely done' },
    meta: {
      title: { ar: 'توصيل الأطفال والعائلة في الرياض | أمان', en: 'School & Family Pick-up and Drop-off in Riyadh | Aman' },
      description: {
        ar: 'توصيل واستقبال الأطفال من المدرسة والنادي، ومرافقة الوالدين للمواعيد في الرياض. فريق خضع للتحقق. احجز عبر واتساب.',
        en: 'School and club pick-ups for children, and rides to appointments for parents in Riyadh. Background-checked staff. Book on WhatsApp.',
      },
    },
    h1: { ar: 'مشاوير العائلة في أيدٍ أمينة', en: "Your family's rides, in trusted hands" },
    intro: {
      ar: 'زحمة الرياض ومواعيد الدوام لا تتوافق دائماً مع جرس المدرسة. نوصل أطفالكم ونستقبلهم، ونرافق والديكم إلى مواعيدهم، ونطمئنكم عند كل وصول.',
      en: "Riyadh traffic and office hours don't always match the school bell. We take and collect your children, accompany your parents to appointments, and message you at every arrival.",
    },
    visit: [
      { title: { ar: 'نسجّل المشوار', en: 'We plan the route' }, text: { ar: 'العنوان والمواعيد ومن يستلم الطفل.', en: 'Addresses, times and who hands over the child.' } },
      { title: { ar: 'استلام في الموعد', en: 'On-time pick-up' }, text: { ar: 'من البيت أو المدرسة أو النادي.', en: 'From home, school or club.' } },
      { title: { ar: 'رسالة عند الانطلاق', en: 'A message as we leave' }, text: { ar: 'تعرفون متى خرجنا ومتى نصل.', en: "You know when we've left and when we'll arrive." } },
      { title: { ar: 'تسليم وتأكيد', en: 'Hand-over and confirmation' }, text: { ar: 'نسلّم للشخص المتفق عليه ونؤكد لكم.', en: 'We hand over to the agreed person and confirm with you.' } },
    ],
    included: [
      { ar: 'توصيل يومي للمدرسة', en: 'Daily school runs' },
      { ar: 'الأندية والأنشطة بعد المدرسة', en: 'Clubs and after-school activities' },
      { ar: 'مرافقة الوالدين للمواعيد', en: 'Accompanying parents to appointments' },
      { ar: 'رسائل عند الانطلاق والوصول', en: 'Messages on departure and arrival' },
    ],
    prepare: [
      { ar: 'أسماء المسموح لهم بالاستلام', en: 'Names of who may collect your child' },
      { ar: 'مقعد الطفل المناسب لعمره', en: 'A car seat suited to your child' },
      { ar: 'جدول المدرسة والأنشطة', en: 'School and activity timetable' },
    ],
    related: ['babysitting', 'elderly-companionship', 'errands'],
    faq: [
      {
        q: { ar: 'هل يمكن جدولة مشاوير يومية؟', en: 'Can rides be scheduled daily?' },
        a: { ar: 'نعم، يمكن ترتيب جدول أسبوعي أو شهري للمدرسة والأنشطة.', en: 'Yes, we can set up a weekly or monthly schedule for school and activities.' },
      },
      {
        q: { ar: 'كيف أعرف أن طفلي وصل؟', en: 'How do I know my child has arrived?' },
        a: { ar: 'نرسل لكم رسالة على واتساب عند الاستلام وعند التسليم.', en: 'We message you on WhatsApp at pick-up and at hand-over.' } },
      {
        q: { ar: 'هل يمكن أن تبقى مقدمة الرعاية مع الطفل بعد التوصيل؟', en: 'Can the caregiver stay with my child after the ride?' },
        a: { ar: 'نعم، يمكن جمع التوصيل مع رعاية الأطفال في البيت حتى عودتكم.', en: 'Yes. Combine the ride with babysitting at home until you are back.' } },
    ],
    whatsapp: { ar: 'السلام عليكم، أرغب بحجز خدمة التوصيل والاستقبال.', en: 'Hello, I would like to book pick-up and drop-off.' },
  },
  {
    slug: 'pet-sitting',
    tier: 'more',
    icon: 'paw',
    name: { ar: 'رعاية الكلاب والقطط', en: 'Dog & Cat Sitting' },
    card: { ar: 'طعام ولعب ونظافة لحيوانك الأليف في بيته', en: 'Meals, play and a clean litter box, in their own home' },
    meta: {
      title: { ar: 'رعاية القطط والكلاب في المنزل بالرياض | أمان', en: 'Cat & Dog Sitting at Home in Riyadh | Aman' },
      description: {
        ar: 'مسافرون أو مشغولون؟ نزور قطتك أو كلبك في البيت للإطعام واللعب والتنظيف ونرسل لكم صوراً. احجز عبر واتساب في الرياض.',
        en: 'Travelling or busy? We visit your cat or dog at home to feed, play and clean up, and send you photos. Book on WhatsApp in Riyadh.',
      },
    },
    h1: { ar: 'قطتك وكلبك في بيتهم، وأنتم مطمئنون', en: 'Your cat or dog stays home, and you stay at ease' },
    intro: {
      ar: 'السفر أو أيام العمل الطويلة لا تعني أن يقضي حيوانك الأليف يومه وحيداً. نزوره في بيته، نحافظ على روتينه، ونطمئنكم عليه بالصور.',
      en: "A trip or a long working day doesn't have to mean a lonely day for your pet. We visit them at home, keep their routine, and keep you posted with photos.",
    },
    visit: [
      { title: { ar: 'نتعرف على روتينه', en: 'We learn the routine' }, text: { ar: 'مواعيد الأكل، الألعاب المفضلة، وما يزعجه.', en: 'Meal times, favourite toys, and anything that unsettles them.' } },
      { title: { ar: 'إطعام وماء نظيف', en: 'Food and fresh water' }, text: { ar: 'بالكميات التي تحددونها، في مواعيدها.', en: 'In the amounts you set, at the usual times.' } },
      { title: { ar: 'لعب وصحبة', en: 'Play and company' }, text: { ar: 'وقت للعب والمداعبة، ونزهة للكلاب إن رغبتم.', en: 'Time to play and cuddle, and a walk for dogs if you wish.' } },
      { title: { ar: 'تنظيف وصورة', en: 'Clean-up and a photo' }, text: { ar: 'تنظيف صندوق الرمل والأواني، ثم صورة لكم على واتساب.', en: 'Litter box and bowls cleaned, then a photo to you on WhatsApp.' } },
    ],
    included: [
      { ar: 'إطعام وتغيير الماء', en: 'Feeding and fresh water' },
      { ar: 'تنظيف صندوق الرمل والأواني', en: 'Litter box and bowl cleaning' },
      { ar: 'لعب ومداعبة', en: 'Play and attention' },
      { ar: 'نزهة قصيرة للكلاب', en: 'A short walk for dogs' },
      { ar: 'صور وتحديثات على واتساب', en: 'Photos and updates on WhatsApp' },
    ],
    prepare: [
      { ar: 'الطعام والرمل يكفيان مدة غيابكم', en: 'Enough food and litter for your time away' },
      { ar: 'رقم الطبيب البيطري المعتاد', en: "Your usual vet's number" },
      { ar: 'طريقة الدخول إلى البيت', en: 'How we get into the home' },
    ],
    related: ['home-cleaning', 'errands', 'babysitting'],
    faq: [
      {
        q: { ar: 'كم زيارة في اليوم؟', en: 'How many visits a day?' },
        a: { ar: 'تحددونها أنتم حسب احتياج حيوانكم؛ زيارة أو أكثر يومياً.', en: "You choose, based on your pet's needs: one visit a day or more." },
      },
      {
        q: { ar: 'هل تعطون الدواء؟', en: 'Can you give medication?' },
        a: { ar: 'نعطي الأدوية الفموية البسيطة حسب تعليماتكم المكتوبة. أي حالة صحية تحتاج طبيباً بيطرياً.', en: 'We give simple oral medicine following your written instructions. Anything clinical needs a vet.' } },
      {
        q: { ar: 'هل يمكن جمعها مع خدمة أخرى؟', en: 'Can I combine this with another service?' },
        a: { ar: 'نعم، كثيرون يضيفون تنظيف البيت أو استلام البريد والمشتريات أثناء السفر.', en: 'Yes. Many families add home cleaning or collecting post and shopping while they travel.' } },
    ],
    whatsapp: { ar: 'السلام عليكم، أرغب بحجز رعاية للقطط/الكلاب.', en: 'Hello, I would like to book cat/dog sitting.' },
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug)!;
export const coreServices = services.filter((s) => s.tier === 'core');
export const moreServices = services.filter((s) => s.tier === 'more');
