import type { Metadata } from "next";
import { Instrument_Serif, Schibsted_Grotesk } from "next/font/google";
import { BgGrid } from "@/components/bg-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/content/site";
import "./globals.css";

/**
 * next/font lädt die Schriften zur Buildzeit herunter und liefert sie
 * selbst gehostet aus. Kein Google-Fonts-CDN zur Laufzeit, damit die Seite
 * ohne Third-Party-Requests und ohne Cookie-Banner auskommt.
 */
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-instrument-serif",
});

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-schibsted-grotesk",
});

export const metadata: Metadata = {
  title: site.titel,
  description: site.beschreibung,
  // Bis zum Launch bewusst nicht indexierbar.
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${instrumentSerif.variable} ${schibstedGrotesk.variable}`}>
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
      </body>
    </html>
  );
}
