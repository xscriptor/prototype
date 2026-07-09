# Documentation — Consultoria.io

## Overview

Corporate website for an ecommerce consulting firm. The design conveys trust and credibility through a calm color palette, serious typography (DM Serif Display + Inter), and a conversion-oriented visual hierarchy.

## Project Structure

```
consultoria-io/
├── app/
│   ├── aviso-legal/    # Legal notice
│   ├── nosotros/       # About us
│   ├── privacidad/     # Privacy policy
│   ├── resultados/     # Testimonials & case studies
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/
│   ├── AnimatedMetric.tsx    # Animated counter
│   ├── CTAButton.tsx        # Call-to-action button
│   ├── Footer.tsx            # Site footer
│   ├── Header.tsx            # Floating navigation bar
│   ├── HomeVideoGrid.tsx     # Testimonial video grid
│   ├── ResultadoCard.tsx     # Testimonial card
│   └── VideoEmbed.tsx        # Embedded video player
├── lib/
│   └── resultados-data.ts   # Testimonial data
├── public/
│   ├── favicon.svg
│   └── logo.svg
└── tailwind.config.ts       # Design configuration
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
| Headings | DM Serif Display | Serif, authoritative |
| Body | Inter | Sans-serif, readable |

## Color Palette

- **Brand**: `#2563EB` (trust blue)
- **Gold**: `#F0C84A` (CTA accent)
- **Calm**: `#0D9488` (teal, tranquility)
- **Background**: `#FFFFFF` (white)
- **Text**: `#111827` (near black)

## Pages

- `/` — Homepage with hero, animated metrics, testimonial videos, final CTA
- `/nosotros` — Company information, principles
- `/resultados` — Testimonial grid with videos, screenshots, and interviews
- `/privacidad` — Privacy policy (GDPR / LQDP)
- `/aviso-legal` — Legal notice

## Key Features

- **Apple-style floating glassmorphism navbar**
- **Animated counters** with IntersectionObserver
- **Testimonial videos** in horizontal layout (video + side description)
- **Responsive testimonial grid** on results page
- **Accessibility**: aria-labels, focus-visible, semantic roles
- **Fonts** loaded from Google Fonts
- **Remote assets** from HubSpot CDN, Bunny.net, Wistia
