import type { Metadata } from "next";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cuánto cuesta | Clases de Batería",
  description: "Precios de las clases particulares de batería en Las Condes.",
};

const planes = [
  {
    nombre: "Clase única",
    precio: "$25.000",
    detalle: "Por clase",
    incluye: [
      "Clase de 45 minutos",
      "En mi casa",
      "Ideal para probar antes de un ciclo",
    ],
  },
  {
    nombre: "Ciclo en mi casa",
    precio: "$80.000",
    detalle: "4 clases",
    incluye: [
      "4 clases de 45 minutos",
      "En mi casa, con batería de práctica",
      "Seguimiento continuo de tu avance",
    ],
    destacado: true,
  },
  {
    nombre: "Ciclo en tu casa",
    precio: "$120.000",
    detalle: "4 clases",
    incluye: [
      "4 clases de 45 minutos",
      "En la comodidad de tu casa",
      "Seguimiento continuo de tu avance",
    ],
  },
];

export default function CuantoCuesta() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
      <p className="font-data text-xs uppercase tracking-widest text-ink">
        La inversión
      </p>
      <h1 className="mt-2 font-display text-3xl tracking-wide sm:text-4xl">
        CUÁNTO CUESTA
      </h1>
      <p className="mt-4 max-w-2xl text-base text-warm-gray">
        Elige el formato que más te acomode. Todos los valores son por alumno.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {planes.map((plan) => (
          <div
            key={plan.nombre}
            className={`flex flex-col rounded-sm border p-6 ${
              plan.destacado
                ? "border-teal bg-paper-soft/70"
                : "border-ink/15"
            }`}
          >
            {plan.destacado && (
              <span className="mb-3 inline-block w-fit rounded-full bg-teal px-3 py-1 text-xs font-semibold text-ink">
                Más elegido
              </span>
            )}
            <h2 className="font-display text-xl tracking-wide">
              {plan.nombre}
            </h2>
            <p className="mt-3 font-data text-3xl text-ink">{plan.precio}</p>
            <p className="text-xs uppercase tracking-widest text-warm-gray">
              {plan.detalle}
            </p>
            <ul className="mt-5 flex-1 space-y-2 text-sm text-ink/85">
              {plan.incluye.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={waLink(
                `Hola Joaquín, me interesa el plan "${plan.nombre}" (${plan.precio}).`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-sm bg-ink px-5 py-2.5 text-center text-sm font-semibold text-paper transition-colors hover:bg-ink/85"
            >
              Consultar por WhatsApp
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-2xl border-t border-ink/10 pt-8 text-sm text-ink/80">
        <h2 className="font-display text-lg tracking-wide">
          POLÍTICAS DE PAGO Y ASISTENCIA
        </h2>
        <ul className="mt-4 space-y-2">
          <li className="flex gap-2">
            <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
            <span>El pago se realiza por transferencia, antes de iniciar el ciclo o la clase.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
            <span>Las clases se agendan con al menos 24 horas de anticipación.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
            <span>Las cancelaciones con menos de 24 horas de aviso no tienen reposición.</span>
          </li>
        </ul>

        <details className="group mt-6">
          <summary className="cursor-pointer list-none text-sm font-semibold text-ink underline decoration-teal decoration-2 underline-offset-4">
            Ver reglamento completo
          </summary>

          <div className="mt-5 space-y-6">
            <div>
              <p className="font-semibold text-ink">¿Cómo y cuándo se paga?</p>
              <p className="mt-2">
                Las clases se pagan solo a través de transferencia bancaria.
                Se pagan el primer día de clases de cada ciclo, antes de que
                comience la primera clase.
              </p>
            </div>

            <div>
              <p className="font-semibold text-ink">
                ¿A quién están dirigidas las clases?
              </p>
              <p className="mt-2">
                Las clases están dirigidas a niños, niñas, jóvenes y adultos.
                No importa la edad que tengas, nunca es tarde para aprender o
                retomar la batería.
              </p>
              <p className="mt-2">
                Las clases son particulares: durante la clase solo estarán
                presentes el profesor y el estudiante, salvo que el
                estudiante sea menor de 14 años y éste o su apoderado se
                pongan de acuerdo con el profesor para que sea acompañado por
                un adulto durante la clase.
              </p>
            </div>

            <div>
              <p className="font-semibold text-ink">¿Cuándo son las clases?</p>
              <p className="mt-2">
                El día y la hora de clases se coordinan con el profesor
                según disponibilidad.
              </p>
            </div>

            <div>
              <p className="font-semibold text-ink">Sobre la asistencia</p>
              <ul className="mt-2 space-y-2">
                <li className="flex gap-2">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  <span>
                    Si avisas con 24 horas de anticipación que no puedes
                    asistir, la clase se recupera otro día del mes en que
                    tengas clases, y ese día se hace una clase de 1 hora y 30
                    minutos.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  <span>
                    Si no avisas con 24 horas de anticipación, la clase se
                    pierde y no se recupera.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  <span>
                    Si el profesor suspende la clase, el estudiante y el
                    profesor acuerdan un nuevo día y hora para recuperarla.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  <span>Solo se pueden suspender 2 de las 4 clases al mes.</span>
                </li>
                <li className="flex gap-2">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  <span>
                    Si no puedes asistir a una clase recuperativa, esa clase
                    se pierde.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}