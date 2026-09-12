/** Texte der Kontaktseite und des Formulars. */

export const kontakt = {
  meta: {
    titel: "Kontakt — Overbeck Berufsmode",
    beschreibung:
      "Unverbindliches Gespräch zu Berufskleidung für Hotel, Gastro und Firmen. Overbeck Berufsmode, Anthering bei Salzburg.",
  },
  label: "Kontakt",
  headline: "Ein Gespräch, kein Termin mit Katalog.",
  bullets: [
    "Ich frage nach Bereichen, Schichten, Größen und Waschzyklen.",
    "Sie zeigen mir, was heute getragen wird und woran es scheitert.",
    "Danach bekommen Sie einen Vorschlag. Kein Abschluss im Termin, keine Verpflichtung.",
  ],
  /**
   * Wer lieber direkt anruft, soll nicht erst bis in den Footer scrollen.
   * Die Werte selbst stehen in site.ts, hier nur die Überschrift.
   */
  direktLabel: "Oder direkt",
} as const;

export const formular = {
  ueberschrift: "Anfrage",
  felder: {
    name: { label: "Name", pflicht: true },
    betrieb: { label: "Betrieb", pflicht: true },
    rolle: {
      label: "Rolle",
      pflicht: false,
      optionen: [
        { wert: "hotel", label: "Hotel" },
        { wert: "gastronomie", label: "Gastronomie" },
        { wert: "housekeeping", label: "Housekeeping" },
        { wert: "sonstiges", label: "Sonstiges" },
      ],
    },
    email: { label: "E-Mail", pflicht: true },
    telefon: { label: "Telefon", pflicht: false },
    nachricht: { label: "Nachricht", pflicht: false },
  },
  datenschutz: {
    textVor: "Ich habe die ",
    linkLabel: "Datenschutzerklärung",
    linkHref: "/datenschutz",
    textNach:
      " gelesen und bin damit einverstanden, dass meine Angaben zur Bearbeitung der Anfrage verarbeitet werden.",
  },
  absenden: "Anfrage senden",
  absendenLaeuft: "Wird gesendet",
  pflichtHinweis: "Pflichtfelder sind mit * markiert.",
  erfolg: "Danke, Ihre Anfrage ist angekommen. Ich melde mich bei Ihnen.",
  fehlerAllgemein:
    "Das hat nicht funktioniert. Bitte versuchen Sie es in ein paar Minuten noch einmal.",
  fehlerValidierung: "Bitte prüfen Sie die markierten Felder.",
  fehlerRateLimit:
    "Es sind zu viele Anfragen in kurzer Zeit eingegangen. Bitte versuchen Sie es später noch einmal.",
} as const;

/** Feldbezogene Fehlermeldungen, von Zod verwendet. */
export const fehlermeldungen = {
  nameLeer: "Bitte geben Sie Ihren Namen an.",
  betriebLeer: "Bitte geben Sie den Betrieb an.",
  rolleUngueltig: "Bitte wählen Sie eine der angebotenen Rollen.",
  emailUngueltig: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
  telefonZuLang: "Die Telefonnummer ist zu lang.",
  nachrichtZuLang: "Die Nachricht ist zu lang.",
  datenschutzFehlt: "Ohne diese Zustimmung kann ich die Anfrage nicht bearbeiten.",
  zuLang: "Der Eintrag ist zu lang.",
} as const;
