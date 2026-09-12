import { site } from "@/content/site";

/**
 * Die Wortmarke nach STYLE.md, Abschnitt 2 (Entscheidung E1):
 *
 *   OVERBECK
 *   ---------   <- Trennlinie in signal, genau auf Breite der ersten Zeile
 *   BERUFSMODE
 *
 * Zwei Details, die leicht kaputtgehen:
 *
 * 1. letter-spacing haengt hinter dem LETZTEN Buchstaben. Ohne das negative
 *    rechte Margin waere die Box um eine Sperrung breiter als das sichtbare
 *    Wort -- die Linie liefe rechts ins Leere. Deshalb -0.18em Margin.
 *
 * 2. Die Subline soll buendig mit OVERBECK enden. Ueber ein festes
 *    letter-spacing ginge das nur fuer genau eine Schriftgroesse: OVERBECK hat
 *    acht Zeichen, BERUFSMODE zehn, und die Subline laeuft auf halber Groesse.
 *    Stattdessen verteilt flex/justify-between den Rest gleichmaessig auf die
 *    Zwischenraeume. Das ist optisch dasselbe wie gleichmaessige Sperrung --
 *    und STYLE.md verbietet nur den Ausgleich je Buchstabenpaar, nicht die
 *    gleichmaessige Verteilung.
 *
 * Die Hoehe der kleinen Fassung ist mit 36 px bewusst identisch zur frueheren
 * einzeiligen Wortmarke, damit die Kopfhoehe und damit .pt-header stimmen.
 */

const GROESSEN = {
  klein: {
    haupt: "text-[18px] leading-[20px]",
    linie: "mt-[2px]",
    subline: "mt-[2px] text-[9px] leading-[11px]",
  },
  gross: {
    haupt: "text-[32px] leading-[36px] md:text-[44px] md:leading-[48px]",
    linie: "mt-[3px] md:mt-[4px]",
    subline:
      "mt-[3px] text-[16px] leading-[19px] md:mt-[4px] md:text-[22px] md:leading-[26px]",
  },
} as const;

export function Wortmarke({
  groesse = "klein",
  className = "",
}: {
  groesse?: keyof typeof GROESSEN;
  className?: string;
}) {
  const stil = GROESSEN[groesse];
  const buchstaben = site.wortmarke.subline.split("");

  return (
    <span
      className={`inline-block w-fit ${className}`}
      aria-label={`${site.wortmarke.haupt} ${site.wortmarke.subline}`}
      role="img"
    >
      <span
        aria-hidden="true"
        className={`block font-display font-medium uppercase ${stil.haupt}`}
        style={{ letterSpacing: "0.18em", marginRight: "-0.18em" }}
      >
        {site.wortmarke.haupt}
      </span>

      {/* Nichttextliches Element -- auf ink damit auch bei 3,5:1 zulaessig. */}
      <span
        aria-hidden="true"
        className={`block h-px w-full bg-signal ${stil.linie}`}
      />

      <span
        aria-hidden="true"
        className={`flex w-full justify-between font-body font-normal uppercase ${stil.subline}`}
      >
        {buchstaben.map((zeichen, index) => (
          <span key={`${zeichen}-${index}`}>{zeichen}</span>
        ))}
      </span>
    </span>
  );
}
