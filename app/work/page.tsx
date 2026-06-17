import Link from "next/link";
import Icon from "@/components/Icon";

export const metadata = {
  title: "أعمالنا — سُرَى",
  description: "دراسات حالة العملاء — قريباً.",
};

const PLACEHOLDERS = [
  {
    title: "إندماج",
    type: "موقع تعريفي",
    status: "قيد التطوير",
  },
  {
    title: "سياج الحدود",
    type: "حملة تسويقية",
    status: "قيد التطوير",
  },
  {
    title: "عميل في الطريق",
    type: "قريباً",
    status: "—",
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-ink">
            أعمالنا
          </p>
          <h1 className="mt-4 text-[2.5rem] font-black leading-[1.15] text-navy sm:text-5xl md:text-6xl">
            دراسات الحالة قيد البناء.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.85] text-navy/80 sm:text-lg">
            سُرَى شركة حديثة. مشاريع عملائنا الأولى قيد التطوير — وسننشر تفاصيلها هنا
            خلال الأشهر القادمة. للوقت الحالي، نعرض ما يعمل عليه فريقنا الآن.
          </p>
        </div>
      </section>

      <section className="border-y border-ash/40 bg-mist py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {PLACEHOLDERS.map((p) => (
              <article
                key={p.title}
                className="hover-lift overflow-hidden rounded-2xl border border-ash/50 bg-white shadow-soft hover:-translate-y-1 hover:border-green/40 hover:shadow-lift"
              >
                <div
                  className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy/90 to-green/70 text-cream"
                  aria-hidden
                >
                  <div
                    className="absolute inset-0 opacity-[0.18]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 40%, var(--color-green-light) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <Icon name="seedling" size={56} className="relative text-green-light" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy">{p.title}</h3>
                  <p className="mt-1 text-sm text-stone">{p.type}</p>
                  <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-warning/30 bg-warning/10 px-3 py-1 text-xs font-medium text-navy">
                    <span className="h-1.5 w-1.5 rounded-full bg-warning" aria-hidden />
                    {p.status}
                  </p>
                </div>
              </article>
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
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-light">
            ابدأ معنا
          </p>
          <h2 className="mt-3 text-3xl font-bold text-cream sm:text-4xl md:text-5xl">
            نبني أوّل دراسات الحالة الآن.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream/85">
            إن كنت تبحث عن شريك يهتمّ بمشروعك، نحن نختار عملاءنا بعناية ونبني بحرفية.
            احكي لنا عن جهتك ونرجع لك بمقترح يناسب ميزانيتك خلال 24 ساعة.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 font-medium text-cream transition-all duration-200 hover:bg-green-light active:scale-[0.98]"
            >
              احجز مكالمة استكشاف
              <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/30 px-7 py-3.5 font-medium text-cream transition-all duration-200 hover:border-green-light hover:text-green-light"
            >
              شاهد الباقات
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
