import Image from "next/image";
import { Container } from "@/components/container";
import { MicroLabel, TextLink } from "@/components/ui";
import { hero } from "@/content/landing";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[80svh] items-end overflow-hidden md:min-h-[88svh]">
      <Image
        src={hero.bild.src}
        alt={hero.bild.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover bild-ton"
      />

      {/*
        Abdunklung in drei Lagen, damit heller Text auf hellem Bild sicher
        lesbar bleibt: Grundschleier, dunkler Kopf für die transparente Nav,
        dunkler Fuß für die Headline.
      */}
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
            <MicroLabel className="text-on-primary/80">{hero.label}</MicroLabel>
            <h1 className="mt-stack-md font-display text-display-lg-mobile text-balance text-on-primary md:text-display-lg">
              {hero.headline}
            </h1>
          </div>

          <div className="mt-stack-md md:col-span-5 md:col-start-1 md:mt-stack-lg">
            <p className="max-w-[42ch] font-body text-body-lg text-on-primary">
              {hero.subline}
            </p>
            <TextLink href={hero.linkHref} className="mt-stack-md text-on-primary">
              {hero.linkLabel}
            </TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
