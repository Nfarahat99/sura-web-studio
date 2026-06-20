"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  /** Pull strength in px. Default 14. */
  strength?: number;
};

/**
 * A primary CTA that magnetically follows the cursor within its bounds.
 * No-op on touch and reduced-motion.
 */
export default function MagneticButton({ href, children, className = "", strength = 14 }: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const raf = useRef<number | null>(null);

  const move = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const dx = (x / rect.width) * strength * 2;
    const dy = (y / rect.height) * strength * 2;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    });
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate3d(0,0,0)";
  };

  return (
    <Link
      ref={ref}
      href={href}
      onPointerMove={move}
      onPointerLeave={reset}
      className={`btn-magnetic ${className}`}
    >
      {children}
    </Link>
  );
}
