import { z } from "zod";
import { fehlermeldungen } from "@/content/kontakt";

/**
 * Validierung der Beratungsanfrage. Läuft ausschließlich auf dem Server —
 * die Browser-Validierung im Formular ist Komfort, keine Absicherung.
 */
export const anfrageSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, fehlermeldungen.nameLeer)
    .max(120, fehlermeldungen.zuLang),
  betrieb: z
    .string()
    .trim()
    .min(2, fehlermeldungen.betriebLeer)
    .max(120, fehlermeldungen.zuLang),
  rolle: z
    .enum(["hotel", "gastronomie", "housekeeping", "sonstiges"], {
      message: fehlermeldungen.rolleUngueltig,
    })
    .optional(),
  email: z
    .email(fehlermeldungen.emailUngueltig)
    .max(254, fehlermeldungen.zuLang),
  telefon: z.string().trim().max(50, fehlermeldungen.telefonZuLang).optional(),
  nachricht: z
    .string()
    .trim()
    .max(4000, fehlermeldungen.nachrichtZuLang)
    .optional(),
  datenschutz: z.literal("on", { message: fehlermeldungen.datenschutzFehlt }),
});

export type Anfrage = z.infer<typeof anfrageSchema>;

/** Feldnamen, die das Formular zurückspielt, damit Eingaben nicht verloren gehen. */
export const FELDNAMEN = [
  "name",
  "betrieb",
  "rolle",
  "email",
  "telefon",
  "nachricht",
] as const;

export type Feldname = (typeof FELDNAMEN)[number];

/**
 * Honeypot. Für Menschen unsichtbar, für einfache Bots verlockend.
 * Ist das Feld gefüllt, wird die Anfrage verworfen.
 */
export const HONEYPOT_FELD = "webseite";
