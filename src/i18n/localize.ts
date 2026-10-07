import {
  WALLET_LINK_METHODS,
  siteConfig,
  type PaymentMethod,
  type Platform,
} from "../data/platforms";
import { platformsMg, siteConfigMg, walletMethodsMg } from "../data/platforms.mg";
import { guides } from "../data/guides";
import type { PlatformGuide } from "../data/guides";
import { guidesMg } from "../data/guides/mg";
import type { Language } from "./types";

/**
 * Localisation des données de plateformes.
 * La langue par défaut est le français : hors `mg`, les objets d'origine
 * sont retournés tels quels (aucune copie).
 */
export function localizePlatform(platform: Platform, lang: Language): Platform {
  if (lang !== "mg") return platform;
  const patch = platformsMg[platform.id];
  return patch ? { ...platform, ...patch } : platform;
}

export function localizePlatforms(platforms: Platform[], lang: Language): Platform[] {
  return lang === "mg" ? platforms.map((p) => localizePlatform(p, lang)) : platforms;
}

export function localizeSiteConfig(lang: Language): typeof siteConfig {
  if (lang !== "mg") return siteConfig;
  return { ...siteConfig, ...siteConfigMg };
}

/**
 * Guide « À propos » dans la langue demandée : le guide malgache remplace le
 * guide français s'il existe, sinon on garde le français.
 */
export function getGuide(
  id: string | undefined,
  lang: Language
): PlatformGuide | undefined {
  if (!id) return undefined;
  if (lang === "mg") {
    const mgGuide = guidesMg[id];
    if (mgGuide) return mgGuide;
  }
  return guides[id];
}

export function localizeWalletMethods(lang: Language): PaymentMethod[] {
  if (lang !== "mg") return WALLET_LINK_METHODS;
  return WALLET_LINK_METHODS.map((m) => {
    const patch = walletMethodsMg[m.id];
    return patch ? { ...m, ...patch } : m;
  });
}
