import Link from "next/link";
import Icon from "@/components/Icon";

export const metadata = {
  title: "الصفحة غير موجودة — سُرَى",
};

export default function NotFound() {
  return (
    <section className="bg-cream py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-green/10 text-green-ink">
          <Icon name="seedling" size={40} />
        </div>
        <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-green-ink">
          خطأ 404
        </p>
        <h1 className="mt-3 text-4xl font-black text-navy sm:text-5xl md:text-6xl">
          الصفحة غير موجودة
        </h1>
        <p className="mt-5 text-lg text-navy/75">
          يبدو أنّك ضللت الطريق. لا بأس — هنا أين تذهب:
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 font-medium text-cream transition hover:bg-green"
          >
            الرئيسية
            <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-full border-2 border-navy/30 bg-white px-6 py-3.5 text-navy transition hover:border-green hover:text-green"
          >
            الباقات
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-navy/30 bg-white px-6 py-3.5 text-navy transition hover:border-green hover:text-green"
          >
            تواصل
          </Link>
        </div>
      </div>
    </section>
  );
}
