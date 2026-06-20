import Link from "next/link";
import PricingCard from "@/components/PricingCard";
import Icon from "@/components/Icon";
import SectionHeader from "@/components/SectionHeader";
import Eyebrow from "@/components/Eyebrow";
import HorizonDivider from "@/components/HorizonDivider";
import { PRICING_TIERS, ADDONS, BUNDLE_SCENARIOS } from "@/lib/data";

export const metadata = {
  title: "الباقات والأسعار · سُرَى",
  description:
    "أسعار واضحة — من باقة ميكرو السنوية إلى تطبيقات الويب الكاملة.",
};

const FAQ = [
  {
    q: "ما الفرق بين ميكرو و Launch؟",
    a: "ميكرو اشتراك سنوي للجهات التي تحتاج صفحة هبوط وحملة Google صغيرة بميزانية محدودة (4,500 ريال/سنة). Launch موقع كامل من 5 صفحات بنطاق وميزات أوسع (9,500 – 18,750 ريال).",
  },
  {
    q: "هل الأسعار قابلة للتفاوض؟",
    a: "الأسعار محدّدة بناءً على نطاق المشروع الفعلي. ضمن النطاق المُعلَن، نحدّد السعر النهائي بعد مكالمة الاستكشاف حسب تعقيد مشروعك. ما في فواتير مفاجئة بعد التوقيع.",
  },
  {
    q: "هل أقدر أترقّى لباقة أعلى لاحقاً؟",
    a: "نعم. تبدأ بميكرو وتترقّى لـ Launch أو Build بدفع الفرق فقط — ما تخسر شي من اللي دفعته.",
  },
  {
    q: "ماذا عن ميزانية الإعلانات؟",
    a: "منفصلة تماماً عن باقاتنا. تدفع لـ Google وMeta مباشرة من بطاقتك، ونحن نُدير الحملة.",
  },
  {
    q: "كم تأخذ مدّة الإطلاق؟",
    a: "ميكرو: 1–2 أسبوع. Launch: 14–21 يوم. Build: 4–6 أسابيع. App: 6–10 أسابيع.",
  },
  {
    q: "هل يمكن إلغاء اشتراك ميكرو؟",
    a: "نعم. خلال أول 14 يوم: استرداد كامل ماعدا 200 ريال رسوم التأسيس. بعد ذلك: نوقف التجديد التلقائي بدون استرداد.",
  },
];

const PAYMENT_OPTIONS = [
  { label: "سنوي", note: "4,500 ريال دفعة واحدة" },
  { label: "ربع سنوي", note: "4 × 1,200 ريال" },
  { label: "شهري", note: "12 × 450 ريال" },
];

export default function PricingPage() {
  return (
    <>
      <section className="dawn-glow bg-cream pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Eyebrow>خمس باقات. صفر مفاجآت.</Eyebrow>
          <h1 className="mt-4 text-[32px] font-display font-bold leading-[1.15] text-navy tracking-[-0.01em] md:text-[56px] md:leading-[1.08]">
            أسعار واضحة. لا مفاجآت.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.75] text-navy/85 md:text-[18px]">
            خمس باقات تغطّي كلّ ميزانية. تختار، نوقّع، نبدأ. السعر الذي
            تراه هنا هو السعر النهائي.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm">
            <a href="#bundles" className="btn-ghost">
              أمثلة على باقات شائعة
            </a>
            <span aria-hidden className="text-ash">·</span>
            <a href="#faq" className="btn-ghost">
              الأسئلة المتكرّرة
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRICING_TIERS.slice(0, 3).map((t) => (
              <PricingCard key={t.key} tier={t} />
            ))}
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {PRICING_TIERS.slice(3).map((t) => (
              <PricingCard key={t.key} tier={t} />
            ))}
          </div>
        </div>
      </section>

      <HorizonDivider />

      <section id="bundles" className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeader
            eyebrow="باقات مُجمَّعة"
            title="ثلاثة سيناريوهات نعمل عليها كثيراً"
            lede="أغلب عملائنا يبدأون من واحدة منها — مع خصم تجميع يصل إلى 15%."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {BUNDLE_SCENARIOS.map((b) => {
              const isHighlight = "highlight" in b && b.highlight;
              const base = isHighlight ? "card-anchor" : "card-soft is-hoverable";
              return (
                <article
                  key={b.key}
                  className={`${base} relative flex h-full flex-col p-7 md:p-9`}
                >
                  {isHighlight && (
                    <span className="absolute -top-3 right-6 rounded-full bg-green px-3 py-1 text-xs font-semibold text-cream">
                      الأكثر طلباً
                    </span>
                  )}
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                      isHighlight
                        ? "bg-green-light/15 text-green-light"
                        : "bg-green/10 text-green-ink"
                    }`}
                  >
                    <Icon name={b.icon} size={24} />
                  </div>
                  <h3
                    className={`mt-5 text-xl font-bold ${
                      isHighlight ? "text-cream" : "text-navy"
                    }`}
                  >
                    {b.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      isHighlight ? "text-cream/80" : "text-navy/65"
                    }`}
                  >
                    {b.name}
                  </p>
                  <p
                    className={`mt-3 ${
                      isHighlight ? "text-cream/90" : "text-navy/80"
                    }`}
                  >
                    {b.description}
                  </p>

                  <ul
                    className={`mt-5 flex flex-col gap-2 border-t pt-5 ${
                      isHighlight ? "border-cream/40" : "border-ash/40"
                    }`}
                  >
                    {b.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <span
                          aria-hidden
                          className={`mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${
                            isHighlight ? "bg-green-light" : "bg-green"
                          }`}
                        />
                        <span
                          className={isHighlight ? "text-cream/90" : "text-navy/90"}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`mt-6 border-t pt-5 ${
                      isHighlight ? "border-cream/40" : "border-ash/40"
                    }`}
                  >
                    {b.saving && (
                      <p
                        className={`mb-2 text-xs font-medium uppercase tracking-wider ${
                          isHighlight ? "text-green-light" : "text-green-ink"
                        }`}
                      >
                        {b.saving}
                      </p>
                    )}
                    <p
                      className={`tabular text-[26px] font-black ${
                        isHighlight ? "text-cream" : "text-navy"
                      }`}
                    >
                      {b.priceFinal}
                    </p>
                    <p
                      className={`mt-1 text-xs ${
                        isHighlight ? "text-cream/75" : "text-navy/65"
                      }`}
                    >
                      {b.renewal}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className={`btn mt-6 ${
                      isHighlight ? "btn-on-navy" : "btn-secondary"
                    }`}
                  >
                    احجز {b.title.replace(/[🌱🌿🌳]/g, "").trim()}
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-mist py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <SectionHeader
            eyebrow="خيارات الدفع"
            title="ميكرو — ثلاث طرق للدفع"
            lede="نحاول نخدم كلّ ميزانية. تختار اللي يناسبك."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {PAYMENT_OPTIONS.map((opt) => (
              <div
                key={opt.label}
                className="card-soft flex flex-col items-center p-6 text-center"
              >
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-green-ink">
                  {opt.label}
                </p>
                <p className="tabular mt-3 text-lg font-bold text-navy">
                  {opt.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <SectionHeader
            eyebrow="خدمات إضافية"
            title="إضافات تكمّل الباقة"
            lede="إضافات على باقة ميكرو السنوية — بالريال السعودي."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {ADDONS.map((a) => (
              <div
                key={a.name}
                className="card-soft is-hoverable flex items-center justify-between gap-4 p-5"
              >
                <div className="min-w-0">
                  <p className="font-bold text-navy">{a.name}</p>
                  <p className="text-sm text-navy/70">{a.note}</p>
                </div>
                <p className="tabular shrink-0 text-xl font-bold text-green-ink">
                  {a.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <SectionHeader
            eyebrow="أسئلة شائعة"
            title="الأسئلة التي تتكرّر علينا"
          />
          <div className="mt-12 flex flex-col gap-3">
            {FAQ.map((f) => (
              <details
                key={f.q}
                className="card-soft group p-5 transition-all duration-200 open:border-green/50"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-navy">
                  <span className="flex-1">{f.q}</span>
                  <span
                    aria-hidden
                    className="acc-indicator inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green/10 text-green-ink transition-transform duration-300"
                  >
                    <Icon name="plus" size={16} />
                  </span>
                </summary>
                <p className="mt-3 text-navy/80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 md:py-28 text-cream">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="text-[32px] font-bold leading-[1.15] text-cream md:text-[48px]">
            ما زلت تتردّد بين الباقات؟
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream/90">
            احجز مكالمة 30 دقيقة، نسمع منك ميزانيتك وأهدافك ونقترح عليك الأنسب.
          </p>
          <div className="mt-9">
            <Link href="/contact" className="btn btn-on-navy">
              احجز استشارة مجانية
              <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
