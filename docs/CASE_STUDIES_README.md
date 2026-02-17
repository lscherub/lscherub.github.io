# How to Add New Case Studies

## The only file you ever touch: `case-studies.json`

---

## Quick Reference — All Available Fields

```json
{
  "name": "brand name — subtitle",          ← required, shown as heading
  "challenge": "what problem you solved",   ← optional paragraph
  "stats": [ ... ],                         ← optional stat cards
  "charts": [ ... ],                        ← optional — auto-generates charts
  "methodology": [ ... ],                   ← optional bullet points
  "result": "what you achieved",            ← optional paragraph
  "link": "https://livesite.com"            ← optional, shown at bottom
}
```

---

## Stat Cards

```json
"stats": [
  { "value": "714%",  "label": "Traffic Growth" },
  { "value": "$0.10", "label": "Cost Per Click" },
  { "value": "29%",   "label": "Sessions Increase" }
]
```
- `value` — the big number shown in red
- `label` — the small text below it

---

## Charts — 3 Types Available

### Line Chart (traffic growth over time)
```json
{
  "title": "monthly traffic growth",
  "type": "line",
  "label": "Visitors",
  "labels": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  "data":   [1200,  1800,  2400,  3200,  4100,  5600]
}
```

### Bar Chart (comparisons, conversions)
```json
{
  "title": "conversion rate over time",
  "type": "bar",
  "label": "Conversion Rate (%)",
  "labels": ["Jan", "Feb", "Mar", "Apr"],
  "data":   [1.2,   1.8,   2.1,   2.7],
  "yFormat": "percent",   ← shows "%" on y-axis  (options: "percent", "currency", or leave out)
  "yMax": 5               ← optional: set max y-axis value
}
```

### Doughnut Chart (traffic sources, channel mix)
```json
{
  "title": "traffic sources",
  "type": "doughnut",
  "labels": ["Organic", "Direct", "Social", "Paid"],
  "data":   [4500,     2100,     800,      600]
}
```

**You can add as many charts as you want per case study.**

---

## Methodology List

```json
"methodology": [
  { "label": "SEO",      "detail": "on-page optimization and keyword research" },
  { "label": "platform", "detail": "shopify with custom liquid templates" },
  { "label": "ads",      "detail": "google ads with smart bidding" }
]
```

---

## Full Working Example

```json
[
  {
    "name": "new client — traffic growth campaign",
    "challenge": "a local retailer had zero organic search presence and relied entirely on word of mouth.",
    "stats": [
      { "value": "340%", "label": "Traffic Growth" },
      { "value": "6 months", "label": "Timeline" }
    ],
    "charts": [
      {
        "title": "monthly visitors",
        "type": "line",
        "label": "Visitors",
        "labels": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        "data":   [800, 1200, 1900, 2800, 3500, 4400]
      }
    ],
    "methodology": [
      { "label": "SEO", "detail": "full site audit and keyword optimization" },
      { "label": "content", "detail": "product description rewrites with search intent focus" }
    ],
    "result": "grew from 800 to 4,400 monthly visitors in 6 months, a 340% increase."
  }
]
```

---

## How to Add Multiple Case Studies

Just separate them with commas inside the `[ ]`:

```json
[
  {
    "name": "first case study",
    ...
  },
  {
    "name": "second case study",
    ...
  }
]
```

---

## Tips

- Use **lowercase** for all text (matches your site style)
- Keep stat values short: "714%" not "714 percent increase"
- Labels and data arrays must be the **same length** for charts
- Remove any field you don't want — everything except `name` is optional
- Delete the example entry from `case-studies.json` before going live
