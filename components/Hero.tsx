import Link from "next/link";
import Icon from "./Icon";
import HorizonHero from "./HorizonHero";

export default function Hero() {
  return (
    <HorizonHero>
      <div className="fade-up text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-green/30 bg-green/10 px-4 py-1.5 text-sm font-medium text-green-ink">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
          </span>
          نستقبل مشاريع الربع القادم
        </span>

        <h1
          id="hero-title"
          className="mt-7 text-[40px] font-display font-black leading-[1.1] tracking-[-0.015em] text-navy md:text-[72px] md:leading-[1.05]"
        >
          نُرافقك في{" "}
          <span className="relative inline-block text-green-ink">
            الرحلة
            <span
              aria-hidden
              className="absolute bottom-1 left-0 right-0 -z-10 h-2 bg-green/15 sm:h-3"
            />
          </span>
          {" "}من الفكرة إلى الإطلاق.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-[1.7] text-navy/85 md:text-[22px]">
          نبني مواقع وتطبيقات ويب للشركات الصغيرة والجمعيات والمصانع.
          عربي وإنجليزي بنفس العناية، إطلاق خلال أسابيع، وسعر متّفق عليه
          من اليوم الأول.
        </p>

        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Link href="/contact" className="btn btn-primary">
            ابدأ مشروعك
            <Icon name="arrow" size={18} style={{ transform: "scaleX(-1)" }} aria-hidden />
          </Link>
          <Link href="/pricing" className="btn btn-secondary">
            اطّلع على الباقات
          </Link>
        </div>

        <p className="mt-8 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-navy/80">
          <span className="inline-flex items-center gap-1.5">
            <Icon name="check" size={14} className="text-green-ink" aria-hidden />
            إطلاق خلال <span className="tabular">14–21</span> يوم
          </span>
          <span aria-hidden className="text-ash">·</span>
          <span className="inline-flex items-center gap-1.5">
            <Icon name="check" size={14} className="text-green-ink" aria-hidden />
            أسعار ثابتة معلنة
          </span>
          <span aria-hidden className="text-ash">·</span>
          <span className="inline-flex items-center gap-1.5">
            <Icon name="check" size={14} className="text-green-ink" aria-hidden />
            ضمان بعد الإطلاق
          </span>
        </p>
      </div>
    </HorizonHero>
  );
}
