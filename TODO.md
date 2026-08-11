# TODO — was noch fehlt

Stand: alle fünf Meilensteine gebaut, `npm run build` und `eslint` laufen
fehlerfrei. Zahlen, Referenzlogos und Portrait sind eingepflegt.

Kurzfassung, nach Dringlichkeit:

| # | Was | Ohne das … |
| - | --- | ---------- |
| 1 | Resend-Variablen | kommt **keine einzige Anfrage** an |
| 2 | Impressum und Datenschutz | ist die Seite nicht rechtssicher |
| 3 | Kontaktdaten im Footer | steht dort `[E-Mail-Adresse]` |
| 4 | Deployment | gibt es keine Preview-URL |
| 5 | weiteres Bildmaterial | fehlen drei geplante Sektionen |

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

## 3. Kontaktdaten im Footer — **offen**

`content/site.ts` → `footer.kontakt`. Aktuell stehen dort
`[E-Mail-Adresse]` und `[Telefonnummer]` auf jeder Seite.

---

## 4. Deployment — **offen**

Das Repository liegt unter `Website Uwe/uwe-overbeck/`, lokaler Branch
`build/v1`. Es gibt noch kein Remote und kein Vercel-Projekt.

```bash
gh repo create uwe-overbeck --private --source . --remote origin
git push -u origin build/v1
```

Danach in Vercel importieren und die drei Variablen aus Punkt 1 als
Environment Variables hinterlegen. `main` bleibt unberührt bis zur Freigabe.

---

## 5. Weiteres Bildmaterial — **offen**

Nicht kritisch, aber diese Sektionen fehlen deshalb aktuell:

| Fehlt | Folge |
| ----- | ----- |
| 3 Bilder im Format 4:5 für `/hotel` | Bildstrecke weggelassen |
| 3 Bilder im Format 4:5 für `/gastro` | Bildstrecke weggelassen |
| 1 Bild zu Waschbarkeit / Standzeit | vierter Editorial-Block auf `/hotel` weggelassen |
| Hero-Bild in hoher Auflösung | siehe Anmerkungen im Inventar unten |

---

## 6. Kleinigkeiten, kein Blocker

- **Logo Hotel Zum Hirschen** ist als einziges hochkant (574×1024) und wirkt
  im Marquee dadurch schmaler als die anderen. Eine querformatige Fassung
  säße besser.
- **Logos als SVG oder PNG mit Transparenz** würden den `mix-blend-multiply`-
  Umweg in `components/referenzen-marquee.tsx` überflüssig machen.
- **Katalog-PDF ersetzen:** Datei unter `public/downloads/greif-katalog.pdf`
  austauschen **und** die Größenangabe in `content/landing.ts` →
  `katalog.dateihinweis` anpassen.
- **Prozessaussagen gegenlesen.** Sätze wie „Vor der Bestellung geht ein
  Größensatz durch den Betrieb" beschreiben Uwes Arbeitsweise. Ich habe sie
  plausibel formuliert, aber nicht gewusst. Betrifft
  `content/inspiration.ts`, `content/landing.ts`, `content/beratung.ts`.

---

## 7. Vor dem Livegang

- [ ] `app/robots.ts` und `robots` in `app/layout.tsx` von noindex befreien
- [ ] Rechtstexte prüfen lassen, Entwurfshinweis entfernen (Punkt 2)
- [ ] Kontaktdaten im Footer eintragen (Punkt 3)
- [ ] Resend-Variablen setzen und eine Testanfrage durchschicken (Punkt 1)

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
- **Katalog-PDF:** liegt unter `public/downloads/greif-katalog.pdf` (2,1 MB).

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
