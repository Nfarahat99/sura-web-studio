# موقع سُرَى — Surā Website

موقع شركة سُرَى — استوديو بوتيكي لتصميم وتطوير المواقع وتطبيقات الويب.

**الـ Stack:** Next.js 15 (App Router) · Tailwind v4 · TypeScript · Railway

---

## التشغيل المحلي

```bash
npm install
cp .env.example .env.local   # املأ المتغيرات
npm run dev
```

الموقع على `http://localhost:3000`.

## النشر على Railway

1. ادفع للـ GitHub (`git push origin main`)
2. ادخل [railway.com](https://railway.com) واربط الـ repo
3. أضف متغيرات البيئة من `.env.example`
4. Railway يبني عبر Nixpacks (`railway.json` + `nixpacks.toml` موجودان) وينشر تلقائيًا
5. اربط نطاقك (`sura.studio`) من إعدادات المشروع

## هيكل المشروع

```
app/
├── page.tsx              ← الرئيسية
├── about/                ← من نحن
├── services/             ← خدماتنا
├── pricing/              ← الباقات + سيناريوهات + FAQ
├── work/                 ← أعمالنا (placeholder)
├── contact/              ← تواصل + نموذج
├── privacy/              ← سياسة الخصوصية
├── for/[audience]/       ← عروض مخصّصة (smes/charities/manufacturers)
├── api/contact/          ← Route handler (يدعم Resend)
├── not-found.tsx         ← صفحة 404 مخصّصة
├── sitemap.ts            ← /sitemap.xml
├── robots.ts             ← /robots.txt
├── layout.tsx            ← Root layout + fonts + RTL
└── globals.css           ← Tailwind v4 @theme + brand colors

components/
├── Header.tsx            ← navbar + mobile menu
├── Footer.tsx
├── Hero.tsx              ← hero الرئيسي
├── AudienceTile.tsx      ← 3 شرائح (clickable)
├── ServiceCard.tsx
├── PricingCard.tsx
├── ContactForm.tsx       ← مربوط بـ /api/contact
├── WhatsAppButton.tsx    ← floating button
└── Icon.tsx              ← 26 SVG icon (currentColor)

lib/data.ts               ← مصدر واحد لكل المحتوى:
                          ← NAV_LINKS, CONTACT, AUDIENCES,
                          ← SERVICES, PRICING_TIERS, ADDONS,
                          ← VALUE_PILLARS, BUNDLE_SCENARIOS,
                          ← AUDIENCE_OFFERS, whatsappLink()
```

## التخصيص السريع

| ماذا تريد تغيير؟ | الملف |
|---|---|
| رقم واتساب | `.env.local` → `NEXT_PUBLIC_WHATSAPP_NUMBER` |
| تفاصيل التواصل | `lib/data.ts` → `CONTACT` |
| الأسعار | `lib/data.ts` → `PRICING_TIERS` + `BUNDLE_SCENARIOS` |
| الخدمات | `lib/data.ts` → `SERVICES` |
| العروض للقطاعات | `lib/data.ts` → `AUDIENCE_OFFERS` |
| روابط التنقّل | `lib/data.ts` → `NAV_LINKS` |
| الألوان + الخطوط | `app/globals.css` |

## الأوامر

```bash
npm run dev      # تطوير محلي
npm run build    # بناء للإنتاج (يفحص الأنواع + lint)
npm run start    # تشغيل الإنتاج بعد البناء
npm run lint     # فحص جودة الكود
```

## الحالة الحالية

- ✅ 16 صفحة (7 رئيسية + 3 audience + privacy + 404 + sitemap + robots + api)
- ✅ بناء production نظيف
- ✅ Brand v6.0 (Navy/Green/Cream + Cairo/IBM Plex)
- ✅ RTL + Arabic-first
- ✅ Mobile-first responsive
- ✅ Security headers (X-Frame-Options, X-Content-Type-Options, HSTS, Permissions-Policy)
- ✅ نموذج تواصل مربوط بـ Resend (مع honeypot + rate limit + fallback)
- ⏳ رقم واتساب حقيقي (املأ `NEXT_PUBLIC_WHATSAPP_NUMBER`)
- ⏳ مفتاح Resend API (املأ `RESEND_API_KEY`)
- ⏳ دراسات الحالة (placeholder الآن — احدثها بعد إطلاق أول 3 عملاء)

## التقييم

أحدث تقييم QA من Omar: **8.0/10** — جاهز للإطلاق التجريبي.
انظر `OMAR-FEEDBACK.md` للتفاصيل الكاملة.
