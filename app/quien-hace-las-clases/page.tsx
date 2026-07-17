import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { waLink, defaultWaMessage } from "@/lib/site";

export const metadata: Metadata = {
  title: "El profesor | Clases de Batería",
  description: "Conoce a Joaquín Winther, profesor de batería en Las Condes.",
};

export default function QuienHaceLasClases() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
      <p className="font-data text-xs uppercase tracking-widest text-ink">
        El profesor
      </p>
      <h1 className="mt-2 font-display text-3xl tracking-wide sm:text-4xl">
        JOAQUÍN WINTHER
      </h1>

      <div className="mt-8 grid gap-10 sm:grid-cols-[1fr_1.2fr] sm:items-start">
        <ImagePlaceholder
          src="/images/profesor-retrato.webp"
          alt="Retrato de Joaquín Winther, profesor de batería"
          ratio="aspect-[3/4]"
        />

        <div className="space-y-5 text-base leading-relaxed text-ink/90">
          <p>
            Llevo más de 10 años dedicado al estudio de la batería, con
            formación junto a Rodrigo Recabarren, baterista chileno radicado
            en Nueva York y con estudios en NYU, además de literatura técnica
            especializada y mi paso por el Taller de Canciones Raras. Un
            recorrido enfocado en entender a fondo el instrumento: técnica,
            lectura musical y estilos.
          </p>
          <p>
            Creo en una enseñanza personalizada: cada alumno avanza según su
            propio ritmo, combinando técnica, lectura musical y repertorio real
            desde las primeras clases, en lugar de ejercicios abstractos y
            genéricos.
          </p>
          <p>
            Dicto mis clases de forma presencial en la comuna de Las Condes, ya
            sea en mi casa o en la casa del estudiante.
          </p>
        </div>
      </div>

      <div className="mt-10">
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