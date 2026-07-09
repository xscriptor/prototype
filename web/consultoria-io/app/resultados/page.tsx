import type { Metadata } from "next"
import ResultadoCard from "@/components/ResultadoCard"
import { testimonials } from "@/lib/resultados-data"

export const metadata: Metadata = {
  title: "Resultados",
  description:
    "Aquí podrás encontrar cientos de opiniones de Consultoria.io que nos han dejado nuestros clientes en diferentes formatos y canales.",
}

export default function ResultadosPage() {
  const totalReviews = testimonials.length

  return (
    <section className="pt-32 pb-24">
      <div className="container-wide px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <span className="section-label mb-4 inline-flex">
              Testimonios reales
            </span>
            <h1 className="text-4xl md:text-5xl text-neutral-900 leading-tight mt-4 mb-4">
              Resultados
            </h1>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Más de {totalReviews} opiniones de clientes reales que confían en
              nosotros. Filtra por sector, edad, región o tipo de testimonio.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <ResultadoCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
