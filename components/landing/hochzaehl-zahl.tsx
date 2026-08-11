"use client";

import { useEffect, useRef } from "react";

/**
 * Zählt beim Scrollen langsam auf den Zielwert hoch.
 *
 * Bewusste Abweichung von „Animationen ausschließlich CSS": ein Hochzähler
 * braucht entweder JavaScript oder scroll-getriebene CSS-Animationen, deren
 * Browserunterstützung noch zu wackelig ist. Rein per CSS liefe die Animation
 * beim Laden der Seite los und wäre vorbei, bevor der Strip überhaupt im Bild
 * ist. Also: keine Library, keine Abhängigkeit, nur IntersectionObserver und
 * requestAnimationFrame.
 *
 * Der Endwert steht bereits im serverseitig gerenderten HTML. Ohne JavaScript
 * und bei prefers-reduced-motion bleibt er einfach stehen.
 */

const DAUER_MS = 2000;

export function HochzaehlZahl({
  wert,
  suffix = "",
}: {
  wert: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let beginn = 0;

    const schreibe = (zahl: number) => {
      element.textContent = `${zahl}${suffix}`;
    };

    const schritt = (jetzt: number) => {
      if (!beginn) beginn = jetzt;
      const anteil = Math.min((jetzt - beginn) / DAUER_MS, 1);
      // easeOutCubic: zügig los, weich aus
      const verlauf = 1 - Math.pow(1 - anteil, 3);
      schreibe(Math.round(verlauf * wert));
      if (anteil < 1) frame = requestAnimationFrame(schritt);
    };

    const beobachter = new IntersectionObserver(
      (eintraege) => {
        if (!eintraege[0].isIntersecting) return;
        beobachter.disconnect();
        frame = requestAnimationFrame(schritt);
      },
      { threshold: 0.5 },
    );

    schreibe(0);
    beobachter.observe(element);

    return () => {
      beobachter.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [wert, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      {wert}
      {suffix}
    </span>
  );
}
