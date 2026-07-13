# Documentation — Xfetch

## Overview

Landing page for the [xscriptor/xfetch](https://github.com/xscriptor/xfetch) repository. xfetch is a cross-platform system information fetching tool written in Rust, inspired by fastfetch and neofetch. The landing page features a dark terminal-inspired design with interactive demonstrations and comprehensive technical documentation.

## Project Structure

```
xfetch/
├── src/
│   ├── app/
│   │   ├── globals.css          # CSS variables, Tailwind v4 theme, animations
│   │   ├── layout.tsx           # Root layout with metadata and Geist fonts
│   │   └── page.tsx             # Main page (section composition)
│   └── components/
│       ├── Icons.tsx            # 24 inline SVG icons + per-module/feature mapping
│       ├── Nav.tsx              # Fixed navbar with scroll detection
│       ├── Hero.tsx             # Hero with 3D mouse-follow X logo
│       ├── TerminalDemo.tsx     # Interactive terminal with typing animation
│       ├── Features.tsx         # 9-feature capability grid
│       ├── ModulesTable.tsx     # 18-module information table
│       ├── InstallTabs.tsx      # 4 installation tabs (Linux, Windows, source, Arch)
│       ├── LayoutShowcase.tsx   # 6 visual layout previews
│       ├── ConfigBuilder.tsx    # Live config.jsonc builder
│       ├── PluginSection.tsx    # Plugin system documentation
│       ├── Roadmap.tsx          # 11-phase roadmap timeline
│       └── Footer.tsx           # Footer with links
├── public/
├── docs/
│   ├── README.es.md
│   └── README.en.md
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
| Tailwind CSS | 4.x | Utility-first styling (CSS `@theme`) |
| Geist Font | — | Sans-serif and mono typography |

## Technical Decisions

### SVG Iconography

All icons are inline SVGs defined in `Icons.tsx`. No external icon fonts or Nerd Fonts are used. Each icon is a React component rendering SVG paths with `stroke="currentColor"`, inheriting color from context. 24 icons are available: chip, globe, layout, gear, palette, puzzle, play, text, monitor, terminal, hash, clock, box, window, cpu, gpu, memory, disk, battery, user, calendar, network, tag, appwindow.

Two mapping functions centralize assignment:
- `getIconForModule(module)` — maps an SVG icon to each system module (os, kernel, cpu, gpu, etc.)
- `getIconForFeature(title)` — maps an SVG icon to each landing feature

### 3D Interactive Logo

The X logo in the Hero responds to mouse movement with CSS 3D transforms:
- `perspective(600px) rotateX() rotateY()` calculated in real-time
- Ratio derived from mouse position relative to logo center
- `will-change: transform` and `transition: 200ms ease-out` for smoothness
- Resets to `rotateX(0) rotateY(0)` on mouse leave

### Interactive Terminal

`TerminalDemo` simulates `xfetch` output with:
- Progressive typing animation (40ms per line) via `setInterval`
- Category-colored info lines (cyan for hardware, yellow for software, pink for session)
- Simulated ANSI palette with colored spans
- Click to restart animation
- Blinking cursor at end

### Config Builder

`ConfigBuilder.tsx` provides:
- Checkbox toggles for module selection
- Layout dropdown (default, pacman, box, section, tree, side-block, line, dots, bottom_line)
- Live `config.jsonc` generation
- Zero external dependencies — local state with `useState`

### Design System

Dark terminal-inspired color palette:

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-bg` | `#0f1117` | Main background |
| `--color-bg2` | `#181b24` | Card background |
| `--color-bg3` | `#22263a` | Hover/select background |
| `--color-fg` | `#e1e4ed` | Primary text |
| `--color-fg2` | `#8b91a8` | Secondary text |
| `--color-accent` | `#dea584` | Primary accent |
| `--color-accent2` | `#ffa500` | Secondary accent |
| `--color-green` | `#78dba9` | Prompts and success |
| `--color-cyan` | `#78dce8` | Hardware modules |
| `--color-yellow` | `#ffcb6b` | Software modules |
| `--color-pink` | `#ff6b9d` | Session modules |
| `--color-purple` | `#b388ff` | Tree and groups |
| `--color-blue` | `#82aaff` | Links |
| `--color-red` | `#f07178` | Pac-Man header |

## Key Components

- **Nav**: Fixed navbar with transparent background transitioning to `backdrop-blur` on scroll. Centered with `max-w-5xl` and `ml-auto` for links.
- **Hero**: Header with radial gradient, 3D mouse-follow X logo, gradient title, and three CTAs (Install, Live demo, GitHub).
- **TerminalDemo**: Simulated terminal with typing animation, category-colored output, ANSI palette, and click-to-replay.
- **Features**: Responsive grid of 9 cards with SVG icons and descriptions.
- **ModulesTable**: Responsive table with 18 modules, each with SVG icon, mono name, and description.
- **InstallTabs**: Tab system for 4 installation methods with manually syntax-highlighted code blocks.
- **LayoutShowcase**: 6 cards with visual layout previews using colored spans and inline SVGs.
- **ConfigBuilder**: Interactive configuration builder with checkboxes, select dropdown, and live JSON generation.
- **PluginSection**: Plugin documentation with CLI examples and 3 available plugin cards.
- **Roadmap**: Vertical timeline with 11 phases, status indicators (complete/partial/pending), and smooth transitions.

## Sections

- `/` — Hero, terminal demo, features, modules table, installation (4 tabs), layout showcase (6), config builder, plugins, roadmap, footer.

## Key Features

- **24 inline SVG icons** with zero external font dependencies
- **3D interactive X logo** following cursor with CSS perspective
- **Simulated terminal** with progressive typing animation and click-to-replay
- **Live config builder** with real-time JSON generation
- **6 layout previews** with theme-colored icons and text
- **4 installation tabs** with formatted code blocks
- **Roadmap timeline** with status indicators
- **Scroll detection** for glassmorphism navbar
- **Responsive design** with Tailwind CSS v4
- **Staggered fade-in-up** entry animations
- **Dark terminal theme** with ANSI-inspired color palette
- **Zero UI dependencies** — all CSS and JS custom-built
