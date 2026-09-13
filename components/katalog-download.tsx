import { Container } from "@/components/container";
import { BUTTON_KLASSE, MicroLabel } from "@/components/ui";
import { katalog } from "@/content/landing";

/**
 * Katalog-Downloads in sand — ein Eintrag je Partnermarke.
 *
 * Bewusst als eigene Komponente gekapselt: wenn die Downloads später hinter
 * ein Formular-Gate sollen, wird nur diese Datei getauscht. Die Landingpage
 * bleibt unverändert.
 *
 * Ein Eintrag ohne `datei` steht als offene Position da (E19): sichtbar
 * beschriftet, ohne Link. Sobald das PDF liegt, wird nur der Content ergänzt.
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

          <div className="md:col-span-5">
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

          <ul className="flex flex-col gap-stack-md md:col-span-4 md:pt-1">
            {katalog.eintraege.map((eintrag) => (
              <li key={eintrag.marke}>
                {eintrag.datei ? (
                  <>
                    <a
                      href={eintrag.datei}
                      download={eintrag.dateiname}
                      className={BUTTON_KLASSE}
                    >
                      {eintrag.buttonLabel}
                    </a>
                    <p className="mt-stack-sm font-body text-label-caps uppercase text-on-surface-variant">
                      {eintrag.dateihinweis}
                    </p>
                  </>
                ) : (
                  <>
                    <span
                      aria-disabled="true"
                      className="inline-block border border-ash/60 px-stack-md py-3.5 font-body text-label-caps uppercase text-on-surface-variant"
                    >
                      {eintrag.buttonLabel}
                    </span>
                    <p className="mt-stack-sm font-body text-label-caps uppercase text-on-surface-variant">
                      {eintrag.hinweisOffen}
                    </p>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
