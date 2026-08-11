import type { Metadata } from "next";
import { RechtSeite } from "@/components/recht-seite";
import { impressum } from "@/content/recht";

export const metadata: Metadata = {
  title: impressum.meta.titel,
  description: impressum.meta.beschreibung,
};

export default function ImpressumPage() {
  return <RechtSeite text={impressum} />;
}
