import type { MetadataRoute } from "next";

/**
 * Bis zum Launch komplett auf noindex. Vor dem Livegang entfernen
 * bzw. auf allow umstellen (siehe TODO.md).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", disallow: "/" }],
  };
}
