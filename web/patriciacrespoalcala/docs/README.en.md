# Documentation — Patricia Crespo Alcalá

## Overview

A poetic-literary website that serves as a personal journal, published works portfolio, and contact point. The design prioritizes readability, typographic hierarchy, and a serene atmosphere to accompany the reading experience.

## Project Structure

```
patriciacrespoalcala/
├── app/
│   ├── bio/            # Biography page
│   ├── blog/           # Literary blog (posts)
│   ├── contacto/       # Contact page
│   ├── obras/          # Published works
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   ├── not-found.tsx   # 404 page
│   └── page.tsx        # Homepage
├── components/
│   ├── BooksSection.tsx
│   ├── FeaturedPost.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── PoetryRotator.tsx
│   ├── PostCard.tsx
│   ├── PostContent.tsx
│   └── TagBadge.tsx
├── lib/
│   └── posts.ts        # Blog post utilities
├── public/             # Static assets
├── extract-data.mjs    # Data extraction script
└── tailwind.config.ts  # Design configuration
```

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 14.2 | React framework with App Router |
| React | 18.3 | UI library |
| TypeScript | 5.4 | Static typing |
| Tailwind CSS | 3.4 | Utility-first styling |
| PostCSS / Autoprefixer | — | CSS processing |

## Typography

| Role | Font | Style |
|-----|------|-------|
| Headings | Playfair Display | Serif, elegant |
| Body | Lora | Serif, readable |
| Accents | Caveat | Script, handwritten |

## Color Palette

- **Primary**: `#2D4A3E` (forest green)
- **Accent**: `#8B5E3C` (leather brown)
- **Background**: `#FFFFFF` / `#FAFAF8` (white / cream)
- **Text**: `#1E332A` (dark green)

## Pages

- `/` — Homepage with poetry rotator, featured post, books
- `/bio` — Biographical information
- `/blog` — Literary post archive
- `/obras` — Published works
- `/contacto` — Contact form / information
