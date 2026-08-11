import type { Metadata } from "next";
import { RechtSeite } from "@/components/recht-seite";
import { datenschutz } from "@/content/recht";

export const metadata: Metadata = {
  title: datenschutz.meta.titel,
  description: datenschutz.meta.beschreibung,
};

export default function DatenschutzPage() {
  return <RechtSeite text={datenschutz} />;
}
