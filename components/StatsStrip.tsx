"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

type Props = {
  stats: Stat[];
  /** Animation duration in ms. Default 1400. */
  duration?: number;
  className?: string;
};

/**
 * Animated counters that count up when the strip enters viewport.
 * Each stat: rises from 0 → value with eased curve.
 * Reduced-motion: shows final number immediately.
 */
export default function StatsStrip({ stats, duration = 1400, className = "" }: Props) {
  const wrap = useRef<HTMLDivElement | null>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setRun(true);
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={wrap}
      className={`grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-x-8 ${className}`}
    >
      {stats.map((s, i) => (
        <Counter key={`${s.label}-${i}`} stat={s} run={run} duration={duration} delay={i * 120} />
      ))}
    </div>
  );
}

function Counter({
  stat,
  run,
  duration,
  delay,
}: {
  stat: Stat;
  run: boolean;
  duration: number;
  delay: number;
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!run) return;
    if (typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(stat.value);
      return;
    }
    let raf = 0;
    let start: number | null = null;
    const animate = (ts: number) => {
      if (start === null) start = ts + delay;
      const elapsed = Math.max(0, ts - start);
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(stat.value * eased));
      if (t < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [run, stat.value, duration, delay]);

  return (
    <div className="text-center md:text-start">
      <p className="tabular display-hero text-[44px] leading-none text-cream md:text-[64px]">
        {stat.prefix}
        {val.toLocaleString("ar-SA")}
        {stat.suffix}
      </p>
      <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-cream/70">
        {stat.label}
      </p>
    </div>
  );
}
