import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import RhythmBar from "@/components/RhythmBar";
import { waLink, defaultWaMessage } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 pb-12 pt-10 sm:pt-16">
        <div className="grid gap-8 sm:grid-cols-2 sm:items-center sm:gap-10">
          <div>
            <RhythmBar className="mb-6" />
            <h1 className="font-display text-4xl leading-[0.95] tracking-wide text-ink sm:text-5xl">
              CLASES DE BATERÍA
              <span className="relative mt-1 block w-fit">
                <span className="absolute inset-x-0 bottom-1 h-3 bg-teal sm:h-4" aria-hidden="true" />
                <span className="relative">A TU RITMO</span>
              </span>
            </h1>
            <p className="mt-5 max-w-md text-base text-warm-gray sm:text-lg">
              Clases particulares presenciales en Las Condes. Aprende técnica,
              lectura musical y a tocar tus canciones favoritas, de forma
              personalizada.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={waLink(defaultWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-teal px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-teal-dark"
              >
                Escríbeme por WhatsApp
              </a>
              <Link
                href="/que-vas-a-aprender"
                className="rounded-sm border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
              >
                Qué vas a aprender
              </Link>
            </div>
          </div>

          <ImagePlaceholder
            src="/images/hero-bateria.webp"
            alt="Profesor tocando batería durante una clase presencial"
            ratio="aspect-[4/3]"
          />
        </div>
      </section>

      {/* Resumen en 3 columnas */}
      <section className="border-y border-ink/10 bg-paper-soft/60">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 py-14 sm:grid-cols-3">
          <SummaryCard
            eyebrow="El profesor"
            title="Joaquín Winther"
            body="Más de 10 años tocando batería, formación con Rodrigo Recabarren y estudio autodidacta con material como Great Hands for a Lifetime y Groove Essentials de Tommy Igoe."
            href="/quien-hace-las-clases"
          />
          <SummaryCard
            eyebrow="El método"
            title="Técnica + repertorio"
            body="Lectura musical, coordinación y estilos, aplicados directamente a canciones que quieras tocar."
            href="/que-vas-a-aprender"
          />
          <SummaryCard
            eyebrow="La inversión"
            title="Clases flexibles"
            body="Clase única o ciclos de 4 clases, presenciales en tu casa o en mi casa."
            href="/cuanto-cuesta"
          />
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-5xl px-5 py-16 text-center">
        <h2 className="font-display text-2xl tracking-wide sm:text-3xl">
          ¿LISTO PARA EMPEZAR A TOCAR?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-warm-gray">
          Cuéntame tu nivel y disponibilidad y coordinamos tu primera clase.
        </p>
        <a
          href={waLink(defaultWaMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-sm bg-teal px-7 py-3 text-sm font-semibold text-ink transition-colors hover:bg-teal-dark"
        >
          Escríbeme por WhatsApp
        </a>
      </section>
    </>
  );
}

function SummaryCard({
  eyebrow,
  title,
  body,
  href,
}: {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
}) {
  return (
    <Link href={href} className="group block">
      <p className="font-data text-xs uppercase tracking-widest text-ink">
        {eyebrow}
      </p>
      <h3 className="mt-2 font-display text-xl tracking-wide">{title}</h3>
      <p className="mt-2 text-sm text-warm-gray">{body}</p>
      <span className="mt-3 inline-block text-sm font-semibold text-ink underline decoration-teal decoration-2 underline-offset-4">
        Ver más →
      </span>
    </Link>
  );
}
