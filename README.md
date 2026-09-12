# Uwe Overbeck — Website

Personal Brand für Uwe Overbeck, Vertrieb für Hospitality Workwear
(Hotel, Housekeeping, Gastronomie). Zielgruppe: Hoteldirektionen, F&B-Leitung
und Housekeeping-Leitung im DACH-Raum. Ziel der Seite sind Leads für
persönliche Beratungsgespräche.

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- next/font/local — Switzer als einziges Schriftsystem, selbst ausgeliefert
- Resend für den Versand der Formularanfragen
- Zod für die Validierung

Bewusst **nicht** enthalten: Component-Library, Framer Motion, Analytics,
Third-Party-Skripte, externe Fonts. Damit braucht die Seite kein Cookie-Banner.

Animationen sind mit einer Ausnahme reines CSS: der Hochzähler im
Credibility-Strip (`components/landing/hochzaehl-zahl.tsx`) nutzt
IntersectionObserver und requestAnimationFrame. Rein per CSS liefe die
Animation beim Laden los und wäre vorbei, bevor der Strip im Bild ist —
scroll-getriebene CSS-Animationen sind dafür noch zu wackelig unterstützt.
Keine Library, keine Abhängigkeit. Der Endwert steht im serverseitig
gerenderten HTML, ohne JavaScript und bei `prefers-reduced-motion` bleibt er
einfach stehen.

## Loslegen

```bash
npm install
cp .env.example .env.local   # ausfüllen, siehe TODO.md
npm run dev
```

```bash
npm run build
```

## Struktur

```
app/
  page.tsx          Landingpage
  hotel/            Inspiration Hotel & Housekeeping
  gastro/           Inspiration Gastronomie
  kontakt/          Lead-Formular inkl. Server Action
  impressum/
  datenschutz/
components/         Wiederverwendbare Bausteine
content/            Sämtliche sichtbaren Texte
lib/                Validierung, Rate-Limit, Mailversand
public/img/         hotel/ · gastro/ · brand/
public/downloads/   greiff-katalog.pdf
public/fonts/       Switzer-Variable.woff2 + FFL.txt
```

**Alle Texte liegen in `content/`**, nicht in den JSX-Dateien. Wer Copy ändert,
fasst keine Komponente an.

## Design-System

Verbindliche Quelle ist **`STYLE.md` im Hauptordner des Projekts**. `DESIGN.md`
neben diesem Repo ist nur noch der Stitch-Entwurf und damit Referenz, keine
Vorgabe.

Die Tokens liegen in `app/globals.css` unter `@theme`. Die Token-**Namen**
stammen aus dem Stitch-Export und bleiben, weil sie quer durch alle
Komponenten verwendet werden. Die **Werte** folgen STYLE.md, Abschnitt 3:

| STYLE.md | Token hier | Wert |
| -------- | ---------- | ----- |
| `papier` | `surface` / `background` / `on-primary` | `#F7F6F3` |
| `sand`   | `sand`   | `#E3DCD1` |
| `stein`  | `stein`  | `#C9C3B8` |
| `asche`  | `ash`    | `#9A968F` |
| `grafit` | `on-surface-variant` | `#494740` |
| `tinte`  | `on-surface` / `primary` / `ink` | `#1C1B19` |
| `signal` | `signal` (zugleich `error`) | `#DD1836` |

`signal` ist der einzige Buntton und bleibt unter 2 % der Fläche. Im Code
steht er an genau fünf Stellen: Trennlinie der Wortmarke, Zahlen im
Credibility-Strip, Oberkante des CTA-Bands, Link-Hover, Formularfehler. Nie
als Hintergrund, nie als Buttonfläche, nie im Fließtext.

Zum Kontrast: `ash` auf `surface` erreicht nur 2,7:1. Das reicht weder für
Fließtext (4,5:1 nach WCAG 1.4.3) noch für die Begrenzung von Bedienelementen
(3:1 nach WCAG 1.4.11). `ash` wird deshalb nur für dekorative Hairlines und für
Sekundärtext auf der dunklen `ink`-Fläche verwendet (dort 5,9:1). Sekundärtext
auf hellem Grund läuft über `on-surface-variant` (8,6:1).

Der Hero arbeitet mit drei Abdunklungslagen über dem Bild, damit heller Text
auch über hellen Bildstellen sicher über 4,5:1 bleibt.

## Schrift

**Switzer** (Indian Type Foundry) ist das einzige Schriftsystem — Display und
Fließtext, Web und Print. Keine zweite Schrift, keine Serif. Eingebunden über
`next/font/local` in `app/layout.tsx`, eine einzige Variable-Datei unter
`public/fonts/Switzer-Variable.woff2` (43 KB, Achse `wght` 100–900).

Die Klassen `font-display` und `font-body` bleiben bestehen und zeigen beide
auf Switzer. Sie sagen weiterhin, welche Rolle eine Zeile hat — der Unterschied
entsteht über Größe, Gewicht und Sperrung, nicht über die Schrift.

**Lizenz (ITF Free Font License, liegt als `public/fonts/FFL.txt` daneben):**
Subsetting, Konvertieren und Umbenennen der Datei sind verboten, ebenso die
Weitergabe an Dritte. `next/font/local` liefert die Datei unverändert aus —
deshalb dieser Weg und nicht `next/font/google` oder ein Subsetter. Wer später
einen Konverter darüber laufen lässt, verstößt gegen die Lizenz.

## Wortmarke

`components/wortmarke.tsx` setzt OVERBECK über BERUFSMODE, getrennt durch eine
Haarlinie in `signal`. Zwei Details, die leicht kaputtgehen und im Code
kommentiert sind: das negative rechte Margin (sonst läuft die Linie ins Leere,
weil `letter-spacing` hinter dem letzten Buchstaben hängt) und die Subline über
`flex/justify-between` statt über festes Tracking (nur so endet sie bei jeder
Größe bündig).

Die kleine Fassung im Header ist exakt 36 px hoch — genau so hoch wie die
frühere einzeilige Wortmarke, damit die Kopfhöhe und damit `.pt-header`
unverändert stimmen.

## Bildton

Alle Fotos laufen über die Utility-Klasse `.bild-ton` in `app/globals.css`.
Sie ist bewusst die einzige Stelle, an der der Look aller Bilder gemeinsam
geregelt wird:

```css
.bild-ton { filter: grayscale(0.55); }
```

`0` ist volle Farbe, `1` reines Schwarzweiß. Die Referenzlogos im Marquee
bleiben davon unberührt und sind voll entsättigt — sechs verschiedene
Markenfarben nebeneinander wären zu unruhig.

Nicht benötigte Material-Design-Tokens aus dem Frontmatter wurden weggelassen.

## Referenzen-Marquee

`components/referenzen-marquee.tsx`. Ein Track, das Logo-Set doppelt gerendert,
CSS-`@keyframes` von `translateX(0)` auf `-50%`, linear, 40s, unendlich. Hover
und Fokus pausieren über `animation-play-state`. Ränder per `mask-image`
ausgeblendet. Kein JavaScript.

Bei `prefers-reduced-motion: reduce` läuft keine Animation, die Logos werden als
statisches Grid ausgegeben.

Die Daten liegen in `content/referenzen.ts`. Ein Eintrag ohne `logo` fällt
automatisch auf die Wortmarke zurück — so lassen sich Betriebe ergänzen,
deren Logo noch fehlt.

Die Logodateien sind JPEG und WebP mit weißem Hintergrund. Damit das Weiß
nicht als heller Kasten stehen bleibt, liegt `mix-blend-multiply` auf den
Logos. Der Wrapper trägt dafür explizit `bg-surface`: der Track ist animiert
und damit transformiert, und eine Transformation erzeugt einen eigenen
Stacking-Context — das Blending käme sonst nie bis zur Sektionsfläche durch.
Mit Logos als SVG oder PNG mit Transparenz kann beides raus.

## Katalog-Download

`components/katalog-download.tsx` ist bewusst gekapselt. Wenn der Download
später hinter ein Formular-Gate soll, wird nur diese Komponente getauscht,
die Landingpage bleibt unverändert.

## Formular

`/kontakt` nutzt eine Server Action mit Zod-Validierung, einem Honeypot-Feld
und einem einfachen In-Memory-Rate-Limit pro IP. Erfolg und Fehler werden inline
ausgegeben, es gibt keinen Redirect und keinen Alert.

Ohne gesetzte Umgebungsvariablen läuft die Action in einen sauberen
Fehlerzustand, statt zu crashen. Protokolliert wird nur, dass die
Konfiguration fehlt — keine personenbezogenen Daten. Das heißt aber auch:
**bis die Variablen gesetzt sind, kommt keine einzige Anfrage an.**

Das In-Memory-Rate-Limit gilt pro Serverinstanz. Auf Vercel mit mehreren
Instanzen ist es eine Bremse, keine harte Grenze. Für mehr braucht es einen
externen Store.

## SEO

Die Seite steht bis zum Launch auf `noindex` — in `app/robots.ts` und in den
Metadaten in `app/layout.tsx`. Beides vor dem Livegang entfernen.

## Deployment

Remote steht: `github.com/HoellerGroup1/Uwe-Overbeck`, Arbeitsbranch
`build/v1`, `main` bleibt unberührt bis zur Freigabe.

Ein Vercel-Projekt gibt es noch nicht. Zum Aufsetzen das Repo in Vercel
importieren; die drei Variablen aus `.env.example` müssen dort als
Environment Variables hinterlegt werden.

## Offene Punkte

Siehe `TODO.md`.
