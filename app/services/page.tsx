import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import Icon from "@/components/Icon";
import SectionHeader from "@/components/SectionHeader";
import Eyebrow from "@/components/Eyebrow";
import HorizonDivider from "@/components/HorizonDivider";
import ProcessTimeline, { type ProcessStep } from "@/components/ProcessTimeline";
import { SERVICES } from "@/lib/data";

export const metadata = {
  title: "خدماتنا · سُرَى",
  description:
    "ما تقدّمه سُرَى: مواقع، تطبيقات ويب، هوية بصرية، حملات Google وMeta، تحسين محركات البحث، وتقارير شهرية.",
};

const PROCESS: ProcessStep[] = [
  {
    n: "01",
    title: "مكالمة استكشاف",
    duration: "30 إلى 45 دقيقة",
    description:
      "نفهم المشكلة، نتفاهم على الميزانية، نتّفق على الخطوة التالية.",
  },
  {
    n: "02",
    title: "مقترح خلال 24 ساعة",
    duration: "نطاق ثابت، جدول زمني، سعر واحد",
    description: "لا فواتير مفاجئة.",
  },
  {
    n: "03",
    title: "عقد ودفعة 50%",
    duration: "نباشر في نفس اليوم",
    description: "اتفاقية واضحة، نباشر العمل في نفس اليوم.",
  },
  {
    n: "04",
    title: "بناء تتابعه يومياً",
    duration: "نسخة معاينة كلّ يوم",
    description:
      "نسخة معاينة جديدة كلّ يوم على Vercel — تشوف التقدّم بعينك.",
  },
  {
    n: "05",
    title: "إطلاق وتدريب",
    duration: "نقل الدومين وضمان 14 يوم",
    description: "ننقل الدومين، ندرّب فريقك، ضمان 14 يوم بعد الإطلاق.",
  },
  {
    n: "06",
    title: "متابعة بعد أسبوعين",
    duration: "تأكّد كامل",
    description:
      "نتأكّد إنّ كلّ شي يشتغل، ونعرض عليك عقد صيانة لو احتجته.",
  },
];

const NOT_IN_SCOPE = [
  "مواقع عقارية ومنصّات إعلانات مبوّبة",
  "تطبيقات الجوّال الأصلية (iOS/Android)",
  "متاجر إلكترونية معقّدة بـ Shopify/Salla",
  "مشاريع بميزانية أقلّ من 4,500 ريال",
];

export default function ServicesPage() {
  return (
    <>
      <section className="dawn-glow bg-cream pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Eyebrow>خدماتنا</Eyebrow>
          <h1 className="mt-4 text-[32px] font-display font-bold leading-[1.15] text-navy tracking-[-0.01em] md:text-[56px] md:leading-[1.08]">
            ست خدمات. شراكة واحدة.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.75] text-navy/85 md:text-[18px]">
            تختار ما تحتاجه، أو نقترح عليك المزيج الأنسب لجهتك. أسعار
            واضحة، نطاق ثابت، إطلاق خلال أسابيع.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn btn-primary">
              ابدأ مشروعك
              <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>
      </section>

      <HorizonDivider />

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <SectionHeader
            eyebrow="كيف نشتغل"
            title="من المكالمة إلى الإطلاق"
          />
          <div className="mt-12 md:mt-16">
            <ProcessTimeline steps={PROCESS} orientation="vertical" />
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <SectionHeader
            eyebrow="ما لا نقدّمه"
            title="نقول لا — لو ما نقدر نُسلّم بإتقان"
            lede="الصدق فوق التوسّع. هذي المشاريع نحوّلها لشركاء نثق فيهم بدل ما نقبل ونتعثّر."
          />
          <ul className="mx-auto mt-10 flex max-w-2xl flex-col gap-3">
            {NOT_IN_SCOPE.map((item) => (
              <li
                key={item}
                className="card-soft flex items-start gap-3 p-5"
              >
                <span
                  aria-hidden
                  className="mt-2.5 inline-block h-2 w-2 shrink-0 rounded-full bg-error/80"
                />
                <span className="text-navy/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy py-20 md:py-28 text-cream">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="text-[32px] font-bold leading-[1.15] text-cream md:text-[48px]">
            عندك مشروع في بالك؟
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream/90">
            احكي لنا عنه. نسمع، نسأل، ونرجع لك بمقترح ملموس.
          </p>
          <div className="mt-9">
            <Link href="/contact" className="btn btn-on-navy">
              احكي لنا
              <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
