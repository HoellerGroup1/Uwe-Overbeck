import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Rechteckiger Button nach DESIGN.md: 1px Rahmen, im Hover volle Fläche,
 * kein Übergang. py-3.5 ergibt 46 px Höhe und damit eine Trefferfläche,
 * die auch auf dem Handy sicher zu treffen ist.
 *
 * Wird vom Katalog-Download und vom Formular geteilt.
 */
export const BUTTON_KLASSE =
  "inline-block border border-primary px-stack-md py-3.5 font-body text-label-caps uppercase text-primary hover:bg-primary hover:text-on-primary";

/**
 * Micro-Label nach DESIGN.md: immer Versalien, weites Tracking.
 * Wirkt als architektonischer Marker auf der Seite.
 */
export function MicroLabel({
  children,
  className = "",
  as: Tag = "p",
  id,
}: {
  children: ReactNode;
  className?: string;
  as?: "p" | "h2" | "span";
  id?: string;
}) {
  return (
    <Tag id={id} className={`font-body text-label-caps uppercase ${className}`}>
      {children}
    </Tag>
  );
}

/**
 * Unterstrichener Textlink. Kein Button-Look — die Seite arbeitet mit Linien,
 * nicht mit Flächen.
 */
export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    /*
      Die Trefferfläche wächst nach oben (pt-6), das negative Margin nimmt den
      Platz im Layout wieder zurück. So bleibt der Unterstrich eng am Text und
      die Fläche kommt trotzdem auf 45 px. Nach oben zu wachsen ist gefahrlos,
      weil über dem Link nie ein zweites Ziel steht.
    */
    <Link
      href={href}
      className={`-mt-5 inline-block border-b border-current pt-6 pb-1 font-body text-label-caps uppercase transition-opacity hover:opacity-60 ${className}`}
    >
      {children}
    </Link>
  );
}
