"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
};

/**
 * The homepage hero composition: dawn glow, content slot, edge-to-edge
 * navy horizon SVG (~60% viewport height) with the green guiding-star dot
 * above its peak. Gentle scroll parallax — disabled on reduced-motion.
 */
export default function HorizonHero({ children }: Props) {
  const horizonRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    let lastY = 0;
    const node = horizonRef.current;
    if (!node) return;

    const tick = () => {
      raf = 0;
      const offset = Math.min(lastY * 0.06, 28);
      node.style.transform = `translateY(${offset}px)`;
    };
    const onScroll = () => {
      lastY = window.scrollY;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-cream pt-24 pb-32 md:pt-32 md:pb-40"
    >
      {/* Dawn glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px]"
        style={{
          background:
            "radial-gradient(ellipse 120% 60% at 50% 0%, color-mix(in oklab, var(--color-green-light) 16%, transparent) 0%, transparent 65%)",
        }}
      />

      {/* Horizon — two waves + guiding star dot, edge-to-edge at ~60% */}
      <div
        ref={horizonRef}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[58%] z-0 will-change-transform"
      >
        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          width="100%"
          height="220"
          fill="none"
        >
          {/* Upper wave reaching toward the star */}
          <path
            d="M0 130 C 240 60, 480 60, 720 100 C 960 140, 1200 140, 1440 90"
            stroke="var(--color-navy)"
            strokeOpacity={0.18}
            strokeWidth={1.5}
            strokeLinecap="round"
          />
          {/* Lower wave anchors */}
          <path
            d="M0 178 C 240 152, 480 152, 720 168 C 960 184, 1200 184, 1440 162"
            stroke="var(--color-navy)"
            strokeOpacity={0.12}
            strokeWidth={1}
            strokeLinecap="round"
          />
          {/* Guiding-star dot */}
          <circle cx={720} cy={86} r={8} fill="var(--color-green)" className="star-pulse" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 md:px-8">
        {children}
      </div>
    </section>
  );
}
