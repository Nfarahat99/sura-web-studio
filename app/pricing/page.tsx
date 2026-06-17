import Link from "next/link";
import PricingCard from "@/components/PricingCard";
import Icon from "@/components/Icon";
import { PRICING_TIERS, ADDONS, BUNDLE_SCENARIOS } from "@/lib/data";

export const metadata = {
  title: "الباقات والأسعار — سُرَى",
  description: "تسعير شفّاف — من باقة ميكرو السنوية للتطبيقات الكاملة.",
};

const FAQ = [
  {
    q: "ما الفرق بين ميكرو و Launch؟",
    a: "ميكرو خدمة سنوية صغيرة للجهات التي تحتاج صفحة هبوط + حملة تسويقية بسيطة (4,500 ريال/سنة). Launch موقع متكامل من 5 صفحات بنطاق وميزات أوسع (9,500 – 18,750 ريال).",
  },
  {
    q: "هل الأسعار قابلة للتفاوض؟",
    a: "الأسعار شفّافة ومُحدَّدة بناءً على نطاق المشروع الفعلي. ضمن النطاق المُعلَن، نحدّد السعر النهائي بعد مكالمة الاكتشاف بناءً على تعقيد مشروعك. لا فواتير مفاجئة بعد التوقيع.",
  },
  {
    q: "هل أستطيع الترقية لاحقاً؟",
    a: "نعم. تبدأ بـ ميكرو وتترقّى لـ Launch أو Build بدفع الفرق فقط — لا تكلفة مهدورة.",
  },
  {
    q: "ماذا عن ميزانية الإعلانات؟",
    a: "منفصلة 100% عن باقاتنا. أنت تدفع لـ Google و Meta مباشرة. نحن نُدير الحملة فقط.",
  },
  {
    q: "كم تأخذ الإطلاق؟",
    a: "ميكرو: 1-2 أسبوع. Launch: 14-21 يوم. Build: 4-6 أسابيع. App: 6-10 أسابيع.",
  },
  {
    q: "هل يمكن إلغاء اشتراك ميكرو؟",
    a: "نعم خلال 14 يوم استرداد كامل (-200 ريال رسوم تأسيس). بعد كذا، إيقاف التجديد التلقائي بدون استرداد.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-ink">
            الباقات والأسعار
          </p>
          <h1 className="mt-4 text-[2.5rem] font-black leading-[1.15] text-navy sm:text-5xl md:text-6xl">
            تسعير شفّاف. بدون مفاجآت.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.85] text-navy/80 sm:text-lg">
            خمس طبقات تغطّي كل ميزانية. تختار، نُوقّع، نبدأ. كل سعر معروض هنا هو السعر.
          </p>
        </div>
      </section>

      <section className="border-y border-ash/40 bg-mist py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 pt-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {PRICING_TIERS.map((t) => (
              <PricingCard key={t.key} tier={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-ash/40 bg-cream py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-ink">
              خدمات إضافية
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
              إضافات تكمّل الباقة
            </h2>
            <p className="mt-3 text-navy/70">
              لباقة ميكرو السنوية بالريال السعودي
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {ADDONS.map((a) => (
              <div
                key={a.name}
                className="hover-lift flex items-center justify-between gap-4 rounded-2xl border border-ash/50 bg-white p-5 shadow-soft hover:border-green/40 hover:shadow-lift"
              >
                <div className="min-w-0">
                  <p className="font-bold text-navy">{a.name}</p>
                  <p className="text-sm text-stone">{a.note}</p>
                </div>
                <p className="tabular shrink-0 text-xl font-bold text-green-ink">
                  {a.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-ash/40 bg-mist py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-ink">
              باقات مُجمَّعة
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
              ثلاثة سيناريوهات شائعة
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-navy/70">
              معظم عملائنا يبدؤون من أحد هذه — مع خصومات تجميع تصل إلى 15%.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {BUNDLE_SCENARIOS.map((b) => {
              const isHighlight = "highlight" in b && b.highlight;
              return (
                <article
                  key={b.key}
                  className={`relative flex h-full flex-col rounded-2xl p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift ${
                    isHighlight
                      ? "border-2 border-green bg-white ring-4 ring-green/10"
                      : "border border-ash/50 bg-white"
                  }`}
                >
                  {isHighlight && (
                    <span className="absolute -top-3 right-6 rounded-full bg-green px-3 py-1 text-xs font-medium text-cream">
                      الأكثر شيوعاً
                    </span>
                  )}
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green-ink">
                    <Icon name={b.icon} size={24} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-navy">{b.title}</h3>
                  <p className="text-sm text-stone">{b.name}</p>
                  <p className="mt-3 text-navy/75">{b.description}</p>

                  <ul className="mt-5 flex flex-col gap-2 border-t border-ash/40 pt-5">
                    {b.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                        <span className="text-navy/85">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-ash/40 pt-5">
                    {b.saving && (
                      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-green-ink">
                        {b.saving}
                      </p>
                    )}
                    <p className="tabular text-2xl font-black text-navy">{b.priceFinal}</p>
                    <p className="mt-1 text-xs text-stone">{b.renewal}</p>
                  </div>

                  <Link
                    href="/contact"
                    className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-center font-medium transition ${
                      isHighlight
                        ? "bg-green text-cream hover:bg-green-light"
                        : "border-2 border-navy/30 bg-white text-navy hover:border-green hover:text-green"
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

      <section className="border-b border-ash/40 bg-cream py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-ink">
              أسئلة شائعة
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
              ما نُسأل عنه كثيراً
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {FAQ.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-ash/50 bg-white p-5 shadow-soft transition-all duration-200 hover:border-green/40 open:border-green/50 open:shadow-lift"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-navy">
                  <span className="flex-1">{f.q}</span>
                  <span
                    aria-hidden
                    className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green/10 text-green-ink transition-transform duration-300 group-open:rotate-45"
                  >
                    <Icon name="plus" size={16} />
                  </span>
                </summary>
                <p className="mt-3 text-navy/75">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-cream sm:text-4xl md:text-5xl">
            غير متأكد من الباقة؟
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream/85">
            احجز مكالمة 30 دقيقة. نسمع ميزانيتك وأهدافك ونقترح الأنسب.
          </p>
          <div className="mt-9">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 font-medium text-cream transition-all duration-200 hover:bg-green-light active:scale-[0.98]"
            >
              احجز استشارة مجانية
              <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
