"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

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
 * Pointer-coarse devices (touch) get NO listener attached at all.
 * Reduced-motion → no listener attached.
 * Listeners only attach on first pointerenter to avoid 30+ idle listeners
 * sitting on a page that scrolls past unused cards.
 */
export default function TiltCard({ children, className = "", max = 8, shine = true }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const raf = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setEnabled(true);
  }, []);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;   // 0..1
    const y = (e.clientY - rect.top) / rect.height;   // 0..1
    const rx = (0.5 - y) * max * 2;
    const ry = (x - 0.5) * max * 2;

    if (raf.current) return; // throttle to next frame
    raf.current = requestAnimationFrame(() => {
      raf.current = null;
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

  const style: CSSProperties = enabled
    ? { transform: "perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))" }
    : {};

  return (
    <div
      ref={ref}
      onPointerMove={enabled ? onMove : undefined}
      onPointerLeave={enabled ? reset : undefined}
      className={`tilt-card ${className}`}
      style={style}
    >
      {children}
      {shine && enabled ? (
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
