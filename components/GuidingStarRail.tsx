"use client";

import { useEffect, useRef, useState } from "react";

type Section = { id: string; label: string };

type Props = {
  sections: Section[];
};

/**
 * Desktop-only vertical rail (start edge in RTL) tracking scroll progress
 * with a single green dot. Each section gets a clickable notch.
 * Hidden below lg breakpoint.
 */
export default function GuidingStarRail({ sections }: Props) {
  const railRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      setProgress(p);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    tick();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActiveId(s.id);
          });
        },
        { rootMargin: "-40% 0px -50% 0px" }
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  const railHeight = 200;
  const dotY = progress * railHeight;

  return (
    <aside
      aria-label="مسار الرحلة"
      className="pointer-events-none fixed top-1/2 z-30 hidden -translate-y-1/2 lg:block"
      style={{ insetInlineStart: "1.5rem" }}
    >
      <div
        ref={railRef}
        className="relative"
        style={{ height: railHeight, width: 2 }}
      >
        <div
          aria-hidden
          className="absolute inset-0 rounded-full"
          style={{
            background: "color-mix(in oklab, var(--color-navy) 16%, transparent)",
          }}
        />
        <span
          aria-hidden
          className="absolute -start-[3px] block h-2 w-2 rounded-full bg-green shadow-[0_0_0_4px_rgba(91,138,71,0.18)] transition-[top] duration-150 ease-out"
          style={{ top: dotY - 4 }}
        />
        {sections.map((s, i) => {
          const top = (i / Math.max(1, sections.length - 1)) * railHeight;
          const active = activeId === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-label={`انتقل إلى قسم ${s.label}`}
              className="pointer-events-auto absolute -start-[5px] block h-3 w-3 rounded-full border bg-cream transition-colors"
              style={{
                top: top - 6,
                borderColor: active
                  ? "var(--color-green)"
                  : "color-mix(in oklab, var(--color-navy) 30%, transparent)",
              }}
            />
          );
        })}
      </div>
    </aside>
  );
}
