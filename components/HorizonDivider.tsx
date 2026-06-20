"use client";

import { useEffect, useRef } from "react";

type Props = {
  flip?: boolean;
  opacity?: number;
  className?: string;
};

/**
 * Thin single-wave SVG used between sections. Brand-specific divider —
 * replaces every <hr> and standalone border. Alternates direction with `flip`.
 * When it enters the viewport, the path "draws" itself once via
 * stroke-dashoffset animation. Respects reduced-motion (snaps to drawn).
 */
export default function HorizonDivider({
  flip = false,
  opacity = 0.18,
  className = "",
}: Props) {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = reduced ? "0" : `${len}`;
    if (reduced) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            path.style.transition = "stroke-dashoffset 1800ms cubic-bezier(.2,.7,.2,1)";
            path.style.strokeDashoffset = "0";
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(path);
    return () => io.disconnect();
  }, []);

  return (
    <div
      aria-hidden
      className={`pointer-events-none w-full ${className}`}
      style={{ height: 80 }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        fill="none"
        focusable={false}
      >
        <path
          ref={pathRef}
          d={
            flip
              ? "M0 50 C 240 20, 480 20, 720 40 C 960 60, 1200 60, 1440 30"
              : "M0 30 C 240 60, 480 60, 720 40 C 960 20, 1200 20, 1440 50"
          }
          stroke="var(--color-navy)"
          strokeOpacity={opacity}
          strokeWidth={1.25}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
