import { Container } from "@/components/container";
import { TextLink } from "@/components/ui";
import { whatsapp, whatsappHref } from "@/content/site";

/**
 * CTA-Band in ink. Wird auf der Landingpage und auf den drei Bereichsseiten
 * genutzt.
 *
 * Zwei Wege, klare Reihenfolge: WhatsApp zuerst (E24), darunter der Link zur
 * Kontaktseite in ash. Beides Textlinks -- ein gefuellter Button auf ink
 * waere eine helle Flaeche, und STYLE.md will tinte als ganze Sektion, nicht
 * als Kasten mit Kasten darin.
 */
export function AbschlussCta({
  headline,
  text,
  linkLabel,
  linkHref,
}: {
  headline: string;
  text: string;
  linkLabel: string;
  linkHref: string;
}) {
  return (
    <section
      aria-labelledby="cta-headline"
      className="border-t border-signal bg-ink text-on-primary"
    >
      <Container className="py-stack-lg md:py-stack-xl">
        <div className="grid grid-cols-1 gap-stack-md md:grid-cols-12 md:items-end md:gap-gutter">
          <div className="md:col-span-7">
            <h2
              id="cta-headline"
              className="font-display text-headline-lg-mobile text-balance md:text-headline-lg"
            >
              {headline}
            </h2>
            <p className="mt-stack-md max-w-[42ch] font-body text-body-lg text-ash">
              {text}
            </p>
          </div>
          <div className="flex flex-col items-start gap-stack-md md:col-span-4 md:col-start-9 md:items-end md:text-right">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="-mt-5 inline-block border-b border-current pt-6 pb-1 font-body text-label-caps uppercase transition-colors hover:border-signal"
            >
              {whatsapp.label}
            </a>
            <TextLink href={linkHref} className="text-ash hover:text-on-primary">
              {linkLabel}
            </TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
