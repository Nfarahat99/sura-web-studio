"use client";

import { useEffect, useRef, useState } from "react";
import Icon, { type IconName } from "./Icon";

export type JourneyStep = {
  num: string;
  title: string;
  duration: string;
  description: string;
  icon: IconName;
};

type Props = {
  steps: JourneyStep[];
};

/**
 * Vertical journey timeline. Single column, scrolls naturally.
 * Active state highlights the current step circle/title based on viewport position.
 */
export default function JourneySteps({ steps }: Props) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.idx);
            setActive(idx);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <ol className="relative mx-auto max-w-3xl">
      {/* Vertical rail line — green tint reads on both light and dark backgrounds */}
      <span
        className="absolute bottom-6 top-6 right-[22px] w-px bg-gradient-to-b from-transparent via-green/40 to-transparent"
        aria-hidden
      />
      {steps.map((s, i) => {
        const isActive = i === active;
        return (
          <li
            key={s.num}
            ref={(el) => { refs.current[i] = el; }}
            data-idx={i}
            className="relative ps-16 pb-14 last:pb-0"
          >
            {/* Step circle */}
            <span
              className={`absolute top-2 inline-flex h-11 w-11 items-center justify-center rounded-full border-2 text-sm font-bold tabular transition-all duration-300 ${
                isActive
                  ? "border-green-glow bg-green-glow text-navy shadow-[0_0_0_6px_rgba(166,226,107,0.18)]"
                  : "border-cream/30 bg-navy-deep text-cream/70"
              }`}
              style={{ insetInlineStart: "0" }}
            >
              {s.num}
            </span>

            <div
              className={`card-soft is-hoverable relative p-7 md:p-9 transition-all duration-300 ${
                isActive ? "shadow-[0_18px_44px_rgba(0,0,0,0.18)] ring-1 ring-green-glow/35" : ""
              }`}
            >
              <div className="flex items-start gap-5">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green-ink">
                  <Icon name={s.icon} size={24} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h4 className="text-xl font-bold leading-tight text-navy">{s.title}</h4>
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-green-ink">
                      {s.duration}
                    </span>
                  </div>
                  <p className="mt-3 leading-relaxed text-navy/85">{s.description}</p>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
