import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import Eyebrow from "@/components/Eyebrow";
import SectionHeader from "@/components/SectionHeader";
import HorizonDivider from "@/components/HorizonDivider";
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
      <section className="dawn-glow bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="fade-up text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-green/30 bg-green/10 px-4 py-1.5 text-sm font-medium text-green-ink">
              <Icon name={offer.icon} size={16} />
              <span dir="ltr">{offer.subtitle}</span>
            </span>
            <h1 className="mt-6 text-[32px] font-display font-bold leading-[1.15] text-navy tracking-[-0.01em] md:text-[56px] md:leading-[1.08]">
              {offer.heroLine}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.75] text-navy/85 md:text-[18px]">
              {offer.heroDescription}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="btn btn-primary">
                {offer.ctaPrimary}
                <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
              </Link>
              <Link href="/pricing" className="btn btn-secondary">
                {offer.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeader
            eyebrow="المشكلة"
            title="نسمعها كلّ مكالمة"
            lede={`ثلاث آلام نسمعها من ${offer.title.replace("سُرَى ", "")} — وكيف نحلّها.`}
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {offer.pains.map((p) => (
              <article
                key={p.title}
                className="card-soft flex h-full flex-col p-7 md:p-9"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${painIconTone}`}
                >
                  <Icon name={p.icon} size={24} />
                </div>
                <h3 className="mt-5 text-[20px] font-bold leading-[1.3] text-navy md:text-[22px]">
                  {p.title}
                </h3>
                <p className="mt-3 text-navy/85">{p.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HorizonDivider />

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeader
            eyebrow="الحلّ"
            title="ماذا نبنيه لك"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {offer.solution.map((s) => (
              <article
                key={s.title}
                className="card-soft is-hoverable flex h-full flex-col p-7 md:p-9"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green-ink">
                  <Icon name={s.icon} size={24} />
                </div>
                <h3 className="mt-5 text-[20px] font-bold leading-[1.3] text-navy md:text-[22px]">
                  {s.title}
                </h3>
                <p className="mt-3 text-navy/85">{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <SectionHeader
            eyebrow="الباقة المُقترحة لك"
            title={offer.recommendedBundle.name}
          />

          <article className="card-anchor mt-12 p-8 md:p-12">
            <div className="grid items-start gap-10 md:grid-cols-5">
              <div className="md:col-span-3">
                <Eyebrow tone="light">يشمل</Eyebrow>
                <ul className="mt-5 flex flex-col gap-3">
                  {offer.recommendedBundle.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-light/20 text-green-light">
                        <Icon name="check" size={12} />
                      </span>
                      <span className="text-cream/95">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 rounded-2xl border border-green-light/30 bg-green-light/10 p-5">
                  <p className="text-sm font-semibold uppercase tracking-wider text-green-light">
                    🎁 الهدية
                  </p>
                  <p className="mt-2 text-cream/95">
                    {offer.recommendedBundle.bonus}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-cream/30 bg-cream/5 p-6 md:col-span-2">
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-green-light">
                  السعر
                </p>
                <p
                  className="tabular mt-3 text-[40px] font-black leading-none text-cream md:text-[44px]"
                  dir="ltr"
                  style={{ textAlign: "right" }}
                >
                  {offer.recommendedBundle.priceMain}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cream/90">
                  {offer.recommendedBundle.priceNote}
                </p>

                <Link
                  href="/contact"
                  className="btn btn-on-navy mt-6 w-full"
                >
                  {offer.ctaPrimary}
                  <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
                </Link>
                <Link
                  href="/pricing"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-sm text-cream/90 transition hover:border-green-light hover:text-green-light"
                >
                  أو خصّص باقة أخرى
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <SectionHeader
            eyebrow="أمثلة"
            title="أمثلة ممّا نبنيه لكلّ قطاع"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {offer.examples.map((ex) => (
              <article
                key={ex.sector}
                className="card-soft is-hoverable p-6"
              >
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-green-ink">
                  {ex.sector}
                </p>
                <p className="mt-2 text-navy/85">{ex.case}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <SectionHeader
            eyebrow="قطاعات أخرى"
            title="نخدم أيضاً"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {otherAudiences.map((a) => (
              <Link
                key={a.key}
                href={a.href}
                className="card-soft is-hoverable group flex items-center gap-4 p-5"
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
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 md:py-28 text-cream">
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="text-[32px] font-bold leading-[1.15] text-cream md:text-[48px]">
            جاهز للبدء؟
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream/90">
            احكي لنا عن جهتك والمشكلة التي تواجهها. نرجع لك بمقترح مخصّص
            خلال 24 ساعة.
          </p>
          <div className="mt-9">
            <Link href="/contact" className="btn btn-on-navy">
              {offer.ctaPrimary}
              <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
