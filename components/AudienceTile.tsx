import Link from "next/link";
import { AUDIENCES } from "@/lib/data";
import Icon from "./Icon";
import SectionHeader from "./SectionHeader";
import TiltCard from "./TiltCard";
import ScrollReveal from "./ScrollReveal";

export default function AudienceTiles() {
  return (
    <section className="relative overflow-hidden bg-cream-dark py-24 md:py-32">

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="من نخدم"
            title={
              <>
                ثلاث شرائح،{" "}
                <span className="accent">عرض خاصّ</span> لكلّ شريحة
              </>
            }
            lede="نشتغل بنفس المعيار لكلّ شريحة — ولكلّ واحدة باقة جاهزة بسعر متّفق عليه."
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-7 md:mt-20 md:grid-cols-3">
          {AUDIENCES.map((aud, i) => (
            <ScrollReveal key={aud.key} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="tilt-wrap h-full">
                <TiltCard className="card-premium group relative flex h-full flex-col p-8 md:p-10">
                  <div className="relative z-10 flex h-full flex-col">
                    {/* Sector chip */}
                    <span
                      className="absolute -top-3 right-6 inline-flex items-center gap-1 rounded-full bg-navy px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-green-glow"
                      dir="ltr"
                    >
                      {aud.subtitle}
                    </span>

                    {/* Icon tile with 3D pop */}
                    <span className="tilt-pop inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-deep text-green-glow shadow-lg">
                      <Icon name={aud.icon} size={32} />
                    </span>

                    <h3 className="mt-5 text-2xl font-bold leading-tight text-navy md:text-[28px]">
                      {aud.title}
                    </h3>

                    <p className="mt-3 text-navy/85">{aud.description}</p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {aud.examples.map((ex) => (
                        <li
                          key={ex}
                          className="rounded-full border border-navy/15 bg-cream-dark/60 px-3 py-1 text-xs font-medium text-navy/80"
                        >
                          {ex}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={aud.href}
                      className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-green-ink transition group-hover:gap-3 group-hover:text-green-dark"
                      aria-label={`اعرف أكثر عن ${aud.title}`}
                    >
                      اعرض حلول {aud.title}
                      <Icon name="arrow" size={14} style={{ transform: "scaleX(-1)" }} aria-hidden />
                    </Link>
                  </div>
                </TiltCard>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
