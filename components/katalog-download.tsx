import { Container } from "@/components/container";
import { MicroLabel } from "@/components/ui";
import { katalog } from "@/content/landing";

/**
 * Katalog-Download in sand.
 *
 * Bewusst als eigene Komponente gekapselt: wenn der Download später hinter ein
 * Formular-Gate soll, wird nur diese Datei getauscht. Die Landingpage bleibt
 * unverändert.
 */
export function KatalogDownload() {
  return (
    <section
      aria-labelledby="katalog-headline"
      className="border-b border-ash/40 bg-sand"
    >
      <Container className="py-stack-lg md:py-stack-xl">
        <div className="grid grid-cols-1 gap-stack-md md:grid-cols-12 md:gap-gutter">
          <div className="md:col-span-3">
            <MicroLabel className="text-on-surface-variant">{katalog.label}</MicroLabel>
          </div>

          <div className="md:col-span-6">
            <h2
              id="katalog-headline"
              className="font-display text-headline-lg-mobile text-balance md:text-headline-lg"
            >
              {katalog.headline}
            </h2>
            <p className="mt-stack-md max-w-[46ch] font-body text-body-lg text-on-surface-variant">
              {katalog.text}
            </p>
          </div>

          <div className="md:col-span-3 md:pt-1">
            <a
              href={katalog.datei}
              download={katalog.dateiname}
              className="inline-block border border-primary px-stack-md py-3 font-body text-label-caps uppercase text-primary hover:bg-primary hover:text-on-primary"
            >
              {katalog.buttonLabel}
            </a>
            <p className="mt-stack-sm font-body text-label-caps uppercase text-on-surface-variant">
              {katalog.dateihinweis}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
