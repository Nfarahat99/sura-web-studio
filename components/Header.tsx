"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/data";
import Icon from "./Icon";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  // Top-of-page: dark-glass with cream text (sits over the cinematic dark hero).
  // After scroll: cream-glass with navy text (sits over light page sections).
  const wrapperClass = scrolled
    ? "bg-cream/85 backdrop-blur-md border-b border-ash/50"
    : "bg-navy-deep/40 backdrop-blur-md border-b border-cream/10";

  const linkTextDefault = scrolled
    ? "text-navy/85 hover:text-green-ink"
    : "text-cream/90 hover:text-green-glow";

  const linkTextActive = scrolled ? "text-green-ink" : "text-green-glow";
  const activeBarBg = scrolled ? "bg-green" : "bg-green-glow";

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${wrapperClass}`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-cream"
      >
        انتقل إلى المحتوى
      </a>

      <nav
        aria-label="التنقّل الرئيسي"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8"
      >
        <Link
          href="/"
          className="flex items-center gap-3 rounded-md"
          onClick={() => setOpen(false)}
          aria-label="سُرَى — الصفحة الرئيسية"
        >
          <Image
            src="/logos/sura-logo.png"
            alt=""
            width={120}
            height={40}
            priority
            className={`h-10 w-auto transition-[filter] duration-300 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
          />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative inline-flex items-center rounded-full px-4 py-2 text-[15px] transition-colors duration-200 ${
                    active ? linkTextActive : linkTextDefault
                  }`}
                >
                  {link.label}
                  {active && (
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full ${activeBarBg}`}
                      aria-hidden
                    />
                  )}
                </Link>
              </li>
            );
          })}
          <li className="ms-3">
            <Link
              href="/contact"
              className={`inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold transition-all duration-200 ${
                scrolled
                  ? "bg-navy text-cream hover:bg-charcoal hover:-translate-y-0.5"
                  : "bg-green text-cream hover:bg-green-dark hover:-translate-y-0.5"
              }`}
            >
              ابدأ مشروعك
              <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
            </Link>
          </li>
        </ul>

        <button
          type="button"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-200 lg:hidden ${
            scrolled
              ? "border-ash bg-white text-navy hover:border-green hover:text-green-ink"
              : "border-cream/30 bg-navy-deep/40 text-cream hover:border-green-glow hover:text-green-glow"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={20} />
        </button>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-ash/60 bg-cream shadow-soft lg:hidden"
        >
          <ul className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`block min-h-[48px] rounded-xl px-4 py-3 text-[16px] font-medium transition-colors duration-200 ${
                      active
                        ? "bg-green/10 text-green-ink"
                        : "text-navy/90 hover:bg-cream-dark hover:text-green-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full"
              >
                ابدأ مشروعك
                <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} aria-hidden />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
