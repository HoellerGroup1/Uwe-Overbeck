import { Container } from "@/components/container";
import { TextLink } from "@/components/ui";
import { ctaBand } from "@/content/landing";

export function CtaBand() {
  return (
    <section aria-labelledby="cta-headline" className="bg-ink text-on-primary">
      <Container className="py-stack-xl">
        <div className="grid grid-cols-1 gap-stack-md md:grid-cols-12 md:gap-gutter md:items-end">
          <div className="md:col-span-7">
            <h2
              id="cta-headline"
              className="font-display text-headline-lg-mobile text-balance md:text-headline-lg"
            >
              {ctaBand.headline}
            </h2>
            <p className="mt-stack-md max-w-[42ch] font-body text-body-lg text-ash">
              {ctaBand.text}
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:text-right">
            <TextLink href={ctaBand.linkHref}>{ctaBand.linkLabel}</TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
