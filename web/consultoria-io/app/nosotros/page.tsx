import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Consultoria.io es una empresa única que soluciona un problema importante de los ecommerce que tienen un gran producto.",
}

const principles = [
  { title: "Resultados", desc: "El éxito de nuestros clientes es nuestra estrella polar." },
  { title: "Muro Espartano", desc: "En equipo, nos protegemos y cuidamos unos a otros." },
  { title: "Ownership", desc: "Mi trabajo, mis clientes, mis leads, mi equipo. Nuestra empresa y nuestro prestigio." },
  { title: "Speed is King", desc: "La velocidad es más importante que la perfección. Un buen plan ejecutado ahora es mejor que un plan perfecto ejecutado mañana." },
  { title: "Somos científicos", desc: "Trabajamos desde el mundo de la ciencia, no de las sensaciones. Medimos todo y dimensionamos órdenes de magnitud." },
  { title: "Más con menos", desc: "Si se suele hacer en 5 pasos y se puede en 3, lo hacemos en 2. Somos responsables con los recursos." },
  { title: "1% cada día", desc: "Caminamos el camino, innovamos, estudiamos y mejoramos cada día." },
  { title: "Largo plazo", desc: "Siempre dispuestos a sacrificar corto plazo por el largo plazo." },
  { title: "Integridad", desc: "Brutalmente honestos y genuinos en todo lo que hacemos." },
  { title: "Humildad", desc: "Trabajamos en silencio, dejamos que el éxito sea nuestro altavoz. Prometemos menos de lo que damos." },
]

export default function NosotrosPage() {
  return (
    <>
      <section className="pt-32 pb-20">
        <div className="container-wide section-padding pt-0">
          <div className="max-w-3xl mx-auto space-y-16">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">
                Nosotros
              </h1>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Somos un grupo de ingenieros y diseñadores que está construyendo
                algo muy grande. Consultoria.io es una empresa única, que
                soluciona un problema importante con un gran producto, un equipo
                de primera división, una comunidad con un objetivo común y
                suficiente auto-financiación para poder dedicarnos en exclusiva a
                nuestra misión.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900">
                Qué hacemos
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Ayudamos a personas con proyectos de ecommerce en cualquier nivel
                a escalar con el equilibrio perfecto entre beneficios netos,
                clientes fieles y su felicidad.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900">Visión</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                <em>Make Ecommerce Great Again</em> — existen muchas formas de
                hacer ecommerce, pero nosotros solo entendemos una: el cliente es
                lo primero, largo plazo y conexión como valor diferenciador.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900">Misión</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Impactar en 1.000.000.000 de personas a través de nuestros
                clientes y comunidad.
              </p>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-neutral-900">
                Principios
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {principles.map((p) => (
                  <div key={p.title} className="card">
                    <h3 className="font-bold text-neutral-900 mb-2">
                      {p.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center pt-8">
              <a
                href="https://consultoria.io/carrera"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Quiero trabajar aquí
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
