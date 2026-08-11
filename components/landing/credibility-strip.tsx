import { Container } from "@/components/container";
import { HochzaehlZahl } from "@/components/landing/hochzaehl-zahl";
import { credibility } from "@/content/landing";

/**
 * Vier Kennzahlen, getrennt durch vertikale Hairlines.
 * Mobil zwei Spalten, ab Desktop vier.
 * Die Zahlen zählen hoch, sobald der Strip ins Bild kommt.
 */

/** Hairline links steht überall außer in der jeweils ersten Spalte einer Zeile. */
const SPALTEN_KLASSEN = [
  "pl-0",
  "border-l border-ash/40 pl-gutter",
  "pl-0 md:border-l md:border-ash/40 md:pl-gutter",
  "border-l border-ash/40 pl-gutter",
];

export function CredibilityStrip() {
  return (
    <section aria-label={credibility.label} className="border-b border-ash/40">
      <Container className="py-stack-lg">
        <dl className="grid grid-cols-2 gap-y-stack-md md:grid-cols-4 md:gap-y-0">
          {credibility.eintraege.map((eintrag, index) => (
            <div
              key={eintrag.label}
              className={`flex flex-col-reverse ${SPALTEN_KLASSEN[index]}`}
            >
              <dt className="mt-stack-sm font-body text-label-caps uppercase text-on-surface-variant">
                {eintrag.label}
              </dt>
              <dd className="font-display text-headline-lg-mobile md:text-headline-lg">
                <HochzaehlZahl wert={eintrag.wert} suffix={eintrag.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
