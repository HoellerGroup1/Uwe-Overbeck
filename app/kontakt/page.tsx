import type { Metadata } from "next";
import { AnfrageFormular } from "@/components/kontakt/anfrage-formular";
import { Container } from "@/components/container";
import { BUTTON_PRIMAER_KLASSE, MicroLabel } from "@/components/ui";
import { kontakt } from "@/content/kontakt";
import { footer, whatsappHref } from "@/content/site";

export const metadata: Metadata = {
  title: kontakt.meta.titel,
  description: kontakt.meta.beschreibung,
};

const DIREKT_LINK =
  "font-body text-body-lg underline-offset-4 hover:underline hover:decoration-signal";

/**
 * Reihenfolge ist die Hierarchie: WhatsApp zuerst, dann Telefon und Mail,
 * dann der Ablauf, rechts das Formular als schriftlicher Weg. Der einzige
 * gefuellte Button der Seite ist der WhatsApp-Button, die einzige rote Kante
 * sitzt ueber ihm -- STYLE.md erlaubt signal als CTA-Kante.
 *
 * Kein Icon neben den Kontaktdaten und keins auf dem Button, STYLE.md,
 * Abschnitt 10. Das Wort WhatsApp reicht.
 */
export default function KontaktPage() {
  return (
    <Container as="section" className="pt-header pb-stack-lg md:pb-stack-xl">
      <div className="grid grid-cols-1 gap-stack-lg pt-stack-lg md:gap-stack-xl md:pt-stack-xl md:grid-cols-12 md:gap-gutter">
        <div className="md:col-span-6">
          <MicroLabel className="text-on-surface-variant">
            / {kontakt.label}
          </MicroLabel>
          <h1 className="mt-stack-md font-display text-display-lg-mobile text-balance md:text-display-lg">
            {kontakt.headline}
          </h1>

          {/* Hauptweg */}
          <div className="mt-stack-lg max-w-[46ch] border-t border-signal pt-stack-md">
            <MicroLabel as="h2" className="text-on-surface-variant">
              {kontakt.whatsapp.label}
            </MicroLabel>
            <p className="mt-stack-sm font-body text-body-lg">
              {kontakt.whatsapp.text}
            </p>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-stack-md ${BUTTON_PRIMAER_KLASSE}`}
            >
              {kontakt.whatsapp.buttonLabel}
            </a>
            <p className="mt-stack-sm font-body text-body-md text-on-surface-variant">
              {kontakt.whatsapp.hinweis}
            </p>
          </div>

          {/* Zweiter Weg */}
          <div className="mt-stack-lg max-w-[46ch] border-t border-ash/40 pt-stack-md">
            <MicroLabel as="h2" className="text-on-surface-variant">
              {kontakt.direktLabel}
            </MicroLabel>
            <ul className="mt-stack-sm -my-3">
              <li>
                <a
                  href={`tel:${footer.kontakt.telefonRoh}`}
                  className={`block py-3 ${DIREKT_LINK}`}
                >
                  {footer.kontakt.telefon}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${footer.kontakt.email}`}
                  className={`block py-3 ${DIREKT_LINK}`}
                >
                  {footer.kontakt.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Ablauf */}
          <div className="mt-stack-lg max-w-[46ch]">
            <MicroLabel as="h2" className="text-on-surface-variant">
              {kontakt.ablaufLabel}
            </MicroLabel>
            <ol className="mt-stack-sm border-t border-ash/40">
              {kontakt.bullets.map((bullet, i) => (
                <li
                  key={bullet}
                  className="grid grid-cols-[2.5rem_1fr] border-b border-ash/40 py-stack-md font-body text-body-lg text-on-surface-variant"
                >
                  <span className="font-body text-label-caps text-on-surface-variant pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="md:col-span-5 md:col-start-8">
          <AnfrageFormular />
        </div>
      </div>
    </Container>
  );
}
