import Link from "next/link";
import { SERVICES } from "@/lib/data";
import Icon from "./Icon";
import TiltCard from "./TiltCard";
import ScrollReveal from "./ScrollReveal";

/**
 * Services grid using 3D tilt cards + premium border accent.
 * Replaces the old flat ServiceCard grid on the home page.
 */
export default function ServicesShowcase() {
  return (
    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
      {SERVICES.slice(0, 6).map((s, i) => (
        <ScrollReveal key={s.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
          <div className="tilt-wrap h-full">
            <TiltCard className="card-premium relative h-full p-8 md:p-10">
              <div className="relative z-10 flex h-full flex-col">
                <span className="tilt-pop inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-deep text-green-glow shadow-lg">
                  <Icon name={s.icon} size={28} />
                </span>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-green-ink">
                  {String(i + 1).padStart(2, "0")} · خدمة
                </p>
                <h3 className="mt-3 text-2xl font-bold text-navy">{s.title}</h3>
                <p className="mt-3 text-navy/80">{s.description}</p>
                <ul className="mt-6 space-y-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-navy/75"
                    >
                      <span
                        aria-hidden
                        className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-green"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-green-ink hover:text-green-dark"
                >
                  اعرف أكثر
                  <Icon name="arrow" size={14} style={{ transform: "scaleX(-1)" }} aria-hidden />
                </Link>
              </div>
            </TiltCard>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
