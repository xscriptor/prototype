"use client"

import { useState } from "react"

interface TestimonialVideo {
  name: string
  role: string
  store: string
  title: string
  src: string
}

const gradients = [
  "from-brand-500/15 via-brand-500/5 to-brand-500/20",
  "from-gold/15 via-gold/5 to-gold/20",
  "from-calm-500/15 via-calm-500/5 to-calm-500/20",
  "from-brand-500/15 via-gold/5 to-calm-500/20",
]

const featuredVideos: (TestimonialVideo & { gradient: string })[] = [
  {
    name: "Enrique",
    role: "Fundador de gosailingshop.com",
    store: "gosailingshop.com",
    title: "Estoy en camino de tener la empresa que siempre he querido tener",
    src: "https://iframe.mediadelivery.net/embed/145524/26fc944e-3e3d-4e9f-a2f4-31fd94522060?autoplay=0",
    gradient: gradients[0],
  },
  {
    name: "Vanessa",
    role: "Co-Fundadora de meninesperfumes.com",
    store: "meninesperfumes.com",
    title: "Multiplicamos X5 las ventas en la web",
    src: "https://iframe.mediadelivery.net/embed/145524/30ca77ad-1e2d-487b-bf77-002c24629ec7?autoplay=0",
    gradient: gradients[1],
  },
  {
    name: "Alberto Garcia",
    role: "Fundador de lebassi.com",
    store: "lebassi.com",
    title: "Me arrepiento de no haber empezado antes",
    src: "https://iframe.mediadelivery.net/embed/151235/74543483-d212-42d6-a567-a6475a966d78?autoplay=0",
    gradient: gradients[2],
  },
  {
    name: "Enrique",
    role: "Fundador de aluminalia.net",
    store: "aluminalia.net",
    title: "Pasé de -2% en beneficios a +18% en 6 meses",
    src: "https://iframe.mediadelivery.net/embed/145524/bb9c5eaa-c2ec-4e0b-bf00-3fa4d53d89ca?autoplay=0",
    gradient: gradients[3],
  },
]

function VideoCard({ video }: { video: TestimonialVideo & { gradient: string } }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
      <div className="relative w-full md:w-[55%] flex-shrink-0">
        <div
          className={`relative w-full overflow-hidden rounded-2xl shadow-md group bg-gradient-to-br ${video.gradient}`}
          style={{ paddingBottom: "56.25%" }}
        >
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
              <button
                onClick={() => setLoaded(true)}
                className="w-14 h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label={`Reproducir testimonio de ${video.name}`}
              >
                <svg
                  className="w-6 h-6 text-brand-600 ml-0.5"
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
              src={video.src}
              title={`Video testimonio de ${video.name}: ${video.title}`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
      <div className="md:w-[45%] space-y-2">
        <p className="font-display text-xl leading-snug text-neutral-900">
          &ldquo;{video.title}&rdquo;
        </p>
        <p className="text-sm text-neutral-500">
          {video.name},{" "}
          <span className="text-neutral-400">{video.role}</span>
        </p>
      </div>
    </div>
  )
}

export default function HomeVideoGrid() {
  return (
    <div className="space-y-10">
      {featuredVideos.map((v, i) => (
        <VideoCard key={i} video={v} />
      ))}
    </div>
  )
}
