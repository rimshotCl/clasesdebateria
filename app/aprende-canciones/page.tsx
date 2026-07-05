import type { Metadata } from "next";
import Link from "next/link";
import { waLink, defaultWaMessage } from "@/lib/site";
import { canciones } from "@/lib/canciones";

export const metadata: Metadata = {
  title: "Repertorio | Clases de Batería",
  description:
    "Aprende a tocar canciones completas en batería: El Cuarteto de Nos, Los Bunkers, Molotov y más, con videos en mi canal de YouTube.",
};

const youtubeChannel = "https://www.youtube.com/@clasesdebateriacl";

export default function AprendeCanciones() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
      <p className="font-data text-xs uppercase tracking-widest text-ink">
        Repertorio
      </p>
      <h1 className="mt-2 font-display text-3xl tracking-wide sm:text-4xl">
        APRENDE A TOCAR CANCIONES
      </h1>
      <p className="mt-4 max-w-2xl text-base text-warm-gray">
        En esta sección encontrarás una lista de canciones que te enseñaré a
        tocar en batería, a través de videos en mi canal de YouTube.
      </p>
      <a
        href={youtubeChannel}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-sm font-semibold text-ink underline decoration-teal decoration-2 underline-offset-4"
      >
        Ver mi canal de YouTube →
      </a>

      <ol className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
        {canciones.map((c, i) => (
          <li key={c.slug}>
            <Link
              href={`/aprende-canciones/${c.slug}`}
              className="group flex items-center justify-between gap-4 py-4"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-data text-sm text-warm-gray">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-lg tracking-wide leading-none">
                    {c.tema}
                  </p>
                  <p className="text-sm text-warm-gray">{c.artista}</p>
                </div>
              </div>
              <span className="shrink-0 text-sm font-semibold text-ink underline decoration-teal decoration-2 underline-offset-4 group-hover:decoration-teal-dark">
                Ver clase →
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <div className="mt-12">
        <a
          href={waLink(
            `${defaultWaMessage}. Me gustaría aprender una canción específica.`
          )}
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
