"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/data";
import Icon from "./Icon";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Body scroll lock + ESC dismiss while open
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
    <header className="sticky top-0 z-40 border-b border-ash/60 bg-cream/85 backdrop-blur-md supports-[backdrop-filter]:bg-cream/75">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:right-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-cream"
      >
        تخطّى إلى المحتوى
      </a>

      <nav
        aria-label="الرئيسية"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5"
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
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-cream shadow-soft transition-all duration-200 hover:bg-green hover:shadow-lift active:scale-[0.98]"
            >
              ابدأ مشروعك
              <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} />
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
                    className={`block rounded-xl px-4 py-3.5 text-[16px] font-medium transition-colors duration-200 ${
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
                className="flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3.5 text-center font-medium text-cream hover:bg-green active:scale-[0.98]"
              >
                ابدأ مشروعك
                <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
