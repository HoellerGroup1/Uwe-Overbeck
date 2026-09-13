import Image from "next/image";
import Link from "next/link";
import { BildPlatzhalter } from "@/components/bild-platzhalter";
import { Container } from "@/components/container";
import { MicroLabel } from "@/components/ui";
import { tiles } from "@/content/landing";

/**
 * Drei große Bild-Tiles, verlinkt auf /hotel, /gastro und /firmen (E8).
 * Einzige Bewegung ist ein leichter Bild-Zoom beim Hover.
 *
 * Ab md drei Spalten. Bei zwei Tiles standen sie nebeneinander im Hochformat,
 * bei dreien wird das zu schmal — deshalb ab md das flachere 4:3.
 */
export function BereichsTiles() {
  return (
    <section aria-label={tiles.label} className="border-b border-ash/40">
      <Container className="py-stack-lg md:py-stack-xl">
        <ul className="grid grid-cols-1 gap-stack-lg md:grid-cols-3 md:gap-gutter">
          {tiles.eintraege.map((tile) => (
            <li key={tile.href}>
              <Link href={tile.href} className="group block">
                {/* Mobil flacher, sonst sind zwei Tiles länger als zwei Bildschirme. */}
                <div className="relative aspect-4/3 w-full overflow-hidden border border-ash/40">
                  {tile.bild.src ? (
                    <Image
                      src={tile.bild.src}
                      alt={tile.bild.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      /* Siehe EditorialBlock: Fokus pro Motiv mobil, ab md Bildmitte. */
                      style={{ "--fokus-y": `${tile.bild.fokus ?? 50}%` } as React.CSSProperties}
                      className="img-zoom object-cover object-[50%_var(--fokus-y)] bild-ton md:object-center"
                    />
                  ) : (
                    <BildPlatzhalter hinweis="Bild folgt" />
                  )}
                </div>
                <MicroLabel className="mt-stack-md text-on-surface-variant">
                  / {tile.kategorie}
                </MicroLabel>
                <p className="mt-stack-sm font-display text-headline-md group-hover:underline underline-offset-8">
                  {tile.titel}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
