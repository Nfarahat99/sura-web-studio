import Link from "next/link";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ash/40 bg-cream">
      {/* Decorative dotted grid — softened opacity to keep text contrast crisp */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, var(--color-green) 1px, transparent 1px), radial-gradient(circle at 80% 70%, var(--color-navy) 1px, transparent 1px)",
          backgroundSize: "44px 44px, 60px 60px",
        }}
        aria-hidden
      />

      {/* Soft glow anchoring the headline */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:py-32">
        <div className="fade-up mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-green/30 bg-green/10 px-4 py-1.5 text-sm font-medium text-green-ink">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
            </span>
            متاحون لاستلام مشاريع الربع القادم
          </span>

          <h1 className="mt-7 text-[2.5rem] font-black leading-[1.15] text-navy sm:text-5xl md:text-6xl lg:text-7xl">
            نبني لما هو <span className="relative inline-block text-green">سُرَى
              <span
                className="absolute bottom-1 left-0 right-0 h-2 -z-10 bg-green/15 sm:h-3"
                aria-hidden
              />
            </span>.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.85] text-navy/80 sm:text-lg md:text-xl">
            مواقع وتطبيقات ويب للشركات والجمعيات والمصانع — من الفكرة إلى الإطلاق.
            <br className="hidden sm:block" />
            نُسلّم خلال أسابيع، بالعربية والإنجليزية، بدون مسرحيات.
          </p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 font-medium text-cream shadow-soft transition-all duration-200 hover:bg-green hover:shadow-lift active:scale-[0.98]"
            >
              ابدأ مشروعك
              <Icon name="arrow" size={18} style={{ transform: "scaleX(-1)" }} />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border-2 border-navy/30 bg-white px-7 py-3.5 font-medium text-navy backdrop-blur-sm transition-all duration-200 hover:border-green hover:text-green active:scale-[0.98]"
            >
              شاهد الباقات
            </Link>
          </div>

          <p className="mt-8 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-navy/75">
            <span className="inline-flex items-center gap-1.5">
              <Icon name="check" size={14} className="text-green" />
              <span className="tabular">14-21</span> يوم للإطلاق
            </span>
            <span aria-hidden className="text-ash">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="check" size={14} className="text-green" />
              باقات بأسعار ثابتة
            </span>
            <span aria-hidden className="text-ash">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="check" size={14} className="text-green" />
              ضمان بعد الإطلاق
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
