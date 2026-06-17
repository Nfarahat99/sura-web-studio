import Link from "next/link";
import Hero from "@/components/Hero";
import AudienceTiles from "@/components/AudienceTile";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";
import Icon from "@/components/Icon";
import { SERVICES, PRICING_TIERS, VALUE_PILLARS } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />

      <AudienceTiles />

      <section className="border-b border-ash/40 bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-ink">
              لماذا سُرَى
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
              ثلاث قيم نبني عليها
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {VALUE_PILLARS.map((p, i) => (
              <div
                key={p.title}
                className={`hover-lift rounded-2xl border border-ash/50 bg-white p-8 shadow-soft hover:-translate-y-1 hover:border-green/40 hover:shadow-lift fade-up fade-up-delay-${i + 1}`}
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

      <section className="border-b border-ash/40 bg-mist py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-ink">
                خدماتنا
              </p>
              <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
                ما نُسلّم
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-navy underline decoration-green decoration-2 underline-offset-[6px] transition-colors duration-200 hover:text-green-ink hover:decoration-green-light"
            >
              كل الخدمات
              <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-ash/40 bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-ink">
                الباقات
              </p>
              <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
                تسعير شفّاف
              </h2>
              <p className="mt-3 max-w-xl text-navy/70">
                خمس طبقات تغطي كل الميزانيات — من الميكرو السنوي للتطبيقات الكاملة،
                كلها بالريال السعودي.
              </p>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-navy underline decoration-green decoration-2 underline-offset-[6px] transition-colors duration-200 hover:text-green-ink hover:decoration-green-light"
            >
              كل التفاصيل
              <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRICING_TIERS.slice(0, 3).map((t) => (
              <PricingCard key={t.key} tier={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-20 text-cream">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, var(--color-green-light) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-cream sm:text-4xl md:text-5xl">
            جاهز للإطلاق؟
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream/85">
            مكالمة استكشاف 30 دقيقة، مجانية. نسمع منك، نفهم احتياجك، ونرجع لك بمقترح
            خلال 24 ساعة.
          </p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 font-medium text-cream shadow-soft transition-all duration-200 hover:bg-green-light hover:shadow-lift active:scale-[0.98]"
            >
              احجز مكالمة استكشاف
              <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border-2 border-cream/30 px-7 py-3.5 font-medium text-cream transition-all duration-200 hover:border-green-light hover:text-green-light active:scale-[0.98]"
            >
              شاهد الباقات
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
