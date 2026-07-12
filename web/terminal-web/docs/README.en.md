# Documentation — Terminal Xscriptor

## Overview

Landing page for the [xscriptor/terminal](https://github.com/xscriptor/terminal) repository. Showcases 12 color palettes configured for 27 terminal emulators and 4 prompt engines, with a dark-first design and animated SVG background paths.

## Project Structure

```
terminal-web/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── BackgroundPaths.tsx   # Animated SVG paths (framer-motion)
│   │   ├── fonts/
│   │   │   └── HackNerdFont-Regular.ttf
│   │   ├── globals.css               # CSS variables, themes, utilities
│   │   ├── layout.tsx                # Root layout with metadata and fonts
│   │   └── page.tsx                  # Main page (single-page)
├── public/
├── next.config.ts
├── package.json
├── tsconfig.json
└── postcss.config.mjs
```

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.2 | React framework with App Router |
| React | 19.2 | UI library |
| TypeScript | 5.x | Static typing |
| Tailwind CSS | 4.x | Utility-first styling |
| framer-motion | 12.x | SVG path animations |
| Phosphor Icons | 2.x | Iconography |

## Color Palette

The site uses CSS variables for light and dark theme support:

| Variable | Light | Dark | Usage |
|----------|-------|------|-------|
| `--bg` | `#f7f1ff` | `#050505` | Main background |
| `--bg-alt` | `#ede7f5` | `#141414` | Alt background |
| `--fg` | `#1c1c1d` | `#f7f1ff` | Main text |
| `--pink` | `#fc618d` | — | Pink accent |
| `--green` | `#7bd88f` | — | Green accent |
| `--purple` | `#948ae3` | — | Purple accent |
| `--cyan` | `#5ad4e6` | — | Cyan accent |

## Key Components

- **BackgroundPaths**: Decorative background with 37 procedurally generated SVG paths, animated with framer-motion (undulating vertical movement). Gradient pink → purple → cyan.
- **GlassNavbar**: Floating glassmorphism navigation bar with specular highlight that follows the cursor.
- **RevealSection**: Scroll-reveal component using IntersectionObserver.
- **CopyButton**: Clipboard copy button with visual feedback.
- **TerminalWindow**: Terminal window mockup with styled dots and simulated content.

## Sections

- `/` — Hero with terminal mockup, palette grid, 27 emulator list, 4 prompt engines, one-liner install command.

## Key Features

- **Light/dark theme** with localStorage persistence
- **Animated SVG paths** with procedural generation and organic motion
- **Glassmorphism navbar** with mouse-following specular effect
- **Glass cards** with hover glow
- **51 palettes** across 12 combinations, each with 16 colors
- **Scroll reveal** with IntersectionObserver
- **Hack Nerd Font** for terminal blocks
- **Responsive design** with Tailwind CSS
