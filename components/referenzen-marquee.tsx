import Image from "next/image";
import { Container } from "@/components/container";
import { MicroLabel } from "@/components/ui";
import { referenzen, referenzenLabel, type Referenz } from "@/content/referenzen";

/**
 * Endlos horizontal scrollende Referenzreihe. Reines CSS:
 * ein Track, das Set zweimal gerendert, translateX(0 → -50%), linear, 40s.
 * Hover und Fokus pausieren über animation-play-state, die Ränder werden
 * per mask-image ausgeblendet.
 *
 * Bei prefers-reduced-motion läuft keine Animation. Stattdessen wird
 * dieselbe Liste als statisches Grid ausgegeben.
 */
function ReferenzItem({ referenz }: { referenz: Referenz }) {
  if (referenz.logo && referenz.breite && referenz.hoehe) {
    return (
      <Image
        src={referenz.logo}
        alt={referenz.name}
        width={referenz.breite}
        height={referenz.hoehe}
        sizes="160px"
        className="h-10 w-auto object-contain opacity-55 grayscale"
      />
    );
  }

  return (
    <span className="font-display text-headline-md whitespace-nowrap text-on-surface-variant uppercase">
      {referenz.name}
    </span>
  );
}

export function ReferenzenMarquee() {
  return (
    <section
      aria-labelledby="referenzen-label"
      className="border-b border-ash/40 bg-surface py-stack-lg md:py-stack-xl"
    >
      <Container>
        <MicroLabel as="h2" id="referenzen-label" className="text-on-surface-variant">
          {referenzenLabel}
        </MicroLabel>
      </Container>

      {/* Bewegte Variante */}
      <div className="marquee-viewport marquee-mask mt-stack-md overflow-hidden motion-reduce:hidden">
        {/*
          Damit der Umlauf bei -50% nahtlos sitzt, muss die Summe der beiden
          Außenabstände genau einem Zwischenraum entsprechen:
          px-stack-lg (2 × 48px) = gap-stack-xl (96px). Beim Ändern beide anpassen.
        */}
        <ul className="marquee-track flex w-max items-center gap-stack-xl px-stack-lg">
          {referenzen.map((referenz) => (
            <li key={referenz.name}>
              <ReferenzItem referenz={referenz} />
            </li>
          ))}
          {/* Zweites Set nur für den nahtlosen Umlauf, für Screenreader unsichtbar */}
          {referenzen.map((referenz) => (
            <li key={`dublette-${referenz.name}`} aria-hidden="true">
              <ReferenzItem referenz={referenz} />
            </li>
          ))}
        </ul>
      </div>

      {/* Statische Variante bei prefers-reduced-motion */}
      <Container className="hidden motion-reduce:block">
        <ul className="mt-stack-md grid grid-cols-2 gap-stack-md sm:grid-cols-3 md:grid-cols-4">
          {referenzen.map((referenz) => (
            <li key={`statisch-${referenz.name}`} className="flex items-center">
              <ReferenzItem referenz={referenz} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
