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
    "Ich stelle Berufsmode für Hotels, Gastronomie und Firmen zusammen: modern, gut sitzend und auf Ihr Konzept abgestimmt.",
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
    "Seit über dreißig Jahren stelle ich Berufsmode für Hotels, Gastronomie und Firmen zusammen. Bevor ich etwas vorschlage, komme ich vorbei: Ich will Ihr Haus sehen, Ihr Konzept verstehen und wissen, wer sich in der aktuellen Kleidung nicht wohlfühlt.",
    "Daraus entsteht ein Kleidungskonzept, das zu Ihrem Betrieb gehört wie die Einrichtung. Wenige Teile, gut geschnitten, in Farben, die zum Haus passen. Ein Auftritt, an dem man Ihr Team erkennt.",
  ],
  signatur: "Uwe Overbeck",
  /**
   * Farbfassung, 1122×1402 (4:5). Die Schwarzweiß-Variante liegt daneben als
   * portrait-uwe-overbeck-sw.jpg, falls der Ton doch neutraler werden soll.
   * `vorhanden: false` schaltet zurück auf den Platzhalter.
   */
  portrait: {
    src: "/img/brand/portrait-uwe-overbeck.jpg",
    alt: "Portrait von Uwe Overbeck",
    breite: 1122,
    hoehe: 1402,
    vorhanden: true,
    platzhalterHinweis: "Portrait folgt",
  },
} as const;

/**
 * `fokus` in den Tiles: vertikale Bildposition in Prozent, gilt mobil im
 * flachen 4:3-Ausschnitt; ab md Bildmitte. Siehe content/inspiration.ts.
 */
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
        fokus: 25,
      },
    },
    {
      kategorie: "Gastronomie",
      titel: "Küche, Service, Bar",
      href: "/gastro",
      bild: {
        src: "/img/gastro/kueche-zwei-koeche-am-herd.jpg",
        alt: "Zwei Köche in Schürzen arbeiten nebeneinander am Herd",
        fokus: 15,
      },
    },
    {
      kategorie: "Firmen",
      // Wie bei Hotel und Gastro: Arbeitsbereiche, nicht Branchen. Kürzer und
      // parallel gebaut — "Kultur, Handel, Dienstleistung" lief bis an die
      // Spaltenkante.
      titel: "Empfang, Büro, Lager",
      href: "/firmen",
      bild: {
        src: "/img/firmen/anzug-und-kostuem-empfang.jpg",
        alt: "Mitarbeiterin und Mitarbeiter in grauem Kostüm und Anzug",
        fokus: 30,
      },
    },
  ],
} as const;

export type KatalogEintrag = {
  marke: string;
  /** Partnerlogo, transparentes PNG, wird monochrom gezeigt. */
  logo: { src: string; alt: string; breite: number; hoehe: number };
  buttonLabel: string;
  /** Fehlt die Datei, zeigt die Komponente `hinweisOffen` statt eines Links (E19-Muster). */
  datei?: string;
  dateiname: string;
  /** Sichtbare Größenangabe -- beim Austausch eines PDFs mitziehen. */
  dateihinweis?: string;
  hinweisOffen?: string;
};

const katalogEintraege: KatalogEintrag[] = [
  {
    marke: "Greiff",
    logo: {
      src: "/img/brand/partner/greiff.png",
      alt: "Greiff, since 1802",
      breite: 447,
      hoehe: 400,
    },
    buttonLabel: "Greiff-Katalog herunterladen",
    datei: "/downloads/greiff-katalog.pdf",
    dateiname: "greiff-katalog.pdf",
    dateihinweis: "PDF, 2,1 MB",
  },
  {
    marke: "Hakro",
    logo: {
      src: "/img/brand/partner/hakro.png",
      alt: "Hakro, hält seit 1969",
      breite: 600,
      hoehe: 254,
    },
    buttonLabel: "Hakro-Katalog herunterladen",
    // Original 47 MB, per Ghostscript auf 90 dpi verkleinert. Text bleibt Vektor.
    datei: "/downloads/hakro-katalog.pdf",
    dateiname: "hakro-katalog.pdf",
    dateihinweis: "PDF, 19,6 MB",
  },
];

/**
 * Partnermarken und Kataloge in einer Sektion (E26). Uwes Wunsch: die beiden
 * Lieferanten sichtbar machen und sagen, dass er seit Jahren mit ihnen
 * arbeitet. "Seit Jahren" ist Marcels Angabe -- keine Jahreszahl behaupten,
 * die niemand bestätigt hat.
 */
export const katalog = {
  label: "Partnermarken",
  // Ich-Perspektive wie auf der ganzen Seite: Uwe spricht, nicht ein Text
  // ueber Uwe. "Seit vielen Jahren" ist Marcels Angabe, keine Jahreszahl.
  headline: "Ich arbeite mit zwei Marken, seit Jahren mit denselben.",
  text: "Greiff und Hakro beliefern mich seit vielen Jahren. Ich kenne ihre Schnitte, ihre Stoffe und was davon nach Jahren im Dienst noch gut aussieht. Eine dritte Marke brauche ich nicht.",
  ueberleitung: "Die aktuellen Kataloge beider Marken laden Sie hier herunter, ohne Formular.",
  eintraege: katalogEintraege,
} as const;

export const ctaBand = {
  headline: "Reden wir über Ihren Betrieb.",
  text: "Schreiben Sie mir auf WhatsApp oder rufen Sie an. Danach wissen Sie, ob es passt.",
  linkLabel: "Oder per Formular",
  linkHref: "/kontakt",
} as const;
