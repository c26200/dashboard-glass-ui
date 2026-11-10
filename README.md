# DashLoud — Analytics Dashboard

A brutalist analytics dashboard built with React, Tailwind CSS and Recharts. White field,
3px black borders, hard offset shadows and one electric accent; the theme toggle flips the
whole system to dark without losing the structure.

**[Live demo](https://dashboard-glass-ui.vercel.app)**

![Dashboard preview](./preview.png?v=3)

## What it does

- Four KPI cards — revenue, users, sales, activity — with hard-edged shadows and
  color-coded emphasis
- Revenue line chart built with Recharts: black stroke, square markers and a custom tooltip
- Recent transactions with status chips (OK / WAIT / FAIL) and signed amounts
- Top navigation with the active section inverted
- Light/dark toggle that swaps the entire palette, not just the background

## Stack

React 19 · Vite · Tailwind CSS · Recharts

## Run locally

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`. To build:

```bash
npm run build
npm run preview
```

## Structure

```
src/
├── components/
│   ├── SalesChart.jsx         # Recharts line chart and tooltip
│   └── RecentTransactions.jsx # Status chips and signed amounts
├── App.jsx                    # Top bar, KPI grid, layout and theme state
└── index.css                  # Brutalist tokens and light/dark palette
```

## Notes

The dashboard is a frontend exercise. Every figure, chart point and transaction is
hardcoded inside the components — there is no API, database or authentication behind it.
The layout targets desktop and stacks into a single column below 1100 px.
