import Link from "next/link"

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center">
        {/* Large decorative number */}
        <div className="font-display text-8xl sm:text-9xl text-wood-light/30 select-none">
          404
        </div>

        <h1 className="font-display text-3xl sm:text-4xl text-primary mt-4">
          Página no encontrada
        </h1>

        <div className="w-16 h-px bg-wood-medium mx-auto my-6" />

        <p className="font-body text-text-muted text-lg max-w-md mx-auto">
          La página que buscas no existe o ha sido movida. 
          Es posible que el enlace esté roto o que la página haya sido eliminada.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200 font-body text-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12h18M3 12l4-4m-4 4l4 4"
              />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
