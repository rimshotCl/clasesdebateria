import { waLink, defaultWaMessage } from "@/lib/site";

export default function WhatsappFloat() {
  return (
    <a
      href={waLink(defaultWaMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
        <path d="M12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.87.51 3.62 1.4 5.13L2 22l4.99-1.31A9.96 9.96 0 0 0 12.02 22C17.55 22 22 17.52 22 12S17.55 2 12.02 2Zm5.86 14.27c-.25.7-1.24 1.29-2.02 1.45-.53.11-1.23.2-3.53-.76-2.96-1.23-4.87-4.24-5.02-4.44-.15-.2-1.2-1.6-1.2-3.05 0-1.45.75-2.16 1.02-2.46.25-.28.55-.35.73-.35s.36 0 .52.01c.17.01.4-.06.62.48.25.6.83 2.06.9 2.21.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.32.38-.45.51-.15.15-.3.31-.13.6.17.3.77 1.28 1.66 2.08 1.14 1.03 2.1 1.35 2.4 1.5.3.15.47.13.65-.08.17-.2.75-.86.95-1.16.2-.3.4-.25.65-.15.27.1 1.7.8 1.99.95.28.15.47.22.53.35.07.14.07.78-.19 1.48Z" />
      </svg>
      <span className="hidden text-sm font-semibold sm:inline">Escríbenos</span>
    </a>
  );
}
