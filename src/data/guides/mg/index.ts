import type { Guides } from "../types";

/**
 * Guides traduits en malgache, indexés par l'id de plateforme.
 * Un guide absent = repli automatique sur la version française
 * (`getGuide(id, lang)` dans `src/i18n/localize.ts`).
 */
export const guidesMg: Guides = {};

export default guidesMg;
