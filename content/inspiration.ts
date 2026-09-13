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
   * `fokus` ist die vertikale Position des Bildausschnitts in Prozent von
   * oben (CSS object-position): 0 zeigt den oberen Rand, 50 die Mitte, 100
   * den unteren Rand. Pro Motiv am Handy nachgesehen -- Köpfe und Kleidung
   * müssen im Ausschnitt bleiben. Ab md gilt wieder die Bildmitte, dort ist
   * der Ausschnitt hoch genug. Fehlt der Wert, gilt 50.
   */
  fokus?: number;
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
    /** `fokus` wirkt im Hero auf allen Breiten, weil der Ausschnitt dort überall flach ist. */
    bild: { src?: string; alt: string; fokus?: number };
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
      "Berufsmode für Rezeption, Etage und Service: modern, gut sitzend, passend zum Haus. Persönliche Beratung und ein Kleidungskonzept für den ganzen Betrieb.",
  },
  hero: {
    label: "Hotel & Housekeeping",
    headline: "Ihr Haus hat einen Stil. Ihr Team trägt ihn.",
    bild: {
      src: "/img/hotel/housekeeping-bett-zu-zweit.jpg",
      alt: "Zwei Housekeeping-Mitarbeiterinnen beziehen gemeinsam ein Bett",
      // 35: Gesicht sitzt am Desktop über der Headline, mobil bleiben beide Personen im Bild.
      fokus: 35,
    },
  },
  bloecke: [
    {
      headline: "Der erste Eindruck steht an der Rezeption.",
      text: "Gäste lesen ein Haus in Sekunden: das Licht, der Ton, und was die Person hinter dem Empfang trägt. Ein Sakko, das sitzt, und ein Schnitt, der zur Einrichtung passt, sagen mehr über Ihr Haus als jede Broschüre. Berufsmode heißt für mich Kleidung, die man auch privat gern anziehen würde, mit dem Unterschied, dass sie acht Stunden Dienst aushält.",
      bild: {
        src: "/img/hotel/rezeption-empfang-gast.jpg",
        alt: "Mitarbeiterin an der Rezeption begrüßt einen ankommenden Gast",
        fokus: 50,
        verhaeltnis: "4/3",
      },
    },
    {
      headline: "Housekeeping darf gut aussehen.",
      text: "Auf der Etage bückt sich Ihr Team, hebt und wischt, eine ganze Schicht lang. Die Kleidung muss das mitmachen, und trotzdem darf sie nicht nach Arbeitskittel aussehen. Moderne Schnitte, Stretchanteile und Farben, die zum Haus passen, sind heute der Mindestanspruch. Ihr Team fühlt sich wohler, und der Gast im Flur sieht ein Haus, das bis ins Detail auf sich achtet.",
      bild: {
        src: "/img/hotel/housekeeping-zimmer-herrichten.jpg",
        alt: "Housekeeping-Mitarbeiterin richtet ein Bett im Hotelzimmer her",
        fokus: 50,
        verhaeltnis: "4/5",
        // Oberes Drittel ist nur Wand und Wandleuchte. Die Mitarbeiterin und
        // das Bett sitzen in der Bildmitte.
      },
    },
    {
      headline: "Ein Kleidungskonzept für das ganze Haus.",
      text: "Ich komme zu Ihnen, sehe mir Rezeption, Etage und Restaurant an und höre zu, wie Sie Ihr Haus verstehen. Daraus stelle ich ein Konzept zusammen, das alle Bereiche verbindet und jedem lässt, was er braucht. Vor der Bestellung probiert Ihr Team an. Was nicht sitzt, kommt nicht ins Haus.",
      bild: {
        src: "/img/hotel/hotelzimmer-zwei-mitarbeiterinnen.jpg",
        alt: "Zwei Mitarbeiterinnen in dunkler Berufskleidung im Hotelzimmer",
        fokus: 40,
        verhaeltnis: "4/5",
      },
    },
  ],
  abschluss: {
    headline: "Passt das zu Ihrem Haus?",
    text: "Ich komme vorbei, und wir sehen es uns gemeinsam an.",
    linkLabel: "Oder per Formular",
    linkHref: "/kontakt",
  },
};

export const gastroSeite: InspirationsSeite = {
  meta: {
    titel: "Gastronomie — Overbeck Berufsmode",
    beschreibung:
      "Berufsmode für Küche, Service und Bar: schick, passend zum Konzept und für die Industriewäsche gemacht. Persönliche Beratung für Ihren Betrieb.",
  },
  hero: {
    label: "Gastronomie",
    headline: "Gute Küche hat einen Look. Der Service auch.",
    bild: {
      src: "/img/gastro/kueche-zwei-koeche-am-herd.jpg",
      alt: "Zwei Köche in Schürzen arbeiten nebeneinander am Herd",
      fokus: 30,
    },
  },
  bloecke: [
    {
      headline: "Der Service ist Teil der Inszenierung.",
      text: "Ein Restaurant lebt von Stimmung, und Ihr Service steht mittendrin. An Schürze, Hemd und Farbe erkennt der Gast, ob er in einem Wirtshaus, einer Bar oder einem Fine Dining sitzt. Ich stimme die Kleidung auf das ab, was Ihr Konzept schon sagt: Einrichtung, Karte, Ton. Am Ende soll man Ihr Team auf einem Foto erkennen, bevor man das Logo sieht.",
      bild: {
        src: "/img/gastro/tranchieren-am-gast.jpg",
        alt: "Koch tranchiert Schinken vor den Gästen im Restaurant",
        fokus: 40,
        verhaeltnis: "4/5",
      },
    },
    {
      headline: "Die Küche darf man heute sehen.",
      text: "Offene Küchen und Chef's Tables haben die Kochjacke sichtbar gemacht. Sie muss Hitze aushalten und Bewegung zulassen, und sie soll dabei so gut aussehen wie das, was auf den Teller kommt. Moderne Kochjacken und Schürzen aus leichten Geweben können beides. Ich zeige Ihnen, welche zu Ihrer Küche passen.",
      bild: {
        src: "/img/gastro/koch-am-herd-mit-schuerze.jpg",
        alt: "Koch mit Schürze arbeitet am Herd in einer Restaurantküche",
        fokus: 35,
        verhaeltnis: "4/5",
      },
    },
    {
      headline: "Schick, und nach dem fünfzigsten Waschgang noch immer.",
      text: "Fett, Wein und Sauce gehören zum Alltag. Ein Outfit, das nach zehn Wäschen ausbleicht oder die Form verliert, sieht billig aus, egal was es gekostet hat. Ich wähle Stoffe und Farben, die Industriewäsche aushalten, und rechne mit Ihnen durch, was ein Teil pro Schicht kostet statt pro Stück.",
      bild: {
        src: "/img/gastro/koeche-schuerzen-nahaufnahme.jpg",
        alt: "Nahaufnahme zweier Köche in Schürzen bei der Arbeit",
        fokus: 70,
        verhaeltnis: "4/5",
      },
    },
  ],
  abschluss: {
    headline: "Passt das zu Ihrem Konzept?",
    text: "Wir schauen uns Küche und Service an, dann reden wir über Stil.",
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
      fokus: 40,
    },
  },
  bloecke: [
    {
      headline: "Einheitlich auftreten, ohne uniform zu wirken.",
      text: "Farbe und Material halten ein Team optisch zusammen, auch ohne durchgehende Uniform. Wichtiger ist, dass Ihre Leute die Sachen gern anziehen. Sonst tragen sie am Ende doch das eigene Shirt darunter.",
      bild: {
        src: "/img/firmen/blousons-team-casual.jpg",
        alt: "Zwei Mitarbeitende in dunkelblauen Blousons über Shirt und Hemd",
        fokus: 30,
        verhaeltnis: "4/3",
      },
    },
    {
      headline: "Ein Betrieb, viele Arbeitsplätze.",
      text: "Im Lager packt Ihr Team an, am Empfang steht es im Blick der Besucher. Beide sollen zum selben Betrieb gehören, brauchen aber anderes Material und andere Schnitte. Ich löse das über eine gemeinsame Farbe und unterschiedliche Teile.",
      bild: {
        src: "/img/firmen/anzug-und-kostuem-empfang.jpg",
        alt: "Mitarbeiterin und Mitarbeiter in grauem Kostüm und Anzug",
        fokus: 30,
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
        fokus: 30,
        // Quelle nur 640 px breit -- 4/3 statt 4/5, damit nichts hochskaliert wird.
        verhaeltnis: "4/3",
      },
    },
  ],
  abschluss: {
    headline: "Wie läuft das bei Ihnen?",
    text: "Wir klären, welche Bereiche was brauchen.",
    linkLabel: "Oder per Formular",
    linkHref: "/kontakt",
  },
};
