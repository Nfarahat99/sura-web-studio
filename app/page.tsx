import Link from "next/link";
import Hero from "@/components/Hero";
import AudienceTiles from "@/components/AudienceTile";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";
import Icon from "@/components/Icon";
import SectionHeader from "@/components/SectionHeader";
import HorizonDivider from "@/components/HorizonDivider";
import TrustBand from "@/components/TrustBand";
import WaveGlyph from "@/components/WaveGlyph";
import Eyebrow from "@/components/Eyebrow";
import GuidingStarRail from "@/components/GuidingStarRail";
import { SERVICES, PRICING_TIERS, VALUE_PILLARS } from "@/lib/data";

const RAIL_SECTIONS = [
  { id: "hero", label: "البداية" },
  { id: "values", label: "لماذا سُرَى" },
  { id: "audiences", label: "من نخدم" },
  { id: "services", label: "خدماتنا" },
  { id: "pricing-peek", label: "الباقات" },
  { id: "final-cta", label: "ابدأ" },
];

export default function HomePage() {
  return (
    <>
      <GuidingStarRail sections={RAIL_SECTIONS} />

      <div id="hero">
        <Hero />
      </div>

      <section id="values" className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeader
            eyebrow="لماذا سُرَى"
            title="ثلاث قيم نبني عليها"
          />
          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
            {VALUE_PILLARS.map((p, i) => (
              <div
                key={p.title}
                className={`card-soft flex h-full flex-col p-7 md:p-9 fade-up fade-up-delay-${i + 1}`}
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

      <HorizonDivider />

      <div id="audiences">
        <AudienceTiles />
      </div>

      <section id="services" className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="خدماتنا"
              title="ما نُسلِّمه"
              align="start"
              className="md:max-w-xl"
            />
            <Link
              href="/services"
              className="btn-ghost mb-2 inline-flex items-center gap-1.5"
            >
              كلّ الخدمات
              <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>
      </section>

      <HorizonDivider flip />

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="الباقات"
              title="أسعار واضحة"
              lede="خمس باقات تغطّي كلّ الميزانيات — من باقة ميكرو السنوية إلى تطبيقات الويب الكاملة، بالريال السعودي."
              align="start"
              className="md:max-w-xl"
            />
            <Link
              href="/pricing"
              className="btn-ghost mb-2 inline-flex items-center gap-1.5"
            >
              كلّ التفاصيل
              <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRICING_TIERS.slice(0, 3).map((t) => (
              <PricingCard key={t.key} tier={t} />
            ))}
          </div>
        </div>
      </section>

      <section id="pricing-peek" className="relative overflow-hidden bg-navy py-20 md:py-28 text-cream">
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <Eyebrow tone="light">كل الباقات</Eyebrow>
            <h2 className="mt-3 text-[26px] font-bold leading-[1.2] text-cream md:text-[40px] md:leading-[1.15]">
              خمس باقات لكلّ مرحلة
            </h2>
          </div>
          <ul className="mt-12 grid gap-3 md:grid-cols-3 lg:grid-cols-5">
            {PRICING_TIERS.map((t) => (
              <li
                key={t.key}
                className="rounded-2xl border border-cream/40 bg-navy/40 p-5 transition-colors hover:border-green-light/60"
              >
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-green-light" dir="ltr">
                  {t.nameEn}
                </p>
                <p className="mt-1 text-lg font-bold text-cream">{t.name}</p>
                <p className="tabular mt-3 text-xl font-bold text-cream" dir="ltr" style={{ textAlign: "right" }}>
                  {t.priceMain}
                </p>
                <p className="mt-0.5 text-xs text-cream/80">{t.currency}</p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-light hover:text-cream"
                >
                  {t.cta}
                  <Icon name="arrow" size={12} style={{ transform: "scaleX(-1)" }} aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Link href="/pricing" className="btn btn-on-navy">
              اطّلع على كلّ التفاصيل والباقات
              <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <TrustBand
        techLabel="مبني بـ"
        techStack={["Next.js", "Vercel", "Tailwind", "Cairo"]}
        founderLine="بناء شخصي بقيادة نور الدين فرحات"
      />

      <section id="final-cta" className="relative overflow-hidden bg-navy py-24 text-cream md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-cream"
          style={{ opacity: 0.06 }}
        >
          <WaveGlyph size={280} showDot />
        </div>

        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <Eyebrow tone="light">ابدأ معنا</Eyebrow>
          <h2 className="mt-4 text-[32px] font-bold leading-[1.15] text-cream md:text-[56px] md:leading-[1.08]">
            جاهز للإطلاق؟
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream/90">
            مكالمة استكشاف مجانية، 30 دقيقة. نسمع منك، نفهم وضعك، ونرجع لك
            بمقترح خلال 24 ساعة.
          </p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link href="/contact" className="btn btn-on-navy">
              احجز مكالمة استكشاف
              <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center rounded-full border border-cream/40 px-7 py-3 text-cream transition hover:border-green-light hover:text-green-light">
              اطّلع على الباقات
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
