import Image from "next/image";
import { Container } from "@/components/container";
import { MicroLabel } from "@/components/ui";
import type { EditorialBlock as EditorialBlockDaten } from "@/content/inspiration";

/** Feste Klassen statt dynamischer Strings, damit Tailwind sie erzeugt. */
const VERHAELTNIS_KLASSE = {
  "4/5": "aspect-4/5",
  "4/3": "aspect-4/3",
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
      <Container className="py-stack-xl">
        <div className="grid grid-cols-1 gap-stack-md md:grid-cols-12 md:items-center md:gap-gutter">
          <div
            className={`${VERHAELTNIS_KLASSE[block.bild.verhaeltnis]} relative overflow-hidden border border-ash/40 md:col-span-6 ${
              bildRechts ? "md:order-2 md:col-start-7" : "md:col-start-1"
            }`}
          >
            <Image
              src={block.bild.src}
              alt={block.bild.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover bild-ton"
            />
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
