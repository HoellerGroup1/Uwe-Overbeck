/**
 * Texte der Landingpage.
 *
 * Sämtliche Zahlen, Referenznamen und Hotelnamen aus dem Stitch-Entwurf waren
 * erfunden und sind entfernt. Wo Werte fehlen, steht ein sichtbarer
 * Platzhalter `[ ]`. Siehe TODO.md.
 */

export const hero = {
  // Drei Segmente, wie der Claim und die Navigation. "Housekeeping" ist raus:
  // es ist Teil von Hotel und stand hier gleichrangig neben ganzen Branchen.
  label: "Hotel · Gastronomie · Firmen",
  // "der Gast" galt nur für Hotel und Gastro. Seit dem dritten Segment steht
  // hier "Kunde", sonst spricht die Startseite ein Drittel der Zielgruppe
  // nicht an.
  headline: "Was Ihr Team trägt, sieht Ihr Kunde zuerst.",
  subline:
    "Ich berate Hotels, Gastronomie und Firmen bei der Auswahl ihrer Berufskleidung.",
  bild: {
    src: "/img/brand/kuechenteam-weisse-kochjacken.jpg",
    alt: "Küchenteam in weißen Kochjacken bei der Arbeit am Pass",
  },
} as const;

/**
 * Werte von Marcel geliefert und bestätigt.
 * `wert` ist eine Zahl, weil der Strip sie beim Scrollen hochzählt.
 * `suffix` ist optional, etwa für "90+".
 */
export const credibility = {
  label: "In Zahlen",
  eintraege: [
    { wert: 30, suffix: "+", label: "Jahre im Vertrieb" },
    { wert: 89, suffix: "", label: "Betriebe ausgestattet" },
  ],
} as const;

export const about = {
  label: "Zur Person",
  headline: "Ich sehe mir erst den Betrieb an, dann die Kleidung.",
  absaetze: [
    "Ich arbeite im Vertrieb für Berufskleidung, für Hotels, Gastronomie und Firmen. Bevor ich etwas vorschlage, will ich wissen, wie Sie arbeiten: wie oft Ihre Wäscherei läuft und wer sich in der aktuellen Kleidung nicht wohlfühlt.",
    "Meistens reichen wenige Teile, die zum Betrieb passen und die Wäscherei überstehen. Eine ganze Kollektion braucht kaum ein Betrieb.",
  ],
  signatur: "Uwe Overbeck",
  /**
   * Farbfassung, 1122×1402 (4:5). Die Schwarzweiß-Variante liegt daneben als
   * portrait-uwe-overbeck-sw.png, falls der Ton doch neutraler werden soll.
   * `vorhanden: false` schaltet zurück auf den Platzhalter.
   */
  portrait: {
    src: "/img/brand/portrait-uwe-overbeck.png",
    alt: "Portrait von Uwe Overbeck",
    breite: 1122,
    hoehe: 1402,
    vorhanden: true,
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
    {
      kategorie: "Firmen",
      // Wie bei Hotel und Gastro: Arbeitsbereiche, nicht Branchen. Kürzer und
      // parallel gebaut — "Kultur, Handel, Dienstleistung" lief bis an die
      // Spaltenkante.
      titel: "Empfang, Büro, Lager",
      href: "/firmen",
      /** Bild folgt aus den Katalogen von Greiff und Hakro. */
      bild: {
        src: undefined,
        alt: "Mitarbeitende eines Betriebs in einheitlicher Berufskleidung",
      },
    },
  ],
} as const;

export const katalog = {
  label: "Kataloge",
  headline: "Das Sortiment zum Durchblättern.",
  text: "Die aktuellen Kataloge beider Partnermarken als PDF. Sie laden sie direkt herunter, ohne Formular.",
  /**
   * Ein Eintrag ohne `datei` läuft als offene Position mit `hinweisOffen`
   * (E19-Muster). Zum Freischalten `datei`, `dateiname` und `dateihinweis`
   * setzen. Beim Austausch eines PDFs die Größenangabe mitziehen.
   */
  eintraege: [
    {
      marke: "Greiff",
      buttonLabel: "Greiff-Katalog herunterladen",
      datei: "/downloads/greiff-katalog.pdf",
      dateiname: "greiff-katalog.pdf",
      dateihinweis: "PDF, 2,1 MB",
    },
    {
      marke: "Hakro",
      buttonLabel: "Hakro-Katalog herunterladen",
      datei: undefined,
      dateiname: "hakro-katalog.pdf",
      dateihinweis: undefined,
      hinweisOffen: "PDF folgt",
    },
  ],
} as const;

export const ctaBand = {
  headline: "Reden wir über Ihren Betrieb.",
  text: "Rufen Sie an oder schreiben Sie mir. Danach wissen Sie, ob es passt.",
  linkLabel: "Beratungsgespräch anfragen",
  linkHref: "/kontakt",
} as const;
