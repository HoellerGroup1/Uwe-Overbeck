/**
 * Texte der drei Inspirationsseiten /hotel, /gastro und /firmen.
 *
 * Zweck ist Inspiration, nicht Katalog: keine Produkte, keine Preise.
 * Beide Seiten teilen sich dieselbe Struktur, siehe Typ `InspirationsSeite`.
 */

export type Bild = {
  /**
   * Fehlt die Quelle, rendert die Komponente einen beschrifteten Platzhalter.
   * Dasselbe Muster wie bei den Referenzen: ein fehlendes Bild bricht nichts,
   * es wird nur noch nicht gezeigt.
   */
  src?: string;
  alt: string;
  /** Wird auf ein festes Seitenverhältnis zugeschnitten. */
  verhaeltnis: "4/5" | "4/3";
  /**
   * Wohin der Zuschnitt auf Mobile verankert wird. Dort laufen alle Bilder im
   * Querformat, es geht also oben oder unten etwas verloren.
   *
   * "oben"  — Standard. Die Hochformat-Aufnahmen haben die Köpfe im oberen
   *           Drittel, mittig zugeschnitten bliebe nur der Rumpf übrig.
   * "mitte" — wenn das Motiv in der Bildmitte sitzt.
   */
  fokus?: "oben" | "mitte";
};

export type EditorialBlock = {
  /** Ein konkreter Vorteil als Überschrift. */
  headline: string;
  text: string;
  bild: Bild;
};

export type InspirationsSeite = {
  meta: { titel: string; beschreibung: string };
  hero: {
    label: string;
    headline: string;
    bild: { src?: string; alt: string };
  };
  bloecke: EditorialBlock[];
  abschluss: {
    headline: string;
    text: string;
    linkLabel: string;
    linkHref: string;
  };
};

export const hotelSeite: InspirationsSeite = {
  meta: {
    titel: "Hotel & Housekeeping — Overbeck Berufsmode",
    beschreibung:
      "Berufskleidung für Rezeption, Etage und Service. Was im Hotelalltag zählt.",
  },
  hero: {
    label: "Hotel & Housekeeping",
    headline: "Vorn repräsentieren, hinten arbeiten.",
    bild: {
      src: "/img/hotel/housekeeping-bett-zu-zweit.jpg",
      alt: "Zwei Housekeeping-Mitarbeiterinnen beziehen gemeinsam ein Bett",
    },
  },
  bloecke: [
    {
      headline: "Die Rezeption ist das erste Bild.",
      text: "Der Gast sieht die Kleidung, bevor er ein Wort hört. Passform und Stoffgriff wirken stärker als ein Logo. Ich achte darauf, dass ein Sakko auch nach acht Stunden Dienst noch sitzt.",
      bild: {
        src: "/img/hotel/rezeption-empfang-gast.jpg",
        alt: "Mitarbeiterin an der Rezeption begrüßt einen ankommenden Gast",
        verhaeltnis: "4/3",
      },
    },
    {
      headline: "Housekeeping belastet Kleidung anders.",
      text: "Bücken, heben, wischen, und das über eine volle Schicht. Nähte an Schulter und Knie geben zuerst nach. Ich wähle Schnitte, die Bewegung zulassen, und achte auf verstärkte Nähte an genau diesen Stellen.",
      bild: {
        src: "/img/hotel/housekeeping-zimmer-herrichten.jpg",
        alt: "Housekeeping-Mitarbeiterin richtet ein Bett im Hotelzimmer her",
        verhaeltnis: "4/5",
        // Oberes Drittel ist nur Wand und Wandleuchte. Die Mitarbeiterin und
        // das Bett sitzen in der Bildmitte.
        fokus: "mitte",
      },
    },
    {
      headline: "Erst anprobieren, dann bestellen.",
      text: "Vor der Bestellung geht ein Größensatz durch den Betrieb, damit jede und jeder anprobieren kann. Wer sich in der Kleidung wohlfühlt, trägt sie so, wie sie gedacht ist.",
      bild: {
        src: "/img/hotel/hotelzimmer-zwei-mitarbeiterinnen.jpg",
        alt: "Zwei Mitarbeiterinnen in dunkler Berufskleidung im Hotelzimmer",
        verhaeltnis: "4/5",
      },
    },
  ],
  abschluss: {
    headline: "Passt das zu Ihrem Haus?",
    text: "Wir gehen Etagen, Größen und Wäsche einmal durch.",
    linkLabel: "Oder per Formular",
    linkHref: "/kontakt",
  },
};

export const gastroSeite: InspirationsSeite = {
  meta: {
    titel: "Gastronomie — Overbeck Berufsmode",
    beschreibung:
      "Berufskleidung für Küche, Service und Bar. Was im Gastronomiealltag zählt.",
  },
  hero: {
    label: "Gastronomie",
    headline: "Küche und Service tragen nicht dasselbe.",
    bild: {
      src: "/img/gastro/kueche-zwei-koeche-am-herd.jpg",
      alt: "Zwei Köche in Schürzen arbeiten nebeneinander am Herd",
    },
  },
  bloecke: [
    {
      headline: "Im Gastkontakt zählt der erste Blick.",
      text: "Wer am Tisch arbeitet, steht im Blick. An Schürze und Schnitt sieht der Gast, ob das Bild zum Haus passt. Ich stimme die Teile auf das ab, was der Betrieb sonst zeigt: Einrichtung, Karte, Ton.",
      bild: {
        src: "/img/gastro/tranchieren-am-gast.jpg",
        alt: "Koch tranchiert Schinken vor den Gästen im Restaurant",
        verhaeltnis: "4/5",
      },
    },
    {
      headline: "Hitze und Bewegungsfreiheit in der Küche.",
      text: "An der Linie wird es heiß und eng. Eine Kochjacke braucht Luft, ohne zu weit zu werden. Ich achte auf Gewebe, das Wärme abgibt, und auf Ärmel, die beim Greifen nicht stören.",
      bild: {
        src: "/img/gastro/koch-am-herd-mit-schuerze.jpg",
        alt: "Koch mit Schürze arbeitet am Herd in einer Restaurantküche",
        verhaeltnis: "4/5",
      },
    },
    {
      headline: "Flecken und Industriewäsche.",
      text: "Fett, Wein und Sauce sind Alltag. Ich rechne deshalb in Waschgängen: wie oft ein Teil bei welcher Temperatur durch die Maschine geht, bevor Farbe und Form nachlassen. Der Stückpreis sagt darüber nichts.",
      bild: {
        src: "/img/gastro/koeche-schuerzen-nahaufnahme.jpg",
        alt: "Nahaufnahme zweier Köche in Schürzen bei der Arbeit",
        verhaeltnis: "4/5",
      },
    },
    {
      headline: "Der Betrieb muss erkennbar bleiben.",
      text: "Ein Logo auf der Brust reicht selten. Farbe und Material tragen den Betrieb weiter als eine Stickerei, und sie halten länger als ein Trend.",
      bild: {
        src: "/img/gastro/service-mit-tablett.jpg",
        alt: "Servicemitarbeiter mit bedruckter Schürze trägt ein Tablett mit Getränken",
        verhaeltnis: "4/5",
        // Oben verankert bliebe nur Farn und Kopf übrig. Die bedruckte Schürze
        // ist hier aber der Punkt, deshalb mittig.
        fokus: "mitte",
      },
    },
  ],
  abschluss: {
    headline: "Passt das zu Ihrem Betrieb?",
    text: "Wir schauen uns Küche, Service und Wäsche gemeinsam an.",
    linkLabel: "Oder per Formular",
    linkHref: "/kontakt",
  },
};

/**
 * ENTWURF — von Uwe gegenzulesen.
 *
 * Das Segment "Firmen" kam erst im Gespräch dazu (E8), Uwes einziges genanntes
 * Beispiel ist das Marionettentheater. Die Texte unten beschreiben deshalb,
 * was fachlich unstrittig ist, und behaupten bewusst KEINE Abläufe, die ich
 * nicht kenne — anders als bei Hotel und Gastro steht hier kein Größensatz und
 * kein Waschzyklus, weil mir dazu Uwes Praxis fehlt.
 *
 * Bilder seit 13.09.: Katalogmotive von Greiff und Hakro (Freigabe beider
 * Marken liegt vor). Der Hero hat 1920 px, die drei Blockmotive nur 640 px --
 * deshalb laufen alle Blöcke in 4/3. Höher aufgelöste Fassungen wären besser.
 */
export const firmenSeite: InspirationsSeite = {
  meta: {
    titel: "Firmen — Overbeck Berufsmode",
    beschreibung:
      "Berufskleidung für Betriebe außerhalb der Hotellerie: Kultur, Handel, Handwerk und Dienstleistung.",
  },
  hero: {
    label: "Firmen",
    headline: "Vom Lager bis zum Empfang.",
    bild: {
      src: "/img/firmen/team-im-buero-besprechung.jpg",
      alt: "Fünf Mitarbeitende in abgestimmter dunkelblauer Businesskleidung besprechen sich im Büro",
    },
  },
  bloecke: [
    {
      headline: "Einheitlich auftreten, ohne uniform zu wirken.",
      text: "Farbe und Material halten ein Team optisch zusammen, auch ohne durchgehende Uniform. Wichtiger ist, dass Ihre Leute die Sachen gern anziehen. Sonst tragen sie am Ende doch das eigene Shirt darunter.",
      bild: {
        src: "/img/firmen/blousons-team-casual.jpg",
        alt: "Zwei Mitarbeitende in dunkelblauen Blousons über Shirt und Hemd",
        verhaeltnis: "4/3",
      },
    },
    {
      headline: "Ein Betrieb, viele Arbeitsplätze.",
      text: "Im Lager packt Ihr Team an, am Empfang steht es im Blick der Besucher. Beide sollen zum selben Betrieb gehören, brauchen aber anderes Material und andere Schnitte. Ich löse das über eine gemeinsame Farbe und unterschiedliche Teile.",
      bild: {
        src: "/img/firmen/anzug-und-kostuem-empfang.jpg",
        alt: "Mitarbeiterin und Mitarbeiter in grauem Kostüm und Anzug",
        // Quelle nur 640 px breit -- 4/3 statt 4/5, damit nichts hochskaliert wird.
        verhaeltnis: "4/3",
      },
    },
    {
      headline: "Das Logo hält so lange wie das Teil.",
      text: "Ein Stick hält länger als ein Druck, kostet mehr und passt nicht auf jeden Stoff. Eine Veredelung, die den zehnten Waschgang nicht übersteht, kostet Sie am Ende mehr als sie gespart hat. Ich sage Ihnen vorher, was zu Ihrem Material passt.",
      bild: {
        src: "/img/firmen/hemd-und-bluse-hellblau.jpg",
        alt: "Hellblaues Hemd und Bluse Rücken an Rücken, Fläche für Stick oder Druck",
        // Quelle nur 640 px breit -- 4/3 statt 4/5, damit nichts hochskaliert wird.
        verhaeltnis: "4/3",
      },
    },
  ],
  abschluss: {
    headline: "Wie läuft das bei Ihnen?",
    text: "Wir klären Bereiche, Teile und Veredelung.",
    linkLabel: "Oder per Formular",
    linkHref: "/kontakt",
  },
};
