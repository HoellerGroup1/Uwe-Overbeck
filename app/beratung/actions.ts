"use server";

import { headers } from "next/headers";
import { formular } from "@/content/beratung";
import {
  anfrageSchema,
  FELDNAMEN,
  HONEYPOT_FELD,
  type Feldname,
} from "@/lib/anfrage-schema";
import { sendeAnfrage } from "@/lib/mail";
import { rateLimitUeberschritten } from "@/lib/rate-limit";

export type FormularStatus = {
  status: "idle" | "erfolg" | "fehler";
  nachricht?: string;
  /** Fehler je Feld, wird unter dem jeweiligen Feld ausgegeben. */
  feldFehler?: Partial<Record<Feldname | "datenschutz", string>>;
  /** Eingaben, damit bei einem Fehler nichts verloren geht. */
  werte?: Partial<Record<Feldname, string>>;
};

function werteAusFormular(formData: FormData) {
  const werte: Partial<Record<Feldname, string>> = {};
  for (const feld of FELDNAMEN) {
    const wert = formData.get(feld);
    if (typeof wert === "string" && wert !== "") werte[feld] = wert;
  }
  return werte;
}

/** Erste IP aus x-forwarded-for, sonst ein neutraler Schlüssel. */
async function anfrageSchluessel(): Promise<string> {
  const kopfzeilen = await headers();
  const weitergeleitet = kopfzeilen.get("x-forwarded-for");
  if (weitergeleitet) return weitergeleitet.split(",")[0].trim();
  return kopfzeilen.get("x-real-ip") ?? "unbekannt";
}

export async function anfrageSendenAction(
  _vorher: FormularStatus,
  formData: FormData,
): Promise<FormularStatus> {
  const werte = werteAusFormular(formData);

  // Honeypot: gefüllt heißt Bot. Nach außen wie ein Erfolg, damit der Bot
  // nicht lernt, woran es lag. Es wird nichts verschickt.
  if (formData.get(HONEYPOT_FELD)) {
    return { status: "erfolg", nachricht: formular.erfolg };
  }

  if (rateLimitUeberschritten(await anfrageSchluessel())) {
    return { status: "fehler", nachricht: formular.fehlerRateLimit, werte };
  }

  const ergebnis = anfrageSchema.safeParse({
    name: formData.get("name") ?? "",
    betrieb: formData.get("betrieb") ?? "",
    rolle: formData.get("rolle") || undefined,
    email: formData.get("email") ?? "",
    telefon: formData.get("telefon") || undefined,
    nachricht: formData.get("nachricht") || undefined,
    datenschutz: formData.get("datenschutz") ?? "",
  });

  if (!ergebnis.success) {
    const feldFehler: NonNullable<FormularStatus["feldFehler"]> = {};
    for (const problem of ergebnis.error.issues) {
      const feld = problem.path[0];
      if (typeof feld === "string" && !(feld in feldFehler)) {
        feldFehler[feld as Feldname | "datenschutz"] = problem.message;
      }
    }
    return {
      status: "fehler",
      nachricht: formular.fehlerValidierung,
      feldFehler,
      werte,
    };
  }

  const versand = await sendeAnfrage(ergebnis.data);
  if (!versand.ok) {
    return { status: "fehler", nachricht: formular.fehlerAllgemein, werte };
  }

  return { status: "erfolg", nachricht: formular.erfolg };
}
