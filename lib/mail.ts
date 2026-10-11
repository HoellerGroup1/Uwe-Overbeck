import { formular } from "@/content/kontakt";
import type { Anfrage } from "@/lib/anfrage-schema";

type Versandergebnis = { ok: true } | { ok: false; grund: "konfiguration" | "versand" };

function rolleLabel(rolle: Anfrage["rolle"]): string {
  const treffer = formular.felder.rolle.optionen.find((o) => o.wert === rolle);
  return treffer?.label ?? "keine Angabe";
}

/**
 * Versand über Formspree. Formspree stellt die Anfrage als E-Mail an die
 * Adresse zu, die im Formspree-Konto als Empfänger hinterlegt ist
 * (uwe@overbeck-berufsmode.at). Antworten gehen per Reply-To direkt an die
 * anfragende Person, Uwe drückt in seinem Postfach einfach auf "Antworten".
 *
 * Gebraucht wird nur eine Umgebungsvariable: FORMSPREE_FORM_ID (der Teil
 * nach /f/ in der Formspree-URL). Kein DNS, kein API-Key.
 *
 * Der Aufruf läuft vom Server aus, der Browser spricht nie mit Formspree.
 * Die Content-Security-Policy bleibt deshalb unverändert.
 *
 * Fehlt die Konfiguration, wird nichts verschickt und nichts protokolliert,
 * was personenbezogen wäre. Das Formular meldet dann einen Fehler, statt
 * einen Versand vorzutäuschen.
 */
export async function sendeAnfrage(anfrage: Anfrage): Promise<Versandergebnis> {
  const formId = process.env.FORMSPREE_FORM_ID?.trim();

  if (!formId) {
    console.warn("[kontakt] Anfrage nicht versendet: FORMSPREE_FORM_ID fehlt.");
    return { ok: false, grund: "konfiguration" };
  }

  // Die Schlüssel erscheinen in Uwes Mail als Feldnamen, deshalb deutsch.
  // `email` und `_replyto` setzen bei Formspree die Antwortadresse,
  // `_subject` den Betreff.
  const daten = {
    _subject: `Anfrage über die Website: ${anfrage.betrieb}`,
    Name: anfrage.name,
    Betrieb: anfrage.betrieb,
    Bereich: rolleLabel(anfrage.rolle),
    email: anfrage.email,
    _replyto: anfrage.email,
    Telefon: anfrage.telefon || "keine Angabe",
    Nachricht: anfrage.nachricht || "keine Nachricht",
  };

  try {
    const antwort = await fetch(`https://formspree.io/f/${encodeURIComponent(formId)}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(daten),
      cache: "no-store",
    });

    if (!antwort.ok) {
      // Nur der Statuscode, keine Formulardaten im Log.
      console.error("[kontakt] Formspree meldet Status", antwort.status);
      return { ok: false, grund: "versand" };
    }

    return { ok: true };
  } catch {
    console.error("[kontakt] Versand an Formspree fehlgeschlagen.");
    return { ok: false, grund: "versand" };
  }
}
