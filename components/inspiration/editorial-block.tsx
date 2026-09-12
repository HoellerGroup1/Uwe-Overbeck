import Image from "next/image";
import { BildPlatzhalter } from "@/components/bild-platzhalter";
import { Container } from "@/components/container";
import { MicroLabel } from "@/components/ui";
import type { EditorialBlock as EditorialBlockDaten } from "@/content/inspiration";

/**
 * Feste Klassen statt dynamischer Strings, damit Tailwind sie erzeugt.
 *
 * Auf Mobile laufen alle Bilder im Querformat 4:3. Ein 4:5-Bild wäre bei
 * 342 px Spaltenbreite 428 px hoch — damit wird ein Block länger als ein
 * Bildschirm, für zwei Sätze Text. Ab md gilt wieder das gewählte Verhältnis.
 */
const VERHAELTNIS_KLASSE = {
  "4/5": "aspect-4/3 md:aspect-4/5",
  "4/3": "aspect-4/3",
} as const;

/** Bildregie pro Motiv, siehe `fokus` in content/inspiration.ts. */
const FOKUS_KLASSE = {
  oben: "object-top md:object-center",
  mitte: "object-center",
} as const;

/**
 * Editorialer Bild/Text-Block. Ab Desktop wechselt die Bildseite von Block zu
 * Block, mobil steht das Bild immer über dem Text.
 */
export function EditorialBlock({
  block,
  index,
}: {
  block: EditorialBlockDaten;
  index: number;
}) {
  const bildRechts = index % 2 === 1;

  return (
    <section className="border-b border-ash/40">
      <Container className="py-stack-lg md:py-stack-xl">
        <div className="grid grid-cols-1 gap-stack-md md:grid-cols-12 md:items-center md:gap-gutter">
          <div
            className={`${VERHAELTNIS_KLASSE[block.bild.verhaeltnis]} relative overflow-hidden border border-ash/40 md:col-span-6 ${
              bildRechts ? "md:order-2 md:col-start-7" : "md:col-start-1"
            }`}
          >
            {block.bild.src ? (
              <Image
                src={block.bild.src}
                alt={block.bild.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className={`object-cover bild-ton ${FOKUS_KLASSE[block.bild.fokus ?? "oben"]}`}
              />
            ) : (
              <BildPlatzhalter hinweis="Bild folgt" />
            )}
          </div>

          <div
            className={`md:col-span-5 ${
              bildRechts ? "md:order-1 md:col-start-1" : "md:col-start-8"
            }`}
          >
            <MicroLabel className="text-on-surface-variant">
              {String(index + 1).padStart(2, "0")}
            </MicroLabel>
            <h2 className="mt-stack-sm font-display text-headline-lg-mobile text-balance md:text-headline-lg">
              {block.headline}
            </h2>
            <p className="mt-stack-md max-w-[46ch] font-body text-body-lg text-on-surface-variant">
              {block.text}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
