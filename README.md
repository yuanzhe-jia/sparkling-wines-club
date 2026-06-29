# Sparkling Wines Club

A web application for sparkling wine and cocktail enthusiasts. Browse curated articles, discover 50 sparkling wine recipes with detailed ingredients and serving instructions, and filter by scenarios like Romantic Dinner, Beach Day, or Rooftop Party.

## Features

- **Article** — Horizontally scrollable knowledge cards about champagne, prosecco, cava, and more
- **Smart Search** — Real-time filtering across wine name, description, recipe, scenario, and mood
- **Wine Menu** — Grid layout with scenario-based filtering (15 distinct scenarios)
- **Wine Detail** — Full recipe, ABV, mood, and scenario for each of the 50 wines

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Article, search, featured wines |
| Article Detail | `/knowledge/:id` | Full article reading |
| Wine Menu | `/menu` | All wines with scenario filter |
| Wine Detail | `/menu/:id` | Wine recipe and details |

## Tech Stack

- **React 18 + TypeScript** — Component-based, type-safe
- **Vite** — Fast HMR and ES module build
- **Tailwind CSS** — Custom theme colors, responsive utilities
- **React Router v6** — Hash routing for static deployment
- **Framer Motion** — Page transitions and bubble animations
- **Lucide React** — Lightweight modern icons

## Design System

| Color | Hex | Usage |
|-------|-----|-------|
| Sunshine | `#FBE29D` | Warm yellow accents |
| Seafoam | `#C0DDDA` | Fresh green tones |
| Caramel | `#775537` | Primary text and buttons |
| Cloud | `#F1F1F1` | Background base |

- **Display font**: Playfair Display (serif, elegant)
- **Body font**: Nunito (sans-serif, friendly)

## Project Structure

```
sparkling-wines-club/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── wines/          # 50 wine images (w1-w50.jpg)
│       └── articles/       # 10 article covers (a1-a10.jpg)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── BubbleBackground.tsx
│   │   ├── ArticleCard.tsx
│   │   ├── WineCard.tsx
│   │   ├── SearchBar.tsx
│   │   └── HorizontalCarousel.tsx
│   ├── data/
│   │   ├── articles.ts     # 10 articles
│   │   └── wines.ts        # 50 wines
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── ArticleDetail.tsx
│   │   ├── Menu.tsx
│   │   └── WineDetail.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
