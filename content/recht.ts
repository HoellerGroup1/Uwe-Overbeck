/**
 * Impressum und Datenschutzerklärung.
 *
 * WICHTIG: Das ist eine Struktur mit Platzhaltern, kein geprüfter Rechtstext.
 * Alle Angaben in eckigen Klammern müssen ersetzt werden, und beide Texte
 * gehören vor dem Livegang juristisch geprüft. Siehe TODO.md, Punkt 4.
 *
 * Aufbau orientiert sich an einem gewerblichen Auftritt in Österreich
 * (§ 5 ECG, § 25 MedienG, GewO) mit den in Deutschland üblichen Angaben
 * (§ 5 DDG) als Alternative. Nicht Zutreffendes streichen.
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
  "Entwurf. Dieser Text enthält Platzhalter und ist noch nicht juristisch geprüft. Vor dem Livegang ersetzen und prüfen lassen.";

export const impressum: Rechtstext = {
  meta: {
    titel: "Impressum — Uwe Overbeck",
    beschreibung: "Impressum und Offenlegung.",
  },
  label: "Rechtliches",
  headline: "Impressum",
  entwurfsHinweis: ENTWURFS_HINWEIS,
  abschnitte: [
    {
      titel: "Diensteanbieter und Medieninhaber",
      eintraege: [
        { label: "Firmenwortlaut", wert: "[Vollständiger Firmenwortlaut]" },
        { label: "Rechtsform", wert: "[Rechtsform, z. B. Einzelunternehmen, GmbH]" },
        { label: "Inhaber", wert: "[Vor- und Nachname]" },
        { label: "Anschrift", wert: "[Straße und Hausnummer, PLZ Ort, Land]" },
      ],
    },
    {
      titel: "Kontakt",
      eintraege: [
        { label: "E-Mail", wert: "[E-Mail-Adresse]" },
        { label: "Telefon", wert: "[Telefonnummer]" },
      ],
    },
    {
      titel: "Unternehmensdaten",
      eintraege: [
        { label: "UID-Nummer", wert: "[ATU… bzw. USt-IdNr. DE…]" },
        { label: "Firmenbuchnummer", wert: "[FN … bzw. Handelsregister HRB …]" },
        { label: "Firmenbuchgericht", wert: "[Gericht bzw. Registergericht]" },
        { label: "Unternehmensgegenstand", wert: "[Kurzbeschreibung der Tätigkeit]" },
      ],
    },
    {
      titel: "Gewerberecht",
      eintraege: [
        { label: "Gewerbe", wert: "[Genaue Gewerbeberechtigung]" },
        { label: "Behörde", wert: "[Zuständige Gewerbe- bzw. Aufsichtsbehörde]" },
        { label: "Kammer", wert: "[Kammerzugehörigkeit, z. B. WKO Landeskammer]" },
        { label: "Berufsrecht", wert: "[Anwendbare Rechtsvorschriften, z. B. GewO 1994]" },
      ],
      absaetze: [
        "Die berufsrechtlichen Vorschriften sind unter [Fundstelle, z. B. ris.bka.gv.at] abrufbar.",
      ],
    },
    {
      titel: "Verantwortlich für den Inhalt",
      absaetze: ["[Vor- und Nachname, Anschrift]"],
    },
    {
      titel: "Online-Streitbeilegung",
      absaetze: [
        "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit. Verbraucherinnen und Verbraucher können diese für die Beilegung von Streitigkeiten nutzen.",
        "Ich bin weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. [Prüfen und gegebenenfalls anpassen.]",
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
        "Diese Seite enthält keine Verlinkungen auf fremde Websites. Sollten künftig externe Links ergänzt werden, gilt: für deren Inhalte ist der jeweilige Anbieter verantwortlich.",
      ],
    },
    {
      titel: "Urheberrecht",
      absaetze: [
        "Texte, Bilder und Gestaltung dieser Seite sind urheberrechtlich geschützt. Eine Verwendung außerhalb der gesetzlich zulässigen Fälle bedarf meiner Zustimmung.",
        "Bildnachweise: [Fotografinnen und Fotografen bzw. Bildquellen ergänzen].",
      ],
    },
  ],
};

export const datenschutz: Rechtstext = {
  meta: {
    titel: "Datenschutz — Uwe Overbeck",
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
        { label: "Name", wert: "[Vollständiger Firmenwortlaut]" },
        { label: "Anschrift", wert: "[Straße und Hausnummer, PLZ Ort, Land]" },
        { label: "E-Mail", wert: "[E-Mail-Adresse]" },
        { label: "Telefon", wert: "[Telefonnummer]" },
      ],
    },
    {
      titel: "Grundsatz",
      absaetze: [
        "Diese Website kommt ohne Cookies, ohne Analysewerkzeuge und ohne Werbenetzwerke aus. Es werden keine Profile gebildet und keine Daten an Dritte verkauft.",
        "Schriften werden vom eigenen Server ausgeliefert. Es findet kein Aufruf externer Anbieter statt, wenn Sie diese Seite öffnen.",
      ],
    },
    {
      titel: "Hosting und Server-Logfiles",
      absaetze: [
        "Die Website wird bei [Hosting-Anbieter, Anschrift] betrieben. Beim Aufruf werden technisch notwendige Daten verarbeitet, insbesondere IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, übertragene Datenmenge, Browsertyp und Betriebssystem.",
        "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt im sicheren und störungsfreien Betrieb der Website. Die Speicherdauer beträgt [Dauer eintragen].",
        "Mit dem Hosting-Anbieter besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO.",
      ],
    },
    {
      titel: "Anfragen über das Formular",
      absaetze: [
        "Wenn Sie das Formular auf der Seite Kontakt nutzen, verarbeite ich die dort eingegebenen Daten: Name, Betrieb, Rolle, E-Mail-Adresse, optional Telefonnummer und Nachricht.",
        "Zweck ist ausschließlich die Bearbeitung Ihrer Anfrage und die Kontaktaufnahme. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO für vorvertragliche Maßnahmen sowie Art. 6 Abs. 1 lit. a DSGVO auf Grundlage Ihrer Einwilligung.",
        "Die Angabe ist freiwillig. Ohne Name, Betrieb und E-Mail-Adresse kann ich die Anfrage nicht bearbeiten.",
        "Für den Versand der Formularnachricht setze ich den Dienst Resend (Plus Five Five, Inc., [Anschrift ergänzen]) als Auftragsverarbeiter ein. Dabei kann eine Übermittlung in die USA stattfinden, abgesichert über [Rechtsgrundlage der Übermittlung, z. B. EU-Standardvertragsklauseln oder EU-US Data Privacy Framework].",
        "Ihre Anfrage wird gelöscht, sobald sie erledigt ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen, spätestens nach [Dauer eintragen].",
        "Zum Schutz vor automatisierten Einsendungen enthält das Formular ein verstecktes Feld und eine Begrenzung der Anzahl von Anfragen pro IP-Adresse. Dabei werden keine zusätzlichen personenbezogenen Daten dauerhaft gespeichert.",
      ],
    },
    {
      titel: "Katalog-Download",
      absaetze: [
        "Der Katalog kann ohne Angabe von Daten heruntergeladen werden. Es findet keine Registrierung und keine Auswertung statt.",
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
        "Österreich: Österreichische Datenschutzbehörde, Barichgasse 40–42, 1030 Wien.",
        "Deutschland: die für Ihren Wohnsitz zuständige Landesdatenschutzbehörde. [Zutreffendes behalten.]",
      ],
    },
    {
      titel: "Stand",
      absaetze: ["[Datum der letzten Aktualisierung eintragen]"],
    },
  ],
};
