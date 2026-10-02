import type { PlatformGuide } from "./types";

/**
 * Guide Binance — sources officielles : binance.com (page Earn, centre de support,
 * article « Introduction to the Binance Referral Program », page d'achat de cryptos).
 */
export const binanceGuide: PlatformGuide = {
  whatIsIt:
    "Binance est une plateforme d'échange de cryptomonnaies : elle permet d'acheter, vendre et conserver des actifs numériques, d'utiliser des produits de placement (Binance Earn) et de participer à un programme de parrainage. Ce n'est pas une plateforme de micro-tâches : EarnZone la référence parce qu'elle est la destination de nombreux retraits de plateformes d'earning.",
  howItWorks:
    "Le parcours classique est le suivant : création du compte, vérification d'identité (KYC), activation de la double authentification, dépôt de fonds, puis utilisation de l'interface (marché spot, Earn, retrait). Les retraits se font vers un portefeuille externe (frais réseau) ou vers un compte bancaire / moyen de paiement local lorsque la région le permet. Le programme de parrainage permet d'inviter des proches et d'être rémunéré selon un rabais de commission ou une récompense unique.",
  callouts: [
    {
      tone: "warning",
      title: "Attention — le trading comporte des risques",
      text: "La valeur des cryptomonnaies peut monter comme descendre. Aucun rendement n'est garanti, y compris sur les produits Binance Earn. Ne placez que des montants que vous pouvez perdre et n'investissez pas l'argent dont vous avez besoin.",
    },
    {
      tone: "info",
      title: "Important — KYC et sécurité",
      text: "La vérification d'identité est nécessaire pour débloquer pleinement les fonctions, et l'activation de la 2FA est fortement recommandée. Ne partagez jamais vos clés, codes ou phrases de récupération.",
    },
  ],
  features: [
    { title: "Marché spot", description: "Achat et vente de nombreuses cryptos sur le marché spot." },
    { title: "Binance Earn", description: "Produits de placement (flexibles et bloqués) pour faire travailler des crypto dormantes." },
    { title: "Staking", description: "Mise en jeu de jetons compatibles pour obtenir des récompenses selon les conditions du produit." },
    { title: "Retraits et dépôts", description: "Dépôts et retraits crypto avec frais réseau, plus des options locales selon les régions." },
    { title: "Programme de parrainage", description: "Inviter des amis pour obtenir un rabais de commission ou une récompense unique, selon les conditions du programme." },
    { title: "Compte et_mobile app", description: "Gestion complète depuis le web ou l'application mobile." },
  ],
  profileSetup: [
    {
      step: 1,
      title: "Activer la double authentification (2FA)",
      description:
        "C'est la mesure de sécurité la plus recommandée sur un compte qui détient des actifs.",
      tips: ["Conservez les codes de récupération hors ligne."],
    },
    {
      step: 2,
      title: "Terminer la vérification d'identité",
      description:
        "Le KYC conditionne l'accès à de nombreuses fonctionnalités (retraits, volumes, services).",
    },
    {
      step: 3,
      title: "Vérifier la whitelist d'adresses",
      description:
        "Comme sur la plupart des plateformes crypto, une liste d'adresses autorisées protège vos retraits.",
    },
  ],
  dashboard: [
    { title: "Spot", description: "Le marché d'achat et de vente." },
    { title: "Earn", description: "Les produits de placement et leurs conditions." },
    { title: "Wallet", description: "Vos soldes par devise et l'historique." },
    { title: "Retrait / Dépôt", description: "Réseaux, frais et minimums affichés par actif." },
    { title: "Referral", description: "Votre lien de parrainage et vos récompenses." },
  ],
  earningMethods: [
    {
      title: "Binance Earn (produits de placement)",
      description:
        "Le site Earn présente une gamme de produits conçus pour faire grandir vos crypto dormantes. Les rendements dépendent du produit et ne sont jamais garantis.",
      steps: [
        { title: "Ouvrir la page Earn", description: "Les produits disponibles (flexibles, bloqués) sont listés avec leurs conditions." },
        { title: "Lire les conditions du produit", description: "Durée, verrouillage et rendement annoncé : lisez avant de valider." },
        { title: "Placer une petite somme", description: "Commencez par un montant modeste pour comprendre le fonctionnement." },
        { title: "Suivre vos récompenses", description: "Les récompenses s'ajoutent selon la fréquence indiquée par le produit." },
      ],
    },
    {
      title: "Parrainage",
      description:
        "Le centre de support présente le programme comme suit : inviter des amis pour obtenir soit un rabais sur les commissions, soit une récompense unique. Les conditions (montants, durée, éligibilité) sont précisées sur la page officielle du programme.",
    },
    {
      title: "Achat de cryptos (entrée dans l'écosystème)",
      description:
        "La page officielle « how to buy » détaille les moyens de funding (carte, virement, P2P, Convert et Spot selon les régions). C'est souvent la porte d'entrée quand on reçoit ses premiers gains.",
    },
  ],
  registrationSteps: [
    { step: 1, title: "Ouvrir Binance", description: "Passez par « Commencer à gagner » : vous arrivez sur binance.com." },
    { step: 2, title: "Créer le compte", description: "Inscription par email ou téléphone, puis mot de passe fort." },
    { step: 3, title: "Activer la 2FA", description: "Priorité absolue avant tout dépôt." },
    { step: 4, title: "Passer la vérification d'identité (KYC)", description: "Obligatoire pour débloquer les fonctions principales." },
    { step: 5, title: "Déposer un petit montant", description: "Testez d'abord le parcours de dépôt et de retrait avec de petites sommes." },
  ],
  earningGuide: [
    { step: 1, title: "Étape 1 — Compte", description: "Email ou téléphone + mot de passe." },
    { step: 2, title: "Étape 2 — Sécurité", description: "2FA, codes de récupération, liste blanche d'adresses." },
    { step: 3, title: "Étape 3 — KYC", description: "La vérification d'identité conditionne l'accès aux fonctions." },
    { step: 4, title: "Étape 4 — Premier dépôt", description: "Carte, virement, P2P ou crypto selon votre région ; vérifiez le réseau." },
    { step: 5, title: "Étape 5 — Explorer Spot et Earn", description: "Le trading et le placement sont deux usages différents : ne les confondez pas." },
    { step: 6, title: "Étape 6 — Retirer", description: "Frais réseau par actif, minimums affichés avant validation." },
    { step: 7, title: "Étape 7 — Inviter", description: "Le programme de parrainage récompense l'invitation de nouveaux utilisateurs éligibles." },
  ],
  refusedReasons: [
    "KYC non terminé : de nombreuses fonctions restent bloquées.",
    "Réseau ou adresse de retrait erroné : les fonds peuvent être perdus.",
    "Compte suspendu après contrôle de conformité : cela arrive indépendamment de votre activité.",
  ],
  withdrawal: {
    description:
      "Les retraits crypto sont soumis aux frais réseau de l'actif et du réseau choisi ; les minimums et frais exacts sont affichés à l'écran avant chaque validation. Selon votre région, des options fiat (virement bancaire, P2P) peuvent être proposées par des partenaires de paiement. Vérifiez toujours le réseau : un transfert sur le mauvais réseau est irréversible.",
    steps: [
      { title: "Ouvrir la section Retrait", description: "Depuis le portefeuille." },
      { title: "Choisir l'actif et le réseau", description: "Le réseau conditionne le montant des frais." },
      { title: "Vérifier le minimum et les frais", description: "Affichés avant validation." },
      { title: "Saisir l'adresse", description: "Adresse de portefeuille externe, vérifiée deux fois." },
      { title: "Confirmer avec la 2FA", description: "La double authentification s'applique au retrait." },
    ],
    methods: ["Retrait crypto vers portefeuille externe", "Options fiat locales (virement bancaire, P2P) selon la région"],
    minimum: "Variable par actif et par réseau — affiché avant validation",
    processingTime: "Variable selon le réseau choisi",
  },
  conditions: [
    "Le trading de cryptomonnaies comporte un risque de perte en capital.",
    "Aucun rendement n'est garanti, y compris sur les produits Earn.",
    "La vérification d'identité (KYC) est nécessaire pour accéder pleinement aux services.",
    "Activez la 2FA et ne partagez jamais vos identifiants ni vos phrases de récupération.",
    "Les services et их disponibilité varient selon les pays.",
  ],
  mistakes: [
    { title: "Confondre trading et Earn", text: "Le trading expose à des pertes rapides ; Earn est un placement dont le rendement reste variable. Lisez la nature de chaque produit." },
    { title: "Déposer gros avant de tester", text: "Testez le parcours complet (dépôt, achat, retrait) avec de petites sommes." },
    { title: "Oublier la 2FA", text: "Un compte non protégé est un compte volable." },
    { title: "Choisir le mauvais réseau", text: "C'est l'erreur la plus coûteuse : vérifiez réseau et adresse avant de confirmer." },
  ],
  tips: [
    "Activez la 2FA et la liste blanche d'adresses avant le premier dépôt.",
    "Commencez par de petits montants pour comprendre l'interface et les frais.",
    "Lisez les conditions de chaque produit Earn avant de placer des fonds.",
    "Si vous recevez vos premiers gains sur une autre plateforme, transitez par des porte d'entrée peu coûteuses (micro-portefeuilles) avant de choisir un exchange.",
    "Gardez une trace de vos dépôts et retraits pour suivre vos frais réels.",
  ],
  referral: {
    description:
      "Binance présente un programme de parrainage : les utilisateurs existants peuvent être rémunérés quand ils invitent des amis à rejoindre la plateforme et à trader. Selon la page de support, la récompense peut prendre la forme d'un rabais de commission ou d'une récompense unique. Les conditions précises (montants, durée, éligibilité) sont indiquées sur la page officielle du programme et évoluent.",
  },
  faq: [
    { question: "Binance est-il une plateforme de micro-tâches ?", answer: "Non : Binance est un exchange (achat, vente, placement de cryptos). EarnZone la référence comme destination de paiement de nombreuses plateformes d'earning." },
    { question: "Faut-il vérifier son identité ?", answer: "Oui : la vérification d'identité (KYC) est nécessaire pour débloquer pleinement les fonctions, dont les retraits." },
    { question: "Les rendements Binance Earn sont-ils garantis ?", answer: "Non : les rendements affichés sont variables et dépendent du produit. Lisez les conditions de chaque produit." },
    { question: "Comment obtenir mes premiers cryptos ?", answer: "Par achat (carte, virement, P2P ou crypto selon la région) ou par transfert depuis une autre plateforme / un micro-portefeuille." },
    { question: "Quels sont les frais de retrait ?", answer: "Ils correspondent aux frais réseau de la crypto et du réseau choisi : ils sont affichés avant validation." },
    { question: "Comment fonctionne le parrainage ?", answer: "En invitant des amis : la récompense peut être un rabais de commission ou une récompense unique, selon les conditions du programme." },
    { question: "Puis-je l'utiliser sur mobile ?", answer: "Oui : Binance propose une application mobile qui permet de gérer le compte, les ordres et les retraits." },
  ],
  docCoverage: "partial",
  officialSources: [
    { title: "Binance Earn (produits de placement)", url: "https://www.binance.com/en/earn" },
    { title: "Introduction to the Binance Referral Program", url: "https://www.binance.com/en/support/faq/detail/d10f95a5ac8847bdb6f422a26921745d" },
    { title: "Comment acheter des cryptos (moyens de funding)", url: "https://www.binance.com/en/how-to-buy/all-coins" },
  ],
  lastVerified: "2026-10-02",
};