/**
 * 12-Spalten-Hairline-Overlay aus dem Entwurf. Liegt fix hinter dem Inhalt,
 * innerhalb der Seitenränder. Auf Mobile ausgeblendet (siehe globals.css).
 */
export function BgGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full px-margin-mobile md:px-margin-desktop"
    >
      <div className="bg-grid h-full w-full border-x border-ash/30" />
    </div>
  );
}
