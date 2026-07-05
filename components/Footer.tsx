import { instagramUrl, waLink, defaultWaMessage, rimshotUrl } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-paper">
      <div className="mx-auto max-w-5xl px-5 py-10">
        <p className="font-display text-lg tracking-wide">CLASES DE BATERÍA</p>
        <p className="mt-1 max-w-md text-sm text-paper/70">
          Clases particulares de batería en Las Condes, Santiago. Presenciales,
          personalizadas y a tu ritmo.
        </p>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a
            href={waLink(defaultWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper underline decoration-teal decoration-2 underline-offset-4"
          >
            WhatsApp
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper underline decoration-teal decoration-2 underline-offset-4"
          >
            Instagram
          </a>
          <a
            href={rimshotUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper underline decoration-teal decoration-2 underline-offset-4"
          >
            RIMSHOT — Accesorios para instrumentos
          </a>
        </div>

        <p className="mt-8 text-xs text-paper/50">
          © {new Date().getFullYear()} Clases de Batería. Las Condes, Santiago.
        </p>
      </div>
    </footer>
  );
}
