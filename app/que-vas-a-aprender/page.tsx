import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { waLink, defaultWaMessage, rimshotUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Qué vas a aprender | Clases de Batería",
  description:
    "Técnica, lectura musical, coordinación y estilos en las clases particulares de batería.",
};

const temas = [
  {
    title: "Lectura musical",
    body: "Aprende a leer partituras de batería: figuras rítmicas, compases y notación estándar.",
  },
  {
    title: "Técnica de baquetas",
    body: "Postura, agarre, rebote y control, para tocar con precisión y sin lesionarte.",
  },
  {
    title: "Coordinación",
    body: "Ejercicios progresivos para independizar manos y pies en distintos patrones.",
  },
  {
    title: "Estilos musicales",
    body: "Rock, pop, funk, latin y más, según tus gustos e intereses.",
  },
  {
    title: "Repertorio real",
    body: "Aplicas lo aprendido tocando canciones completas, no solo ejercicios sueltos.",
  },
];

const temario = [
  "Instrumentos de la batería",
  "Configuración de la batería",
  "Uso de hardware",
  "Agarre de las baquetas",
  "Lectura rítmica aplicada a la batería",
  "Rudimentos",
  "Drum Grooves",
  "Drum Fills",
  "Uso del metrónomo",
  "Interdependencia (Coordinación)",
  "Estilos",
  "Repertorio",
  "Técnicas de pedal de bombo",
  "Técnicas de pedal de hi-hat",
  "Transcripción y uso de softwares",
  "Preparación para certificaciones internacionales",
];

const necesitas = ["Baquetas", "Libros solicitados por el profesor", "Cuaderno y lápiz"];

export default function QueVasAAprender() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
      <p className="font-data text-xs uppercase tracking-widest text-ink">
        El método
      </p>
      <h1 className="mt-2 font-display text-3xl tracking-wide sm:text-4xl">
        QUÉ VAS A APRENDER
      </h1>
      <p className="mt-4 max-w-2xl text-base text-warm-gray">
        Un plan personalizado que combina fundamentos técnicos con canciones
        reales, para que sientas avances desde la primera clase. No necesitas
        experiencia previa — podemos partir desde cero, o profundizar en lo
        que ya sabes.
      </p>

      <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-paper-soft px-3 py-1.5 text-xs font-semibold text-ink">
        🇬🇧 Clases disponibles en inglés / Lessons available in English
      </p>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2">
        {temas.map((tema) => (
          <li key={tema.title} className="border-l-2 border-teal pl-4">
            <h2 className="font-display text-lg tracking-wide">{tema.title}</h2>
            <p className="mt-1 text-sm text-ink/80">{tema.body}</p>
          </li>
        ))}
      </ul>

      <details className="group mt-8 border-t border-ink/10 pt-6">
        <summary className="cursor-pointer list-none text-sm font-semibold text-ink underline decoration-teal decoration-2 underline-offset-4">
          Ver temario completo
        </summary>
        <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2 text-sm text-ink/80 sm:grid-cols-2">
          {temario.map((item) => (
            <li key={item} className="flex gap-2">
              <span
                aria-hidden="true"
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </details>

      {/* Instrumento y equipo */}
      <div className="mt-16 border-t border-ink/10 pt-12">
        <h2 className="font-display text-2xl tracking-wide">
          ¿QUÉ NECESITAS PARA LAS CLASES?
        </h2>
        <ul className="mt-5 space-y-2 text-sm text-ink/80">
          {necesitas.map((item) => (
            <li key={item} className="flex gap-2">
              <span
                aria-hidden="true"
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 font-display text-2xl tracking-wide">
          EL EQUIPO QUE USAMOS
        </h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <div>
            <ImagePlaceholder
              src="/images/bateria-pearl-rhythm-traveler.webp"
              alt="Batería Pearl Rhythm Traveler usada en las clases"
              ratio="aspect-[4/3]"
            />
            <p className="mt-3 text-sm text-ink/80">
              En las clases usamos una <strong>Pearl Rhythm Traveler</strong>,
              compacta y silenciosa, ideal para practicar sin molestar a los
              vecinos.
            </p>
          </div>
          <div>
            <ImagePlaceholder
              src="/images/alesis-nitro-max.webp"
              alt="Batería electrónica Alesis Nitro Max recomendada para practicar en casa"
              ratio="aspect-[4/3]"
            />
            <p className="mt-3 text-sm text-ink/80">
              Para practicar en casa, recomendamos la{" "}
              <strong>Alesis Nitro Max</strong>.
            </p>
          </div>
        </div>

        <p className="mt-6 text-sm text-ink/80">
          Además de la batería, también vas a necesitar tus propias baquetas.
          Puedes encontrarlas (y otros accesorios) en mi tienda{" "}
          <a
            href={rimshotUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline decoration-teal decoration-2 underline-offset-4"
          >
            RIMSHOT →
          </a>
        </p>
      </div>

      <div className="mt-14">
        <a
          href={waLink(defaultWaMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-sm bg-teal px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-teal-dark"
        >
          Escríbeme por WhatsApp
        </a>
      </div>
    </section>
  );
}