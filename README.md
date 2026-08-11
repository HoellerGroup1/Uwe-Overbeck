# Uwe Overbeck — Website

Personal Brand für Uwe Overbeck, Vertrieb für Hospitality Workwear
(Hotel, Housekeeping, Gastronomie). Zielgruppe: Hoteldirektionen, F&B-Leitung
und Housekeeping-Leitung im DACH-Raum. Ziel der Seite sind Leads für
persönliche Beratungsgespräche.

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- next/font — Schriften werden zur Buildzeit geladen und selbst ausgeliefert
- Resend für den Versand der Formularanfragen
- Zod für die Validierung

Bewusst **nicht** enthalten: Component-Library, Framer Motion, Analytics,
Third-Party-Skripte, externe Fonts. Damit braucht die Seite kein Cookie-Banner.
Alle Animationen sind reines CSS.

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
  beratung/         Lead-Formular inkl. Server Action
  impressum/
  datenschutz/
components/         Wiederverwendbare Bausteine
content/            Sämtliche sichtbaren Texte
lib/                Validierung, Rate-Limit, Mailversand
public/img/         hotel/ · gastro/ · brand/
public/downloads/   greif-katalog.pdf
```

**Alle Texte liegen in `content/`**, nicht in den JSX-Dateien. Wer Copy ändert,
fasst keine Komponente an.

## Design-System

Verbindliche Quelle ist `DESIGN.md` im übergeordneten Ordner. Die Tokens sind
in `app/globals.css` unter `@theme` abgelegt, mit den Original-Token-Namen,
damit spätere Stitch-Exporte kompatibel bleiben.

Drei bewusste Abweichungen vom YAML-Frontmatter in `DESIGN.md` — bei
Widerspruch gilt dort der Prosatext:

| Token          | Wert      | Statt      |
| -------------- | --------- | ---------- |
| `surface` / `background` | `#F7F6F3` | `#fdf8f7` |
| `primary`      | `#1C1B19` | `#000000`  |
| Body-Font      | Schibsted Grotesk | Hanken Grotesk |

Ergänzt:

| Token  | Wert      | Verwendung |
| ------ | --------- | ---------- |
| `sand` | `#E3DCD1` | Sektionsflächen. Der einzige Akzent der Seite. |
| `ash`  | `#9A968F` | Hairlines, Divider, Sekundärtext auf `ink` |

Zum Kontrast: `ash` auf `surface` erreicht nur 2,7:1 und ist damit für Fließtext
nicht ausreichend. `ash` wird deshalb für Hairlines und für Sekundärtext auf der
dunklen `ink`-Fläche verwendet (dort 5,9:1). Sekundärtext auf hellem Grund nutzt
`on-surface-variant` (`#494740`, 8,6:1).

Nicht benötigte Material-Design-Tokens aus dem Frontmatter wurden weggelassen.

## Referenzen-Marquee

`components/referenzen-marquee.tsx`. Ein Track, das Logo-Set doppelt gerendert,
CSS-`@keyframes` von `translateX(0)` auf `-50%`, linear, 40s, unendlich. Hover
und Fokus pausieren über `animation-play-state`. Ränder per `mask-image`
ausgeblendet. Kein JavaScript.

Bei `prefers-reduced-motion: reduce` läuft keine Animation, die Logos werden als
statisches Grid ausgegeben.

Die Daten liegen in `content/referenzen.ts`. Aktuell laufen dort neutrale
Platzhalter-Wortmarken. Sobald Logos und Freigaben da sind: pro Eintrag ein
`logo`-Feld ergänzen, mehr ist nicht nötig. Siehe TODO.md, Punkt 2.

## Katalog-Download

`components/katalog-download.tsx` ist bewusst gekapselt. Wenn der Download
später hinter ein Formular-Gate soll, wird nur diese Komponente getauscht,
die Landingpage bleibt unverändert.

## Formular

`/beratung` nutzt eine Server Action mit Zod-Validierung, einem Honeypot-Feld
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

Noch nicht eingerichtet. Es gibt kein Git-Remote und kein Vercel-Projekt.
Zum Aufsetzen: Repository auf GitHub anlegen, als Remote eintragen, Branch
`build/v1` pushen und das Projekt in Vercel importieren. Die drei Variablen
aus `.env.example` müssen dort als Environment Variables hinterlegt werden.

## Offene Punkte

Siehe `TODO.md`.
