# TODO — was Marcel liefern muss

Stand: alle fünf Meilensteine gebaut, `npm run build` läuft fehlerfrei.
Alles hier ist ein bewusster Platzhalter im Code, nichts davon ist erfunden.
Erfundene Inhalte aus dem Stitch-Entwurf (`code.html`) sind vollständig entfernt.

Kurzfassung, nach Dringlichkeit:

| # | Was | Ohne das … |
| - | --- | ---------- |
| 5 | Resend-Variablen | kommt **keine einzige Anfrage** an |
| 4 | Impressum und Datenschutz | ist die Seite nicht rechtssicher |
| 3 | Portrait von Uwe | steht in der About-Sektion ein grauer Kasten |
| 1 | Zahlen für den Credibility-Strip | stehen dort leere Klammern |
| 2 | Referenzlogos plus Freigaben | laufen neutrale Platzhalter im Marquee |
| 7 | weiteres Bildmaterial | fehlen drei geplante Sektionen |
| 9 | Git-Remote und Vercel-Projekt | gibt es keine Preview-URL |

---

## 1. Zahlen für den Credibility-Strip — **offen**

Vier Werte plus Micro-Labels. Im Code stehen leere Klammern `[ ]` als Wert,
die Labels sind Vorschläge und dürfen geändert werden.

Datei: `content/landing.ts` → `credibility`

| Slot | Label (Vorschlag)      | Wert |
| ---- | ---------------------- | ---- |
| 1    | Jahre im Vertrieb      | ?    |
| 2    | Betriebe ausgestattet  | ?    |
| 3    | Partnermarken          | ?    |
| 4    | Länder                 | ?    |

Aus dem Entwurf entfernt und **nicht** übernommen, weil frei erfunden:
25 Jahre, 450+ Projekte, 12 Partnermarken, 8 Länder.

---

## 2. Referenzlogos plus Freigaben — **offen**

Im Marquee laufen aktuell **neutrale Platzhalter-Wortmarken** ohne echte
Betriebsnamen. Die Datenstruktur liegt in `content/referenzen.ts` und ist so
gebaut, dass der Tausch eine Zeile pro Logo ist.

Die sechs echten Logos aus `Logos Referenzen/` sind bereits nach
`public/img/brand/referenzen/` sortiert und liegen einsatzbereit im Repo,
sind aber **noch nicht eingebunden**, weil die schriftlichen Freigaben fehlen.

| Datei                              | Betrieb                      | Freigabe |
| ---------------------------------- | ---------------------------- | -------- |
| `imlauer-palais-mirabell.webp`     | IMLAUER Palais Mirabell       | ☐        |
| `imlauer-hotel-pitter.jpg`         | IMLAUER Hotel Pitter Salzburg | ☐        |
| `hotel-zum-hirschen.webp`          | Hotel Zum Hirschen            | ☐        |
| `laschensky-hof.jpeg`              | Laschensky Hof                | ☐        |
| `fontana.jpeg`                     | Fontana                       | ☐        |
| `gabriel-glas.webp`                | Gabriel-Glas                  | ☐        |

Zusätzlich nötig:
- Logos als **SVG oder PNG mit Transparenz**. Die vorhandenen JPEG/WebP-Dateien
  haben weiße Kästen als Hintergrund, das fällt im monochromen Marquee auf.
- Einheitliche Ausrichtung. `hotel-zum-hirschen.webp` ist hochkant (574×1024),
  alle anderen sind quer — im Marquee wirkt das unruhig.

Freigabe heißt: schriftliches Einverständnis des Betriebs, das Logo als
Referenz auf der Website zu zeigen. Ohne das bleiben die Platzhalter drin.

---

## 3. Portrait von Uwe — **offen, blockiert eine Sektion**

Die About-Sektion braucht ein **4:5-Portrait**. Im gesamten Bildmaterial ist
kein Bild von Uwe Overbeck enthalten. Aktuell steht dort ein grauer
Platzhalter mit Hinweistext.

Gebraucht: Hochformat 4:5, mindestens 1200×1500 px, ruhiges Licht,
entsättigt oder entsättigbar.

Datei: `public/img/brand/portrait-uwe-overbeck.jpg` (Name ist im Code
bereits vorgesehen, Datei fehlt).

---

## 4. Impressumsdaten — **offen**

`content/recht.ts` enthält die vollständige Struktur mit `[Platzhalter]`.
Gebraucht (gewerblich, AT/DE):

- Vollständiger Firmenwortlaut und Rechtsform
- Anschrift des Unternehmenssitzes
- E-Mail und Telefonnummer
- UID-/USt-IdNr.
- Firmenbuchnummer und Firmenbuchgericht (AT) bzw. Handelsregister (DE)
- Gewerbeaufsichts-/Gewerbebehörde, Kammerzugehörigkeit (WKO), Berufsrecht
- Angaben zur Online-Streitbeilegung
- Verantwortlich für den Inhalt

Die Datenschutzerklärung in `content/recht.ts` ist eine Struktur mit
Platzhaltern, **kein geprüfter Rechtstext**. Vor dem Livegang von einer
juristischen Person prüfen lassen.

---

## 5. Resend-API-Key — **offen**

`.env.example` liegt im Repo. Gebraucht werden:

- `RESEND_API_KEY`
- `KONTAKT_ABSENDER` (Domain muss bei Resend verifiziert sein)
- `KONTAKT_EMPFAENGER`

Ohne diese Variablen zeigt das Formular eine saubere Fehlermeldung, statt zu
crashen. Es werden bewusst **keine** personenbezogenen Daten ins Server-Log
geschrieben. Das heißt: bis die Variablen gesetzt sind, kommt keine Anfrage an.
Das ist der wichtigste offene Punkt vor dem Livegang.

---

## 6. Katalog-PDF — **erledigt, ggf. ersetzen**

`Greif Katalog.pdf` war vorhanden und liegt jetzt als
`public/downloads/greif-katalog.pdf` im Repo (2,1 MB).

Wenn eine neuere Fassung kommt: Datei ersetzen **und** die Größenangabe in
`content/landing.ts` → `katalog.dateihinweis` anpassen.

---

## 7. Weiteres Bildmaterial — **offen**

Nicht kritisch, aber diese Sektionen fehlen deshalb aktuell:

| Fehlt                                  | Folge |
| -------------------------------------- | ----- |
| 3 Bilder im Format 4:5 für `/hotel`     | Bildstrecke weggelassen |
| 3 Bilder im Format 4:5 für `/gastro`    | Bildstrecke weggelassen |
| 1 Bild zu Waschbarkeit / Standzeit      | vierter Editorial-Block auf `/hotel` weggelassen |
| Hero-Bild in hoher Auflösung            | siehe Inventar unten |

---

## 8. Vor dem Livegang

- [ ] `app/robots.ts` und `robots` in `app/layout.tsx` von noindex befreien
- [ ] Rechtstexte juristisch prüfen lassen und den roten Entwurfshinweis
      in `content/recht.ts` (`ENTWURFS_HINWEIS`) entfernen
- [ ] Kontaktdaten im Footer eintragen (`content/site.ts` → `footer.kontakt`)
- [ ] Prozessaussagen in der Copy von Uwe gegenlesen lassen. Sätze wie
      „Vor der Bestellung geht ein Größensatz durch den Betrieb" beschreiben
      seine Arbeitsweise — die sollte er bestätigen oder korrigieren
      (`content/inspiration.ts`, `content/landing.ts`, `content/beratung.ts`)
- [ ] Domain und Deployment einrichten (siehe Punkt 9)

---

## 9. Git-Remote und Vercel — **offen**

Das Repository liegt unter `Website Uwe/uwe-overbeck/` und hat einen lokalen
Branch `build/v1` mit fünf Commits. Es gibt **kein Remote und kein
Vercel-Projekt**, deshalb wurde nichts gepusht und es gibt keine Preview-URL.

Zum Aufsetzen:

```bash
gh repo create uwe-overbeck --private --source . --remote origin
git push -u origin build/v1
```

Danach in Vercel importieren und dort `RESEND_API_KEY`, `KONTAKT_ABSENDER`
und `KONTAKT_EMPFAENGER` als Environment Variables hinterlegen.
`main` bleibt unberührt, bis du sie freigibst.

---

# Bildinventar (Schritt 0)

Alles, was im Quellordner lag, mit Auflösung und Seitenverhältnis. Die Spalte
„Ziel" zeigt den neuen Ort und Namen im Repo.

## Hotel & Housekeeping → `public/img/hotel/`

| Quelle                             | Format | Auflösung | Verhältnis | Ziel                                    | Verwendung |
| ---------------------------------- | ------ | --------- | ---------- | --------------------------------------- | ---------- |
| `pexels-liliana-drew-9462787.jpg`  | JPEG   | 4000×6000 | 2:3        | `housekeeping-bett-zu-zweit.jpg`        | Hero `/hotel`, Tile Hotel auf der Landingpage |
| `ImlauerPalaisMirabell-9860.jpg`   | JPEG   | 1400×1050 | 4:3        | `rezeption-empfang-gast.jpg`            | `/hotel` Block 1 (Rezeption) |
| `ImlauerPalaisMirabell-9391.jpg`   | JPEG   | 1050×1400 | 3:4        | `housekeeping-zimmer-herrichten.jpg`    | `/hotel` Block 2 (Housekeeping) |
| `IMLAUERPalaisMirabell1433.jpg`    | JPEG   | 1050×1400 | 3:4        | `hotelzimmer-zwei-mitarbeiterinnen.jpg` | `/hotel` Block 3 (Passform) |

## Gastronomie → `public/img/gastro/`

| Quelle                                        | Format | Auflösung | Verhältnis | Ziel                                | Verwendung |
| --------------------------------------------- | ------ | --------- | ---------- | ----------------------------------- | ---------- |
| `pexels-cottonbro-4253305.jpg`                 | JPEG   | 4000×6000 | 2:3        | `kueche-zwei-koeche-am-herd.jpg`    | Hero `/gastro`, Tile Gastro auf der Landingpage |
| `pexels-nadin-sh-78971847-37639098.jpg`        | JPEG   | 2736×4864 | 9:16       | `tranchieren-am-gast.jpg`           | `/gastro` Block 1 (Gastkontakt) |
| `pexels-cottonbro-4253133.jpg`                 | JPEG   | 3946×5919 | 2:3        | `koch-am-herd-mit-schuerze.jpg`     | `/gastro` Block 2 (Hitze, Bewegung) |
| `pexels-cottonbro-4253298.jpg`                 | JPEG   | 3894×5841 | 2:3        | `koeche-schuerzen-nahaufnahme.jpg`  | `/gastro` Block 3 (Flecken, Wäsche) |
| `pexels-soc-nang-d-ng-2150345854-35692203.jpg` | JPEG   | 3680×5520 | 2:3        | `service-mit-tablett.jpg`           | `/gastro` Block 4 (Wiedererkennbarkeit) |

## Marke & Produkt → `public/img/brand/`

| Quelle                        | Format | Auflösung | Verhältnis | Ziel                                   | Verwendung |
| ----------------------------- | ------ | --------- | ---------- | -------------------------------------- | ---------- |
| `GA_Tisane_Team_090_0527.jpg` | JPEG   | 1920×810  | ~21:9      | `kuechenteam-weisse-kochjacken.jpg`    | Hero Landingpage |
| —                             | —      | —         | 4:5        | `portrait-uwe-overbeck.jpg`            | **fehlt**, siehe Punkt 3 |

## Referenzlogos → `public/img/brand/referenzen/`

| Quelle                                   | Format | Auflösung | Verhältnis | Ziel                             |
| ---------------------------------------- | ------ | --------- | ---------- | -------------------------------- |
| `Mirabell Logo.webp`                     | WebP   | 1920×1080 | 16:9       | `imlauer-palais-mirabell.webp`   |
| `Hotel-Pitter-Salzburg-Logo.jpg`         | JPEG   | 400×366   | ~1:1       | `imlauer-hotel-pitter.jpg`       |
| `ZumHirschen_Logo_RGB-GREEN-574x1024.webp` | WebP | 574×1024  | 9:16       | `hotel-zum-hirschen.webp`        |
| `Laschensky.jpeg`                        | JPEG   | 447×447   | 1:1        | `laschensky-hof.jpeg`            |
| `FC-Fontana-Logo.jpeg`                   | JPEG   | 2048×1448 | ~3:2       | `fontana.jpeg`                   |
| `Gabriel Glas.webp`                      | WebP   | 1200×628  | ~1.9:1     | `gabriel-glas.webp`              |

Alle sechs liegen im Repo, sind aber noch nicht eingebunden. Siehe Punkt 2.

## Anmerkungen zur Bildqualität

- **Hero Landingpage:** `kuechenteam-weisse-kochjacken.jpg` ist mit 1920 px
  Breite das einzige Bild mit passendem Seitenverhältnis für ein Full-Bleed-Band.
  Auf Displays über 1920 px wird es hochskaliert. Ein Ersatz mit ≥ 2560 px
  Breite wäre besser — idealerweise ein Motiv, das Hotel **und** Gastronomie
  zeigt, weil die Positionierung beide gleichwertig behandelt.
- **Rezeptionsbild:** `rezeption-empfang-gast.jpg` hat 1400×1050. Reicht für
  einen halbbreiten Editorial-Block, nicht für Full-Bleed.
- Die Pexels-Bilder sind Stock. Wenn es echte Bilder aus ausgestatteten
  Betrieben gibt, sind die deutlich stärker — und belegen die Referenzen gleich mit.
