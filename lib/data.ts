import type { IconName } from "@/components/Icon";

export const NAV_LINKS = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "خدماتنا" },
  { href: "/pricing", label: "الباقات" },
  { href: "/for/smes", label: "حلولنا للقطاعات" },
  { href: "/work", label: "أعمالنا" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل معنا" },
];

const WHATSAPP_FALLBACK = "+966500000000";
const WHATSAPP_ENV =
  (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_WHATSAPP_NUMBER) || "";

export const CONTACT = {
  whatsapp: WHATSAPP_ENV || WHATSAPP_FALLBACK,
  whatsappIsPlaceholder: !WHATSAPP_ENV,
  whatsappDisplay: "تواصل عبر واتساب",
  email: "noureddin@sura.studio",
  domain: "sura.studio",
  workingHours: "السبت - الخميس · 9 صباحاً - 6 مساءً (السعودية)",
};

export function whatsappLink(message?: string): string {
  const num = CONTACT.whatsapp.replace(/[^0-9]/g, "");
  const text = message
    ? `?text=${encodeURIComponent(message)}`
    : "";
  return `https://wa.me/${num}${text}`;
}

export type Audience = {
  key: "smes" | "charities" | "manufacturers";
  title: string;
  subtitle: string;
  icon: IconName;
  description: string;
  examples: string[];
  href: string;
};

export const AUDIENCES: Audience[] = [
  {
    key: "smes",
    title: "الشركات الصغيرة",
    subtitle: "SMEs",
    icon: "building",
    description:
      "شركات صغيرة تنمو وتحتاج حضور رقمي يجلب عملاء حقيقيين — ليس مجرد موقع جميل.",
    examples: ["عيادات", "مطاعم", "خدمات احترافية", "متاجر صغيرة"],
    href: "/for/smes",
  },
  {
    key: "charities",
    title: "الجمعيات الخيرية",
    subtitle: "Charities",
    icon: "handshake",
    description:
      "جمعيات تحتاج تدفّق تبرّع يعمل على الموبايل، وتقارير أثر تنشرها بدون فريق تقني.",
    examples: ["جمعيات تنموية", "أوقاف", "مبادرات اجتماعية"],
    href: "/for/charities",
  },
  {
    key: "manufacturers",
    title: "المصانع والصناعات",
    subtitle: "Manufacturers",
    icon: "factory",
    description:
      "مصانع تريد بوابة B2B تُغني الموزّعين عن مكالمات السؤال عن المخزون.",
    examples: ["بوابات الموزّعين", "كتالوجات منتجات", "أنظمة طلبات"],
    href: "/for/manufacturers",
  },
];

export type Service = {
  icon: IconName;
  title: string;
  description: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    icon: "rocket",
    title: "مواقع تسويقية",
    description:
      "صفحات هبوط ومواقع تعريفية مبنية بـ Next.js — سريعة، responsive، ومُحسّنة لمحركات البحث.",
    bullets: ["تصميم موبايل أوّلاً", "العربية والإنجليزية بنفس العناية", "إطلاق خلال 14-21 يوم"],
  },
  {
    icon: "code",
    title: "تطبيقات ويب",
    description:
      "لوحات تحكم، بوابات عملاء، أدوات داخلية، ومنتجات SaaS — مبنية بمعايير الإنتاج.",
    bullets: ["تسجيل دخول + صلاحيات", "قواعد بيانات وأتمتة", "MVP خلال 6-10 أسابيع"],
  },
  {
    icon: "palette",
    title: "هوية بصرية",
    description:
      "للجهات التي تحتاج هوية متكاملة قبل الإطلاق — لوقو، ألوان، خطوط، دليل استخدام.",
    bullets: ["مفاهيم متعدّدة", "تطبيقات على المواد", "ملفات بكل الصيغ"],
  },
  {
    icon: "megaphone",
    title: "حملات تسويقية",
    description:
      "إدارة حملات Google و Meta — من التأسيس للإطلاق للتحسين الشهري.",
    bullets: ["إعداد الحملة", "إدارة الميزانية", "تقارير شهرية شفّافة"],
  },
  {
    icon: "search",
    title: "تحسين محركات البحث",
    description:
      "SEO تقني + on-page + بناء محتوى — لجلب زيارات عضوية مستدامة.",
    bullets: ["تدقيق تقني", "تحسين الكلمات المفتاحية", "تقارير شهرية"],
  },
  {
    icon: "chart",
    title: "تقارير وتحليلات",
    description:
      "لوحات Looker Studio + تقارير شهرية مكتوبة + اجتماعات مراجعة دورية.",
    bullets: ["لوحة معلومات مخصّصة", "تقرير شهري مكتوب", "اجتماع ربع سنوي"],
  },
];

export type PricingTier = {
  key: string;
  name: string;
  nameEn: string;
  badge: string | null;
  description: string;
  priceMain: string;
  currency: string;
  note: string;
  features: string[];
  cta: string;
  highlight: boolean;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    key: "micro",
    name: "سُرَى ميكرو",
    nameEn: "Micro",
    badge: "جديد",
    description: "للمشاريع الصغيرة جداً التي تريد حضوراً سريعاً بميزانية محدودة.",
    priceMain: "4,500",
    currency: "ريال/سنة",
    note: "3 شهور مجاناً مع الالتزام السنوي",
    features: [
      "صفحة هبوط احترافية",
      "استضافة + دومين لسنة كاملة",
      "تأسيس وإدارة حملة تسويقية",
      "دعم فني عبر واتساب",
    ],
    cta: "احجز ميكرو",
    highlight: false,
  },
  {
    key: "launch",
    name: "Launch",
    nameEn: "Launch",
    badge: null,
    description: "موقع تسويقي كامل من 5 صفحات، ثنائي اللغة، CMS خفيف.",
    priceMain: "9,500 – 18,750",
    currency: "ريال · مرة واحدة",
    note: "إطلاق خلال 14-21 يوم",
    features: [
      "حتى 5 صفحات مخصّصة",
      "ثنائي اللغة (عربي + إنجليزي)",
      "نظام إدارة محتوى لا-رأسي",
      "تحليلات GA4 + Search Console",
      "ضمان 14 يوم بعد الإطلاق",
    ],
    cta: "احجز Launch",
    highlight: true,
  },
  {
    key: "build",
    name: "Build",
    nameEn: "Build",
    badge: null,
    description: "موقع كامل (10+ صفحات) + تحسينات هوية + CMS متقدّم.",
    priceMain: "22,500 – 45,000",
    currency: "ريال · مرة واحدة",
    note: "4-6 أسابيع",
    features: [
      "10+ صفحات",
      "تحسينات هوية بصرية",
      "CMS متقدّم + محرّر للفريق",
      "SEO تقني كامل",
      "ضمان 30 يوم بعد الإطلاق",
    ],
    cta: "احجز Build",
    highlight: false,
  },
  {
    key: "app",
    name: "App",
    nameEn: "App",
    badge: null,
    description: "تطبيق ويب MVP بصلاحيات ومميزات أساسية، مبني للإنتاج.",
    priceMain: "56,000 – 131,000",
    currency: "ريال · مرة واحدة",
    note: "6-10 أسابيع",
    features: [
      "تسجيل دخول + إدارة مستخدمين",
      "3-5 مميزات رئيسية مخصّصة",
      "قاعدة بيانات + APIs",
      "نشر تلقائي على Vercel",
      "وثائق فنية وتدريب",
    ],
    cta: "تحدث معنا",
    highlight: false,
  },
  {
    key: "retainer",
    name: "Retainer",
    nameEn: "Retainer",
    badge: "شراكة",
    description:
      "شريك المنتج الشهري: يوم تطوير + يوم تصميم أسبوعياً — تحديثات مستمرّة.",
    priceMain: "13,125",
    currency: "ريال · شهرياً",
    note: "اشتراك متجدّد",
    features: [
      "يوم تطوير / أسبوع",
      "يوم تصميم / أسبوع",
      "أولوية استجابة",
      "تقرير شهري للأعمال المُنجزة",
    ],
    cta: "ابدأ شراكة",
    highlight: false,
  },
];

export const ADDONS = [
  { name: "ترقية لموقع كامل", price: "2,500 ريال", note: "مرة واحدة" },
  { name: "هوية بصرية كاملة", price: "1,500 ريال", note: "مرة واحدة" },
  { name: "SEO سنوي", price: "5,400 ريال", note: "3 شهور مجاناً" },
  { name: "تقارير وتحليلات سنوية", price: "2,250 ريال", note: "3 شهور مجاناً" },
];

export const VALUE_PILLARS: {
  icon: IconName;
  title: string;
  description: string;
}[] = [
  {
    icon: "bolt",
    title: "سريع",
    description: "أول نشر خلال 14-21 يوم لموقع تسويقي، 6-10 أسابيع لـ MVP تطبيق ويب.",
  },
  {
    icon: "sparkle",
    title: "جميل",
    description:
      "تصميم قائد، ليس قالب مُشترى. الطباعة العربية تُعامَل بنفس عناية اللاتينية.",
  },
  {
    icon: "target",
    title: "بلا مسرحيات",
    description:
      "باقات ثابتة النطاق، تسعير شفّاف، بلا مقترحات 60 صفحة لموقع من 5 صفحات.",
  },
];

export const BUNDLE_SCENARIOS = [
  {
    key: "starter",
    icon: "seedling" as IconName,
    title: "🌱 السُرَى",
    name: "Starter Bundle",
    description: "للبدء بحضور رقمي بسيط وفعّال.",
    items: ["باقة Core السنوية"],
    priceList: "4,500",
    priceFinal: "4,500 ريال/سنة",
    saving: null,
    renewal: "تجديد: 3,900 ريال/سنة",
  },
  {
    key: "growth",
    icon: "bolt" as IconName,
    title: "🌿 النامي",
    name: "Growth Bundle — الأكثر شيوعاً",
    description: "حضور كامل + SEO + تقارير شهرية. للذي يبحث عن نمو حقيقي.",
    items: ["باقة Core السنوية", "SEO سنوي", "تقارير شهرية"],
    priceList: "12,150",
    priceFinal: "11,385 ريال/سنة",
    saving: "خصم 10% على الإضافات",
    renewal: "تجديد: ~10,800 ريال/سنة",
    highlight: true,
  },
  {
    key: "fullstack",
    icon: "ship" as IconName,
    title: "🌳 المتمكّن",
    name: "Full Stack Bundle",
    description: "حضور رقمي متكامل + هوية + موقع كامل + SEO + تقارير.",
    items: [
      "باقة Core السنوية",
      "موقع كامل",
      "هوية بصرية",
      "SEO سنوي",
      "تقارير سنوية",
    ],
    priceList: "16,150",
    priceFinal: "14,572 ريال/سنة",
    saving: "خصم 15% + شهر استشارة مجاناً",
    renewal: "تجديد: ~9,600 ريال (بدون one-time)",
  },
];

export type AudienceOffer = {
  key: "smes" | "charities" | "manufacturers";
  title: string;
  subtitle: string;
  heroLine: string;
  heroDescription: string;
  icon: IconName;
  pains: { icon: IconName; title: string; description: string }[];
  solution: { icon: IconName; title: string; description: string }[];
  recommendedBundle: {
    name: string;
    items: string[];
    priceMain: string;
    priceNote: string;
    bonus: string;
  };
  examples: { sector: string; case: string }[];
  ctaPrimary: string;
  ctaSecondary: string;
};

export const AUDIENCE_OFFERS: Record<Audience["key"], AudienceOffer> = {
  smes: {
    key: "smes",
    title: "سُرَى للشركات الصغيرة",
    subtitle: "Surā for SMEs",
    heroLine: "موقعك = بائعك الأفضل. لو يشتغل.",
    heroDescription:
      "أغلب الشركات الصغيرة تخسر عملاء يومياً لأن موقعها لا يحوّل أو لا يفتح على الجوّال. نبني لك حضوراً يشتغل من اليوم الأول — موقع + حملة + متابعة.",
    icon: "building",
    pains: [
      {
        icon: "search",
        title: "العميل يبحث ولا يجدك",
        description:
          "موقع قديم بدون SEO = خسارة 5-10 عملاء أسبوعياً لمنافس بموقع شغّال.",
      },
      {
        icon: "bolt",
        title: "الموبايل معطّل أو بطيء",
        description: "80% من زيارات السوق السعودي من الجوّال. لو موقعك ما يفتح بسرعة، خسرت العميل قبل ما يقرأ.",
      },
      {
        icon: "recycle",
        title: "الموقع ما يحوّل",
        description:
          "موقع جميل بدون CTA واضح أو نموذج بسيط = زيارات بلا عملاء.",
      },
    ],
    solution: [
      {
        icon: "rocket",
        title: "صفحة هبوط أو موقع 5 صفحات",
        description: "مبني على Next.js، سريع، يفتح خلال ثانيتين على 4G سعودي.",
      },
      {
        icon: "megaphone",
        title: "حملة Google + Meta معدّة لك",
        description:
          "إعداد الحملة + إدارتها شهرياً + تقرير شفّاف عن كل ريال.",
      },
      {
        icon: "chart",
        title: "متابعة شهرية وتطوير",
        description:
          "تقرير شهري بأرقام واضحة + تعديلات على الحملة بناءً عليها.",
      },
    ],
    recommendedBundle: {
      name: "🌿 سُرَى Growth للشركات الصغيرة",
      items: [
        "باقة Core سنوية (صفحة هبوط + استضافة + دومين + حملة)",
        "SEO سنوي (تحسين تقني + on-page + تقرير شهري)",
        "تقارير وتحليلات سنوية",
        "🎁 Google Business setup مجاناً",
      ],
      priceMain: "11,385",
      priceNote: "ريال/سنة · بدلاً من 12,150 (خصم 10% على الإضافات)",
      bonus: "إعداد ملف Google Business + دمج Google Analytics 4 مجاناً",
    },
    examples: [
      { sector: "عيادات", case: "نموذج حجز مواعيد + صفحة خدمات لكل تخصّص" },
      { sector: "مطاعم", case: "قائمة طعام تفاعلية + خريطة + رقم حجز" },
      { sector: "خدمات احترافية", case: "صفحات لكل خدمة + قسم 'احجز استشارة'" },
      { sector: "متاجر صغيرة", case: "كاتالوج منتجات + روابط واتساب للطلب" },
    ],
    ctaPrimary: "احجز مكالمة استكشاف مجانية",
    ctaSecondary: "شاهد كل الباقات",
  },
  charities: {
    key: "charities",
    title: "سُرَى للجمعيات الخيرية",
    subtitle: "Surā for Charities",
    heroLine: "كل تبرّع ما يصل = تأثير ما يحدث.",
    heroDescription:
      "نبني للجمعيات تدفّقات تبرّع تشتغل على الجوّال، وصفحات أثر تنشرها بنفسك، وتقارير شفّافة تبني الثقة مع المتبرّعين والمجلس.",
    icon: "handshake",
    pains: [
      {
        icon: "bolt",
        title: "نموذج التبرّع معطّل على الموبايل",
        description:
          "أغلب المتبرّعين من الجوّال — ونموذج التبرّع المعقّد = خسارة 50% من المحاولات.",
      },
      {
        icon: "folder",
        title: "صعوبة نشر تقارير الأثر",
        description:
          "كل تحديث صفحة يحتاج فريق تقني = تقارير تتأخر = ثقة المتبرّعين تتراجع.",
      },
      {
        icon: "target",
        title: "ميزانية محدودة، مساءلة عالية",
        description:
          "تحتاج أسعار ثابتة وشفّافة — لا 'ابتداءً من' ولا فواتير مفاجئة.",
      },
    ],
    solution: [
      {
        icon: "handshake",
        title: "صفحة تبرّع مُحسّنة للجوّال",
        description:
          "تكامل مع Stripe / Paytabs، تبرّع متكرّر، إيصال آلي بالعربية والإنجليزية.",
      },
      {
        icon: "chart",
        title: "نظام نشر تقارير الأثر",
        description:
          "محرّر بسيط لفريقك — أرقام، صور، قصص ميدانية بدون أي كود.",
      },
      {
        icon: "globe",
        title: "ثنائي اللغة من اليوم الأول",
        description:
          "للوصول للمتبرّعين العرب والأجانب — هذا أكثر فرق نلاحظه.",
      },
    ],
    recommendedBundle: {
      name: "💚 سُرَى Cause للجمعيات",
      items: [
        "باقة Launch — موقع كامل ثنائي اللغة",
        "صفحة تبرّع مع Stripe/Paytabs",
        "قالب تقارير أثر شهرية",
        "SEO تقني للوصول العضوي",
        "🎁 خصم 15% خاص للجمعيات المسجّلة",
      ],
      priceMain: "8,075 – 15,940",
      priceNote: "ريال · بعد خصم 15% للجمعيات المسجّلة (من Launch tier)",
      bonus:
        "قالب 'تقرير الأثر السنوي' جاهز + دمج مع Mailchimp/Sendinblue لإشعار المتبرّعين",
    },
    examples: [
      { sector: "جمعيات تنموية", case: "صفحات مشاريع + خريطة استفادة + تبرّع لمشروع محدّد" },
      { sector: "أوقاف", case: "حاسبة وقف + شارات أنواع الوقف + تقرير سنوي" },
      { sector: "مبادرات اجتماعية", case: "صفحة حملة + عدّاد متبرّعين + قصص ميدانية" },
    ],
    ctaPrimary: "احجز جلسة تشخيص مجانية",
    ctaSecondary: "اطّلع على الباقات",
  },
  manufacturers: {
    key: "manufacturers",
    title: "سُرَى للمصانع والصناعات",
    subtitle: "Surā for Manufacturers",
    heroLine: "موزّعك يحتاج بوّابة، لا مكالمة.",
    heroDescription:
      "موزّعك يتّصل 10 مرات يومياً للسؤال عن المخزون والأسعار. نبني لك بوّابة B2B تختصر اتصالاته، تظهر المخزون لحظياً، وتستقبل طلباته أوتوماتيكياً.",
    icon: "factory",
    pains: [
      {
        icon: "megaphone",
        title: "مكالمات موزّعين تُعطّل العمليات",
        description:
          "كل موزّع يتّصل 5-10 مرات أسبوعياً للسؤال عن مخزون أو سعر = ساعات يومياً مهدورة.",
      },
      {
        icon: "folder",
        title: "كتالوج منتجات قديم أو ناقص",
        description:
          "ملف Excel أو PDF عمره سنتين = موزّع يطلب منتج غير متوفّر = إحراج.",
      },
      {
        icon: "search",
        title: "ERP صلب لا يقدّم تجربة عميل",
        description:
          "SAP/Odoo/Oracle ممتاز للداخل، فاشل كواجهة لموزّع.",
      },
    ],
    solution: [
      {
        icon: "code",
        title: "بوّابة B2B بصلاحيات",
        description:
          "تسجيل دخول للموزّع، مخزون لحظي، طلب مباشر، إشعارات للمدير.",
      },
      {
        icon: "folder",
        title: "كاتالوج منتجات يُحدَّث ذاتياً",
        description:
          "يتزامن مع ERP الخاص بك (SAP/Odoo) أو يُحدَّث من لوحة إدارة بسيطة.",
      },
      {
        icon: "chart",
        title: "تقارير للمدير والموزّع",
        description:
          "المدير يرى أداء كل موزّع، الموزّع يرى تاريخ طلباته وفواتيره.",
      },
    ],
    recommendedBundle: {
      name: "🏭 سُرَى Industry للمصانع",
      items: [
        "باقة Build — موقع تعريفي كامل",
        "باقة App — بوّابة B2B للموزّعين",
        "تكامل مع ERP الحالي (SAP / Odoo / Oracle)",
        "🎁 30 يوم دعم تأهيل الموزّعين مجاناً",
      ],
      priceMain: "66,937 – 149,812",
      priceNote: "ريال · حسب التعقيد · Build + App ضمن خصم 15%",
      bonus: "30 يوم دعم لتأهيل أوّل 10 موزّعين على البوّابة + جلسة تدريب مسجّلة",
    },
    examples: [
      { sector: "مصانع غذائية", case: "كتالوج SKU + بوّابة طلب موزّعين + تتبّع شحنات" },
      { sector: "مواد بناء", case: "حاسبة كميات + عرض أسعار آني + موافقة مدير" },
      { sector: "صناعات معدنية", case: "كاتالوج مواصفات + مخطّطات + طلب عيّنات" },
    ],
    ctaPrimary: "احجز جلسة تشخيص للمصنع",
    ctaSecondary: "تحدّث مع مهندس حلول",
  },
};
