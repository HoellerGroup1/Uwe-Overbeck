import { MicroLabel } from "@/components/ui";

/**
 * Steht dort, wo ein Bild hingehört, das noch nicht da ist.
 *
 * Dasselbe Muster wie bei den Referenzen und beim Portrait: fehlt die Quelle,
 * fällt die Komponente auf eine ruhige Fläche zurück statt zu brechen. Sobald
 * das Foto vorliegt, wird nur `src` in der Content-Datei gesetzt — an den
 * Komponenten ändert sich nichts.
 *
 * Bewusst sichtbar beschriftet: ein leeres graues Feld sieht aus wie ein
 * Ladefehler, ein beschriftetes wie eine offene Position.
 */
export function BildPlatzhalter({
  hinweis,
  dunkel = false,
}: {
  hinweis: string;
  dunkel?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`flex h-full w-full items-center justify-center ${
        dunkel ? "bg-ink" : "border border-ash/40 bg-sand"
      }`}
    >
      <MicroLabel className={dunkel ? "text-ash" : "text-on-surface-variant"}>
        {hinweis}
      </MicroLabel>
    </div>
  );
}
