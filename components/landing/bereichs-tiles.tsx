import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { MicroLabel } from "@/components/ui";
import { tiles } from "@/content/landing";

/**
 * Zwei große Bild-Tiles, verlinkt auf /hotel und /gastro.
 * Einzige Bewegung ist ein leichter Bild-Zoom beim Hover.
 */
export function BereichsTiles() {
  return (
    <section aria-label={tiles.label} className="border-b border-ash/40">
      <Container className="py-stack-lg md:py-stack-xl">
        <ul className="grid grid-cols-1 gap-stack-lg md:grid-cols-2 md:gap-gutter">
          {tiles.eintraege.map((tile) => (
            <li key={tile.href}>
              <Link href={tile.href} className="group block">
                {/* Mobil flacher, sonst sind zwei Tiles länger als zwei Bildschirme. */}
                <div className="relative aspect-4/3 w-full overflow-hidden border border-ash/40 md:aspect-4/5">
                  <Image
                    src={tile.bild.src}
                    alt={tile.bild.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    /* Siehe EditorialBlock: oben verankert, damit im
                       Querformat die Köpfe im Bild bleiben. */
                    className="img-zoom object-cover object-top bild-ton md:object-center"
                  />
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
