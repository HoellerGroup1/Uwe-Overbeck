import type { Metadata } from "next";
import { AbschlussCta } from "@/components/abschluss-cta";
import { EditorialBlock } from "@/components/inspiration/editorial-block";
import { SeitenHero } from "@/components/inspiration/seiten-hero";
import { gastroSeite } from "@/content/inspiration";

export const metadata: Metadata = {
  title: gastroSeite.meta.titel,
  description: gastroSeite.meta.beschreibung,
};

export default function GastroPage() {
  return (
    <>
      <SeitenHero {...gastroSeite.hero} />
      {gastroSeite.bloecke.map((block, index) => (
        <EditorialBlock key={block.headline} block={block} index={index} />
      ))}
      <AbschlussCta {...gastroSeite.abschluss} />
    </>
  );
}
