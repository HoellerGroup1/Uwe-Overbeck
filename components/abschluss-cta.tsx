import { Container } from "@/components/container";
import { TextLink } from "@/components/ui";

/** CTA-Band in ink. Wird auf der Landingpage und auf beiden Inspirationsseiten genutzt. */
export function AbschlussCta({
  headline,
  text,
  linkLabel,
  linkHref,
}: {
  headline: string;
  text: string;
  linkLabel: string;
  linkHref: string;
}) {
  return (
    <section aria-labelledby="cta-headline" className="bg-ink text-on-primary">
      <Container className="py-stack-lg md:py-stack-xl">
        <div className="grid grid-cols-1 gap-stack-md md:grid-cols-12 md:items-end md:gap-gutter">
          <div className="md:col-span-7">
            <h2
              id="cta-headline"
              className="font-display text-headline-lg-mobile text-balance md:text-headline-lg"
            >
              {headline}
            </h2>
            <p className="mt-stack-md max-w-[42ch] font-body text-body-lg text-ash">
              {text}
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:text-right">
            <TextLink href={linkHref}>{linkLabel}</TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
