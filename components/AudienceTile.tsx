import Link from "next/link";
import { AUDIENCES } from "@/lib/data";
import Icon from "./Icon";

export default function AudienceTiles() {
  return (
    <section className="border-b border-ash/40 bg-mist py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-green-ink">
            من نخدم
          </p>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
            ثلاثة جماهير، عرض مخصّص لكل واحد
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-navy/70">
            نُسلّم بنفس الحرفية لثلاث شرائح مختلفة — ولكل واحدة باقة موصى بها بسعر مميّز.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {AUDIENCES.map((aud, i) => (
            <Link
              key={aud.key}
              href={aud.href}
              className={`group hover-lift fade-up flex h-full flex-col rounded-2xl border border-ash/60 bg-white p-7 shadow-soft hover:-translate-y-1 hover:border-green/50 hover:shadow-lift fade-up-delay-${i + 1}`}
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-green/10 text-green-ink transition-colors duration-200 group-hover:bg-green/15">
                <Icon name={aud.icon} size={28} />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-navy">{aud.title}</h3>
              <p className="text-sm font-medium uppercase tracking-wider text-stone" dir="ltr">
                {aud.subtitle}
              </p>
              <p className="mt-4 text-navy/80">{aud.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {aud.examples.map((ex) => (
                  <li
                    key={ex}
                    className="rounded-full border border-ash bg-cream px-3 py-1 text-xs font-medium text-navy"
                  >
                    {ex}
                  </li>
                ))}
              </ul>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-green-ink transition group-hover:gap-3">
                شاهد العرض
                <Icon name="arrow" size={14} style={{ transform: "scaleX(-1)" }} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
