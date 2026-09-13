"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";
import {
  anfrageSendenAction,
  type FormularStatus,
} from "@/app/kontakt/actions";
import { BUTTON_KLASSE } from "@/components/ui";
import { formular } from "@/content/kontakt";
import { HONEYPOT_FELD } from "@/lib/anfrage-schema";

const START: FormularStatus = { status: "idle" };

/*
  DESIGN.md sieht für Eingabefelder eine 1px-Unterkante in ash vor. ash erreicht
  auf surface aber nur 2,7:1 und liegt damit unter den 3:1, die WCAG 1.4.11 für
  die Begrenzung von Bedienelementen verlangt. Deshalb hier on-surface-variant.
  Hairlines zwischen Sektionen bleiben ash — die sind rein dekorativ.
*/
const FELD_BASIS =
  "w-full border-0 border-b border-on-surface-variant bg-transparent pt-2 pb-3 font-body text-body-lg text-on-surface outline-none focus:border-on-surface";

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block font-body text-label-caps uppercase text-on-surface-variant"
    >
      {children}
    </label>
  );
}

function Fehler({ id, text }: { id: string; text?: string }) {
  if (!text) return null;
  return (
    <p id={id} className="mt-2 font-body text-body-md text-error">
      {text}
    </p>
  );
}

export function AnfrageFormular() {
  const [status, action, laeuft] = useActionState(anfrageSendenAction, START);

  const felder = formular.felder;
  const fehler = status.feldFehler ?? {};
  const werte = status.werte ?? {};

  /*
    Sonderfall Select. React setzt das Formular nach jeder Action zurück.
    Text- und Textarea-Felder landen dabei auf ihrem aktuellen defaultValue,
    ein Select fällt jedoch auf die erste Option zurück, weil das
    selected-Attribut der Optionen nie mitgeschrieben wird. Der Effekt läuft
    nach dem Commit und setzt den zurückgegebenen Wert wieder ein.
  */
  const rolleRef = useRef<HTMLSelectElement>(null);
  useEffect(() => {
    if (rolleRef.current) rolleRef.current.value = status.werte?.rolle ?? "";
  }, [status]);

  // Nach einem Erfolg das Formular frisch aufbauen, damit die Felder leer sind.
  const formKey = status.status === "erfolg" ? "gesendet" : "offen";

  /*
    Die Meldung steht ueber dem Formular. Wer bis zum Absenden-Button
    gescrollt hat, sieht sie sonst nicht; Screenreader bekommen sie nur ueber
    role=status/alert, aber nicht den Fokus. Deshalb: Fokus auf die Meldung,
    die scrollt damit ins Bild.
  */
  const meldungRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (status.status !== "idle") meldungRef.current?.focus();
  }, [status]);

  return (
    <div>
      <h2 className="font-display text-headline-md">{formular.ueberschrift}</h2>
      <p className="mt-stack-sm max-w-[42ch] font-body text-body-md text-on-surface-variant">
        {formular.einleitung}
      </p>

      {status.status !== "idle" && status.nachricht && (
        <p
          ref={meldungRef}
          tabIndex={-1}
          role={status.status === "erfolg" ? "status" : "alert"}
          className={`mt-stack-md border-l-2 pl-gutter font-body text-body-lg outline-none ${
            status.status === "erfolg"
              ? "border-on-surface text-on-surface"
              : "border-error text-error"
          }`}
        >
          {status.nachricht}
        </p>
      )}

      <form key={formKey} action={action} noValidate className="mt-stack-lg">
        {/* Honeypot. Aus dem Blickfeld und aus der Tabreihenfolge genommen. */}
        <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
          <label htmlFor={HONEYPOT_FELD}>Webseite</label>
          <input
            id={HONEYPOT_FELD}
            name={HONEYPOT_FELD}
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="space-y-stack-lg">
          <div>
            <Label htmlFor="name">
              {felder.name.label}
              <span aria-hidden="true"> *</span>
            </Label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              maxLength={120}
              defaultValue={werte.name ?? ""}
              aria-invalid={fehler.name ? true : undefined}
              aria-describedby={fehler.name ? "name-fehler" : undefined}
              className={`mt-stack-sm ${FELD_BASIS}`}
            />
            <Fehler id="name-fehler" text={fehler.name} />
          </div>

          <div>
            <Label htmlFor="betrieb">
              {felder.betrieb.label}
              <span aria-hidden="true"> *</span>
            </Label>
            <input
              id="betrieb"
              name="betrieb"
              type="text"
              required
              autoComplete="organization"
              maxLength={120}
              defaultValue={werte.betrieb ?? ""}
              aria-invalid={fehler.betrieb ? true : undefined}
              aria-describedby={fehler.betrieb ? "betrieb-fehler" : undefined}
              className={`mt-stack-sm ${FELD_BASIS}`}
            />
            <Fehler id="betrieb-fehler" text={fehler.betrieb} />
          </div>

          <div>
            <Label htmlFor="rolle">{felder.rolle.label}</Label>
            <select
              ref={rolleRef}
              id="rolle"
              name="rolle"
              defaultValue={werte.rolle ?? ""}
              aria-invalid={fehler.rolle ? true : undefined}
              aria-describedby={fehler.rolle ? "rolle-fehler" : undefined}
              className={`mt-stack-sm appearance-none ${FELD_BASIS}`}
            >
              <option value="">Bitte wählen</option>
              {felder.rolle.optionen.map((option) => (
                <option key={option.wert} value={option.wert}>
                  {option.label}
                </option>
              ))}
            </select>
            <Fehler id="rolle-fehler" text={fehler.rolle} />
          </div>

          <div>
            <Label htmlFor="email">
              {felder.email.label}
              <span aria-hidden="true"> *</span>
            </Label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              maxLength={254}
              defaultValue={werte.email ?? ""}
              aria-invalid={fehler.email ? true : undefined}
              aria-describedby={fehler.email ? "email-fehler" : undefined}
              className={`mt-stack-sm ${FELD_BASIS}`}
            />
            <Fehler id="email-fehler" text={fehler.email} />
          </div>

          <div>
            <Label htmlFor="telefon">{felder.telefon.label}</Label>
            <input
              id="telefon"
              name="telefon"
              type="tel"
              autoComplete="tel"
              maxLength={50}
              defaultValue={werte.telefon ?? ""}
              aria-invalid={fehler.telefon ? true : undefined}
              aria-describedby={fehler.telefon ? "telefon-fehler" : undefined}
              className={`mt-stack-sm ${FELD_BASIS}`}
            />
            <Fehler id="telefon-fehler" text={fehler.telefon} />
          </div>

          <div>
            <Label htmlFor="nachricht">{felder.nachricht.label}</Label>
            <textarea
              id="nachricht"
              name="nachricht"
              rows={4}
              maxLength={4000}
              defaultValue={werte.nachricht ?? ""}
              aria-invalid={fehler.nachricht ? true : undefined}
              aria-describedby={fehler.nachricht ? "nachricht-fehler" : undefined}
              className={`mt-stack-sm resize-y ${FELD_BASIS}`}
            />
            <Fehler id="nachricht-fehler" text={fehler.nachricht} />
          </div>

          <div>
            {/*
              Die Checkbox war 16×16 px und damit klar unter den 24 px, die
              WCAG 2.5.8 verlangt — jetzt 24×24. Das eigentliche Ziel ist aber
              das Label: es gehört per htmlFor zur Checkbox, ist mehrzeilig und
              damit deutlich über 44 px hoch.
            */}
            <div className="flex items-start gap-stack-sm">
              <input
                id="datenschutz"
                name="datenschutz"
                type="checkbox"
                required
                aria-invalid={fehler.datenschutz ? true : undefined}
                aria-describedby={
                  fehler.datenschutz ? "datenschutz-fehler" : undefined
                }
                className="mt-0.5 h-6 w-6 shrink-0 accent-primary"
              />
              <label
                htmlFor="datenschutz"
                className="font-body text-body-md text-on-surface-variant"
              >
                {formular.datenschutz.textVor}
                <Link
                  href={formular.datenschutz.linkHref}
                  className="underline underline-offset-4"
                >
                  {formular.datenschutz.linkLabel}
                </Link>
                {formular.datenschutz.textNach}
                <span aria-hidden="true"> *</span>
              </label>
            </div>
            <Fehler id="datenschutz-fehler" text={fehler.datenschutz} />
          </div>
        </div>

        <p className="mt-stack-md font-body text-label-caps uppercase text-on-surface-variant">
          {formular.pflichtHinweis}
        </p>

        <button
          type="submit"
          disabled={laeuft}
          className={`mt-stack-md ${BUTTON_KLASSE} disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-primary`}
        >
          {laeuft ? formular.absendenLaeuft : formular.absenden}
        </button>
      </form>
    </div>
  );
}
