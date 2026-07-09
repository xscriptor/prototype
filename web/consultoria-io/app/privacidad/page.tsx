import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de Privacidad y Cookies de Consultoria.io. Información sobre protección de datos conforme al RGPD y la normativa del Principado de Andorra.",
}

export default function PrivacidadPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="container-wide px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto prose prose-neutral prose-a:text-brand-500">
          <h1>Política de Privacidad</h1>

          <h2>Protección de Datos. Condiciones Generales</h2>

          <p>
            LA EMPRESA se compromete a cumplir con todas las obligaciones que le
            correspondan como encargado del tratamiento, conforme a la normativa
            vigente en materia de protección de datos, en particular lo
            dispuesto en la{" "}
            <em>
              Ley 29/2021, de Protección de Datos Personales del Principado de
              Andorra (LQDP)
            </em>
            , y en el Reglamento General de Protección de Datos 2016/679 (RGPD)
            de la Unión Europea, en la medida en que resulte aplicable.
          </p>

          <p>
            Las partes se comprometen a tratar los datos personales conforme a
            la normativa aplicable, garantizando la confidencialidad y seguridad
            de los mismos.
          </p>

          <p>
            Ambas partes quedan informadas de que sus respectivos datos
            personales serán tratados por la otra parte en calidad de
            responsable del tratamiento, con la finalidad de mantener la
            relación contractual.
          </p>

          <p>
            Para más información, puedes contactarnos en{" "}
            <a href="mailto:contacto@consultoria.io">
              contacto@consultoria.io
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
