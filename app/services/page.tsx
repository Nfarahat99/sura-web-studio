import Link from "next/link";
import Icon from "@/components/Icon";
import Eyebrow from "@/components/Eyebrow";
import HorizonDivider from "@/components/HorizonDivider";
import JourneySteps from "@/components/JourneySteps";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
import { SERVICES, JOURNEY_STEPS } from "@/lib/data";

export const metadata = {
  title: "خدماتنا · سُرَى",
  description:
    "ما تقدّمه سُرَى: مواقع، تطبيقات ويب، هوية بصرية، حملات Google وMeta، تحسين محركات البحث، وتقارير شهرية.",
};

const NOT_IN_SCOPE = [
  "مواقع عقارية ومنصّات إعلانات مبوّبة",
  "تطبيقات الجوّال الأصلية (iOS/Android)",
  "متاجر إلكترونية معقّدة بـ Shopify/Salla",
  "مشاريع بميزانية أقلّ من 4,500 ريال",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero — dark cinematic */}
      <section className="night-mesh noise relative isolate overflow-hidden pt-28 pb-24 text-cream md:pt-36 md:pb-32">
        <div className="aurora" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-5 md:px-8">
          <ScrollReveal>
            <Eyebrow tone="light">خدماتنا</Eyebrow>
            <h1 className="display-hero mt-5 text-[44px] leading-[1.05] text-cream md:text-[88px]">
              ست خدمات.{" "}
              <span className="text-gold">شراكة</span> واحدة.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-[1.85] text-cream/85 md:text-xl">
              تختار ما تحتاجه، أو نقترح عليك المزيج الأنسب لجهتك. لا تخصصات
              نضيفها لمجرّد ملء الكتالوج — كلّ خدمة هنا تشتغلها فريقنا
              مباشرة، بدون إسناد لجهة أخرى.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-accent">
                ابدأ مشروعك
                <Icon name="arrow" size={18} style={{ transform: "scaleX(-1)" }} aria-hidden />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex h-[3.25rem] items-center gap-2 rounded-full border border-cream/35 px-7 text-cream transition hover:border-green-glow hover:text-green-glow"
              >
                اطّلع على الباقات
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-cream-dark py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-2 gap-y-6 md:grid-cols-4 md:gap-x-8">
            {[
              { label: "خدمات أساسية", value: "06" },
              { label: "أيام للإطلاق", value: "14+" },
              { label: "أسبوع لـ MVP", value: "6+" },
              { label: "ضمان بعد الإطلاق", value: "14د" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="display-hero text-[40px] leading-none text-navy md:text-[56px] tabular">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy/65">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid — premium tilt cards */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ScrollReveal className="mb-14 md:mb-20">
            <Eyebrow>كلّ ما نقدّمه</Eyebrow>
            <h2 className="display-hero mt-4 max-w-3xl text-[36px] leading-[1.05] text-navy md:text-[56px]">
              ست أعمدة{" "}
              <span className="accent">نبني عليها</span>.
            </h2>
          </ScrollReveal>

          <div className="grid gap-7 md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="tilt-wrap h-full">
                  <TiltCard className="card-premium relative h-full p-8 md:p-10">
                    <div className="relative z-10 flex flex-col gap-5 md:flex-row md:gap-7">
                      <div className="md:shrink-0">
                        <span className="tilt-pop inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-deep text-green-glow shadow-xl">
                          <Icon name={s.icon} size={32} />
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-green-ink">
                          {String(i + 1).padStart(2, "0")} · خدمة
                        </p>
                        <h3 className="mt-2 text-2xl font-bold leading-tight text-navy md:text-[28px]">
                          {s.title}
                        </h3>
                        <p className="mt-3 text-navy/80">{s.description}</p>
                        <ul className="mt-5 space-y-2">
                          {s.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex items-start gap-3 text-sm text-navy/85"
                            >
                              <Icon
                                name="check"
                                size={16}
                                className="mt-0.5 shrink-0 text-green"
                                aria-hidden
                              />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <HorizonDivider />

      {/* Journey — sticky scroll */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ScrollReveal>
            <Eyebrow>كيف نشتغل</Eyebrow>
            <h2 className="display-hero mt-4 max-w-3xl text-[36px] leading-[1.05] text-navy md:text-[60px]">
              من المكالمة{" "}
              <span className="accent">إلى الإطلاق</span>.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-navy/75">
              ست خطوات واضحة، كلّ خطوة لها مدّة وناتج محدّد — تشوف ما تدفع
              له، ومتى تستلمه.
            </p>
          </ScrollReveal>

          <div className="mt-16 md:mt-20">
            <JourneySteps steps={JOURNEY_STEPS} />
          </div>
        </div>
      </section>

      {/* Not in scope — honest disqualifier */}
      <section className="bg-cream-dark py-24 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <ScrollReveal>
            <Eyebrow>ما لا نقدّمه</Eyebrow>
            <h2 className="display-hero mt-4 text-[32px] leading-[1.08] text-navy md:text-[48px]">
              نقول <span className="accent">لا</span> — لو ما نقدر نُسلّم بإتقان.
            </h2>
            <p className="mt-5 text-lg text-navy/75">
              الصدق فوق التوسّع. هذي المشاريع نحوّلها لشركاء نثق فيهم بدل
              ما نقبل ونتعثّر.
            </p>
          </ScrollReveal>
          <ul className="mt-10 flex flex-col gap-3">
            {NOT_IN_SCOPE.map((item, i) => (
              <ScrollReveal key={item} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <li className="card-soft is-hoverable flex items-start gap-4 p-6">
                  <span
                    aria-hidden
                    className="mt-2.5 inline-block h-2 w-2 shrink-0 rounded-full bg-error/80"
                  />
                  <span className="text-navy/90">{item}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="night-mesh noise relative isolate overflow-hidden py-28 text-cream md:py-32">
        <div className="aurora" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <ScrollReveal>
            <Eyebrow tone="light">ابدأ معنا</Eyebrow>
            <h2 className="display-hero mt-5 text-[40px] leading-[1.05] text-cream md:text-[64px]">
              عندك مشروع{" "}
              <span className="accent">في بالك؟</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/85 md:text-xl">
              احكي لنا عنه. نسمع، نسأل، ونرجع لك بمقترح ملموس خلال 24 ساعة.
            </p>
            <div className="mt-9">
              <Link href="/contact" className="btn btn-accent">
                احكي لنا
                <Icon name="arrow" size={18} style={{ transform: "scaleX(-1)" }} aria-hidden />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
