import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import Eyebrow from "@/components/Eyebrow";
import HorizonDivider from "@/components/HorizonDivider";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
import { AUDIENCE_OFFERS, AUDIENCES, type Audience } from "@/lib/data";

type Params = { audience: Audience["key"] };

export function generateStaticParams(): Params[] {
  return AUDIENCES.map((a) => ({ audience: a.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { audience } = await params;
  const offer = AUDIENCE_OFFERS[audience];
  if (!offer) {
    return { title: "غير موجود · سُرَى" };
  }
  return {
    title: `${offer.title} · سُرَى`,
    description: offer.heroDescription,
  };
}

const SHORT_NAME: Record<Audience["key"], string> = {
  smes: "الشركات الصغيرة",
  charities: "الجمعيات",
  manufacturers: "المصانع",
};

export default async function AudienceOfferPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { audience } = await params;
  const offer = AUDIENCE_OFFERS[audience];
  if (!offer) notFound();

  const otherAudiences = AUDIENCES.filter((a) => a.key !== audience);
  const painIconTone =
    audience === "manufacturers"
      ? "text-info bg-info/10"
      : audience === "charities"
      ? "text-navy/80 bg-navy/10"
      : "text-warning bg-warning/15";

  return (
    <>
      {/* Hero — cinematic dark */}
      <section className="night-mesh noise relative isolate overflow-hidden pt-28 pb-24 text-cream md:pt-36 md:pb-32">
        <div className="aurora" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-5 md:px-8">
          <ScrollReveal>
            <span className="card-glass inline-flex items-center gap-2 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-cream/90">
              <Icon name={offer.icon} size={14} className="text-green-glow" aria-hidden />
              <span dir="ltr">{offer.subtitle}</span>
            </span>
            <h1 className="display-hero mt-6 text-[40px] leading-[1.05] text-cream md:text-[72px]">
              {offer.heroLine}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-[1.85] text-cream/85 md:text-xl">
              {offer.heroDescription}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-accent">
                {offer.ctaPrimary}
                <Icon name="arrow" size={18} style={{ transform: "scaleX(-1)" }} aria-hidden />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex h-[3.25rem] items-center gap-2 rounded-full border border-cream/35 px-7 text-cream transition hover:border-green-glow hover:text-green-glow"
              >
                {offer.ctaSecondary}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pains */}
      <section className="bg-cream-dark py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ScrollReveal>
            <Eyebrow>نسمعها كلّ مكالمة</Eyebrow>
            <h2 className="display-hero mt-4 max-w-3xl text-[36px] leading-[1.05] text-navy md:text-[52px]">
              ثلاث آلام نسمعها من{" "}
              <span className="accent">{SHORT_NAME[audience]}</span>.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-navy/75">
              نبدأ من ألمك، لا من كتالوج خدمات. هذه أوّل ثلاثة أشياء نسمعها
              كلّ مكالمة استكشاف.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {offer.pains.map((p, i) => (
              <ScrollReveal key={p.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="tilt-wrap h-full">
                  <TiltCard className="card-premium h-full p-8 md:p-10">
                    <span
                      className={`tilt-pop inline-flex h-14 w-14 items-center justify-center rounded-2xl ${painIconTone}`}
                    >
                      <Icon name={p.icon} size={28} />
                    </span>
                    <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.28em] text-error/80">
                      {String(i + 1).padStart(2, "0")} · ألم
                    </p>
                    <h3 className="mt-2 text-xl font-bold leading-tight text-navy md:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-navy/85">{p.description}</p>
                  </TiltCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <HorizonDivider />

      {/* Solution */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ScrollReveal>
            <Eyebrow>ماذا نبنيه لك</Eyebrow>
            <h2 className="display-hero mt-4 max-w-3xl text-[36px] leading-[1.05] text-navy md:text-[52px]">
              الحلّ — على{" "}
              <span className="accent">مقاسك</span>.
            </h2>
          </ScrollReveal>
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {offer.solution.map((s, i) => (
              <ScrollReveal key={s.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="tilt-wrap h-full">
                  <TiltCard className="card-premium h-full p-8 md:p-10">
                    <span className="tilt-pop inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-deep text-green-glow shadow-lg">
                      <Icon name={s.icon} size={28} />
                    </span>
                    <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.28em] text-green-ink">
                      {String(i + 1).padStart(2, "0")} · حلّ
                    </p>
                    <h3 className="mt-2 text-xl font-bold leading-tight text-navy md:text-2xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-navy/85">{s.description}</p>
                  </TiltCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended bundle */}
      <section className="bg-cream-dark py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <ScrollReveal>
            <Eyebrow>الباقة المُقترحة لك</Eyebrow>
            <h2 className="display-hero mt-4 text-[32px] leading-[1.08] text-navy md:text-[44px]">
              {offer.recommendedBundle.name}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <article className="card-anchor mt-12 overflow-hidden p-8 md:p-12">
              <div className="relative z-10 grid items-start gap-10 md:grid-cols-5">
                <div className="md:col-span-3">
                  <Eyebrow tone="light">يشمل</Eyebrow>
                  <ul className="mt-5 flex flex-col gap-3">
                    {offer.recommendedBundle.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-glow/20 text-green-glow">
                          <Icon name="check" size={14} />
                        </span>
                        <span className="text-cream/95">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 rounded-2xl border border-green-glow/30 bg-green-glow/10 p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-green-glow">
                      ★ الهدية
                    </p>
                    <p className="mt-3 text-cream/95">
                      {offer.recommendedBundle.bonus}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-cream/30 bg-cream/5 p-6 md:col-span-2">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-green-glow">
                    السعر
                  </p>
                  <p
                    className="tabular display-hero mt-3 text-[40px] leading-none text-cream md:text-[48px]"
                    dir="ltr"
                    style={{ textAlign: "right" }}
                  >
                    {offer.recommendedBundle.priceMain}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-cream/85">
                    {offer.recommendedBundle.priceNote}
                  </p>

                  <Link
                    href="/contact"
                    className="btn btn-on-navy mt-7 w-full"
                  >
                    {offer.ctaPrimary}
                    <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
                  </Link>
                  <Link
                    href="/pricing"
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/35 px-6 py-3 text-sm text-cream/90 transition hover:border-green-glow hover:text-green-glow"
                  >
                    أو خصّص باقة أخرى
                  </Link>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>

      {/* Examples */}
      <section className="bg-cream py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <ScrollReveal>
            <Eyebrow>أمثلة فعلية</Eyebrow>
            <h2 className="display-hero mt-4 max-w-2xl text-[32px] leading-[1.08] text-navy md:text-[48px]">
              أمثلة ممّا نبنيه{" "}
              <span className="accent">لكلّ قطاع</span>.
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {offer.examples.map((ex, i) => (
              <ScrollReveal key={ex.sector} delay={((i % 2) + 1) as 1 | 2}>
                <article className="card-soft is-hoverable p-7">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-green-ink">
                    {ex.sector}
                  </p>
                  <p className="mt-3 text-navy/85">{ex.case}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other audiences */}
      <section className="bg-cream-dark py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <ScrollReveal>
            <Eyebrow>قطاعات أخرى</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold text-navy md:text-3xl">
              نخدم أيضاً
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {otherAudiences.map((a, i) => (
              <ScrollReveal key={a.key} delay={((i % 2) + 1) as 1 | 2}>
                <Link
                  href={a.href}
                  className="card-soft is-hoverable group flex items-center gap-4 p-6"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green-ink transition group-hover:bg-green/15">
                    <Icon name={a.icon} size={22} />
                  </span>
                  <div className="flex-1">
                    <p className="font-bold text-navy">{a.title}</p>
                    <p className="text-sm text-navy/70">{a.description}</p>
                  </div>
                  <Icon
                    name="arrow"
                    size={18}
                    className="shrink-0 text-green-ink transition group-hover:text-green"
                    style={{ transform: "scaleX(-1)" }}
                  />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="night-mesh noise relative isolate overflow-hidden py-28 text-cream md:py-32">
        <div className="aurora" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <ScrollReveal>
            <Eyebrow tone="light">ابدأ معنا</Eyebrow>
            <h2 className="display-hero mt-5 text-[40px] leading-[1.05] text-cream md:text-[64px]">
              جاهز{" "}
              <span className="accent">للبدء؟</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/85 md:text-xl">
              احكي لنا عن جهتك والمشكلة التي تواجهها. نرجع لك بمقترح مخصّص
              خلال 24 ساعة.
            </p>
            <div className="mt-9">
              <Link href="/contact" className="btn btn-accent">
                {offer.ctaPrimary}
                <Icon name="arrow" size={18} style={{ transform: "scaleX(-1)" }} aria-hidden />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
