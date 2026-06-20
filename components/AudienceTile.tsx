import Link from "next/link";
import { AUDIENCES } from "@/lib/data";
import Icon from "./Icon";
import SectionHeader from "./SectionHeader";

export default function AudienceTiles() {
  return (
    <section className="bg-mist py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="من نخدم"
          title="ثلاث شرائح، عرض خاصّ لكلّ شريحة"
          lede="نشتغل بنفس المعيار لكلّ شريحة — ولكلّ واحدة باقة جاهزة بسعر متّفق عليه."
        />

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {AUDIENCES.map((aud, i) => (
            <Link
              key={aud.key}
              href={aud.href}
              className={`card-soft is-hoverable group flex h-full flex-col p-7 md:p-9 fade-up fade-up-delay-${i + 1}`}
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-green/10 text-green-ink transition-colors duration-200 group-hover:bg-green/15">
                <Icon name={aud.icon} size={28} />
              </div>
              <h3 className="mt-5 text-[20px] font-bold leading-[1.3] text-navy md:text-[24px]">
                {aud.title}
              </h3>
              <p
                className="text-[12px] font-semibold uppercase tracking-[0.18em] text-navy/65"
                dir="ltr"
              >
                {aud.subtitle}
              </p>
              <p className="mt-4 text-navy/85">{aud.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {aud.examples.map((ex) => (
                  <li
                    key={ex}
                    className="rounded-full border border-ash bg-cream px-3 py-1 text-xs font-medium text-navy/85"
                  >
                    {ex}
                  </li>
                ))}
              </ul>

              <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-green-ink transition group-hover:gap-3">
                اقرأ المزيد
                <Icon name="arrow" size={14} style={{ transform: "scaleX(-1)" }} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
