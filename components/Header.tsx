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
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? "border-b border-ash/60 bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent bg-cream/60"
      }`}
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
            className="h-10 w-auto"
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
                    active
                      ? "text-green-ink"
                      : "text-navy/85 hover:text-green-ink"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-green"
                      aria-hidden
                    />
                  )}
                </Link>
              </li>
            );
          })}
          <li className="ms-2">
            <Link href="/contact" className="btn btn-primary text-sm">
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ash bg-white text-navy transition-colors duration-200 hover:border-green hover:text-green-ink lg:hidden"
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
                        : "text-navy/90 hover:bg-mist hover:text-green-ink"
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
