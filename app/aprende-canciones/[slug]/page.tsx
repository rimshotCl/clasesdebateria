import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { canciones } from "@/lib/canciones";
import { waLink } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return canciones.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const cancion = canciones.find((c) => c.slug === slug);
  if (!cancion) return {};
  return {
    title: `${cancion.tema} — ${cancion.artista} | Clases de Batería`,
    description: `Aprende a tocar "${cancion.tema}" de ${cancion.artista} en batería, con tutorial, la canción original y una versión en vivo.`,
  };
}

function youtubeMusicSearch(query: string) {
  return `https://music.youtube.com/search?q=${encodeURIComponent(query)}`;
}

export default async function CancionPage({ params }: { params: Params }) {
  const { slug } = await params;
  const cancion = canciones.find((c) => c.slug === slug);
  if (!cancion) notFound();

  const tieneFicha =
    cancion.album || cancion.baterista || cancion.descripcion || cancion.notaVideo;

  return (
    <section className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
      <Link
        href="/aprende-canciones"
        className="text-sm font-semibold text-ink underline decoration-teal decoration-2 underline-offset-4"
      >
        ← Volver al repertorio
      </Link>

      <p className="mt-6 font-data text-xs uppercase tracking-widest text-ink">
        {cancion.artista}
      </p>
      <h1 className="mt-2 font-display text-3xl tracking-wide sm:text-4xl">
        {cancion.tema.toUpperCase()}
      </h1>

      {cancion.premios && cancion.premios.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {cancion.premios.map((premio) => (
            <p
              key={premio}
              className="inline-flex items-center gap-2 rounded-full bg-paper-soft px-3 py-1.5 text-xs font-semibold text-ink"
            >
              🏆 {premio}
            </p>
          ))}
        </div>
      )}

      {/* 1. Tutorial: lo primero que la gente vino a ver */}
      <div className="mt-8">
        <h2 className="font-display text-lg tracking-wide">
          TUTORIAL EN MI CANAL
        </h2>
        <div className="mt-4 aspect-video overflow-hidden rounded-sm bg-ink/5">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${cancion.youtubeId}`}
            title={`Tutorial de batería: ${cancion.tema}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* 2. Tip de interpretación: corto y accionable, cerca del video */}
      {cancion.tipInterpretacion && (
        <div className="mt-5 border-l-2 border-teal bg-paper-soft/60 px-4 py-3">
          <p className="font-data text-xs uppercase tracking-widest text-warm-gray">
            Tip de interpretación
          </p>
          <p className="mt-1 text-sm text-ink/80">
            {cancion.tipInterpretacion}
          </p>
        </div>
      )}

      {/* 3. Ficha técnica y contexto: secundario, colapsable */}
      {tieneFicha && (
        <details className="group mt-8 border-t border-ink/10 pt-4">
          <summary className="cursor-pointer list-none text-sm font-semibold text-ink underline decoration-teal decoration-2 underline-offset-4">
            Ver más sobre esta canción
          </summary>

          <div className="mt-5">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
              <div className="flex gap-2">
                <dt className="font-semibold text-ink">Canción:</dt>
                <dd className="text-ink/80">{cancion.tema}</dd>
              </div>
              {cancion.album && (
                <div className="flex gap-2">
                  <dt className="font-semibold text-ink">Álbum:</dt>
                  <dd className="text-ink/80">{cancion.album}</dd>
                </div>
              )}
              <div className="flex gap-2">
                <dt className="font-semibold text-ink">Banda:</dt>
                <dd className="text-ink/80">{cancion.artista}</dd>
              </div>
              {cancion.baterista && (
                <div className="flex gap-2">
                  <dt className="font-semibold text-ink">Baterista:</dt>
                  <dd className="text-ink/80">{cancion.baterista}</dd>
                </div>
              )}
            </dl>

            {cancion.descripcion && (
              <p className="mt-5 text-sm leading-relaxed text-ink/80">
                {cancion.descripcion}
              </p>
            )}

            {cancion.notaVideo && (
              <p className="mt-4 text-sm leading-relaxed text-ink/80">
                {cancion.notaVideo}
              </p>
            )}
          </div>
        </details>
      )}

      {/* 4. Escuchar la canción */}
      {cancion.spotifyTrackId && (
        <div className="mt-10">
          <h2 className="font-display text-lg tracking-wide">
            ESCÚCHALA
          </h2>
          <div className="mt-4 overflow-hidden rounded-sm">
            <iframe
              className="w-full"
              height="152"
              src={`https://open.spotify.com/embed/track/${cancion.spotifyTrackId}`}
              title={`${cancion.tema} en Spotify`}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
          <a
            href={youtubeMusicSearch(`${cancion.artista} ${cancion.tema}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm text-ink underline decoration-teal decoration-2 underline-offset-4"
          >
            ¿Prefieres escucharla en YouTube Music? →
          </a>
        </div>
      )}

      {/* 5. Versión en vivo */}
      {cancion.liveYoutubeId && (
        <div className="mt-10">
          <h2 className="font-display text-lg tracking-wide">
            {cancion.artista.toUpperCase()} EN VIVO
          </h2>
          <div className="mt-4 aspect-video overflow-hidden rounded-sm bg-ink/5">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${cancion.liveYoutubeId}`}
              title={`${cancion.tema} en vivo`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* 6. CTA */}
      <div className="mt-12">
        <a
          href={waLink(
            `Hola Joaquín, me gustaría aprender "${cancion.tema}" de ${cancion.artista} en las clases.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-sm bg-teal px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-teal-dark"
        >
          Quiero aprender esta canción
        </a>
      </div>
    </section>
  );
}
