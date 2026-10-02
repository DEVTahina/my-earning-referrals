export interface GuideSource {
  title: string;
  url: string;
}

export interface GuideSubStep {
  title: string;
  description: string;
}

export interface GuideBlock {
  title: string;
  description: string;
  /** Sous-étapes détaillées (facultatif). */
  steps?: GuideSubStep[];
}

export interface GuideStep {
  step: number;
  title: string;
  description: string;
  /** Conseils courts attaches à l'étape. */
  tips?: string[];
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface GuideMistake {
  title: string;
  text: string;
}

/** Ton d'un encart : info (important), tip (conseil), warning (attention). */
export type CalloutTone = "info" | "tip" | "warning";

export interface GuideCallout {
  tone: CalloutTone;
  title: string;
  text: string;
}

export interface GuideWithdrawal {
  description: string;
  steps?: GuideSubStep[];
  methods?: string[];
  minimum?: string;
  processingTime?: string;
}

/**
 * Contenu riche d'un guide de plateforme.
 * Tous les blocs optionnels ne sont rendus que s'ils sont renseignés :
 * le sommaire de la page est construit dynamiquement à partir du contenu réel.
 */
export interface PlatformGuide {
  /** 1. Présentation : qu'est-ce que cette plateforme ? */
  whatIsIt: string;
  /** 2. Fonctionnement général. */
  howItWorks: string;
  /** Fonctionnalités / points forts documentés. */
  features: GuideBlock[];
  /** Encarts Important / Conseil / Attention. */
  callouts?: GuideCallout[];
  /** 4. Configurer son profil. */
  profileSetup?: GuideStep[];
  /** 5. Découvrir le tableau de bord (sections réelles). */
  dashboard?: GuideBlock[];
  /** 6. Méthodes pour gagner (une entrée par méthode réelle). */
  earningMethods: GuideBlock[];
  /** 3. Inscription détaillée. */
  registrationSteps: GuideStep[];
  /** 7. Guide complet A → Z. */
  earningGuide: GuideStep[];
  /** Pourquoi une tâche peut-elle être refusée ? */
  refusedReasons?: string[];
  /** 8. Retrait. */
  withdrawal: GuideWithdrawal;
  /** Règles importantes / conditions d'utilisation. */
  conditions?: string[];
  /** Erreurs à éviter. */
  mistakes?: GuideMistake[];
  /** Comment gagner plus (sans promesse de gain). */
  tips?: string[];
  /** Programme de referral officiel. */
  referral?: { description: string };
  /** FAQ spécifique. */
  faq?: GuideFaq[];
  /** "partial" = documentation officielle limitée (guide volontairement prudent). */
  docCoverage?: "full" | "partial";
  /** Sources officielles utilisées pour rédiger le guide (non affichées sur le site). */
  officialSources: GuideSource[];
  /** Date de vérification au format ISO. */
  lastVerified?: string;
}

export type Guides = Record<string, PlatformGuide>;

/** Date de vérification de l'ensemble des guides. */
export const GUIDES_LAST_VERIFIED = "2026-10-02";