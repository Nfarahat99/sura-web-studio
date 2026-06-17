"use client";

import { useState } from "react";
import Icon from "./Icon";
import { CONTACT, whatsappLink } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if ((fd.get("company_website") as string)?.length > 0) {
      setStatus("success");
      return;
    }
    setStatus("submitting");
    setErrorMessage("");

    const payload = {
      name: (fd.get("name") as string) || "",
      email: (fd.get("email") as string) || "",
      phone: (fd.get("phone") as string) || "",
      package: (fd.get("package") as string) || "",
      message: (fd.get("message") as string) || "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          data?.error === "rate_limited"
            ? "محاولات كثيرة في وقت قصير. حاول بعد دقيقة."
            : "حصل خطأ غير متوقع. جرّب مرة ثانية أو راسلنا مباشرة."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage("ما قدرنا نتصل بالخادم. تحقّق من الإنترنت أو راسلنا عبر واتساب.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-green/30 bg-green/10 p-8 text-center shadow-soft"
      >
        <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-green/20 text-green-ink">
          <Icon name="check" size={32} />
        </div>
        <h3 className="mt-4 text-2xl font-bold text-navy">شكراً!</h3>
        <p className="mx-auto mt-2 max-w-md text-navy/75">
          استلمنا طلبك. نتواصل معك خلال 24 ساعة عبر البريد أو واتساب.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <a
            href={whatsappLink("مرحباً، أرسلت لتوّي عبر نموذج الموقع.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green px-5 py-2.5 text-sm text-cream transition hover:bg-green-light"
          >
            <Icon name="whatsapp" size={16} />
            تابع عبر واتساب
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-2 rounded-full border-2 border-navy/30 bg-white px-5 py-2.5 text-sm text-navy transition hover:border-green hover:text-green"
          >
            <Icon name="mail" size={16} />
            راسلنا مباشرة
          </a>
        </div>
      </div>
    );
  }

  const fieldBase =
    "w-full rounded-xl border border-ash bg-white px-4 py-3 text-navy outline-none transition-all duration-150 placeholder:text-stone/70 focus:border-green focus:ring-2 focus:ring-green/30";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-2xl border border-ash/50 bg-white p-6 shadow-soft sm:p-8"
      aria-busy={status === "submitting"}
    >
      {/* Honeypot — hidden from real users, visible to bots */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="company_website">Company website (leave blank)</label>
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          id="company_website"
          name="company_website"
        />
      </div>

      <div>
        <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium text-navy">
          الاسم <span className="text-error" aria-hidden>*</span>
        </label>
        <input
          required
          type="text"
          id="cf-name"
          name="name"
          autoComplete="name"
          className={fieldBase}
          placeholder="اسمك الكريم"
        />
      </div>

      <div>
        <label htmlFor="cf-email" className="mb-1.5 block text-sm font-medium text-navy">
          البريد الإلكتروني <span className="text-error" aria-hidden>*</span>
        </label>
        <input
          required
          type="email"
          id="cf-email"
          name="email"
          autoComplete="email"
          inputMode="email"
          className={fieldBase}
          placeholder="name@example.com"
          dir="ltr"
        />
      </div>

      <div>
        <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-medium text-navy">
          الواتساب <span className="text-stone">(اختياري)</span>
        </label>
        <input
          type="tel"
          id="cf-phone"
          name="phone"
          autoComplete="tel"
          inputMode="tel"
          className={fieldBase}
          placeholder="+966 5X XXX XXXX"
          dir="ltr"
        />
      </div>

      <div>
        <label htmlFor="cf-package" className="mb-1.5 block text-sm font-medium text-navy">
          الباقة المهتم بها
        </label>
        <div className="relative">
          <select
            id="cf-package"
            name="package"
            className={`${fieldBase} appearance-none pe-12`}
          >
            <option value="">اختر الباقة</option>
            <option value="micro">سُرَى ميكرو (4,500 ريال/سنة)</option>
            <option value="launch">Launch (9,500 – 18,750 ريال)</option>
            <option value="build">Build (22,500 – 45,000 ريال)</option>
            <option value="app">App (56,000 – 131,000 ريال)</option>
            <option value="retainer">Retainer (13,125 ريال/شهر)</option>
            <option value="unsure">لست متأكداً — أحتاج استشارة</option>
          </select>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-stone"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className="mb-1.5 block text-sm font-medium text-navy">
          اخبرنا عن مشروعك <span className="text-error" aria-hidden>*</span>
        </label>
        <textarea
          required
          id="cf-message"
          name="message"
          rows={5}
          className={`${fieldBase} resize-none`}
          placeholder="نوع الجهة، الهدف من الموقع، وأي ميزات تطلبها…"
        />
        <p className="mt-1.5 text-xs text-stone">
          كلّما كانت التفاصيل أوضح، كان مقترحنا أدق.
        </p>
      </div>

      {status === "error" && errorMessage && (
        <div
          role="alert"
          className="rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-sm text-error"
        >
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 font-medium text-cream shadow-soft transition-all duration-200 hover:bg-green hover:shadow-lift active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
              <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            جارٍ الإرسال…
          </>
        ) : (
          <>
            أرسل الطلب
            <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} />
          </>
        )}
      </button>

      <p className="text-center text-xs text-stone">
        لا نشارك بياناتك مع أي جهة.{" "}
        <a className="underline decoration-green/40 underline-offset-2 hover:text-green-ink" href="/privacy">
          سياسة الخصوصية
        </a>
      </p>
    </form>
  );
}
