export const whatsappNumber = "56961735865";

export function waLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultWaMessage =
  "Hola Joaquín, quiero información sobre las clases de batería";

export const instagramUrl = "https://instagram.com/clasesdebateria.cl";
export const rimshotUrl = "https://www.rimshot.cl/";

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/quien-hace-las-clases", label: "El profesor" },
  { href: "/que-vas-a-aprender", label: "Qué vas a aprender" },
  { href: "/cuanto-cuesta", label: "Cuánto cuesta" },
  { href: "/aprende-canciones", label: "Repertorio" },
  { href: "/contacto", label: "Contacto" },
];
