import Link from "next/link";
import Icon from "@/components/Icon";
import Eyebrow from "@/components/Eyebrow";
import HorizonDivider from "@/components/HorizonDivider";
import WaveGlyph from "@/components/WaveGlyph";

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
  { label: "النتيجة", body: "ما الذي أُطلق فعلاً، وبأي مهلة زمنية." },
  { label: "الأرقام", body: "أرقام واقعية بعد الإطلاق — لا مبالغات." },
];

export default function WorkPage() {
  return (
    <>
      <section className="dawn-glow bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Eyebrow>أعمالنا</Eyebrow>
          <h1 className="mt-4 text-[32px] font-display font-bold leading-[1.15] text-navy tracking-[-0.01em] md:text-[56px] md:leading-[1.08]">
            دراسات الحالة قيد البناء — مثل المشاريع نفسها.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.75] text-navy/85 md:text-[18px]">
            سُرَى استوديو حديث. مشاريع عملائنا الأولى قيد البناء — ننشر
            تفاصيلها هنا خلال الأشهر القادمة. لحدّ الآن، نعرض لك ما نشتغل
            عليه.
          </p>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {PLACEHOLDERS.map((p) => (
              <article
                key={p.title}
                className="card-soft is-hoverable overflow-hidden p-0"
              >
                <div
                  className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy/95 to-navy text-cream"
                  aria-hidden
                >
                  <WaveGlyph size={120} showDot className="text-cream/30" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy">{p.title}</h3>
                  <p className="mt-1 text-sm text-navy/65">{p.type}</p>
                  <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-warning/30 bg-warning/10 px-3 py-1 text-xs font-medium text-navy">
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-warning" />
                    {p.status}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HorizonDivider flip />

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="text-center">
            <Eyebrow>حين تطلق أول دراسة</Eyebrow>
            <h2 className="mt-3 text-[26px] font-bold leading-[1.2] text-navy md:text-[40px] md:leading-[1.15]">
              هكذا ستظهر كلّ قصّة هنا
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-navy/80">
              أربعة أعمدة بسيطة: المشكلة، المنهج، النتيجة، والأرقام.
            </p>
          </div>
          <div className="card-soft mt-12 grid gap-6 p-7 md:grid-cols-2 md:p-10">
            {CASE_PREVIEW.map((c) => (
              <div
                key={c.label}
                className="rounded-xl border border-dashed border-ash p-5"
              >
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-green-ink">
                  {c.label}
                </p>
                <div
                  aria-hidden
                  className="mt-3 flex flex-col gap-2"
                >
                  <span className="block h-2 w-3/4 rounded-full bg-ash/70" />
                  <span className="block h-2 w-5/6 rounded-full bg-ash/50" />
                  <span className="block h-2 w-2/3 rounded-full bg-ash/40" />
                </div>
                <p className="mt-4 text-sm text-navy/70">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-20 md:py-28 text-cream">
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <Eyebrow tone="light">ابدأ معنا</Eyebrow>
          <h2 className="mt-3 text-[32px] font-bold leading-[1.15] text-cream md:text-[48px]">
            نبني أوّل قصص النجاح الآن.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream/90">
            لو تبحث عن شريك يهتمّ بمشروعك بقدر ما تهتمّ به أنت، نختار
            عملاءنا بعناية ونبني بإتقان. احكي لنا عن جهتك ونرجع لك بمقترح
            يناسب ميزانيتك خلال 24 ساعة.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="btn btn-on-navy">
              احجز مكالمة استكشاف
              <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-7 py-3 text-cream transition hover:border-green-light hover:text-green-light"
            >
              اطّلع على الباقات
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
