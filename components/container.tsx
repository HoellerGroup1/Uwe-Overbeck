import type { ReactNode } from "react";

/**
 * Seitenränder nach DESIGN.md: 24px mobil, 80px ab Desktop.
 */
export function Container({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav" | "main";
}) {
  return (
    <Tag className={`px-margin-mobile md:px-margin-desktop ${className}`}>
      {children}
    </Tag>
  );
}
