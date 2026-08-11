import Link from "next/link";
import type { ReactNode } from "react";

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
    <Link
      href={href}
      className={`inline-block border-b border-current pb-1 font-body text-label-caps uppercase transition-opacity hover:opacity-60 ${className}`}
    >
      {children}
    </Link>
  );
}
