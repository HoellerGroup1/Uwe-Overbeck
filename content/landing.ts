/**
 * Texte der Landingpage.
 *
 * Sämtliche Zahlen, Referenznamen und Hotelnamen aus dem Stitch-Entwurf waren
 * erfunden und sind entfernt. Wo Werte fehlen, steht ein sichtbarer
 * Platzhalter `[ ]`. Siehe TODO.md.
 */

export const hero = {
  label: "Hotel · Housekeeping · Gastronomie",
  headline: "Was Ihr Team trägt, sieht der Gast zuerst.",
  subline:
    "Ich berate Betriebe im DACH-Raum bei der Auswahl ihrer Berufskleidung.",
  linkLabel: "Beratungsgespräch anfragen",
  linkHref: "/beratung",
  bild: {
    src: "/img/brand/kuechenteam-weisse-kochjacken.jpg",
    alt: "Küchenteam in weißen Kochjacken bei der Arbeit am Pass",
  },
} as const;

/**
 * TODO(Marcel): echte Werte eintragen. Die Labels sind Vorschläge und dürfen
 * geändert werden. Aus dem Entwurf bewusst nicht übernommen, weil erfunden:
 * 25 Jahre, 450+ Projekte, 12 Partnermarken, 8 Länder.
 */
export const credibility = {
  label: "In Zahlen",
  eintraege: [
    { wert: "[ ]", label: "Jahre im Vertrieb" },
    { wert: "[ ]", label: "Betriebe ausgestattet" },
    { wert: "[ ]", label: "Partnermarken" },
    { wert: "[ ]", label: "Länder" },
  ],
} as const;

export const about = {
  label: "Zur Person",
  headline: "Ich sehe mir erst den Betrieb an, dann die Kleidung.",
  absaetze: [
    "Ich arbeite im Vertrieb für Berufskleidung in Hotellerie und Gastronomie. Bevor ich etwas vorschlage, will ich wissen, wie bei Ihnen gearbeitet wird. Wie viele Zimmer pro Schicht. Wie oft gewaschen wird. Wer sich in der aktuellen Kleidung nicht wohlfühlt.",
    "Meistens braucht es keine große Kollektion. Es braucht wenige Teile, die zum Betrieb passen und die Wäscherei überstehen. Darauf arbeite ich hin.",
  ],
  signatur: "Uwe Overbeck",
  /**
   * TODO(Marcel): Portrait im Format 4:5 liefern, mindestens 1200×1500 px.
   * Solange die Datei fehlt, rendert die About-Sektion einen Platzhalter.
   */
  portrait: {
    src: "/img/brand/portrait-uwe-overbeck.jpg",
    alt: "Portrait von Uwe Overbeck",
    vorhanden: false,
    platzhalterHinweis: "Portrait folgt",
  },
} as const;

export const tiles = {
  label: "Bereiche",
  eintraege: [
    {
      kategorie: "Hotel & Housekeeping",
      titel: "Rezeption, Etage, Service",
      href: "/hotel",
      bild: {
        src: "/img/hotel/housekeeping-bett-zu-zweit.jpg",
        alt: "Zwei Housekeeping-Mitarbeiterinnen beziehen gemeinsam ein Bett",
      },
    },
    {
      kategorie: "Gastronomie",
      titel: "Küche, Service, Bar",
      href: "/gastro",
      bild: {
        src: "/img/gastro/kueche-zwei-koeche-am-herd.jpg",
        alt: "Zwei Köche in Schürzen arbeiten nebeneinander am Herd",
      },
    },
  ],
} as const;

export const katalog = {
  label: "Katalog",
  headline: "Das Sortiment zum Durchblättern.",
  text: "Der aktuelle Greif Katalog als PDF. Ohne Formular, ohne E-Mail-Adresse.",
  buttonLabel: "Greif Katalog herunterladen",
  datei: "/downloads/greif-katalog.pdf",
  dateiname: "greif-katalog.pdf",
  /** TODO(Marcel): bei Austausch des PDF die Größenangabe mit anpassen. */
  dateihinweis: "PDF, 2,1 MB",
} as const;

export const ctaBand = {
  headline: "Reden wir über Ihren Betrieb.",
  text: "Ein Gespräch, unverbindlich. Danach wissen Sie, ob es passt.",
  linkLabel: "Beratungsgespräch anfragen",
  linkHref: "/beratung",
} as const;
