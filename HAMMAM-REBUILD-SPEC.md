# HAMMAM-REBUILD-SPEC.md — سُرَى Website Visual & UX Rebuild Spec

**Designer:** Hammam (ui-ux-pro-max)
**Date:** 2026-06-19
**Status:** Locked. Implementation-ready.
**Scope:** Full visual & UX rebuild of `C:\nashi\05-website\`. Brand tokens are unchanged; everything visual above tokens is rebuilt.
**Audience for this doc:** the engineer implementing this. Read top to bottom. Don't skip §2 — it's the contract.

---

## 1. Design philosophy

سُرَى is a quiet, purposeful **night journey** — the visitor arrives in the soft light before dawn, not in darkness. The site opens on warm Cream with a thin Navy horizon line; as the visitor scrolls, the horizon moves and a single green guiding-star dot tracks their journey down the page. There is **one accent** (green), **one warmth** (cream), **one anchor** (navy) — every screen subtracts before it adds. The visitor should leave feeling **understood**, **unhurried**, and **already on the way** — not pitched at.

---

## 2. Visual language tokens

### 2.1 Section background rhythm

Treat the homepage as a horizon line that bends through warm and cool air. **Never two adjacent sections of the same background.** Sequence:

```
[Hero]           cream-warm   (Cream #F2EEE5, dawn glow at top)
[Value pillars]  cream-warm   (continuous — bleeds into hero, no harsh seam, only a thin horizon divider)
[Audiences]     mist-cool     (#F0F2F5 — light shift signals "different conversation")
[Services]      cream-warm    (back to warmth)
[Bundles]       white-card-on-cream  (cards float on cream)
[Pricing peek]  navy-deep     (Navy #1E2940 — the "night" passage)
[Process/Trust] cream-warm    (morning returns)
[Final CTA]     navy-deep     (the launch — closing dark anchor)
[Footer]        navy-900      (#15192A — deeper than CTA so the page lands)
```

Default for any sub-page: open in cream-warm, close in navy-deep. Mist only for sections that visually want to *step out* of the narrative (technical lists, comparison tables, FAQs).

### 2.2 Decorative motifs (concrete CSS)

**The two-wave glyph** is the only ornament. It appears:
1. **Hero horizon line** — full-width SVG, 1px Navy stroke at 18% opacity, sitting at ~60% viewport height, with the **guiding-star dot** (8px Green circle) anchored above the upper wave's peak. On scroll the dot translates Y +12px max (parallax 0.06 ratio).
2. **Section dividers** (`HorizonDivider` component) — full-width inline SVG, 80px tall, single thin Navy wave at 12% opacity. Used between Audiences→Services and Process→CTA. **Replaces** every `<hr>` and every `border-t border-ash` between sections.
3. **Dawn glow** at the top of every page below the header:
   ```css
   .dawn-glow {
     background: radial-gradient(
       ellipse 120% 60% at 50% 0%,
       color-mix(in oklab, var(--color-green-light) 12%, transparent) 0%,
       transparent 65%
     );
   }
   ```
   Apply to `<main>` as a pseudo-element overlay (`pointer-events:none; position:absolute; inset:0 0 auto 0; height:480px`).

**No dotted-grid backgrounds.** Delete every `radial-gradient(... dot ...)` pattern in `Hero.tsx`. The grid was generic; the horizon is the brand.

**No literal moons, stars, deserts.** The green dot is the *only* "star". The waves are the only ornament. Everything else is whitespace.

### 2.3 Card system

Two card archetypes only:

**A. Soft card** (services, audiences, value pillars, FAQ panels):
- `background: #FFFFFF`
- `border: 1px solid color-mix(in oklab, var(--color-ash) 70%, transparent)` (≈ #DCDFE4)
- `border-radius: 14px` (existing `--radius-card`)
- `box-shadow: 0 1px 2px rgba(30,41,64,0.04), 0 8px 24px rgba(30,41,64,0.05)`
- padding: `28px` mobile / `36px` desktop
- **Hover:** `translateY(-4px)` + shadow lift to `var(--shadow-lift)` + border-color to `color-mix(in oklab, var(--color-green) 35%, var(--color-ash))`. Transition `220ms cubic-bezier(.2,.7,.2,1)`.

**B. Anchor card** (highlighted pricing tier, bundle "الأكثر شيوعاً", recommended audience bundle):
- `background: var(--color-navy)`; text `var(--color-cream)`
- `border: 1px solid color-mix(in oklab, var(--color-green-light) 30%, var(--color-navy))`
- `border-radius: 18px` (4px more than soft, signals premium)
- `box-shadow: 0 14px 40px rgba(30,41,64,0.18)`
- **No hover lift** — it's already lifted.

**Banned:** glassmorphism, neumorphism, heavy gradients on cards, animated borders, glow rings.

### 2.4 Button system

Exact Tailwind utility strings to copy-paste. **Min height 48px** on every button (mobile-tap compliant).

**Primary** (one per screen):
```
inline-flex items-center justify-center gap-2 h-12 px-7
rounded-full bg-navy text-cream font-medium
shadow-[0_6px_20px_rgba(30,41,64,0.18)]
hover:bg-charcoal hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(30,41,64,0.22)]
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-cream
transition-all duration-200
```

**Secondary** (outline, navy on cream):
```
inline-flex items-center justify-center gap-2 h-12 px-7
rounded-full bg-transparent text-navy font-medium
border border-navy/30
hover:bg-navy hover:text-cream hover:border-navy
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-cream
transition-colors duration-200
```

**Ghost** (text link with green underline accent, used inline in prose):
```
inline-flex items-center gap-1 text-navy font-medium
border-b-2 border-green pb-0.5
hover:text-green-ink hover:border-green-ink
transition-colors duration-150
```

**On-navy primary** (used inside navy sections, e.g., final CTA):
```
inline-flex items-center justify-center gap-2 h-12 px-7
rounded-full bg-cream text-navy font-medium
hover:bg-white hover:-translate-y-0.5
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-light focus-visible:ring-offset-2 focus-visible:ring-offset-navy
transition-all duration-200
```

Icon inside button: 18px, stroke 1.75, currentColor, sits **right** of the label in RTL (which is visually trailing). Use `<Icon name="arrow-left" />` for "continue" affordance (arrow points away from text in RTL).

### 2.5 Typography rhythm

Brand tokens already exist in CSS; **what changes is the application**. Replace ad-hoc `text-5xl md:text-7xl` etc. with these explicit utility patterns:

| Role | Mobile (Tailwind) | Desktop (`md:` and up) | Weight | Letter-spacing |
|---|---|---|---|---|
| Display XL (hero H1) | `text-[40px] leading-[1.1]` | `md:text-[72px] md:leading-[1.05]` | `font-display font-black` (900) | `tracking-[-0.015em]` |
| Display LG (page H1) | `text-[32px] leading-[1.15]` | `md:text-[56px] md:leading-[1.08]` | `font-display font-bold` (700) | `tracking-[-0.01em]` |
| Display MD (section H2) | `text-[26px] leading-[1.2]` | `md:text-[40px] md:leading-[1.15]` | `font-display font-bold` | `tracking-tight` |
| Heading LG (card title) | `text-[20px] leading-[1.3]` | `md:text-[24px] md:leading-[1.25]` | `font-display font-bold` | normal |
| Heading MD (subhead) | `text-[18px] leading-[1.4]` | `md:text-[20px] md:leading-[1.4]` | `font-display font-medium` (500) | normal |
| Lede (hero supporting) | `text-[18px] leading-[1.7]` | `md:text-[22px] md:leading-[1.7]` | `font-body font-normal` | normal |
| Body LG | `text-[17px] leading-[1.75]` | `md:text-[18px] md:leading-[1.75]` | `font-body font-normal` | normal |
| Body MD (default) | `text-[15px] leading-[1.75]` | `md:text-[16px] md:leading-[1.75]` | `font-body font-normal` | normal |
| Body SM (captions) | `text-[13px] leading-[1.6]` | `md:text-[14px] md:leading-[1.6]` | `font-body font-normal` | normal |
| **Eyebrow** (above H2) | `text-[12px] leading-none uppercase` | `md:text-[13px]` | `font-body font-semibold` (600) | `tracking-[0.18em]` |

**Eyebrow pattern** (use everywhere a section opens — replaces the generic `<p class="text-sm text-green">`):

```jsx
<span class="inline-flex items-center gap-2 text-[12px] md:text-[13px] uppercase tracking-[0.18em] font-semibold text-green-ink">
  <span class="block w-1.5 h-1.5 rounded-full bg-green" aria-hidden="true"></span>
  خدماتنا
</span>
```

The dot before the eyebrow is the **guiding-star reminder** — it's the same dot from the logo, miniaturized.

**Color pairings (locked):**
- H1/H2/H3 on cream/mist/white → `text-navy`
- Body on cream/mist/white → `text-navy/90` (the !important rule in globals.css already enforces this)
- Eyebrow on cream/mist/white → `text-green-ink` (AA-safe)
- Eyebrow on navy → `text-green-light`
- Body on navy → `text-cream/95`
- Captions/meta on cream → `text-navy/70`

### 2.6 Spacing rhythm

Hard rules. No improvisation.

**Section vertical padding** (`<section>`):
- Mobile: `py-20` (80px)
- Desktop: `md:py-28` (112px) for standard sections
- Hero only: `pt-24 pb-32 md:pt-32 md:pb-40`
- Final CTA: `py-24 md:py-32`

**Container widths:**
- Default content max-width: `max-w-6xl mx-auto px-5 md:px-8` (1152px content, 20/32px gutters)
- Long-form prose (about, single article): `max-w-3xl mx-auto px-5 md:px-8` (768px — keeps Arabic line length 50–70 chars)
- Pricing grid wrapper: `max-w-7xl mx-auto px-5 md:px-8` (1280px — wider to hold 3 cards + breathing)

**Vertical rhythm inside sections:**
- Eyebrow → H2: `mt-3` (12px)
- H2 → lede: `mt-4 md:mt-5` (16/20px)
- Lede → grid/content block: `mt-12 md:mt-16` (48/64px)
- Card title → card body: `mt-3` (12px)
- Card body → bullets: `mt-5` (20px)
- Between cards in a grid: `gap-6 md:gap-8` (24/32px)

**Section dividers** (`HorizonDivider`): always `my-0` (the section's own padding does the work).

---

## 3. Per-page design specs

For each route: section list top-to-bottom + visual treatment + 1-sentence layout. No copy here — that's the Arabic-expert's job.

### 3.1 `/` (home)

1. **Header** (sticky, see §5) — cream bg with `backdrop-blur-md` once scrolled past 24px.
2. **Hero** — cream-warm + dawn-glow. Centered single-column layout (not split): eyebrow ("استوديو ويب · الرياض") → display-XL H1 with the brand word `سُرَى` in `text-green-ink` → lede (max-width 32rem centered) → two CTAs (primary "ابدأ مشروعك" + secondary "شاهد كيف نعمل") side-by-side, wrapping below on mobile → **a 1px navy horizon line at 18% opacity stretches edge-to-edge** at ~60% viewport height with the **8px green dot** above its peak. The dot pulses (`animation: starPulse 2.8s ease-in-out infinite`, scale 1 → 1.15, opacity 0.85 → 1). Below the horizon, a thin "scroll" indicator (downward arrow, navy/40, 16px) with caption "اعرف الرحلة".
3. **Value pillars** — cream-warm, continuous from hero (no divider above). Eyebrow "ما نُقدّمه يختلف" → H2 → three soft cards in a row (`md:grid-cols-3`, mobile stacked). Each card: 28px icon at top in `text-green`, heading-LG title, body-MD description. Cards have no hover lift here (informational, not actionable).
4. **`HorizonDivider`** — thin wave between pillars and audiences.
5. **Audiences** — **mist-cool**. Eyebrow "نخدم ثلاث رحلات" → H2 → three **anchor cards** stacked vertically on mobile, side-by-side on `md:` (`grid-cols-1 md:grid-cols-3 gap-6`). Each card has: rounded-icon-tile (56px navy bg, green icon inside, top-right), Arabic title (heading-LG), English subtitle (eyebrow style, navy/60), description body, 4 example chips (`rounded-full bg-white border border-ash px-3 py-1 text-[13px]`), bottom-aligned ghost CTA "اقرأ المزيد ←". Card uses **soft-card** treatment but with a thin green left accent border (`border-r-2 border-green` in RTL) on hover.
6. **Services** — cream-warm. Eyebrow → H2 → 6 soft cards in `md:grid-cols-2 lg:grid-cols-3 gap-6`. Each card: 32px icon in `text-green-ink` top, heading-LG title, body-MD description, 3 bullets list (bullet = `before:content-[''] before:block before:w-1.5 before:h-1.5 before:rounded-full before:bg-green before:me-2 before:mt-2.5`). Hover-lift on (these link to /services).
7. **Bundle scenarios** — cream-warm with **white cards floating on cream**. Eyebrow "أمثلة على باقات شائعة" → H2 → 3 cards in `md:grid-cols-3`. Middle card (`growth`) is the **anchor card** treatment. Each card: tier name, label, description, items checklist (green checkmark icon + text), price (display-MD, `tabular`), renewal note (body-SM, navy/70), CTA.
8. **Pricing peek** — **navy-deep** band. Eyebrow on navy in green-light → H2 in cream → horizontal scroll/grid of 5 mini pricing cards (one per tier, simplified: name, price, "احجز" link). Below grid: cream-on-navy ghost button "شاهد كل التفاصيل والباقات →". This finally surfaces all 5 tiers (Omar §4 fix).
9. **Process strip** — cream-warm. Eyebrow "كيف نعمل" → H2 → horizontal timeline (6 steps: استماع → اقتراح → تصميم → تطوير → إطلاق → ضمان) as a **single-row scrollable strip on mobile, full-width grid on desktop**. Each step is a small numbered circle (28px navy with white digit) + step title (heading-MD) + duration chip + 1-line description.
10. **Trust band** — mist-cool, thin (only `py-12 md:py-16`). Single line layout: left = "موقع مبني بـ" + 4 small grayscale logos (Next.js, Vercel, Tailwind, Cairo font wordmark); right = founder line "بناء شخصي بقيادة نور الدين فرحات". Logos at 32% opacity, hover lifts to 60%. Replaces the missing social-proof (Omar §4).
11. **Final CTA** — navy-deep. Centered: eyebrow in green-light → display-LG H2 in cream → lede in cream/90 → primary on-navy button + secondary "أرسل لنا بريد" link below. The two-wave glyph in cream/8% sits centered behind the H2 at 320px wide (decorative watermark).
12. **Footer** — navy-900.

### 3.2 `/services`

1. Header + dawn-glow.
2. **Page hero** (cream-warm, shorter than home hero: `pt-20 pb-16 md:pt-28 md:pb-20`). Centered: eyebrow → display-LG H1 → lede → primary CTA. **No horizon line on inner pages** — the dot/horizon is the homepage signature only. Inner pages get the dawn-glow only.
3. **Services grid** — same 6-card grid as home but `md:grid-cols-2` (larger cards). Each card here gets expanded: icon + title + body + bullets + "متى تختار هذه الخدمة؟" sub-paragraph.
4. **`HorizonDivider`**.
5. **Process timeline** — full version. Cream-warm. The 6-step process gets one row per step on mobile, alternating left/right desktop layout: step number circle on one side, "ماذا يحدث" text card on the other. Each step card is a soft card, no hover.
6. **What's not in scope** band — mist-cool. Single column. Eyebrow "ما لا نقدّمه" → H2 → 4-item bulleted list with red-orange dot markers (`bg-error` at 80%) — honest disqualifier list. This makes "say no" a visible value.
7. **Final CTA** — navy-deep.
8. Footer.

### 3.3 `/pricing`

1. Header + dawn-glow.
2. **Page hero** — cream-warm. Eyebrow "خمس باقات. صفر مفاجآت." → display-LG H1 → lede with the bilingual-currency note → two anchor links: "اقفز إلى المقارنة" + "أمثلة على باقات شائعة".
3. **Pricing grid** — cream-warm. Layout fix from Omar §4: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` for the first row (Micro / Launch / Build), and a **second row** below for App + Retainer in `lg:grid-cols-2`. Launch is the anchor card (centered visually). Each card: name + English sub-name → badge if any → description → big tabular price + currency → note → checklist of features (8px green checkmark) → CTA.
4. **`HorizonDivider`**.
5. **Bundle scenarios** — cream-warm. Three bundle cards in `md:grid-cols-3`. Growth is anchor card with "الأكثر شيوعاً" badge. Shows the math: list price (strikethrough body-SM) → final price (display-MD tabular) → savings line (body-SM green-ink) → renewal note.
6. **Payment options strip** — mist-cool, `py-16 md:py-20`. Three small cards: "سنوي · -" "ربع سنوي · 4 × 1,500" "شهري · 12 × 600". Tabular numerals. (Closes Omar §7 payment-flexibility gap.)
7. **Add-ons** — cream-warm. Eyebrow → H2 → 4 add-on cards in `md:grid-cols-2 lg:grid-cols-4`. Compact cards: name + price + note. Small "أضفها لباقتك" ghost link.
8. **FAQ accordion** — mist-cool. Eyebrow → H2 → `<details>` accordion. Each `<summary>` is a soft card with the `+` indicator on the trailing edge (which is **left** in RTL). Open state rotates `+` to `×` and changes background to white with green left-border-accent (`border-r-2 border-green` in RTL).
9. **Final CTA** — navy-deep.
10. Footer.

### 3.4 `/work`

1. Header + dawn-glow.
2. **Page hero** — cream-warm. Eyebrow "أعمالنا" → display-LG H1 → lede acknowledging early stage honestly (Arabic expert writes copy, not Hammam).
3. **The honest empty state** — cream-warm, centered, single panel. A **soft card** with: the two-wave glyph icon at 64px (navy/12% opacity) → heading-LG message → body lede → primary CTA "كُن أوّل قصة" → secondary "تحدث معنا". **Delete the existing $1,500 pilot CTA permanently** (Omar required-fix #1). No published pilot price.
4. **`HorizonDivider`**.
5. **What a case will look like** — mist-cool. Eyebrow "حين تطلق أول دراسة" → H2 → static **wireframe-style preview** of a future case study layout: 4-column scaffold (problem → approach → outcome → metrics) rendered as low-fidelity gray placeholder blocks at 40% opacity inside a soft card. This sets expectation without faking content.
6. **Final CTA** — navy-deep.
7. Footer.

### 3.5 `/about`

1. Header + dawn-glow.
2. **Page hero** — cream-warm, **two-column on desktop** (`md:grid-cols-12`). Left col (cols 7) RTL leading: eyebrow → display-LG H1 → lede. Right col (cols 5): square portrait placeholder (1:1 ratio, soft-card frame, navy/8% bg, "صورة المؤسس" placeholder) — when a real photo lands it drops in with no layout change.
3. **Mission + Vision** — cream-warm. Two anchor-style soft cards side by side (`md:grid-cols-2`). Each card has eyebrow ("مهمتنا" / "رؤيتنا") + heading-LG + body-LG. Background of each card is white, but Vision card has a thin navy horizon-line SVG running across its bottom edge as a quiet brand-tie.
4. **Values strip** — mist-cool. 5 values in a horizontal grid `md:grid-cols-5 grid-cols-2` (5 on desktop, 2 + wrap on mobile). Each: small icon + heading-MD title + 1-line description. Sparse, no hover.
5. **`HorizonDivider`**.
6. **Founder section** — cream-warm. Single column centered, `max-w-3xl`. Eyebrow "من يبني سُرَى" → heading-LG name → body-LG bio (this is where the strengthened bio from Omar §2 goes). Below: 3 trust signals as inline chips (years, prior, location).
7. **Final CTA** — navy-deep.
8. Footer.

### 3.6 `/contact`

1. Header + dawn-glow.
2. **Page hero** — cream-warm, compact. Eyebrow → display-LG H1 → lede. Below the lede: 3 contact-method chips (واتساب / بريد / مكالمة) — each is a pill linking to the respective channel. **Wide layout: chips inline on desktop, stacked on mobile.**
3. **Form + sidebar** — cream-warm. `md:grid-cols-12`. Form takes 7 cols (form is the priority), sidebar 5 cols.
   - **Form (soft card, padded `p-8 md:p-10`):** eyebrow → heading-LG → fields:
     - Name (full width)
     - Email + Phone (`md:grid-cols-2`)
     - Audience-type select (full width)
     - Tier-interest select (full width, replaces plain `<select>` with **radio-card grid** — 6 options as small selectable cards in `grid-cols-2 md:grid-cols-3`)
     - Message textarea (full width, min 5 rows)
     - Submit primary button (full width on mobile, auto on desktop)
     - Privacy line linking to `/privacy`.
   - **Sidebar (3 soft cards stacked):**
     - "وقت الردّ" — list with 3 items (واتساب 4ساعة / بريد 24ساعة / مكالمة بحجز).
     - "ساعات العمل" — from CONTACT.workingHours.
     - "احجز مكالمة" — placeholder card with Calendly embed iframe space (300px tall, navy/4% bg, "احجز موعد" link). When Calendly is wired, iframe drops in.
4. **Final CTA** — skip. Contact page IS the CTA.
5. Footer.

### 3.7 `/for/smes` (template for charities + manufacturers — variations noted)

1. Header + dawn-glow.
2. **Audience hero** — cream-warm, **two-column** `md:grid-cols-12`. Left (7 cols): eyebrow with audience English name and brand-dot icon → display-LG H1 (`heroLine` from data) → lede (`heroDescription`) → primary CTA. Right (5 cols): a **stacked-card composition** showing 3 mini-cards labeled with the audience's example sectors (e.g., عيادات, مطاعم, خدمات) at slight rotations (-2°, +1°, -1°). Each mini-card has the sector icon, title, and "نبني لك:" + one-line. This is the visual differentiator between the three audience pages without changing layout.
3. **Pains** — **mist-cool**. Eyebrow "نعرف وجعك" → H2 → 3 cards in `md:grid-cols-3`. Each card uses **soft-card** treatment but with a subtle warning-orange (`text-warning`) icon. No hover (informational).
4. **`HorizonDivider`**.
5. **Our solution** — cream-warm. Eyebrow "كيف نحلّها" → H2 → 3 cards `md:grid-cols-3` paired 1:1 with the pains above. Cards use **soft-card** with green icon, hover-lift on.
6. **Recommended bundle** — cream-warm. Single full-width **anchor card** (navy bg). Eyebrow in green-light "نقترح لك" → bundle name (display-MD in cream) → items list (cream/90 checkmarks) → big tabular price + note → bonus highlight box (green-light bg/12%, text cream) → primary on-navy CTA + secondary "شاهد الباقات" link.
7. **Sector examples** — mist-cool. Eyebrow "أمثلة فعلية" → H2 → 4 (smes) / 3 (charities) / 3 (manufacturers) small cards in `md:grid-cols-2 lg:grid-cols-4`. Each: sector name (heading-MD), 1-line case description (body-MD).
8. **Final CTA** — navy-deep. Audience-specific CTA label (use `ctaPrimary` from data).
9. Footer.

**Variations per audience:**
- **smes**: card grid in §7 uses 4 columns (matches 4 examples in data); accent icon `building`.
- **charities**: replace the warning-orange pain-icons with **navy/70** icons (less alarming, more empathetic for the charity context). Recommended-bundle card carries a small heart-style icon top-right. Sector grid uses 3 columns.
- **manufacturers**: pain cards use `text-info` blue icon tone (B2B = professional, less emotional). Hero right-column stacked-cards swap to a "data table" mini-mock (rows of SKU / مخزون / سعر) instead of sector chips — leans technical. Sector grid: 3 columns.

---

## 4. Signature moments

Five concrete, implementable details that make this site feel **سُرَى** and not generic.

### 4.1 The guiding-star rail
A vertical sidebar rail on **desktop only** (`lg:` and up), positioned `fixed top-1/2 right-6 -translate-y-1/2` (left in RTL → which means it sits on the **start** edge). The rail is 2px wide, 200px tall, navy/15%. A single **8px green dot** sits on it and moves vertically based on scroll progress (`top` calculated from `window.scrollY / scrollHeight`). Each major section anchors a tiny notch on the rail (4px). Clicking a notch scrolls to that section. Hidden on mobile and `<lg`. This is the "journey progress" — the destination kept in view.

Implementation: `GuidingStarRail.tsx` client component, IntersectionObserver to track section visibility, single `scroll` listener throttled to `requestAnimationFrame`. Respects `prefers-reduced-motion` (snaps instead of animating).

### 4.2 The horizon hero
On the homepage hero only: a **full-width Navy SVG path** of the two-wave glyph (just the upper wave + the lower wave, stripped of the wordmark) at 18% opacity. The hero text sits **above** the horizon (in upper half of viewport). The **green dot** sits on the upper wave's apex. On scroll (0–400px), the entire horizon translates `translateY(scrollY * 0.06)` (gentle parallax). On `prefers-reduced-motion`, parallax disabled, horizon static.

### 4.3 The dawn glow
Every page top has a soft cream-to-green-light radial gradient at the very top, fading to transparent within 480px of the header. This is the "morning after launch" — emotional warmth the visitor feels without naming. Set via a `::before` pseudo-element on `<main>`; `pointer-events:none`.

### 4.4 Horizon dividers between sections
Replace every `<hr>` and every empty `border-t border-ash` with `<HorizonDivider />` — a thin SVG wave (1 path, 80px tall, 1px navy stroke at 12%). Inverts direction every other use (so the rhythm doesn't look mechanical): odd instances open upward-left, even instances open upward-right. This creates a subtle horizon line that "breathes" through the page.

### 4.5 The journey-step icons
For the 6-step process timeline (services + home), the step number circles aren't just numbered — when a step is **active** (in viewport), the circle gains a 2px green ring (`box-shadow: 0 0 0 2px var(--color-green)`) and a small green dot appears above it (`::after` 6px green circle, top -10px). This visually echoes the logo's dot-above-wave. Only one step is "active" at a time, computed by IntersectionObserver. On reduced-motion, all steps appear active simultaneously (no IO).

---

## 5. Components — add / remove / merge

### 5.1 NEW components (to create)

| Component | File path | Purpose |
|---|---|---|
| `HorizonDivider` | `components/HorizonDivider.tsx` | Thin wave SVG divider between sections. Props: `flip?: boolean`, `opacity?: number` (default 0.12). |
| `DawnGlow` | `components/DawnGlow.tsx` | Decorative radial-gradient overlay for `<main>`. Server component, no props. |
| `GuidingStarRail` | `components/GuidingStarRail.tsx` | Desktop-only sidebar rail with scroll-tracking dot. Client component. |
| `HorizonHero` | `components/HorizonHero.tsx` | The homepage hero composition with full-width SVG horizon + dot + parallax. Client component (for parallax + dot pulse). |
| `Eyebrow` | `components/Eyebrow.tsx` | Reusable eyebrow text with leading green dot. Props: `children`, `tone?: "light" \| "dark"` (default `dark` = green-ink on cream; `light` = green-light on navy). |
| `SectionHeader` | `components/SectionHeader.tsx` | Eyebrow + H2 + optional lede composition. Props: `eyebrow`, `title`, `lede?`, `align?: "start" \| "center"`. Replaces the repeated `<p class="text-sm">...</p><h2>...</h2>` pattern across every page. |
| `SoftCard` | `components/SoftCard.tsx` | The standard white-on-cream card archetype. Props: `as?: "div" \| "article" \| "a"`, `href?`, `hover?: boolean`, `accent?: "green" \| "warning" \| "info" \| null`, `children`. |
| `AnchorCard` | `components/AnchorCard.tsx` | The premium navy card archetype. Props: `badge?: string`, `children`. |
| `ProcessTimeline` | `components/ProcessTimeline.tsx` | The 6-step horizontal/vertical timeline with active-step IO tracking. Props: `steps: { title, duration, description }[]`, `orientation: "horizontal" \| "vertical"`. |
| `RadioCardGroup` | `components/RadioCardGroup.tsx` | Selectable tile group for the contact form's tier-of-interest input (replaces native `<select>`). |
| `TrustBand` | `components/TrustBand.tsx` | The mist-cool thin band on home showing tech logos + founder line. |
| `WaveGlyph` | `components/WaveGlyph.tsx` | Reusable inline SVG of the two-wave + dot (no wordmark). Props: `size`, `opacity`, `showDot?: boolean`. Used in hero, work page empty state, CTA watermark. |

### 5.2 REWRITE (keep file, replace contents)

| Component | Reason |
|---|---|
| `Hero.tsx` | Currently has dotted-grid background. Replace with `HorizonHero` wrapper or delete and have `app/page.tsx` use `HorizonHero` directly. |
| `Header.tsx` | Keep mobile menu, but switch to `backdrop-blur-md` on scroll, add skip-link target id, replace `☰` glyph with proper SVG icon (use `Icon` component). |
| `Footer.tsx` | Replace cream-borders-on-navy issue (low contrast) with explicit `border-cream/40`. Add the two-wave glyph at low opacity behind the columns as decoration. |
| `AudienceTile.tsx` | Restyle to the anchor-card-with-green-accent treatment from §3.1.5. Add the icon tile, example chips, ghost CTA. |
| `ServiceCard.tsx` | Switch to `SoftCard` archetype + add bullets via `before:` pseudo-element pattern. |
| `PricingCard.tsx` | Switch highlight tier to `AnchorCard` archetype. Tabular numerals on price. Bigger price typography (`text-[44px] md:text-[56px]`). |
| `ContactForm.tsx` | Add `RadioCardGroup` for tier input. Native select stays only for audience-type. Wire real submission (Omar fix #3). |
| `WhatsAppButton.tsx` | Keep position (bottom-start in RTL). Change icon from emoji-ish to proper SVG (`Icon` component). Add hide-on-scroll-down behavior (translateY 80% when scrolling down, restore when scrolling up). |
| `Icon.tsx` | Audit current icon set; ensure stroke width is consistent at 1.75; ensure all icons use `currentColor`. |

### 5.3 MERGE / REMOVE

| Component / file | Action | Reason |
|---|---|---|
| The repeated `<section>` + eyebrow + H2 boilerplate across every page | **Merge** into `SectionHeader` | DRY; consistency. |
| Hero's inline `style={{}}` radial dot pattern | **Remove** | Replaced by `HorizonHero` + `DawnGlow`. |
| Any `<hr>` and standalone `border-t border-ash` separators between sections | **Replace** with `HorizonDivider` | Brand-specific divider. |
| The current `/work` $1,500 pilot CTA `<section>` | **Delete** | Omar fix #1 — published pilot anchors prospects low. |
| Page-title separators inconsistency (`—` vs `·`) | **Normalize** to `·` (matches layout.tsx) | Omar fix #17. |

---

## 6. Motion principles

### 6.1 What animates

| Element | Trigger | Duration | Easing | Notes |
|---|---|---|---|---|
| Page entrance (above-fold elements) | mount | 600ms | `cubic-bezier(.2,.7,.2,1)` | Existing `.fade-up` animation; stagger via existing `fade-up-delay-{1,2,3}`. Keep. |
| Cards entering viewport | IntersectionObserver | 500ms | `cubic-bezier(.2,.7,.2,1)` | `opacity: 0 → 1` + `translateY(16px → 0)`. Stagger 60ms per card in a row. |
| Card hover-lift | hover | 220ms | `cubic-bezier(.2,.7,.2,1)` | `translateY(0 → -4px)` + shadow change. **Never** width/height change. |
| Button hover | hover | 200ms | `ease-out` | bg-color + `translateY(0 → -2px)` for primary; bg-color only for secondary. |
| Horizon parallax (hero only) | scroll | continuous | linear (60fps via rAF) | `translateY(scrollY * 0.06)`, max 24px. Disabled on reduced-motion. |
| Guiding-star dot pulse (hero) | infinite | 2.8s | `ease-in-out` | scale 1 → 1.15 → 1, opacity 0.85 → 1 → 0.85. Disabled on reduced-motion. |
| Guiding-star rail dot tracking | scroll | continuous | linear via rAF | Updates `top` based on scroll %. On reduced-motion, snaps without transition. |
| Process timeline active step | IntersectionObserver | 300ms | `ease-out` | Ring fade-in + above-dot scale 0 → 1. |
| FAQ accordion open/close | toggle | 240ms | `ease-out` | Use native `<details>` + CSS — no JS. Animate `max-height` via `interpolate-size: allow-keywords` if available, fallback to opacity-only. |
| Mobile menu drawer | toggle | 280ms enter / 200ms exit | `ease-out` enter, `ease-in` exit (exit-faster rule) | `translateY` + opacity. |
| Header backdrop-blur on scroll | scroll past 24px | 200ms | `ease-out` | bg-opacity 0 → 0.85 + `backdrop-blur-md`. |

### 6.2 What does NOT animate

- Section background colors (would feel cheap).
- Logo (logo is the anchor — stable).
- Icons (no rotating, spinning, bouncing).
- Typography (no typewriter, no letter-stagger).
- Layout (never animate layout-affecting properties: width, height, top, left, padding, margin). Transforms only.
- Form field focus (instant focus ring is correct UX; no delayed reveal).

### 6.3 Reduced-motion contract

The existing `@media (prefers-reduced-motion: reduce)` in `globals.css` is preserved (it sets all animation/transition durations to 0.01ms). **Additionally**:

- `HorizonHero`: read `window.matchMedia("(prefers-reduced-motion: reduce)").matches` before attaching the scroll listener; if reduced, skip parallax entirely.
- `GuidingStarRail`: same — skip rAF loop, just update `top` on `scroll` events directly without transition.
- `ProcessTimeline`: skip IO active-step detection; render all steps as if active.
- Pulse animation: replaced by static `scale(1)` + full opacity.

### 6.4 Motion budget

**Maximum 2 animated elements per viewport at any moment.** If a card grid enters during a scroll, stagger so no more than 2 cards animate simultaneously.

---

## 7. Accessibility addenda

The contrast safety net in `globals.css` is preserved (it does heavy lifting). Beyond that, the rebuild MUST add:

1. **Skip link** in `app/layout.tsx` immediately before `<Header />`:
   ```jsx
   <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[100] focus:bg-navy focus:text-cream focus:px-4 focus:py-2 focus:rounded">
     تخطّى إلى المحتوى
   </a>
   ```
   And `<main id="main">` on every page.

2. **Focus rings**: existing `:focus-visible` rules cover this — preserve them. New buttons explicitly use `focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2` per §2.4.

3. **Aria-labels** on the `GuidingStarRail` notches (`aria-label="انتقل إلى قسم {sectionName}"`).

4. **Decorative SVGs** (`HorizonDivider`, `DawnGlow`, `WaveGlyph` when decorative): all carry `aria-hidden="true"` and `role="presentation"`.

5. **Reduced-motion respected** per §6.3.

6. **Color contrast** — already enforced by globals.css safety net. No change.

7. **Touch targets** — every interactive element has min `h-12` (48px). Mobile nav items `min-h-[48px]`. WhatsApp FAB at 56px stays.

---

## 8. Build & quality gates

- **`next build` must complete clean.** No new dependencies. No Framer Motion. No shadcn. Only `tailwindcss` (existing) + native CSS + React.
- **Performance budgets**:
  - LCP < 2.0s on home (cream bg, single SVG horizon, no hero image to load).
  - CLS < 0.05 (reserve hero horizon space via fixed-height SVG container, reserve image space on /about portrait).
  - Bundle delta from rebuild: target +0KB JS, +2KB CSS (the new utility patterns).
- **RTL check**: every component verified with `dir="rtl"`. `me-*` / `ms-*` logical properties only — no `mr-*` / `ml-*` for spatial margins.
- **Mobile-first** every utility set starts at mobile and uses `md:` / `lg:` overrides.

---

## 9. Out of scope (do NOT do)

- Don't ship dark mode in this rebuild. (Tokens exist; defer to next milestone.)
- Don't build the English mirror `/en`. (Defer to v2 per Omar §8.)
- Don't add real case studies. (Defer until first client launches per /work design.)
- Don't add Calendly account integration — just leave the iframe slot ready.
- Don't change the logo or any brand token. The visual rebuild lives entirely **above** the token layer.

---

*End of HAMMAM-REBUILD-SPEC.md. Hand to the implementing engineer. Questions go through Hammam, not founder.*
