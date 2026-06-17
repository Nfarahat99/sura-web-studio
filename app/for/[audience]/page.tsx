import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
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
    return { title: "غير موجود — سُرَى" };
  }
  return {
    title: `${offer.title} — سُرَى`,
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

  return (
    <>
      <section className="relative overflow-hidden border-b border-ash/40 bg-cream">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, var(--color-green) 1px, transparent 1px), radial-gradient(circle at 80% 70%, var(--color-navy) 1px, transparent 1px)",
            backgroundSize: "44px 44px, 60px 60px",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-6 py-20 lg:py-28">
          <div className="fade-up text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-green/30 bg-green/10 px-4 py-1.5 text-sm font-medium text-green-ink">
              <Icon name={offer.icon} size={16} />
              <span>{offer.subtitle}</span>
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight text-navy md:text-6xl">
              {offer.heroLine}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-[1.85] text-navy/75 md:text-xl">
              {offer.heroDescription}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 font-medium text-cream transition hover:bg-green"
              >
                {offer.ctaPrimary}
                <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-full border-2 border-navy/30 bg-white px-7 py-3.5 text-navy transition hover:border-green hover:text-green"
              >
                {offer.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ash/40 bg-mist py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-ink">
              المشكلة
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
              نسمعها كل مكالمة
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-navy/70">
              ثلاث آلام محدّدة لـ{offer.title.replace("سُرَى ", "")} — وكيف نحلّها.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {offer.pains.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border border-ash/50 bg-white p-7 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-error/30 hover:shadow-lift"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-error/10 text-error">
                  <Icon name={p.icon} size={24} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">{p.title}</h3>
                <p className="mt-3 text-navy/75">{p.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-ash/40 bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-ink">
              الحلّ
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
              ماذا نبنيه لك
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {offer.solution.map((s) => (
              <article
                key={s.title}
                className="rounded-2xl border border-ash/50 bg-white p-7 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-green/40 hover:shadow-lift"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green-ink">
                  <Icon name={s.icon} size={24} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-3 text-navy/75">{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-ash/40 bg-mist py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-ink">
              العرض الموصى به
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
              {offer.recommendedBundle.name}
            </h2>
          </div>

          <article className="relative overflow-hidden rounded-3xl border-2 border-green bg-white p-8 shadow-lift md:p-12">
            <div className="grid items-start gap-10 md:grid-cols-5">
              <div className="md:col-span-3">
                <h3 className="text-lg font-bold uppercase tracking-wider text-green-ink">
                  يشمل
                </h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {offer.recommendedBundle.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green/15 text-green-ink">
                        <Icon name="check" size={12} />
                      </span>
                      <span className="text-navy/85">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 rounded-2xl border border-green/30 bg-green/5 p-5">
                  <p className="text-sm font-bold uppercase tracking-wider text-green-ink">
                    🎁 مكافأة
                  </p>
                  <p className="mt-2 text-navy/85">{offer.recommendedBundle.bonus}</p>
                </div>
              </div>

              <div className="rounded-2xl bg-navy p-6 text-cream md:col-span-2">
                <p className="text-sm uppercase tracking-wider text-green-light">
                  الاستثمار
                </p>
                <p className="mt-3 tabular text-3xl font-black sm:text-4xl">
                  {offer.recommendedBundle.priceMain}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-cream/85">
                  {offer.recommendedBundle.priceNote}
                </p>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-green px-6 py-3.5 font-medium text-cream transition hover:bg-green-light"
                >
                  {offer.ctaPrimary}
                  <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} />
                </Link>
                <Link
                  href="/pricing"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-sm text-cream/90 transition hover:border-green-light hover:text-green-light"
                >
                  أو خصّص باقة أخرى
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="border-b border-ash/40 bg-cream py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-ink">
              أمثلة
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
              ماذا نبنيه عادةً لكل قطاع
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {offer.examples.map((ex) => (
              <article
                key={ex.sector}
                className="rounded-2xl border border-ash/50 bg-white p-6 shadow-soft transition hover:border-green/40 hover:shadow-lift"
              >
                <p className="text-sm font-bold uppercase tracking-wider text-green-ink">
                  {ex.sector}
                </p>
                <p className="mt-2 text-navy/85">{ex.case}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-ash/40 bg-mist py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-8 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-ink">
              قطاعات أخرى
            </p>
            <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">
              نخدم أيضاً
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {otherAudiences.map((a) => (
              <Link
                key={a.key}
                href={a.href}
                className="group flex items-center gap-4 rounded-2xl border border-ash/50 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-green/40 hover:shadow-lift"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green-ink transition group-hover:bg-green/15">
                  <Icon name={a.icon} size={22} />
                </span>
                <div className="flex-1">
                  <p className="font-bold text-navy">{a.title}</p>
                  <p className="text-sm text-stone">{a.description}</p>
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

      <section className="relative overflow-hidden bg-navy py-20 text-cream">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 30%, var(--color-green-light) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-cream sm:text-4xl md:text-5xl">
            جاهز للبدء؟
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream/85">
            احكي لنا عن جهتك والمشكلة اللي تواجهها. نرجع لك بمقترح مخصّص خلال 24 ساعة.
          </p>
          <div className="mt-9">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 font-medium text-cream transition hover:bg-green-light"
            >
              {offer.ctaPrimary}
              <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
