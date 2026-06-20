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
 * Sticky scroll-driven journey timeline.
 * On desktop: left column is sticky (number + active title + progress bar),
 * right column scrolls through step descriptions. As each step enters
 * viewport, the sticky title swaps and the progress bar fills based on
 * the section's scroll position.
 * On mobile: classic stacked timeline.
 */
export default function JourneySteps({ steps }: Props) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLSpanElement | null>(null);
  const progressLabelRef = useRef<HTMLSpanElement | null>(null);

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
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  // Scroll progress: write directly to DOM via refs — no setState, no
  // re-renders. Updates a CSS scale transform + text label inside rAF.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (progressBarRef.current) progressBarRef.current.style.transform = "scaleX(1)";
      if (progressLabelRef.current) progressLabelRef.current.textContent = "100%";
      return;
    }
    let raf = 0;
    const apply = () => {
      raf = 0;
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;
      const passed = Math.min(Math.max(-rect.top, 0), total);
      const pct = (passed / total) * 100;
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${pct / 100})`;
      }
      if (progressLabelRef.current) {
        progressLabelRef.current.textContent = `${Math.round(pct)}%`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const current = steps[active] ?? steps[0];

  return (
    <div ref={containerRef} className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      {/* Sticky left rail (desktop only) */}
      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-32">
          <div className="card-anchor relative overflow-hidden p-10">
            {/* Scroll progress bar — top edge. Updated via ref, no re-renders. */}
            <span
              ref={progressBarRef}
              aria-hidden
              className="absolute inset-x-0 top-0 h-[3px] origin-left bg-green-glow"
              style={{ transform: "scaleX(0)", willChange: "transform" }}
            />
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-green-glow">
              الخطوة {String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
            </p>
            <p className="display-hero mt-4 text-[88px] leading-none text-cream/15 tabular">
              {current.num}
            </p>
            <h3 className="mt-2 text-3xl font-bold text-cream">
              {current.title}
            </h3>
            <p className="mt-2 text-sm text-cream/70">{current.duration}</p>
            <p className="mt-6 text-base leading-relaxed text-cream/85">
              {current.description}
            </p>

            {/* Progress dots + total progress percentage */}
            <div className="mt-10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {steps.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? "w-10 bg-green-glow" : "w-2 bg-cream/30"
                    }`}
                  />
                ))}
              </div>
              <span
                ref={progressLabelRef}
                className="tabular text-[11px] font-semibold tracking-wider text-cream/60"
              >
                0%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Step list (right col on desktop, full on mobile) */}
      <ol className="relative lg:col-span-7">
        {/* Vertical rail line */}
        <span
          className="absolute bottom-4 top-4 right-5 w-px bg-gradient-to-b from-transparent via-navy/15 to-transparent lg:right-6"
          aria-hidden
        />
        {steps.map((s, i) => (
          <li
            key={s.num}
            ref={(el) => { refs.current[i] = el; }}
            data-idx={i}
            className="relative ps-16 pb-16 lg:ps-20"
          >
            {/* Step circle */}
            <span
              className={`absolute top-1 inline-flex h-11 w-11 items-center justify-center rounded-full border-2 text-sm font-bold tabular transition-all duration-300 ${
                i === active
                  ? "border-green bg-green text-cream shadow-[0_0_0_6px_rgba(91,138,71,0.15)]"
                  : "border-ash bg-cream text-navy"
              }`}
              style={{ insetInlineStart: "0" }}
            >
              {s.num}
            </span>

            <div className="card-soft is-hoverable relative p-7 md:p-9">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green-ink">
                  <Icon name={s.icon} size={24} />
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h4 className="text-xl font-bold text-navy">{s.title}</h4>
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-green-ink">
                      {s.duration}
                    </span>
                  </div>
                  <p className="mt-3 text-navy/85">{s.description}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
