import Link from "next/link";
import Icon, { type IconName } from "@/components/Icon";
import { VALUE_PILLARS } from "@/lib/data";

export const metadata = {
  title: "من نحن — سُرَى",
  description: "قصة سُرَى ورسالتها وفريقها — لماذا نُرافقك في الرحلة.",
};

const PRINCIPLES: { icon: IconName; t: string }[] = [
  { icon: "ship", t: "نُسلّم الأصغر فالأكبر" },
  { icon: "target", t: "النتائج لا الساعات" },
  { icon: "globe", t: "العربية والإنجليزية متساويتان" },
  { icon: "folder", t: "المحفظة هي البائع" },
  { icon: "door", t: "نقول لا لما لا يناسب" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream py-20">
        <div
          className="pointer-events-none absolute inset-x-0 top-1/3 mx-auto h-72 max-w-3xl bg-green/10 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-ink">
            من نحن
          </p>
          <h1 className="mt-4 text-[2.5rem] font-black leading-[1.15] text-navy sm:text-5xl md:text-6xl">
            استوديو يبني للنامين، ليس للكبار.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.85] text-navy/80 sm:text-lg">
            سُرَى كلمة عربية تعني <em className="not-italic font-bold text-navy">الصاعد</em> و
            <em className="not-italic font-bold text-navy">النامي</em>. نختار اسمنا
            لأنّنا نؤمن أنّ الشركات الصاعدة والجمعيات والمصانع تستحقّ نفس عناية
            التصميم والبرمجة التي تحظى بها الشركات الكبيرة — بسعر يناسبها.
          </p>
        </div>
      </section>

      <section className="border-y border-ash/40 bg-mist py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2 md:gap-14">
          <div className="rounded-2xl border border-ash/40 bg-white p-7 shadow-soft">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-ink">
              رسالتنا
            </p>
            <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
              نبني منتجات رقمية تنمو مع عملائنا.
            </h2>
            <p className="mt-4 text-navy/80">
              بسرعة، وبجمال، وبدون مسرحيات الوكالات. نختار عملاءنا بعناية، ونقول لا
              لمن لا نقدر نضمن نجاحه.
            </p>
          </div>
          <div className="rounded-2xl border border-ash/40 bg-white p-7 shadow-soft">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-ink">
              رؤيتنا
            </p>
            <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
              أن يصبح الويب العربي بنفس جودة الويب اللاتيني.
            </h2>
            <p className="mt-4 text-navy/80">
              من الطباعة إلى تجربة الموبايل إلى سرعة التحميل — كل تفصيلة بنفس
              العناية.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-ash/40 bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-ink">
              قيمنا
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
              خمس قيم نُجادل عليها
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PRINCIPLES.map((v) => (
              <div
                key={v.t}
                className="hover-lift flex flex-col items-center rounded-2xl border border-ash/50 bg-white p-6 text-center shadow-soft hover:-translate-y-1 hover:border-green/40 hover:shadow-lift"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green-ink">
                  <Icon name={v.icon} size={24} />
                </div>
                <p className="mt-4 font-bold text-navy">{v.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-ash/40 bg-mist py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-ink">
              ثلاث قيم نبني عليها
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
              سريع · جميل · بلا مسرحيات
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {VALUE_PILLARS.map((p) => (
              <div
                key={p.title}
                className="hover-lift rounded-2xl border border-ash/50 bg-white p-8 shadow-soft hover:-translate-y-1 hover:border-green/40 hover:shadow-lift"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-green/10 text-green-ink">
                  <Icon name={p.icon} size={28} />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-navy">{p.title}</h3>
                <p className="mt-3 text-navy/75">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-cream">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-light">
              المؤسس
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">نور الدين فرحات</h2>
            <p className="mt-2 text-sm text-cream/80">
              مؤسس ومدير تنفيذي · مهندس برمجيات ومصمّم منتجات
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl space-y-5 leading-[1.85] text-cream/85">
            <p>
              بدأت بناء المنتجات الرقمية قبل أن يكون لها اسم — من سن مبكرة، حيث
              كانت أوّل تجاربي مع البرمجة في مرحلة الإعدادية. منذ ذلك الحين، حملت
              فضولاً لما يجعل المنتج جميلاً وقابلاً للاستخدام في نفس الوقت — وهذا
              الفضول قادني إلى دراسة هندسة البرمجيات وتصميم تجربة المستخدم بشكل
              متوازٍ.
            </p>
            <p>
              قبل سُرَى، عملت على منتجات داخلية لمؤسسات في القطاع الخاص والقطاع
              غير الربحي — لوحات تحكم، بوابات عملاء، تطبيقات داخلية تخدم فرقاً
              تتجاوز مئات الموظفين. تعلّمت في هذه التجارب أن أصعب جزء في البرمجة
              ليس الكود — بل فهم ما يحتاجه المستخدم فعلاً.
            </p>
            <p>
              أسّستُ <strong className="text-cream">سُرَى</strong> لأنّني رأيت
              فجوة واضحة: الشركات الصغيرة والجمعيات والمصانع في منطقتنا تستحقّ
              نفس عناية التصميم والبرمجة التي تحظى بها الشركات الكبيرة — لكن
              بسعر يناسبها وزمن يحترمها. أُلزم نفسي ببناء أوّل ثلاث مشاريع لكل
              عميل بيدي شخصياً، لأنّ الجودة تُنقَل بالعدوى، لا بالتعليمات.
            </p>
            <p className="text-cream/85">
              <span className="font-bold text-cream">أهتمّ بـ:</span> الطباعة
              العربية، تجربة الموبايل الأولى، أتمتة الأعمال بالذكاء الاصطناعي،
              المشاريع التي تخدم الفرد العادي.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 font-medium text-cream transition-all duration-200 hover:bg-green-light active:scale-[0.98]"
            >
              تحدّث مع نور الدين
              <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
            </Link>
            <a
              href="https://www.linkedin.com/in/noureddinf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/25 px-6 py-3.5 font-medium text-cream/95 transition hover:border-green-light hover:text-green-light"
            >
              <Icon name="globe" size={16} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
