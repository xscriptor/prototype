# Documentación — Consultoria.io

## Descripción

Sitio web corporativo para una consultoría de ecommerce. El diseño transmite confianza y solvencia mediante una paleta tranquila, tipografía seria (DM Serif Display + Inter) y una jerarquía visual orientada a la conversión.

## Estructura del proyecto

```
consultoria-io/
├── app/
│   ├── aviso-legal/    # Aviso legal
│   ├── nosotros/       # Sobre la empresa
│   ├── privacidad/     # Política de privacidad
│   ├── resultados/     # Testimonios y casos de éxito
│   ├── globals.css     # Estilos globales
│   ├── layout.tsx      # Layout raíz
│   └── page.tsx        # Portada
├── components/
│   ├── AnimatedMetric.tsx    # Contador animado
│   ├── CTAButton.tsx        # Botón de llamada a la acción
│   ├── Footer.tsx            # Pie de página
│   ├── Header.tsx            # Barra de navegación flotante
│   ├── HomeVideoGrid.tsx     # Grid de vídeos testimoniales
│   ├── ResultadoCard.tsx     # Tarjeta de testimonio
│   └── VideoEmbed.tsx        # Reproductor de vídeo embebido
├── lib/
│   └── resultados-data.ts   # Datos de testimonios
├── public/
│   ├── favicon.svg
│   └── logo.svg
└── tailwind.config.ts       # Configuración de diseño
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
| Títulos | DM Serif Display | Serif, autoridad |
| Cuerpo | Inter | Sans-serif, legible |

## Paleta de color

- **Brand**: `#2563EB` (azul confianza)
- **Gold**: `#F0C84A` (acento CTA)
- **Calm**: `#0D9488` (teal, tranquilidad)
- **Fondo**: `#FFFFFF` (blanco)
- **Texto**: `#111827` (casi negro)

## Páginas

- `/` — Portada con hero, métricas animadas, vídeos testimoniales, CTA final
- `/nosotros` — Información de la empresa, principios
- `/resultados` — Grid de testimonios con vídeos, capturas y entrevistas
- `/privacidad` — Política de privacidad (RGPD / LQDP)
- `/aviso-legal` — Aviso legal

## Funcionalidades destacadas

- **Navbar flotante glassmorphism** tipo Apple
- **Contador animado** con IntersectionObserver
- **Vídeos testimoniales** con layout horizontal (video + descripción al lado)
- **Grid responsive** de testimonios en resultados
- **Accesibilidad**: aria-labels, focus-visible, roles semánticos
- **Fuentes** cargadas desde Google Fonts
- **Assets remotos** desde HubSpot CDN, Bunny.net, Wistia
