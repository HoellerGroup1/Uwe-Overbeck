import type { Metadata } from "next";
import { AbschlussCta } from "@/components/abschluss-cta";
import { EditorialBlock } from "@/components/inspiration/editorial-block";
import { SeitenHero } from "@/components/inspiration/seiten-hero";
import { firmenSeite } from "@/content/inspiration";

export const metadata: Metadata = {
  title: firmenSeite.meta.titel,
  description: firmenSeite.meta.beschreibung,
};

export default function FirmenPage() {
  return (
    <>
      <SeitenHero {...firmenSeite.hero} />
      {firmenSeite.bloecke.map((block, index) => (
        <EditorialBlock key={block.headline} block={block} index={index} />
      ))}
      <AbschlussCta {...firmenSeite.abschluss} />
    </>
  );
}
