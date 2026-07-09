# Documentación — Patricia Crespo Alcalá

## Descripción

Sitio web poético-literario que funciona como bitácora personal, portafolio de obra publicada y punto de contacto. El diseño prioriza la legibilidad, la jerarquía tipográfica y una atmósfera serena que acompañe la experiencia de lectura.

## Estructura del proyecto

```
patriciacrespoalcala/
├── app/
│   ├── bio/            # Página biográfica
│   ├── blog/           # Blog literario (entradas)
│   ├── contacto/       # Página de contacto
│   ├── obras/          # Obras publicadas
│   ├── globals.css     # Estilos globales
│   ├── layout.tsx      # Layout raíz
│   ├── not-found.tsx   # Página 404
│   └── page.tsx        # Portada
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
│   └── posts.ts        # Utilidades para entradas del blog
├── public/             # Assets estáticos
├── extract-data.mjs    # Script de extracción de datos
└── tailwind.config.ts  # Configuración de diseño
```

## Tecnologías

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| Next.js | 14.2 | Framework React con App Router |
| React | 18.3 | Librería de UI |
| TypeScript | 5.4 | Tipado estático |
| Tailwind CSS | 3.4 | Estilos utilitarios |
| PostCSS / Autoprefixer | — | Procesamiento CSS |

## Tipografía

| Rol | Fuente | Estilo |
|-----|--------|--------|
| Títulos | Playfair Display | Serif, elegante |
| Cuerpo | Lora | Serif, legible |
| Acentos | Caveat | Cursiva, manuscrita |

## Paleta de color

- **Primario**: `#2D4A3E` (verde bosque)
- **Acento**: `#8B5E3C` (marrón cuero)
- **Fondo**: `#FFFFFF` / `#FAFAF8` (blanco / crema)
- **Texto**: `#1E332A` (verde oscuro)

## Páginas

- `/` — Portada con rotador de poesía, entrada destacada, libros
- `/bio` — Información biográfica
- `/blog` — Archivo de entradas literarias
- `/obras` — Obras publicadas
- `/contacto` — Formulario / información de contacto
