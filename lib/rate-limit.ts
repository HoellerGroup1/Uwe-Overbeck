/**
 * Sehr einfaches Rate-Limit im Arbeitsspeicher.
 *
 * Bewusste Einschränkung: der Zähler lebt pro Serverinstanz. Auf einer
 * Plattform mit mehreren Instanzen ist das eine Bremse, keine harte Grenze.
 * Für mehr bräuchte es einen externen Store.
 */

const FENSTER_MS = 10 * 60 * 1000;
const MAX_ANFRAGEN = 5;
const MAX_SCHLUESSEL = 1000;

const zeitstempel = new Map<string, number[]>();

export function rateLimitUeberschritten(schluessel: string): boolean {
  const jetzt = Date.now();
  const bisher = (zeitstempel.get(schluessel) ?? []).filter(
    (t) => jetzt - t < FENSTER_MS,
  );

  if (bisher.length >= MAX_ANFRAGEN) {
    zeitstempel.set(schluessel, bisher);
    return true;
  }

  bisher.push(jetzt);
  zeitstempel.set(schluessel, bisher);

  // Gelegentlich abgelaufene Einträge entfernen, damit die Map nicht wächst.
  if (zeitstempel.size > MAX_SCHLUESSEL) {
    for (const [key, werte] of zeitstempel) {
      if (werte.every((t) => jetzt - t >= FENSTER_MS)) zeitstempel.delete(key);
    }
  }

  return false;
}
