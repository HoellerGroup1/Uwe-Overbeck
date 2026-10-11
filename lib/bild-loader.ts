/**
 * Eigener Loader fuer next/image. Fotos aus public/img liefern wir als fertige
 * WebP-Varianten aus public/v aus (erzeugt mit `npm run bilder`), statt sie
 * von Vercel beim ersten Aufruf umrechnen zu lassen. Logos und alles, was
 * nicht im Manifest steht, gehen unveraendert durch.
 */
import varianten from "./bild-varianten.json";

const tabelle = varianten as Record<string, number[]>;

export default function bildLoader({ src, width }: { src: string; width: number; quality?: number }) {
  const breiten = tabelle[src];
  if (!breiten) return src;
  const passend = breiten.find((b) => b >= width) ?? breiten[breiten.length - 1];
  const basis = src.replace(/^\/img\//, "").replace(/\.jpe?g$/i, "");
  return `/v/${basis}-${passend}.webp`;
}
