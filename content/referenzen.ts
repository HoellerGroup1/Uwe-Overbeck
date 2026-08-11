/**
 * Datenquelle für das Referenzen-Marquee.
 *
 * Die Logos sind von Marcel freigegeben. Ein Eintrag ohne `logo` fällt
 * automatisch auf die Wortmarke zurück, so lassen sich Betriebe ergänzen,
 * deren Logo noch fehlt.
 *
 * Die Dateien sind JPEG/WebP mit weißem Hintergrund. Im Marquee liegt
 * deshalb `mix-blend-multiply` darauf, damit das Weiß in der Fläche
 * verschwindet. Sobald es SVG oder PNG mit Transparenz gibt, kann das raus.
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

export const referenzen: Referenz[] = [
  {
    name: "IMLAUER Palais Mirabell",
    logo: "/img/brand/referenzen/imlauer-palais-mirabell.webp",
    breite: 1920,
    hoehe: 1080,
  },
  {
    name: "IMLAUER Hotel Pitter Salzburg",
    logo: "/img/brand/referenzen/imlauer-hotel-pitter.jpg",
    breite: 400,
    hoehe: 366,
  },
  {
    name: "Hotel Zum Hirschen",
    logo: "/img/brand/referenzen/hotel-zum-hirschen.webp",
    breite: 574,
    hoehe: 1024,
  },
  {
    name: "Laschensky Hof",
    logo: "/img/brand/referenzen/laschensky-hof.jpeg",
    breite: 447,
    hoehe: 447,
  },
  {
    name: "Fontana",
    logo: "/img/brand/referenzen/fontana.jpeg",
    breite: 2048,
    hoehe: 1448,
  },
  {
    name: "Gabriel-Glas",
    logo: "/img/brand/referenzen/gabriel-glas.webp",
    breite: 1200,
    hoehe: 628,
  },
];
