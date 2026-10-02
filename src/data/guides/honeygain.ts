import type { PlatformGuide } from "./types";

/**
 * Guide Honeygain — sources officielles : honeygain.com/features,
 * honeygain.com/honeygain-payout, support.honeygain.com
 */
export const honeygainGuide: PlatformGuide = {
  whatIsIt:
    "Honeygain est un service de revenus passifs : vous partagez la bande passante inutilisée de votre connexion internet. Des entreprises partenaires utilisent ce trafic pour des usages légitimes (statistiques web, delivery de contenu, vérification publicitaire, études de marché). Vous êtes crédité en points, convertis en argent, et vous n'avez rien à faire une fois l'application lancée.",
  howItWorks:
    "Le principe est simple : l'application s'exécute en arrière-plan sur votre appareil, elle n'utilise qu'une petite part de votre bande passante inutilisée, et vous gagnez des crédits pour chaque mégaoctet partagé. Le site rappelle que vos données personnelles ne sont ni accédées ni stockées, que le trafic est chiffré, et que vous pouvez définir des limites de trafic quotidien ou mettre l'application en pause à tout moment.",
  callouts: [
    {
      tone: "info",
      title: "Important — le trafic dépend de la demande",
      text: "Le site explique que vos gains dépendent de la demande réseau dans votre région, du temps de connexion et du nombre d'appareils. Aucun montant n'est garanti, et la région est « la clé » pour débloquer vos revenus.",
    },
    {
      tone: "tip",
      title: "Conseil — plusieurs appareils, plusieurs réseaux",
      text: "Le site indique que connecter plusieurs appareils actifs sur des réseaux différents aide à accumuler plus vite. En pratique, une machine branchée en permanence sur une connexion illimitée est la base.",
    },
    {
      tone: "warning",
      title: "Attention — les gains passifs sont lents",
      text: "Le seuil de retrait documenté est de 20 $ (20 000 crédits). Pour des petits montants, c'est le principal frein : c'est un complément de revenu, pas un revenu principal.",
    },
  ],
  features: [
    { title: "Partage de bande passante", description: "Le cœur du service : votre connexion inutilisée alimente des requêtes chiffrées de partenaires." },
    { title: "Multi-appareils", description: "Windows, macOS, Android et Linux : plusieurs appareils peuvent contribuer simultanément." },
    { title: "Crédits automatiques", description: "10 000 crédits = 10 $ ; 20 000 crédits = 20 $ (seuil de retrait)." },
    { title: "Limites de trafic quotidiennes", description: "Vous fixez vous-même la limite dans l'application, et pouvez la mettre en pause à tout moment." },
    { title: "PayPal et JumpTask", description: "Paiement direct en USD sur PayPal, ou transfert vers JumpTask pour obtenir des cartes cadeaux et des cryptos." },
    { title: "Confidentialité", description: "Trafic chiffré, données personnelles jamais accédées ni stockées, pratiques conformes au RGPD." },
  ],
  dashboard: [
    { title: "Crédits / Balance", description: "Vos crédits accumulés et leur conversion en dollars." },
    { title: "Payout", description: "Le bouton de demande de payout s'active à 20 000 crédits (20 $)." },
    { title: "Appareils", description: "Les appareils connectés à votre compte." },
    { title: "Paramètres de trafic", description: "Limites quotidiennes et pause de l'application." },
  ],
  earningMethods: [
    {
      title: "Partage de bande passante",
      description: "La méthode principale : plus votre connexion est stable et longue, plus vous gagnez.",
      steps: [
        { title: "Installer l'application", description: "Sur mobile, ordinateur ou tablette ; l'installation prend une minute." },
        { title: "Rester connecté", description: "L'application tourne discrètement en arrière-plan." },
        { title: "Partager votre bande passante inutilisée", description: "Le trafic transite par un réseau chiffré, sans accès à vos données." },
        { title: "Accumuler des crédits", description: "Vous gagnez des crédits pour chaque mégaoctet partagé." },
        { title: "Retirer au seuil", description: "Une fois 20 000 crédits atteints, le bouton de payout apparaît." },
      ],
    },
    {
      title: "Multiplier les appareils",
      description:
        "Le site indique que plusieurs appareils actifs (sur des réseaux différents) permettent d'accumuler plus rapidement.",
    },
    {
      title: "Référencement (referrals)",
      description:
        "Le centre de support Honeygain propose une catégorie « Earnings » qui mentionne les referrals et le Lucky Pot : vérifiez les conditions en cours dans votre espace.",
    },
  ],
  registrationSteps: [
    { step: 1, title: "Ouvrir Honeygain", description: "Passez par « Commencer à gagner » : vous arrivez sur honeygain.com." },
    { step: 2, title: "Créer le compte", description: "Inscription avec votre email." },
    { step: 3, title: "Installer l'application", description: "Windows, macOS, Android ou Linux — l'installation prend environ une minute." },
    { step: 4, title: "Laisser tourner", description: "L'application partage votre bande passante inutilisée en arrière-plan." },
    { step: 5, title: "Vérifier les appareils", description: "Chaque appareil connecté peut être suivi depuis votre tableau de bord." },
  ],
  earningGuide: [
    { step: 1, title: "Étape 1 — Inscription", description: "Compte créé avec votre email." },
    { step: 2, title: "Étape 2 — Installation", description: "Installez l'application sur un appareil branché en permanence." },
    { step: 3, title: "Étape 3 — Connexion stable", description: "Une connexion illimitée et stable maximise les crédits." },
    { step: 4, title: "Étape 4 — Régler vos limites", description: "Vous pouvez définir un plafond de trafic quotidien ou mettre en pause à tout moment." },
    { step: 5, title: "Étape 5 — Ajouter des appareils", description: "Plusieurs appareils sur des réseaux différents accélèrent l'accumulation." },
    { step: 6, title: "Étape 6 — Suivre les crédits", description: "Le tableau de bord affiche l'accumulation et la valeur en dollars." },
    { step: 7, title: "Étape 7 — Atteindre le seuil", description: "20 000 crédits, soit 20 $." },
    { step: 8, title: "Étape 8 — Demander le payout", description: "Choisissez PayPal ou JumpTask, puis envoyez la demande." },
    { step: 9, title: "Étape 9 — Recevoir", description: "Les versements sont généralement traités sous 2 à 3 jours ouvrés." },
  ],
  refusedReasons: [
    "Connexion instable ou appareil éteint : les crédits ne s'accumulent que pendant que l'application tourne.",
    "VPN : le centre de support signale des « VPN conflicts » dans ses guides de dépannage — un VPN peut empêcher l'accumulation.",
    "Trafic partagé sur un réseau d'entreprise ou public : l'usage peut être interdit par la politique de votre réseau.",
    "Frais de monétisation : PayPal peut appliquer une petite commission de transaction, même si Honeygain ne facture rien.",
  ],
  withdrawal: {
    description:
      "Le seuil de retrait documenté est de 20 $ (20 000 crédits). Deux méthodes sont proposées : un paiement direct sur votre compte PayPal vérifié, en USD, ou l'envoi de vos gains vers JumpTask, qui permet ensuite de récupérer des cartes cadeaux (des milliers) ou des cryptomonnaies. Vous pouvez changer de méthode à tout moment dans les paramètres, avant de demander un payout. Honeygain ne facture pas de frais supplémentaires, mais PayPal peut appliquer une petite commission.",
    steps: [
      { title: "Atteindre 20 000 crédits", description: "20 000 crédits = 20 $ : c'est le seuil minimum de payout." },
      { title: "Choisir la méthode", description: "PayPal (USD direct) ou JumpTask (cartes cadeaux / crypto)." },
      { title: "Demander le payout", description: "Le bouton « Request payout » devient disponible dans votre tableau de bord." },
      { title: "Changer de méthode si besoin", description: "Possible à tout moment dans les paramètres du compte, avant la demande." },
      { title: "Recevoir les fonds", description: "Traitement généralement sous 2 à 3 jours ouvrés, avec un email de confirmation." },
    ],
    methods: ["PayPal (USD)", "JumpTask (JMPT) : cartes cadeaux et cryptomonnaies"],
    minimum: "20 $ (20 000 crédits)",
    processingTime: "Généralement 2 à 3 jours ouvrés",
  },
  conditions: [
    "Le partage porte sur la bande passante inutilisée : vos fichiers, messages et historique de navigation ne sont pas accédés.",
    "Le trafic est chiffré et l'entreprise indique ne pas accéder aux données personnelles.",
    "Vous pouvez définir des limites de trafic et mettre l'application en pause à tout moment.",
    "Les gains dépendent de la demande réseau dans votre région et ne sont pas garantis.",
    "Un VPN peut empêcher l'accumulation (le centre de support mentionne les conflits VPN).",
  ],
  mistakes: [
    { title: "Utiliser un VPN", text: "Le centre de support mentionne explicitement les conflits VPN dans ses guides de dépannage." },
    { title: "Utiliser une connexion limitée", text: "Le trafic partagé consomme de votre forfait : une connexion illimitée est préférable." },
    { title: "Oublier de laisser l'application tourner", text: "Les crédits ne s'accumulent que lorsque l'application est active." },
    { title: "Attendre des gains rapides", text: "20 $ de seuil avec des revenus passifs : la régularité compte plus que l'urgence." },
    { title: "Partager sur un réseau professionnel", text: "Le partage de bande passante peut être interdit par la politique de votre employeur ou de votre réseau d'entreprise." },
  ],
  tips: [
    "Laissez l'application tourner sur un appareil toujours branché : c'est ce qui fait la différence.",
    "Ajoutez plusieurs appareils sur des réseaux différents pour accélérer.",
    "Réglez une limite de trafic quotidienne si votre connexion est limitée.",
    "Choisissez PayPal si vous voulez du cash simple ; JumpTask si vous préférez des cartes cadeaux ou des cryptos.",
    "Vous pouvez changer de méthode de paiement à tout moment avant une demande.",
  ],
  faq: [
    { question: "Est-ce que ça ralentit ma connexion ?", answer: "L'application n'utilise que la bande passante inutilisée et ne fonctionne pas lorsque votre connexion est active en permanence. La plupart des utilisateurs ne constatent aucune différence, mais cela dépend de votre débit." },
    { question: "Combien puis-je gagner ?", answer: "Cela dépend de la demande réseau dans votre région, du temps de connexion et du nombre d'appareils. Aucun montant n'est garanti." },
    { question: "Quel est le seuil minimum de retrait ?", answer: "20 $, soit 20 000 crédits. Ce seuil existe pour assurer des transactions fluides et limiter la fraude." },
    { question: "Mes données personnelles sont-elles partagées ?", answer: "Non : le partage porte sur la bande passante inutilisée, via un réseau chiffré. L'entreprise indique ne jamais accéder à vos données personnelles." },
    { question: "Puis-je recevoir des cryptos ?", answer: "Oui : en envoyant vos gains vers JumpTask, vous pouvez ensuite les retirer en cryptos ou en cartes cadeaux." },
    { question: "Puis-je contrôler le trafic partagé ?", answer: "Oui : vous pouvez définir une limite quotidienne dans l'application et la mettre en pause à tout moment." },
    { question: "Sur quels appareils fonctionne Honeygain ?", answer: "Windows, macOS, Android et Linux. Vous pouvez connecter plusieurs appareils simultanément." },
    { question: "Combien de temps pour être payé ?", answer: "Les versements sont généralement traités sous 2 à 3 jours ouvrés après la demande." },
  ],
  docCoverage: "full",
  officialSources: [
    { title: "How Does Honeygain Work ? (fonctionnement et appareils)", url: "https://www.honeygain.com/features/" },
    { title: "How Does Honeygain Payout Work ? (seuil, méthodes, délais)", url: "https://www.honeygain.com/honeygain-payout/" },
    { title: "Centre d'aide Honeygain (catégories Earnings, Payouts, Troubleshooting)", url: "https://support.honeygain.com/hc/en-us" },
  ],
  lastVerified: "2026-10-02",
};