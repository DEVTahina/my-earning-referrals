/**
 * Service Google Analytics 4 (gtag.js) — couche analytics centralisée.
 *
 * - Aucune dépendance npm supplémentaire (gtag.js injecté à la demande).
 * - Le Measurement ID provient UNIQUEMENT de `import.meta.env.VITE_GA_MEASUREMENT_ID`
 *   (jamais hardcodé ici, jamais commité).
 * - Si la variable n'est pas définie, toutes les fonctions deviennent des no-op :
 *   l'application fonctionne normalement, sans crash ni écran blanc.
 * - Aucune donnée personnelle n'est envoyée (ni email, ni nom, ni IP applicative).
 */

const MEASUREMENT_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID ?? "").trim();

/** Cible minimale acceptée par le tracking (Platform, PaymentMethod…). */
export interface TrackableTarget {
  id: string;
  name: string;
  category: string;
}

/** Emplacements des CTA trackés (paramètre `cta_location`). */
export type CtaLocation =
  | "platform_card"
  | "mobile_app_card"
  | "platform_details"
  | "payment_methods_modal";

type GtagValue = string | number | boolean | undefined | null;
type GtagParams = Record<string, GtagValue>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** true si un Measurement ID valide est configuré. */
export const isAnalyticsEnabled = (): boolean => MEASUREMENT_ID.length > 0;

/** true en développement (pour les logs de debug). */
const isDev = (): boolean => Boolean(import.meta.env.DEV);

const debug = (message: string, payload?: GtagParams) => {
  if (!isDev()) return;
  if (payload) console.debug(`[analytics] ${message}`, payload);
  else console.debug(`[analytics] ${message}`);
};

/** Lecture de l'URL courante (jamais de paramètres advertising socioscrupuleux ajoutés). */
function currentUrl(): string {
  if (typeof window === "undefined") return "";
  return `${window.location.origin}${window.location.pathname}${window.location.search}`;
}

/**
 * Initialise gtag.js une seule fois.
 * - `send_page_view: false` : les page_view sont envoyés manuellement par
 *   `trackPageView()` (SPA) afin de ne jamais compter deux fois une navigation.
 * - `anonymize_ip: true` : aucune IP n'est transmise.
 */
export function initAnalytics(): void {
  if (typeof window === "undefined") return;

  if (!isAnalyticsEnabled()) {
    debug("VITE_GA_MEASUREMENT_ID non défini — analytics désactivé.");
    return;
  }

  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  }

  const gtag = window.gtag;

  if (!document.getElementById("ga4-script")) {
    const script = document.createElement("script");
    script.id = "ga4-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
      MEASUREMENT_ID
    )}`;
    document.head.appendChild(script);
  }

  gtag("js", new Date());
  gtag("config", MEASUREMENT_ID, {
    send_page_view: false,
    anonymize_ip: true,
  });

  debug("GA4 initialisé", { measurement_id: MEASUREMENT_ID });
}

/** Envoie un page_view (SPA). Appelé à chaque changement de route. */
export function trackPageView(path: string): void {
  if (!isAnalyticsEnabled() || !window.gtag) return;

  const pagePath = path || window.location.pathname;
  window.gtag("event", "page_view", {
    page_path: pagePath,
    page_location: currentUrl(),
    page_title: document.title,
    page_referrer: document.referrer || undefined,
  });

  debug("page_view", { page_path: pagePath, page_title: document.title });
}

/**
 * Événement clé du projet : un clic vers un lien referral.
 * Le lien lui-même n'est jamais modifié — seul le clic est mesuré.
 */
export function trackReferralClick(
  target: TrackableTarget,
  ctaLocation: CtaLocation,
  url?: string | null
): void {
  const params: GtagParams = {
    platform_id: target.id,
    platform_name: target.name,
    category: target.category,
    cta_location: ctaLocation,
    link_url: url ?? undefined,
  };

  if (!isAnalyticsEnabled() || !window.gtag) {
    debug("referral_click (analytics désactivé)", params);
    return;
  }

  window.gtag("event", "referral_click", params);
  debug("referral_click", params);
}

/** Clic vers un wallet referral (FaucetPay, Binance) depuis le modal de paiement. */
export function trackWalletClick(
  method: { id: string; name: string },
  ctaLocation: CtaLocation,
  url?: string | null
): void {
  trackReferralClick(
    { id: method.id, name: method.name, category: "wallet" },
    ctaLocation,
    url
  );
}
