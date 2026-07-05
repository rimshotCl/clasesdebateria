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
        reales, para que sientas avances desde la primera clase.
      </p>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2">
        {temas.map((tema) => (
          <li key={tema.title} className="border-l-2 border-teal pl-4">
            <h2 className="font-display text-lg tracking-wide">{tema.title}</h2>
            <p className="mt-1 text-sm text-ink/80">{tema.body}</p>
          </li>
        ))}
      </ul>

      {/* Instrumento y equipo */}
      <div className="mt-16 border-t border-ink/10 pt-12">
        <h2 className="font-display text-2xl tracking-wide">
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
