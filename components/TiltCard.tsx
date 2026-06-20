"use client";

import { useRef, type ReactNode, type CSSProperties } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Max tilt angle in degrees. Default 8. */
  max?: number;
  /** Inner shine highlight. Default true. */
  shine?: boolean;
};

/**
 * 3D hover tilt — perspective + rotateX/Y based on cursor position.
 * Pointer-coarse devices (touch) get NO tilt — feels worse than static.
 * Respects reduced-motion via no-op handlers.
 */
export default function TiltCard({ children, className = "", max = 8, shine = true }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const raf = useRef<number | null>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;   // 0..1
    const y = (e.clientY - rect.top) / rect.height;   // 0..1
    const rx = (0.5 - y) * max * 2;                   // -max..max
    const ry = (x - 0.5) * max * 2;

    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty("--rx", `${rx}deg`);
      el.style.setProperty("--ry", `${ry}deg`);
      el.style.setProperty("--mx", `${x * 100}%`);
      el.style.setProperty("--my", `${y * 100}%`);
    });
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--mx", "50%");
    el.style.setProperty("--my", "50%");
  };

  const style: CSSProperties = {
    transform: "perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={`tilt-card ${className}`}
      style={style}
    >
      {children}
      {shine ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 hover:opacity-100"
          style={{
            background:
              "radial-gradient(380px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.18), transparent 45%)",
          }}
        />
      ) : null}
    </div>
  );
}
