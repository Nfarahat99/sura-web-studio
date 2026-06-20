import Link from "next/link";
import PricingCard from "@/components/PricingCard";
import Icon from "@/components/Icon";
import Eyebrow from "@/components/Eyebrow";
import HorizonDivider from "@/components/HorizonDivider";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
import { PRICING_TIERS, ADDONS, BUNDLE_SCENARIOS } from "@/lib/data";

export const metadata = {
  title: "الباقات والأسعار",
  description:
    "أسعار واضحة — من باقة ميكرو السنوية إلى تطبيقات الويب الكاملة. خمس باقات، صفر مفاجآت.",
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
  { label: "سنوي", note: "4,500 ريال", sub: "دفعة واحدة" },
  { label: "ربع سنوي", note: "4 × 1,200", sub: "ريال كلّ 3 شهور" },
  { label: "شهري", note: "12 × 450", sub: "ريال شهرياً" },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero — dark cinematic */}
      <section className="night-mesh noise relative isolate overflow-hidden pt-28 pb-24 text-cream md:pt-36 md:pb-32">
        <div className="aurora" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-5 md:px-8">
          <ScrollReveal>
            <Eyebrow tone="light">خمس باقات. صفر مفاجآت.</Eyebrow>
            <h1 className="display-hero mt-5 text-[44px] leading-[1.05] text-cream md:text-[88px]">
              أسعار{" "}
              <span className="text-gold">واضحة.</span>{" "}
              لا مفاجآت.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-[1.85] text-cream/85 md:text-xl">
              خمس باقات تغطّي كلّ ميزانية. تختار، نوقّع، نبدأ. السعر الذي
              تراه هنا هو السعر النهائي — لا تكاليف خفيّة، لا "ابتداءً من"،
              لا فواتير مفاجئة.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3 text-sm">
              <a
                href="#bundles"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-cream/30 px-6 text-cream transition hover:border-green-glow hover:text-green-glow"
              >
                <Icon name="sparkle" size={14} aria-hidden />
                أمثلة على باقات شائعة
              </a>
              <a
                href="#faq"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-cream/30 px-6 text-cream transition hover:border-green-glow hover:text-green-glow"
              >
                <Icon name="folder" size={14} aria-hidden />
                الأسئلة المتكرّرة
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {PRICING_TIERS.slice(0, 3).map((t, i) => (
              <ScrollReveal key={t.key} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <PricingCard tier={t} />
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-7 grid gap-7 md:grid-cols-2">
            {PRICING_TIERS.slice(3).map((t, i) => (
              <ScrollReveal key={t.key} delay={((i % 2) + 1) as 1 | 2}>
                <PricingCard tier={t} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <HorizonDivider />

      {/* Bundle scenarios */}
      <section id="bundles" className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ScrollReveal>
            <Eyebrow>باقات مُجمَّعة</Eyebrow>
            <h2 className="display-hero mt-4 max-w-3xl text-[36px] leading-[1.05] text-navy md:text-[56px]">
              ثلاثة سيناريوهات{" "}
              <span className="accent">نعمل عليها</span> كثيراً.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-navy/75">
              أغلب عملائنا يبدأون من واحدة منها — مع خصم تجميع يصل إلى 15%.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid gap-7 lg:grid-cols-3">
            {BUNDLE_SCENARIOS.map((b, i) => {
              const isHighlight = "highlight" in b && b.highlight;
              return (
                <ScrollReveal key={b.key} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div className="tilt-wrap h-full">
                    <TiltCard
                      className={`relative flex h-full flex-col p-8 md:p-10 ${
                        isHighlight ? "card-anchor" : "card-premium"
                      }`}
                      shine={!isHighlight}
                    >
                      {isHighlight && (
                        <span className="absolute -top-3 right-6 rounded-full bg-green px-3 py-1 text-xs font-semibold text-cream shadow-soft">
                          الأكثر طلباً
                        </span>
                      )}
                      <div className="relative z-10 flex h-full flex-col">
                        <span
                          className={`tilt-pop inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                            isHighlight
                              ? "bg-green-glow/15 text-green-glow"
                              : "bg-gradient-to-br from-navy to-navy-deep text-green-glow shadow-lg"
                          }`}
                        >
                          <Icon name={b.icon} size={28} />
                        </span>
                        <h3
                          className={`mt-5 text-2xl font-bold ${
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
                          className={`mt-4 ${
                            isHighlight ? "text-cream/90" : "text-navy/80"
                          }`}
                        >
                          {b.description}
                        </p>

                        <ul
                          className={`mt-6 flex flex-col gap-2.5 border-t pt-6 ${
                            isHighlight ? "border-cream/30" : "border-ash/40"
                          }`}
                        >
                          {b.items.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-sm">
                              <Icon
                                name="check"
                                size={14}
                                className={`mt-1 shrink-0 ${
                                  isHighlight ? "text-green-glow" : "text-green"
                                }`}
                                aria-hidden
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
                          className={`mt-6 border-t pt-6 ${
                            isHighlight ? "border-cream/30" : "border-ash/40"
                          }`}
                        >
                          {b.saving && (
                            <p
                              className={`mb-3 text-xs font-medium uppercase tracking-wider ${
                                isHighlight ? "text-green-glow" : "text-green-ink"
                              }`}
                            >
                              ★ {b.saving}
                            </p>
                          )}
                          <p
                            className={`tabular display-hero text-[36px] leading-none ${
                              isHighlight ? "text-cream" : "text-navy"
                            }`}
                          >
                            {b.priceFinal}
                          </p>
                          <p
                            className={`mt-2 text-xs ${
                              isHighlight ? "text-cream/75" : "text-navy/65"
                            }`}
                          >
                            {b.renewal}
                          </p>
                        </div>

                        <Link
                          href="/contact"
                          className={`btn mt-7 ${
                            isHighlight ? "btn-on-navy" : "btn-secondary"
                          }`}
                        >
                          احجز {b.title.replace(/[🌱🌿🌳]/g, "").trim()}
                        </Link>
                      </div>
                    </TiltCard>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment options strip */}
      <section className="bg-cream-dark py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <ScrollReveal>
            <div className="text-center">
              <Eyebrow>خيارات الدفع</Eyebrow>
              <h2 className="display-hero mt-4 text-[28px] leading-[1.1] text-navy md:text-[44px]">
                ميكرو — ثلاث طرق للدفع.
              </h2>
              <p className="mt-4 text-base text-navy/75">
                نحاول نخدم كلّ ميزانية. تختار اللي يناسبك.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PAYMENT_OPTIONS.map((opt, i) => (
              <ScrollReveal key={opt.label} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="card-soft is-hoverable flex flex-col items-center p-8 text-center">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-green-ink">
                    {opt.label}
                  </p>
                  <p className="tabular display-hero mt-4 text-[44px] leading-none text-navy">
                    {opt.note}
                  </p>
                  <p className="mt-2 text-sm text-navy/65">{opt.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="mt-8 text-center text-sm text-navy/65">
              كلّما زادت الأقساط، كانت الرسوم الإدارية أعلى — السنوي أوفر.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Addons */}
      <section className="bg-cream py-24 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <ScrollReveal>
            <div className="text-center">
              <Eyebrow>خدمات إضافية</Eyebrow>
              <h2 className="display-hero mt-4 text-[28px] leading-[1.1] text-navy md:text-[44px]">
                إضافات{" "}
                <span className="accent">تكمّل</span> الباقة.
              </h2>
              <p className="mt-4 text-base text-navy/75">
                إضافات على باقة ميكرو السنوية — بالريال السعودي.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {ADDONS.map((a, i) => (
              <ScrollReveal key={a.name} delay={((i % 2) + 1) as 1 | 2}>
                <div className="card-soft is-hoverable flex items-center justify-between gap-5 p-7">
                  <div className="min-w-0">
                    <p className="text-lg font-bold text-navy">{a.name}</p>
                    <p className="mt-1 text-sm text-navy/65">{a.note}</p>
                  </div>
                  <p className="tabular shrink-0 text-2xl font-bold text-green-ink">
                    {a.price}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-cream-dark py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <ScrollReveal>
            <Eyebrow>أسئلة شائعة</Eyebrow>
            <h2 className="display-hero mt-4 text-[32px] leading-[1.08] text-navy md:text-[48px]">
              الأسئلة التي{" "}
              <span className="accent">تتكرّر</span> علينا.
            </h2>
          </ScrollReveal>
          <div className="mt-12 flex flex-col gap-3">
            {FAQ.map((f, i) => (
              <ScrollReveal key={f.q} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <details className="card-soft group p-6 transition-all duration-200 open:border-green/50">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-bold text-navy md:text-lg">
                    <span className="flex-1">{f.q}</span>
                    <span
                      aria-hidden
                      className="acc-indicator inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green/10 text-green-ink transition-transform duration-300"
                    >
                      <Icon name="plus" size={18} />
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-navy/85">{f.a}</p>
                </details>
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
              ما زلت{" "}
              <span className="accent">تتردّد</span>{" "}
              بين الباقات؟
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/85 md:text-xl">
              احجز مكالمة 30 دقيقة، نسمع منك ميزانيتك وأهدافك ونقترح عليك الأنسب.
            </p>
            <div className="mt-9">
              <Link href="/contact" className="btn btn-accent">
                احجز استشارة مجانية
                <Icon name="arrow" size={18} style={{ transform: "scaleX(-1)" }} aria-hidden />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
