import type { Metadata } from "next";
import { AnfrageFormular } from "@/components/kontakt/anfrage-formular";
import { Container } from "@/components/container";
import { MicroLabel } from "@/components/ui";
import { kontakt } from "@/content/kontakt";
import { footer } from "@/content/site";

export const metadata: Metadata = {
  title: kontakt.meta.titel,
  description: kontakt.meta.beschreibung,
};

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

          <ul className="mt-stack-lg max-w-[46ch] border-t border-ash/40">
            {kontakt.bullets.map((bullet) => (
              <li
                key={bullet}
                className="border-b border-ash/40 py-stack-md font-body text-body-lg text-on-surface-variant"
              >
                {bullet}
              </li>
            ))}
          </ul>

          {/* Kein Icon neben den Kontaktdaten — STYLE.md, Abschnitt 10. */}
          <div className="mt-stack-lg">
            <MicroLabel as="h2" className="text-on-surface-variant">
              {kontakt.direktLabel}
            </MicroLabel>
            <ul className="mt-stack-sm -my-3">
              <li>
                <a
                  href={`tel:${footer.kontakt.telefonRoh}`}
                  className="block py-3 font-body text-body-lg underline-offset-4 hover:underline hover:decoration-signal"
                >
                  {footer.kontakt.telefon}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${footer.kontakt.email}`}
                  className="block py-3 font-body text-body-lg underline-offset-4 hover:underline hover:decoration-signal"
                >
                  {footer.kontakt.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-5 md:col-start-8">
          <AnfrageFormular />
        </div>
      </div>
    </Container>
  );
}
