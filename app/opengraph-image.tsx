import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

/**
 * Vorschaubild fuer WhatsApp, LinkedIn und Co. -- 1200 x 630, wird beim
 * Build einmal gerendert. Zeigt nur die Wortmarke auf tinte mit der Linie in
 * signal, darunter den Claim. Kein Foto: die Vorschau soll aussehen wie die
 * Visitenkarte, nicht wie ein Werbebanner.
 *
 * Satori kann keine Variable-Fonts, deshalb liegen Medium und Light als OTF
 * unter app/_fonts. Sie werden nur beim Build gelesen, nie ausgeliefert --
 * die Lizenz (FFL.txt daneben) erlaubt das Einbetten, nicht die Weitergabe.
 */
export const alt = `${site.firma} — ${site.claim}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FARBE = {
  tinte: "#1C1B19",
  papier: "#F7F6F3",
  asche: "#9A968F",
  signal: "#DD1836",
};

export default async function Image() {
  const fontDir = join(process.cwd(), "app", "_fonts");
  const [medium, light] = await Promise.all([
    readFile(join(fontDir, "Switzer-Medium.otf")),
    readFile(join(fontDir, "Switzer-Light.otf")),
  ]);

  const haupt = site.wortmarke.haupt.toUpperCase();
  const subline = site.wortmarke.subline.toUpperCase();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: FARBE.tinte,
          color: FARBE.papier,
          fontFamily: "Switzer",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "stretch" }}>
          <div
            style={{
              fontSize: 128,
              fontWeight: 500,
              letterSpacing: "0.16em",
              // letter-spacing haengt hinter dem letzten Buchstaben,
              // sonst laeuft die Linie rechts ins Leere.
              marginRight: "-0.16em",
              lineHeight: 1,
            }}
          >
            {haupt}
          </div>
          <div
            style={{
              height: 3,
              marginTop: 14,
              backgroundColor: FARBE.signal,
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 14,
              fontSize: 56,
              fontWeight: 500,
              lineHeight: 1,
            }}
          >
            {subline.split("").map((zeichen, i) => (
              <span key={i}>{zeichen}</span>
            ))}
          </div>
        </div>
        <div
          style={{
            marginTop: 72,
            fontSize: 30,
            fontWeight: 300,
            color: FARBE.asche,
          }}
        >
          {site.claim}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Switzer", data: medium, weight: 500, style: "normal" },
        { name: "Switzer", data: light, weight: 300, style: "normal" },
      ],
    },
  );
}
