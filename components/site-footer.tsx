import Link from "next/link";
import { Wortmarke } from "@/components/wortmarke";
import { footer, navigation, site } from "@/content/site";

export function SiteFooter() {
  const jahr = new Date().getFullYear();

  return (
    // relative z-10, damit das fixierte bg-grid-Overlay nicht über der Fläche liegt
    // Der frühere Anker id="kontakt" ist raus — Kontakt ist jetzt eine eigene Seite.
    <footer className="relative z-10 mt-auto bg-ink text-on-primary">
      <div className="px-margin-mobile py-stack-lg md:px-margin-desktop md:py-stack-xl">
        {/*
          Mobil zweispaltig statt gestapelt: Wortmarke und Kontakt über die
          volle Breite, Seiten und Rechtliches nebeneinander. Gestapelt war
          der Footer 681 px hoch, also fast ein ganzer Bildschirm.
        */}
        <div className="grid grid-cols-2 gap-stack-md md:grid-cols-12 md:gap-gutter">
          <div className="col-span-2 md:col-span-5">
            <Wortmarke groesse="gross" />
            <p className="mt-stack-md max-w-[28ch] font-body text-body-md text-ash">
              {site.claim}
            </p>
          </div>

          <div className="col-span-2 md:col-span-3">
            <h2 className="font-body text-label-caps uppercase text-ash">
              {footer.kontaktLabel}
            </h2>
            {/*
              py-3 ergibt 44 px hohe Zeilen. Die Abstände der Liste sind
              bewusst über das Padding gelöst statt über space-y: nur so ist
              die Trefferfläche so hoch wie der Abstand zur nächsten Zeile,
              sonst überlappen sich benachbarte Ziele.
            */}
            <ul className="mt-stack-sm -my-3">
              <li>
                <a
                  href={`mailto:${footer.kontakt.email}`}
                  className="block py-3 font-body text-body-md underline-offset-4 hover:underline hover:decoration-signal"
                >
                  {footer.kontakt.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footer.kontakt.telefonRoh}`}
                  className="block py-3 font-body text-body-md underline-offset-4 hover:underline hover:decoration-signal"
                >
                  {footer.kontakt.telefon}
                </a>
              </li>
            </ul>
            {/* Postanschrift: kein Link, deshalb ausserhalb der Liste. */}
            <address className="mt-stack-sm font-body text-body-md text-ash not-italic">
              {footer.kontakt.strasse}
              <br />
              {footer.kontakt.ort}
              <br />
              {footer.kontakt.land}
            </address>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h2 className="font-body text-label-caps uppercase text-ash">
              {footer.navLabel}
            </h2>
            <ul className="mt-stack-sm -my-3">
              {navigation
                .filter((link) => !link.href.startsWith("#"))
                .map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block py-3 font-body text-body-md underline-offset-4 hover:underline hover:decoration-signal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h2 className="font-body text-label-caps uppercase text-ash">
              {footer.rechtLabel}
            </h2>
            <ul className="mt-stack-sm -my-3">
              {footer.rechtLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-3 font-body text-body-md underline-offset-4 hover:underline hover:decoration-signal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-stack-md border-t border-ash/40 pt-stack-md font-body text-label-caps uppercase text-ash md:mt-stack-lg">
          © {jahr} {site.firma}. {footer.copyrightSuffix}
        </p>
      </div>
    </footer>
  );
}
