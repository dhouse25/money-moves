# Money Move$ — Brand, Product & Audience Audit
**Date:** July 9, 2026  
**Scope:** Logo/icon system, landing + game + hustle surfaces, messaging vs. target users, and GTM fit.

---

## 1. What you have (strengths)

| Asset | Assessment |
|-------|------------|
| **Core product (game.html)** | Strong. Climb + Hustle, ranks, missions, pass, daily spin, Future You meter — real Duolingo-class engagement loop. |
| **Curriculum** | Clear and correct: emergency fund → debt/credit → credit union → index → Roth → term life. “Traps to dodge” builds trust. |
| **Positioning** | “Real, not preachy · Fun by design · For everyone · Trustworthy” is right and differentiated from courses *and* lock-behind-card apps. |
| **Monetization plan** | Sound: free core + sponsors (primary cash) + freemium (compound). Ethics guardrails for minors are correct. |
| **Brand voice** | On-brand for teens/young adults: energy without hype, humor without cringe. |
| **PWA shell** | Manifest + SW + offline-aware caching already in place. |

**Bottom line:** Engagement engine and education content are ahead of the brand mark and go-to-market plumbing.

---

## 2. Target users — who to optimize for

Your marketing plan defines **four audiences**. Ranked by *who should drive product + brand decisions first*:

| Priority | Audience | Job-to-be-done | What converts them |
|----------|----------|----------------|--------------------|
| **P0** | **Teens / young adults (13–28)** | Autonomy + status; not feel dumb about money | Game loop, ranks, free, phone-first, shareable wins |
| **P0** | **Parents** | Kids set up better than they were | Safety, “real skills,” Family plan later, school/CU trust |
| **P1** | **Adults catching up (28–50)** | Non-judgmental path; “not too late” | Compound calculator, 6 moves, 7-day challenge, Future You |
| **P1 (revenue)** | **Sponsors (CUs / banks / schools)** | Measurable literacy + younger members | Co-branded challenge, usage stats, clean brand |

### Optimization principle
**Design for the player (teen/YA). Sell to the buyer (parent + sponsor).**  
That means: game feels native on TikTok energy; brand mark and disclaimer feel sponsor-safe.

---

## 3. Logo / icon — diagnosis & recommendation

### What was shipping
- **App icon:** Generic cyan “bold rocket” (concept 3) — readable, but *indistinguishable* from any kids/space/fintech app.
- **In-page mark:** Rocket + growth bars — better story, but busy at 16–32px and inconsistent with the app icon.

### Concepts scored for *your* audiences

| Concept | Teen/YA | Parent trust | Sponsor-safe | Small size | Distinctiveness | Score |
|---------|---------|--------------|--------------|------------|-----------------|-------|
| **A. Monogram M$ + bars** ⭐ | ★★★★ | ★★★★ | ★★★★★ | ★★★★★ | ★★★★★ | **Best overall** |
| **B. Rocket + bars** | ★★★★★ | ★★★ | ★★★ | ★★★ | ★★★★ | Best for *game mascot* |
| **C. Chart swoosh** | ★★ | ★★★★ | ★★★★★ | ★★★★ | ★★ | Too “generic fintech” |
| **D. Climb peak** | ★★★★ | ★★★ | ★★★ | ★★★ | ★★★ | Good for The Climb world only |
| **E. Coin + arrow** | ★★ | ★★ | ★★ | ★★★★ | ★★ | Looks like casino/crypto |

### Recommended system (locked for teens — July 9, 2026)

**Winner: Rocket + growth bars** (shipped as live app icon)

Why teens pick this over monogram:
- Feels like a *game*, not a bank app (status + fun on the home screen)
- Motion silhouette is more memorable at a glance
- Bars keep the “money/growth” story so it’s not a random rocket
- Matches The Climb product metaphor and in-game rocket skins

Monogram M$ is retained in `concepts/` for **sponsor one-pagers / B2B** only — not the consumer app icon.

### Files
```
site/icons/
  icon-512.png / icon-192.png / apple-touch-icon.png   ← monogram (live)
  icon-512-maskable.png
  favicon.svg / favicon-32.png
  logo-primary.svg / mark-inline.svg
  concepts/
    ai_monogram.jpg          ← polished monogram concept
    ai_rocket_bars.jpg       ← game/mascot concept
    ai_climb.jpg             ← Climb world concept
    _new_concepts_sheet.png  ← 4 geometric options
    icon-*-rocket-ai.png     ← alternate if you prefer rocket as app icon
```

**If you prefer rocket as the home-screen icon:** copy `icon-512-rocket-ai.png` → `icon-512.png` (and 192/apple-touch) and bump SW cache again.

---

## 4. Messaging audit (by surface)

### Landing (`index.html`)
| Element | Status | Fix applied / next |
|---------|--------|--------------------|
| Tagline “Small moves. Big future.” | Excellent — works for all ages | Keep |
| Hero | Strong | Eyebrow tightened to “Free money game · teens → adults” |
| Compound calculator | Killer conversion asset for adults | Keep as hero proof |
| 6 moves + traps | Trust + curriculum | Keep order |
| Toolkit (RBFCU, Ethos, etc.) | Helpful; San Antonio-leaning | Add “local pick / national alt” labels for national scale |
| 7-day challenge | Shareable wedge | Wire email capture (plan gap) |
| SEO / social | Was missing | **Added** description + Open Graph + Twitter cards |
| Email waitlist | **Missing** | Highest-priority funnel gap |

### Business (`business.html`)
| Element | Status | Note |
|---------|--------|------|
| Hustle path vs default path | Clear, persuasive for kids/teens | Good |
| Age tracks | Excellent | Aligns with age-track product idea |
| SA credit unions + national list | Strong local GTM | Sponsor bait — good |
| Risk | Slight anti-school tone could ruffle schools | Soften “default path” if pitching districts |

### Game (`game.html`)
| Element | Status | Note |
|---------|--------|------|
| Feature density | Very high | Great retention; can overwhelm first session |
| Honor-system missions | Right ethically | Label for sponsors: “self-reported real-world actions” |
| $MOVE tokens copy (“not real currency yet”) | Clever; careful with kids | Never imply real money value under 18 |
| No accounts | Blocks retention + monetization | Phase 0 from strategy doc |

---

## 5. Product gaps vs. strategy docs

| Priority | Gap | Why it matters |
|----------|-----|----------------|
| **P0** | **Accounts / auth** | Progress dies on new device; no Pro/sponsor entitlements |
| **P0** | **Email capture on landing** | Only owned channel; pre-launch asset |
| **P1** | **Analytics (DAU, D1/D7, funnel)** | Required for sponsor case studies |
| **P1** | **First-session path** | Audience picker exists — ensure &lt;2 min to first win |
| **P1** | **Soft paywall hooks** (energy, streak save) | Needed before Pro pricing tests |
| **P2** | **Sponsor co-brand mode** | Logo slot + sponsored 7-day challenge |
| **P2** | **Parent / Family surface** | Dashboard, age tracks, consent |
| **P2** | **COPPA / privacy page** | Required before school deals |

---

## 6. Audience-specific copy cheatsheet

Use these as the *first line* of any post, ad, or outreach:

| Audience | Hook |
|----------|------|
| Teens / YA | “Level up your money like a game. Start free.” |
| Parents | “They get the card. We build the brain behind it.” |
| Adults | “Small moves. Big future. It’s not too late.” |
| Credit unions | “Co-branded financial literacy your members will actually use.” |
| Schools | “Standards-friendly money skills, free to students — playable, not worksheets.” |

---

## 7. Brand system (lock these)

| Token | Value | Use |
|-------|-------|-----|
| Ink | `#0d0f14` | Backgrounds, app icon field |
| Lime | `#c6ff3d` | Primary brand, CTAs, rank-up |
| Cyan | `#3dd4ff` | Secondary, Future You, info |
| Coral | `#ff5e5b` | Alerts, fins, urgency |
| Yellow | `#ffd23f` | Rewards, $ accent |
| Orange | `#ff9f43` | **Hustle only** |
| Display font | Archivo Black | Headlines, ranks |
| Body font | Space Grotesk | UI |

**Wordmark:** `Money Move$` with lime `$`. Never “MoneyMoves” as one word in UI.

---

## 8. 30-day optimization checklist

### Week 1 — Brand & funnel
- [x] Ship **rocket + bars** app icons (teen-optimized) + favicon + inline marks  
- [x] Meta description + social cards  
- [x] Email capture (“Free 7-day money plan”) + local export via `/admin-local`  
- [x] Parent page `/parents` + `/?for=parents` redirect  
- [ ] One-page sponsor PDF  

### Week 2 — First-session
- [x] First Flight auto-launch + shorter level 1 (~2 min win)  
- [x] Audience picker → tailored decks  
- [x] Lightweight analytics (`/js/analytics.js`) — page_view, level_open/clear, share, waitlist  

### Week 3 — Trust & compliance
- [x] Privacy + Terms (minors language)  
- [x] Affiliate disclosure + local/national toolkit labels  
- [ ] Soften school-facing copy on Hustle if pitching districts  

### Week 4 — Revenue plumbing
- [ ] Auth (magic link or OAuth)  
- [ ] Stripe skeleton for Pro / Family  
- [ ] Sponsored Challenge mock for top 5 CU targets  
- [ ] Wire `MM_WAITLIST_ENDPOINT` / `MM_ANALYTICS_ENDPOINT` to Formspree/Resend

---

## 9. Decision needed from you

**App icon direction:**

1. **Monogram M$ + bars** (recommended — shipped) — brand-first, sponsor-safe, unique  
2. **Rocket + bars** (AI polish in `concepts/ai_rocket_bars.jpg`) — game-first, more “play”  
3. **Hybrid:** monogram for web/sponsors; rocket for in-game HUD only (current setup after this pass)

Reply with **1 / 2 / 3** and any audience you want to prioritize harder (e.g. “parents + SA credit unions only”), and we can go deeper on landing layout, sponsor one-pager, or first-session UX next.
