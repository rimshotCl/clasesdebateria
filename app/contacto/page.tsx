import type { Metadata } from "next";
import RhythmBar from "@/components/RhythmBar";
import { waLink, defaultWaMessage, instagramUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto | Clases de Batería",
  description: "Escríbenos por WhatsApp o Instagram para coordinar tu clase.",
};

export default function Contacto() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-12 text-center sm:py-20">
      <RhythmBar className="mx-auto mb-6 justify-center" />
      <h1 className="font-display text-3xl tracking-wide sm:text-4xl">
        HABLEMOS
      </h1>
      <p className="mx-auto mt-4 max-w-md text-warm-gray">
        La forma más rápida de coordinar tu clase es por WhatsApp. También
        puedes seguirnos en Instagram para ver clases, alumnos y contenido.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <a
          href={waLink(defaultWaMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-sm bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] sm:w-auto"
        >
          Escríbeme por WhatsApp
        </a>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-sm border border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink/40 sm:w-auto"
        >
          Ver Instagram
        </a>
      </div>

      <p className="mt-10 font-data text-sm text-warm-gray">
        Las Condes, Santiago · Clases presenciales
      </p>
    </section>
  );
}
