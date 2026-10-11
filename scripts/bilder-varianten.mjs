/**
 * Erzeugt fuer jedes Foto unter public/img fertige WebP-Varianten in den
 * Breiten, die next/image anfragt, und schreibt lib/bild-varianten.json.
 *
 * Warum: Vercel rechnet Bilder sonst beim ersten Aufruf um. Das dauert pro
 * Bild und Breite spuerbar und faengt nach jedem Deploy neu an. Fertige
 * Dateien liegen direkt im CDN und kommen ohne Wartezeit.
 *
 * Aufruf nach jedem Bildtausch:  npm run bilder
 * Neue Fotos bekommen einen neuen Dateinamen, dann greift kein alter Cache.
 */
import sharp from "sharp";
import { readdir, mkdir, writeFile, rm } from "node:fs/promises";
import path from "node:path";

const WURZEL = path.resolve("public");
const QUELLE = path.join(WURZEL, "img");
const ZIEL = path.join(WURZEL, "v");
const BREITEN = [640, 828, 1080, 1280, 1600, 1920, 2400]; // = deviceSizes in next.config.ts
const QUALITAET = 70;

async function fotos(ordner) {
  const out = [];
  for (const e of await readdir(ordner, { withFileTypes: true })) {
    const p = path.join(ordner, e.name);
    if (e.isDirectory()) out.push(...(await fotos(p)));
    else if (/\.jpe?g$/i.test(e.name)) out.push(p);
  }
  return out;
}

await rm(ZIEL, { recursive: true, force: true });
const manifest = {};
let summe = 0;
for (const datei of (await fotos(QUELLE)).sort()) {
  const { width } = await sharp(datei).metadata();
  const breiten = BREITEN.filter((b) => b < width);
  if (!breiten.includes(width) && width <= 2400) breiten.push(width);
  const rel = "/" + path.relative(WURZEL, datei).split(path.sep).join("/");
  const basis = rel.replace(/^\/img\//, "").replace(/\.jpe?g$/i, "");
  manifest[rel] = [];
  for (const b of breiten.sort((a, c) => a - c)) {
    const ziel = path.join(ZIEL, `${basis}-${b}.webp`);
    await mkdir(path.dirname(ziel), { recursive: true });
    const info = await sharp(datei).resize({ width: b }).webp({ quality: QUALITAET, effort: 6 }).toFile(ziel);
    summe += info.size;
    manifest[rel].push(b);
  }
  console.log(rel, manifest[rel].join(","));
}
await writeFile("lib/bild-varianten.json", JSON.stringify(manifest, null, 2) + "\n");
console.log(`\n${Object.keys(manifest).length} Fotos, ${Math.round(summe / 1024)} KB Varianten gesamt`);
