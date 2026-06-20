# سُرَى — Arabic Copy V2 (Editorial Rewrite)

**Goal:** Strip every AI-tell, banned phrase, and broken usage out of the live Arabic copy. Replace with plain, confident, Riyadh-register Arabic that a real studio founder would actually say.

**Master tagline (LOCKED, from brand guidelines):** نُرافقك في الرحلة.

**Bans enforced:** بوتيكي · مسرحيات · المُسلَّمات · شفّافة بلا رسوم خفية · متكامل احترافي · جولات من المراجعات · حضور رقمي بسيط وفعّال (filler) · transliterated tech where Arabic exists.

---

## 1) `app/layout.tsx` — Global Metadata

### `metadata.title.default`
- **OLD:** `سُرَى · Surā — نُرافقك في الرحلة`
- **NEW:** `سُرَى · Surā — نُرافقك في الرحلة` (keep — this matches the locked brand tagline)

### `metadata.title.template`
- **OLD:** `%s · سُرَى · Surā`
- **NEW:** `%s · سُرَى · Surā` (keep)

### `metadata.description`
- **OLD:** `استوديو بوتيكي لتصميم وتطوير المواقع وتطبيقات الويب. للشركات الصغيرة والجمعيات والمصانع. نُسلّم خلال أسابيع، بدون مسرحيات.`
- **NEW:** `استوديو متخصّص في تصميم وبرمجة المواقع وتطبيقات الويب — للشركات الصغيرة والجمعيات والمصانع. نُسلّم خلال أسابيع، بالعربية والإنجليزية.`
- **Why:** Removes "بوتيكي" (transliterated, embarrassing) and "بدون مسرحيات" (literal translation). "متخصّص" carries the same boutique nuance natively. Adds the bilingual claim that actually differentiates Surā.

### `metadata.keywords` (Arabic items only)
- **OLD:** `تصميم مواقع · تطوير ويب · Next.js · سُرَى · Surā · استوديو ويب · مواقع الجمعيات · مواقع الشركات · تطبيقات ويب · تصميم هوية بصرية`
- **NEW:** `تصميم مواقع · برمجة مواقع · تطبيقات ويب · Next.js · سُرَى · Surā · استوديو ويب · مواقع الجمعيات · مواقع الشركات الصغيرة · مواقع المصانع · هوية بصرية · بوّابة B2B · حملات Google · SEO`
- **Why:** Replace "تطوير ويب" (calque) with "برمجة مواقع" — more natural Saudi business speech. Add audience-specific phrases.

### `openGraph.title`
- **OLD:** `سُرَى · Surā — نُرافقك في الرحلة` (keep)

### `openGraph.description`
- **OLD:** `مواقع وتطبيقات ويب للشركات والجمعيات والمصانع — من الفكرة إلى الإطلاق.`
- **NEW:** `مواقع وتطبيقات ويب للشركات والجمعيات والمصانع — من الفكرة إلى الإطلاق.` (keep — clean, no AI-tells)

### `twitter.title`
- **NEW:** keep current

### `twitter.description`
- **OLD:** `مواقع وتطبيقات ويب — من الفكرة إلى الإطلاق. نُسلّم خلال أسابيع.`
- **NEW:** `مواقع وتطبيقات ويب — من الفكرة إلى الإطلاق. نُسلّم خلال أسابيع.` (keep — clean)

### `<html lang="ar" dir="rtl">`
- No copy. Keep.

---

## 2) `components/Hero.tsx`

### Eyebrow badge
- **OLD:** `متاحون لاستلام مشاريع الربع القادم`
- **NEW:** `نستقبل مشاريع الربع القادم`
- **Why:** Tighter, sounds like a real studio's actual capacity note rather than "available to receive".

### `<h1>` — **CRITICAL FIX**
- **OLD:** `نبني لما هو سُرَى.` (broken — "we build for what is Sura" — gibberish)
- **NEW:** `نُرافقك في الرحلة من الفكرة إلى الإطلاق.`
- **Why:** Uses the LOCKED master tagline naturally, then anchors it in what the studio actually does. The journey metaphor is now meaningful, not decorative. The green-highlighted span should wrap "الفكرة إلى الإطلاق" (or simply "الرحلة") instead of "سُرَى".
- **Implementation note for engineer:** Replace the `<span className="text-green">` wrap to highlight `الرحلة` (single word, clean green accent under it).

### Hero `<p>` (subhead)
- **OLD:** `مواقع وتطبيقات ويب للشركات والجمعيات والمصانع — من الفكرة إلى الإطلاق. نُسلّم خلال أسابيع، بالعربية والإنجليزية، بدون مسرحيات.`
- **NEW:** `نبني مواقع وتطبيقات ويب للشركات الصغيرة والجمعيات والمصانع. عربي وإنجليزي بنفس العناية، إطلاق خلال أسابيع، وسعر متّفق عليه من اليوم الأول.`
- **Why:** Drops "بدون مسرحيات" (banned). Replaces it with a concrete differentiator — fixed pricing from day one — which is what "no agency theater" actually meant in plain Arabic.

### Primary CTA
- **OLD:** `ابدأ مشروعك` (keep — clean, active, natural)

### Secondary CTA
- **OLD:** `شاهد الباقات`
- **NEW:** `اطّلع على الباقات`
- **Why:** "شاهد" is for video/spectacle; "اطّلع" is the natural Saudi-business verb for pricing pages.

### Three trust points (below CTAs)
- **OLD:** `14-21 يوم للإطلاق · باقات بأسعار ثابتة · ضمان بعد الإطلاق`
- **NEW:** `إطلاق خلال 14–21 يوم · أسعار ثابتة معلنة · ضمان بعد الإطلاق`
- **Why:** "للإطلاق" reads awkward as a standalone; "خلال" is more natural. "بأسعار ثابتة" → "أسعار ثابتة معلنة" because "معلنة" answers the "vs. hidden fees" point without using the banned cliché.

---

## 3) `components/Header.tsx`

### Skip link
- **OLD:** `تخطّى إلى المحتوى`
- **NEW:** `انتقل إلى المحتوى`
- **Why:** "تخطّى" is jarring colloquial-imperative; "انتقل" is the standard accessible-Arabic convention used by Saudi gov sites.

### Logo aria-label
- **OLD:** `سُرَى — الصفحة الرئيسية` (keep — clean)

### nav aria-label
- **OLD:** `الرئيسية`
- **NEW:** `التنقّل الرئيسي`
- **Why:** `aria-label="الرئيسية"` collides with the actual nav item "الرئيسية" — screen readers will say "Home navigation: Home, Home, Services…". Use `التنقّل الرئيسي`.

### Hamburger labels
- **OLD:** `فتح القائمة` / `إغلاق القائمة` (keep — clean)

### Header CTA
- **OLD:** `ابدأ مشروعك` (keep)

---

## 4) `components/Footer.tsx`

### Studio descriptor paragraph — **CRITICAL FIX**
- **OLD:** `استوديو بوتيكي لتصميم وتطوير المواقع وتطبيقات الويب. للشركات الصغيرة والجمعيات والمصانع التي تبدأ رحلتها.`
- **NEW:** `استوديو متخصّص في تصميم وبرمجة المواقع وتطبيقات الويب — للشركات الصغيرة والجمعيات والمصانع التي تخطو خطوتها الأولى على الويب.`
- **Why:** Kills "بوتيكي". "تخطو خطوتها الأولى" subtly carries the journey metaphor without forcing it.

### Nav heading
- **OLD:** `تنقّل` (keep — clean)

### Nav aria-label
- **OLD:** `روابط الموقع` (keep)

### Contact heading
- **OLD:** `تواصل` (keep)

### WhatsApp label
- **OLD:** `واتساب · WhatsApp` (keep)

### Copyright line
- **OLD:** `© 2026 سُرَى · Surā — جميع الحقوق محفوظة` (keep)

### "Made with pride" line
- **OLD:** `صُنع بفخر في الشرق الأوسط`
- **NEW:** `صُنع في الرياض بكل فخر`
- **Why:** "في الشرق الأوسط" is geographic vague-speak that Saudi clients find slightly hollow. "في الرياض" anchors the studio in a real place and is more honest — Surā is run from there. If founder prefers regional framing, fall back to `صُنع بفخر في المملكة`.

---

## 5) `components/ContactForm.tsx`

### Success heading
- **OLD:** `شكراً!`
- **NEW:** `وصلنا طلبك.`
- **Why:** "شكراً!" alone is generic. "وصلنا طلبك" confirms receipt — the actual reassurance the user needs at that moment.

### Success body
- **OLD:** `استلمنا طلبك. نتواصل معك خلال 24 ساعة عبر البريد أو واتساب.`
- **NEW:** `نرجع لك خلال 24 ساعة على البريد أو واتساب — أيّهما أسرع.`
- **Why:** "نرجع لك" is the natural studio-to-client phrase. "أيّهما أسرع" adds warmth.

### Success CTAs
- **OLD:** `تابع عبر واتساب` / `راسلنا مباشرة` (keep — both clean)
- WhatsApp prefill text:
  - **OLD:** `مرحباً، أرسلت لتوّي عبر نموذج الموقع.`
  - **NEW:** `السلام عليكم، أرسلت طلباً عبر نموذج موقع سُرَى.`
  - **Why:** "مرحباً" is fine but "السلام عليكم" is the genuine Saudi business opener. Naming Surā explicitly helps founder identify the lead source on his phone.

### Error: rate-limit
- **OLD:** `محاولات كثيرة في وقت قصير. حاول بعد دقيقة.`
- **NEW:** `أرسلت طلبات كثيرة بسرعة. انتظر دقيقة وأعد المحاولة.`
- **Why:** Direct second-person, more humane.

### Error: generic
- **OLD:** `حصل خطأ غير متوقع. جرّب مرة ثانية أو راسلنا مباشرة.`
- **NEW:** `صار خطأ ما توقعناه. أعد المحاولة، أو راسلنا مباشرة على واتساب.`
- **Why:** "صار" instead of "حصل" — Saudi register. Specifies the alternative channel.

### Error: network
- **OLD:** `ما قدرنا نتصل بالخادم. تحقّق من الإنترنت أو راسلنا عبر واتساب.`
- **NEW:** `ما وصلنا للخادم. تحقّق من اتصالك بالإنترنت، أو راسلنا على واتساب.` (keep meaning, slightly tighter)

### Field: name
- Label: `الاسم` (keep)
- Placeholder:
  - **OLD:** `اسمك الكريم`
  - **NEW:** `اسمك`
  - **Why:** "الكريم" is overly formal in modern Saudi UX. A clean "اسمك" is warmer and faster to read.

### Field: email
- Label: `البريد الإلكتروني` (keep)
- Placeholder: `name@example.com` (keep)

### Field: phone
- **OLD:** `الواتساب (اختياري)` → keep
- Placeholder: `+966 5X XXX XXXX` (keep)

### Field: package
- Label:
  - **OLD:** `الباقة المهتم بها`
  - **NEW:** `الباقة التي تهمّك`
  - **Why:** "الباقة المهتم بها" is broken syntax (passive participle attached oddly). "التي تهمّك" is direct, correct, and warm.
- Default option: `اختر الباقة` (keep)
- Options:
  - `سُرَى ميكرو (4,500 ريال/سنة)` → **NEW:** `ميكرو — 4,500 ريال/سنة`
  - `Launch (9,500 – 18,750 ريال)` → keep
  - `Build (22,500 – 45,000 ريال)` → keep
  - `App (56,000 – 131,000 ريال)` → keep
  - `Retainer (13,125 ريال/شهر)` → keep
  - **OLD:** `لست متأكداً — أحتاج استشارة`
  - **NEW:** `ما زلت أفكّر — أحتاج استشارة`
  - **Why:** "لست متأكداً" is correct but stiff; "ما زلت أفكّر" reads warmer.

### Field: message
- Label:
  - **OLD:** `اخبرنا عن مشروعك`
  - **NEW:** `احكي لنا عن مشروعك`
  - **Why:** "احكي لنا" matches the editorial voice locked elsewhere (contact page H1).
- Placeholder:
  - **OLD:** `نوع الجهة، الهدف من الموقع، وأي ميزات تطلبها…`
  - **NEW:** `نوع الجهة، هدفك من الموقع، وأي ميزات تخطر على بالك…`
  - **Why:** "تطلبها" presumes the user already knows what they want; "تخطر على بالك" lowers the barrier.
- Helper:
  - **OLD:** `كلّما كانت التفاصيل أوضح، كان مقترحنا أدق.`
  - **NEW:** `كلّما وضحت التفاصيل، طلع مقترحنا أدقّ.`
  - **Why:** Tighter Saudi cadence.

### Submit button
- Idle: **OLD** `أرسل الطلب` → **NEW** `إرسال الطلب`
  - **Why:** Form-button convention in Arabic UI uses verbal-noun, not imperative.
- Loading: `جارٍ الإرسال…` (keep)

### Privacy line
- **OLD:** `لا نشارك بياناتك مع أي جهة. سياسة الخصوصية`
- **NEW:** `بياناتك تبقى عندنا. اقرأ سياسة الخصوصية.`
- **Why:** "لا نشارك بياناتك مع أي جهة" is the literal English boilerplate. The replacement is what a Saudi business owner would actually say to reassure another business owner.

---

## 6) `components/AudienceTile.tsx`

### Eyebrow
- **OLD:** `من نخدم` (keep — clean, native)

### `<h2>`
- **OLD:** `ثلاثة جماهير، عرض مخصّص لكل واحد`
- **NEW:** `ثلاث شرائح، عرض خاصّ لكلّ شريحة`
- **Why:** "جماهير" sounds like sports/political audience, not business clients. "شرائح" is the right business term.

### Subhead
- **OLD:** `نُسلّم بنفس الحرفية لثلاث شرائح مختلفة — ولكل واحدة باقة موصى بها بسعر مميّز.`
- **NEW:** `نشتغل بنفس المعيار لكلّ شريحة — ولكلّ واحدة باقة جاهزة بسعر متّفق عليه.`
- **Why:** "حرفية" is correct but slightly stiff; "نفس المعيار" is what Saudi founders actually say. "موصى بها" is calque of "recommended"; "جاهزة" is more natural.

### CTA per tile
- **OLD:** `شاهد العرض`
- **NEW:** `اطّلع على العرض`

---

## 7) `app/page.tsx` (Home)

### Why Surā eyebrow
- **OLD:** `لماذا سُرَى` (keep)

### Why Surā h2
- **OLD:** `ثلاث قيم نبني عليها` (keep — natural)

### Services eyebrow
- **OLD:** `خدماتنا` (keep)

### Services h2
- **OLD:** `ما نُسلّم`
- **NEW:** `ما نُسلِّمه`
- **Why:** "ما نُسلّم" alone is incomplete. The relative clause needs the object pronoun. (NOTE: deliberately avoiding banned "المُسلَّمات".)

### Services link
- **OLD:** `كل الخدمات` (keep)

### Pricing eyebrow
- **OLD:** `الباقات` (keep)

### Pricing h2
- **OLD:** `تسعير شفّاف`
- **NEW:** `أسعار واضحة`
- **Why:** "شفّاف" is fine but used everywhere; "أسعار واضحة" lands harder and isn't AI-typical.

### Pricing subhead
- **OLD:** `خمس طبقات تغطي كل الميزانيات — من الميكرو السنوي للتطبيقات الكاملة، كلها بالريال السعودي.`
- **NEW:** `خمس باقات تغطّي كلّ الميزانيات — من باقة ميكرو السنوية إلى تطبيقات الويب الكاملة، بالريال السعودي.`
- **Why:** "طبقات" reads weird for pricing; "باقات" is the right word (and matches the eyebrow). "للتطبيقات الكاملة" — fix preposition: "إلى تطبيقات الويب الكاملة".

### Pricing link
- **OLD:** `كل التفاصيل` (keep)

### Final CTA h2
- **OLD:** `جاهز للإطلاق؟` (keep — punchy)

### Final CTA paragraph
- **OLD:** `مكالمة استكشاف 30 دقيقة، مجانية. نسمع منك، نفهم احتياجك، ونرجع لك بمقترح خلال 24 ساعة.`
- **NEW:** `مكالمة استكشاف مجانية، 30 دقيقة. نسمع منك، نفهم وضعك، ونرجع لك بمقترح خلال 24 ساعة.`
- **Why:** "احتياجك" is too generic; "وضعك" is what real Saudi consultants say (case-by-case framing).

### Final CTA buttons
- **OLD:** `احجز مكالمة استكشاف` (keep)
- **OLD:** `شاهد الباقات` → **NEW:** `اطّلع على الباقات`

---

## 8) `app/services/page.tsx`

### `metadata.title`
- **OLD:** `خدماتنا — سُرَى` (keep)

### `metadata.description`
- **OLD:** `كل ما تقدّمه سُرَى: مواقع، تطبيقات ويب، هوية بصرية، حملات تسويقية، SEO، وتقارير.`
- **NEW:** `ما تقدّمه سُرَى: مواقع، تطبيقات ويب، هوية بصرية، حملات Google وMeta، تحسين محركات البحث، وتقارير شهرية.`
- **Why:** "كل ما تقدّمه" → "ما تقدّمه" (tighter). Replaces vague "حملات تسويقية" with concrete platforms — more searchable, more honest.

### H1
- **OLD:** `ست خدمات. شراكة واحدة.`
- **NEW:** `ست خدمات. شراكة واحدة.` (keep — clean, punchy, journey-aligned)

### Hero subhead
- **OLD:** `تختار ما تحتاجه فقط، أو تتركنا نقترح المزيج المناسب لجهتك. أسعار شفّافة، نطاق ثابت، إطلاق خلال أسابيع.`
- **NEW:** `تختار ما تحتاجه، أو نقترح عليك المزيج الأنسب لجهتك. أسعار واضحة، نطاق ثابت، إطلاق خلال أسابيع.`
- **Why:** "تتركنا نقترح" (calque of "let us suggest") → direct "نقترح عليك". "شفّافة" → "واضحة".

### Process eyebrow
- **OLD:** `عمليتنا`
- **NEW:** `كيف نشتغل`
- **Why:** "عمليتنا" reads clinical/medical. "كيف نشتغل" is what real Saudi business owners say.

### Process h2
- **OLD:** `من المكالمة إلى الإطلاق` (keep — clean, journey-aligned)

### Process steps
1. **OLD:** `مكالمة استكشاف · 30-45 دقيقة — تشخيص المشكلة، تأهيل الميزانية، الاتفاق على الخطوة التالية.`
   **NEW:** `مكالمة استكشاف · 30 إلى 45 دقيقة. نفهم المشكلة، نتفاهم على الميزانية، نتّفق على الخطوة التالية.`
   **Why:** "تأهيل الميزانية" sounds like consulting jargon; "نتفاهم على الميزانية" is what you'd actually say in a Riyadh meeting.

2. **OLD:** `مقترح خلال 24 ساعة · نطاق ثابت + جدول زمني + سعر واحد. لا فواتير مفاجئة.`
   **NEW:** `مقترح خلال 24 ساعة · نطاق ثابت، جدول زمني، سعر واحد. لا فواتير مفاجئة.` (small punctuation cleanup; "+" reads weird in Arabic body text)

3. **OLD:** `عقد + دفعة 50% · اتفاقية بسيطة. ندخل العمل اليوم نفسه.`
   **NEW:** `عقد ودفعة 50% · اتفاقية واضحة، نباشر العمل في نفس اليوم.`
   **Why:** "بسيطة" can imply "small/lazy" in Saudi context; "واضحة" is the intended meaning. "ندخل العمل" → "نباشر العمل" (more professional).

4. **OLD:** `بناء متابع يومياً · نشر staging يومي عبر Vercel — تراقب التقدّم لحظة بلحظة.`
   **NEW:** `بناء تتابعه يومياً · نسخة معاينة جديدة كلّ يوم على Vercel — تشوف التقدّم بعينك.`
   **Why:** "staging" → "نسخة معاينة" (Arabic-first, keeps the technical clarity). "تراقب التقدّم لحظة بلحظة" → "تشوف التقدّم بعينك" (Saudi register, warmer, more credible).

5. **OLD:** `إطلاق + تدريب · نقل DNS، تدريب فريقك، ضمان 14 يوم بعد الإطلاق.`
   **NEW:** `إطلاق وتدريب · ننقل الدومين، ندرّب فريقك، ضمان 14 يوم بعد الإطلاق.`

6. **OLD:** `متابعة الأسبوع الثاني · نتأكد أنّ كل شي يعمل. نعرض عقد صيانة إن كان مناسباً.`
   **NEW:** `متابعة بعد أسبوعين · نتأكّد إنّ كلّ شي يشتغل، ونعرض عليك عقد صيانة لو احتجته.`
   **Why:** "الأسبوع الثاني" ambiguous (second week of what?); "بعد أسبوعين" clear. "إن كان مناسباً" → "لو احتجته" — the actual question being answered.

### Final CTA h2
- **OLD:** `عندك مشروع في ذهنك؟`
- **NEW:** `عندك مشروع في بالك؟`
- **Why:** "في ذهنك" is MSA-stiff; "في بالك" is natural Gulf register.

### Final CTA paragraph
- **OLD:** `احكي لنا عنه. نسمع، نقترح، ونرجع لك بمقترح ملموس.`
- **NEW:** `احكي لنا عنه. نسمع، نسأل، ونرجع لك بمقترح ملموس.` (small tighten — "نقترح" then "بمقترح" is redundant)

### Final CTA button
- **OLD:** `احكي لنا` (keep — perfect)

---

## 9) `app/pricing/page.tsx`

### `metadata.title`
- `الباقات والأسعار — سُرَى` (keep)

### `metadata.description`
- **OLD:** `تسعير شفّاف — من باقة ميكرو السنوية للتطبيقات الكاملة.`
- **NEW:** `أسعار واضحة — من باقة ميكرو السنوية إلى تطبيقات الويب الكاملة.`

### Hero H1
- **OLD:** `تسعير شفّاف. بدون مفاجآت.`
- **NEW:** `أسعار واضحة. لا مفاجآت.`
- **Why:** "بدون مفاجآت" → "لا مفاجآت" is tighter and more confident.

### Hero subhead
- **OLD:** `خمس طبقات تغطّي كل ميزانية. تختار، نُوقّع، نبدأ. كل سعر معروض هنا هو السعر.`
- **NEW:** `خمس باقات تغطّي كلّ ميزانية. تختار، نوقّع، نبدأ. السعر الذي تراه هنا هو السعر النهائي.`

### FAQ eyebrow
- `أسئلة شائعة` (keep)

### FAQ h2
- **OLD:** `ما نُسأل عنه كثيراً`
- **NEW:** `الأسئلة التي تتكرّر علينا`
- **Why:** "ما نُسأل عنه كثيراً" is grammatically OK but rough; the replacement is what a Saudi rep would naturally say.

### FAQ Q1
- **OLD:** `ما الفرق بين ميكرو و Launch؟` (keep)

### FAQ A1
- **OLD:** `ميكرو خدمة سنوية صغيرة للجهات التي تحتاج صفحة هبوط + حملة تسويقية بسيطة (4,500 ريال/سنة). Launch موقع متكامل من 5 صفحات بنطاق وميزات أوسع (9,500 – 18,750 ريال).`
- **NEW:** `ميكرو اشتراك سنوي للجهات التي تحتاج صفحة هبوط وحملة Google صغيرة بميزانية محدودة (4,500 ريال/سنة). Launch موقع كامل من 5 صفحات بنطاق وميزات أوسع (9,500 – 18,750 ريال).`
- **Why:** "خدمة سنوية صغيرة" reads diminishing; "اشتراك سنوي" is the actual product model. "حملة تسويقية بسيطة" → "حملة Google صغيرة" (concrete). "متكامل" — replaced (mild AI-tell) with "كامل".

### FAQ Q2
- **OLD:** `هل الأسعار قابلة للتفاوض؟` (keep)

### FAQ A2
- **OLD:** `الأسعار شفّافة ومُحدَّدة بناءً على نطاق المشروع الفعلي. ضمن النطاق المُعلَن، نحدّد السعر النهائي بعد مكالمة الاكتشاف بناءً على تعقيد مشروعك. لا فواتير مفاجئة بعد التوقيع.`
- **NEW:** `الأسعار محدّدة بناءً على نطاق المشروع الفعلي. ضمن النطاق المُعلَن، نحدّد السعر النهائي بعد مكالمة الاستكشاف حسب تعقيد مشروعك. ما في فواتير مفاجئة بعد التوقيع.`
- **Why:** Removes "شفّافة" (overused). "الاكتشاف" → "الاستكشاف" (consistent with rest of site). "لا فواتير" → "ما في فواتير" (Saudi register).

### FAQ Q3
- **OLD:** `هل أستطيع الترقية لاحقاً؟`
- **NEW:** `هل أقدر أترقّى لباقة أعلى لاحقاً؟`

### FAQ A3
- **OLD:** `نعم. تبدأ بـ ميكرو وتترقّى لـ Launch أو Build بدفع الفرق فقط — لا تكلفة مهدورة.`
- **NEW:** `نعم. تبدأ بميكرو وتترقّى لـ Launch أو Build بدفع الفرق فقط — ما تخسر شي من اللي دفعته.`
- **Why:** "لا تكلفة مهدورة" is calque of "no sunk cost"; the replacement says it the way the founder would.

### FAQ Q4
- **OLD:** `ماذا عن ميزانية الإعلانات؟` (keep)

### FAQ A4
- **OLD:** `منفصلة 100% عن باقاتنا. أنت تدفع لـ Google و Meta مباشرة. نحن نُدير الحملة فقط.`
- **NEW:** `منفصلة تماماً عن باقاتنا. تدفع لـ Google وMeta مباشرة من بطاقتك، ونحن نُدير الحملة.`
- **Why:** "100%" reads as marketing-ese; "تماماً" cleaner. Adds "من بطاقتك" — the actual mechanism — which builds trust.

### FAQ Q5
- **OLD:** `كم تأخذ الإطلاق؟`
- **NEW:** `كم تأخذ مدّة الإطلاق؟`

### FAQ A5
- `ميكرو: 1-2 أسبوع. Launch: 14-21 يوم. Build: 4-6 أسابيع. App: 6-10 أسابيع.` (keep)

### FAQ Q6
- `هل يمكن إلغاء اشتراك ميكرو؟` (keep)

### FAQ A6
- **OLD:** `نعم خلال 14 يوم استرداد كامل (-200 ريال رسوم تأسيس). بعد كذا، إيقاف التجديد التلقائي بدون استرداد.`
- **NEW:** `نعم. خلال أول 14 يوم: استرداد كامل ماعدا 200 ريال رسوم التأسيس. بعد ذلك: نوقف التجديد التلقائي بدون استرداد.`
- **Why:** Reformats for clarity. "بعد كذا" is fine spoken but written reads loose.

### Addons section eyebrow
- `خدمات إضافية` (keep)

### Addons section h2
- **OLD:** `إضافات تكمّل الباقة` (keep — clean)

### Addons section subhead
- **OLD:** `لباقة ميكرو السنوية بالريال السعودي`
- **NEW:** `إضافات على باقة ميكرو السنوية — بالريال السعودي`

### Bundles eyebrow
- **OLD:** `باقات مُجمَّعة`
- **NEW:** `باقات مُجمَّعة` (keep)

### Bundles h2
- **OLD:** `ثلاثة سيناريوهات شائعة`
- **NEW:** `ثلاثة سيناريوهات نعمل عليها كثيراً`
- **Why:** "شائعة" reads like generic-business-speak. The replacement is concrete and reflects actual studio experience.

### Bundles subhead
- **OLD:** `معظم عملائنا يبدؤون من أحد هذه — مع خصومات تجميع تصل إلى 15%.`
- **NEW:** `أغلب عملائنا يبدأون من واحدة منها — مع خصم تجميع يصل إلى 15%.`

### Bundle highlight badge
- **OLD:** `الأكثر شيوعاً` (keep — matches PricingCard "الأكثر طلباً" pattern, OK)

### Bundle CTA template
- **OLD:** `احجز {b.title}` (where title may contain emoji + Arabic adj)
- The current code strips emojis with regex. With the new bundle names (see §11) the resulting CTA will read e.g. `احجز البداية` / `احجز النموّ` / `احجز الإطلاق الكامل` — naturally grammatical.

### Final CTA h2
- **OLD:** `غير متأكد من الباقة؟`
- **NEW:** `ما زلت تتردّد بين الباقات؟`
- **Why:** "غير متأكد" is grammatically fine but flat. The replacement names the actual emotion the visitor is feeling.

### Final CTA paragraph
- **OLD:** `احجز مكالمة 30 دقيقة. نسمع ميزانيتك وأهدافك ونقترح الأنسب.`
- **NEW:** `احجز مكالمة 30 دقيقة، نسمع منك ميزانيتك وأهدافك ونقترح عليك الأنسب.`

### Final CTA button
- `احجز استشارة مجانية` (keep)

---

## 10) `lib/data.ts` — VALUE_PILLARS

### Pillar 1 (icon: bolt)
- **OLD title:** `سريع`
- **NEW:** `سريع` (keep)
- **OLD description:** `أول نشر خلال 14-21 يوم لموقع تسويقي، 6-10 أسابيع لـ MVP تطبيق ويب.`
- **NEW:** `أوّل نشر خلال 14–21 يوم لموقع تسويقي، و6–10 أسابيع لـ MVP تطبيق ويب.`

### Pillar 2 (icon: sparkle)
- **OLD title:** `جميل` (keep)
- **OLD description:** `تصميم قائد، ليس قالب مُشترى. الطباعة العربية تُعامَل بنفس عناية اللاتينية.`
- **NEW:** `تصميم نصنعه من الصفر، لا قالباً جاهزاً. الطباعة العربية نعطيها نفس عناية الإنجليزية.`
- **Why:** "تصميم قائد" is a non-phrase — likely mistranslation of "lead design". The fix says what's actually meant. "اللاتينية" → "الإنجليزية" (the actual contrast, "اللاتينية" sounds academic).

### Pillar 3 (icon: target) — **CRITICAL FIX**
- **OLD title:** `بلا مسرحيات`
- **NEW:** `بلا تعقيد`
- **Why:** Banned phrase. "بلا تعقيد" carries the same anti-bureaucratic positioning naturally.
- **OLD description:** `باقات ثابتة النطاق، تسعير شفّاف، بلا مقترحات 60 صفحة لموقع من 5 صفحات.`
- **NEW:** `باقات ثابتة النطاق، سعر معلن من البداية، ولا مقترحات 60 صفحة لموقع من 5 صفحات.`

> NOTE: about/page.tsx contains a hard-coded section heading `سريع · جميل · بلا مسرحيات` — replace with `سريع · جميل · بلا تعقيد`. (See §13.)

---

## 11) `lib/data.ts` — BUNDLE_SCENARIOS — **CRITICAL FIX (broken Arabic)**

The current titles use "السُرَى / النامي / المتمكّن" treating سُرَى as a generic adjective for "starter" — this is broken (سُرَى is a proper noun for the brand) and confuses the brand. Rename with proper concept names that match the journey metaphor.

### Bundle 1 (starter)
- **OLD title:** `🌱 السُرَى` (broken)
- **NEW title:** `🌱 البداية`
- **OLD name:** `Starter Bundle` (keep English)
- **OLD description:** `للبدء بحضور رقمي بسيط وفعّال.`
- **NEW description:** `أوّل خطوة على الويب — صفحة هبوط، استضافة، وحملة جاهزة.`
- **Why:** "حضور رقمي بسيط وفعّال" is exactly the AI-cliché filler we're banning. The replacement is concrete.

### Bundle 2 (growth)
- **OLD title:** `🌿 النامي`
- **NEW title:** `🌿 النموّ`
- **OLD name:** `Growth Bundle — الأكثر شيوعاً`
- **NEW name:** `Growth Bundle — الأكثر طلباً`
- **OLD description:** `حضور كامل + SEO + تقارير شهرية. للذي يبحث عن نمو حقيقي.`
- **NEW description:** `حضور كامل، تحسين محركات البحث، وتقارير شهرية — للجهات التي تبني للنمو الطويل.`
- **Why:** "للذي يبحث عن نمو حقيقي" reads judgmental ("real" vs. fake). Reframes positively.

### Bundle 3 (fullstack)
- **OLD title:** `🌳 المتمكّن`
- **NEW title:** `🌳 الإطلاق الكامل`
- **OLD name:** `Full Stack Bundle` (keep)
- **OLD description:** `حضور رقمي متكامل + هوية + موقع كامل + SEO + تقارير.`
- **NEW description:** `هوية، موقع، تحسين محركات بحث، وتقارير — كلّ ما تحتاجه للإطلاق دفعة واحدة.`
- **Why:** Drops banned "متكامل". Reframes around what the bundle does, not what it is.

### Bundle items (unchanged keys, light cleanup)
- `باقة Core السنوية` → keep
- `SEO سنوي` → keep
- `تقارير شهرية` → keep
- `موقع كامل` → keep
- `هوية بصرية` → keep
- `تقارير سنوية` → keep

### Bundle saving copy
- Bundle 2: `خصم 10% على الإضافات` (keep)
- Bundle 3: **OLD:** `خصم 15% + شهر استشارة مجاناً` → **NEW:** `خصم 15% وشهر استشارة هدية`

### Bundle renewal copy
- `تجديد: 3,900 ريال/سنة` (keep)
- `تجديد: ~10,800 ريال/سنة` (keep)
- **OLD:** `تجديد: ~9,600 ريال (بدون one-time)` → **NEW:** `تجديد: ~9,600 ريال (بدون رسوم الإطلاق)`
  - Removes English "one-time" mid-Arabic sentence.

---

## 12) `lib/data.ts` — PRICING_TIERS

### Tier 1: Micro
- `name`: `سُرَى ميكرو` → **NEW:** `ميكرو`
  - **Why:** Prepending "سُرَى" to a tier name reads as if Surā is qualifying the tier ("Sura's Micro") which is fine in English but in Arabic creates a possessive ambiguity. Just "ميكرو" alongside `nameEn: "Micro"` is cleaner.
- `badge`: `جديد` (keep)
- **OLD description:** `للمشاريع الصغيرة جداً التي تريد حضوراً سريعاً بميزانية محدودة.`
- **NEW description:** `لمن يحتاج حضوراً على الويب بسرعة، بميزانية محدودة، وبدون التزام طويل.`
- **Why:** Sounds like a real studio describing the tier, not a generic SaaS pricing page.
- `priceMain`: `4,500` (keep)
- `currency`: `ريال/سنة` (keep)
- **OLD note:** `3 شهور مجاناً مع الالتزام السنوي`
- **NEW note:** `3 شهور هدية مع الاشتراك السنوي`
- **Why:** "مجاناً" → "هدية" warmer. "الالتزام" → "الاشتراك" (less commitment-anxiety, more accurate).
- **Features:**
  - `صفحة هبوط احترافية` → keep
  - `استضافة + دومين لسنة كاملة` → **NEW:** `استضافة ودومين لسنة كاملة`
  - `تأسيس وإدارة حملة تسويقية` → **NEW:** `تأسيس وإدارة حملة Google`
    - **Why:** Concrete platform, not generic "marketing campaign".
  - `دعم فني عبر واتساب` → keep
- **OLD cta:** `احجز ميكرو` → keep

### Tier 2: Launch (highlight)
- `name`: `Launch` (keep)
- **OLD description:** `موقع تسويقي كامل من 5 صفحات، ثنائي اللغة، CMS خفيف.`
- **NEW description:** `موقع تسويقي كامل من 5 صفحات، عربي وإنجليزي، مع لوحة إدارة محتوى خفيفة.`
- **Why:** "ثنائي اللغة" is technically right but stiff; "عربي وإنجليزي" is what people say. Translates "CMS" naturally.
- `priceMain`: `9,500 – 18,750` (keep)
- `currency`: `ريال · مرة واحدة` (keep)
- `note`: `إطلاق خلال 14-21 يوم` → **NEW:** `إطلاق خلال 14–21 يوم` (proper en-dash)
- **Features:**
  - `حتى 5 صفحات مخصّصة` → keep
  - `ثنائي اللغة (عربي + إنجليزي)` → **NEW:** `عربي وإنجليزي بنفس العناية`
    - **Why:** Drops "ثنائي اللغة" jargon and the awkward "+". Asserts a brand value.
  - `نظام إدارة محتوى لا-رأسي` → **NEW:** `نظام إدارة محتوى Headless`
    - **Why:** "لا-رأسي" is a literal calque of "headless" that no Saudi dev actually says. Keep the technical English term — it's what the buyer will Google.
  - `تحليلات GA4 + Search Console` → keep
  - `ضمان 14 يوم بعد الإطلاق` → keep
- `cta`: `احجز Launch` (keep)

### Tier 3: Build
- **OLD description:** `موقع كامل (10+ صفحات) + تحسينات هوية + CMS متقدّم.`
- **NEW description:** `موقع كامل من 10 صفحات أو أكثر، مع تحسينات على الهوية البصرية ولوحة محتوى متقدّمة.`
- **Why:** Reads as a sentence, not a feature list jammed together with "+".
- `priceMain`: `22,500 – 45,000` (keep)
- `currency`, `note`: keep
- **Features:**
  - `10+ صفحات` → **NEW:** `10 صفحات فأكثر`
  - `تحسينات هوية بصرية` → keep
  - `CMS متقدّم + محرّر للفريق` → **NEW:** `لوحة محتوى متقدّمة ومحرّر للفريق`
  - `SEO تقني كامل` → keep
  - `ضمان 30 يوم بعد الإطلاق` → keep
- `cta`: `احجز Build` (keep)

### Tier 4: App
- **OLD description:** `تطبيق ويب MVP بصلاحيات ومميزات أساسية، مبني للإنتاج.`
- **NEW description:** `تطبيق ويب (MVP) بصلاحيات ومزايا مخصّصة، جاهز للإنتاج من اليوم الأول.`
- **Why:** "مميزات" → "مزايا" (correct standard). "أساسية" sounded weak; "مخصّصة" reflects what app tier actually is.
- **Features:**
  - `تسجيل دخول + إدارة مستخدمين` → **NEW:** `تسجيل دخول وإدارة مستخدمين`
  - `3-5 مميزات رئيسية مخصّصة` → **NEW:** `من 3 إلى 5 مزايا رئيسية مخصّصة`
  - `قاعدة بيانات + APIs` → **NEW:** `قاعدة بيانات وواجهات APIs`
  - `نشر تلقائي على Vercel` → keep
  - `وثائق فنية وتدريب` → keep
- `cta`: `تحدث معنا` → **NEW:** `تحدّث معنا` (correct shadda)

### Tier 5: Retainer
- `badge`: `شراكة` (keep — perfect)
- **OLD description:** `شريك المنتج الشهري: يوم تطوير + يوم تصميم أسبوعياً — تحديثات مستمرّة.`
- **NEW description:** `شريكك الشهري للمنتج — يوم برمجة ويوم تصميم كلّ أسبوع، مع تحديثات مستمرّة.`
- **Why:** "تطوير" → "برمجة" (clearer, more honest). Reframes from impersonal "شريك المنتج الشهري" to direct "شريكك".
- `priceMain`: `13,125` (keep)
- `currency`: `ريال · شهرياً` (keep)
- `note`: `اشتراك متجدّد` (keep)
- **Features:**
  - `يوم تطوير / أسبوع` → **NEW:** `يوم برمجة كل أسبوع`
  - `يوم تصميم / أسبوع` → **NEW:** `يوم تصميم كل أسبوع`
  - `أولوية استجابة` → **NEW:** `أولوية في الردّ والتنفيذ`
  - `تقرير شهري للأعمال المُنجزة` → **NEW:** `تقرير شهري بكل ما أنجزناه`
- `cta`: `ابدأ شراكة` → **NEW:** `ابدأ الشراكة`

---

## 13) `lib/data.ts` — ADDONS

- `ترقية لموقع كامل · 2,500 ريال · مرة واحدة` → keep
- `هوية بصرية كاملة · 1,500 ريال · مرة واحدة` → keep
- `SEO سنوي · 5,400 ريال · 3 شهور مجاناً` → **NEW note:** `3 شهور هدية` (consistency with Tier 1 fix)
- `تقارير وتحليلات سنوية · 2,250 ريال · 3 شهور مجاناً` → **NEW note:** `3 شهور هدية`

---

## 14) `lib/data.ts` — SERVICES

### Service 1: مواقع تسويقية
- **OLD description:** `صفحات هبوط ومواقع تعريفية مبنية بـ Next.js — سريعة، responsive، ومُحسّنة لمحركات البحث.`
- **NEW:** `صفحات هبوط ومواقع تعريفية مبنية بـ Next.js — سريعة، تعمل على كل الشاشات، ومُحسّنة لمحركات البحث.`
- **Why:** Mid-sentence transliterated "responsive" is jarring. The Arabic phrase says exactly the same thing more naturally.
- **Bullets:**
  - `تصميم موبايل أوّلاً` → keep
  - `العربية والإنجليزية بنفس العناية` → keep
  - `إطلاق خلال 14-21 يوم` → **NEW:** `إطلاق خلال 14–21 يوم`

### Service 2: تطبيقات ويب
- **OLD description:** `لوحات تحكم، بوابات عملاء، أدوات داخلية، ومنتجات SaaS — مبنية بمعايير الإنتاج.`
- **NEW:** `لوحات تحكم، بوابات عملاء، أدوات داخلية، ومنتجات SaaS — مبنية بمعايير الإنتاج الفعلي.`
- **Why:** "معايير الإنتاج" alone is vague; "الإنتاج الفعلي" (live, real production) is what's meant.
- **Bullets:**
  - `تسجيل دخول + صلاحيات` → **NEW:** `تسجيل دخول وصلاحيات`
  - `قواعد بيانات وأتمتة` → keep
  - `MVP خلال 6-10 أسابيع` → **NEW:** `MVP خلال 6–10 أسابيع`

### Service 3: هوية بصرية
- **OLD description:** `للجهات التي تحتاج هوية متكاملة قبل الإطلاق — لوقو، ألوان، خطوط، دليل استخدام.`
- **NEW:** `للجهات التي تحتاج هوية كاملة قبل الإطلاق — شعار، ألوان، خطوط، ودليل استخدام.`
- **Why:** "متكاملة" is a banned AI-tell. "لوقو" is transliterated; "شعار" is the real Arabic word.
- **Bullets:**
  - `مفاهيم متعدّدة` → **NEW:** `أكثر من مفهوم بصري`
  - `تطبيقات على المواد` → **NEW:** `أمثلة تطبيق على المطبوعات`
  - `ملفات بكل الصيغ` → keep

### Service 4: حملات تسويقية
- **OLD description:** `إدارة حملات Google و Meta — من التأسيس للإطلاق للتحسين الشهري.`
- **NEW:** `إدارة حملات Google وMeta — من تأسيس الحملة إلى إطلاقها وتحسينها شهرياً.`
- **Bullets:**
  - `إعداد الحملة` → keep
  - `إدارة الميزانية` → keep
  - `تقارير شهرية شفّافة` → **NEW:** `تقارير شهرية مفصّلة`
    - **Why:** "شفّافة" overused. "مفصّلة" promises something concrete.

### Service 5: تحسين محركات البحث
- **OLD description:** `SEO تقني + on-page + بناء محتوى — لجلب زيارات عضوية مستدامة.`
- **NEW:** `SEO تقني، على-الصفحة، وبناء محتوى — لزيارات عضوية تدوم.`
- **Why:** "on-page" mid-Arabic reads broken; "على-الصفحة" is the standard Arabic SEO term. "مستدامة" is fine but "تدوم" is punchier.
- **Bullets:**
  - `تدقيق تقني` → keep
  - `تحسين الكلمات المفتاحية` → keep
  - `تقارير شهرية` → keep

### Service 6: تقارير وتحليلات
- **OLD description:** `لوحات Looker Studio + تقارير شهرية مكتوبة + اجتماعات مراجعة دورية.`
- **NEW:** `لوحات Looker Studio، تقارير شهرية مكتوبة، واجتماعات مراجعة ربع سنوية.`
- **Bullets:**
  - `لوحة معلومات مخصّصة` → keep
  - `تقرير شهري مكتوب` → keep
  - `اجتماع ربع سنوي` → keep

---

## 15) `lib/data.ts` — AUDIENCES (tiles)

### SMEs
- `title`: `الشركات الصغيرة` (keep)
- `subtitle`: `SMEs` (keep)
- **OLD description:** `شركات صغيرة تنمو وتحتاج حضور رقمي يجلب عملاء حقيقيين — ليس مجرد موقع جميل.`
- **NEW:** `شركات صاعدة تحتاج موقعاً يجيب عملاء، لا مجرد واجهة جميلة.`
- **Why:** "يجلب" → "يجيب" (Saudi register). Tighter, less marketing-speak.
- `examples`: `عيادات / مطاعم / خدمات احترافية / متاجر صغيرة` (keep)

### Charities
- **OLD description:** `جمعيات تحتاج تدفّق تبرّع يعمل على الموبايل، وتقارير أثر تنشرها بدون فريق تقني.`
- **NEW:** `جمعيات تحتاج تجربة تبرّع تشتغل على الجوّال، وتقارير أثر تنشرها بنفسها بدون فريق تقني.`
- **Why:** "تدفّق تبرّع" is literal calque of "donation flow"; "تجربة تبرّع" is what Saudi NGO directors actually say. "الموبايل" → "الجوّال" (matches the rest of the site).
- `examples`: `جمعيات تنموية / أوقاف / مبادرات اجتماعية` (keep)

### Manufacturers
- **OLD description:** `مصانع تريد بوابة B2B تُغني الموزّعين عن مكالمات السؤال عن المخزون.`
- **NEW:** `مصانع تريد بوّابة B2B تُغني موزّعيها عن الاتصال للسؤال عن المخزون والأسعار.`
- **Why:** Adds الأسعار (the other actual reason distributors call). "تُغني الموزّعين" → "تُغني موزّعيها" (تجنّب التكرار with "مكالمات").
- `examples`: `بوابات الموزّعين / كتالوجات منتجات / أنظمة طلبات` → **NEW:** `بوّابات الموزّعين / كتالوجات منتجات / أنظمة طلبات`
  - **Why:** Consistent ـوّ in "بوّابات" with the description.

---

## 16) `lib/data.ts` — AUDIENCE_OFFERS

### 16.1 SMEs offer

- `title`: `سُرَى للشركات الصغيرة` (keep)
- `heroLine`: `موقعك = بائعك الأفضل. لو يشتغل.`
  - **NEW:** `موقعك هو أفضل بائع عندك — لو يشتغل صحّ.`
  - **Why:** The `=` reads like a tweet, not headline copy. The replacement preserves the punch in flowing Arabic.
- **OLD heroDescription:** `أغلب الشركات الصغيرة تخسر عملاء يومياً لأن موقعها لا يحوّل أو لا يفتح على الجوّال. نبني لك حضوراً يشتغل من اليوم الأول — موقع + حملة + متابعة.`
- **NEW:** `أغلب الشركات الصغيرة تخسر عملاء كل يوم لأنّ موقعها لا يحوّل، أو لا يفتح من الجوّال أصلاً. نبني لك حضوراً يشتغل من اليوم الأول: موقع، وحملة، ومتابعة شهرية.`

#### SMEs pains
1. `العميل يبحث ولا يجدك` (keep — strong)
   - **OLD desc:** `موقع قديم بدون SEO = خسارة 5-10 عملاء أسبوعياً لمنافس بموقع شغّال.`
   - **NEW:** `موقع قديم بلا تحسين بحث يعني خسارة 5 إلى 10 عملاء كلّ أسبوع — لصالح منافس موقعه شغّال.`
2. `الموبايل معطّل أو بطيء` → **NEW title:** `الموقع بطيء أو ما يفتح من الجوّال`
   - **OLD desc:** `80% من زيارات السوق السعودي من الجوّال. لو موقعك ما يفتح بسرعة، خسرت العميل قبل ما يقرأ.`
   - **NEW:** `80% من زيارات السوق السعودي من الجوّال. لو موقعك تأخّر ثوانٍ، خسرت العميل قبل أن يقرأ سطراً واحداً.`
3. `الموقع ما يحوّل` (keep)
   - **OLD desc:** `موقع جميل بدون CTA واضح أو نموذج بسيط = زيارات بلا عملاء.`
   - **NEW:** `موقع جميل بلا دعوة واضحة لاتخاذ خطوة، أو بلا نموذج سهل، يعني زيارات لا تتحوّل لعملاء.`
   - **Why:** "CTA" mid-Arabic is jargon; "دعوة لاتخاذ خطوة" is the Arabic UX term.

#### SMEs solutions
1. `صفحة هبوط أو موقع 5 صفحات` (keep)
   - **OLD desc:** `مبني على Next.js، سريع، يفتح خلال ثانيتين على 4G سعودي.`
   - **NEW:** `مبني بـ Next.js، يفتح خلال ثانيتين على شبكة 4G السعودية.` (small tighten)
2. `حملة Google + Meta معدّة لك` → **NEW title:** `حملة Google وMeta جاهزة`
   - **OLD desc:** `إعداد الحملة + إدارتها شهرياً + تقرير شفّاف عن كل ريال.`
   - **NEW:** `نُؤسّسها، ونُديرها شهرياً، ونعطيك تقريراً مفصّلاً عن كلّ ريال أُنفق.`
3. `متابعة شهرية وتطوير` → **NEW title:** `متابعة شهرية وتحسين مستمرّ`
   - **OLD desc:** `تقرير شهري بأرقام واضحة + تعديلات على الحملة بناءً عليها.`
   - **NEW:** `تقرير شهري بأرقام واضحة، وتعديلات على الحملة بناءً عليه.`

#### SMEs recommended bundle
- **OLD name:** `🌿 سُرَى Growth للشركات الصغيرة`
- **NEW name:** `🌿 باقة النموّ للشركات الصغيرة`
- **Why:** Drops "سُرَى" prepended to a tier name (same issue as Pricing tier 1). Aligns with renamed BUNDLE_SCENARIOS.
- **Items:**
  - `باقة Core سنوية (صفحة هبوط + استضافة + دومين + حملة)` → **NEW:** `باقة Core السنوية: صفحة هبوط، استضافة، دومين، وحملة Google`
  - `SEO سنوي (تحسين تقني + on-page + تقرير شهري)` → **NEW:** `تحسين محركات بحث سنوي: تقني، على-الصفحة، وتقرير شهري`
  - `تقارير وتحليلات سنوية` (keep)
  - `🎁 Google Business setup مجاناً` → **NEW:** `🎁 إعداد ملف Google Business هدية`
- `priceMain`: `11,385` (keep)
- **OLD priceNote:** `ريال/سنة · بدلاً من 12,150 (خصم 10% على الإضافات)`
- **NEW priceNote:** `ريال/سنة · بدل 12,150 — خصم 10% على الإضافات`
- **OLD bonus:** `إعداد ملف Google Business + دمج Google Analytics 4 مجاناً`
- **NEW bonus:** `إعداد ملف Google Business، وربط Google Analytics 4 — كلّها هدية.`

#### SMEs examples
- `عيادات / مطاعم / خدمات احترافية / متاجر صغيرة` — sector labels keep.
- Cases:
  - `نموذج حجز مواعيد + صفحة خدمات لكل تخصّص` → **NEW:** `نموذج حجز مواعيد، وصفحة خدمات لكلّ تخصّص.`
  - `قائمة طعام تفاعلية + خريطة + رقم حجز` → **NEW:** `قائمة طعام تفاعلية، خريطة الموقع، ورقم حجز مباشر.`
  - `صفحات لكل خدمة + قسم 'احجز استشارة'` → **NEW:** `صفحة لكل خدمة، وقسم لحجز استشارة.`
  - `كاتالوج منتجات + روابط واتساب للطلب` → **NEW:** `كتالوج منتجات، وروابط واتساب للطلب المباشر.` (also fixes كاتالوج → كتالوج)

#### SMEs CTAs
- `ctaPrimary`: `احجز مكالمة استكشاف مجانية` (keep)
- `ctaSecondary`: `شاهد كل الباقات` → **NEW:** `اطّلع على كلّ الباقات`

---

### 16.2 Charities offer

- `title`: `سُرَى للجمعيات الخيرية` (keep)
- **OLD heroLine:** `كل تبرّع ما يصل = تأثير ما يحدث.`
- **NEW heroLine:** `كل تبرّع ما يصل، أثر ما يحدث.`
- **Why:** Drops the `=` (tweet syntax). Comma flows better in Arabic.
- **OLD heroDescription:** `نبني للجمعيات تدفّقات تبرّع تشتغل على الجوّال، وصفحات أثر تنشرها بنفسك، وتقارير شفّافة تبني الثقة مع المتبرّعين والمجلس.`
- **NEW:** `نبني للجمعيات صفحات تبرّع تشتغل على الجوّال، وصفحات أثر تنشرها بنفسك، وتقارير تبني ثقة المتبرّعين والمجلس.`
- **Why:** "تدفّقات تبرّع" calque dropped. "تقارير شفّافة" reframed to what the reports actually do.

#### Charities pains
1. `نموذج التبرّع معطّل على الموبايل` → **NEW:** `نموذج التبرّع لا يشتغل على الجوّال`
   - **OLD desc:** `أغلب المتبرّعين من الجوّال — ونموذج التبرّع المعقّد = خسارة 50% من المحاولات.`
   - **NEW:** `أغلب المتبرّعين يدخلون من الجوّال — نموذج تبرّع معقّد يخسر لك نصف المحاولات.`
2. `صعوبة نشر تقارير الأثر` (keep)
   - **OLD desc:** `كل تحديث صفحة يحتاج فريق تقني = تقارير تتأخر = ثقة المتبرّعين تتراجع.`
   - **NEW:** `كل تحديث صفحة يحتاج فريقاً تقنياً، فتتأخّر التقارير، وتتراجع ثقة المتبرّعين.`
3. `ميزانية محدودة، مساءلة عالية` (keep)
   - **OLD desc:** `تحتاج أسعار ثابتة وشفّافة — لا 'ابتداءً من' ولا فواتير مفاجئة.`
   - **NEW:** `تحتاجين أسعاراً ثابتة معلنة — لا "ابتداءً من"، ولا فواتير مفاجئة.`
   - **Why:** Many Saudi charities are led by women — using `تحتاجين` (or keeping neutral `تحتاج` — both work, but the page reads warmer either way). NOTE: founder can keep `تحتاج` if he prefers neutral; the rest of the fix is required.

#### Charities solutions
1. `صفحة تبرّع مُحسّنة للجوّال` (keep)
   - **OLD desc:** `تكامل مع Stripe / Paytabs، تبرّع متكرّر، إيصال آلي بالعربية والإنجليزية.`
   - **NEW:** `ربط مع Stripe أو Paytabs، تبرّع متكرّر، وإيصال آلي بالعربية والإنجليزية.`
   - **Why:** "تكامل" → "ربط" (Saudi business word).
2. `نظام نشر تقارير الأثر` (keep)
   - **OLD desc:** `محرّر بسيط لفريقك — أرقام، صور، قصص ميدانية بدون أي كود.`
   - **NEW:** `محرّر سهل لفريقك — أرقام، صور، وقصص ميدانية بلا أي كود.`
3. `ثنائي اللغة من اليوم الأول` → **NEW title:** `عربي وإنجليزي من اليوم الأول`
   - **OLD desc:** `للوصول للمتبرّعين العرب والأجانب — هذا أكثر فرق نلاحظه.`
   - **NEW:** `للوصول للمتبرّعين العرب والأجانب — هذا أكثر فرق نشوفه يصنع نتيجة.`

#### Charities recommended bundle
- **OLD name:** `💚 سُرَى Cause للجمعيات`
- **NEW name:** `💚 باقة الأثر للجمعيات`
- **Items:**
  - `باقة Launch — موقع كامل ثنائي اللغة` → **NEW:** `باقة Launch — موقع كامل بالعربية والإنجليزية`
  - `صفحة تبرّع مع Stripe/Paytabs` → **NEW:** `صفحة تبرّع مربوطة بـ Stripe أو Paytabs`
  - `قالب تقارير أثر شهرية` → **NEW:** `قالب جاهز لتقارير الأثر الشهرية`
  - `SEO تقني للوصول العضوي` (keep)
  - `🎁 خصم 15% خاص للجمعيات المسجّلة` → **NEW:** `🎁 خصم 15% خاص للجمعيات المسجّلة رسمياً`
- `priceMain`: `8,075 – 15,940` (keep)
- **OLD priceNote:** `ريال · بعد خصم 15% للجمعيات المسجّلة (من Launch tier)`
- **NEW priceNote:** `ريال · بعد خصم 15% للجمعيات المسجّلة — من سعر باقة Launch.`
- **OLD bonus:** `قالب 'تقرير الأثر السنوي' جاهز + دمج مع Mailchimp/Sendinblue لإشعار المتبرّعين`
- **NEW bonus:** `قالب جاهز لـ"تقرير الأثر السنوي"، وربط مع Mailchimp أو Sendinblue لإشعار المتبرّعين بكلّ تحديث.`

#### Charities examples
- Cases:
  - `صفحات مشاريع + خريطة استفادة + تبرّع لمشروع محدّد` → **NEW:** `صفحات للمشاريع، خريطة المستفيدين، وتبرّع لمشروع بعينه.`
  - `حاسبة وقف + شارات أنواع الوقف + تقرير سنوي` → **NEW:** `حاسبة وقف، شارات أنواع الوقف، وتقرير سنوي.`
  - `صفحة حملة + عدّاد متبرّعين + قصص ميدانية` → **NEW:** `صفحة للحملة، عدّاد للمتبرّعين، وقصص ميدانية.`

#### Charities CTAs
- `ctaPrimary`: `احجز جلسة تشخيص مجانية` → **NEW:** `احجز جلسة تشخيص مجانية` (keep — strong)
- `ctaSecondary`: `اطّلع على الباقات` (keep — already corrected)

---

### 16.3 Manufacturers offer

- `title`: `سُرَى للمصانع والصناعات` (keep)
- **OLD heroLine:** `موزّعك يحتاج بوّابة، لا مكالمة.`
- **NEW heroLine:** `موزّعك يحتاج بوّابة، لا مكالمة.` (keep — punchy and perfect)
- **OLD heroDescription:** `موزّعك يتّصل 10 مرات يومياً للسؤال عن المخزون والأسعار. نبني لك بوّابة B2B تختصر اتصالاته، تظهر المخزون لحظياً، وتستقبل طلباته أوتوماتيكياً.`
- **NEW:** `موزّعك يتّصل بك عشر مرات يومياً ليسأل عن المخزون والأسعار. نبني لك بوّابة B2B تختصر اتصالاته، تعرض المخزون لحظياً، وتستقبل طلباته تلقائياً.`
- **Why:** "أوتوماتيكياً" → "تلقائياً" (cleaner Arabic). "تظهر المخزون" → "تعرض المخزون" (correct verb).

#### Manufacturers pains
1. `مكالمات موزّعين تُعطّل العمليات` → **NEW:** `مكالمات الموزّعين تُعطّل خطّ الإنتاج`
   - **OLD desc:** `كل موزّع يتّصل 5-10 مرات أسبوعياً للسؤال عن مخزون أو سعر = ساعات يومياً مهدورة.`
   - **NEW:** `كل موزّع يتّصل من 5 إلى 10 مرات في الأسبوع للسؤال عن مخزون أو سعر — يعني ساعات تضيع يومياً.`
2. `كتالوج منتجات قديم أو ناقص` (keep)
   - **OLD desc:** `ملف Excel أو PDF عمره سنتين = موزّع يطلب منتج غير متوفّر = إحراج.`
   - **NEW:** `ملف Excel أو PDF عمره سنتان يعني موزّعاً يطلب منتجاً غير متوفّر، ويعني إحراجاً لك معه.`
3. `ERP صلب لا يقدّم تجربة عميل` → **NEW:** `نظام ERP يخدم العمليات الداخلية، لا الموزّع`
   - **OLD desc:** `SAP/Odoo/Oracle ممتاز للداخل، فاشل كواجهة لموزّع.`
   - **NEW:** `SAP وOdoo وOracle ممتازة للداخل، لكنّها ثقيلة كواجهة بين المصنع والموزّع.`
   - **Why:** "فاشل" is harsh and judgmental; "ثقيلة" is honest and respectful of clients who already invested in these ERPs.

#### Manufacturers solutions
1. `بوّابة B2B بصلاحيات` (keep)
   - **OLD desc:** `تسجيل دخول للموزّع، مخزون لحظي، طلب مباشر، إشعارات للمدير.`
   - **NEW:** `تسجيل دخول للموزّع، مخزون لحظي، طلب مباشر، وإشعارات فورية للمدير.`
2. `كاتالوج منتجات يُحدَّث ذاتياً` → **NEW:** `كتالوج منتجات يتحدّث ذاتياً`
   - **OLD desc:** `يتزامن مع ERP الخاص بك (SAP/Odoo) أو يُحدَّث من لوحة إدارة بسيطة.`
   - **NEW:** `يتزامن مع نظام ERP عندك (SAP أو Odoo)، أو يُحدَّث من لوحة إدارة سهلة.`
3. `تقارير للمدير والموزّع` (keep)
   - **OLD desc:** `المدير يرى أداء كل موزّع، الموزّع يرى تاريخ طلباته وفواتيره.`
   - **NEW:** `المدير يشوف أداء كلّ موزّع، والموزّع يشوف تاريخ طلباته وفواتيره.`
   - **Why:** "يرى" is correct MSA, "يشوف" is the Saudi business register that matches the rest of this section.

#### Manufacturers recommended bundle
- **OLD name:** `🏭 سُرَى Industry للمصانع`
- **NEW name:** `🏭 باقة المصنع المتكاملة`
- Wait — "متكاملة" is banned. **Revised NEW name:** `🏭 باقة المصنع — موقع وبوّابة موزّعين`
- **Items:**
  - `باقة Build — موقع تعريفي كامل` (keep)
  - `باقة App — بوّابة B2B للموزّعين` (keep)
  - `تكامل مع ERP الحالي (SAP / Odoo / Oracle)` → **NEW:** `ربط مع نظام ERP الحالي (SAP أو Odoo أو Oracle)`
  - `🎁 30 يوم دعم تأهيل الموزّعين مجاناً` → **NEW:** `🎁 30 يوم دعم لتأهيل موزّعيك على البوّابة — هدية`
- `priceMain`: `66,937 – 149,812` (keep)
- **OLD priceNote:** `ريال · حسب التعقيد · Build + App ضمن خصم 15%`
- **NEW priceNote:** `ريال · حسب حجم المشروع · باقتا Build وApp بخصم 15%`
- **OLD bonus:** `30 يوم دعم لتأهيل أوّل 10 موزّعين على البوّابة + جلسة تدريب مسجّلة`
- **NEW bonus:** `30 يوم دعم لتأهيل أوّل 10 موزّعين على البوّابة، وجلسة تدريب مسجّلة يرجعون إليها لاحقاً.`

#### Manufacturers examples
- Cases:
  - `كتالوج SKU + بوّابة طلب موزّعين + تتبّع شحنات` → **NEW:** `كتالوج SKU، بوّابة طلب للموزّعين، وتتبّع للشحنات.`
  - `حاسبة كميات + عرض أسعار آني + موافقة مدير` → **NEW:** `حاسبة كميات، عرض أسعار فوري، وموافقة المدير.`
  - `كاتالوج مواصفات + مخطّطات + طلب عيّنات` → **NEW:** `كتالوج بالمواصفات، مخطّطات تقنية، وطلب عيّنات.`

#### Manufacturers CTAs
- `ctaPrimary`: `احجز جلسة تشخيص للمصنع` (keep — concrete and good)
- `ctaSecondary`: `تحدّث مع مهندس حلول` → **NEW:** `تحدّث مع مهندس`
  - **Why:** "مهندس حلول" is a corporate-tech title that doesn't carry over well in this register. Just "مهندس" is humbler and clearer.

---

## 17) `app/work/page.tsx`

### `metadata.title`
- `أعمالنا — سُرَى` (keep)

### `metadata.description`
- **OLD:** `دراسات حالة العملاء — قريباً.`
- **NEW:** `دراسات حالة عملائنا — قريباً.`

### Hero eyebrow
- `أعمالنا` (keep)

### Hero H1
- **OLD:** `دراسات الحالة قيد البناء.`
- **NEW:** `دراسات الحالة قيد البناء — مثل المشاريع نفسها.`
- **Why:** A bit of confident humor that humanizes the "we're new" message.

### Hero subhead
- **OLD:** `سُرَى شركة حديثة. مشاريع عملائنا الأولى قيد التطوير — وسننشر تفاصيلها هنا خلال الأشهر القادمة. للوقت الحالي، نعرض ما يعمل عليه فريقنا الآن.`
- **NEW:** `سُرَى استوديو حديث. مشاريع عملائنا الأولى قيد البناء — ننشر تفاصيلها هنا خلال الأشهر القادمة. لحدّ الآن، نعرض لك ما نشتغل عليه.`
- **Why:** "شركة حديثة" → "استوديو حديث" (matches positioning). "للوقت الحالي" is calque; "لحدّ الآن" is Saudi register.

### Placeholders (case studies)
1. `إندماج` (keep — looks like a project name)
2. `سياج الحدود` (keep — looks like a project name)
3. `عميل في الطريق` → **NEW:** `مشروع قادم`
   - **Why:** "عميل في الطريق" is awkward placeholder language; "مشروع قادم" is clean.
- `موقع تعريفي` (keep)
- `حملة تسويقية` → **NEW:** `حملة Google` (concrete)
- `قريباً` (keep)
- `قيد التطوير` → **NEW:** `قيد البناء` (consistent with hero)

### Final CTA eyebrow
- **OLD:** `ابدأ معنا` (keep)

### Final CTA h2
- **OLD:** `نبني أوّل دراسات الحالة الآن.`
- **NEW:** `نبني أوّل قصص النجاح الآن.`
- **Why:** "دراسات الحالة" is good for the metadata but in a CTA, "قصص النجاح" pulls the visitor in emotionally.

### Final CTA paragraph
- **OLD:** `إن كنت تبحث عن شريك يهتمّ بمشروعك، نحن نختار عملاءنا بعناية ونبني بحرفية. احكي لنا عن جهتك ونرجع لك بمقترح يناسب ميزانيتك خلال 24 ساعة.`
- **NEW:** `لو تبحث عن شريك يهتمّ بمشروعك بقدر ما تهتمّ به أنت، نختار عملاءنا بعناية ونبني بإتقان. احكي لنا عن جهتك ونرجع لك بمقترح يناسب ميزانيتك خلال 24 ساعة.`
- **Why:** "إن كنت" → "لو" (Saudi register). "حرفية" → "إتقان" (warmer). The new comparison line is a real Saudi-business sentiment.

### Final CTAs
- `احجز مكالمة استكشاف` (keep)
- `شاهد الباقات` → **NEW:** `اطّلع على الباقات`

---

## 18) `app/about/page.tsx`

### `metadata.title`
- `من نحن — سُرَى` (keep)

### `metadata.description`
- **OLD:** `قصة سُرَى ورسالتها وفريقها — لماذا نُرافقك في الرحلة.`
- **NEW:** `قصة سُرَى ورسالتها وفريقها — ولماذا نُرافقك في الرحلة.` (small `و` adds flow)

### Hero eyebrow
- `من نحن` (keep)

### Hero H1
- **OLD:** `استوديو يبني للنامين، ليس للكبار.`
- **NEW:** `استوديو يبني للجهات الصاعدة، لا للعمالقة.`
- **Why:** "النامين" applied to businesses reads slightly awkward (it usually refers to children). "الصاعدة" matches the brand language ("Surā = the one who rises"). "للكبار" → "للعمالقة" is a sharper, more vivid contrast.

### Hero paragraph
- **OLD:** `سُرَى كلمة عربية تعني الصاعد والنامي. نختار اسمنا لأنّنا نؤمن أنّ الشركات الصاعدة والجمعيات والمصانع تستحقّ نفس عناية التصميم والبرمجة التي تحظى بها الشركات الكبيرة — بسعر يناسبها.`
- **NEW:** `سُرَى في العربية هي السير في الليل برفقة — جذرٌ يحمل معنى الرحلة الهادئة المقصودة. اخترنا الاسم لأنّنا نؤمن أنّ الشركات الصاعدة والجمعيات والمصانع تستحقّ نفس عناية التصميم والبرمجة التي تحظى بها الشركات الكبرى — بسعر يناسبها.`
- **Why:** **CRITICAL:** the original etymology was wrong. سُرَى means "traveling by night" / "a quiet purposeful journey" — that's the LOCKED brand metaphor in BRAND-GUIDELINES.md §3. The site was telling clients the wrong meaning. The replacement gives the correct etymology and ties to the journey metaphor. **NOTE for engineer:** the inline `<em>` highlights for "الصاعد" and "النامي" must be re-pointed; the highlighted phrase should now be "السير في الليل برفقة".

### Mission / Vision panels

#### Mission eyebrow + h2 + body
- Eyebrow: `رسالتنا` (keep)
- **OLD h2:** `نبني منتجات رقمية تنمو مع عملائنا.`
- **NEW h2:** `نبني منتجات رقمية تنمو مع عملائنا.` (keep — clean)
- **OLD body:** `بسرعة، وبجمال، وبدون مسرحيات الوكالات. نختار عملاءنا بعناية، ونقول لا لمن لا نقدر نضمن نجاحه.`
- **NEW body:** `بسرعة، وبجمال، وبلا تعقيد إداري. نختار عملاءنا بعناية، ونقول لا لمن لا نقدر نضمن لهم النتيجة.`
- **Why:** "مسرحيات الوكالات" is banned. "بلا تعقيد إداري" carries the same anti-agency-bureaucracy spirit naturally. "نقدر نضمن نجاحه" → "نقدر نضمن لهم النتيجة" (clearer and less arrogant).

#### Vision
- Eyebrow: `رؤيتنا` (keep)
- **OLD h2:** `أن يصبح الويب العربي بنفس جودة الويب اللاتيني.`
- **NEW h2:** `أن يصبح الويب العربي بنفس جودة الويب الإنجليزي.`
- **Why:** "اللاتيني" is academically correct but cold; "الإنجليزي" is what clients understand and is the real comparison.
- **OLD body:** `من الطباعة إلى تجربة الموبايل إلى سرعة التحميل — كل تفصيلة بنفس العناية.`
- **NEW body:** `من الطباعة، إلى تجربة الجوّال، إلى سرعة التحميل — كلّ تفصيلة بنفس العناية.` (الموبايل → الجوّال for consistency)

### Five principles section
- Eyebrow: `قيمنا` (keep)
- **OLD h2:** `خمس قيم نُجادل عليها`
- **NEW h2:** `خمس قيم لا نتنازل عنها`
- **Why:** "نُجادل عليها" reads quarrelsome. "لا نتنازل عنها" is the right register.

#### Principle 1
- **OLD:** `نُسلّم الأصغر فالأكبر`
- **NEW:** `نُسلِّم الصغير قبل الكبير`
- **Why:** "الأصغر فالأكبر" parses oddly. "الصغير قبل الكبير" is what a Saudi PM would say.

#### Principle 2
- **OLD:** `النتائج لا الساعات` (keep — perfect)

#### Principle 3
- **OLD:** `العربية والإنجليزية متساويتان` (keep — clean and a core brand value)

#### Principle 4
- **OLD:** `المحفظة هي البائع`
- **NEW:** `العمل المُنجَز هو دليلنا`
- **Why:** "المحفظة" reads finance/wallet, not portfolio. "هي البائع" is calque ("portfolio sells"). The replacement is the actual meaning.

#### Principle 5
- **OLD:** `نقول لا لما لا يناسب`
- **NEW:** `نقول "لا" لما لا يناسبنا` (small grammar fix + quote marks for emphasis)

### Three pillars section (this re-displays VALUE_PILLARS)
- **OLD eyebrow:** `ثلاث قيم نبني عليها`
- **NEW eyebrow:** `ثلاث قيم نبني عليها` (keep)
- **OLD h2:** `سريع · جميل · بلا مسرحيات`
- **NEW h2:** `سريع · جميل · بلا تعقيد`
- **Why:** Critical fix — must match the renamed VALUE_PILLARS pillar 3.

### Founder section
- Eyebrow: `المؤسس` (keep)
- Name: `نور الدين فرحات` (keep)
- **OLD title:** `مؤسس ومدير تنفيذي · مهندس برمجيات ومصمّم منتجات`
- **NEW title:** `المؤسس والمدير التنفيذي · مهندس برمجيات ومصمّم منتجات`
- **Why:** Indefinite "مؤسس ومدير تنفيذي" reads weird as a title slug; the definite form is correct here.

#### Founder paragraph 1
- **OLD:** `بدأت بناء المنتجات الرقمية قبل أن يكون لها اسم — من سن مبكرة، حيث كانت أوّل تجاربي مع البرمجة في مرحلة الإعدادية. منذ ذلك الحين، حملت فضولاً لما يجعل المنتج جميلاً وقابلاً للاستخدام في نفس الوقت — وهذا الفضول قادني إلى دراسة هندسة البرمجيات وتصميم تجربة المستخدم بشكل متوازٍ.`
- **NEW:** `بدأتُ ببناء المنتجات الرقمية قبل أن يكون لها اسم — من سنّ صغيرة، إذ كانت أوّل تجاربي مع البرمجة في المرحلة المتوسّطة. منذ ذلك الحين حملتُ فضولاً تجاه ما يجعل المنتج جميلاً وقابلاً للاستخدام في الوقت نفسه — وهذا الفضول قادني إلى دراسة هندسة البرمجيات وتصميم تجربة المستخدم في وقت واحد.`
- **Why:** "حيث" misused. "مرحلة الإعدادية" is Egyptian/Levantine education term; Saudi system uses "المرحلة المتوسّطة". "بشكل متوازٍ" is the correct calque but "في وقت واحد" is more direct.

#### Founder paragraph 2
- **OLD:** `قبل سُرَى، عملت على منتجات داخلية لمؤسسات في القطاع الخاص والقطاع غير الربحي — لوحات تحكم، بوابات عملاء، تطبيقات داخلية تخدم فرقاً تتجاوز مئات الموظفين. تعلّمت في هذه التجارب أن أصعب جزء في البرمجة ليس الكود — بل فهم ما يحتاجه المستخدم فعلاً.`
- **NEW:** `قبل سُرَى، اشتغلتُ على منتجات داخلية لجهات في القطاع الخاص والقطاع غير الربحي — لوحات تحكم، بوّابات عملاء، وتطبيقات داخلية تخدم فِرَقاً تتجاوز مئات الموظفين. تعلّمتُ في تلك التجارب أنّ أصعب جزء في البرمجة ليس الكود — بل فهم ما يحتاجه المستخدم فعلاً.`
- **Why:** "عملت على" → "اشتغلتُ على" (warmer). "مؤسسات" → "جهات" (matches the rest of the site's vocab).

#### Founder paragraph 3
- **OLD:** `أسّستُ سُرَى لأنّني رأيت فجوة واضحة: الشركات الصغيرة والجمعيات والمصانع في منطقتنا تستحقّ نفس عناية التصميم والبرمجة التي تحظى بها الشركات الكبيرة — لكن بسعر يناسبها وزمن يحترمها. أُلزم نفسي ببناء أوّل ثلاث مشاريع لكل عميل بيدي شخصياً، لأنّ الجودة تُنقَل بالعدوى، لا بالتعليمات.`
- **NEW:** `أسّستُ سُرَى لأنّني رأيت فجوة واضحة: الشركات الصغيرة والجمعيات والمصانع في منطقتنا تستحقّ نفس عناية التصميم والبرمجة التي تحظى بها الشركات الكبرى — لكن بسعر يناسبها وزمن يحترم وقتها. أُلزم نفسي ببناء أوّل ثلاثة مشاريع لكلّ عميل بيدي شخصياً، لأنّ الجودة تُنقَل بالقدوة، لا بالتعليمات.`
- **Why:** "ثلاث مشاريع" → "ثلاثة مشاريع" (correct masculine number agreement). "بالعدوى" reads weird now post-pandemic; "بالقدوة" is the actual meaning. "زمن يحترمها" → "زمن يحترم وقتها" (clearer).

#### Founder paragraph 4
- **OLD:** `أهتمّ بـ: الطباعة العربية، تجربة الموبايل الأولى، أتمتة الأعمال بالذكاء الاصطناعي، المشاريع التي تخدم الفرد العادي.`
- **NEW:** `أهتمّ بـ: الطباعة العربية، تجربة الجوّال أولاً، أتمتة الأعمال بالذكاء الاصطناعي، والمشاريع التي تخدم الفرد العادي.`
- **Why:** "الموبايل" → "الجوّال". Adds "و" before last item for natural list flow.

### Founder CTAs
- `تحدّث مع نور الدين` (keep)
- `LinkedIn` (keep)

---

## 19) `app/contact/page.tsx`

### `metadata.title`
- `تواصل معنا — سُرَى` (keep)

### `metadata.description`
- **OLD:** `احجز مكالمة استكشاف مجانية أو راسلنا عبر النموذج أو واتساب.`
- **NEW:** `احجز مكالمة استكشاف مجانية، أو راسلنا عبر النموذج أو واتساب.`

### Hero eyebrow
- `تواصل معنا` (keep)

### Hero H1
- `خلّينا نسمع منك.` (keep — this is the gold-standard Saudi register we want everywhere)

### Hero subhead
- **OLD:** `مكالمة استكشاف مجانية مدّتها 30 دقيقة. نسمع، نفهم، ونرجع لك بمقترح خلال 24 ساعة.`
- **NEW:** `مكالمة استكشاف مجانية، 30 دقيقة. نسمع منك، نفهم وضعك، ونرجع لك بمقترح خلال 24 ساعة.`
- **Why:** Tighter rhythm. Consistent with the homepage final CTA copy.

### Sidebar — Direct contact heading
- **OLD:** `طرق التواصل المباشر`
- **NEW:** `تواصل مباشر`
- **Why:** Three words → two. "طرق التواصل المباشر" reads bureaucratic.

### WhatsApp label
- `واتساب · WhatsApp` (keep)

### Email label
- `بريد إلكتروني` (keep)

### Response times card heading
- **OLD:** `أوقات الاستجابة` (keep)

### Response times list
- **OLD:** `البريد: خلال 24 ساعة` / `واتساب: خلال 4 ساعات` / `النموذج: خلال 12 ساعة` (keep)

### Working hours
- **OLD:** `ساعات العمل: السبت - الخميس · 9 صباحاً - 6 مساءً (السعودية)`
- **NEW:** `ساعات العمل: السبت إلى الخميس · 9 صباحاً – 6 مساءً (توقيت السعودية)`
- **Why:** `-` between weekdays reads as a typo. `إلى` is correct. "توقيت السعودية" is clearer than just "(السعودية)".

### Same string in `lib/data.ts` `CONTACT.workingHours`
- Apply the same fix as above.

---

## 20) `lib/data.ts` — CONTACT

- `whatsappDisplay`: `تواصل عبر واتساب` (keep)
- `email`: `noureddin@sura.studio` (keep)
- `domain`: `sura.studio` (keep)
- `workingHours`: see §19 fix above.

---

## 21) `app/privacy/page.tsx`

### `metadata.title`
- `سياسة الخصوصية — سُرَى` (keep)

### `metadata.description`
- `كيف نتعامل مع بياناتك في سُرَى.` (keep)

### Eyebrow
- `الخصوصية` (keep)

### H1
- `سياسة الخصوصية` (keep)

### Last-updated
- `آخر تحديث: 2026-06-12` (keep — engineer to update date when re-publishing)

### "باختصار" section
- H2: `باختصار` (keep)
- **OLD:** `في سُرَى، نجمع أقلّ قدر من البيانات الذي يسمح لنا بخدمتك. لا نبيع بياناتك، لا نشاركها مع جهات خارجية لأغراض تسويقية، ولا نتتبّعك عبر المواقع الأخرى.`
- **NEW:** `في سُرَى، نجمع أقلّ قدر من البيانات يلزمنا لخدمتك. لا نبيع بياناتك، ولا نشاركها مع جهات خارجية لأغراض تسويقية، ولا نتتبّعك عبر مواقع أخرى.`
- **Why:** "الذي يسمح" reads as an Englishism ("the data that allows"); "يلزمنا" is the natural Arabic phrasing.

### "ما الذي نجمعه" section
- H2: `ما الذي نجمعه` → **NEW:** `ما نجمعه`
- Items:
  - **OLD:** `نموذج التواصل: الاسم، البريد الإلكتروني، الواتساب (اختياري)، الباقة المهتم بها، رسالتك. نستخدمها فقط للتواصل معك ومتابعة طلبك.`
  - **NEW:** `نموذج التواصل: الاسم، البريد الإلكتروني، الواتساب (اختياري)، الباقة التي تهمّك، ورسالتك. نستخدمها فقط للتواصل معك ومتابعة طلبك.`
  - **OLD:** `تحليلات الموقع: أعداد زوّار مجهولة الهوية (لا نتتبّع الأشخاص). نستخدم Vercel Analytics بدون cookies.`
  - **NEW:** `تحليلات الموقع: أعداد زوّار مجهولة الهوية (لا نتتبّع الأشخاص). نستخدم Vercel Analytics بدون ملفات تعريف ارتباط (cookies).`
  - **OLD:** `سجلّات الخادم: عنوان IP وUser-Agent لمدّة 30 يوم — لأغراض الأمان والحماية من البريد المزعج.`
  - **NEW:** `سجلّات الخادم: عنوان IP ومتصفّح الزائر (User-Agent) لمدّة 30 يوماً — للأمان والحماية من البريد المزعج.`

### "ما الذي لا نجمعه" section
- H2: `ما الذي لا نجمعه` → **NEW:** `ما لا نجمعه`
- Items:
  - `لا cookies للتتبّع` → **NEW:** `لا ملفات تعريف ارتباط (cookies) للتتبّع`
  - `لا facebook pixel، لا Google Analytics التقليدي` → **NEW:** `لا Facebook Pixel، ولا Google Analytics التقليدي`
  - `لا remarketing، لا profiling تسويقي` → **NEW:** `لا إعادة استهداف إعلاني (remarketing)، ولا تصنيف تسويقي (profiling)`

### "من نشاركه معه بياناتك" section
- H2: **OLD:** `من نشاركه معه بياناتك` → **NEW:** `مع من نشارك بياناتك`
- **OLD body:** `لا أحد إلا مزوّدي الخدمة الذين نحتاجهم لتشغيل الموقع: Vercel (استضافة)، Resend (إرسال البريد). كلهم ملتزمون بأنظمة حماية البيانات الأوروبية (GDPR) ولا يستخدمون بياناتك لأغراضهم.`
- **NEW:** `لا أحد، باستثناء مزوّدي الخدمة الذين نحتاجهم لتشغيل الموقع: Vercel (الاستضافة)، وResend (إرسال البريد). الاثنان ملتزمان بنظام حماية البيانات الأوروبي (GDPR)، ولا يستخدمان بياناتك لأغراضهما.`

### "حقوقك" section
- H2: `حقوقك` (keep)
- Items:
  - `طلب نسخة من بياناتك التي عندنا` → keep
  - `طلب تصحيح أو حذف بياناتك` → keep
  - `الانسحاب من أي قائمة بريدية تشترك فيها` → **NEW:** `إلغاء الاشتراك من أي قائمة بريدية اشتركتَ فيها`
- **OLD trailer:** `للتواصل بخصوص بياناتك: noureddin@sura.studio`
- **NEW:** `للتواصل بخصوص بياناتك، راسلنا على: noureddin@sura.studio`

### "تحديثات" section
- H2: `تحديثات` → **NEW:** `تحديث هذه السياسة`
- **OLD body:** `قد نُحدّث هذه السياسة من وقت لآخر. التحديثات الجوهرية سنُعلمها عبر إشعار ظاهر على الموقع. آخر تحديث مذكور أعلاه.`
- **NEW:** `قد نُحدّث هذه السياسة من وقت لآخر. التحديثات الجوهرية سنُعلن عنها بإشعار ظاهر على الموقع، وتاريخ آخر تحديث مذكور في أعلى الصفحة.`
- **Why:** "سنُعلمها" → "سنُعلن عنها" (correct verb agreement).

---

## 22) `components/WhatsAppButton.tsx`

### aria-label
- **OLD:** `تواصل عبر واتساب — يفتح في نافذة جديدة`
- **NEW:** `تواصل معنا عبر واتساب (يفتح في نافذة جديدة)`

### Prefilled message
- **OLD:** `مرحباً، أريد أعرف أكثر عن خدمات سُرَى`
- **NEW:** `السلام عليكم، أبغى أعرف أكثر عن خدمات سُرَى.`
- **Why:** "مرحباً" + MSA "أريد" mid-WhatsApp opening reads stilted. "السلام عليكم" + "أبغى" is the natural Saudi WhatsApp opener.

### Icon title
- `واتساب` (keep)

---

## 23) `components/AudienceTile.tsx` — already covered in §6.

---

## 24) Audience-page subhead "نسمعها كل مكالمة"

In `app/for/[audience]/page.tsx` (audience offer page), the "المشكلة" section subhead uses the live audience title and is correct.

- Eyebrow: `المشكلة` (keep)
- H2: `نسمعها كل مكالمة` (keep — direct and good)
- **OLD subhead:** `ثلاث آلام محدّدة لـ{offer.title.replace("سُرَى ", "")} — وكيف نحلّها.`
- **NEW subhead:** `ثلاث آلام نسمعها من {offer.title.replace("سُرَى ", "")} — وكيف نحلّها.`
- **Why:** "محدّدة لـ" reads passive/technical; "نسمعها من" is direct and reinforces the section heading.

Other audience-page strings already addressed in §16. The remaining static strings:
- `الحلّ` / `ماذا نبنيه لك` → keep.
- `العرض الموصى به` → **NEW:** `الباقة المُقترحة لك`. **Why:** "الموصى به" is the calque of "recommended". "المُقترحة لك" is what the founder would actually say.
- `يشمل` (in the recommended-bundle card) → keep.
- `🎁 مكافأة` → **NEW:** `🎁 الهدية`. **Why:** "مكافأة" sounds like a customer-loyalty program ("reward"); "الهدية" is what you say when you're throwing in something extra.
- `الاستثمار` → **NEW:** `السعر`. **Why:** "الاستثمار" is the calque of pricing-page "Investment" SaaS-speak. The founder is selling to plain SMEs and charities; "السعر" is what they understand and respect.
- `أو خصّص باقة أخرى` → keep.
- `أمثلة` → keep.
- `ماذا نبنيه عادةً لكل قطاع` → **NEW:** `أمثلة ممّا نبنيه لكلّ قطاع` (smoother).
- `قطاعات أخرى` → keep.
- `نخدم أيضاً` → keep.
- Final CTA h2: `جاهز للبدء؟` → keep.
- Final CTA paragraph: **OLD** `احكي لنا عن جهتك والمشكلة اللي تواجهها. نرجع لك بمقترح مخصّص خلال 24 ساعة.` → **NEW** `احكي لنا عن جهتك والمشكلة التي تواجهها. نرجع لك بمقترح مخصّص خلال 24 ساعة.` ("اللي" is fine in voice but in body copy, "التي" reads cleaner; rest of site uses MSA for body.)

---

## Cross-cutting consistency to enforce

1. **"الموبايل" → "الجوّال"** everywhere — already done across SMEs/Charities/Manufacturers and About.
2. **"بوتيكي" → "متخصّص"** — layout + Footer (the two only places).
3. **"مسرحيات" / "بدون مسرحيات" → "بلا تعقيد"** or rephrased — Hero, About, VALUE_PILLARS.
4. **"شفّاف" demoted** — keep on FAQs and reports where it makes literal sense; replaced with "واضح" on hero/section headlines.
5. **"شاهد X" → "اطّلع على X"** — Hero, Home final CTA, Work final CTA, Audience tile CTA.
6. **"الالتزام" (commitment) → "الاشتراك"** — Tier 1 micro note.
7. **"3 شهور مجاناً" → "3 شهور هدية"** — Tier 1 + Addons.
8. **"تكامل" → "ربط"** (in tech-integration contexts) — Charities solution 1, Manufacturers bundle.
9. **Dash style** — replace ASCII `-` between numeric ranges with en-dash `–` (e.g. `14–21 يوم`).
10. **"السُرَى" / "النامي" / "المتمكّن" bundle names → "البداية" / "النموّ" / "الإطلاق الكامل"** — fixes the broken use of "سُرَى" as a generic adjective.

---

## Implementation notes for the engineer

- **Hero green-highlight span:** the JSX currently wraps `سُرَى` in a green underline. Move the wrap to `الرحلة` (single word) for the new tagline. Example:
  ```tsx
  <h1>نُرافقك في <span className="relative inline-block text-green">الرحلة<span className="absolute …" /></span> من الفكرة إلى الإطلاق.</h1>
  ```
- **About-page etymology span:** the `<em>` highlights of "الصاعد" and "النامي" need re-pointing to the new "السير في الليل برفقة" phrase, or removed if you prefer the new copy flat.
- **Pricing FAQ select option:** existing key is `unsure` — label changes only.
- **Bundle CTA template:** the regex `replace(/[🌱🌿🌳]/g, "")` keeps working with the new title names (`البداية`, `النموّ`, `الإطلاق الكامل`).
- **Audience bundle name emojis:** add `💚` and `🏭` to the emoji-strip regex if present (audience pages currently don't reuse that CTA pattern).
- **`metadata.openGraph.title` and `twitter.title`** — already say `نُرافقك في الرحلة` — keep verbatim.
- **`workingHours` constant** — fix both in `lib/data.ts` and on contact page (currently duplicated).
