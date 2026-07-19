import Link from "next/link";

type FaqItem = {
  pregunta: string;
  respuesta: string;
  link?: { href: string; label: string };
};

const faqs: FaqItem[] = [
  {
    pregunta: "¿Necesito experiencia previa para tomar clases?",
    respuesta:
      "No, podemos partir desde cero, o profundizar en lo que ya sabes tocar.",
  },
  {
    pregunta: "¿Dónde son las clases?",
    respuesta:
      "Presenciales en Las Condes, en mi casa o en la casa del estudiante, según el plan que elijas.",
    link: { href: "/cuanto-cuesta", label: "Ver los planes →" },
  },
  {
    pregunta: "¿Qué necesito llevar a las clases?",
    respuesta:
      "Baquetas, cuaderno y lápiz, y los libros que te vaya solicitando durante el proceso.",
    link: { href: "/que-vas-a-aprender", label: "Ver más detalle →" },
  },
  {
    pregunta: "¿Qué pasa si no puedo ir a una clase?",
    respuesta:
      "Si avisas con al menos 24 horas de anticipación, la recuperamos otro día del mes.",
    link: { href: "/cuanto-cuesta", label: "Ver el reglamento completo →" },
  },
  {
    pregunta: "¿Haces clases en inglés?",
    respuesta:
      "Sí. If your first language is English, I can teach the lessons in English.",
  },
  {
    pregunta: "¿Cómo se paga?",
    respuesta:
      "Por transferencia bancaria, el primer día de clases de cada ciclo.",
    link: { href: "/cuanto-cuesta", label: "Ver el reglamento completo →" },
  },
];

export default function Faq({ className = "" }: { className?: string }) {
  return (
    <section className={`mx-auto max-w-3xl px-5 ${className}`}>
      <h2 className="font-display text-2xl tracking-wide sm:text-3xl">
        PREGUNTAS FRECUENTES
      </h2>
      <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
        {faqs.map((faq) => (
          <details key={faq.pregunta} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-ink sm:text-base">
              {faq.pregunta}
              <span
                aria-hidden="true"
                className="shrink-0 text-teal transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink/80">
              {faq.respuesta}{" "}
              {faq.link && (
                <Link
                  href={faq.link.href}
                  className="font-semibold text-ink underline decoration-teal decoration-2 underline-offset-4"
                >
                  {faq.link.label}
                </Link>
              )}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}