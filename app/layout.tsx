import type { Metadata } from "next";
import localFont from "next/font/local";
import { BgGrid } from "@/components/bg-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/content/site";
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
      </body>
    </html>
  );
}
