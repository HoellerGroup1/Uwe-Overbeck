# TODO — was noch fehlt

Stand 11.08.2026: alle fünf Meilensteine gebaut, Mobile-Optimierung zu vier
Fünfteln erledigt. `npm run build` und `eslint` laufen fehlerfrei, alles ist
committed und auf `origin/build/v1` gepusht.

## Hier geht es weiter

**Phase 5 der Mobile-Optimierung**, siehe Abschnitt „Mobile-Optimierung"
weiter unten. Sie zerfällt bewusst in zwei Teile:

- **5a, risikoarm, ca. 20 Minuten.** `env(safe-area-inset-*)` in Header,
  Footer und Container, `-webkit-tap-highlight-color` plus eigener
  `:active`-Zustand, Scroll-Lock hinter dem offenen Mobile-Menü.
- **5b, invasiver.** Quellbilder herunterrechnen (die JPEGs auf max. 2400 px,
  das Portrait von PNG auf JPEG, 2 MB auf etwa 250 KB) und `quality` sowie
  `placeholder="blur"` setzen. Ersetzt echte Dateien im Repo, deshalb war
  hier eine Freigabe offen.

Offene Frage an Marcel: beides oder erstmal nur 5a.

---

Kurzfassung der übrigen Punkte, nach Dringlichkeit:

| # | Was | Ohne das … |
| - | --- | ---------- |
| 1 | Resend-Variablen | kommt **keine einzige Anfrage** an |
| 2 | Impressum und Datenschutz | ist die Seite nicht rechtssicher |
| 3 | Deployment | gibt es keine Preview-URL |
| 4 | weiteres Bildmaterial | fehlen drei geplante Sektionen |

Für das Mockup ist nichts davon ein Blocker — die Seite läuft vollständig,
die offenen Punkte betreffen den echten Livegang.

---

## 1. Resend-API-Key — **offen, wichtigster Punkt**

`.env.example` liegt im Repo. Gebraucht werden:

- `RESEND_API_KEY`
- `KONTAKT_ABSENDER` (Domain muss bei Resend verifiziert sein)
- `KONTAKT_EMPFAENGER`

Ohne diese Variablen zeigt das Formular eine saubere Fehlermeldung, statt zu
crashen. Es werden bewusst **keine** personenbezogenen Daten ins Server-Log
geschrieben. Das heißt: bis die Variablen gesetzt sind, kommt keine Anfrage an.

---

## 2. Impressum und Datenschutz — **bewusst Platzhalter**

Entscheidung von Marcel: bleibt vorerst so. Beide Seiten tragen oben einen
roten Entwurfshinweis, damit niemand den Text für geprüft hält.

Wenn es so weit ist, in `content/recht.ts` alle Angaben in eckigen Klammern
ersetzen und `ENTWURFS_HINWEIS` entfernen. Gebraucht wird dann (gewerblich,
AT/DE):

- Firmenwortlaut, Rechtsform, Anschrift
- E-Mail und Telefon
- UID-/USt-IdNr., Firmenbuch- bzw. Handelsregisternummer samt Gericht
- Gewerbeberechtigung, Gewerbe-/Aufsichtsbehörde, Kammerzugehörigkeit
- Hosting-Anbieter und Speicherdauern für die Datenschutzerklärung
- Anschrift von Resend als Auftragsverarbeiter und die Rechtsgrundlage der
  Übermittlung in die USA

Der Datenschutztext ist eine Struktur, **kein geprüfter Rechtstext**.
Vor dem Livegang juristisch prüfen lassen.

---

## 3. Deployment — **teilweise**

Remote steht: `github.com/HoellerGroup1/Uwe-Overbeck`, Arbeitsbranch
`build/v1`. Ein Vercel-Projekt gibt es noch nicht.

```bash
git push origin build/v1          # zwei Commits liegen noch lokal
```

Danach in Vercel importieren und die drei Variablen aus Punkt 1 als
Environment Variables hinterlegen. `main` bleibt unberührt bis zur Freigabe.

---

## 4. Weiteres Bildmaterial — **offen**

Nicht kritisch, aber diese Sektionen fehlen deshalb aktuell:

| Fehlt | Folge |
| ----- | ----- |
| 3 Bilder im Format 4:5 für `/hotel` | Bildstrecke weggelassen |
| 3 Bilder im Format 4:5 für `/gastro` | Bildstrecke weggelassen |
| 1 Bild zu Waschbarkeit / Standzeit | vierter Editorial-Block auf `/hotel` weggelassen |
| Hero-Bild in hoher Auflösung | siehe Anmerkungen im Inventar unten |

---

## 5. Kleinigkeiten, kein Blocker

- **Logo Hotel Zum Hirschen** ist als einziges hochkant (574×1024) und wirkt
  im Marquee dadurch schmaler als die anderen. Eine querformatige Fassung
  säße besser.
- **Logos als SVG oder PNG mit Transparenz** würden den `mix-blend-multiply`-
  Umweg in `components/referenzen-marquee.tsx` überflüssig machen.
- **Katalog-PDF ersetzen:** Datei unter `public/downloads/greiff-katalog.pdf`
  austauschen **und** die Größenangabe in `content/landing.ts` →
  `katalog.eintraege[…].dateihinweis` anpassen.
- **Prozessaussagen gegenlesen.** Sätze wie „Vor der Bestellung geht ein
  Größensatz durch den Betrieb" beschreiben Uwes Arbeitsweise. Ich habe sie
  plausibel formuliert, aber nicht gewusst. Betrifft
  `content/inspiration.ts`, `content/landing.ts`, `content/kontakt.ts`.

---

## 6. Vor dem Livegang

- [ ] `app/robots.ts` und `robots` in `app/layout.tsx` von noindex befreien
- [ ] Rechtstexte prüfen lassen, Entwurfshinweis entfernen (Punkt 2)
- [ ] Resend-Variablen setzen und eine Testanfrage durchschicken (Punkt 1)

---

# Mobile-Optimierung

Gemessen auf 390×844 (iPhone 14/15). Ausgangslage war eine Seite, die auf dem
Desktop ruhig wirkt und auf dem Handy zur Rutschbahn wurde.

## Ergebnis nach Phase 1 bis 4

| Seite | vorher | jetzt | Bildschirme |
| ----- | ------ | ----- | ----------- |
| `/` | 5212 px | 4365 px | 6,2 → 5,2 |
| `/hotel` | 4168 px | 3295 px | 4,9 → 3,9 |
| `/gastro` | 5239 px | 3929 px | 6,2 → 4,7 |
| `/kontakt` | 2624 px | 2460 px | 3,1 → 2,9 |

Kein horizontaler Überlauf bei 360 und 390 px. Desktop ist um rund 72 px
gewachsen, das kommt von den größeren Klickflächen aus Phase 3.

## Phase 1 — vertikaler Rhythmus ✔ (Commit 240b3ca)

Sektionspadding responsiv, Bilder mobil im Querformat 4:3, Footer zweispaltig.

Dabei kam das Feld `fokus` in `content/inspiration.ts` dazu: im Querformat geht
oben oder unten etwas verloren, und ein pauschaler Zuschnitt trifft nicht jedes
Motiv. Mittig fehlten den Hochformat-Aufnahmen die Köpfe, oben verankert
verschwanden bei zwei Bildern die bedruckte Schürze und die arbeitende Person.
Standard ist `"oben"`, `"mitte"` für `service-mit-tablett` und
`housekeeping-zimmer-herrichten`. **Wer Bilder tauscht, muss den Zuschnitt am
Handy einzeln nachsehen.**

## Phase 3 — Trefferflächen ✔ (Commit e767a74)

Alle Ziele auf mindestens 44 px. Vorher lagen zwölf darunter, das kleinste war
die Datenschutz-Checkbox mit 16×16.

Zwei Entscheidungen zum Nachlesen:
- Die Checkbox bleibt bei 24×24, das ist die WCAG-2.5.8-Grenze. Das eigentliche
  Ziel ist das Label mit 306×96 px, per `htmlFor` verbunden.
- Abstände in Linklisten laufen über Padding statt `space-y`. Mit `space-y`
  hätten sich die vergrößerten Trefferflächen benachbarter Links überlappt.

## Phase 4 und 2 — Marquee und Hero ✔ (Commit f166d7f)

Blende mobil von 96 auf 24 px, damit sind statt 49 nur noch 12 Prozent der
Fläche verblendet. Logos mobil kleiner, Laufzeit mobil 26s für gleiches Tempo.
Hero mobil 68svh statt 80svh.

**Achtung beim Anfassen des Marquees:** der nahtlose Umlauf hängt daran, dass
die Summe der beiden Außenabstände genau einem Zwischenraum entspricht, und
zwar pro Breakpoint. Mobil 2×24 = 48, ab md 2×48 = 96. Der Kommentar in
`components/referenzen-marquee.tsx` sagt es noch einmal.

## Phase 5 — offen

Siehe „Hier geht es weiter" ganz oben.

---

# Erledigt

- **Zahlen im Credibility-Strip:** 30 Jahre im Vertrieb, 89 Betriebe
  ausgestattet, 7 Partnermarken, 2 Länder. In `content/landing.ts`.
- **Referenzlogos:** alle sechs freigegeben und im Marquee eingebunden,
  monochrom. Daten in `content/referenzen.ts`, ein Eintrag ohne `logo` fällt
  automatisch auf die Wortmarke zurück.
- **Portrait:** Farbfassung als `public/img/brand/portrait-uwe-overbeck.png`,
  die Schwarzweiß-Variante liegt daneben als `…-sw.png`.
- **Bildton:** Fotos sind nicht mehr voll entsättigt. Geregelt über eine
  einzige Stelle — `.bild-ton` in `app/globals.css`, aktuell
  `grayscale(0.55)`. 0 wäre volle Farbe, 1 reines Schwarzweiß.
- **Katalog-PDF:** liegt unter `public/downloads/greiff-katalog.pdf` (2,1 MB).
- **Kontaktdaten:** office@uwe-overbeck.com und +49 151 59851965 stehen im
  Footer jeder Seite, als `mailto:`- und `tel:`-Link.
- **Home in der Navigation**, links vor Hotel, gleicher Stil.
- **Hero-CTA entfernt.** Der Link „Beratungsgespräch anfragen" ist aus dem
  Hero raus. Auf der Startseite führen jetzt der Nav-Punkt „Beratung" und das
  CTA-Band am Seitenende zum Formular.
- **Hochzähler im Credibility-Strip:** zählt beim Scrollen über zwei Sekunden
  hoch, siehe `components/landing/hochzaehl-zahl.tsx`.

---

# Bildinventar

Alles aus dem Quellordner mit Auflösung und Seitenverhältnis, plus Ziel und
Verwendung im Repo.

## Hotel & Housekeeping → `public/img/hotel/`

| Quelle | Auflösung | Verhältnis | Ziel | Verwendung |
| ------ | --------- | ---------- | ---- | ---------- |
| `pexels-liliana-drew-9462787.jpg` | 4000×6000 | 2:3 | `housekeeping-bett-zu-zweit.jpg` | Hero `/hotel`, Tile Hotel auf der Landingpage |
| `ImlauerPalaisMirabell-9860.jpg` | 1400×1050 | 4:3 | `rezeption-empfang-gast.jpg` | `/hotel` Block 1 (Rezeption) |
| `ImlauerPalaisMirabell-9391.jpg` | 1050×1400 | 3:4 | `housekeeping-zimmer-herrichten.jpg` | `/hotel` Block 2 (Housekeeping) |
| `IMLAUERPalaisMirabell1433.jpg` | 1050×1400 | 3:4 | `hotelzimmer-zwei-mitarbeiterinnen.jpg` | `/hotel` Block 3 (Passform) |

## Gastronomie → `public/img/gastro/`

| Quelle | Auflösung | Verhältnis | Ziel | Verwendung |
| ------ | --------- | ---------- | ---- | ---------- |
| `pexels-cottonbro-4253305.jpg` | 4000×6000 | 2:3 | `kueche-zwei-koeche-am-herd.jpg` | Hero `/gastro`, Tile Gastro auf der Landingpage |
| `pexels-nadin-sh-…-37639098.jpg` | 2736×4864 | 9:16 | `tranchieren-am-gast.jpg` | `/gastro` Block 1 (Gastkontakt) |
| `pexels-cottonbro-4253133.jpg` | 3946×5919 | 2:3 | `koch-am-herd-mit-schuerze.jpg` | `/gastro` Block 2 (Hitze, Bewegung) |
| `pexels-cottonbro-4253298.jpg` | 3894×5841 | 2:3 | `koeche-schuerzen-nahaufnahme.jpg` | `/gastro` Block 3 (Flecken, Wäsche) |
| `pexels-soc-nang-…-35692203.jpg` | 3680×5520 | 2:3 | `service-mit-tablett.jpg` | `/gastro` Block 4 (Wiedererkennbarkeit) |

## Marke und Portrait → `public/img/brand/`

| Quelle | Auflösung | Verhältnis | Ziel | Verwendung |
| ------ | --------- | ---------- | ---- | ---------- |
| `GA_Tisane_Team_090_0527.jpg` | 1920×810 | ~21:9 | `kuechenteam-weisse-kochjacken.jpg` | Hero Landingpage |
| `Portrait Uwe frabe.png` | 1122×1402 | 4:5 | `portrait-uwe-overbeck.png` | About-Sektion |
| `Uwe Portrait .png` | 1122×1402 | 4:5 | `portrait-uwe-overbeck-sw.png` | Reserve, Schwarzweiß |

## Referenzlogos → `public/img/brand/referenzen/`

| Quelle | Auflösung | Ziel | Betrieb |
| ------ | --------- | ---- | ------- |
| `Mirabell Logo.webp` | 1920×1080 | `imlauer-palais-mirabell.webp` | IMLAUER Palais Mirabell |
| `Hotel-Pitter-Salzburg-Logo.jpg` | 400×366 | `imlauer-hotel-pitter.jpg` | IMLAUER Hotel Pitter Salzburg |
| `ZumHirschen_Logo_RGB-GREEN-574x1024.webp` | 574×1024 | `hotel-zum-hirschen.webp` | Hotel Zum Hirschen |
| `Laschensky.jpeg` | 447×447 | `laschensky-hof.jpeg` | Laschensky Hof |
| `FC-Fontana-Logo.jpeg` | 2048×1448 | `fontana.jpeg` | Fontana |
| `Gabriel Glas.webp` | 1200×628 | `gabriel-glas.webp` | Gabriel-Glas |

Alle sechs sind freigegeben und laufen im Marquee.

## Anmerkungen zur Bildqualität

- **Hero Landingpage:** `kuechenteam-weisse-kochjacken.jpg` ist mit 1920 px
  Breite das einzige Bild mit passendem Seitenverhältnis für ein
  Full-Bleed-Band. Auf Displays über 1920 px wird es hochskaliert. Ein Ersatz
  mit ≥ 2560 px Breite wäre besser — idealerweise ein Motiv, das Hotel **und**
  Gastronomie zeigt, weil die Positionierung beide gleichwertig behandelt.
- **Rezeptionsbild:** `rezeption-empfang-gast.jpg` hat 1400×1050. Reicht für
  einen halbbreiten Editorial-Block, nicht für Full-Bleed.
- Die Pexels-Bilder sind Stock. Echte Bilder aus ausgestatteten Betrieben
  wären deutlich stärker — und würden die Referenzen gleich mitbelegen.
