/**
 * Globale Texte: Wortmarke, Navigation, Footer.
 * Alle sichtbaren Texte liegen in /content, nicht in den JSX-Dateien.
 */

export const site = {
  wortmarke: "Uwe Overbeck",
  /** Wird für <title> und Metadaten verwendet. */
  titel: "Uwe Overbeck — Berufskleidung für Hotel, Housekeeping und Gastronomie",
  beschreibung:
    "Beratung zu Berufskleidung für Hotellerie, Housekeeping und Gastronomie im DACH-Raum.",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const navigation: NavLink[] = [
  { label: "Hotel", href: "/hotel" },
  { label: "Gastro", href: "/gastro" },
  { label: "Beratung", href: "/beratung" },
  { label: "Kontakt", href: "/#kontakt" },
];

export const footer = {
  kontaktLabel: "Kontakt",
  /**
   * TODO(Marcel): echte Kontaktdaten von Uwe eintragen.
   * Bis dahin bewusst leere Platzhalter, damit nichts Erfundenes online geht.
   */
  kontakt: {
    email: "[E-Mail-Adresse]",
    telefon: "[Telefonnummer]",
  },
  navLabel: "Seiten",
  rechtLabel: "Rechtliches",
  rechtLinks: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ] satisfies NavLink[],
  copyrightSuffix: "Alle Rechte vorbehalten.",
} as const;
