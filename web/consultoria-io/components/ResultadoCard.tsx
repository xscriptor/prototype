import type { Testimonial } from "@/lib/resultados-data"

export default function ResultadoCard({
  testimonial: t,
}: {
  testimonial: Testimonial
}) {
  if (t.type === "captura") {
    return (
      <article className="card overflow-hidden flex flex-col">
        <p className="text-xs text-neutral-400 uppercase tracking-widest font-semibold mb-2">
          Captura de imagen
        </p>
        <p className="font-display text-xl text-neutral-900 leading-snug mb-4">
          &ldquo;{t.title}&rdquo;
        </p>
        {t.imageUrl && (
          <img
            src={t.imageUrl}
            alt={`Captura: ${t.title}`}
            className="w-full rounded-xl border border-neutral-100 mt-auto"
            loading="lazy"
          />
        )}
      </article>
    )
  }

  if (t.type === "entrevista") {
    return (
      <article className="card flex flex-col">
        <p className="text-xs text-neutral-400 uppercase tracking-widest font-semibold mb-2">
          Entrevista
        </p>
        <p className="font-display text-xl text-neutral-900 leading-snug mb-4">
          &ldquo;{t.title}&rdquo;
        </p>
        <div className="mt-auto">
          <iframe
            src="https://open.spotify.com/embed/episode/53AHRggE2aHv273P8tvwnX?utm_source=generator"
            width="100%"
            height="152"
            title={`Entrevista: ${t.title}`}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl"
          />
        </div>
      </article>
    )
  }

  return (
    <article className="card overflow-hidden flex flex-col">
      {t.sector && (
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold rounded-full">
            {t.sector}
          </span>
          {t.region && (
            <span className="text-xs text-neutral-400">{t.region}</span>
          )}
          {t.age && (
            <span className="text-xs text-neutral-400">{t.age} años</span>
          )}
        </div>
      )}

      <div className="flex items-center gap-4 mb-4">
        {t.photoUrl && (
          <img
            src={t.photoUrl}
            alt={`Foto de ${t.name}`}
            className="w-14 h-14 rounded-full object-cover border-2 border-neutral-100 flex-shrink-0"
            loading="lazy"
          />
        )}
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-neutral-900 truncate">
            {t.name}
            {t.age && !t.sector && (
              <span className="font-normal text-neutral-400">, {t.age}</span>
            )}
          </p>
          {t.role && t.storeUrl && (
            <p className="text-sm text-neutral-500 truncate">
              {t.role} de{" "}
              <a
                href={t.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:text-brand-700 transition-colors font-medium"
              >
                {t.store}
              </a>
            </p>
          )}
        </div>
        {t.logoUrl && (
          <img
            src={t.logoUrl}
            alt={`Logo de ${t.store || t.name}`}
            className="h-10 w-auto max-w-[100px] object-contain opacity-60 rounded-lg flex-shrink-0"
            loading="lazy"
          />
        )}
      </div>

      <p className="font-display text-xl text-neutral-900 leading-snug mb-4">
        &ldquo;{t.title}&rdquo;
      </p>

      {t.videoUrl && (
        <div className="relative w-full rounded-xl overflow-hidden bg-neutral-100 mt-auto">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src={t.videoUrl}
              title={`Testimonio de ${t.name}: ${t.title}`}
              className="absolute inset-0 w-full h-full rounded-xl"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      )}
    </article>
  )
}
