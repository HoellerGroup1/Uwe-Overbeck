/** Texte der Kontaktseite und des Formulars. */

export const kontakt = {
  meta: {
    titel: "Kontakt — Overbeck Berufsmode",
    beschreibung:
      "Unverbindliches Gespräch zu Berufskleidung für Hotel, Gastro und Firmen. Am schnellsten per WhatsApp. Overbeck Berufsmode, Anthering bei Salzburg.",
  },
  label: "Kontakt",
  headline: "Wir reden, bevor Sie etwas bestellen.",
  /**
   * WhatsApp ist der Hauptweg (E21, E24). Uwe will die meisten Anfragen dort
   * bekommen. Der Link oeffnet WhatsApp beim Besucher mit vorformuliertem
   * Text; nichts laeuft ueber unseren Server.
   */
  whatsapp: {
    label: "Der schnellste Weg",
    text: "Schreiben Sie mir auf WhatsApp. Ein paar Zeilen reichen. Ein Foto von dem, was Ihr Team heute trägt, ist noch besser.",
    buttonLabel: "Auf WhatsApp schreiben",
    hinweis: "Öffnet WhatsApp mit einer vorbereiteten Nachricht.",
  },
  /** Telefon und Mail als zweiter Weg, die Werte stehen in site.ts. */
  direktLabel: "Oder anrufen, oder mailen",
  ablaufLabel: "So läuft es",
  bullets: [
    "Ich frage nach Bereichen, Größen und Wäsche.",
    "Sie sagen mir, woran es bei der aktuellen Kleidung hakt.",
    "Danach bekommen Sie einen Vorschlag. Entscheiden können Sie in Ruhe.",
  ],
} as const;

export const formular = {
  /** Das Formular ist der zweite Weg. Die Ueberschrift sagt das. */
  ueberschrift: "Lieber schriftlich?",
  einleitung:
    "Das Formular kommt als E-Mail bei mir an, und ich antworte persönlich.",
  felder: {
    name: { label: "Name", pflicht: true },
    betrieb: { label: "Betrieb", pflicht: true },
    /**
     * Sichtbar heißt das Feld "Bereich" — Hotel und Gastronomie sind keine
     * Rollen. Der interne Feldname `rolle` bleibt, er steckt im Schema, in der
     * Server Action und in der Benachrichtigungsmail.
     *
     * "Firma" ist seit dem dritten Segment dazugekommen: ohne den Eintrag
     * konnte ein Firmenkunde seinen Bereich nicht angeben.
     */
    rolle: {
      label: "Bereich",
      pflicht: false,
      optionen: [
        { wert: "hotel", label: "Hotel" },
        { wert: "gastronomie", label: "Gastronomie" },
        { wert: "housekeeping", label: "Housekeeping" },
        { wert: "firma", label: "Firma" },
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
  rolleUngueltig: "Bitte wählen Sie einen der angebotenen Bereiche.",
  emailUngueltig: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
  telefonZuLang: "Die Telefonnummer ist zu lang.",
  nachrichtZuLang: "Die Nachricht ist zu lang.",
  datenschutzFehlt: "Ohne diese Zustimmung kann ich die Anfrage nicht bearbeiten.",
  zuLang: "Der Eintrag ist zu lang.",
} as const;
