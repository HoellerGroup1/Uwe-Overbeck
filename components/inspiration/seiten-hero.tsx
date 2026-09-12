import Image from "next/image";
import { BildPlatzhalter } from "@/components/bild-platzhalter";
import { Container } from "@/components/container";
import { MicroLabel } from "@/components/ui";

/** Schmaler Hero der Inspirationsseiten: Bild, Micro-Label, Display-Headline. */
export function SeitenHero({
  label,
  headline,
  bild,
}: {
  label: string;
  headline: string;
  bild: { src?: string; alt: string };
}) {
  return (
    <section className="relative isolate flex min-h-[52svh] items-end overflow-hidden md:min-h-[62svh]">
      {/*
        Ohne Bild wird die Fläche dunkel statt hell: der Hero-Text ist auf
        hellen Text ausgelegt, ein heller Platzhalter würde ihn unlesbar
        machen.
      */}
      {bild.src ? (
        <Image
          src={bild.src}
          alt={bild.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover bild-ton"
        />
      ) : (
        <div className="absolute inset-0">
          <BildPlatzhalter hinweis="Bild folgt" dunkel />
        </div>
      )}

      {/* Abdunklung wie im Hero der Landingpage, damit heller Text sicher lesbar bleibt. */}
      <div aria-hidden="true" className="absolute inset-0 bg-ink/45" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-ink/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/75 to-transparent"
      />

      <Container className="relative z-10 w-full pt-header pb-stack-lg md:pb-stack-xl">
        <div className="md:grid md:grid-cols-12 md:gap-gutter">
          <div className="md:col-span-9">
            <MicroLabel className="text-on-primary/80">/ {label}</MicroLabel>
            <h1 className="mt-stack-md font-display text-display-lg-mobile text-balance text-on-primary md:text-display-lg">
              {headline}
            </h1>
          </div>
        </div>
      </Container>
    </section>
  );
}
