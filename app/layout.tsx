import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { BgGrid } from "@/components/bg-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { footer, site } from "@/content/site";
import "./globals.css";

/**
 * Switzer ist das einzige Schriftsystem der Marke (STYLE.md, Abschnitt 4,
 * Entscheidung E3). Eine einzige Variable-Datei, 43 KB, Achse wght 100-900 --
 * weniger als drei einzelne Schnitte und gibt jedes Gewicht dazwischen frei.
 *
 * Die ITF Free Font License verbietet Subsetting und jede Aenderung an der
 * Datei. next/font/local liefert sie unveraendert aus, deshalb dieser Weg und
 * nicht next/font/google oder ein Subsetter.
 */
const switzer = localFont({
  src: [
    {
      path: "../public/fonts/Switzer-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-switzer",
  // Fallback-Metriken angeglichen, damit beim Nachladen nichts springt.
  adjustFontFallback: "Arial",
});

/**
 * Basis fuer absolute URLs in Open Graph und Co. In Production die echte
 * Domain aus content/site.ts. Auf Vercel-Previews die Deployment-URL --
 * sonst zeigt das Vorschaubild auf eine Domain, die noch nicht existiert,
 * und der Link, den Uwe per WhatsApp bekommt, hat keine Vorschau.
 * Die Sitemap nutzt weiterhin site.url; sie ist bis zum Livegang ohnehin
 * durch robots.ts gesperrt.
 */
const basisUrl =
  process.env.VERCEL_ENV !== "production" && process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : site.url;

export const metadata: Metadata = {
  // Macht relative Pfade in Open Graph und canonical absolut.
  metadataBase: new URL(basisUrl),
  title: site.titel,
  description: site.beschreibung,
  applicationName: site.firma,
  // Relativ: Next setzt daraus pro Route die absolute canonical-URL auf Basis von metadataBase.
  alternates: { canonical: "./" },
  // Die Unterseiten bringen ihren eigenen Titel mit Suffix bereits mit;
  // Open Graph bekommt hier die globalen Defaults, das Bild kommt aus
  // app/opengraph-image.tsx.
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: site.firma,
    title: site.titel,
    description: site.beschreibung,
  },
  twitter: { card: "summary_large_image" },
  // Bis zum Launch bewusst nicht indexierbar (TODO.md, Abschnitt 6).
  robots: { index: false, follow: false },
};

/**
 * Strukturierte Daten fuer Google: ein LocalBusiness mit den Stammdaten aus
 * PROJEKT.md, Abschnitt 3. Bewusst nur belegbare Felder -- keine
 * Oeffnungszeiten, keine Bewertungen, keine Preisspanne.
 */
const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.firma,
  url: site.url,
  telephone: footer.kontakt.telefonRoh,
  email: footer.kontakt.email,
  founder: { "@type": "Person", name: site.person },
  description: site.beschreibung,
  address: {
    "@type": "PostalAddress",
    streetAddress: footer.kontakt.strasse,
    postalCode: footer.kontakt.ort.split(" ")[0],
    addressLocality: footer.kontakt.ort.split(" ").slice(1).join(" "),
    addressCountry: "AT",
  },
  areaServed: ["AT", "DE"],
};

/** Browserleiste auf dem Handy in papier statt Standardweiß. */
export const viewport: Viewport = {
  themeColor: "#F7F6F3",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={switzer.variable}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-surface focus:px-4 focus:py-2 focus:font-body focus:text-body-md"
        >
          Zum Inhalt springen
        </a>
        <BgGrid />
        <SiteHeader />
        <main id="inhalt" className="relative z-10 flex-1">
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          // JSON.stringify liefert keine HTML-Sonderzeichen aus den Stammdaten,
          // "<" wird trotzdem maskiert, damit ein Content-Wert nie das Script schliesst.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
