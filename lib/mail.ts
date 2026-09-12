import { Resend } from "resend";
import { formular } from "@/content/kontakt";
import type { Anfrage } from "@/lib/anfrage-schema";

type Versandergebnis = { ok: true } | { ok: false; grund: "konfiguration" | "versand" };

function rolleLabel(rolle: Anfrage["rolle"]): string {
  const treffer = formular.felder.rolle.optionen.find((o) => o.wert === rolle);
  return treffer?.label ?? "keine Angabe";
}

function alsText(anfrage: Anfrage): string {
  return [
    `Name:      ${anfrage.name}`,
    `Betrieb:   ${anfrage.betrieb}`,
    `Rolle:     ${rolleLabel(anfrage.rolle)}`,
    `E-Mail:    ${anfrage.email}`,
    `Telefon:   ${anfrage.telefon || "keine Angabe"}`,
    "",
    "Nachricht:",
    anfrage.nachricht || "keine Nachricht",
  ].join("\n");
}

/**
 * Versand über Resend. Empfänger und Absender kommen aus der Umgebung,
 * es liegen keine Keys im Repo.
 *
 * Fehlt die Konfiguration, wird nichts verschickt und nichts protokolliert,
 * was personenbezogen wäre. Das Formular meldet dann einen Fehler, statt
 * einen Versand vorzutäuschen.
 */
export async function sendeAnfrage(anfrage: Anfrage): Promise<Versandergebnis> {
  const apiKey = process.env.RESEND_API_KEY;
  const absender = process.env.KONTAKT_ABSENDER;
  const empfaenger = process.env.KONTAKT_EMPFAENGER;

  if (!apiKey || !absender || !empfaenger) {
    console.warn(
      "[beratung] Anfrage nicht versendet: RESEND_API_KEY, KONTAKT_ABSENDER oder KONTAKT_EMPFAENGER fehlt.",
    );
    return { ok: false, grund: "konfiguration" };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: absender,
      to: empfaenger,
      replyTo: anfrage.email,
      subject: `Beratungsanfrage: ${anfrage.betrieb}`,
      text: alsText(anfrage),
    });

    if (error) {
      console.error("[beratung] Resend meldet einen Fehler:", error.name);
      return { ok: false, grund: "versand" };
    }

    return { ok: true };
  } catch {
    console.error("[beratung] Versand fehlgeschlagen.");
    return { ok: false, grund: "versand" };
  }
}
