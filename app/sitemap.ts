import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Sitemap fuer die Search Console. Statische Seiten, keine Parameter.
 * Prioritaeten spiegeln die Struktur: Landing, drei Segmente, Kontakt,
 * Rechtstexte. Bleibt bis zum Livegang wirkungslos, weil robots.ts alles
 * sperrt -- die Datei liegt aber schon richtig.
 */
const seiten: { pfad: string; prioritaet: number }[] = [
  { pfad: "/", prioritaet: 1 },
  { pfad: "/hotel", prioritaet: 0.8 },
  { pfad: "/gastro", prioritaet: 0.8 },
  { pfad: "/firmen", prioritaet: 0.8 },
  { pfad: "/kontakt", prioritaet: 0.7 },
  { pfad: "/impressum", prioritaet: 0.2 },
  { pfad: "/datenschutz", prioritaet: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const stand = new Date();
  return seiten.map(({ pfad, prioritaet }) => ({
    url: new URL(pfad, site.url).toString(),
    lastModified: stand,
    changeFrequency: "monthly",
    priority: prioritaet,
  }));
}
