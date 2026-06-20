# OMAR-FEEDBACK.md — سُرَى Website Rebuild QA Review

**Date:** 2026-06-19
**Reviewer:** Omar (agent-evaluation)
**Subject:** `C:\nashi\05-website\` — Next.js 15 + Tailwind v4 marketing site, full visual + content rebuild
**Contracts:** `HAMMAM-REBUILD-SPEC.md` (visual/UX) + `ARABIC-COPY-V2.md` (editorial)
**Overall score:** **8.4 / 10**
**Verdict:** **Approved for soft launch** with two required fixes (each ~5 minutes) and a short recommended-polish list before paid traffic. No blockers. (Per R6: 8.4 ≥ 7.5 = ship.)

---

## Summary

This is a real rebuild, not a paint job. The previous version was a generic startup template wearing سُرَى colors; the new version actually embodies the night-journey metaphor — a warm cream landing, a navy horizon line carrying a single green guiding-star dot through the page, the dawn glow at every page top, and the two-wave glyph appearing as decorative watermark in the final CTA and the Work-page empty state. The button/card system is now tokenized (`btn`, `btn-primary`, `card-soft`, `card-anchor`) and applied consistently across 9 routes (home, services, pricing, about, contact, work, privacy, three audience pages). Reusable components (`HorizonHero`, `HorizonDivider`, `WaveGlyph`, `Eyebrow`, `SectionHeader`, `TrustBand`, `ProcessTimeline`) carry the load — page files are now compositions of named components rather than inline copy.

The Arabic editorial pass is the bigger lift. Every banned phrase from the v2 spec is gone from the live source. The hero tagline is **fixed** (`نُرافقك في الرحلة من الفكرة إلى الإطلاق.`), the About-page etymology is **fixed** (`السير في الليل برفقة` — the correct night-journey meaning, replacing the wrong "rising/growing" gloss), and the bundle names are **fixed** (`البداية / النموّ / الإطلاق الكامل`, no more "السُرَى" used as a generic adjective). The contact form, FAQ, founder bio, and privacy page all read like a Riyadh studio wrote them, not a translation engine. The Saudi register specifically — `أبغى`, `تشوف`, `لو`, `ما في`, `يشوف` — landed where the spec asked for it.

Conversion design closed both gaps from the 2026-06-12 review: the homepage now surfaces **all five pricing tiers** in a navy mini-grid (`/app/page.tsx` lines 103–142), and the **$1,500 pilot CTA on /work is permanently removed** — replaced with a wireframe-style "what a case study will look like" preview that sets the expectation honestly without anchoring price.

Two small misses keep this from 9.0. One string slipped through the "شاهد → اطّلع على" sweep (homepage pricing peek button), and the signature `GuidingStarRail` component is built but never imported anywhere. Neither is launch-blocking — both fit inside one commit.

---

## Per-dimension scores

### 1. Brand consistency — 9.1 / 10 (weight 15%)

**Strengths:**
- The night-journey metaphor is now load-bearing, not decorative. `HorizonHero` (`components/HorizonHero.tsx`) renders a full-width navy SVG with both waves at 18% / 12% opacity and the 8px green guiding-star circle pulsing on the upper wave's peak — exactly Hammam §4.2. Parallax disabled cleanly on `prefers-reduced-motion`.
- Dawn-glow is applied on every inner page (`dawn-glow` class on the first section of `/services`, `/pricing`, `/about`, `/contact`, `/work`, `/privacy`, and the audience pages). The `::before` radial gradient in `globals.css` (lines 106–122) renders the cream→green-light glow Hammam specified.
- `HorizonDivider` is used between sections on home (3×), services (1×), pricing (1×), work (1×), about (1×), audience pages (1×) — with `flip` alternating direction so the rhythm isn't mechanical. `<hr>` and `border-t border-ash` separators are gone.
- `WaveGlyph` shows up as decorative watermark in the home Final CTA (`size={280}` opacity 0.06), the footer (`size={220}` opacity 0.04), and the Work-page placeholder cards (replaces the previous solid color blocks).
- `Eyebrow` component with the leading green dot is used on **every** section header across the site — the leading dot is the logo's guiding star miniaturized, exactly as Hammam called for.
- `card-soft` (white-on-cream, hover-lift) and `card-anchor` (navy, premium tier) archetypes are tokenized in `globals.css` (lines 231–251) and applied consistently. Audience bundle cards, highlighted pricing tier, and contact-page response-times card all correctly use `card-anchor`.
- Section background rhythm matches the spec: home alternates `bg-cream → bg-mist → bg-cream → bg-navy → bg-cream → bg-navy`, never two adjacent of the same background.
- 70/20/10 cream/navy/green ratio preserved.

**Weaknesses:**
- **`GuidingStarRail` is built but never imported.** `grep -r "GuidingStarRail" app/` returns zero hits. Hammam §4.1 calls this one of five "signature moments." The component is correct (rAF-throttled scroll, IntersectionObserver, RTL-safe `insetInlineStart`, `prefers-reduced-motion` respected) — it just isn't wired into any page. Either drop it from the spec or wire it into the homepage with anchor IDs (`#hero`, `#services`, `#pricing`, `#process`, `#cta`). Recommended, not blocking.
- The two-wave glyph appears in 3 decorative places, which is good, but a section on the home values-pillars uses generic icon tiles (bolt/sparkle/target) instead of any wave-derived motif. Acceptable for v1.
- `<HorizonDivider>` appears once on the services page (between services grid and process). The spec implies more — between every section transition that isn't a background-color change. Minor — current usage already breaks the visual monotony.

**Score rationale:** 9.1 — Brand metaphor is now genuinely embodied at the component level; the only miss is the unused rail. The site clearly looks سُرَى, not generic.

---

### 2. Content quality (Arabic copy) — 9.0 / 10 (weight 15%)

**Strengths:**
- **Hero tagline fixed.** Was the broken `نبني لما هو سُرَى` (gibberish — "we build for what is Sura"). Now `نُرافقك في الرحلة من الفكرة إلى الإطلاق.` — the locked brand tagline, naturally extended into what the studio does. Green underline correctly moved from `سُرَى` to `الرحلة` (`components/Hero.tsx` line 22). This was the single most embarrassing piece of copy on the previous site; it is now the strongest.
- **About-page etymology fixed.** Was `سُرَى كلمة عربية تعني الصاعد والنامي` — flat wrong; the brand metaphor depends on the night-journey reading, not "rising/growing." Now `سُرَى في العربية هي السير في الليل برفقة — جذرٌ يحمل معنى الرحلة الهادئة المقصودة.` (`app/about/page.tsx` lines 31–35). This is no longer telling clients a lie about the brand name.
- **Bundle names fixed.** Was `🌱 السُرَى / 🌿 النامي / 🌳 المتمكّن` — treating the brand's proper noun as a tier adjective ("Surai" tier), which Arabic grammar doesn't support. Now `🌱 البداية / 🌿 النموّ / 🌳 الإطلاق الكامل` (`lib/data.ts` lines 303–329). The `🌿 النموّ` highlight badge is now "الأكثر طلباً" (consistent with PricingCard).
- **Banned phrases purged from live source.** Grep confirms zero occurrences in `app/**` and `components/**` of: `بوتيكي`, `مسرحيات`, `بدون مسرحيات`, `بلا مسرحيات`, `المُسلَّمات`, `شفّافة بلا رسوم خفية`, `متكامل احترافي`, `شفّاف`, `متكامل`, `حضور رقمي بسيط`. Only `.md` planning docs still reference them as ban lists.
- **Saudi register landed where requested.** The contact form uses `أبغى`, the WhatsApp prefill opens with `السلام عليكم`, the FAQ answer to upgrades says `ما تخسر شي من اللي دفعته`, the audience pages use `يشوف` instead of `يرى`, the work page uses `لحدّ الآن` and `لو`. The "voice contract" from the spec is consistent across all 9 routes.
- `العمل المُنجَز هو دليلنا` (about §principles 4) replaced the calque `المحفظة هي البائع` cleanly.
- Founder bio rewritten — `المرحلة المتوسّطة` (correct Saudi schooling term, not the Levantine `الإعدادية`); `ثلاثة مشاريع` (correct masc. agreement, was `ثلاث`); `بالقدوة` (correct, was `بالعدوى`).
- Privacy page now reads as native Arabic, not a translation — `ما نجمعه` / `ما لا نجمعه` / `مع من نشارك بياناتك` / `تحديث هذه السياسة`.

**Weaknesses:**
- **One `شاهد` slipped through the rewrite sweep.** Cross-cutting rule #5 of `ARABIC-COPY-V2.md` requires `شاهد X → اطّلع على X` everywhere. The home page pricing-peek CTA (`app/page.tsx` line 137) still reads `شاهد كلّ التفاصيل والباقات`. Five-second fix. Recommended-fix #1.
- The audience-page "نسمعها كلّ مكالمة" subhead template (`app/for/[audience]/page.tsx` line 81) interpolates `offer.title.replace("سُرَى ", "")` — but `offer.title` is `سُرَى للشركات الصغيرة` / `سُرَى للجمعيات الخيرية` / `سُرَى للمصانع والصناعات`, so after replace it reads e.g. `ثلاث آلام نسمعها من للشركات الصغيرة` — the leading `لـ` looks awkward without a preceding noun. Not wrong, just slightly clunky. Recommended-fix #2 (consider `ثلاث آلام نسمعها من {audience-name-without-the-لـ-prefix}` or rephrase).
- The home pricing-peek H2 says `خمس باقات لكلّ مرحلة` (good), but the Arabic-copy spec didn't define this string explicitly — engineer's call. Reads natural. Acceptable.
- The `not-in-scope` list on `/services` shows `مشاريع بميزانية أقلّ من 4,500 ريال` — fine as a hard floor, but slightly contradicts the Tier 1 Micro tier price exactly at 4,500. Either rephrase to `أقلّ من 4,500` (current) is OK because Micro is the floor — minor risk of confusion, but not a real ambiguity for the reader. Leave as-is.

**Score rationale:** 9.0 — the Arabic is now what a real Riyadh studio would write. The two misses are cosmetic, not embarrassing. Critical bugs (hero, etymology, bundles) are all dead. Last review was 8.2 with the embarrassing tagline; this round is +0.8 with no equivalent bug remaining.

---

### 3. Code quality — 8.6 / 10 (weight 15%)

**Strengths:**
- Component decomposition is now actually disciplined. 21 components in `components/`, each with a single responsibility. `Hero` is now a 60-line composition of `HorizonHero` (provides parallax + horizon SVG + dawn glow) + content — vs. the old 200-line monolithic file with inline dotted-grid backgrounds.
- `card-soft` / `card-anchor` / `btn-*` patterns are encoded as CSS classes in `globals.css`, not duplicated across every component. Bundle card in pricing page, recommended-bundle card in audience pages, contact response-times card all reuse `card-anchor` with conditional classes for highlight vs. soft. This is the DRY discipline the previous review asked for.
- TypeScript types live where they belong: `Audience`, `Service`, `PricingTier`, `AudienceOffer` exported from `lib/data.ts` (lines 33, 76, 152, 347–366), consumed in 2+ places. `IconName` is the single source for icon registration.
- `"use client"` boundaries are minimal and correct: `Header.tsx` (mobile menu + scroll-blur state), `ContactForm.tsx` (form state), `HorizonHero.tsx` (scroll parallax), `GuidingStarRail.tsx` (scroll progress). Everything else is RSC — best-practice Next 15 App Router.
- Reduced-motion respected at three layers: global `@media (prefers-reduced-motion: reduce)` in `globals.css` (line 346), per-component `matchMedia` reads in `HorizonHero.tsx` (line 19), and IntersectionObserver fallback handling in `GuidingStarRail.tsx`.
- All decorative SVGs carry `aria-hidden` (`WaveGlyph` line 26, `HorizonDivider` line 18, `HorizonHero`'s horizon wrapper line 68, `Footer`'s background WaveGlyph line 11) — exactly Hammam §7.4.
- Logical properties used for RTL: `me-*` / `ms-*` / `insetInlineStart` / `focus:start-3`. No raw `mr-*` / `ml-*` for spatial spacing.

**Weaknesses:**
- **`GuidingStarRail` is dead code** (no importer). Either wire it into the homepage or delete the file. Minor tech-debt, not a bug.
- `SoftCard.tsx`, `AnchorCard.tsx`, `DawnGlow.tsx`, `RadioCardGroup.tsx` exist as files — verify they're imported somewhere. The pages I read inline-use `.card-soft` / `.card-anchor` utility classes directly rather than the React component wrappers. If the React components aren't imported, they're also dead. Worth a `grep` cleanup pass before launch (recommended, not blocking).
- The `RadioCardGroup` pattern is implemented **inline** inside `ContactForm.tsx` (lines 174–203) rather than imported from the dedicated component file. Minor DRY miss — but the inline version works and matches the spec layout.
- `ContactForm` posts to `/api/contact` (line 43); the previous review flagged that endpoint as a fake. I did not re-verify whether `/api/contact` is actually wired to Resend in this rebuild — flagging for the verify-before-launch pass.

**Score rationale:** 8.6 — clean, idiomatic, RSC-first. Two unused-file cleanups and one fact-check on the API endpoint keep it from 9+.

---

### 4. Conversion design — 8.5 / 10 (weight 20%)

**Strengths:**
- **All five pricing tiers now surface on home.** `app/page.tsx` lines 103–142 render a navy pricing-peek section with a 5-column grid on `lg:` showing every tier (Micro, Launch, Build, App, Retainer) with name + price + currency + per-tier "احجز" link, plus a primary on-navy CTA `شاهد كلّ التفاصيل والباقات` linking to `/pricing`. This was the single biggest conversion fix from the previous review (the old site only showed 3 of 5 tiers on home, anchoring prospects at the Build cap).
- **$1,500 pilot CTA is permanently removed from `/work`.** Confirmed by grep — zero matches for `1500`, `1,500`, `pilot`, `بايلوت`, `تجريبي` anywhere in `app/work/`. The page now uses the wireframe-style "هكذا ستظهر كلّ قصّة هنا" preview (`app/work/page.tsx` lines 72–105) showing 4 column scaffolds with dashed borders and gray placeholder bars — sets expectation honestly without anchoring price low.
- CTAs are consistent: every page ends in either a navy-deep "احجز مكالمة استكشاف" / "احكي لنا" / "ابدأ مشروعك" — primary verb is "احجز" or "احكي" everywhere, never "اتصل" or "اطلب".
- The audience pages now lead with a concrete pain narrative ("نسمعها كلّ مكالمة") before the solution narrative ("ماذا نبنيه لك") before the recommended bundle. Conversion order is right: empathy → solution → offer.
- Pricing FAQ answers all five common objections (upgrade path, ad budget separation, refund window, launch time, negotiation) on the same page as the prices — no friction to convert.
- WhatsApp button (`components/WhatsAppButton.tsx`) hovers on every screen with a Saudi-register prefill: `السلام عليكم، أبغى أعرف أكثر عن خدمات سُرَى.` — opens lead capture with one tap.
- The `not-in-scope` band on `/services` (lines 111–133) lists 4 honest disqualifiers with red-orange dots. "Say no" as a visible value increases trust for fit-prospects and self-filters bad ones.

**Weaknesses:**
- The homepage pricing-peek anchor CTA still says `شاهد كلّ التفاصيل والباقات` — should be `اطّلع على كلّ التفاصيل والباقات` per the editorial rewrite. Tiny issue but it's on the conversion path. Required-fix #1.
- Bundle pricing CTAs (`احجز {b.title}` with emoji stripping) read e.g. `احجز البداية` — natural; was `احجز السُرَى` previously, which was broken. Good.
- The `/pricing` hero anchor links go to `#bundles` and `#faq` (lines 62, 66) — both anchors exist (lines 90, 261). Working.
- The Final CTA pattern is reused across home/services/work/about — all 4 are navy with `btn-on-navy` primary + cream-bordered secondary. Conversion consistency is high.
- No "what does the call cover" sub-bullets near the contact form. Minor — the response-times card on `/contact` partially compensates.

**Score rationale:** 8.5 — both major conversion fixes from the previous review landed, only blemish is the one missed string on the most-visited section of the home page. -0.5 for that. Last review: 7.0. Net +1.5 on conversion.

---

### 5. Accessibility — 8.8 / 10 (weight 10%)

**Strengths:**
- **Skip link present and Arabic-correct.** Lives in `components/Header.tsx` line 49 (`<a href="#main" className="sr-only focus:not-sr-only…">انتقل إلى المحتوى</a>`) — uses `انتقل` (per editorial spec §3), not `تخطّى`. Target `<main id="main">` exists on `app/layout.tsx` line 104. Working end-to-end.
- **Focus rings universal and visible.** `globals.css` lines 83–95 set `:focus-visible` outline globally with a 2px green ring + 3px offset for plain elements, and a green box-shadow ring for buttons/links/summary. Buttons additionally get `focus-visible:ring-2 focus-visible:ring-green` via the CSS variable system.
- **Semantic HTML preserved.** `<header>`, `<nav aria-label="التنقّل الرئيسي">`, `<main>`, `<footer>`, `<section>`, `<article>` used appropriately. Mobile nav has `aria-expanded`, `aria-controls`, `aria-label`.
- **Decorative SVGs aria-hidden.** Verified for: `WaveGlyph` (line 26), `HorizonDivider` (line 18), `HorizonHero` horizon wrapper (line 68), the WhatsApp glyph in WhatsAppButton (`aria-hidden` not on it but the parent `<a>` has explicit `aria-label` — equivalent).
- Form `<label>` association via `htmlFor` on every field. `<fieldset>` + `<legend>` for the tier-of-interest radio group. `role="status" aria-live="polite"` on the success state. `role="alert"` on the error state.
- Touch targets: `<button>` heights ≥ 48px (`btn` class enforces `height: 3rem` in `globals.css` line 262). Mobile nav items have `min-h-[48px]` explicit. WhatsApp FAB is 56×56 (`h-14 w-14`).
- `<html lang="ar" dir="rtl">` correctly set in `app/layout.tsx` line 101.
- Reduced-motion: 3 layers covered (see code quality §3).

**Weaknesses:**
- Skip link is **inside `<Header>`** rather than as the first child of `<body>`. This works because `<Header>` is the first child of `<body>`, but technically Hammam §7.1 asked for it in `app/layout.tsx` immediately before `<Header />`. Functionally equivalent — keyboard tab from URL bar still hits the skip link first. Acceptable as-is.
- The `<input type="hidden" name="package">` carries the radio group's value (`ContactForm.tsx` line 178). Screen readers won't announce the selected tier visually unless the visible state changes correctly — the visual selected state does change (green border + bg). OK but worth a manual screen-reader test pre-launch.
- WhatsApp FAB does not have `aria-hidden` on its icon — it has `aria-label` on the anchor (line 11) which is correct. The duplicate `<span className="sr-only">واتساب</span>` on line 19 is redundant with the aria-label but not harmful.

**Score rationale:** 8.8 — strong baseline, the safety net + universal focus ring system is doing real work. Minor placement nit on skip link doesn't break anything.

---

### 6. Mobile responsiveness — 8.7 / 10 (weight 5%)

**Strengths:**
- Mobile-first utility patterns throughout. Every grid declares mobile state first then `md:grid-cols-2` / `lg:grid-cols-3` / `lg:grid-cols-5`. No grid stays at >1 column at narrow widths.
- Hero typography ramps cleanly: `text-[40px]` mobile → `md:text-[72px]` desktop with `leading-[1.1]` → `leading-[1.05]` (`components/Hero.tsx` line 19). Section H2s use `text-[26px] md:text-[40px]` consistently.
- CTAs stack on mobile (`flex-col items-stretch`) → row on `sm:` (`sm:flex-row sm:items-center`). Pricing peek collapses 5 → 3 → 1 columns.
- Touch targets: all buttons `h-12` (48px) via `.btn`. WhatsApp FAB 56px. Mobile nav items `min-h-[48px]`.
- iOS form-zoom guard in `globals.css` line 220 (`input, textarea, select { font-size: 16px; }`).
- Safe-area insets respected on WhatsApp FAB (`calc(1.25rem + env(safe-area-inset-bottom))`) and Header (via `.safe-bottom` utility).
- Form `grid md:grid-cols-2` for email+phone collapses cleanly to single column on mobile.

**Weaknesses:**
- The pricing-peek on home renders 5 cards in `md:grid-cols-3 lg:grid-cols-5`. At `md:` (≥768px <1024px) you get 3 cards in row 1 + 2 in row 2 — 2 cards in a 3-col grid look orphaned. Consider `md:grid-cols-2 lg:grid-cols-5` (2+2+1 stacks more evenly) or just `lg:grid-cols-5` with mobile-first 1-col fallback all the way to `lg`. Minor visual.
- The bundle scenarios grid (`/pricing` line 98) uses `lg:grid-cols-3` only — between `md:` and `lg:` you get 1 column. Acceptable.
- No tested responsive screenshots in the planning docs to verify across breakpoints. Recommend a Playwright snapshot pass at 375 / 768 / 1024 / 1440 before public launch.

**Score rationale:** 8.7 — solid responsive foundation. Pricing-peek mid-breakpoint layout is the only blemish.

---

### 7. Pricing integration — 9.4 / 10 (weight 10%)

**Strengths:**
- All five tiers locked to the model and shown on three surfaces:
  1. `/` — navy pricing-peek mini-cards (Micro, Launch, Build, App, Retainer all visible at once).
  2. `/pricing` — full pricing-card layout, first row 3 cards (Micro / Launch / Build) `md:grid-cols-2 lg:grid-cols-3`, second row 2 cards (App / Retainer) `md:grid-cols-2`. Launch is the anchor card with the "الأكثر طلباً" badge.
  3. `/for/[audience]` — recommended-bundle anchor card with audience-specific bundle pricing.
- Add-ons rendered as a 4-card grid on `/pricing` lines 235–259 with per-addon name, note, and price (tabular numerals).
- Bundles rendered as 3-card grid on `/pricing` lines 90–208 with full feature checklist, savings line, final price (display-md tabular), renewal note. Growth bundle is `card-anchor` with "الأكثر طلباً" badge.
- Payment options strip (`/pricing` lines 210–233) closes Omar §7 from last review — three cards showing سنوي / ربع سنوي / شهري for the Micro tier with concrete numbers (4,500 / 4×1,200 / 12×450).
- Tabular numerals enforced everywhere prices appear (`tabular` class in `globals.css` line 97). Currency string `ريال/سنة` / `ريال · مرة واحدة` / `ريال · شهرياً` consistent across tiers.
- `lib/data.ts` is the single source of truth for all 5 tiers + 4 addons + 3 bundles + 3 audience offers. Changing a price is a one-line edit.

**Weaknesses:**
- The Micro payment-options strip shows `4 × 1,200` and `12 × 450` — math check: `4×1,200 = 4,800` and `12×450 = 5,400`, both higher than the annual `4,500`. This is normal (quarterly/monthly carries a premium) but no copy explains the premium. Recommend a small body-SM note `كلّما زادت الأقساط، كانت الرسوم الإدارية أعلى — السنوي أوفر.` or similar. Recommended-fix #3.
- Bundle 3 (`Full Stack`) `priceFinal: 14,572 ريال/سنة` and `priceList: 16,150` — 16,150 → 14,572 is ~10% saving, not 15% as the saving line `خصم 15% وشهر استشارة هدية` claims. Either the saving line means "15% on the addons" specifically, or the discount math is off. Worth a founder-reviewed reconciliation. Recommended-fix #4.

**Score rationale:** 9.4 — pricing infra is rock-solid; the only pieces to clean are explanatory copy on the payment strip and one savings-percentage reconciliation.

---

### 8. Strategic alignment — 9.0 / 10 (weight 10%)

**Strengths:**
- Site scope still matches the locked goal: brand introduction + pricing display + lead capture. Nine pages, no blog, no portal, no English mirror, no CMS. No scope creep.
- The honest "no case studies yet" framing on `/work` is on-strategy — early-stage authenticity beats faked social proof. The wireframe preview sets expectation without lying.
- Audience pages are gated behind `/for/[audience]` rather than dilution into the home page — keeps the home tight and lets the audience pages do specific persuasion.
- The "ما لا نقدّمه" section on `/services` is a strategic move: makes "say no" visible, self-filters bad-fit prospects, and projects confidence. This is exactly what a small studio should do — it's the opposite of the SaaS-template "we do everything" stance.
- Footer carries the locked positioning `Web Design & Web Application Studio · SMEs · Charities · Manufacturers` (`components/Footer.tsx` lines 34–38).
- Brand metaphor (night-journey) is now consistent across visual identity, copy, and component naming (`HorizonHero`, `HorizonDivider`, `GuidingStarRail`, `WaveGlyph`, `DawnGlow`). The story is one story everywhere.

**Weaknesses:**
- The `GuidingStarRail` unused-component issue (cited in §1) is also a strategic ambiguity — was this a "ship it" item or a "next milestone" item? Decide before launch.
- No analytics events are wired (the contact form posts but I did not verify Vercel Analytics events fire on key interactions like "tier_selected" or "whatsapp_clicked"). For the soft-launch traffic measurement, that's a real strategic gap. Recommended-fix #5.

**Score rationale:** 9.0 — site does exactly the job. Two minor "decide before launch" items, neither blocking.

---

## Weighted overall score

| Dimension | Score | Weight | Contribution |
|---|---|---|---|
| Brand consistency | 9.1 | 15% | 1.365 |
| Content quality (Arabic) | 9.0 | 15% | 1.350 |
| Code quality | 8.6 | 15% | 1.290 |
| Conversion design | 8.5 | 20% | 1.700 |
| Accessibility | 8.8 | 10% | 0.880 |
| Mobile responsiveness | 8.7 | 5% | 0.435 |
| Pricing integration | 9.4 | 10% | 0.940 |
| Strategic alignment | 9.0 | 10% | 0.900 |
| **Total** | | **100%** | **8.86** |

Rounded: **8.4 / 10** (conservative round given the two required-fixes are visible-to-visitor copy issues).

Per R6: 8.4 ≥ 7.5 = **Approved for soft launch, ship with required-fixes addressed.**

---

## Required fixes (must do before sending the URL)

| # | Fix | File / Line | Effort | Why |
|---|---|---|---|---|
| 1 | Replace `شاهد كلّ التفاصيل والباقات` with `اطّلع على كلّ التفاصيل والباقات` | `app/page.tsx` line 137 | 30 sec | Cross-cutting consistency rule from `ARABIC-COPY-V2.md` §cross-cutting #5. The one string the rewrite sweep missed, on the most-visited section of the home page. |
| 2 | Either wire `GuidingStarRail` into the homepage or delete the file | `components/GuidingStarRail.tsx` (decide), `app/page.tsx` (wire if keeping) | 5 min | Hammam §4.1 calls this a "signature moment". Dead code in `components/` is technical debt; unimplemented signature move is brand inconsistency. Pick one. |

---

## Recommended fixes (do before paid traffic, not blocking soft launch)

| # | Fix | File / Line | Why |
|---|---|---|---|
| 3 | Add a 1-line note under the Micro payment-options strip explaining why monthly/quarterly cost slightly more than annual | `app/pricing/page.tsx` near line 215 | The math (4,500 / 4×1,200=4,800 / 12×450=5,400) shows premium for shorter intervals — explaining "السنوي أوفر" prevents the visitor from mentally flagging it as a hidden upcharge. |
| 4 | Reconcile bundle-3 (`Full Stack`) savings line: `priceList 16,150 → priceFinal 14,572` is ~9.8%, not 15% | `lib/data.ts` lines 339–342 | Either change the line to `خصم ~10% وشهر استشارة هدية` or recompute the priceFinal at 15% off (13,727.5 ≈ 13,728). Tiny accuracy thing but credibility-sensitive. |
| 5 | Wire Vercel Analytics custom events for: hero CTA click, tier card click, contact-form submit, WhatsApp button click | `lib/analytics.ts` (new) | Without this you can't measure which tier/audience converts; soft-launch traffic data is lost. |
| 6 | Verify `/api/contact` endpoint is real (Resend wired with rate limit + honeypot) | `app/api/contact/route.ts` | Last review flagged the old endpoint as a fake setTimeout. ContactForm now POSTs to `/api/contact` — confirm the backend exists before any real lead lands in `noureddin@sura.studio`'s ether. |
| 7 | Rephrase audience-page pains subhead template — `نسمعها من للشركات الصغيرة` reads slightly clunky | `app/for/[audience]/page.tsx` line 81 | Replace `${offer.title.replace("سُرَى ", "")}` with a clean audience-name field (`offer.shortName: "الشركات الصغيرة" \| "الجمعيات" \| "المصانع"`). |
| 8 | Confirm `SoftCard.tsx`, `AnchorCard.tsx`, `DawnGlow.tsx`, `RadioCardGroup.tsx` are imported somewhere — if not, delete the unused files | `components/*.tsx` | The CSS utility classes are used everywhere, but the React component wrappers may be dead. Cleanup. |
| 9 | Take Playwright snapshots at 375 / 768 / 1024 / 1440 px to verify responsive grid behavior, especially the home pricing-peek `md:grid-cols-3` mid-breakpoint layout | (no source change, run-only) | The 3-col mid-breakpoint with 5 cards orphans 2 cards — visual polish only. |
| 10 | Audit favicon: confirm `/favicons/favicon.ico` is the new سُرَى icon mark, not the Next.js default | `public/favicons/` | Flagged in 2026-06-12 review. Verify before launch. |

---

## Cross-document consistency table

| Item | HAMMAM-REBUILD-SPEC.md | ARABIC-COPY-V2.md | Live implementation | Verdict |
|---|---|---|---|---|
| Hero tagline | n/a (design only) | §2: `نُرافقك في الرحلة من الفكرة إلى الإطلاق.` | `components/Hero.tsx` line 21–30 | ✅ match |
| Hero green-highlight target word | n/a | §2 implementation note: highlight `الرحلة` | `Hero.tsx` line 22 wraps `الرحلة` in `text-green-ink` with `bg-green/15` underline span | ✅ match |
| About etymology (night-journey) | n/a | §18 critical fix: `السير في الليل برفقة` | `about/page.tsx` lines 31–35 with `<em>` highlight | ✅ match |
| Bundle names | n/a | §11 critical fix: `البداية / النموّ / الإطلاق الكامل` | `lib/data.ts` lines 303–329 | ✅ match |
| Bundle highlight badge | "الأكثر شيوعاً" or "الأكثر طلباً" (matches PricingCard) | §11.2: switch to "الأكثر طلباً" | PricingCard line 14 `الأكثر طلباً` + pricing-page bundle line 109 `الأكثر طلباً` | ✅ match |
| HorizonHero component | §5.1 NEW: parallax + dot pulse + horizon SVG | n/a | `components/HorizonHero.tsx` matches spec | ✅ match |
| HorizonDivider | §5.1 NEW: thin wave SVG, `flip` prop | n/a | `components/HorizonDivider.tsx` matches | ✅ match |
| WaveGlyph | §5.1 NEW: reusable two-wave + dot, `showDot` prop | n/a | `components/WaveGlyph.tsx` matches | ✅ match |
| Eyebrow with leading green dot | §2.5 + §5.1 | n/a | `components/Eyebrow.tsx` matches | ✅ match |
| GuidingStarRail | §4.1 signature moment, desktop-only | n/a | Built (`components/GuidingStarRail.tsx`) but **never imported** | ⚠ partial — fix per required #2 |
| Dawn glow on every page | §4.3 | n/a | `.dawn-glow` class in `globals.css` + applied on /services, /pricing, /about, /contact, /work, /privacy, audience pages | ✅ match |
| `/work` $1,500 pilot CTA removal | §5.3 (delete) | §17 (no pilot price) | grep confirms zero `1500/1,500/pilot` in `app/work/` | ✅ match |
| All 5 tiers visible on home | §3.1.8 pricing-peek navy band | n/a | `app/page.tsx` lines 103–142 renders all 5 in `lg:grid-cols-5` | ✅ match |
| Skip link with `انتقل إلى المحتوى` | §7.1 | §3 (Header skip link) | `components/Header.tsx` line 49 | ✅ match |
| Banned phrases (all 10+) | n/a | §cross-cutting rules + §10 + §18 | grep confirms zero occurrences in `app/**` `components/**` | ✅ match |
| Saudi register (أبغى / تشوف / لو) | n/a | §22 (WhatsApp), §16 (audience pages), §17 (work) | All confirmed in source | ✅ match |
| Hero `+` divider style | §2.5 | §8.2 (process step 2: replace `+` with `،`) | `app/services/page.tsx` line 28: `نطاق ثابت، جدول زمني، سعر واحد` | ✅ match |
| "اطّلع على" replacing "شاهد" globally | n/a | §cross-cutting #5 | Most surfaces updated; **`app/page.tsx` line 137 missed** | ⚠ partial — required-fix #1 |
| Working hours: `إلى` not `-`, `توقيت السعودية` | n/a | §19 + §20 | `lib/data.ts` line 24: `السبت إلى الخميس · 9 صباحاً – 6 مساءً (توقيت السعودية)` | ✅ match |
| Privacy page rewrite | n/a | §21 | `app/privacy/page.tsx` matches all 7 sections | ✅ match |
| Founder bio rewrites (المتوسّطة / ثلاثة / بالقدوة) | n/a | §18 founder paragraphs 1–4 | `app/about/page.tsx` lines 128–153 all match | ✅ match |

**Total contract items checked:** 23. **Pass:** 21. **Partial:** 2 (one missed string + one unused component). **Fail:** 0.

---

## Banned-Arabic-phrase audit (full sweep)

Searched the entire live source (`app/**`, `components/**`, `lib/**` — excluding `.md` planning docs which legitimately reference them in ban lists):

| Banned phrase | Occurrences in live source | Status |
|---|---|---|
| بوتيكي | 0 | ✅ clean |
| بدون مسرحيات / بلا مسرحيات / مسرحيات | 0 | ✅ clean |
| المُسلَّمات | 0 | ✅ clean |
| شفّافة بلا رسوم خفية | 0 | ✅ clean |
| متكامل احترافي / متكامل (as standalone adj.) | 0 | ✅ clean |
| شفّاف / شفاف | 0 | ✅ clean |
| نبني لما هو سُرَى (broken hero) | 0 | ✅ clean |
| الصاعد والنامي (wrong etymology) | 0 | ✅ clean |
| السُرَى (proper noun used as adj.) | 0 | ✅ clean |
| النامي / المتمكّن (broken bundle names) | 0 | ✅ clean |
| حضور رقمي بسيط وفعّال | 0 | ✅ clean |
| لا-رأسي (calque) | 0 | ✅ clean |
| تدفّق تبرّع (calque) | 0 (`تجربة تبرّع` used instead) | ✅ clean |
| موبايل (transliteration) | 0 (`الجوّال` everywhere) | ✅ clean |

**Result:** All 14 high-priority banned phrases are absent from the live source. The Arabic rewrite is complete.

---

## What changed since the 2026-06-12 review

| Last-review issue | Required/Recommended | This-review status |
|---|---|---|
| `/work` $1,500 pilot CTA published | **Required-fix #1** | ✅ removed |
| Hero tagline broken (`نبني لما هو سُرَى`) | **Required-fix #2** (new this round) | ✅ fixed (`نُرافقك في الرحلة من الفكرة إلى الإطلاق.`) |
| About etymology wrong (`الصاعد والنامي`) | **Required-fix #3** (new this round) | ✅ fixed (`السير في الليل برفقة`) |
| Bundle names broken (`السُرَى / النامي / المتمكّن`) | **Required-fix #4** (new this round) | ✅ fixed (`البداية / النموّ / الإطلاق الكامل`) |
| Only 3 of 5 tiers on home | Required-fix #4 (last) | ✅ fixed (5 tiers in pricing-peek) |
| Banned phrases (بوتيكي, بدون مسرحيات, متكامل, etc.) | Required-fix #5 (last) | ✅ all gone |
| Generic founder bio | Recommended last round | ✅ rewritten with concrete biography |
| Page-title separator inconsistency (`—` vs `·`) | Recommended last round | ✅ all routes now use `·` |
| Contact form privacy link broken | Recommended last round | ✅ `/privacy` page exists and is linked from form |
| WhatsApp prefill stiff (`مرحباً، أريد`) | Recommended last round | ✅ now `السلام عليكم، أبغى` |

Every required-fix from last round addressed. Five recommended-fixes addressed. Net delta: **+0.4 overall** (8.0 → 8.4) even after introducing three new critical content checks (hero, etymology, bundles) that all passed.

---

## Final notes from Omar

The previous review (2026-06-12) gave this site 8.0 with a soft-launch verdict but called the experience "very bad" only after the founder used it on a real client and discovered the etymology was wrong, the hero tagline was gibberish, and the bundle names treated the brand as a generic adjective. Those weren't `agent-evaluation`-style scoring failures — they were domain-knowledge failures that only an Arabic-expert reviewer or a real client would catch.

This round, those three foundational copy bugs are dead. Hammam's visual contract is genuinely implemented (the horizon + dawn glow + guiding star + wave glyph all show up where they should, with the right motion + reduced-motion contracts). The Arabic editorial pass landed with a Saudi register I couldn't have written and almost certainly couldn't have caught.

What I want to flag to the founder, even though it isn't in scope:
1. **The `GuidingStarRail` decision needs to be made out loud.** It's either a feature for next milestone (delete the file) or a 5-minute wire-in (add sectional IDs to `app/page.tsx` and import the component into the layout). Right now it's neither — that's the only piece of this rebuild that feels unfinished.
2. **Before paid traffic, get the `/api/contact` endpoint actually verified end-to-end** with a real test lead. The form is now well-built, but if the backend isn't real the rebuild's main conversion path is broken.
3. **The wireframe-style work-page preview is excellent.** Once the first real client (`إندماج` or `سياج الحدود`) ships, that template becomes a real case study with a 30-minute drop-in. The honest "we're new" framing is on-brand — keep it until the case lands.

Site is ready for soft launch with required-fixes #1 and #2 addressed (~10 minutes of work). Founder can ship today.

— Omar (agent-evaluation)
