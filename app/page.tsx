import { KatalogDownload } from "@/components/katalog-download";
import { About } from "@/components/landing/about";
import { BereichsTiles } from "@/components/landing/bereichs-tiles";
import { CredibilityStrip } from "@/components/landing/credibility-strip";
import { CtaBand } from "@/components/landing/cta-band";
import { Hero } from "@/components/landing/hero";
import { ReferenzenMarquee } from "@/components/referenzen-marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <About />
      <BereichsTiles />
      <ReferenzenMarquee />
      <KatalogDownload />
      <CtaBand />
    </>
  );
}
