import Image from "next/image";
import { Container } from "@/components/container";
import { BUTTON_KLASSE, MicroLabel } from "@/components/ui";
import { katalog } from "@/content/landing";

/**
 * Partnermarken und Katalog-Downloads in sand (E26).
 *
 * Links die Aussage zu Greiff und Hakro, rechts je Marke ein Block: Logo,
 * Download, Dateigröße. Die Logos sind transparente PNGs und laufen wie die
 * Referenzen monochrom -- die Hausfarben der beiden Marken sind zwei Rottöne,
 * die sich mit signal beißen würden. Kein mix-blend nötig, deshalb hier kein
 * Wrapper mit eigener Fläche.
 *
 * Bewusst als eigene Komponente gekapselt: wenn die Downloads später hinter
 * ein Formular-Gate sollen, wird nur diese Datei getauscht.
 *
 * Ein Eintrag ohne `datei` steht als offene Position da (E19): sichtbar
 * beschriftet, ohne Link.
 */
export function KatalogDownload() {
  return (
    <section
      aria-labelledby="katalog-headline"
      className="border-b border-ash/40 bg-sand"
    >
      <Container className="py-stack-lg md:py-stack-xl">
        <div className="grid grid-cols-1 gap-stack-lg md:grid-cols-12 md:gap-gutter">
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
            <p className="mt-stack-md max-w-[46ch] font-body text-body-lg">
              {katalog.ueberleitung}
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-stack-lg sm:grid-cols-2 md:col-span-4 md:grid-cols-1 md:pt-1">
            {katalog.eintraege.map((eintrag) => (
              <li key={eintrag.marke} className="border-t border-ash/60 pt-stack-md">
                {/*
                  Höhe nach Seitenverhältnis, Breite folgt. Greiff ist fast
                  quadratisch (Greif über der Wortmarke), Hakro ein
                  Querformat -- bei gleicher Höhe wäre Greiff halb so breit
                  und sähe aus wie das kleinere Logo. Gleiche Fläche statt
                  gleicher Höhe, wie im Referenzen-Marquee.
                */}
                <Image
                  src={eintrag.logo.src}
                  alt={eintrag.logo.alt}
                  width={eintrag.logo.breite}
                  height={eintrag.logo.hoehe}
                  sizes="200px"
                  loading="eager"
                  className={`w-auto opacity-90 grayscale ${
                    eintrag.logo.breite / eintrag.logo.hoehe < 1.3
                      ? "h-24 md:h-28"
                      : "h-14 md:h-16"
                  }`}
                />
                {eintrag.datei ? (
                  <>
                    <a
                      href={eintrag.datei}
                      download={eintrag.dateiname}
                      className={`mt-stack-md ${BUTTON_KLASSE}`}
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
                      className="mt-stack-md inline-block border border-ash/60 px-stack-md py-3.5 font-body text-label-caps uppercase text-on-surface-variant"
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
