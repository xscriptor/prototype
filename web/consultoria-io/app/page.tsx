import VideoEmbed from "@/components/VideoEmbed"
import CTAButton from "@/components/CTAButton"
import HomeVideoGrid from "@/components/HomeVideoGrid"
import AnimatedMetric from "@/components/AnimatedMetric"

const metrics = [
  { value: "+200M", label: "€ facturados por nuestros clientes" },
  { value: "215+", label: "opiniones de clientes reales" },
  { value: "14", label: "días para ver resultados — o no pagas" },
  { value: "10+", label: "años de experiencia en ecommerce" },
]

export default function HomePage() {
  return (
    <>
      <section className="min-h-screen flex items-center pt-20">
        <div className="container-wide px-6 md:px-12 lg:px-24 w-full">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <span className="section-label">Consultoría de ecommerce</span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-neutral-900">
                    Multiplicamos los beneficios netos de tu tienda online{" "}
                    <span className="italic text-brand-500">— o no pagas</span>
                  </h1>
                  <p className="text-lg text-neutral-500 leading-relaxed max-w-lg">
                    Resultados garantizados en 14 días. Sin riesgo. Con un
                    equipo que ha facturado más de 200M€ en ecommerce.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAButton large />
                  <a href="/resultados" className="btn-secondary">
                    Ver resultados
                  </a>
                </div>

                <div className="flex items-center gap-6 text-sm text-neutral-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-calm-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Sin compromiso
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-calm-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Resultado garantizado
                  </div>
                </div>
              </div>

              <div className="lg:pt-0">
                <VideoEmbed
                  src="https://fast.wistia.net/embed/iframe/sv843a55nt?videoFoam=true"
                  poster="https://embed-ssl.wistia.com/deliveries/b2c3e62cb58e95985511ede097e89eb3.jpg?image_crop_resized=960x622"
                  title="Portada Consultoria.io Video"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 border-y border-neutral-100">
        <div className="container-wide px-6 md:px-12 lg:px-24 py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {metrics.map((m) => (
                <AnimatedMetric key={m.label} value={m.value} label={m.label} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-wide px-6 md:px-12 lg:px-24 py-20 md:py-28">
          <div className="max-w-5xl mx-auto space-y-14">
            <div className="max-w-2xl">
              <span className="section-label mb-4 inline-flex">Casos de éxito</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-neutral-900 leading-tight mt-4">
                Resultados que hablan por sí solos
              </h2>
              <p className="text-lg text-neutral-500 mt-4 max-w-lg">
                Dueños de tiendas online como la tuya ya están multiplicando sus
                beneficios. Esto es lo que dicen.
              </p>
            </div>
            <HomeVideoGrid />
            <div className="text-center pt-4">
              <a
                href="/resultados"
                className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
              >
                Ver todos los testimonios
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 text-white">
        <div className="container-wide px-6 md:px-12 lg:px-24 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <span className="section-label !bg-white/10 !text-white/70">
              Sin riesgo
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              ¿Listo para multiplicar tus beneficios?
            </h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto">
              Solicita una sesión informativa sin compromiso. Descubre cómo
              podemos ayudarte a escalar tu negocio — o no pagas.
            </p>
            <div className="pt-4">
              <CTAButton large />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
