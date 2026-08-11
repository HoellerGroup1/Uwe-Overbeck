"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, site } from "@/content/site";

/** Routen mit bildgestütztem Hero: dort steht die Nav transparent auf dunklem Bild. */
const ROUTEN_MIT_HERO = new Set(["/", "/hotel", "/gastro"]);

export function SiteHeader() {
  const pathname = usePathname();
  const [gescrollt, setGescrollt] = useState(false);
  const [menuOffen, setMenuOffen] = useState(false);

  const ueberHero = ROUTEN_MIT_HERO.has(pathname);
  /** Heller Text nur, solange die Nav transparent auf dem Hero liegt. */
  const hell = ueberHero && !gescrollt && !menuOffen;

  useEffect(() => {
    const onScroll = () => setGescrollt(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOffen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOffen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOffen]);

  const flaeche =
    hell
      ? "bg-transparent border-transparent"
      : "bg-surface border-ash/40";
  const textFarbe = hell ? "text-on-primary" : "text-on-surface";

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b transition-colors duration-200 ${flaeche} ${textFarbe}`}
    >
      <div className="flex items-center justify-between px-margin-mobile py-5 md:px-margin-desktop md:py-6">
        <Link
          href="/"
          className="font-display text-headline-md uppercase tracking-tight"
        >
          {site.wortmarke}
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden md:block">
          <ul className="flex items-center gap-stack-md">
            {navigation.map((link) => {
              // "/" darf nur auf der Startseite aktiv sein, sonst passt es überall.
              const aktiv =
                link.href === "/"
                  ? pathname === "/"
                  : !link.href.startsWith("#") && pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={aktiv ? "page" : undefined}
                    className={`font-body text-label-caps uppercase border-b pb-1 transition-opacity hover:opacity-60 ${
                      aktiv ? "border-current" : "border-transparent"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOffen((offen) => !offen)}
          aria-expanded={menuOffen}
          aria-controls="mobile-navigation"
          className="md:hidden -mr-2 p-2"
        >
          <span className="sr-only">
            {menuOffen ? "Menü schließen" : "Menü öffnen"}
          </span>
          {menuOffen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              aria-hidden="true"
            >
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              aria-hidden="true"
            >
              <path d="M3 7h18M3 12h18M3 17h18" />
            </svg>
          )}
        </button>
      </div>

      {menuOffen && (
        <nav
          id="mobile-navigation"
          aria-label="Hauptnavigation"
          className="border-t border-ash/40 bg-surface text-on-surface md:hidden"
        >
          <ul>
            {navigation.map((link) => (
              <li key={link.href} className="border-b border-ash/30 last:border-b-0">
                <Link
                  href={link.href}
                  onClick={() => setMenuOffen(false)}
                  className="block px-margin-mobile py-stack-sm font-body text-body-lg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
