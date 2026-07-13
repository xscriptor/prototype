# Documentación — Xfetch

## Descripción

Landing page para el repositorio [xscriptor/xfetch](https://github.com/xscriptor/xfetch). xfetch es una herramienta de obtención de información del sistema multiplataforma escrita en Rust, inspirada en fastfetch y neofetch. La landing presenta el proyecto con un diseño oscuro tipo terminal, demostraciones interactivas y documentación técnica completa.

## Estructura del proyecto

```
xfetch/
├── src/
│   ├── app/
│   │   ├── globals.css          # Variables CSS, tema Tailwind v4, animaciones
│   │   ├── layout.tsx           # Layout raíz con metadata y fuentes Geist
│   │   └── page.tsx             # Página principal (composición de secciones)
│   └── components/
│       ├── Icons.tsx            # 24 iconos SVG inline + mapeo por módulo/feature
│       ├── Nav.tsx              # Navbar fijo con scroll detection
│       ├── Hero.tsx             # Hero con logo X 3D que sigue el mouse
│       ├── TerminalDemo.tsx     # Terminal interactiva con typing animation
│       ├── Features.tsx         # Grid de 9 capacidades del proyecto
│       ├── ModulesTable.tsx     # Tabla con 18 módulos de información
│       ├── InstallTabs.tsx      # 4 tabs de instalación (Linux, Windows, source, Arch)
│       ├── LayoutShowcase.tsx   # 6 previews de layouts visuales
│       ├── ConfigBuilder.tsx    # Builder interactivo de config.jsonc
│       ├── PluginSection.tsx    # Documentación del sistema de plugins
│       ├── Roadmap.tsx          # Timeline con 11 fases del roadmap
│       └── Footer.tsx           # Footer con enlaces
├── public/
├── docs/
│   ├── README.es.md
│   └── README.en.md
├── next.config.ts
├── package.json
├── tsconfig.json
└── postcss.config.mjs
```

## Tecnologías

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| Next.js | 16.2 | Framework React con App Router |
| React | 19.2 | Librería de UI |
| TypeScript | 5.x | Tipado estático |
| Tailwind CSS | 4.x | Estilos utilitarios (vía CSS `@theme`) |
| Geist Font | — | Tipografía sans-serif y mono |

## Decisiones técnicas

### Iconografía SVG

Todos los íconos son SVGs inline definidos en `Icons.tsx`. No se usan fuentes de iconos externas ni Nerd Fonts. Cada ícono es un componente React que renderiza paths SVG con `stroke="currentColor"`, permitiendo heredar el color del contexto. Hay 24 iconos: chip, globe, layout, gear, palette, puzzle, play, text, monitor, terminal, hash, clock, box, window, cpu, gpu, memory, disk, battery, user, calendar, network, tag, appwindow.

Dos funciones de mapeo centralizan la asignación:
- `getIconForModule(module)` — asigna un icono SVG a cada módulo del sistema (os, kernel, cpu, gpu, etc.)
- `getIconForFeature(title)` — asigna un icono SVG a cada feature de la landing

### Logo 3D interactivo

El logo de la X en el Hero responde al movimiento del mouse con transformaciones 3D CSS:
- `perspective(600px) rotateX() rotateY()` calculados en tiempo real
- El ratio se obtiene de la posición del mouse relativa al centro del logo
- `will-change: transform` y `transition: 200ms ease-out` para suavidad
- Se restablece a `rotateX(0) rotateY(0)` al salir del header

### Terminal interactiva

El componente `TerminalDemo` simula la salida de `xfetch` con:
- Typing animation progresiva (40ms por línea) con `setInterval`
- Líneas de información del sistema con colores por categoría (cyan para hardware, amarillo para software, rosa para sesión)
- Paleta ANSI simulada con spans coloreados
- Click para reiniciar la animación
- Cursor parpadeante al final

### Config builder

`ConfigBuilder.tsx` permite:
- Seleccionar/deseleccionar módulos con checkboxes
- Elegir layout (default, pacman, box, section, tree, side-block, line, dots, bottom_line)
- Generación en vivo de `config.jsonc`
- Sin dependencias externas — estado local con `useState`

### Sistema de diseño

Paleta de color oscura tipo terminal:

| Variable | Valor | Uso |
|----------|-------|-----|
| `--color-bg` | `#0f1117` | Fondo principal |
| `--color-bg2` | `#181b24` | Fondo de tarjetas |
| `--color-bg3` | `#22263a` | Fondo hover/select |
| `--color-fg` | `#e1e4ed` | Texto principal |
| `--color-fg2` | `#8b91a8` | Texto secundario |
| `--color-accent` | `#dea584` | Acento principal |
| `--color-accent2` | `#ffa500` | Acento secundario |
| `--color-green` | `#78dba9` | Prompts y éxito |
| `--color-cyan` | `#78dce8` | Módulos hardware |
| `--color-yellow` | `#ffcb6b` | Módulos software |
| `--color-pink` | `#ff6b9d` | Módulos sesión |
| `--color-purple` | `#b388ff` | Árbol y grupos |
| `--color-blue` | `#82aaff` | Enlaces |
| `--color-red` | `#f07178` | Pac-Man header |

## Componentes destacados

- **Nav**: Navbar fijo con fondo transparente que se vuelve `backdrop-blur` al hacer scroll. Centrado con `max-w-5xl` y `ml-auto` para los links.
- **Hero**: Header con gradiente radial, logo X con efecto 3D de seguimiento del mouse, título gradient, y tres CTAs (Install, Live demo, GitHub).
- **TerminalDemo**: Terminal simulada con typing animation, colores por categoría, paleta ANSI, y click-to-replay.
- **Features**: Grid responsive de 9 tarjetas con iconos SVG y descripciones.
- **ModulesTable**: Tabla responsiva con 18 módulos, cada uno con icono SVG, nombre mono y descripción.
- **InstallTabs**: Sistema de tabs para 4 métodos de instalación, cada uno con código formateado con sintaxis highlighting manual.
- **LayoutShowcase**: 6 tarjetas con previews visuales de layouts usando spans coloreados y SVGs inline.
- **ConfigBuilder**: Constructor interactivo de configuración con checkboxes, select, y generación de JSON en vivo.
- **PluginSection**: Documentación de plugins con ejemplos de CLI y 3 tarjetas de plugins disponibles.
- **Roadmap**: Timeline vertical con 11 fases, puntos de estado (completo/parcial/pendiente) y transición suave.

## Secciones

- `/` — Hero, terminal demo, features, tabla de módulos, instalación (4 tabs), showcase de layouts (6), config builder, plugins, roadmap, footer.

## Funcionalidades destacadas

- **24 iconos SVG inline** sin dependencias de fuentes externas
- **Logo X 3D interactivo** que sigue el cursor con perspectiva CSS
- **Terminal simulada** con typing animation progresiva y click-to-replay
- **Config builder en vivo** con generación de JSON
- **6 layout previews** con iconos y colores del tema
- **4 tabs de instalación** con código formateado
- **Roadmap timeline** con indicadores de estado
- **Scroll detection** para navbar glassmorphism
- **Diseño responsive** con Tailwind CSS v4
- **Animaciones de entrada** con fade-in-up escalonado
- **Tema oscuro** tipo terminal con paleta de colores ANSI
- **Sin dependencias de UI** — todo el CSS y JS es propio
