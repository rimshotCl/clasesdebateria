"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
};

/**
 * Usa una <img> normal apuntando a /public/images/...
 * Mientras el archivo no exista, se ve un patrón placeholder
 * con el alt text visible abajo, para que sepas exactamente
 * qué imagen va en cada lugar.
 *
 * Apenas pones el archivo real en esa ruta, la etiqueta
 * desaparece sola y queda solo la imagen. No hay que borrar
 * ni editar nada a mano.
 */
export default function ImagePlaceholder({
  src,
  alt,
  ratio = "aspect-[4/3]",
  className = "",
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Si la imagen viene de la caché del navegador, a veces ya está
  // "complete" antes de que React alcance a escuchar el evento onLoad.
  // Este chequeo cubre ese caso apenas se monta el componente.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden rounded-sm ${
        loaded ? "" : "img-placeholder"
      } ${ratio} ${className}`}
    >
      {!errored && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
        />
      )}
      {!loaded && (
        <span className="relative z-10 w-full bg-ink/80 px-3 py-2 text-xs leading-snug text-paper font-data">
          {src.replace("/images/", "")} — {alt}
        </span>
      )}
    </div>
  );
}
