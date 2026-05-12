# Wahba Portfolio — Implemented Audit Recommendations

Drop-in replacement for the existing `mwahba13.github.io` repo, addressing the audit findings.

## What changed

**Critical**
- **Hero leads with proof**, not pillars. Masthead now lists EA Maxis · USC MFA · AWE 2024 Best in Show · shipped Steam titles. Lede cut from ~60 words to ~22.
- **Home + portfolio merged.** One page (`index.html`) is now the front door for both audiences. Coaching is a single nav link; the home page has a small coaching tease at the bottom.
- **"Creative Technologist" dropped** — replaced with "Software Engineer & Game Designer" so search and recruiters can map it to real roles.

**Major**
- **Editorial design system applied site-wide.** Cream `#f7f4ee` bg, Playfair Display + Poppins, single rust accent `#c4541a`. Extracted from the coaching page into `css/tokens.css` and shared.
- **Long tail trimmed.** Quidditch Swarm, Antymology, L, Limina dropped from the front page; Radio Exurbia and Virtual Garden moved to a compact secondary list. Extras live on the linked GitHub.
- **Case studies rewritten** with explicit Problem · Approach · Outcome blocks (Maxis, Egregore, Atrio, Immersive Archive).

**Hygiene**
- jQuery, AOS, two duplicate Bootstraps, ionicons, and the unused video-embed/carousel-hover stylesheets all removed. Each page now loads: tokens.css + icomoon.css + Google Fonts. No JS frameworks.
- Old duplicate CV removed — site links the single 2025-08 resume.
- `index_new.html`, `single.html`, `modals.html` — deleted.
- `portfolio.html` — 5-line redirect stub to `index.html`.
- OG / Twitter card meta on every page.
- Sticky semi-translucent navbar, mobile toggle, `aria-current` on the active link.
- `loading="lazy"` on every below-the-fold image and embedded video.

## File structure

```
site/
├── index.html              ← merged home (work + about + press + coaching tease)
├── portfolio.html          ← redirect stub → index.html
├── maxis.html              ← case study
├── egregore.html
├── atrio.html
├── immersive-archive.html
├── coaching.html
├── components/navbar.html  ← shared fragment
├── css/tokens.css          ← single source of truth for the design system
├── js/
│   ├── load-navbar.js
│   ├── accessibility.js
│   └── analytics-tracking.js
├── images/
└── docs/                   ← single resume PDF
```

## Open items

- **Testimonials on coaching.html are still placeholders** — need real quotes before publishing.
- **Press/Media** is on the home page; if it grows past 4 items, promote to its own page.
- The CV PDF in the repo is from `08_21_2025`. If a newer one exists, drop it into `docs/` and update the two `<a href="docs/...">` references.
