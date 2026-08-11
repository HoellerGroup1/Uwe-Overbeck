import Link from "next/link";
import { footer, navigation, site } from "@/content/site";

export function SiteFooter() {
  const jahr = new Date().getFullYear();

  return (
    <footer id="kontakt" className="mt-auto bg-ink text-on-primary">
      <div className="px-margin-mobile py-stack-lg md:px-margin-desktop md:py-stack-xl">
        <div className="grid grid-cols-1 gap-stack-lg md:grid-cols-12 md:gap-gutter">
          <div className="md:col-span-5">
            <p className="font-display text-headline-lg-mobile uppercase tracking-tight md:text-headline-lg">
              {site.wortmarke}
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-body text-label-caps uppercase text-ash">
              {footer.kontaktLabel}
            </h2>
            <ul className="mt-stack-sm space-y-1">
              <li className="font-body text-body-md">{footer.kontakt.email}</li>
              <li className="font-body text-body-md">{footer.kontakt.telefon}</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="font-body text-label-caps uppercase text-ash">
              {footer.navLabel}
            </h2>
            <ul className="mt-stack-sm space-y-1">
              {navigation
                .filter((link) => link.href !== "/#kontakt")
                .map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-body-md underline-offset-4 hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="font-body text-label-caps uppercase text-ash">
              {footer.rechtLabel}
            </h2>
            <ul className="mt-stack-sm space-y-1">
              {footer.rechtLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-body-md underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-stack-lg border-t border-ash/40 pt-stack-md font-body text-label-caps uppercase text-ash">
          © {jahr} {site.wortmarke}. {footer.copyrightSuffix}
        </p>
      </div>
    </footer>
  );
}
