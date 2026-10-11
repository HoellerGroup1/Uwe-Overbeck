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
 * rechts das Formular als schriftlicher Weg. Der Ablauf ("So läuft es") ist
 * am 11.10. auf Uwes Wunsch entfallen. Der einzige
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
        </div>

        {/* Mobil trennt eine Haarlinie das Formular von den Direktwegen,
            ab md steht es in der eigenen Spalte. */}
        <div className="border-t border-ash/40 pt-stack-md md:col-span-5 md:col-start-8 md:border-t-0 md:pt-0">
          <AnfrageFormular />
        </div>
      </div>
    </Container>
  );
}
