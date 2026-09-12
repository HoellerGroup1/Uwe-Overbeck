/**
 * Globale Texte: Wortmarke, Navigation, Footer.
 * Alle sichtbaren Texte liegen in /content, nicht in den JSX-Dateien.
 *
 * Stammdaten sind PROJEKT.md, Abschnitt 3. Wer sie hier aendert, aendert sie
 * dort mit.
 */

export const site = {
  /**
   * Zweizeilige Wortmarke nach STYLE.md, Abschnitt 2 (E1). Gesetzt wird sie
   * von components/wortmarke.tsx, nicht als Fliesstext.
   */
  wortmarke: {
    haupt: "Overbeck",
    subline: "Berufsmode",
  },
  /** Firmenwortlaut fuer Copyright und Metadaten. */
  firma: "Overbeck Berufsmode",
  /** Der Personenname ist Absender, nie Marke — STYLE.md, Abschnitt 2. */
  person: "Uwe Overbeck",
  claim: "Persönlicher Service für Hotel, Gastro & Firmen",
  /** Wird fuer <title> und Metadaten verwendet. */
  titel: "Overbeck Berufsmode — Berufskleidung für Hotel, Gastro und Firmen",
  beschreibung:
    "Uwe Overbeck berät Hotels, Gastronomie und Firmen bei der Auswahl ihrer Berufskleidung. Overbeck Berufsmode, Anthering bei Salzburg.",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

/**
 * "Beratung" ist entfallen und durch "Kontakt" ersetzt (E9) -- dieselbe Seite
 * unter neuer Route. "Firmen" ist das dritte Segment (E8).
 */
export const navigation: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Hotel", href: "/hotel" },
  { label: "Gastro", href: "/gastro" },
  { label: "Firmen", href: "/firmen" },
  { label: "Kontakt", href: "/kontakt" },
];

export const footer = {
  kontaktLabel: "Kontakt",
  kontakt: {
    email: "uwe@overbeck-berufsmode.at",
    telefon: "+49 151 59 85 19 65",
    /** Ohne Leerzeichen, fuer den tel:-Link. */
    telefonRoh: "+4915159851965",
    /** Postanschrift, zugleich Basis fuer das spaetere LocalBusiness-Schema. */
    strasse: "Dorfstraße 11",
    ort: "5102 Anthering",
    land: "Österreich",
  },
  navLabel: "Seiten",
  rechtLabel: "Rechtliches",
  rechtLinks: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ] satisfies NavLink[],
  copyrightSuffix: "Alle Rechte vorbehalten.",
} as const;
