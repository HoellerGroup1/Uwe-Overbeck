import Image from "next/image";
import { Container } from "@/components/container";
import { MicroLabel } from "@/components/ui";
import { about } from "@/content/landing";

export function About() {
  return (
    <section aria-labelledby="about-headline" className="border-b border-ash/40">
      <Container className="py-stack-lg md:py-stack-xl">
        <div className="grid grid-cols-1 gap-stack-lg md:grid-cols-12 md:gap-gutter">
          <div className="md:col-span-4">
            {about.portrait.vorhanden ? (
              <Image
                src={about.portrait.src}
                alt={about.portrait.alt}
                width={about.portrait.breite}
                height={about.portrait.hoehe}
                sizes="(min-width: 768px) 29vw, 100vw"
                className="w-full border border-ash/40 object-cover bild-ton"
              />
            ) : (
              /* Fallback, falls das Portrait je wieder ausgetauscht wird. */
              <div className="flex aspect-4/5 w-full items-center justify-center border border-ash/40 bg-sand">
                <MicroLabel className="text-on-surface-variant">
                  {about.portrait.platzhalterHinweis}
                </MicroLabel>
              </div>
            )}
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <MicroLabel className="text-on-surface-variant">{about.label}</MicroLabel>
            <h2
              id="about-headline"
              className="mt-stack-md font-display text-headline-lg-mobile text-balance md:text-headline-lg"
            >
              {about.headline}
            </h2>
            <div className="mt-stack-md max-w-[54ch] space-y-stack-md border-l border-ash/40 pl-gutter">
              {about.absaetze.map((absatz) => (
                <p key={absatz} className="font-body text-body-lg text-on-surface-variant">
                  {absatz}
                </p>
              ))}
            </div>
            <p className="mt-stack-md font-display text-headline-md text-on-surface-variant">
              {about.signatur}
            </p>

            {/*
              Ablauf in derselben Form wie die Ledger-Zeilen der Seite:
              Nummer in label-caps, Haarlinien zwischen den Schritten.
              Ab sm zwei Spalten, damit der Block neben dem Portrait nicht
              laenger wird als das Bild.
            */}
            <div className="mt-stack-lg">
              <MicroLabel as="h3" className="text-on-surface-variant">
                {about.ablauf.label}
              </MicroLabel>
              <ol className="mt-stack-sm grid grid-cols-1 border-t border-ash/40 sm:grid-cols-2 sm:gap-x-gutter">
                {about.ablauf.schritte.map((schritt, i) => (
                  <li
                    key={schritt.titel}
                    className="grid grid-cols-[2.5rem_1fr] border-b border-ash/40 py-stack-md"
                  >
                    <span className="pt-1.5 font-body text-label-caps text-on-surface-variant">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-body text-body-lg text-on-surface">{schritt.titel}</p>
                      <p className="mt-1 font-body text-body-md text-on-surface-variant">
                        {schritt.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
