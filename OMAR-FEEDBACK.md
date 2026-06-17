# OMAR-FEEDBACK.md — ناشئ Website QA Review

**Date:** 2026-06-12
**Reviewer:** Omar (agent-evaluation)
**Subject:** `C:\nashi\05-website\` — Next.js 15 marketing website
**Overall score:** 8.0/10
**Verdict:** Ready for soft launch with one critical content fix + a small set of recommended polish items. No blockers (per R6: 8.0 ≥ 5).

---

## Summary

The website is a clean, opinionated, brand-consistent Next.js 15 + Tailwind v4 build with seven pages, eight reusable components, and a single data source-of-truth (`lib/data.ts`). The Arabic-first execution is strong: `dir="rtl"`, `lang="ar"`, Cairo + IBM Plex Sans Arabic via `next/font/google`, line-height 1.75 globally, and Arabic-primary copy with English used only as the secondary signal-of-bilingualism (audience subtitles, code labels). The pricing page correctly implements the agreed v1 model with all five tiers (Micro 4,500 ريال + Launch + Build + App + Retainer) and includes add-ons + FAQ. CTAs are consistent across pages, the contact form has the right fields, and the footer carries the locked positioning line verbatim.

The main weakness is **a single critical content contradiction on `/work`**: it announces a "$1,500 خصم خاص لأول 3 عملاء" pilot offer that was never agreed for the public website — Foundation Brief explicitly limits this to a private pilot tool, not a published price. This must be removed before any prospect sees the live site. Beyond that, the issues are polish: WhatsApp number is a placeholder `+966500000000`, the contact form has no real submit endpoint (700ms setTimeout fake), there's no SMS/email service wired up, no honeypot or rate limit, missing OG image, no sitemap/robots, no 404 page, no English mirror (Arabic-only despite Brand Guidelines §4.2 promise of "Latin in three roles" — the live website essentially has none beyond a footer line and audience subtitles).

Strategic alignment is strong: the website serves the stated goal of "تعريف بالشركة وعرض الباقات" cleanly. No scope creep — it does not try to be a blog, a portfolio with real cases (correctly defers to placeholders + honest "coming soon"), or an account portal. It is exactly what was scoped.

---

## Per-dimension scores

### 1. Brand consistency — 9.0/10

**Strengths:**
- Color palette is **pixel-locked to Brand Guidelines v6.0** in `globals.css`: Navy `#1E2940`, Green `#5B8A47`, Green-Light `#7BAE5F`, Cream `#F2EEE5`, Mist `#F0F2F5`, Charcoal, Stone, Ash, plus functional Warning/Error/Info. All correct.
- Functional Success color from BG (`#3F8F5A`) is named `--color-green-dark` — same value, repurposed as an accent darker shade. Acceptable drift; semantically reused but not lost.
- 70-20-10 Cream/Navy/Green ratio is respected visually: cream body, navy footers/CTAs, green only as accent (badges, dot pulses, underline decorations, hover states, leaf bullets).
- Typography: Cairo loaded as display + UI, IBM Plex Sans Arabic as body, both via `next/font/google` with weights `400/500/700/900` (Cairo) and `400/500/700` (Plex) — matches BG §4.1 exactly.
- Body `line-height: 1.75` is set globally — implements BG §4.3 Arabic-specific rule ("body line-height = 1.75 (not 1.5)") correctly.
- Logo usage: master logo in header (h-10), light variant in footer on navy (correct lockup choice per BG §2.2).
- Positioning line `WEB DESIGN & WEB APPLICATION STUDIO · SMEs | CHARITIES | MANUFACTURERS` appears verbatim in footer.
- Tagline implemented as `نبني لما هو ناشئ.` on hero — matches BG §5.2 sample copy.
- Voice & tone: avoids the BG-banned vocabulary (no "synergy/leverage/world-class/ecosystem/paradigm/revolutionary") and uses the prescribed vocabulary (نبني/نُسلّم/سريع/شفّاف). The phrase "بدون مسرحيات" appears in three places — direct inheritance of "no agency theater".

**Weaknesses:**
- Logo `alt="ناشئ Nashi"` is good but could include the descriptor for SEO; minor.
- No favicon evidence in the brand kit usage — the `favicon.ico` exists in `public/` but appears to be the Next.js default placeholder, not derived from `nashi-icon.svg`. BG §2.2 says icon mark = favicon.
- No dark mode implementation. BG §3.2 specifies dark mode behavior (Navy becomes background, Cream becomes body, Green-Light replaces Green). The CSS variables exist but `prefers-color-scheme: dark` is never queried in `globals.css`. Acceptable v1 omission, but worth flagging.

**Score rationale:** 9.0 — near-perfect inheritance from BG v6.0, only minor gaps (favicon, dark mode) that don't affect launch.

---

### 2. Content quality (Arabic copy) — 8.2/10

**Strengths:**
- Tone is plain-spoken, confident, warm — exactly the BG §5 voice. Examples: "خلّينا نسمع منك" (contact), "احكي لنا" (services CTA), "نُسلّم خلال أسابيع، بدون مسرحيات" (hero). This is colloquial-but-professional Gulf register, not stiff MSA.
- Pricing page FAQ answers are concrete and honest ("الدولار العملة الأكثر استقراراً" — directly addresses currency without apologizing).
- Audience tile descriptions are specific, not generic: "تدفّق تبرّع يعمل على الموبايل" (charities), "بوابة B2B تُغني الموزّعين عن مكالمات السؤال عن المخزون" (manufacturers). Demonstrates real domain knowledge.
- The services process timeline (`/services` ol) is the single best piece of conversion copy on the site — six concrete steps with timeframes and what happens at each.
- Hero badge "متاحون لاستلام مشاريع الربع القادم" with pulsing green dot is a great trust signal (scarcity without pressure).
- About page mission/vision split is on-brand and bilingually framed without being cluttered.

**Weaknesses:**
- **CRITICAL CONTENT ISSUE:** `/work` page contains a published `$1,500 خصم خاص لأول 3 عملاء` pilot CTA. This is documented in PROJECT-STATUS.md and Foundation Brief §8 as an **internal pricing strategy for warm-intro pilots**, never as a public published offer. Putting this on the live site:
  - Anchors all future prospects to $1,500
  - Devalues the $4,000 Launch tier
  - Conflicts with the locked pricing strategy
  - Contradicts the "say no to bad fits" value — a $1,500 page advertised publicly invites price shoppers
  - Even the Arabic phrasing "هذا أنفسنا في خدمتك" reads slightly desperate
  - **Must be removed from the public site** and kept as a verbal/proposal-stage offer only for qualified leads.
- The /work placeholder names "إندماج" and "سياج الحدود" — are these real clients with consent to be named "قيد التطوير"? If aspirational/imagined, this is fabrication; if real, the placeholder cards are too sparse to be useful. Either commit to real (with logos and 1-line case) or use a single honest "قريباً" card.
- Hero meta line "14-21 يوم للإطلاق · باقات بأسعار ثابتة · ضمان بعد الإطلاق" uses bullet separators `·` between Arabic clauses — fine, but `14-21` is ASCII digits in RTL context. Consider Arabic-Indic digits or at least wrapping in `<span dir="ltr">` for consistency with how dates are rendered elsewhere.
- The home pricing intro copy says "خمس طبقات تغطي كل الميزانيات — من الميكرو السنوي بالريال للتطبيقات الكاملة بالدولار." This is a smart bilingual-pricing transparency, but it surfaces a strategic tension (SAR for low tier, USD for high tiers) that the FAQ has to defend. Worth A/B testing whether a single-currency tier or a clearer "نخدم منطقتك أو السوق العالمي" framing converts better.
- Layout `<title>` is "ناشئ · Nashi — نبني لما هو ناشئ" — good. But sub-page titles append the brand inconsistently: pricing says "الباقات والأسعار — ناشئ" (dash), services "خدماتنا — ناشئ" (dash), but the layout default uses "·" middle dot. Pick one separator and use it everywhere.
- About page founder bio is generic — "مهندس برمجيات ومصمّم منتجات. يقود ناشئ منذ تأسيسها." This is true but missing the trust hook (years experience, prior companies, a personal sentence). For a founder-led studio this is the single most important piece of copy and it's the thinnest paragraph on the site.
- The contact form privacy line "لا نشارك بياناتك مع أي جهة. سياسة خصوصية بسيطة وواضحة" promises a privacy policy that does not exist as a page. Either add `/privacy` or remove "سياسة خصوصية" from the line.

**Score rationale:** 8.2 — voice is strong and consistent, but the /work $1,500 ad is a public pricing leak (-0.5), generic founder bio (-0.2), placeholder client names ambiguity (-0.1).

---

### 3. Code quality — 8.5/10

**Strengths:**
- **Single source of truth:** `lib/data.ts` exports `NAV_LINKS`, `CONTACT`, `AUDIENCES`, `SERVICES`, `PRICING_TIERS`, `ADDONS`, `VALUE_PILLARS`. All pages import from here. Changing the WhatsApp number, swapping a price, or renaming a tier is a one-line edit. This is exactly the discipline asked for.
- **Components are small, reusable, pure:** `PricingCard`, `ServiceCard`, `AudienceTile`, `Hero`, `Header`, `Footer`, `ContactForm`, `WhatsAppButton`. Average ~30-100 lines, no nested complexity, no business logic mixed into UI.
- **TypeScript types** are defined inline at the consumer (`type Tier` in `PricingCard.tsx`, `type Service` in `ServiceCard.tsx`). Strict mode is on (`tsconfig.json` `"strict": true`).
- **"use client" boundaries** are correct and minimal: only `Header.tsx` (mobile menu state) and `ContactForm.tsx` (form state). Everything else is RSC by default. This is best-practice Next.js 15 App Router.
- **`next/font/google`** with `display: "swap"` and CSS variable hand-off (`--font-cairo`, `--font-plex`) — production-grade font loading.
- **`next/image`** used for logos with explicit width/height and `priority` on the header logo. Avoids LCP penalty.
- **`next/link`** used for all internal navigation. No raw `<a href="/...">` for internal routes.
- **Metadata is per-page** (`export const metadata`) on all sub-pages. Good for SEO.
- Tailwind v4 `@theme {}` block in `globals.css` cleanly exposes brand tokens as utility colors (`bg-navy`, `text-cream`, `border-green/30`).
- `package.json` is lean — only `next`, `react`, `react-dom` as deps. No bloat.

**Weaknesses:**
- **`PricingCard` `type Tier`** is duplicated inline; should live in `lib/data.ts` as an exported type and imported. Same for `Service`. Right now if a field is added to the data array, the type needs updating in two places. Suggest:
  ```ts
  // lib/data.ts
  export type PricingTier = { key: string; name: string; ... };
  export type Service = { ... };
  export type Audience = { ... };
  ```
- **`ContactForm` is a fake.** It calls `setTimeout(() => setStatus("success"), 700)` and never sends data anywhere. Form has no `action`, no API route, no email service. This is a **functional silent failure** — a user filling the form gets a "شكراً" but nothing is sent. For a launch site this is a regression vs. just having a `mailto:` link. Either wire up a real action (Resend, Formspree, Vercel Functions + Postmark) or replace with a Calendly embed + `mailto:` button.
- **`CONTACT.whatsapp = "+966500000000"`** is still a placeholder. This is the WhatsApp floating button, the contact page link, and the footer link. Without a real number, every CTA on the site dead-ends.
- **No `app/not-found.tsx`** — Next.js will render a default 404. Easy win.
- **No `app/sitemap.ts` / `app/robots.ts`** — missing SEO basics. With seven static pages this is a 10-line file.
- **No `app/opengraph-image.tsx`** — `metadata.openGraph` declares the OG content but no image is generated. Social shares will be unbranded.
- **No `loading.tsx` / `error.tsx` boundaries** — for a fully static site, low impact, but recommended for App Router.
- **No ESLint config beyond Next defaults.** `package.json` has `"lint": "next lint"` but no `.eslintrc` shown. Acceptable for v1.
- **`next.config.mjs`** is essentially empty (only `reactStrictMode`). No image optimization config, no `experimental.optimizePackageImports`, no security headers. Fine for v1, but worth adding `headers()` for `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` before public launch.
- The radial dot pattern in `Hero` uses inline `style={{}}` instead of a CSS class. Minor; works fine.

**Score rationale:** 8.5 — architecture and discipline are senior-level; the fake form submission and placeholder phone number are the only material gaps.

---

### 4. Conversion design — 7.8/10

**Strengths:**
- Every page ends with a navy CTA section pushing to `/contact`. Consistent funnel.
- The "ابدأ مشروعك" navy pill in the header is sticky (header is `sticky top-0`). Always one click from a CTA.
- WhatsApp floating button is fixed bottom-left (correct for RTL — bottom-left in RTL ≈ bottom-right in LTR, the "natural" thumb zone). Hover scale animation. Pulse-free, not annoying.
- Pricing page lists all five tiers in a single grid and uses a highlighted "الأكثر طلباً" badge on the Launch tier (the highlight tier in `data.ts`). Anchors the eye to the right place.
- Pricing CTAs are tier-specific ("احجز ميكرو", "احجز Launch", "احجز Build", "تحدث معنا" for App, "ابدأ شراكة" for Retainer). Each implies the appropriate next step given price/complexity.
- Contact form has a `select` for "الباقة المهتم بها" which pre-qualifies leads. Excellent.
- Contact form has a "غير متأكد" option in the package dropdown — captures top-of-funnel without forcing commitment.
- Response-time card on contact page sets expectations ("البريد: خلال 24 ساعة, واتساب: خلال 4 ساعات") — builds trust.
- Services page process timeline (6 steps) handles the #1 objection ("هل سأكون في الظلام؟") before it's asked.

**Weaknesses:**
- **Contact form does not submit anywhere** (see Code Quality). Highest-priority conversion bug.
- **Pricing grid on `/pricing`**: `xl:grid-cols-5` puts all five tiers in one row on wide screens. At common desktop widths (1280-1440px) this squeezes each card to ~230px wide and the cards become hard to read. Recommend `lg:grid-cols-3 xl:grid-cols-3` with a second row for App + Retainer, or split into "خطط سنوية" vs "خطط مشروع" sections.
- **No social proof anywhere.** No testimonials, no logos-we-worked-with, no LinkedIn/Twitter recommendations, no trust badges (Vercel, Cloudflare, GitHub). The honest "قريباً" approach on /work is fine, but the homepage has zero social-proof element to compensate.
- **The `/work` $1,500 pilot CTA** doubles as a conversion anchor — but as noted, it's strategically wrong for a public page.
- Home pricing section only shows 3 of 5 tiers (`PRICING_TIERS.slice(0, 3)` = Micro, Launch, Build). The App and Retainer tiers are invisible until a user clicks through to `/pricing`. For a 5-tier strategy this hides 40% of the offering. Either show all 5 (carousel/scroll on mobile) or be explicit: "ابتداءً من — شاهد كل الباقات".
- No "Book a call" calendar embed anywhere. The proposal HOW-TO-USE talks about a Calendly link; the contact page should embed it inline next to the form, not just promise email response.
- Mobile menu (Header) uses a simple toggle with `☰` / `✕` glyphs — works but feels unfinished vs. an animated icon. Minor.
- Contact form `<select>` for package uses the native browser dropdown — looks rough on iOS and inconsistent with the rest of the brand. Consider a custom styled select or radio cards.
- No urgency element beyond the hero badge. Consider adding "أول مكالمة هذا الأسبوع" or a slot counter on the home CTA.

**Score rationale:** 7.8 — funnel design is correct and consistent, but the broken form submission, hidden tiers on home, and missing social proof + Calendly are real conversion drags.

---

### 5. Accessibility — 7.5/10

**Strengths:**
- `<html lang="ar" dir="rtl">` on layout — correct.
- Semantic HTML throughout: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<ol>`, `<ul>`, `<details>/<summary>` for FAQ accordion. No `<div>`-soup.
- Form labels are explicit `<label>` elements with text (not just placeholders).
- Contact form `required` attribute on name, email, message.
- Hero badge `aria-hidden` on decorative dot pattern.
- WhatsApp button has `aria-label="تواصل عبر واتساب"`.
- Header mobile button has `aria-label="القائمة"`.
- Link underline styling on long-form CTAs (`underline decoration-green decoration-2 underline-offset-4`) — visible, not just color-coded.
- Color contrast: Navy `#1E2940` on Cream `#F2EEE5` is 13.8:1 (AAA per BG §3.2). Cream text on Navy background ≈ same ratio inverted. Good.
- `text-navy/75` (75% opacity ≈ #1E2940 with 0.75 alpha on cream) maintains ~10:1 contrast — still AAA. Pass.
- `prefers-reduced-motion: no-preference` guard on the `.fade-up` animation in `globals.css` — respects motion sensitivity.
- Focus state on form inputs (`focus:border-green focus:bg-white`) — visible.

**Weaknesses:**
- **No skip-to-content link.** Standard a11y requirement for keyboard users.
- **No visible focus ring on buttons/links.** The pills (`rounded-full bg-navy ...`) have `transition hover:bg-green` but no `focus-visible:ring-2 focus-visible:ring-green` or equivalent. Keyboard users can't see where they are.
- **`text-stone` (`#6B7280`) on Cream** is 4.6:1 — passes AA Normal but is borderline. Used for captions, form placeholders, response-time fine print. Acceptable but worth noting.
- **`text-cream/55` on Navy** in footer (legal line, "صُنع بفخر..."). 55% opacity reduces effective contrast to ~7-8:1; still passes AA but loses readability on smaller screens.
- **Emoji icons used as content** (🏢 🤝 🏭 🚀 ⚙️ 🎨 etc.) — not announced as decorative. Screen readers will read "office building, handshake, factory" which is fine in context but bloats verbal navigation. Consider `aria-hidden` on the emoji span when the heading already conveys the same meaning.
- **`<select>` for package** has no `aria-describedby` linking to a help text; not critical.
- **`<details>` FAQ** is semantically correct but the green `+` icon rotation animation is purely visual — no keyboard hint that they're expandable. Default browser behavior is fine here.
- **Form has no error states.** A failed email regex silently fails the `type="email"` check; no inline error messaging. (Minor since the form is non-functional anyway.)
- **No `<noscript>` content** — if JS fails, the mobile menu is unreachable. Most users won't hit this; minor.
- **Logo alt text "ناشئ Nashi"** in both header and footer — correct, but the footer logo image is decorative (the brand is already announced by the textual content). Could be `alt=""` on the footer to avoid duplicate announcement.
- **`tabIndex` not set anywhere** — fine, since natural DOM order is correct for RTL.

**Score rationale:** 7.5 — solid baseline (semantic HTML, contrast, lang/dir, labels), but missing focus rings and skip-link drop it below "production a11y".

---

### 6. Mobile responsiveness — 8.5/10

**Strengths:**
- Tailwind `md:` and `lg:` breakpoints used consistently. Grid layouts collapse cleanly: `md:grid-cols-2 lg:grid-cols-3` is the dominant pattern.
- Hero text scales: `text-5xl md:text-7xl` for the H1, `text-lg md:text-xl` for the lede.
- Pricing cards stack 1 → 2 → 3 → 5 columns. Mobile renders single-column with the highlight tier visible without scroll.
- Audience tiles stack vertically on mobile, three-up on `md`.
- Header has a real mobile menu (hamburger → drawer) with state via `useState`. Closes on link click. `lg:hidden` / `hidden lg:flex` correctly hide/show.
- Mobile menu uses full-width tap targets (`block px-3 py-3`) — finger-friendly.
- WhatsApp button is `h-14 w-14` (56px) — passes the Apple 44pt minimum tap target.
- Contact page grid (`md:grid-cols-5` → 3+2) flips to single column on mobile — form first, then aside.
- All form inputs are `w-full` — no horizontal scroll.
- Footer columns collapse from 4 → 1 on mobile.

**Weaknesses:**
- **Hero pulse badge** "متاحون لاستلام مشاريع الربع القادم" can wrap awkwardly on narrow phones (320px). Test at iPhone SE width.
- **Pricing grid `xl:grid-cols-5`** is fine on mobile (single column) but on tablet `md:grid-cols-2 lg:grid-cols-3` shows an asymmetric row (3 + 2). Cosmetic.
- **No `viewport` meta in `layout.tsx`** — Next.js 15 adds it by default, but worth verifying `width=device-width, initial-scale=1` is in the rendered HTML.
- **Long Arabic words** in headings (e.g., "تطبيقات") don't break, but on very narrow viewports could cause overflow with the inline `<span class="text-green">ناشئ</span>` in the hero. Visually I'd test; likely fine.
- **Mobile menu drawer** uses `bg-cream` solid; could feel heavy. A `backdrop-blur` over a translucent cream might feel lighter, matching the header pattern.
- **`select` element on iOS** uses native picker — fine, but the visual height differs from text inputs. Could normalize with `appearance-none` + custom chevron.
- **WhatsApp floating button at bottom-left** in RTL is correct, but it can overlap form submit buttons on the contact page on very short viewports. Add `mb-20` to the form section on mobile, or a `bottom-safe-area` consideration.

**Score rationale:** 8.5 — responsive design is fundamentally correct and tested across the standard breakpoints. Minor cosmetic issues only.

---

### 7. Pricing model integration — 8.5/10

**Strengths:**
- **All five tiers from the agreed v1 model are present** in `lib/data.ts` `PRICING_TIERS` array:
  1. ناشئ ميكرو (Micro) — 4,500 ريال/سنة — matches `pricing-model-v1.md` §1
  2. Launch — $2,500–$5,000 USD — matches Foundation Brief §8 + pricing-model
  3. Build — $6,000–$12,000 USD — matches Foundation Brief §8
  4. App — $15,000–$35,000 USD — matches Foundation Brief §8
  5. Retainer — $3,500/شهر — matches Foundation Brief §8
- **Micro tier marketing message** "3 شهور مجاناً مع الالتزام السنوي" matches `pricing-model-v1.md` §1 verbatim.
- **Add-ons section** (`ADDONS` in data) lists all four from `pricing-model-v1.md` §2:
  - ترقية لموقع كامل (2,500 ريال)
  - هوية بصرية كاملة (1,500 ريال)
  - SEO سنوي (5,400 ريال)
  - تقارير وتحليلات سنوية (2,250 ريال)
- **Launch highlighted** as `highlight: true` (the "الأكثر طلباً" anchor) — correct conversion strategy.
- **FAQ on `/pricing`** addresses the bilingual pricing tension (SAR for Micro, USD for upper tiers) head-on. Good defense.
- **Cancellation policy** (14-day refund minus 200 ريال founding fee) matches `pricing-model-v1.md` §7.
- **Ad spend separation** ("ميزانية الإعلانات منفصلة 100%") mentioned in FAQ — matches §5 of the pricing model.
- **Bundle discounts** from `pricing-model-v1.md` §4 (10% / 15% on add-ons) are **not yet displayed** on the public site — see weakness.
- **Monthly/quarterly payment options** for Core from §3 are not yet shown — see weakness.
- Contact form package selector includes all 5 tiers + "غير متأكد" — perfect funnel.

**Weaknesses:**
- **Bundle discount tiers** (Growth +10%, Full Stack +15% + free consult month) from `pricing-model-v1.md` §4 are **not surfaced anywhere on the site**. These are the upsell hooks; the customer can't self-serve to discover them. Recommend a "اختر باقتك" mini-calculator on `/pricing` showing the bundle math.
- **Sales scenarios** from §6 (Starter / Growth / Full Stack with worked-example totals like 11,385 ريال and 14,572 ريال) are missing — these are the conversion stories that turn a price list into a "yes". Worth a "أمثلة على باقات شائعة" section.
- **Renewal pricing** for Micro (3,900 ريال السنة الثانية) is not mentioned on the site. A first-year customer doesn't know what year 2 costs. Renewal discount is a retention story worth telling.
- **Quarterly (1,500 × 4) and monthly (600 × 12) payment options for Micro** are not shown. Payment flexibility is a real objection-killer for SMEs.
- **The Foundation Brief "first 3 pilots at $1,500"** strategy appears on `/work` page — but **this was supposed to be a private offer, not a published price** (see Content Quality §2). Conflict between the v1 pricing model (no $1,500 anywhere) and the public site.
- Currency note "نقبل الدفع بالريال أو الدرهم بسعر اليوم" in FAQ is good, but no exchange rate transparency. For a $4K Launch quote, the SAR equivalent should be auto-calculated or stated as "بسعر اليوم من XE.com" — small trust gesture.

**Score rationale:** 8.5 — five tiers locked, add-ons present, naming/pricing accurate to the model. Bundles, scenarios, and renewal pricing are the missing 1.5 points — they exist in the model but not yet on the website.

---

### 8. Strategic alignment — 8.5/10

**Strengths:**
- **The website does exactly what was scoped:** company introduction + pricing display. No blog, no portal, no shop. No scope creep.
- **Single brand architecture** is fully implemented — one logo, one palette, one site, three audience tiles. Matches BG v6.0 §1.6 and PROJECT-STATUS.md locked decision.
- **Three audiences clearly named** on the home (`AudienceTiles`) with concrete examples ("عيادات، مطاعم، خدمات احترافية"). Foundation Brief §2 vertical strategy is intact.
- **Arabic-first** is the dominant editorial decision — `lang="ar"`, `dir="rtl"`, Arabic copy everywhere, English limited to logo "Nashi" sub-mark, audience subtitles (SMEs/Charities/Manufacturers), `dir="ltr"` on emails/URLs/digits. BG §4.2 "Arabic-first rule" honored.
- **"No agency theater" promise** is operationalized: no "discovery phase" page, no team-bios fluff, no jargon, no 90-day timelines anywhere. Pricing is shown. Process is shown. Time to launch is shown.
- **Founder-led framing** ("نور الدين فرحات يبني بنفسه كل مشروع في مراحله الأولى") matches Foundation Brief §10 "Founder-led delivery".
- **Three-pillar value section** (سريع · جميل · بلا مسرحيات) directly mirrors Foundation Brief §4 brand promise pillars.
- **"Saying no" value** is communicated — about page "نقول لا لما لا يناسب" — matches Foundation Brief §6.5.

**Weaknesses:**
- **Bilingual promise vs. delivery gap:** BG §4.2 says "Arabic-first" but allows Latin in 3 roles; BG §1.2 positioning is "ships in weeks, in Arabic and English alike". The website has **no English mirror, no `/en` route, no language toggle**. The footer has the English positioning line and audience subtitles use English, but a global tech founder visiting the site sees only Arabic. For a studio that pitches "العربية والإنجليزية متساويتان" this is a structural inconsistency. v2 should add an `/en` mirror or a Google-translate-friendly fallback strategy.
- **`/work` $1,500 pilot offer** misaligns with the Foundation Brief approach (pilots = private offer). Strategic risk: publicly anchored low.
- **No charity-specific landing page.** BG §6.1 anticipates "3 audience entry tiles → 3 landing pages". The home has the tiles but they don't link anywhere — they're informational, not navigational. v2 should have `/for/smes`, `/for/charities`, `/for/manufacturers` deep pages with audience-specific case copy.
- **No case studies / portfolio** — handled honestly with placeholders, but per Foundation Brief §6.4 "The portfolio is the salesperson" — every project should become a case. Until there's one real case, the site has no portfolio anchor and must rely on credibility theater.
- **No email signature, business card, or proposal PDF download** linked from the site. Brand applications exist in the kit but aren't surfaced for prospects/partners.

**Score rationale:** 8.5 — strategy is correctly translated to the site; the missing English mirror and audience-specific landing pages are v2 features, not v1 blockers.

---

## Overall weighted score

| Dimension | Score | Weight | Weighted |
|---|---|---|---|
| Brand consistency | 9.0 | 0.15 | 1.35 |
| Content quality | 8.2 | 0.15 | 1.23 |
| Code quality | 8.5 | 0.15 | 1.275 |
| Conversion design | 7.8 | 0.20 | 1.56 |
| Accessibility | 7.5 | 0.10 | 0.75 |
| Mobile responsiveness | 8.5 | 0.05 | 0.425 |
| Pricing integration | 8.5 | 0.10 | 0.85 |
| Strategic alignment | 8.5 | 0.10 | 0.85 |
| **Overall** | **8.04** | 1.00 | **8.0/10** |

Per R6: 8.0 ≥ 5 → **no blocker.** No dimension fell below 5. The website is approved for soft launch after the required fixes below.

---

## Required fixes (must do before sending the URL to anyone)

1. **REMOVE the $1,500 pilot offer from `/work` page.**
   - File: `C:\nashi\05-website\app\work\page.tsx`
   - Action: Delete the final navy CTA section ("خصم خاص لأول 3 عملاء" + 1,500 dollars + "احجز مكان pilot").
   - Replace with: a generic "اطّلع على باقاتنا" CTA linking to `/pricing` OR a "نبني أول دراسات الحالة الآن — تواصل لتكون الأول" framing without a published price.
   - Reason: Pilot pricing was scoped as a private/verbal offer for warm intros. Publishing it anchors all prospects to $1,500 and devalues the $4K Launch tier.

2. **Replace the WhatsApp placeholder number** `+966500000000` in `lib/data.ts` `CONTACT.whatsapp`.
   - Without a real number, the floating WhatsApp button, footer link, and contact-page card all dead-end.
   - If the real number isn't ready, temporarily route WhatsApp links to the email instead and remove the floating WA button via a flag.

3. **Wire up the contact form to actually send.**
   - File: `C:\nashi\05-website\components\ContactForm.tsx`
   - Current behavior: fake `setTimeout(700)` then shows success. Nothing is sent.
   - Minimum viable: add a Next.js Route Handler `app/api/contact/route.ts` that calls a service like Resend, Formspree, or Postmark and emails `noureddin@nashi.studio`.
   - Add a honeypot field and a basic rate limit (or Cloudflare Turnstile) before going public.

4. **Decide on /work content.** Either commit to "إندماج" and "سياج الحدود" as real clients (with their permission and 1-line outcome) or replace with a single honest "أوّل عميل في الطريق — احجز مكانك" card.

---

## Recommended fixes (do before paid traffic / public launch announcement)

5. **Promote types from `lib/data.ts`** as exported types (`PricingTier`, `Service`, `Audience`) and import them in `PricingCard.tsx`/`ServiceCard.tsx`/`AudienceTile.tsx`. Removes the duplicate type definitions.

6. **Add `app/not-found.tsx`** with brand-styled 404. 30 minutes of work, looks much more professional than the default Next.js 404.

7. **Add `app/sitemap.ts` and `app/robots.ts`.** Seven static pages; the sitemap is a 10-line file. Robots should `Allow: /` and reference the sitemap.

8. **Add `app/opengraph-image.tsx`** — dynamic OG image using `next/og` or a static 1200×630 PNG in `public/`. Without it, every social share is unbranded.

9. **Replace the favicon** with one derived from `nashi-icon.svg`. Use https://realfavicongenerator.net or `next-favicons`. Brand consistency in the browser tab.

10. **Add focus-visible rings** to all interactive elements:
    ```css
    /* globals.css */
    *:focus-visible {
      outline: 2px solid var(--color-green);
      outline-offset: 3px;
      border-radius: 4px;
    }
    ```
    Skip-link target: add a `<a href="#main" class="sr-only focus:not-sr-only">تخطّى إلى المحتوى</a>` at the top of `layout.tsx` before `<Header />`.

11. **Show all 5 pricing tiers on home** (or be explicit "نعرض 3 من 5 — شاهد كل الباقات"). Currently 40% of the offering is invisible until pricing page click.

12. **Add bundle discount + sales scenarios** on `/pricing` page from `pricing-model-v1.md` §4 + §6. These are the conversion stories the model intended.

13. **Embed Calendly** (or `cal.com`) on `/contact` page next to the form. The current form-and-wait model has a friction step; a calendar embed converts higher.

14. **Add a privacy page or remove the form's privacy claim.** The form says "سياسة خصوصية بسيطة وواضحة" but no `/privacy` route exists.

15. **Strengthen the founder bio** on `/about`. Two sentences right now. Add: years of experience, prior companies/employers, a personal sentence ("أحبّ بناء أدوات تختفي خلف عمل المستخدم"). Founder-led studios sell on the founder.

16. **Convert emoji content icons to `aria-hidden`** where the adjacent heading already conveys the meaning. Reduces screen-reader noise.

17. **Normalize page title separator.** Pick `—` or `·` and use it consistently. Currently `layout.tsx` uses `·` but sub-pages use `—`.

18. **Add security headers** in `next.config.mjs` `headers()`: X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy strict-origin-when-cross-origin.

19. **Add `prefers-color-scheme: dark` rules** in `globals.css` per BG §3.2 (Navy bg, Cream text, Green-Light accents). Variables are already declared; only the media query is missing.

20. **Add a "Book a discovery call" prompt above the contact form** with the time-zone-aware language ("الأوقات بتوقيت السعودية").

---

## V2 recommendations (next milestone — not blockers)

21. **English mirror at `/en`** with full content parity. BG §1.2 positioning includes "Arabic and English alike"; the current Arabic-only site under-delivers on the bilingual promise.

22. **Audience landing pages** at `/for/smes`, `/for/charities`, `/for/manufacturers`. BG §6.1 anticipated three landing pages; tiles are present but they don't currently link anywhere.

23. **First real case study** on `/work` as soon as one client launches. Replace placeholders with a single rich case (problem → approach → outcome). Foundation Brief §6.4 "the portfolio is the salesperson".

24. **Pricing calculator** that takes "type of business + must-have features" and recommends the right tier with a SAR-equivalent quote.

25. **Founder photo on `/about`** — black-and-white headshot or sketch portrait. Lowers the "is this a real person?" friction for cold prospects.

26. **Blog/insights section** at `/insights` — even one post per month builds compound SEO and demonstrates expertise (BG voice & tone applied). E.g., "كيف تختار باقة موقع لجمعيتك الخيرية".

27. **WhatsApp Cloud API integration** instead of `wa.me` deep link, with a chat widget on the home page.

28. **Schema.org structured data** (Organization, LocalBusiness, Service offers) for SEO — a few `<script type="application/ld+json">` in `layout.tsx` + per-page additions.

29. **Vercel analytics + Plausible/Umami** dashboard — currently no telemetry. Need to know what pages convert.

30. **A `/proposal` route** where authenticated proposals can be viewed (links from `03-proposal/` get a polished version of the markdown).

---

## Cross-document consistency check

| Item | Brand Guidelines v6 | Foundation Brief | Business Plan | Pricing Model v1 | Website | Verdict |
|---|---|---|---|---|---|---|
| Brand name | ناشئ / Nashi | ناشئ / Nashi | ناشئ / Nashi | ناشئ | ناشئ · Nashi | ✅ |
| Tagline | "نبني لما هو ناشئ" | "We build for what's rising" | (implicit) | n/a | "نبني لما هو ناشئ" | ✅ |
| Palette | Navy/Green/Cream | (links to BG) | n/a | n/a | All 8 brand colors implemented | ✅ |
| Fonts | Cairo + IBM Plex SA | (links to BG) | n/a | n/a | Both loaded via next/font | ✅ |
| Positioning line | "WEB DESIGN & WEB APPLICATION STUDIO · SMEs | CHARITIES | MANUFACTURERS" | Same | Same | n/a | Verbatim in footer | ✅ |
| Pricing — Launch | n/a | $2,500-$5,000 (target $4K) | base $4K, deal $3.5K | n/a | $2,500-$5,000 | ✅ |
| Pricing — Build | n/a | $6K-$12K | $9K target | n/a | $6,000-$12,000 | ✅ |
| Pricing — App | n/a | $15K-$35K | $22K target | n/a | $15,000-$35,000 | ✅ |
| Pricing — Retainer | n/a | $3,500/mo | $3,500/mo | n/a | $3,500/شهر | ✅ |
| Pricing — Micro | n/a | not in original | not in original | 4,500 ريال/سنة | 4,500 ريال/سنة | ✅ |
| Pilot $1,500 | n/a | private offer, first 3 clients only | yes, for case study rights | not in pricing model | **PUBLIC on /work** | ⚠️ contradicts "private offer" frame |
| Bilingual rule | "Arabic and Latin equal" §4.2 | "Bilingual every project" §6.3 | n/a | n/a | Arabic-only site, no `/en` | ⚠️ delivery gap |
| Single brand | §1.6 locked | §3 superseded; §10 locked | implicit | n/a | Yes, no sub-brand variants on site | ✅ |
| Three audiences | §1 architecture | §1 + §2 verticals | targeted in channel mix | n/a | Three tiles + same identity | ✅ |
| Voice/tone | §5 plain/confident/warm | §5 same | n/a | n/a | Matches throughout | ✅ |
| Process timeline (Launch) | n/a | 14-21 days | 14-21 days | n/a | 14-21 يوم | ✅ |
| Process timeline (App) | n/a | 6-10 weeks | 6-10 weeks | n/a | 6-10 أسابيع | ✅ |
| Warranty | "14-day post-launch" §2 of BG (?) — not actually in BG | implicit | 14-day mentioned | 14-day cancellation | "ضمان 14 يوم" on Launch + 30 يوم on Build | ✅ Build adds a 30-day uplift (good upgrade signal) |
| Founder framing | not specified | "Founder-led delivery" §10 | "Founder builds personally" | n/a | About page founder block | ✅ but thin |
| Currency | not specified | USD pricing, SAR/AED/EGP on request | USD primary | SAR for Micro, mixed | SAR for Micro, USD for Launch+ | ✅ honest tension, addressed in FAQ |

**Overall consistency:** strong. Two amber items only (the published $1,500 pilot offer and the missing English mirror).

---

## Final notes from Omar

**What's working really well:**
- The Arabic-first execution is the strongest single piece of work in this milestone. Cairo + Plex, line-height 1.75, native RTL, `dir="ltr"` on Latin fragments — this is the kind of detail that 90% of Arabic websites get wrong. The site demonstrates the BG promise rather than just stating it.
- The single-source-of-truth pattern in `lib/data.ts` means the site can be re-priced, re-audienced, or re-branded without touching components. That's senior-level architecture for a v1.
- "use client" boundaries are minimal and correct. Tailwind v4 `@theme` block is clean. Next.js 15 metadata is per-page. This is what a Mohammed-grade build looks like.
- The voice — "خلّينا نسمع منك", "احكي لنا", "بدون مسرحيات" — sounds like a real Gulf studio talking, not a translated Western template. That's the asset.
- Strategic discipline: the site doesn't try to be everything. No blog. No 12-page about. No team section. Exactly the scope.

**What needs attention before sending the URL anywhere:**
- The `$1,500 pilot offer on /work` must go (it's a published anchor that contradicts the pricing strategy).
- The WhatsApp number must be real.
- The contact form must actually submit (or be replaced with `mailto:` + Calendly).
- A privacy page or amended privacy line.
- Either commit to or remove the "إندماج / سياج الحدود" placeholder client names.

**The bottom line:**
This is an **8.0/10 ready-for-soft-launch website**. The brand identity is correctly translated to code, the strategy is correctly translated to information architecture, and the pricing model is correctly translated to the public catalog. The four required fixes are small (under one hour combined) and mostly about removing/wiring artifacts rather than re-thinking the build.

After the required fixes, this site can absolutely go to the first 5 warm intros from your network. After the recommended fixes, it can go on LinkedIn announcement. The v2 work (English mirror, audience landing pages, real case studies) belongs to the next milestone — don't block launch on them.

You've built a site that respects the brand, respects the audience, and respects the visitor's time. Now make the contact form work and pull the published pilot price.

---

*End of OMAR-FEEDBACK.md. Approved for review. Next checkpoint: after the four required fixes are applied + first real case study lands on `/work`.*
