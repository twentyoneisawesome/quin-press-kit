# Landy Money — Press Kit

Media assets and factual information for **Landy Money(繁中:懶得記)**, an offline-first
personal finance app for Taiwan.

🌐 **Product site:** https://twentyoneisawesome.github.io/quin-press-kit/ — the
marketing page for Landy Money, bilingual (繁體中文 / English), light and dark.
📄 **Press kit:** https://twentyoneisawesome.github.io/quin-press-kit/press/
📱 **App Store:** https://apps.apple.com/tw/app/id6758532357
🤖 **Google Play:** https://play.google.com/store/apps/details?id=com.twentyoneisawesome.quin

---

## Fact sheet

| | |
| --- | --- |
| **App name** | Landy Money(繁中:懶得記) |
| **Developer** | HSIN WEI LEE — independent developer |
| **Category** | Finance |
| **Released** | 4 August 2026 |
| **Current version** | 1.0.9 (September 2026) |
| **Platforms** | iPhone (iOS 16.4+), Android phones — tablets are not supported |
| **Languages** | 10: English, Traditional Chinese, Cantonese, Japanese, Korean, Spanish, Brazilian Portuguese, Indonesian, Vietnamese, Thai |
| **Price** | Free. In Taiwan, a subscription unlocks automatic e-invoice import (1-month free trial). Everywhere else every feature is free and the subscription is purely a way to support development. |
| **App Store ID** | 6758532357 |
| **Play package** | com.twentyoneisawesome.quin |
| **Contact** | _add your press contact address here_ |

## One-line description

Link your Taiwanese e-invoice carrier once and Landy Money writes your ledger for you —
budgets, goals and TWSE-priced holdings included, with no account and no cloud sync.

## What it is

Landy Money turns Taiwan's national e-invoice (電子發票) system into an expense tracker
that keeps itself. Connect your carrier once and every purchase arrives already
categorized and matched against your budgets — no receipts, no manual entry.

Anything the carrier does not cover can be spoken instead — say "lunch, 120, cash"
and Landy Money fills in the amount, category and account, with speech-to-text running on
the device.

Around that sits a full finance app: a one-glance dashboard, envelope budgets with
overspend alerts, savings goals funded from real account balances, holdings priced
from TWSE and US markets, recurring-bill reminders, multi-currency accounts with
daily exchange rates, and home screen widgets on both platforms.

There is no sign-up and no cloud account. The ledger is a local, biometrically
locked database on the device, fully usable offline from first launch, with cloud backup
to iCloud and Google Drive.

## For reviewers

Tap **Demo Mode** on the very first screen. The complete app loads with realistic
data in seconds — no sign-up and no personal information required.

## Assets

```
assets/
├─ icon/
│   └─ quin-icon-1024.png              1024×1024, no alpha
├─ screenshots/iphone/
│   ├─ 01_dashboard.png                1320×2868 (iPhone 6.9")
│   ├─ 02_transactions.png
│   ├─ 03_categories.png
│   ├─ 04_goals.png
│   ├─ 05_investments.png
│   ├─ 06_accounts.png
│   ├─ 07_cashflow.png
│   ├─ 08_cashflow_dark.png
│   ├─ preview/                        small JPEGs used by the press page
│   └─ web/                           620 px JPEGs used by the product site
├─ screenshots/android/
│   └─ 01–08 .png                      1080×2160, Play's 2:1 max-ratio rule
├─ badges/                             official App Store and Google Play badges
├─ promo/
│   ├─ quin-feature-graphic-1024x500.jpg  Play store listing feature graphic
│   ├─ quin-promo-primary-1920x1080.jpg   16:9 promotional image
│   └─ quin-promo-square-1080x1080.jpg    1:1 promotional image
├─ logo/                               (to come)
└─ video/                              (to come)
```

Screenshots show the app's built-in demo data, not a real person's finances.

## Pages in this repository

| Path | What it is |
| --- | --- |
| `index.html` + `assets/site.css` + `assets/site.js` | the product site (root URL) |
| `press/index.html` + `assets/style.css` | the press kit |

Both are plain static files served by GitHub Pages — no build step. The product
site keeps both languages in the markup (`data-l="zh"` / `data-l="en"`) and swaps
them with CSS, so it works without JavaScript for the default language. `?lang=en`
and `?theme=dark` force a language or theme, which is handy for linking and
screenshots.

## Usage

These assets are provided for editorial and press coverage of Landy Money. The Landy Money name,
icon and logo remain the property of the developer; please don't modify them or use
them to imply endorsement.
