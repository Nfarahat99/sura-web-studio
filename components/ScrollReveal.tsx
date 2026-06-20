"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  className?: string;
  /** Once visible, never re-hide. Default true. */
  once?: boolean;
  as?: keyof React.JSX.IntrinsicElements;
};

/**
 * Wraps content with an IntersectionObserver-based fade-up reveal.
 * Honors prefers-reduced-motion via globals.css `.reveal` rule.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  once = true,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-visible");
            if (once) io.unobserve(e.target);
          } else if (!once) {
            (e.target as HTMLElement).classList.remove("is-visible");
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const delayClass = delay ? `reveal-d${delay}` : "";
  const ComponentTag = Tag as React.ElementType;
  return (
    <ComponentTag
      ref={ref as React.Ref<HTMLElement>}
      className={`reveal ${delayClass} ${className}`}
    >
      {children}
    </ComponentTag>
  );
}
