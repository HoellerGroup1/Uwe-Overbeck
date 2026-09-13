import type { Metadata } from "next";
import { Container } from "@/components/container";
import { MicroLabel, TextLink } from "@/components/ui";
import { nichtGefunden } from "@/content/site";

export const metadata: Metadata = {
  title: "Seite nicht gefunden — Overbeck Berufsmode",
  robots: { index: false, follow: false },
};

/** Ersetzt die englische Next-Standardseite. Layout, Header und Footer kommen aus dem Root-Layout. */
export default function NotFound() {
  return (
    <Container as="section" className="pt-header pb-stack-lg md:pb-stack-xl">
      <div className="pt-stack-lg md:pt-stack-xl">
        <MicroLabel className="text-on-surface-variant">/ {nichtGefunden.label}</MicroLabel>
        <h1 className="mt-stack-md max-w-[20ch] font-display text-display-lg-mobile text-balance md:text-display-lg">
          {nichtGefunden.headline}
        </h1>
        <p className="mt-stack-md max-w-[46ch] font-body text-body-lg text-on-surface-variant">
          {nichtGefunden.text}
        </p>
        <div className="mt-stack-lg">
          <TextLink href="/">{nichtGefunden.linkLabel}</TextLink>
        </div>
      </div>
    </Container>
  );
}
