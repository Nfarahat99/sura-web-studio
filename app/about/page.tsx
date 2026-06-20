import Link from "next/link";
import Icon, { type IconName } from "@/components/Icon";
import Eyebrow from "@/components/Eyebrow";
import HorizonDivider from "@/components/HorizonDivider";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
import { VALUE_PILLARS } from "@/lib/data";

export const metadata = {
  title: "من نحن · سُرَى",
  description: "قصة سُرَى ورسالتها وفريقها — ولماذا نُرافقك في الرحلة.",
};

const PRINCIPLES: { icon: IconName; t: string; sub: string }[] = [
  { icon: "ship", t: "نُسلِّم الصغير قبل الكبير", sub: "نشحن نسخة كلّ يوم" },
  { icon: "target", t: "النتائج لا الساعات", sub: "نقيس ما يهمّ" },
  { icon: "globe", t: "العربية والإنجليزية متساويتان", sub: "نفس العناية للاثنتين" },
  { icon: "folder", t: "العمل المُنجَز هو دليلنا", sub: "نطلق، ثم نتكلّم" },
  { icon: "door", t: "نقول \"لا\" لما لا يناسبنا", sub: "الصدق فوق التوسّع" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — cinematic dark */}
      <section className="night-mesh noise relative isolate overflow-hidden pt-28 pb-24 text-cream md:pt-36 md:pb-32">
        <div className="aurora" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-5 md:px-8">
          <ScrollReveal>
            <Eyebrow tone="light">من نحن</Eyebrow>
            <h1 className="display-hero mt-5 text-[44px] leading-[1.05] text-cream md:text-[88px]">
              استوديو يبني للجهات{" "}
              <span className="text-gold">الصاعدة</span>،
              لا للعمالقة.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-[1.85] text-cream/85 md:text-xl">
              <span className="font-bold text-cream">سُرَى</span> في العربية هي{" "}
              <em className="not-italic font-bold text-green-glow">السير في الليل برفقة</em>
              {" "}— جذرٌ يحمل معنى الرحلة الهادئة المقصودة. اخترنا الاسم لأنّنا
              نؤمن أنّ الشركات الصاعدة والجمعيات والمصانع تستحقّ نفس عناية
              التصميم والبرمجة التي تحظى بها الشركات الكبرى — بسعر يناسبها.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission + Vision — two premium cards */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-2 md:gap-10 md:px-8">
          <ScrollReveal>
            <div className="tilt-wrap h-full">
              <TiltCard className="card-premium h-full p-8 md:p-12">
                <Eyebrow>رسالتنا</Eyebrow>
                <h2 className="display-hero mt-4 text-[28px] leading-[1.1] text-navy md:text-[36px]">
                  نبني منتجات رقمية{" "}
                  <span className="accent">تنمو</span>{" "}
                  مع عملائنا.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-navy/85">
                  بسرعة، وبجمال، وبلا تعقيد إداري. نختار عملاءنا بعناية،
                  ونقول لا لمن لا نقدر نضمن لهم النتيجة.
                </p>
              </TiltCard>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className="tilt-wrap h-full">
              <TiltCard className="card-premium h-full p-8 md:p-12">
                <Eyebrow>رؤيتنا</Eyebrow>
                <h2 className="display-hero mt-4 text-[28px] leading-[1.1] text-navy md:text-[36px]">
                  أن يصبح الويب العربي بنفس{" "}
                  <span className="accent">جودة</span>{" "}
                  الويب الإنجليزي.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-navy/85">
                  من الطباعة، إلى تجربة الجوّال، إلى سرعة التحميل — كلّ
                  تفصيلة بنفس العناية.
                </p>
              </TiltCard>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Principles strip */}
      <section className="bg-cream-dark py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ScrollReveal>
            <div className="text-center">
              <Eyebrow>قيمنا</Eyebrow>
              <h2 className="display-hero mt-4 text-[32px] leading-[1.08] text-navy md:text-[48px]">
                خمس قيم لا{" "}
                <span className="accent">نتنازل</span>{" "}
                عنها.
              </h2>
            </div>
          </ScrollReveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PRINCIPLES.map((v, i) => (
              <ScrollReveal key={v.t} delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5}>
                <div className="card-soft is-hoverable flex h-full flex-col items-center p-6 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green-ink">
                    <Icon name={v.icon} size={24} />
                  </div>
                  <p className="mt-4 font-bold text-navy">{v.t}</p>
                  <p className="mt-2 text-xs text-navy/65">{v.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <HorizonDivider />

      {/* Three value pillars */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ScrollReveal>
            <div className="text-center">
              <Eyebrow>ثلاث قيم نبني عليها</Eyebrow>
              <h2 className="display-hero mt-4 text-[32px] leading-[1.08] text-navy md:text-[52px]">
                سريع · جميل · بلا تعقيد.
              </h2>
            </div>
          </ScrollReveal>
          <div className="mt-16 grid gap-7 md:grid-cols-3">
            {VALUE_PILLARS.map((p, i) => (
              <ScrollReveal key={p.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="tilt-wrap h-full">
                  <TiltCard className="card-soft is-hoverable h-full p-8 md:p-10">
                    <p
                      className="display-hero text-[56px] leading-none tabular md:text-[72px]"
                      style={{ color: "color-mix(in oklab, var(--color-navy) 8%, transparent)" }}
                    >
                      0{i + 1}
                    </p>
                    <span className="tilt-pop -mt-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-green text-cream shadow-[0_10px_28px_rgba(91,138,71,0.35)]">
                      <Icon name={p.icon} size={26} />
                    </span>
                    <h3 className="mt-5 text-2xl font-bold text-navy">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-navy/80">{p.description}</p>
                  </TiltCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder section — long-form on navy */}
      <section className="night-mesh noise relative isolate overflow-hidden py-24 text-cream md:py-32">
        <div className="aurora" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-5 md:px-8">
          <ScrollReveal>
            <div className="text-center">
              <Eyebrow tone="light">المؤسس</Eyebrow>
              <h2 className="display-hero mt-4 text-[36px] leading-[1.05] text-cream md:text-[56px]">
                نور الدين فرحات.
              </h2>
              <p className="mt-3 text-sm text-cream/75">
                المؤسس والمدير التنفيذي · مهندس برمجيات ومصمّم منتجات
              </p>
            </div>

            <div className="mx-auto mt-10 space-y-5 leading-[1.95] text-cream/90 md:text-lg">
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
                <span className="font-bold text-green-glow">أهتمّ بـ:</span>{" "}
                الطباعة العربية، تجربة الجوّال أولاً، أتمتة الأعمال
                بالذكاء الاصطناعي، والمشاريع التي تخدم الفرد العادي.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="btn btn-accent">
                تحدّث مع نور الدين
                <Icon name="arrow" size={18} style={{ transform: "scaleX(-1)" }} aria-hidden />
              </Link>
              <a
                href="https://www.linkedin.com/in/noureddinf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[3.25rem] items-center gap-2 rounded-full border border-cream/35 px-7 text-cream transition hover:border-green-glow hover:text-green-glow"
              >
                <Icon name="globe" size={16} aria-hidden />
                LinkedIn
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
