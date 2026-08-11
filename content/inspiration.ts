/**
 * Texte der beiden Inspirationsseiten /hotel und /gastro.
 *
 * Zweck ist Inspiration, nicht Katalog: keine Produkte, keine Preise.
 * Beide Seiten teilen sich dieselbe Struktur, siehe Typ `InspirationsSeite`.
 */

export type Bild = {
  src: string;
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
    bild: { src: string; alt: string };
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
    titel: "Hotel & Housekeeping — Uwe Overbeck",
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
      text: "Der Gast sieht die Kleidung, bevor er ein Wort hört. Passform und Stoffgriff wirken dabei stärker als jedes Logo. Ich achte darauf, dass ein Sakko auch nach acht Stunden Dienst noch sitzt.",
      bild: {
        src: "/img/hotel/rezeption-empfang-gast.jpg",
        alt: "Mitarbeiterin an der Rezeption begrüßt einen ankommenden Gast",
        verhaeltnis: "4/3",
      },
    },
    {
      headline: "Housekeeping belastet Kleidung anders.",
      text: "Bücken, heben, wischen, und das über eine volle Schicht. Nähte an Schulter und Knie geben zuerst nach. Ich wähle Schnitte, die Bewegung zulassen, und Verstärkungen dort, wo sie gebraucht werden.",
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
      headline: "Passform über alle Körperformen.",
      text: "Ein Team besteht nicht aus einer Größe. Vor der Bestellung geht ein Größensatz durch den Betrieb, damit jede und jeder anprobieren kann. Wer sich in der Kleidung wohlfühlt, trägt sie auch so, wie sie gedacht ist.",
      bild: {
        src: "/img/hotel/hotelzimmer-zwei-mitarbeiterinnen.jpg",
        alt: "Zwei Mitarbeiterinnen in dunkler Berufskleidung im Hotelzimmer",
        verhaeltnis: "4/5",
      },
    },
  ],
  abschluss: {
    headline: "Passt das zu Ihrem Haus?",
    text: "Wir gehen Bereiche, Größen und Waschzyklen einmal durch.",
    linkLabel: "Beratungsgespräch anfragen",
    linkHref: "/beratung",
  },
};

export const gastroSeite: InspirationsSeite = {
  meta: {
    titel: "Gastronomie — Uwe Overbeck",
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
      text: "Wer am Tisch arbeitet, wird angesehen. Schürze, Hemd und Schnitt entscheiden, ob das Bild zum Haus passt. Ich stimme die Teile auf das ab, was der Betrieb sonst zeigt: Einrichtung, Karte, Ton.",
      bild: {
        src: "/img/gastro/tranchieren-am-gast.jpg",
        alt: "Koch tranchiert Schinken vor den Gästen im Restaurant",
        verhaeltnis: "4/5",
      },
    },
    {
      headline: "Hitze und Bewegungsfreiheit in der Küche.",
      text: "An der Linie wird es heiß und eng. Eine Kochjacke braucht Luft, ohne dabei zu weit zu werden. Ich achte auf Gewebe, das Wärme abgibt, und auf Ärmel, die beim Greifen nicht stören.",
      bild: {
        src: "/img/gastro/koch-am-herd-mit-schuerze.jpg",
        alt: "Koch mit Schürze arbeitet am Herd in einer Restaurantküche",
        verhaeltnis: "4/5",
      },
    },
    {
      headline: "Flecken und Industriewäsche.",
      text: "Fett, Wein und Sauce sind Alltag. Entscheidend ist, wie oft ein Teil bei welcher Temperatur gewaschen werden kann, bevor Farbe und Form nachlassen. Danach rechne ich, nicht nach Stückpreis.",
      bild: {
        src: "/img/gastro/koeche-schuerzen-nahaufnahme.jpg",
        alt: "Nahaufnahme zweier Köche in Schürzen bei der Arbeit",
        verhaeltnis: "4/5",
      },
    },
    {
      headline: "Der Betrieb muss erkennbar bleiben.",
      text: "Ein Logo auf der Brust reicht selten. Farbe, Material und Details tragen den Betrieb weiter als eine Stickerei. Und sie halten länger als ein Trend.",
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
    text: "Wir gehen Küche, Service und Wäsche einmal durch.",
    linkLabel: "Beratungsgespräch anfragen",
    linkHref: "/beratung",
  },
};
