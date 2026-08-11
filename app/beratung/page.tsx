import type { Metadata } from "next";
import { AnfrageFormular } from "@/components/beratung/anfrage-formular";
import { Container } from "@/components/container";
import { MicroLabel } from "@/components/ui";
import { beratung } from "@/content/beratung";

export const metadata: Metadata = {
  title: beratung.meta.titel,
  description: beratung.meta.beschreibung,
};

export default function BeratungPage() {
  return (
    <Container as="section" className="pt-header pb-stack-xl">
      <div className="grid grid-cols-1 gap-stack-xl pt-stack-xl md:grid-cols-12 md:gap-gutter">
        <div className="md:col-span-6">
          <MicroLabel className="text-on-surface-variant">
            / {beratung.label}
          </MicroLabel>
          <h1 className="mt-stack-md font-display text-display-lg-mobile text-balance md:text-display-lg">
            {beratung.headline}
          </h1>

          <ul className="mt-stack-lg max-w-[46ch] border-t border-ash/40">
            {beratung.bullets.map((bullet) => (
              <li
                key={bullet}
                className="border-b border-ash/40 py-stack-md font-body text-body-lg text-on-surface-variant"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5 md:col-start-8">
          <AnfrageFormular />
        </div>
      </div>
    </Container>
  );
}
