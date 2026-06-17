import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import Icon from "@/components/Icon";
import { SERVICES } from "@/lib/data";

export const metadata = {
  title: "خدماتنا — سُرَى",
  description: "كل ما تقدّمه سُرَى: مواقع، تطبيقات ويب، هوية بصرية، حملات تسويقية، SEO، وتقارير.",
};

const PROCESS = [
  { n: "01", t: "مكالمة استكشاف", d: "30-45 دقيقة — تشخيص المشكلة، تأهيل الميزانية، الاتفاق على الخطوة التالية." },
  { n: "02", t: "مقترح خلال 24 ساعة", d: "نطاق ثابت + جدول زمني + سعر واحد. لا فواتير مفاجئة." },
  { n: "03", t: "عقد + دفعة 50%", d: "اتفاقية بسيطة. ندخل العمل اليوم نفسه." },
  { n: "04", t: "بناء متابع يومياً", d: "نشر staging يومي عبر Vercel — تراقب التقدّم لحظة بلحظة." },
  { n: "05", t: "إطلاق + تدريب", d: "نقل DNS، تدريب فريقك، ضمان 14 يوم بعد الإطلاق." },
  { n: "06", t: "متابعة الأسبوع الثاني", d: "نتأكد أنّ كل شي يعمل. نعرض عقد صيانة إن كان مناسباً." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-ink">
            خدماتنا
          </p>
          <h1 className="mt-4 text-[2.5rem] font-black leading-[1.15] text-navy sm:text-5xl md:text-6xl">
            ست خدمات. شراكة واحدة.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.85] text-navy/80 sm:text-lg">
            تختار ما تحتاجه فقط، أو تتركنا نقترح المزيج المناسب لجهتك. أسعار شفّافة،
            نطاق ثابت، إطلاق خلال أسابيع.
          </p>
        </div>
      </section>

      <section className="border-y border-ash/40 bg-mist py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-ink">
              عمليتنا
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
              من المكالمة إلى الإطلاق
            </h2>
          </div>

          <ol className="relative flex flex-col gap-4">
            {/* Vertical timeline rail (RTL-safe via inset) */}
            <span
              aria-hidden
              className="absolute inset-y-2 right-[34px] hidden w-px bg-gradient-to-b from-green/40 via-green/20 to-transparent sm:block"
            />
            {PROCESS.map((step) => (
              <li
                key={step.n}
                className="relative flex items-start gap-5 rounded-2xl border border-ash/50 bg-white p-6 shadow-soft transition-all duration-200 hover:border-green/40 hover:shadow-lift"
              >
                <span
                  className="tabular font-mono inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-green/30 bg-green/10 text-base font-bold text-green-ink"
                  dir="ltr"
                  aria-label={`الخطوة ${step.n}`}
                >
                  {step.n}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy sm:text-xl">{step.t}</h3>
                  <p className="mt-1 text-navy/75">{step.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-navy py-20 text-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-cream sm:text-4xl md:text-5xl">
            عندك مشروع في ذهنك؟
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream/85">
            احكي لنا عنه. نسمع، نقترح، ونرجع لك بمقترح ملموس.
          </p>
          <div className="mt-9">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 font-medium text-cream transition-all duration-200 hover:bg-green-light active:scale-[0.98]"
            >
              احكي لنا
              <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
