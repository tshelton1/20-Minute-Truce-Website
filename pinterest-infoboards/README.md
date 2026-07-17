# Pinterest Infoboards

High-conversion pins matching the 20 Minute Truce visual system (midnight background, Fraunces + Inter, teal→magenta gradient, numbered lists, logo + App Store footer).

## Files

| File | Purpose |
|------|---------|
| `shared.css` | Brand tokens + shared pin layout (1000×1500) |
| `01-emotional-flooding.html` | Emotional flooding · Peace Button |
| `02-silent-treatment.html` | Silent treatment · Cycle Breaker |
| `03-fighting-fair.html` | Fighting fair · Neutral Mediator |
| `04-relationship-anxiety.html` | Post-fight anxiety · Cycle Breaker |
| `05-destructive-habits.html` | Destructive habits · Cycle Breaker |

Each feature board uses a **4-point problem list** + standalone **THE SOLUTION** breakout (emoji lead + mechanism copy) + App Store badge.
| `a-agitator.html` | Earlier Suby Layout A |
| `b-unfair-advantage.html` | Earlier Suby Layout B |
| `index.html` | Local preview index |
| `assets/logo.png` | Brand logo for footers |

## Preview

```bash
open pinterest-infoboards/index.html
```

## Export to PNG (Pinterest-ready)

Pins are fixed at **1000×1500** (2:3).

```bash
npx --yes playwright install chromium
node pinterest-infoboards/export-pngs.mjs
```

Or screenshot a single board:

```bash
npx playwright screenshot --viewport-size=1000,1500 \
  pinterest-infoboards/01-emotional-flooding.html \
  "Pinterest posts/8-emotional-flooding.png"
```

Exported PNGs land in `Pinterest posts/` as `8-` through `12-`.
