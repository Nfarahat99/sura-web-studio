import Link from "next/link";
import Icon from "@/components/Icon";
import Eyebrow from "@/components/Eyebrow";
import HorizonDivider from "@/components/HorizonDivider";
import WaveGlyph from "@/components/WaveGlyph";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";

export const metadata = {
  title: "أعمالنا · سُرَى",
  description: "دراسات حالة عملائنا — قريباً.",
};

const PLACEHOLDERS = [
  { title: "إندماج", type: "موقع تعريفي", status: "قيد البناء" },
  { title: "سياج الحدود", type: "حملة Google", status: "قيد البناء" },
  { title: "مشروع قادم", type: "قريباً", status: "—" },
];

const CASE_PREVIEW = [
  { label: "المشكلة", body: "ما الذي كان مكسوراً قبل أن يتواصل العميل معنا." },
  { label: "المنهج", body: "كيف فكّرنا، وما المقايضات التي اختَرناها." },
  { label: "النتيجة", body: "ما الذي أُطلق فعلاً، وبأيّ مهلة زمنية." },
  { label: "الأرقام", body: "أرقام واقعية بعد الإطلاق — لا مبالغات." },
];

export default function WorkPage() {
  return (
    <>
      {/* Hero — cinematic dark */}
      <section className="night-mesh noise relative isolate overflow-hidden pt-28 pb-24 text-cream md:pt-36 md:pb-32">
        <div className="aurora" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-5 md:px-8">
          <ScrollReveal>
            <Eyebrow tone="light">أعمالنا</Eyebrow>
            <h1 className="display-hero mt-5 text-[40px] leading-[1.05] text-cream md:text-[72px]">
              دراسات الحالة{" "}
              <span className="text-gold">قيد البناء</span> —
              مثل المشاريع نفسها.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-[1.85] text-cream/85 md:text-xl">
              سُرَى استوديو حديث. مشاريع عملائنا الأولى قيد البناء — ننشر
              تفاصيلها هنا خلال الأشهر القادمة. لحدّ الآن، نعرض لك ما نشتغل
              عليه. الصدق فوق التضخيم.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-accent">
                كُن أوّل قصّة
                <Icon name="arrow" size={18} style={{ transform: "scaleX(-1)" }} aria-hidden />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-[3.25rem] items-center gap-2 rounded-full border border-cream/35 px-7 text-cream transition hover:border-green-glow hover:text-green-glow"
              >
                شاهد ما نقدّمه
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* In-progress projects grid */}
      <section className="bg-cream-dark py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ScrollReveal>
            <Eyebrow>قيد العمل الآن</Eyebrow>
            <h2 className="display-hero mt-4 max-w-2xl text-[36px] leading-[1.05] text-navy md:text-[52px]">
              مشاريع{" "}
              <span className="accent">نبنيها</span>{" "}
              هذا الربع.
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PLACEHOLDERS.map((p, i) => (
              <ScrollReveal key={p.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="tilt-wrap h-full">
                  <TiltCard className="card-premium h-full overflow-hidden p-0">
                    <div
                      className="night-mesh relative flex h-48 items-center justify-center overflow-hidden text-cream"
                      aria-hidden
                    >
                      <div className="aurora" />
                      <div className="relative tilt-pop">
                        <WaveGlyph size={120} showDot className="text-cream/40" />
                      </div>
                    </div>
                    <div className="p-7">
                      <h3 className="text-2xl font-bold text-navy">{p.title}</h3>
                      <p className="mt-1 text-sm text-navy/65">{p.type}</p>
                      <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-warning/30 bg-warning/10 px-3 py-1 text-xs font-medium text-navy">
                        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-warning" />
                        {p.status}
                      </p>
                    </div>
                  </TiltCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <HorizonDivider flip />

      {/* Case study preview */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <ScrollReveal>
            <div className="text-center">
              <Eyebrow>حين تطلق أوّل دراسة</Eyebrow>
              <h2 className="display-hero mt-4 text-[32px] leading-[1.08] text-navy md:text-[52px]">
                هكذا ستظهر كلّ{" "}
                <span className="accent">قصّة</span>{" "}
                هنا.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-navy/75">
                أربعة أعمدة بسيطة: المشكلة، المنهج، النتيجة، والأرقام.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className="card-soft mt-14 grid gap-6 p-8 md:grid-cols-2 md:p-12">
              {CASE_PREVIEW.map((c) => (
                <div
                  key={c.label}
                  className="rounded-2xl border border-dashed border-ash p-6"
                >
                  <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-green-ink">
                    {c.label}
                  </p>
                  <div
                    aria-hidden
                    className="mt-4 flex flex-col gap-2"
                  >
                    <span className="block h-2 w-3/4 rounded-full bg-ash/70" />
                    <span className="block h-2 w-5/6 rounded-full bg-ash/50" />
                    <span className="block h-2 w-2/3 rounded-full bg-ash/40" />
                  </div>
                  <p className="mt-5 text-sm text-navy/75">{c.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="night-mesh noise relative isolate overflow-hidden py-28 text-cream md:py-32">
        <div className="aurora" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <ScrollReveal>
            <Eyebrow tone="light">ابدأ معنا</Eyebrow>
            <h2 className="display-hero mt-5 text-[40px] leading-[1.05] text-cream md:text-[64px]">
              نبني أوّل قصص{" "}
              <span className="accent">النجاح</span>{" "}
              الآن.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/85 md:text-xl">
              لو تبحث عن شريك يهتمّ بمشروعك بقدر ما تهتمّ به أنت، نختار
              عملاءنا بعناية ونبني بإتقان. احكي لنا عن جهتك ونرجع لك بمقترح
              يناسب ميزانيتك خلال 24 ساعة.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="btn btn-accent">
                احجز مكالمة استكشاف
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
    </>
  );
}
