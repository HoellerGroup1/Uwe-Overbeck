import { Container } from "@/components/container";
import { HochzaehlZahl } from "@/components/landing/hochzaehl-zahl";
import { credibility } from "@/content/landing";

/**
 * Zwei Kennzahlen, getrennt durch eine vertikale Hairline (E10).
 *
 * Vorher waren es vier in einem vierspaltigen Band. Zwei Werte darin sahen
 * verloren aus, deshalb laufen sie jetzt über die halbe Breite und einen Grad
 * größer — display statt headline. Das Band trägt die Zahlen, statt sie zu
 * verteilen.
 *
 * Die Zahlen zählen hoch, sobald der Strip ins Bild kommt.
 *
 * Seit 13.09. in tinte und Bold (E25) statt in signal und Light -- Marcels
 * Entscheidung. Damit ist der Strip die einzige Stelle der Seite mit einem
 * fetten Schnitt; STYLE.md, Abschnitt 4 hält das fest.
 */

/** Hairline links steht bei jeder Spalte außer der ersten. */
const SPALTEN_KLASSEN = ["pl-0", "border-l border-ash/40 pl-gutter md:pl-stack-lg"];

export function CredibilityStrip() {
  return (
    <section aria-label={credibility.label} className="border-b border-ash/40">
      <Container className="py-stack-lg md:py-stack-xl">
        <dl className="grid grid-cols-2 gap-gutter">
          {credibility.eintraege.map((eintrag, index) => (
            <div
              key={eintrag.label}
              /*
                flex-col-reverse stellt die Zahl über das Label. Ohne
                justify-end sitzt der Block am unteren Rand der Spalte — und
                sobald ein Label zweizeilig umbricht (mobil bei "Betriebe
                ausgestattet"), fluchten die Zahlen nicht mehr. Oben verankert
                stehen sie auf einer Linie, die Labels hängen darunter.
              */
              className={`flex flex-col-reverse justify-end ${SPALTEN_KLASSEN[index]}`}
            >
              <dt className="mt-stack-sm font-body text-label-caps uppercase text-on-surface-variant">
                {eintrag.label}
              </dt>
              <dd className="font-display font-bold text-on-surface text-display-lg-mobile md:text-display-lg">
                <HochzaehlZahl wert={eintrag.wert} suffix={eintrag.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
