"use client";

import { useEffect, useRef, useState } from "react";

export type ProcessStep = {
  n: string;
  title: string;
  duration?: string;
  description: string;
};

type Props = {
  steps: ProcessStep[];
  orientation?: "horizontal" | "vertical";
};

export default function ProcessTimeline({
  steps,
  orientation = "vertical",
}: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const observers: IntersectionObserver[] = [];
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActiveIndex(i);
          });
        },
        { rootMargin: "-45% 0px -45% 0px" }
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [steps.length]);

  if (orientation === "horizontal") {
    return (
      <ol className="relative grid gap-6 md:grid-cols-3 lg:grid-cols-6">
        {steps.map((s, i) => (
          <li
            key={s.n}
            ref={(el) => { itemRefs.current[i] = el; }}
            className="card-soft flex flex-col items-start p-5"
          >
            <StepNumber n={s.n} active={i === activeIndex} />
            <h3 className="mt-4 text-[18px] font-bold text-navy md:text-[20px]">
              {s.title}
            </h3>
            {s.duration && (
              <span className="tabular mt-1 inline-block rounded-full bg-green/10 px-2.5 py-0.5 text-xs font-medium text-green-ink">
                {s.duration}
              </span>
            )}
            <p className="mt-3 text-sm text-navy/80">{s.description}</p>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className="relative flex flex-col gap-4">
      <span
        aria-hidden
        className="timeline-rail absolute inset-y-3 w-px hidden sm:block"
        style={{ insetInlineEnd: 34 }}
      />
      {steps.map((s, i) => (
        <li
          key={s.n}
          ref={(el) => { itemRefs.current[i] = el; }}
          className="card-soft is-hoverable relative flex items-start gap-5 p-6"
        >
          <StepNumber n={s.n} active={i === activeIndex} />
          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-lg font-bold text-navy sm:text-xl">
                {s.title}
              </h3>
              {s.duration && (
                <span className="tabular text-xs font-medium text-green-ink">
                  {s.duration}
                </span>
              )}
            </div>
            <p className="mt-1 text-navy/80">{s.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function StepNumber({ n, active }: { n: string; active: boolean }) {
  return (
    <span
      dir="ltr"
      aria-label={`الخطوة ${n}`}
      className={`tabular relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy font-mono text-sm font-bold text-cream transition-shadow duration-300 ${
        active
          ? "shadow-[0_0_0_3px_var(--color-green)]"
          : "shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-navy)_15%,transparent)]"
      }`}
    >
      {n}
      {active && (
        <span
          aria-hidden
          className="absolute -top-2 left-1/2 block h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-green"
        />
      )}
    </span>
  );
}
