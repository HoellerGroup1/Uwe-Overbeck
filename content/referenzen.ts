/**
 * Datenquelle für das Referenzen-Marquee.
 *
 * Solange kein `logo` gesetzt ist, rendert das Marquee den `name` als
 * Wortmarke. Sobald Logo und Freigabe des Betriebs vorliegen, reicht es,
 * pro Eintrag `logo`, `breite` und `hoehe` zu ergänzen und den Namen zu
 * korrigieren — an der Komponente muss nichts geändert werden.
 *
 * Die sechs echten Logos liegen bereits unter
 * public/img/brand/referenzen/, sind aber bewusst noch nicht eingebunden:
 * die schriftlichen Freigaben fehlen. Siehe TODO.md, Punkt 2.
 */

export type Referenz = {
  /** Betriebsname. Dient als Alt-Text, wenn ein Logo hinterlegt ist. */
  name: string;
  /** Pfad unterhalb von /public. Wenn gesetzt, wird das Logo statt des Namens gezeigt. */
  logo?: string;
  /** Intrinsische Maße des Logos, nötig für next/image. */
  breite?: number;
  hoehe?: number;
};

export const referenzenLabel = "Referenzen";

/**
 * Neutrale Platzhalter ohne echte Betriebsnamen. Bewusst als solche erkennbar,
 * damit nichts Erfundenes online geht.
 */
export const referenzen: Referenz[] = [
  { name: "Referenz 01" },
  { name: "Referenz 02" },
  { name: "Referenz 03" },
  { name: "Referenz 04" },
  { name: "Referenz 05" },
  { name: "Referenz 06" },
  { name: "Referenz 07" },
  { name: "Referenz 08" },
];
