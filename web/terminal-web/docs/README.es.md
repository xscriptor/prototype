# Documentación — Terminal Xscriptor

## Descripción

Landing page para el repositorio [xscriptor/terminal](https://github.com/xscriptor/terminal). Muestra 12 paletas de color configuradas para 27 emuladores de terminal y 4 motores de prompt, con un diseño dark-first y fondos animados con paths SVG.

## Estructura del proyecto

```
terminal-web/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── BackgroundPaths.tsx   # Paths SVG animados (framer-motion)
│   │   ├── fonts/
│   │   │   └── HackNerdFont-Regular.ttf
│   │   ├── globals.css               # Variables CSS, temas, utilidades
│   │   ├── layout.tsx                # Layout raíz con metadata y fuentes
│   │   └── page.tsx                  # Página principal (single-page)
├── public/
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
| Tailwind CSS | 4.x | Estilos utilitarios |
| framer-motion | 12.x | Animaciones de paths SVG |
| Phosphor Icons | 2.x | Iconografía |

## Paleta de color

El sitio usa variables CSS para soportar tema claro y oscuro:

| Variable | Claro | Oscuro | Uso |
|----------|-------|--------|-----|
| `--bg` | `#f7f1ff` | `#050505` | Fondo principal |
| `--bg-alt` | `#ede7f5` | `#141414` | Fondo alternativo |
| `--fg` | `#1c1c1d` | `#f7f1ff` | Texto principal |
| `--pink` | `#fc618d` | — | Acento rosa |
| `--green` | `#7bd88f` | — | Acento verde |
| `--purple` | `#948ae3` | — | Acento púrpura |
| `--cyan` | `#5ad4e6` | — | Acento cian |

## Componentes destacados

- **BackgroundPaths**: Fondo decorativo con 37 paths SVG generados proceduralmente, animados con framer-motion (movimiento vertical ondulante). Gradiente rosa → púrpura → cian.
- **GlassNavbar**: Barra de navegación flotante glassmorphism con brillo especular que sigue el cursor.
- **RevealSection**: Componente de aparición al hacer scroll con IntersectionObserver.
- **CopyButton**: Botón de copiado al portapapeles con feedback visual.
- **TerminalWindow**: Mockup de ventana de terminal con dots estilizados y contenido simulado.

## Secciones

- `/` — Hero con terminal mockup, grid de paletas, lista de 27 emuladores, 4 motores de prompt, instalación con comando one-liner.

## Funcionalidades destacadas

- **Tema claro/oscuro** con persistencia en localStorage
- **Paths SVG animados** con generación procedural y movimiento orgánico
- **Navbar glassmorphism** con efecto specular que sigue el ratón
- **Tarjetas glass** con hover glow
- **51 paletas** en 12 combinaciones, cada una con 16 colores
- **Revelación al hacer scroll** con IntersectionObserver
- **Fuente Hack Nerd Font** para bloques de terminal
- **Diseño responsive** con Tailwind CSS
