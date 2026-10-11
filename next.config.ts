import type { NextConfig } from "next";

/**
 * HTTP-Security-Header. HSTS setzt Vercel selbst, der Rest kommt von hier.
 *
 * CSP: Next.js haengt fuer Hydration und Router kleine Inline-Skripte in die
 * Seite, deshalb 'unsafe-inline' bei script-src. Die strengere Variante mit
 * Nonces braucht eine Proxy-Schicht pro Request und wuerde die Seite von
 * statisch auf dynamisch umstellen -- fuer eine Seite ohne Fremdskripte
 * steht das in keinem Verhaeltnis. Alles andere ist dicht: keine fremden
 * Hosts fuer Skripte, Styles, Bilder, Fonts oder Verbindungen, kein Einbetten
 * in fremde Seiten, Formulare nur an die eigene Domain.
 *
 * Wer einen externen Dienst ergaenzt (Analytics, Maps, Video), muss dessen
 * Host hier eintragen, sonst blockt der Browser ihn still.
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
];

/**
 * Bildauslieferung, Stand 11.10. (zweiter Anlauf)
 *
 * Fotos werden NICHT mehr von Vercel umgerechnet. `npm run bilder` erzeugt
 * fertige WebP-Varianten in public/v, der Loader in lib/bild-loader.ts
 * waehlt pro Breite die passende Datei. Die liegen direkt im CDN und kommen
 * auch beim allerersten Aufruf ohne Rechenzeit.
 *
 * deviceSizes muss zu BREITEN in scripts/bilder-varianten.mjs passen.
 */
const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    loader: "custom",
    loaderFile: "./lib/bild-loader.ts",
    deviceSizes: [640, 828, 1080, 1280, 1600, 1920, 2400],
    imageSizes: [128, 256, 384],
  },
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      // Fertige Bildvarianten: eine Woche im Browser-Cache, danach im
      // Hintergrund aktualisieren. Neue Fotos bekommen einen neuen Namen.
      {
        source: "/v/:pfad*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" },
        ],
      },
    ];
  },
};

export default nextConfig;
