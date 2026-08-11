import type { Metadata } from "next";
import { AbschlussCta } from "@/components/abschluss-cta";
import { EditorialBlock } from "@/components/inspiration/editorial-block";
import { SeitenHero } from "@/components/inspiration/seiten-hero";
import { hotelSeite } from "@/content/inspiration";

export const metadata: Metadata = {
  title: hotelSeite.meta.titel,
  description: hotelSeite.meta.beschreibung,
};

export default function HotelPage() {
  return (
    <>
      <SeitenHero {...hotelSeite.hero} />
      {hotelSeite.bloecke.map((block, index) => (
        <EditorialBlock key={block.headline} block={block} index={index} />
      ))}
      <AbschlussCta {...hotelSeite.abschluss} />
    </>
  );
}
