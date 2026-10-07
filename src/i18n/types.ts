/** Langues supportées par le site. Le français est la langue par défaut. */
export type Language = "fr" | "mg";

export const DEFAULT_LANGUAGE: Language = "fr";

/** Liste affichée dans le sélecteur de langue. */
export const LANGUAGES: { code: Language; label: string; short: string }[] = [
  { code: "fr", label: "Français", short: "FR" },
  { code: "mg", label: "Malagasy", short: "MG" },
];

/** Identifiant HTML correspondant (attribut <html lang>). */
export const HTML_LANG: Record<Language, string> = { fr: "fr", mg: "mg" };

/** Locale utilisée pour les dates (avec repli sûr sur le français). */
export const LOCALE: Record<Language, string> = { fr: "fr-FR", mg: "mg-MG" };

/** Formatte une date ISO (AAAA-MM-JJ) dans la langue courante. */
export function formatDateLocalized(iso: string, lang: Language): string {
  const date = new Date(`${iso}T00:00:00`);
  try {
    return date.toLocaleDateString(LOCALE[lang], {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return date.toLocaleDateString(LOCALE.fr, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
}
