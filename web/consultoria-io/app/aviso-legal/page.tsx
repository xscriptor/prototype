import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Aviso Legal de Consultoria.io. Información sobre el uso del sitio web y condiciones generales conforme a la normativa del Principado de Andorra.",
}

export default function AvisoLegalPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="container-wide px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto prose prose-neutral prose-a:text-brand-500">
          <h1>Aviso Legal</h1>

          <p>
            La titularidad de este sitio web CONSULTORIA.IO la ostenta{" "}
            <strong>LASER FOCUS SLU</strong>, con Número de Registro Tributario
            (NRT) L-720059-Y con dirección en Passatge Arnaldeta de Caboet,
            número 11, Edifici La Torre, 2n 1a, AD700 Escaldes-Engordany,
            Principado de Andorra.
          </p>

          <p>
            Toda persona que acceda a este sitio web asume el papel de{" "}
            <strong>Usuario</strong>, comprometiéndose a la observancia y
            cumplimiento riguroso de lo dispuesto en este Aviso Legal, así como
            a cualquier otra disposición legal que le sea de aplicación.
          </p>

          <p>
            El Usuario se compromete a utilizar el Sitio Web, sus contenidos y
            servicios de conformidad con la ley, la moral, el orden público y el
            presente Aviso Legal. En particular, se compromete a no utilizarlos
            con fines ilícitos o lesivos, que puedan dañar, inutilizar o impedir
            el normal funcionamiento del Sitio Web.
          </p>

          <p>
            El Usuario declara ser mayor de edad y disponer de la capacidad
            legal suficiente para aceptar el presente Aviso Legal. Este Sitio
            Web no está dirigido a menores de edad.
          </p>

          <p>
            El titular se reserva el derecho a ejercer las acciones civiles o
            penales que considere necesarias en caso de uso indebido del Sitio
            Web y sus contenidos, o por el incumplimiento del presente Aviso
            Legal.
          </p>

          <p>
            El presente Aviso Legal se rige por la normativa vigente en el
            Principado de Andorra, y cualquier controversia que pudiera
            derivarse de su interpretación o aplicación será sometida a los
            juzgados y tribunales del Principado de Andorra.
          </p>
        </div>
      </div>
    </section>
  )
}
