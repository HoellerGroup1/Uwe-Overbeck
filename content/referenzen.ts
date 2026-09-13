/**
 * Datenquelle für das Referenzen-Marquee.
 *
 * Alle acht Logos liegen vor (Stand 13.09.), einheitlich aufbereitet: auf den
 * Inhalt beschnitten, in Graustufen mit gleichem Tonwertumfang (dunkelster
 * Wert = tinte), weißer Grund, WebP. Arte Hotel ohne seinen beigen Kasten.
 * Ein Eintrag ohne `logo` fiele weiterhin auf die Wortmarke zurück.
 *
 * Die Dateien haben weißen Hintergrund. Im Marquee liegt deshalb
 * `mix-blend-multiply` darauf, damit das Weiß in der Fläche verschwindet.
 * Sobald es SVG oder PNG mit Transparenz gibt, kann das raus.
 *
 * IMLAUER Palais Mirabell: die gelieferte Datei war oben abgeschnitten -- das
 * Diamant-Signet fehlte zur Hälfte. Deshalb läuft hier nur die Wortmarke
 * (IMLAUER / PALAIS MIRABELL / HOTEL & BRASSERIE / SALZBURG), ohne Signet.
 * Eine vollständige Datei von IMLAUER würde das ersetzen.
 */

export type Referenz = {
  /** Betriebsname. Dient als Alt-Text, wenn ein Logo hinterlegt ist. */
  name: string;
  /** Pfad unterhalb von /public. Wenn gesetzt, wird das Logo statt des Namens gezeigt. */
  logo?: string;
  /** Intrinsische Maße des Logos, nötig für next/image und für die Größenklasse im Marquee. */
  breite?: number;
  hoehe?: number;
};

export const referenzenLabel = "Referenzen";

export const referenzen: Referenz[] = [
  {
    name: "IMLAUER Palais Mirabell",
    logo: "/img/brand/referenzen/imlauer-palais-mirabell.webp",
    breite: 1806,
    hoehe: 701,
  },
  {
    name: "IMLAUER Hotel Pitter Salzburg",
    logo: "/img/brand/referenzen/imlauer-hotel-pitter.webp",
    breite: 338,
    hoehe: 328,
  },
  {
    name: "Hotel Zum Hirschen",
    logo: "/img/brand/referenzen/hotel-zum-hirschen.webp",
    breite: 438,
    hoehe: 866,
  },
  {
    name: "Gabriel-Glas",
    logo: "/img/brand/referenzen/gabriel-glas.webp",
    breite: 1200,
    hoehe: 417,
  },
  {
    name: "Salzburger Marionettentheater",
    logo: "/img/brand/referenzen/salzburger-marionettentheater.webp",
    breite: 376,
    hoehe: 514,
  },
  {
    name: "Arte Hotel Salzburg",
    logo: "/img/brand/referenzen/arte-hotel-salzburg.webp",
    breite: 742,
    hoehe: 443,
  },
  {
    name: "Laschensky Hof",
    logo: "/img/brand/referenzen/laschensky-hof.webp",
    breite: 357,
    hoehe: 308,
  },
  {
    name: "Segafredo",
    logo: "/img/brand/referenzen/segafredo.webp",
    breite: 341,
    hoehe: 154,
  },
];
