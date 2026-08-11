import { AbschlussCta } from "@/components/abschluss-cta";
import { KatalogDownload } from "@/components/katalog-download";
import { About } from "@/components/landing/about";
import { BereichsTiles } from "@/components/landing/bereichs-tiles";
import { CredibilityStrip } from "@/components/landing/credibility-strip";
import { Hero } from "@/components/landing/hero";
import { ReferenzenMarquee } from "@/components/referenzen-marquee";
import { ctaBand } from "@/content/landing";

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <About />
      <BereichsTiles />
      <ReferenzenMarquee />
      <KatalogDownload />
      <AbschlussCta {...ctaBand} />
    </>
  );
}
