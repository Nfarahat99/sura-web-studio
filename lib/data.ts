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
  workingHours:
    "السبت إلى الخميس · 9 صباحاً – 6 مساءً (توقيت السعودية)",
};

export function whatsappLink(message?: string): string {
  const num = CONTACT.whatsapp.replace(/[^0-9]/g, "");
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
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
      "شركات صاعدة تحتاج موقعاً يجيب عملاء، لا مجرّد واجهة جميلة.",
    examples: ["عيادات", "مطاعم", "خدمات احترافية", "متاجر صغيرة"],
    href: "/for/smes",
  },
  {
    key: "charities",
    title: "الجمعيات الخيرية",
    subtitle: "Charities",
    icon: "handshake",
    description:
      "جمعيات تحتاج تجربة تبرّع تشتغل على الجوّال، وتقارير أثر تنشرها بنفسها بلا فريق تقني.",
    examples: ["جمعيات تنموية", "أوقاف", "مبادرات اجتماعية"],
    href: "/for/charities",
  },
  {
    key: "manufacturers",
    title: "المصانع والصناعات",
    subtitle: "Manufacturers",
    icon: "factory",
    description:
      "مصانع تريد بوّابة B2B تُغني موزّعيها عن الاتصال للسؤال عن المخزون والأسعار.",
    examples: ["بوّابات الموزّعين", "كتالوجات منتجات", "أنظمة طلبات"],
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
      "صفحات هبوط ومواقع تعريفية مبنية بـ Next.js — سريعة، تعمل على كلّ الشاشات، ومُحسّنة لمحركات البحث.",
    bullets: [
      "تصميم الجوّال أوّلاً",
      "العربية والإنجليزية بنفس العناية",
      "إطلاق خلال 14–21 يوم",
    ],
  },
  {
    icon: "code",
    title: "تطبيقات ويب",
    description:
      "لوحات تحكم، بوّابات عملاء، أدوات داخلية، ومنتجات SaaS — مبنية بمعايير الإنتاج الفعلي.",
    bullets: [
      "تسجيل دخول وصلاحيات",
      "قواعد بيانات وأتمتة",
      "MVP خلال 6–10 أسابيع",
    ],
  },
  {
    icon: "palette",
    title: "هوية بصرية",
    description:
      "للجهات التي تحتاج هوية كاملة قبل الإطلاق — شعار، ألوان، خطوط، ودليل استخدام.",
    bullets: [
      "أكثر من مفهوم بصري",
      "أمثلة تطبيق على المطبوعات",
      "ملفات بكلّ الصِّيغ",
    ],
  },
  {
    icon: "megaphone",
    title: "حملات Google وMeta",
    description:
      "إدارة حملات Google وMeta — من تأسيس الحملة إلى إطلاقها وتحسينها شهرياً.",
    bullets: [
      "إعداد الحملة",
      "إدارة الميزانية",
      "تقارير شهرية مفصّلة",
    ],
  },
  {
    icon: "search",
    title: "تحسين محركات البحث",
    description:
      "SEO تقني، على-الصفحة، وبناء محتوى — لزيارات عضوية تدوم.",
    bullets: [
      "تدقيق تقني",
      "تحسين الكلمات المفتاحية",
      "تقارير شهرية",
    ],
  },
  {
    icon: "chart",
    title: "تقارير وتحليلات",
    description:
      "لوحات Looker Studio، تقارير شهرية مكتوبة، واجتماعات مراجعة ربع سنوية.",
    bullets: [
      "لوحة معلومات مخصّصة",
      "تقرير شهري مكتوب",
      "اجتماع ربع سنوي",
    ],
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
    name: "ميكرو",
    nameEn: "Micro",
    badge: "جديد",
    description:
      "لمن يحتاج حضوراً على الويب بسرعة، بميزانية محدودة، وبلا اشتراك طويل.",
    priceMain: "4,500",
    currency: "ريال/سنة",
    note: "3 شهور هدية مع الاشتراك السنوي",
    features: [
      "صفحة هبوط احترافية",
      "استضافة ودومين لسنة كاملة",
      "تأسيس وإدارة حملة Google",
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
    description:
      "موقع تسويقي كامل من 5 صفحات، عربي وإنجليزي، مع لوحة إدارة محتوى خفيفة.",
    priceMain: "9,500 – 18,750",
    currency: "ريال · مرة واحدة",
    note: "إطلاق خلال 14–21 يوم",
    features: [
      "حتى 5 صفحات مخصّصة",
      "عربي وإنجليزي بنفس العناية",
      "نظام إدارة محتوى Headless",
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
    description:
      "موقع كامل من 10 صفحات أو أكثر، مع تحسينات على الهوية البصرية ولوحة محتوى متقدّمة.",
    priceMain: "22,500 – 45,000",
    currency: "ريال · مرة واحدة",
    note: "4–6 أسابيع",
    features: [
      "10 صفحات فأكثر",
      "تحسينات على الهوية البصرية",
      "لوحة محتوى متقدّمة ومحرّر للفريق",
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
    description:
      "تطبيق ويب (MVP) بصلاحيات ومزايا مخصّصة، جاهز للإنتاج من اليوم الأول.",
    priceMain: "56,000 – 131,000",
    currency: "ريال · مرة واحدة",
    note: "6–10 أسابيع",
    features: [
      "تسجيل دخول وإدارة مستخدمين",
      "من 3 إلى 5 مزايا رئيسية مخصّصة",
      "قاعدة بيانات وواجهات APIs",
      "نشر تلقائي على Vercel",
      "وثائق فنية وتدريب",
    ],
    cta: "تحدّث معنا",
    highlight: false,
  },
  {
    key: "retainer",
    name: "Retainer",
    nameEn: "Retainer",
    badge: "شراكة",
    description:
      "شريكك الشهري للمنتج — يوم برمجة ويوم تصميم كلّ أسبوع، مع تحديثات مستمرّة.",
    priceMain: "13,125",
    currency: "ريال · شهرياً",
    note: "اشتراك متجدّد",
    features: [
      "يوم برمجة كلّ أسبوع",
      "يوم تصميم كلّ أسبوع",
      "أولوية في الردّ والتنفيذ",
      "تقرير شهري بكلّ ما أنجزناه",
    ],
    cta: "ابدأ الشراكة",
    highlight: false,
  },
];

export const ADDONS = [
  { name: "ترقية لموقع كامل", price: "2,500 ريال", note: "مرة واحدة" },
  { name: "هوية بصرية كاملة", price: "1,500 ريال", note: "مرة واحدة" },
  { name: "SEO سنوي", price: "5,400 ريال", note: "3 شهور هدية" },
  { name: "تقارير وتحليلات سنوية", price: "2,250 ريال", note: "3 شهور هدية" },
];

export const VALUE_PILLARS: {
  icon: IconName;
  title: string;
  description: string;
}[] = [
  {
    icon: "bolt",
    title: "سريع",
    description:
      "أوّل نشر خلال 14–21 يوم لموقع تسويقي، و6–10 أسابيع لـ MVP تطبيق ويب.",
  },
  {
    icon: "sparkle",
    title: "جميل",
    description:
      "تصميم نصنعه من الصفر، لا قالباً جاهزاً. الطباعة العربية نعطيها نفس عناية الإنجليزية.",
  },
  {
    icon: "target",
    title: "بلا تعقيد",
    description:
      "باقات ثابتة النطاق، سعر معلن من البداية، ولا مقترحات 60 صفحة لموقع من 5 صفحات.",
  },
];

export const BUNDLE_SCENARIOS = [
  {
    key: "starter",
    icon: "seedling" as IconName,
    title: "🌱 البداية",
    name: "Starter Bundle",
    description: "أوّل خطوة على الويب — صفحة هبوط، استضافة، وحملة جاهزة.",
    items: ["باقة Core السنوية"],
    priceList: "4,500",
    priceFinal: "4,500 ريال/سنة",
    saving: null,
    renewal: "تجديد: 3,900 ريال/سنة",
  },
  {
    key: "growth",
    icon: "bolt" as IconName,
    title: "🌿 النموّ",
    name: "Growth Bundle — الأكثر طلباً",
    description:
      "حضور كامل، تحسين محركات البحث، وتقارير شهرية — للجهات التي تبني للنموّ الطويل.",
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
    title: "🌳 الإطلاق الكامل",
    name: "Full Stack Bundle",
    description:
      "هوية، موقع، تحسين محركات بحث، وتقارير — كلّ ما تحتاجه للإطلاق دفعة واحدة.",
    items: [
      "باقة Core السنوية",
      "موقع كامل",
      "هوية بصرية",
      "SEO سنوي",
      "تقارير سنوية",
    ],
    priceList: "16,150",
    priceFinal: "14,572 ريال/سنة",
    saving: "خصم 15% وشهر استشارة هدية",
    renewal: "تجديد: ~9,600 ريال (بلا رسوم الإطلاق)",
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
    heroLine: "موقعك هو أفضل بائع عندك — لو يشتغل صحّ.",
    heroDescription:
      "أغلب الشركات الصغيرة تخسر عملاء كلّ يوم لأنّ موقعها لا يحوّل، أو لا يفتح من الجوّال أصلاً. نبني لك حضوراً يشتغل من اليوم الأول: موقع، وحملة، ومتابعة شهرية.",
    icon: "building",
    pains: [
      {
        icon: "search",
        title: "العميل يبحث ولا يجدك",
        description:
          "موقع قديم بلا تحسين بحث يعني خسارة 5 إلى 10 عملاء كلّ أسبوع — لصالح منافس موقعه شغّال.",
      },
      {
        icon: "bolt",
        title: "الموقع بطيء أو ما يفتح من الجوّال",
        description:
          "80% من زيارات السوق السعودي من الجوّال. لو موقعك تأخّر ثوانٍ، خسرت العميل قبل أن يقرأ سطراً واحداً.",
      },
      {
        icon: "recycle",
        title: "الموقع ما يحوّل",
        description:
          "موقع جميل بلا دعوة واضحة لاتخاذ خطوة، أو بلا نموذج سهل، يعني زيارات لا تتحوّل لعملاء.",
      },
    ],
    solution: [
      {
        icon: "rocket",
        title: "صفحة هبوط أو موقع 5 صفحات",
        description:
          "مبني بـ Next.js، يفتح خلال ثانيتين على شبكة 4G السعودية.",
      },
      {
        icon: "megaphone",
        title: "حملة Google وMeta جاهزة",
        description:
          "نُؤسّسها، ونُديرها شهرياً، ونعطيك تقريراً مفصّلاً عن كلّ ريال أُنفق.",
      },
      {
        icon: "chart",
        title: "متابعة شهرية وتحسين مستمرّ",
        description:
          "تقرير شهري بأرقام واضحة، وتعديلات على الحملة بناءً عليه.",
      },
    ],
    recommendedBundle: {
      name: "🌿 باقة النموّ للشركات الصغيرة",
      items: [
        "باقة Core السنوية: صفحة هبوط، استضافة، دومين، وحملة Google",
        "تحسين محركات بحث سنوي: تقني، على-الصفحة، وتقرير شهري",
        "تقارير وتحليلات سنوية",
        "🎁 إعداد ملف Google Business هدية",
      ],
      priceMain: "11,385",
      priceNote: "ريال/سنة · بدل 12,150 — خصم 10% على الإضافات",
      bonus:
        "إعداد ملف Google Business، وربط Google Analytics 4 — كلّها هدية.",
    },
    examples: [
      {
        sector: "عيادات",
        case: "نموذج حجز مواعيد، وصفحة خدمات لكلّ تخصّص.",
      },
      {
        sector: "مطاعم",
        case: "قائمة طعام تفاعلية، خريطة الموقع، ورقم حجز مباشر.",
      },
      {
        sector: "خدمات احترافية",
        case: "صفحة لكلّ خدمة، وقسم لحجز استشارة.",
      },
      {
        sector: "متاجر صغيرة",
        case: "كتالوج منتجات، وروابط واتساب للطلب المباشر.",
      },
    ],
    ctaPrimary: "احجز مكالمة استكشاف مجانية",
    ctaSecondary: "اطّلع على كلّ الباقات",
  },
  charities: {
    key: "charities",
    title: "سُرَى للجمعيات الخيرية",
    subtitle: "Surā for Charities",
    heroLine: "كلّ تبرّع ما يصل، أثر ما يحدث.",
    heroDescription:
      "نبني للجمعيات صفحات تبرّع تشتغل على الجوّال، وصفحات أثر تنشرها بنفسك، وتقارير تبني ثقة المتبرّعين والمجلس.",
    icon: "handshake",
    pains: [
      {
        icon: "bolt",
        title: "نموذج التبرّع لا يشتغل على الجوّال",
        description:
          "أغلب المتبرّعين يدخلون من الجوّال — ونموذج تبرّع معقّد يخسر لك نصف المحاولات.",
      },
      {
        icon: "folder",
        title: "صعوبة نشر تقارير الأثر",
        description:
          "كلّ تحديث صفحة يحتاج فريقاً تقنياً، فتتأخّر التقارير، وتتراجع ثقة المتبرّعين.",
      },
      {
        icon: "target",
        title: "ميزانية محدودة، مساءلة عالية",
        description:
          "تحتاج أسعاراً ثابتة معلنة — لا \"ابتداءً من\"، ولا فواتير مفاجئة.",
      },
    ],
    solution: [
      {
        icon: "handshake",
        title: "صفحة تبرّع مُحسّنة للجوّال",
        description:
          "ربط مع Stripe أو Paytabs، تبرّع متكرّر، وإيصال آلي بالعربية والإنجليزية.",
      },
      {
        icon: "chart",
        title: "نظام نشر تقارير الأثر",
        description:
          "محرّر سهل لفريقك — أرقام، صور، وقصص ميدانية بلا أي كود.",
      },
      {
        icon: "globe",
        title: "عربي وإنجليزي من اليوم الأول",
        description:
          "للوصول للمتبرّعين العرب والأجانب — هذا أكثر فرق نشوفه يصنع نتيجة.",
      },
    ],
    recommendedBundle: {
      name: "💚 باقة الأثر للجمعيات",
      items: [
        "باقة Launch — موقع كامل بالعربية والإنجليزية",
        "صفحة تبرّع مربوطة بـ Stripe أو Paytabs",
        "قالب جاهز لتقارير الأثر الشهرية",
        "SEO تقني للوصول العضوي",
        "🎁 خصم 15% خاص للجمعيات المسجّلة رسمياً",
      ],
      priceMain: "8,075 – 15,940",
      priceNote:
        "ريال · بعد خصم 15% للجمعيات المسجّلة — من سعر باقة Launch.",
      bonus:
        "قالب جاهز لـ\"تقرير الأثر السنوي\"، وربط مع Mailchimp أو Sendinblue لإشعار المتبرّعين بكلّ تحديث.",
    },
    examples: [
      {
        sector: "جمعيات تنموية",
        case: "صفحات للمشاريع، خريطة المستفيدين، وتبرّع لمشروع بعينه.",
      },
      {
        sector: "أوقاف",
        case: "حاسبة وقف، شارات أنواع الوقف، وتقرير سنوي.",
      },
      {
        sector: "مبادرات اجتماعية",
        case: "صفحة للحملة، عدّاد للمتبرّعين، وقصص ميدانية.",
      },
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
      "موزّعك يتّصل بك عشر مرات يومياً ليسأل عن المخزون والأسعار. نبني لك بوّابة B2B تختصر اتصالاته، تعرض المخزون لحظياً، وتستقبل طلباته تلقائياً.",
    icon: "factory",
    pains: [
      {
        icon: "megaphone",
        title: "مكالمات الموزّعين تُعطّل خطّ الإنتاج",
        description:
          "كلّ موزّع يتّصل من 5 إلى 10 مرات في الأسبوع للسؤال عن مخزون أو سعر — يعني ساعات تضيع يومياً.",
      },
      {
        icon: "folder",
        title: "كتالوج منتجات قديم أو ناقص",
        description:
          "ملف Excel أو PDF عمره سنتان يعني موزّعاً يطلب منتجاً غير متوفّر، ويعني إحراجاً لك معه.",
      },
      {
        icon: "search",
        title: "نظام ERP يخدم العمليات الداخلية، لا الموزّع",
        description:
          "SAP وOdoo وOracle ممتازة للداخل، لكنّها ثقيلة كواجهة بين المصنع والموزّع.",
      },
    ],
    solution: [
      {
        icon: "code",
        title: "بوّابة B2B بصلاحيات",
        description:
          "تسجيل دخول للموزّع، مخزون لحظي، طلب مباشر، وإشعارات فورية للمدير.",
      },
      {
        icon: "folder",
        title: "كتالوج منتجات يتحدّث ذاتياً",
        description:
          "يتزامن مع نظام ERP عندك (SAP أو Odoo)، أو يُحدَّث من لوحة إدارة سهلة.",
      },
      {
        icon: "chart",
        title: "تقارير للمدير والموزّع",
        description:
          "المدير يشوف أداء كلّ موزّع، والموزّع يشوف تاريخ طلباته وفواتيره.",
      },
    ],
    recommendedBundle: {
      name: "🏭 باقة المصنع — موقع وبوّابة موزّعين",
      items: [
        "باقة Build — موقع تعريفي كامل",
        "باقة App — بوّابة B2B للموزّعين",
        "ربط مع نظام ERP الحالي (SAP أو Odoo أو Oracle)",
        "🎁 30 يوم دعم لتأهيل موزّعيك على البوّابة — هدية",
      ],
      priceMain: "66,937 – 149,812",
      priceNote:
        "ريال · حسب حجم المشروع · باقتا Build وApp بخصم 15%",
      bonus:
        "30 يوم دعم لتأهيل أوّل 10 موزّعين على البوّابة، وجلسة تدريب مسجّلة يرجعون إليها لاحقاً.",
    },
    examples: [
      {
        sector: "مصانع غذائية",
        case: "كتالوج SKU، بوّابة طلب للموزّعين، وتتبّع للشحنات.",
      },
      {
        sector: "مواد بناء",
        case: "حاسبة كميات، عرض أسعار فوري، وموافقة المدير.",
      },
      {
        sector: "صناعات معدنية",
        case: "كتالوج بالمواصفات، مخطّطات تقنية، وطلب عيّنات.",
      },
    ],
    ctaPrimary: "احجز جلسة تشخيص للمصنع",
    ctaSecondary: "تحدّث مع مهندس",
  },
};
