"use client"

import { useState } from "react"

interface VideoEmbedProps {
  src: string
  poster?: string
  title?: string
  aspectRatio?: string
}

export default function VideoEmbed({
  src,
  poster,
  title = "Video",
  aspectRatio = "56.25%",
}: VideoEmbedProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden bg-neutral-100 shadow-lg ring-1 ring-neutral-200/50"
      role="region"
      aria-label={title}
    >
      <div className="relative w-full" style={{ paddingBottom: aspectRatio }}>
        {!loaded && poster && (
          <img
            src={poster}
            alt={`Portada: ${title}`}
            className="absolute inset-0 w-full h-full object-cover cursor-pointer rounded-2xl"
            onClick={() => setLoaded(true)}
          />
        )}
        {!loaded && poster && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-2xl">
            <button
              onClick={() => setLoaded(true)}
              className="w-14 h-14 md:w-16 md:h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label={`Reproducir ${title}`}
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-brand-600 ml-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        )}
        {loaded && (
          <iframe
            src={src}
            title={title}
            className="absolute inset-0 w-full h-full rounded-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  )
}
