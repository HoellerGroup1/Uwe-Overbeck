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
/**
 * Größenklasse nach Seitenverhältnis. Ein fester Rahmen mit max-h und max-w
 * behandelt alle Logos gleich, sieht aber ungleich aus: ein Hochformat wie
 * Zum Hirschen (0,5) wird 40 px schmal, ein Querformat wie Gabriel-Glas (2,9)
 * füllt die volle Breite. Ausgeglichen wird über die sichtbare Fläche --
 * hohe Logos dürfen die ganze Zeilenhöhe nutzen, breite bekommen weniger
 * Höhe, damit sie nicht das Band dominieren.
 */
function groessenKlasse(breite: number, hoehe: number) {
  const verhaeltnis = breite / hoehe;
  if (verhaeltnis < 0.85) return "max-h-14 md:max-h-20"; // hoch
  if (verhaeltnis > 2) return "max-h-10 md:max-h-14"; // breit
  return "max-h-14 md:max-h-20"; // annähernd quadratisch, meist mit Textzeilen
}

function ReferenzItem({ referenz }: { referenz: Referenz }) {
  if (referenz.logo && referenz.breite && referenz.hoehe) {
    return (
      /*
        Feste Zeilenhöhe, damit unterschiedliche Seitenverhältnisse optisch
        auf einer Linie sitzen.

        Das bg-surface auf diesem Wrapper ist nötig, nicht dekorativ: der Track
        ist animiert und damit transformiert, und eine Transformation erzeugt
        einen eigenen Stacking-Context. mix-blend-multiply am Logo käme deshalb
        nie bis zur Sektionsfläche durch, und das Weiß der WebP-Dateien bliebe
        als heller Kasten stehen. Mit der Fläche direkt am Wrapper hat das
        Blending den richtigen Hintergrund.
      */
      <span className="flex h-14 w-[130px] items-center justify-center bg-surface md:h-20 md:w-[170px]">
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
          className={`w-auto max-w-[130px] object-contain opacity-80 mix-blend-multiply grayscale md:max-w-[170px] ${groessenKlasse(referenz.breite, referenz.hoehe)}`}
        />
      </span>
    );
  }

  return (
    /*
      Fallback ohne Logo. Bewusst klein und in gemischter Schreibweise: in
      Versalien und headline-md war "Marionettentheater" dreimal so breit wie
      die Logos daneben und kippte das ganze Band. Ein Textname soll ungefähr
      so viel Platz einnehmen wie ein Logo, nicht mehr.
    */
    <span className="flex h-14 items-center font-body text-body-lg whitespace-nowrap text-on-surface-variant md:h-20">
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
          Außenabstände genau einem Zwischenraum entsprechen. Das gilt pro
          Breakpoint und ist beim Ändern beidseitig nachzuziehen:
            mobil  px-stack-md (2 × 24px) = gap-stack-lg (48px)
            ab md  px-stack-lg (2 × 48px) = gap-stack-xl (96px)
          Mobil enger, weil bei 96px Abstand kaum mehr als ein Logo gleichzeitig
          im Bild wäre.
        */}
        <ul className="marquee-track flex w-max items-center gap-stack-lg px-stack-md md:gap-stack-xl md:px-stack-lg">
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
