"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Icon from "./Icon";
import WaveGlyph from "./WaveGlyph";
import MagneticButton from "./MagneticButton";

/**
 * Cinematic Hero — full-viewport dark editorial.
 *
 * Layers (back to front):
 *   1. night-mesh gradient + aurora drift + noise grain
 *   2. oversized outline brand word "سُرَى" (parallax slow)
 *   3. main H1 + lede + CTAs (parallax mid)
 *   4. floating wave glyph + green guiding-star dot (parallax fast)
 *   5. corner ornaments (rotated brand keywords)
 *
 * Mouse parallax on pointer-fine devices; scroll parallax on all.
 * Reduced-motion: all transforms disabled.
 */
export default function CinematicHero() {
  const root = useRef<HTMLElement | null>(null);
  const layerBack = useRef<HTMLDivElement | null>(null);
  const layerMid = useRef<HTMLDivElement | null>(null);
  const layerFront = useRef<HTMLDivElement | null>(null);
  const glyph = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Stop attaching parallax once the hero is out of view — pointless cost.
    const root = document.querySelector('[aria-label="مقدمة الموقع"]');
    let inView = true;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) inView = e.isIntersecting;
      },
      { threshold: 0 }
    );
    if (root) io.observe(root);

    let raf = 0;
    const state = { sy: window.scrollY, mx: 0, my: 0 };
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    const apply = () => {
      raf = 0;
      if (!inView) return;
      const back = layerBack.current;
      const mid = layerMid.current;
      const g = glyph.current;
      const sy = state.sy;
      // Only TWO layers updated per frame instead of four — cuts paint cost.
      if (back) back.style.transform = `translate3d(${state.mx * -6}px, ${sy * 0.15 + state.my * -3}px, 0)`;
      if (mid)  mid.style.transform  = `translate3d(${state.mx * -8}px, ${sy * 0.06 + state.my * -4}px, 0)`;
      if (g)    g.style.transform    = `translate3d(${state.mx * 18}px, ${sy * -0.08}px, 0)`;
    };

    const onScroll = () => {
      state.sy = window.scrollY;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onMove = (e: PointerEvent) => {
      if (coarse) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      state.mx = (e.clientX / w - 0.5) * 2;
      state.my = (e.clientY / h - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    if (!coarse) window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={root}
      className="night-mesh noise relative isolate overflow-hidden pb-24 pt-28 text-cream md:min-h-[92vh] md:pb-32 md:pt-36"
      aria-label="مقدمة الموقع"
    >
      {/* Aurora glow drift */}
      <div className="aurora" aria-hidden />

      {/* Layer 1 — Oversized outline brand word */}
      <div
        ref={layerBack}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[18%] flex justify-center will-change-transform"
      >
        <span className="text-outline-cream display-hero select-none text-[28vw] leading-none md:text-[18vw]">
          سُرَى
        </span>
      </div>

      {/* Layer 2 — corner glyph */}
      <div
        ref={glyph}
        aria-hidden
        className="pointer-events-none absolute -right-10 top-24 hidden text-green-glow md:block will-change-transform"
      >
        <div className="float-y">
          <WaveGlyph size={260} showDot opacity={0.55} />
        </div>
      </div>

      {/* Layer 3 — content */}
      <div ref={layerMid} className="relative mx-auto max-w-6xl px-5 md:px-8 will-change-transform">
        <div className="flex flex-col items-start">
          <span className="card-glass inline-flex items-center gap-2 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-cream/90">
            <span className="block h-1.5 w-1.5 rounded-full bg-green-glow star-pulse" />
            استوديو ويب · الرياض · نستقبل مشاريع الربع القادم
          </span>

          <h1 className="display-hero mt-10 max-w-4xl text-[44px] leading-[1.12] md:mt-12 md:text-[88px] md:leading-[1.08] lg:text-[104px]">
            <span className="block text-cream">نُرافقك في</span>
            <span className="block">
              <span className="relative inline-block">
                <span className="text-gold">الرحلة</span>
                <span
                  aria-hidden
                  className="absolute -bottom-2 right-0 left-0 h-3"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, color-mix(in oklab, var(--color-green-glow) 35%, transparent) 35%, color-mix(in oklab, var(--color-green-glow) 35%, transparent) 65%, transparent 100%)",
                    filter: "blur(8px)",
                  }}
                />
              </span>{" "}
              <span className="text-cream">من الفكرة</span>
            </span>
            <span className="block text-cream">إلى الإطلاق.</span>
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-[1.9] text-cream/85 md:mt-12 md:text-xl">
            نبني مواقع وتطبيقات ويب للشركات الصغيرة والجمعيات والمصانع. عربي
            وإنجليزي بنفس العناية، إطلاق خلال أسابيع، وسعر متّفق عليه من اليوم
            الأول.
          </p>

          <div className="mt-12 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
            <MagneticButton href="/contact" className="btn btn-accent btn-magnetic">
              ابدأ مشروعك
              <Icon name="arrow" size={18} style={{ transform: "scaleX(-1)" }} aria-hidden />
            </MagneticButton>
            <Link
              href="/work"
              className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full border border-cream/35 px-7 text-cream transition hover:border-green-glow hover:text-green-glow"
            >
              <Icon name="sparkle" size={16} aria-hidden />
              شاهد كيف نعمل
            </Link>
          </div>

          {/* Trust bar */}
          <ul className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-cream/75">
            <li className="inline-flex items-center gap-2">
              <Icon name="check" size={16} className="text-green-glow" aria-hidden />
              إطلاق خلال 14–21 يوم
            </li>
            <li className="inline-flex items-center gap-2">
              <Icon name="check" size={16} className="text-green-glow" aria-hidden />
              أسعار ثابتة معلنة
            </li>
            <li className="inline-flex items-center gap-2">
              <Icon name="check" size={16} className="text-green-glow" aria-hidden />
              ضمان بعد الإطلاق
            </li>
          </ul>
        </div>
      </div>

      {/* Layer 4 — scroll indicator */}
      <div
        ref={layerFront}
        className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center text-cream/55 will-change-transform"
        aria-hidden
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] uppercase tracking-[0.3em]">اعرف الرحلة</span>
          <span className="block h-10 w-px bg-gradient-to-b from-transparent via-cream/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
