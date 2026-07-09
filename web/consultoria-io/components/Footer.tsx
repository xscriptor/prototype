import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-100" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-16">
        <div className="flex flex-col items-center text-center gap-6">
          <p className="text-xs text-neutral-400 leading-relaxed max-w-3xl">
            Consultoria.io, Genesis Ecommerce, Upscale Ecommerce y Polaris
            Mastermind son marcas registradas en la Oficina Española de Patentes
            y Marcas y en una selección de oficinas de patentes y propiedad
            intelectual en Europa y Estados Unidos. Todos los derechos
            reservados.
            <br />
            <a
              href="mailto:contacto@consultoria.io"
              className="text-brand-600 hover:text-brand-700 transition-colors"
            >
              contacto@consultoria.io
            </a>
          </p>

          <nav aria-label="Enlaces legales">
            <div className="flex items-center gap-6">
              <Link
                href="/privacidad"
                className="text-sm text-neutral-400 hover:text-brand-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
              >
                Privacidad y Cookies
              </Link>
              <Link
                href="/aviso-legal"
                className="text-sm text-neutral-400 hover:text-brand-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
              >
                Aviso Legal
              </Link>
            </div>
          </nav>

          <p className="text-xs text-neutral-300">
            rediseñado por Xscriptor
          </p>
        </div>
      </div>
    </footer>
  )
}
