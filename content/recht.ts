/**
 * Impressum und Datenschutzerklärung.
 *
 * Stand 13.09.: Einzelunternehmen ohne Firmenbucheintrag, Handelsgewerbe,
 * BH Salzburg-Umgebung, keine UID (deshalb keine Zeile dafür -- sobald Uwe
 * eine hat, unter Unternehmensdaten ergaenzen). Offen in eckigen Klammern:
 * WKO-Fachgruppe und Fotograf des Portraits. Beide Texte sind kein
 * geprüfter Rechtstext; vor dem Livegang prüfen lassen und ENTWURFS_HINWEIS
 * entfernen.
 *
 * Aufbau nach gewerblichem Auftritt in Österreich: § 5 ECG, § 25 MedienG,
 * § 14 UGB, GewO 1994. Die EU-Plattform zur Online-Streitbeilegung wurde
 * im Juli 2025 eingestellt, der frühere Absatz dazu ist deshalb raus.
 */

export type RechtAbschnitt = {
  titel: string;
  absaetze?: string[];
  /** Zeilen im Ledger-Stil, etwa Firmendaten. */
  eintraege?: { label: string; wert: string }[];
  liste?: string[];
};

export type Rechtstext = {
  meta: { titel: string; beschreibung: string };
  label: string;
  headline: string;
  /** Wird oben als Warnhinweis ausgegeben und muss vor dem Launch weg. */
  entwurfsHinweis: string;
  abschnitte: RechtAbschnitt[];
};

const ENTWURFS_HINWEIS =
  "Entwurf. Einzelne Angaben fehlen noch, und der Text ist nicht juristisch geprüft.";

/** Stammdaten wie in PROJEKT.md, Abschnitt 3. */
const INHABER = "Uwe Overbeck";
const FIRMA = "Overbeck Berufsmode";
const ANSCHRIFT = "Dorfstraße 11, 5102 Anthering, Österreich";
const EMAIL = "uwe@overbeck-berufsmode.at";
const TELEFON = "+49 151 59 85 19 65";
const STAND = "13. September 2026";

export const impressum: Rechtstext = {
  meta: {
    titel: "Impressum — Overbeck Berufsmode",
    beschreibung: "Impressum und Offenlegung nach § 5 ECG und § 25 MedienG.",
  },
  label: "Rechtliches",
  headline: "Impressum",
  entwurfsHinweis: ENTWURFS_HINWEIS,
  abschnitte: [
    {
      titel: "Diensteanbieter und Medieninhaber",
      eintraege: [
        { label: "Unternehmer", wert: INHABER },
        { label: "Geschäftsbezeichnung", wert: FIRMA },
        { label: "Rechtsform", wert: "Einzelunternehmen, nicht im Firmenbuch eingetragen" },
        { label: "Anschrift", wert: ANSCHRIFT },
      ],
    },
    {
      titel: "Kontakt",
      eintraege: [
        { label: "E-Mail", wert: EMAIL },
        { label: "Telefon", wert: TELEFON },
      ],
    },
    {
      titel: "Unternehmensdaten",
      eintraege: [
        {
          label: "Unternehmensgegenstand",
          wert: "Handel mit und Beratung zu Berufskleidung für Hotellerie, Gastronomie und Firmen",
        },
      ],
    },
    {
      titel: "Gewerberecht",
      eintraege: [
        { label: "Gewerbe", wert: "Handelsgewerbe" },
        { label: "Gewerbebehörde", wert: "Bezirkshauptmannschaft Salzburg-Umgebung" },
        { label: "Kammer", wert: "Wirtschaftskammer Salzburg, [Fachgruppe/Landesgremium — klärt Uwe]" },
        { label: "Berufsrecht", wert: "Gewerbeordnung 1994 (GewO)" },
      ],
      absaetze: [
        "Die Gewerbeordnung ist unter ris.bka.gv.at abrufbar.",
      ],
    },
    {
      titel: "Verantwortlich für den Inhalt",
      absaetze: [`${INHABER}, ${ANSCHRIFT}`],
    },
    {
      titel: "Streitbeilegung",
      absaetze: [
        "Das Angebot richtet sich an Unternehmen. Ich bin weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
      ],
    },
    {
      titel: "Haftung für Inhalte",
      absaetze: [
        "Die Inhalte dieser Seite werden mit Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit und Aktualität kann ich keine Gewähr übernehmen.",
      ],
    },
    {
      titel: "Haftung für Links",
      absaetze: [
        "Der Link zu WhatsApp führt zu einem Dienst der WhatsApp Ireland Limited. Für dessen Inhalte und Datenverarbeitung ist der Anbieter verantwortlich. Weitere externe Links enthält diese Seite nicht.",
      ],
    },
    {
      titel: "Urheberrecht und Bildnachweise",
      absaetze: [
        "Texte, Bilder und Gestaltung dieser Seite sind urheberrechtlich geschützt. Eine Verwendung außerhalb der gesetzlich zulässigen Fälle bedarf meiner Zustimmung.",
        "Die Logos der Referenzbetriebe und der Partnermarken Greiff und Hakro werden mit deren Einverständnis gezeigt. Die Kataloge stehen mit Zustimmung von Greiff und Hakro zum Download.",
      ],
      liste: [
        "Fotos Hotel und Gastronomie: IMLAUER Hotels & Restaurants; Pexels (Liliana Drew, cottonbro studio, Nadin Sh, Sóc Năng Động)",
        "Fotos Firmen und Startseite: Greiff Mode GmbH & Co. KG, HAKRO GmbH",
        "Portrait Uwe Overbeck: [Fotograf/in]",
        "Schrift: Switzer, Indian Type Foundry (Fontshare), ITF Free Font License",
      ],
    },
  ],
};

export const datenschutz: Rechtstext = {
  meta: {
    titel: "Datenschutz — Overbeck Berufsmode",
    beschreibung: "Informationen zur Verarbeitung personenbezogener Daten.",
  },
  label: "Rechtliches",
  headline: "Datenschutz",
  entwurfsHinweis: ENTWURFS_HINWEIS,
  abschnitte: [
    {
      titel: "Verantwortlicher",
      absaetze: [
        "Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:",
      ],
      eintraege: [
        { label: "Name", wert: `${INHABER}, ${FIRMA}` },
        { label: "Anschrift", wert: ANSCHRIFT },
        { label: "E-Mail", wert: EMAIL },
        { label: "Telefon", wert: TELEFON },
      ],
    },
    {
      titel: "Grundsatz",
      absaetze: [
        "Diese Website setzt keine Cookies und verwendet keine Analysewerkzeuge und keine Werbenetzwerke. Es werden keine Profile gebildet und keine Daten an Dritte verkauft. Deshalb gibt es auch keinen Cookie-Hinweis.",
        "Schriften und Bilder werden vom eigenen Server ausgeliefert. Beim Öffnen der Seite wird kein externer Anbieter aufgerufen.",
      ],
    },
    {
      titel: "Hosting und Server-Logfiles",
      absaetze: [
        "Die Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA betrieben. Beim Aufruf werden technisch notwendige Daten verarbeitet: IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, übertragene Datenmenge, Browsertyp und Betriebssystem.",
        "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt im sicheren und störungsfreien Betrieb der Website. Der Anbieter hält diese Logdaten nur kurzzeitig vor; ich selbst werte sie nicht aus.",
        "Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO. Die Übermittlung in die USA ist über die EU-Standardvertragsklauseln abgesichert; die Auslieferung der Seite erfolgt über Server in der EU.",
      ],
    },
    {
      titel: "Anfragen über das Formular",
      absaetze: [
        "Wenn Sie das Formular auf der Seite Kontakt nutzen, verarbeite ich die dort eingegebenen Daten: Name, Betrieb, Bereich, E-Mail-Adresse sowie optional Telefonnummer und Nachricht.",
        "Zweck ist ausschließlich die Bearbeitung Ihrer Anfrage und die Kontaktaufnahme. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) und Art. 6 Abs. 1 lit. a DSGVO (Ihre Einwilligung über das Kontrollkästchen).",
        "Die Angabe ist freiwillig. Ohne Name, Betrieb und E-Mail-Adresse kann ich die Anfrage nicht bearbeiten.",
        "Die Formularnachricht wird als E-Mail an mich zugestellt. Dafür setze ich den Dienst Resend (Resend, Inc., 2261 Market Street #5039, San Francisco, CA 94114, USA) als Auftragsverarbeiter ein. Die Übermittlung in die USA ist über die EU-Standardvertragsklauseln abgesichert.",
        "Ihre Anfrage wird gelöscht, sobald sie erledigt ist. Entsteht daraus eine Geschäftsbeziehung, gelten die gesetzlichen Aufbewahrungsfristen von bis zu sieben Jahren.",
        "Zum Schutz vor automatisierten Einsendungen enthält das Formular ein verstecktes Feld und eine Begrenzung der Anzahl von Anfragen pro IP-Adresse. Dabei werden keine zusätzlichen personenbezogenen Daten dauerhaft gespeichert.",
      ],
    },
    {
      titel: "Kontakt per E-Mail, Telefon und WhatsApp",
      absaetze: [
        "Wenn Sie mich per E-Mail oder Telefon kontaktieren, verarbeite ich Ihre Angaben zur Bearbeitung der Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.",
        "Der WhatsApp-Link auf der Kontaktseite öffnet WhatsApp auf Ihrem Gerät mit einer vorformulierten Nachricht. Erst wenn Sie diese selbst absenden, werden Daten an WhatsApp übertragen. Anbieter ist WhatsApp Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Für die Verarbeitung durch WhatsApp gilt deren Datenschutzerklärung. Beim bloßen Aufruf dieser Website fließen keine Daten an WhatsApp.",
      ],
    },
    {
      titel: "Katalog-Download",
      absaetze: [
        "Die Kataloge können ohne Angabe von Daten heruntergeladen werden. Es findet keine Registrierung und keine Auswertung statt.",
      ],
    },
    {
      titel: "Ihre Rechte",
      absaetze: [
        "Sie haben nach der DSGVO folgende Rechte gegenüber dem Verantwortlichen:",
      ],
      liste: [
        "Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15)",
        "Berichtigung unrichtiger Daten (Art. 16)",
        "Löschung (Art. 17)",
        "Einschränkung der Verarbeitung (Art. 18)",
        "Datenübertragbarkeit (Art. 20)",
        "Widerspruch gegen die Verarbeitung (Art. 21)",
        "Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3)",
      ],
    },
    {
      titel: "Beschwerderecht",
      absaetze: [
        "Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei einer Aufsichtsbehörde beschweren.",
        "Österreich: Österreichische Datenschutzbehörde, Barichgasse 40–42, 1030 Wien, dsb.gv.at.",
        "Deutschland: die für Ihren Wohnsitz zuständige Landesdatenschutzbehörde.",
      ],
    },
    {
      titel: "Stand",
      absaetze: [STAND],
    },
  ],
};
