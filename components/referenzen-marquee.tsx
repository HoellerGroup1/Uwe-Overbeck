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
      /*
        Feste Zeilenhöhe, damit unterschiedliche Seitenverhältnisse optisch
        auf einer Linie sitzen.

        Das bg-surface auf diesem Wrapper ist nötig, nicht dekorativ: der Track
        ist animiert und damit transformiert, und eine Transformation erzeugt
        einen eigenen Stacking-Context. mix-blend-multiply am Logo käme deshalb
        nie bis zur Sektionsfläche durch, und das Weiß der JPEG- und
        WebP-Dateien bliebe als heller Kasten stehen. Mit der Fläche direkt am
        Wrapper hat das Blending den richtigen Hintergrund.
      */
      <span className="flex h-20 w-[170px] items-center justify-center bg-surface">
        <Image
          src={referenz.logo}
          alt={referenz.name}
          width={referenz.breite}
          height={referenz.hoehe}
          sizes="170px"
          /*
            Monochrom wie geplant. Die Deckkraft liegt bei 0.8 statt der
            ursprünglich vorgesehenen 0.55: mehrere der echten Logos haben
            feine helle Linien und verschwinden bei 0.55 fast vollständig.
          */
          className="max-h-20 w-auto max-w-[170px] object-contain opacity-80 mix-blend-multiply grayscale"
        />
      </span>
    );
  }

  return (
    <span className="flex h-20 items-center font-display text-headline-md whitespace-nowrap text-on-surface-variant uppercase">
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
