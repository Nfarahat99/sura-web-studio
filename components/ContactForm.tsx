"use client";

import { useState } from "react";
import Icon from "./Icon";
import { CONTACT, whatsappLink } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

const TIER_OPTIONS = [
  { value: "micro", label: "ميكرو", hint: "4,500 ريال/سنة" },
  { value: "launch", label: "Launch", hint: "9,500 – 18,750 ريال" },
  { value: "build", label: "Build", hint: "22,500 – 45,000 ريال" },
  { value: "app", label: "App", hint: "56,000 – 131,000 ريال" },
  { value: "retainer", label: "Retainer", hint: "13,125 ريال/شهر" },
  { value: "unsure", label: "ما زلت أفكّر", hint: "أحتاج استشارة" },
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [selectedTier, setSelectedTier] = useState<string>("");

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
            ? "أرسلت طلبات كثيرة بسرعة. انتظر دقيقة وأعد المحاولة."
            : "صار خطأ ما توقعناه. أعد المحاولة، أو راسلنا مباشرة على واتساب."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "ما وصلنا للخادم. تحقّق من اتصالك بالإنترنت، أو راسلنا على واتساب."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="card-soft p-8 text-center"
      >
        <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-green/20 text-green-ink">
          <Icon name="check" size={32} />
        </div>
        <h3 className="mt-4 text-2xl font-bold text-navy">وصلنا طلبك.</h3>
        <p className="mx-auto mt-2 max-w-md text-navy/80">
          نرجع لك خلال 24 ساعة على البريد أو واتساب — أيّهما أسرع.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <a
            href={whatsappLink("السلام عليكم، أرسلت طلباً عبر نموذج موقع سُرَى.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green px-5 py-2.5 text-sm text-cream transition hover:bg-green-light"
          >
            <Icon name="whatsapp" size={16} />
            تابع عبر واتساب
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-2 rounded-full border-2 border-navy/30 bg-white px-5 py-2.5 text-sm text-navy transition hover:border-green hover:text-green-ink"
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
      className="card-soft flex flex-col gap-6 p-7 md:p-10"
      aria-busy={status === "submitting"}
    >
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
          placeholder="اسمك"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
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
            الواتساب <span className="text-navy/65">(اختياري)</span>
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
      </div>

      <fieldset>
        <legend className="mb-2 block text-sm font-medium text-navy">
          الباقة التي تهمّك
        </legend>
        <input type="hidden" name="package" value={selectedTier} />
        <div role="radiogroup" className="grid grid-cols-2 gap-2.5 md:grid-cols-3">
          {TIER_OPTIONS.map((opt) => {
            const selected = selectedTier === opt.value;
            return (
              <label
                key={opt.value}
                className={`cursor-pointer rounded-xl border p-3.5 text-sm transition-colors duration-150 ${
                  selected ? "border-green bg-green/5" : "border-ash bg-white hover:border-green/40"
                }`}
              >
                <input
                  type="radio"
                  name="package_choice"
                  value={opt.value}
                  checked={selected}
                  onChange={() => setSelectedTier(opt.value)}
                  className="sr-only"
                />
                <span className="block font-medium text-navy">{opt.label}</span>
                <span className="mt-1 block text-xs text-navy/70">{opt.hint}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="cf-message" className="mb-1.5 block text-sm font-medium text-navy">
          احكي لنا عن مشروعك <span className="text-error" aria-hidden>*</span>
        </label>
        <textarea
          required
          id="cf-message"
          name="message"
          rows={5}
          className={`${fieldBase} resize-none`}
          placeholder="نوع الجهة، هدفك من الموقع، وأي ميزات تخطر على بالك…"
        />
        <p className="mt-1.5 text-xs text-navy/65">
          كلّما وضحت التفاصيل، طلع مقترحنا أدقّ.
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
        className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60"
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
            إرسال الطلب
            <Icon name="arrow" size={16} style={{ transform: "scaleX(-1)" }} />
          </>
        )}
      </button>

      <p className="text-center text-xs text-navy/70">
        بياناتك تبقى عندنا.{" "}
        <a
          className="underline decoration-green/40 underline-offset-2 hover:text-green-ink"
          href="/privacy"
        >
          اقرأ سياسة الخصوصية.
        </a>
      </p>
    </form>
  );
}
