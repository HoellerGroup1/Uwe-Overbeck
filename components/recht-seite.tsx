import { Container } from "@/components/container";
import { MicroLabel } from "@/components/ui";
import type { Rechtstext } from "@/content/recht";

/** Gemeinsames Gerüst für Impressum und Datenschutz. */
export function RechtSeite({ text }: { text: Rechtstext }) {
  return (
    <Container as="section" className="pt-header pb-stack-lg md:pb-stack-xl">
      <div className="grid grid-cols-1 gap-stack-lg pt-stack-lg md:pt-stack-xl md:grid-cols-12 md:gap-gutter">
        <div className="md:col-span-3">
          <MicroLabel className="text-on-surface-variant">/ {text.label}</MicroLabel>
        </div>

        <div className="md:col-span-8">
          <h1 className="font-display text-headline-lg-mobile md:text-display-lg">
            {text.headline}
          </h1>

          {/* TODO(Marcel): Hinweis entfernen, sobald der Text geprüft ist. */}
          <p className="mt-stack-md border-l-2 border-error pl-gutter font-body text-body-md text-error">
            {text.entwurfsHinweis}
          </p>

          <div className="mt-stack-lg max-w-[68ch] border-t border-ash/40">
            {text.abschnitte.map((abschnitt) => (
              <section
                key={abschnitt.titel}
                className="border-b border-ash/40 py-stack-lg"
              >
                <h2 className="font-display text-headline-md">{abschnitt.titel}</h2>

                {abschnitt.eintraege && (
                  <dl className="mt-stack-md">
                    {abschnitt.eintraege.map((eintrag) => (
                      <div
                        key={eintrag.label}
                        className="grid grid-cols-1 gap-1 border-t border-ash/30 py-stack-sm first:border-t-0 first:pt-0 sm:grid-cols-3 sm:gap-gutter"
                      >
                        <dt className="font-body text-label-caps uppercase text-on-surface-variant">
                          {eintrag.label}
                        </dt>
                        <dd className="font-body text-body-md sm:col-span-2">
                          {eintrag.wert}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                {abschnitt.absaetze?.map((absatz) => (
                  <p
                    key={absatz}
                    className="mt-stack-md font-body text-body-md text-on-surface-variant"
                  >
                    {absatz}
                  </p>
                ))}

                {abschnitt.liste && (
                  <ul className="mt-stack-md space-y-stack-sm">
                    {abschnitt.liste.map((punkt) => (
                      <li
                        key={punkt}
                        className="border-l border-ash/40 pl-gutter font-body text-body-md text-on-surface-variant"
                      >
                        {punkt}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
