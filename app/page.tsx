import Link from "next/link";
import CinematicHero from "@/components/CinematicHero";
import AudienceTiles from "@/components/AudienceTile";
import PricingCard from "@/components/PricingCard";
import Icon from "@/components/Icon";
import SectionHeader from "@/components/SectionHeader";
import Eyebrow from "@/components/Eyebrow";
import TrustLogoBar from "@/components/TrustLogoBar";
import ServicesShowcase from "@/components/ServicesShowcase";
import JourneySteps from "@/components/JourneySteps";
import StatsStrip from "@/components/StatsStrip";
import ScrollReveal from "@/components/ScrollReveal";
import MarqueeText from "@/components/MarqueeText";
import TiltCard from "@/components/TiltCard";
import { PRICING_TIERS, VALUE_PILLARS, JOURNEY_STEPS } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* 1. Cinematic Hero — dark, parallax, oversize type */}
      <CinematicHero />

      {/* 2. Trust logo marquee — clients + tech */}
      <TrustLogoBar />

      {/* 3. Brand keyword marquee divider */}
      <div className="bg-cream py-10 text-navy" aria-hidden>
        <MarqueeText
          words={["مواقع", "تطبيقات ويب", "هويات", "حملات", "تحليلات", "SEO"]}
          variant="outline"
          tone="navy"
        />
      </div>

      {/* 4. Value pillars — large floating type + soft cards */}
      <section className="relative bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-end gap-10 md:grid-cols-12">
            <ScrollReveal className="md:col-span-7">
              <Eyebrow>لماذا سُرَى</Eyebrow>
              <h2 className="display-hero mt-4 text-[36px] leading-[1.05] text-navy md:text-[60px]">
                ثلاث قيم{" "}
                <span className="accent">نبني عليها</span> —
                ولا نتنازل عنها.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={2} className="md:col-span-5">
              <p className="text-lg leading-[1.85] text-navy/80">
                كلّ استوديو يعد. نحن نقيس وعدنا بثلاثة أشياء فقط — لو فيها
                تنازل، يكون التنازل مكشوفاً، لا مخفياً في تفاصيل العقد.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-16 grid gap-7 md:mt-20 md:grid-cols-3">
            {VALUE_PILLARS.map((p, i) => (
              <ScrollReveal key={p.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="tilt-wrap h-full">
                  <TiltCard className="card-soft relative h-full p-9 md:p-10">
                    <p
                      className="display-hero text-[64px] leading-none tabular md:text-[88px]"
                      style={{ color: "color-mix(in oklab, var(--color-navy) 8%, transparent)" }}
                    >
                      0{i + 1}
                    </p>
                    <span className="tilt-pop -mt-12 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-green text-cream shadow-[0_10px_28px_rgba(91,138,71,0.35)]">
                      <Icon name={p.icon} size={26} />
                    </span>
                    <h3 className="mt-6 text-2xl font-bold text-navy md:text-[28px]">
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

      {/* 5. Audiences — 3D tilt cards */}
      <AudienceTiles />

      {/* 6. Services — premium tilt cards */}
      <section className="relative bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <ScrollReveal>
              <Eyebrow>خدماتنا</Eyebrow>
              <h2 className="display-hero mt-4 max-w-2xl text-[36px] leading-[1.05] text-navy md:text-[60px]">
                ست خدمات،{" "}
                <span className="accent">شراكة واحدة.</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg text-navy/75">
                تختار ما تحتاجه، أو نقترح عليك المزيج الأنسب لجهتك. لا
                تخصصات نضيفها لمجرّد ملء الكتالوج.
              </p>
            </ScrollReveal>
            <Link
              href="/services"
              className="btn-ghost mb-2 inline-flex items-center gap-1.5"
            >
              كلّ الخدمات
              <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
            </Link>
          </div>

          <div className="mt-16 md:mt-20">
            <ServicesShowcase />
          </div>
        </div>
      </section>

      {/* 7. Journey — sticky scroll timeline */}
      <section className="night-mesh noise relative overflow-hidden py-24 text-cream md:py-32">
        <div className="aurora" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <ScrollReveal>
            <Eyebrow tone="light">كيف نشتغل</Eyebrow>
            <h2 className="display-hero mt-4 max-w-3xl text-[36px] leading-[1.05] text-cream md:text-[60px]">
              من المكالمة الأولى{" "}
              <span className="accent">إلى الإطلاق</span> —
              ستّ خطوات واضحة.
            </h2>
          </ScrollReveal>

          <div className="mt-16 md:mt-20">
            <JourneySteps steps={JOURNEY_STEPS} />
          </div>
        </div>
      </section>

      {/* 8. Stats strip */}
      <section className="night-mesh relative overflow-hidden border-y border-cream/10 py-20 text-cream md:py-24">
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <ScrollReveal>
            <div className="mb-12 max-w-2xl">
              <Eyebrow tone="light">بأرقام واضحة</Eyebrow>
              <h2 className="display-hero mt-3 text-[32px] leading-[1.05] text-cream md:text-[44px]">
                التزامات لا نتنازل عنها.
              </h2>
            </div>
          </ScrollReveal>
          <StatsStrip
            stats={[
              { value: 14, suffix: " يوم", label: "أقصر مدّة إطلاق" },
              { value: 100, suffix: "%", label: "أسعار معلنة مسبقاً" },
              { value: 30, suffix: " يوم", label: "ضمان بعد كلّ إطلاق" },
              { value: 24, suffix: " ساعة", label: "وقت الرد على المقترح" },
            ]}
          />
        </div>
      </section>

      {/* 9. Pricing — 3 main tiers */}
      <section id="pricing-peek" className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <ScrollReveal>
              <Eyebrow>الباقات</Eyebrow>
              <h2 className="display-hero mt-4 max-w-2xl text-[36px] leading-[1.05] text-navy md:text-[60px]">
                أسعار{" "}
                <span className="accent">واضحة</span>.
                لا مفاجآت.
              </h2>
              <p className="mt-5 max-w-xl text-lg text-navy/75">
                خمس باقات تغطّي كلّ الميزانيات — من باقة ميكرو السنوية إلى
                تطبيقات الويب الكاملة، بالريال السعودي.
              </p>
            </ScrollReveal>
            <Link
              href="/pricing"
              className="btn-ghost mb-2 inline-flex items-center gap-1.5"
            >
              كلّ التفاصيل
              <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
            </Link>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {PRICING_TIERS.slice(0, 3).map((t, i) => (
              <ScrollReveal key={t.key} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <PricingCard tier={t} />
              </ScrollReveal>
            ))}
          </div>

          {/* All 5 tiers preview strip */}
          <div className="mt-16">
            <ScrollReveal>
              <div className="card-anchor relative overflow-hidden p-8 md:p-12">
                <div className="relative z-10">
                  <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                    <div>
                      <Eyebrow tone="light">كلّ الباقات</Eyebrow>
                      <h3 className="display-hero mt-3 text-[28px] leading-tight text-cream md:text-[40px]">
                        خمس باقات لكلّ مرحلة من رحلتك.
                      </h3>
                    </div>
                    <Link href="/pricing" className="btn btn-on-navy">
                      اطّلع على كلّ التفاصيل والباقات
                      <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
                    </Link>
                  </div>

                  <ul className="mt-10 grid gap-3 md:grid-cols-3 lg:grid-cols-5">
                    {PRICING_TIERS.map((t) => (
                      <li
                        key={t.key}
                        className="card-glass group p-5 transition-colors hover:border-green-glow/60"
                      >
                        <p
                          className="text-[11px] font-semibold uppercase tracking-[0.2em] text-green-glow"
                          dir="ltr"
                        >
                          {t.nameEn}
                        </p>
                        <p className="mt-1 text-lg font-bold text-cream">{t.name}</p>
                        <p
                          className="tabular mt-3 text-xl font-bold text-cream"
                          dir="ltr"
                          style={{ textAlign: "right" }}
                        >
                          {t.priceMain}
                        </p>
                        <p className="mt-0.5 text-xs text-cream/75">{t.currency}</p>
                        <Link
                          href="/contact"
                          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-glow transition group-hover:gap-2 hover:text-cream"
                        >
                          {t.cta}
                          <Icon name="arrow" size={12} style={{ transform: "scaleX(-1)" }} aria-hidden />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 10. Brand keyword marquee divider (closer) */}
      <div className="bg-cream pb-4 pt-2 text-navy" aria-hidden>
        <MarqueeText
          words={["الرياض", "السعودية", "عربي وإنجليزي", "نُرافقك", "في الرحلة"]}
          variant="outline"
          tone="navy"
          separator="✦"
        />
      </div>

      {/* 11. Final CTA — cinematic dark */}
      <section
        id="final-cta"
        className="night-mesh noise relative isolate overflow-hidden py-28 text-cream md:py-36"
      >
        <div className="aurora" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <ScrollReveal>
            <Eyebrow tone="light">ابدأ معنا</Eyebrow>
            <h2 className="display-hero mt-5 text-[42px] leading-[1.05] text-cream md:text-[72px]">
              جاهز{" "}
              <span className="accent">للإطلاق؟</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/85 md:text-xl">
              مكالمة استكشاف مجانية، 30 دقيقة. نسمع منك، نفهم وضعك،
              ونرجع لك بمقترح خلال 24 ساعة.
            </p>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link href="/contact" className="btn btn-accent">
                احجز مكالمة استكشاف
                <Icon name="arrow" size={18} style={{ transform: "scaleX(-1)" }} aria-hidden />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full border border-cream/35 px-7 text-cream transition hover:border-green-glow hover:text-green-glow"
              >
                اطّلع على الباقات
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
