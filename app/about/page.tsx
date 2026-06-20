import Link from "next/link";
import Icon, { type IconName } from "@/components/Icon";
import Eyebrow from "@/components/Eyebrow";
import SectionHeader from "@/components/SectionHeader";
import HorizonDivider from "@/components/HorizonDivider";
import { VALUE_PILLARS } from "@/lib/data";

export const metadata = {
  title: "من نحن · سُرَى",
  description: "قصة سُرَى ورسالتها وفريقها — ولماذا نُرافقك في الرحلة.",
};

const PRINCIPLES: { icon: IconName; t: string }[] = [
  { icon: "ship", t: "نُسلِّم الصغير قبل الكبير" },
  { icon: "target", t: "النتائج لا الساعات" },
  { icon: "globe", t: "العربية والإنجليزية متساويتان" },
  { icon: "folder", t: "العمل المُنجَز هو دليلنا" },
  { icon: "door", t: "نقول \"لا\" لما لا يناسبنا" },
];

export default function AboutPage() {
  return (
    <>
      <section className="dawn-glow bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Eyebrow>من نحن</Eyebrow>
          <h1 className="mt-4 text-[32px] font-display font-bold leading-[1.15] text-navy tracking-[-0.01em] md:text-[56px] md:leading-[1.08]">
            استوديو يبني للجهات الصاعدة، لا للعمالقة.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.75] text-navy/85 md:text-[18px]">
            <span className="font-bold text-navy">سُرَى</span> في العربية هي{" "}
            <em className="not-italic font-bold text-navy">السير في الليل برفقة</em>
            {" "}— جذرٌ يحمل معنى الرحلة الهادئة المقصودة. اخترنا الاسم لأنّنا
            نؤمن أنّ الشركات الصاعدة والجمعيات والمصانع تستحقّ نفس عناية
            التصميم والبرمجة التي تحظى بها الشركات الكبرى — بسعر يناسبها.
          </p>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 md:grid-cols-2 md:gap-10 md:px-8">
          <div className="card-soft p-7 md:p-9">
            <Eyebrow>رسالتنا</Eyebrow>
            <h2 className="mt-3 text-[22px] font-bold leading-[1.25] text-navy md:text-[28px]">
              نبني منتجات رقمية تنمو مع عملائنا.
            </h2>
            <p className="mt-4 text-navy/85">
              بسرعة، وبجمال، وبلا تعقيد إداري. نختار عملاءنا بعناية، ونقول
              لا لمن لا نقدر نضمن لهم النتيجة.
            </p>
          </div>
          <div className="card-soft p-7 md:p-9">
            <Eyebrow>رؤيتنا</Eyebrow>
            <h2 className="mt-3 text-[22px] font-bold leading-[1.25] text-navy md:text-[28px]">
              أن يصبح الويب العربي بنفس جودة الويب الإنجليزي.
            </h2>
            <p className="mt-4 text-navy/85">
              من الطباعة، إلى تجربة الجوّال، إلى سرعة التحميل — كلّ تفصيلة
              بنفس العناية.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeader
            eyebrow="قيمنا"
            title="خمس قيم لا نتنازل عنها"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PRINCIPLES.map((v) => (
              <div
                key={v.t}
                className="card-soft is-hoverable flex flex-col items-center p-6 text-center"
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

      <HorizonDivider />

      <section className="bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeader
            eyebrow="ثلاث قيم نبني عليها"
            title="سريع · جميل · بلا تعقيد"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
            {VALUE_PILLARS.map((p) => (
              <div
                key={p.title}
                className="card-soft is-hoverable flex h-full flex-col p-7 md:p-9"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-green/10 text-green-ink">
                  <Icon name={p.icon} size={28} />
                </div>
                <h3 className="mt-5 text-[22px] font-bold leading-[1.25] text-navy md:text-[26px]">
                  {p.title}
                </h3>
                <p className="mt-3 text-navy/80">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 md:py-28 text-cream">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <div className="text-center">
            <Eyebrow tone="light">المؤسس</Eyebrow>
            <h2 className="mt-3 text-[32px] font-bold sm:text-[40px]">
              نور الدين فرحات
            </h2>
            <p className="mt-2 text-sm text-cream/85">
              المؤسس والمدير التنفيذي · مهندس برمجيات ومصمّم منتجات
            </p>
          </div>

          <div className="mx-auto mt-10 space-y-5 leading-[1.85] text-cream/90">
            <p>
              بدأتُ ببناء المنتجات الرقمية قبل أن يكون لها اسم — من سنّ
              صغيرة، إذ كانت أوّل تجاربي مع البرمجة في المرحلة المتوسّطة.
              منذ ذلك الحين حملتُ فضولاً تجاه ما يجعل المنتج جميلاً
              وقابلاً للاستخدام في الوقت نفسه — وهذا الفضول قادني إلى
              دراسة هندسة البرمجيات وتصميم تجربة المستخدم في وقت واحد.
            </p>
            <p>
              قبل سُرَى، اشتغلتُ على منتجات داخلية لجهات في القطاع الخاص
              والقطاع غير الربحي — لوحات تحكم، بوّابات عملاء، وتطبيقات
              داخلية تخدم فِرَقاً تتجاوز مئات الموظفين. تعلّمتُ في تلك
              التجارب أنّ أصعب جزء في البرمجة ليس الكود — بل فهم ما يحتاجه
              المستخدم فعلاً.
            </p>
            <p>
              أسّستُ <strong className="text-cream">سُرَى</strong> لأنّني
              رأيت فجوة واضحة: الشركات الصغيرة والجمعيات والمصانع في
              منطقتنا تستحقّ نفس عناية التصميم والبرمجة التي تحظى بها
              الشركات الكبرى — لكن بسعر يناسبها وزمن يحترم وقتها. أُلزم
              نفسي ببناء أوّل ثلاثة مشاريع لكلّ عميل بيدي شخصياً، لأنّ
              الجودة تُنقَل بالقدوة، لا بالتعليمات.
            </p>
            <p>
              <span className="font-bold text-cream">أهتمّ بـ:</span>{" "}
              الطباعة العربية، تجربة الجوّال أولاً، أتمتة الأعمال
              بالذكاء الاصطناعي، والمشاريع التي تخدم الفرد العادي.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="btn btn-on-navy">
              تحدّث مع نور الدين
              <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
            </Link>
            <a
              href="https://www.linkedin.com/in/noureddinf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-cream transition hover:border-green-light hover:text-green-light"
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
