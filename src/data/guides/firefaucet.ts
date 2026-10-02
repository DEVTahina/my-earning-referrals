import type { PlatformGuide } from "./types";

/**
 * Guide FireFaucet — sources officielles : firefaucet.win, firefaucet.win/faq
 */
export const firefaucetGuide: PlatformGuide = {
  whatIsIt:
    "FireFaucet est un faucet et une plateforme de tâches crypto en activité depuis 2018. Vous gagnez des ACP (Auto Claim Points) en réalisant des tâches (offres, sondages, PTC, faucet, tâches quotidiennes), puis l'Auto Faucet convertit ces ACP en cryptomonnaies réelles en arrière-plan, à partir d'une ressource interne : le Fuel. Le site affirme couvrir tous les frais de retrait.",
  howItWorks:
    "Le cycle est le suivant : vous gagnez des ACP, ces ACP font monter votre niveau grâce aux Activity Points (AP), puis vous lancez l'Auto Faucet avec votre Fuel. L'Auto Faucet consomme 1 Fuel par minute et convertit vos ACP dans les cryptos de votre choix. Vous pouvez arrêter et collecter quand vous voulez. Les retraits se font ensuite gratuitement, à partir d'un seuil minimum par devise et par réseau.",
  callouts: [
    {
      tone: "warning",
      title: "Attention — VPN et multi-comptes",
      text: "La FAQ est explicite : un VPN ou un proxy bloque l'accès aux pages de gain (offerwalls, faucet 30 minutes, etc.). Créer plusieurs comptes depuis le même réseau ou réutiliser une adresse de portefeuille entre comptes entraîne un signalement et un bannissement. Un compte par personne, connexion normale.",
    },
    {
      tone: "info",
      title: "Important — pas de KYC, mais un email vérifié",
      text: "Aucune vérification d'identité n'est demandée, mais un email vérifié est nécessaire pour retirer ou collecter des récompenses. Le pseudonyme est définitif : il est lié à l'ensemble du compte.",
    },
    {
      tone: "tip",
      title: "Conseil — le boost n'est pas toujours le bon choix",
      text: "La FAQ explique que les boosts faibles (1x) rapportent plus d'Activity Points (+100 % contre +50 % et +25 %). Monter en niveau avec des sessions plus longues peut valoir mieux que convertir plus vite.",
    },
  ],
  features: [
    { title: "Offerwalls et sondages", description: "BitLabs, CPX Research, TheoremReach : les offres les plus rémunératrices, avec 10 % de la valeur en Activity Points." },
    { title: "PTC Ads", description: "Ouvrir une publicité, la regarder, résoudre un captcha : ACP + AP." },
    { title: "Faucet 30 minutes", description: "Récompense toutes les 30 minutes, jusqu'à 20 fois par jour ; les 10 premières donnent aussi du Fuel." },
    { title: "Bonus quotidien", description: "Une fois par jour : ACP, AP et Fuel, avec cumul de série." },
    { title: "Tâches quotidiennes (Daily Tasks)", description: "Des objectifs quotidiens qui réinitialisent chaque jour et rapportent ACP, AP et Fuel." },
    { title: "Auto Faucet", description: "Conversion automatique des ACP en crypto, même site fermé." },
    { title: "Niveaux et récompenses", description: "Les niveaux augmentent la valeur d'un ACP (×2 au niveau 1000), la capacité de Fuel, les boosts et les devises." },
    { title: "Power Streak", description: "Une série quotidienne avec des récompenses qui augmentent jusqu'à 2 000 ACP par jour." },
    { title: "Classement quotidien (Leaderboard)", description: "Les 100 meilleurs utilisateurs du jour sont récompensés en ACP." },
    { title: "Cartes cadeaux", description: "Les gains peuvent être échangés contre des cartes cadeaux en plus des cryptos." },
  ],
  profileSetup: [
    {
      step: 1,
      title: "Choisir un pseudonyme définitif",
      description:
        "La FAQ précise que le pseudonyme est permanent et que tout le compte y est rattaché : choisissez-le bien.",
    },
    {
      step: 2,
      title: "Utiliser un email valide et vérifié",
      description:
        "Un email vérifié est nécessaire pour retirer ou collecter des récompenses, et pour la réinitialisation du mot de passe.",
    },
    {
      step: 3,
      title: "Définir un mot de passe fort et unique",
      description: "Le compte est votre seul accès aux gains : ne le partagez jamais.",
    },
    {
      step: 4,
      title: "Renseigner vos adresses de portefeuille",
      description:
        "La section « Wallet addresses » du compte enregistre vos adresses de réception pour les retraits.",
    },
  ],
  dashboard: [
    { title: "Dashboard", description: "Solde ACP, Fuel restant, boost, devises sélectionnées et session d'Auto Faucet." },
    { title: "Balance & Withdrawal", description: "Soldes par devise, seuils de retrait, exchange gratuit et cartes cadeaux." },
    { title: "Levels & Rewards", description: "Niveau, multiplicateur ACP, capacité de Fuel et aperçu du prochain boost." },
    { title: "Earn", description: "Le menu des gains : Offerwalls, PTC Ads, Faucet, Daily Tasks, Power Streak, Leaderboard, Referral." },
    { title: "Wallet addresses", description: "Vos adresses de portefeuille enregistrées." },
    { title: "Chat", description: "Un chat public, modéré, où il faut rester correct pour éviter un bannissement." },
  ],
  earningMethods: [
    {
      title: "Offerwalls et sondages",
      description: "La source la plus rentable du site, via des partenaires comme BitLabs, CPX Research et TheoremReach.",
      steps: [
        { title: "Choisir une offre", description: "Commencez par les offre walls marqués d'une étoile (meilleure qualité, validation rapide)." },
        { title: "Lire les exigences", description: "Beaucoup d'offres ne sont créditées qu'après une action, un niveau in-app ou un dépense." },
        { title: "Réaliser l'offre honnêtement", description: "Réponses cohérentes et constantes : c'est la première cause de disqualification." },
        { title: "Attendre la confirmation", description: "De quelques minutes à plusieurs semaines selon l'offre (voir les délais ci-dessous)." },
        { title: "Recevoir vos ACP", description: "Crédit automatique dès que le fournisseur confirme l'offre." },
      ],
    },
    {
      title: "PTC Ads",
      description: "Ouvrir une publicité, la regarder pendant le timer, résoudre un captcha : ACP + Activity Points.",
    },
    {
      title: "Faucet 30 minutes",
      description: "Récompense toutes les 30 minutes, jusqu'à 20 fois par jour ; les 10 premières donnent du Fuel.",
    },
    {
      title: "Bonus quotidien",
      description: "Une récompense quotidienne (ACP, AP, Fuel) qui construit votre série.",
    },
    {
      title: "Tâches quotidiennes",
      description: "Des objectifs quotidiens (par exemple terminer N offre walls ou réclamer le faucet) qui réinitialisent chaque jour.",
    },
    {
      title: "Auto Faucet",
      description: "Conversion continue des ACP en crypto, alimentée par le Fuel, dans les devises que vous avez choisies.",
    },
    {
      title: "Parrainage",
      description: "20 % de commission sur les gains de vos filleuls, plus 5 % sur les dépôts publicitaires qu'ils génèrent.",
    },
  ],
  registrationSteps: [
    { step: 1, title: "Ouvrir Fire Faucet", description: "Passez par « Commencer à gagner » : vous arrivez sur firefaucet.win." },
    { step: 2, title: "Créer le compte gratuit", description: "La FAQ précise que l site's earning est 100 % gratuit : aucun paiement n'est nécessaire." },
    { step: 3, title: "Vérifier votre email", description: "Obligatoire pour retirer ou collecter des récompenses." },
    { step: 4, title: "Choisir votre pseudonyme", description: "Il est définitif : choisissez-le avec soin." },
    { step: 5, title: "Découvrir le tableau de bord", description: "Repérez ACP, AP, Fuel, le widget Auto Faucet et la section Balance." },
  ],
  earningGuide: [
    { step: 1, title: "Étape 1 — Inscription", description: "Compte gratuit créé en quelques secondes, sans adhésion payante." },
    { step: 2, title: "Étape 2 — Sécurité du compte", description: "Email vérifié, mot de passe fort : c'est ce qui protège vos gains." },
    { step: 3, title: "Étape 3 — Trouver les premières tâches", description: "Menu Earn : commencez par les offre walls starred et le faucet 30 minutes." },
    { step: 4, title: "Étape 4 — Choisir une tâche", description: "Vérifiez la récompense, les exigences (pays, appareil, objectif) et le délai de validation." },
    { step: 5, title: "Étape 5 — Réaliser la tâche", description: "Désactivez VPN, proxy et bloqueurs de pubs : ils cassent le tracking qui crédite la récompense." },
    { step: 6, title: "Étape 6 — Vérification", description: "Une offre reste « pending » tant que l'annonceur n'a pas confirmé ; c'est normal." },
    { step: 7, title: "Étape 7 — Suivre son solde", description: "ACP et AP sont visibles sur le tableau de bord ; le niveau augmente avec les AP." },
    { step: 8, title: "Étape 8 — Lancer l'Auto Faucet", description: "Choisissez les devises, le boost, puis lancez : 1 Fuel par minute." },
    { step: 9, title: "Étape 9 — Atteindre le seuil de retrait", description: "Chaque devise a son seuil minimum, affiché sur la page de retrait (de ~2,50 $ à ~25 $ selon les réseaux)." },
    { step: 10, title: "Étape 10 — Retirer", description: "Retrait gratuit : les 2–3 premiers peuvent prendre 48–72 h, puis envoi quotidien vers 00:00 UTC." },
  ],
  refusedReasons: [
    "VPN, proxy ou bloqueur de pubs actif pendant l'offre : le tracking est cassé et la récompense non créditée.",
    "Offre déjà réalisée : la plupart ne sont réalisables qu'une fois par personne, sur tous les sites du réseau.",
    "Exigences non remplies (pays, appareil, objectif in-app atteint, action spécifique).",
    "Réponses incohérentes ou non sincères aux sondages : la première cause de disqualification.",
    "Multi-comptes ou adresse de portefeuille réutilisée entre comptes.",
  ],
  withdrawal: {
    description:
      "Dès qu'un solde crypto atteint son seuil minimum, vous pouvez le retirer gratuitement : Fire Faucet annonce couvrir tous les frais réseau et de traitement. Les seuils varient selon la devise et le réseau (environ 2,50 $ à 25 $ pour les réseaux les plus coûteux). L'icône batterie indique le seuil du réseau et le stock disponible de la plateforme. Les 2 à 3 premiers retraits peuvent prendre 48 à 72 h (contrôles de sécurité), puis les demandes sont envoyées une fois par jour vers 00:00 UTC. Les retraits en attente peuvent être annulés et remboursés tant qu'ils ne sont pas en cours de traitement.",
    steps: [
      { title: "Atteindre le seuil de la devise", description: "Chaque devise et chaque réseau a son minimum, affiché sur la page de retrait (icône batterie)." },
      { title: "Vérifier le stock du réseau", description: "L'icône batterie indique si la plateforme dispose du stock (Filled, Low, Very Low, Empty)." },
      { title: "Ouvrir la page de retrait", description: "Depuis le menu Balance & Withdrawal." },
      { title: "Demander le retrait", description: "Gratuit, dans la limite quotidienne (10 $, ou 25 $ avec Prime). Vous pouvez annuler tant que le retrait n'est pas lancé." },
      { title: "Recevoir les fonds", description: "Les premiers retraits peuvent prendre 48–72 h, puis les envois ont lieu chaque jour vers 00:00 UTC." },
    ],
    methods: ["Cryptomonnaies (BTC, ETH, USDT, BNB, DOGE, LTC et autres)", "Cartes cadeaux"],
    minimum: "Variable par devise et par réseau : environ 2,50 $ à 25 $ selon la FAQ",
    processingTime:
      "48–72 h pour les 2–3 premiers retraits, puis envoi quotidien vers 00:00 UTC",
  },
  conditions: [
    "Un compte par personne ; les comptes partageant un réseau/IP ou réutilisant une adresse de portefeuille peuvent être bannis (FAQ).",
    "VPN et proxy : ils bloquent l'accès aux pages de gain (offerwalls, faucet, etc.).",
    "Aucune vérification d'identité (KYC) n'est demandée, mais un email vérifié est obligatoire pour retirer.",
    "Le pseudonyme est permanent.",
    "Limite de retrait : 10 $ par jour (25 $ avec l'adhésion Prime).",
    "L'adhésion Prime est facultative et payante ; tout le reste du site fonctionne sans elle.",
    "Un ticket de support ne fait pas accélérer un retrait en attente : il suit le calendrier prévu.",
  ],
  mistakes: [
    { title: "Laisser un bloqueur de pubs actif", text: "La FAQ le répète : le tracking est cassé, donc l'offre n'est pas créditée." },
    { title: "Utiliser un VPN", text: "L'accès aux pages de gain est bloqué, et le compte peut être signalé." },
    { title: "Toujours choisir le boost maximum", text: "Un boost élevé consomme plus vite vos ACP. Les faibles boosts rapportent plus d'Activity Points, donc plus de niveau." },
    { title: "S'attendre à un crédit instantané pour une offre", text: "Selon l'offre : de quelques minutes à 7–30 jours. L'ordre est donné par l'annonceur." },
    { title: "Ouvrir un ticket pour accélérer un retrait", text: "Cela ne change rien : les retraits suivent le planning quotidien." },
  ],
  tips: [
    "Commencez par les offre walls marqués d'une étoile : meilleure qualité et validation plus rapide.",
    "L'Activity Points fait monter le niveau, et le niveau augmente la valeur de vos ACP : c'est le vrai levier de progression.",
    "Tenez une série (Power Streak) : la récompense monte jusqu'à 2 000 ACP par jour.",
    "Planifiez vos sessions Auto Faucet pendant le Happy Hour (week-end, 2:00 et 14:00 UTC, +50 %).",
    "Commencez par viser le seuil le plus bas d'une devise à faibles frais pour vos premiers retraits.",
  ],
  referral: {
    description:
      "Deux commissions sont documentées : 20 % sur les gains de vos filleuls (offerwalls, PTC, shortlinks, faucet 30 minutes) et 5 % sur les dépôts publicitaires qu'ils génèrent. Le lien se partage depuis la section Referral. Les règles anti-fraude (un compte par personne) s'appliquent aussi au parrainage.",
  },
  faq: [
    { question: "Comment fonctionne l'Auto Faucet ?", answer: "Il convertit vos ACP en cryptomonnaies en arrière-plan, en consommant 1 Fuel par minute. Vous pouvez fermer le site : il continue jusqu'à épuisement du Fuel ou des ACP, puis il s'arrête en attendant votre collecte." },
    { question: "Qu'est-ce que le Fuel ?", answer: "La ressource qui alimente l'Auto Faucet. Le Fuel de base se recharge automatiquement selon votre niveau ; le Fuel bonus vient des tâches quotidiennes, du faucet 30 minutes et du bonus quotidien." },
    { question: "Qu'est-ce que le Happy Hour ?", answer: "Le week-end, le samedi et le dimanche à 2:00 et 14:00 UTC, toutes les conversions Auto Faucet rapportent 50 % de plus pendant une heure. Cela ne s'applique qu'à l'Auto Faucet, pas à la Conversion Instantanée." },
    { question: "Quels sont les délais de validation des offres ?", answer: "De quelques minutes (offres simples) à 7–30 jours ou plus pour les offres à conditions d'usage. C'est l'annonceur qui décide." },
    { question: "Pourquoi mon offre n'est-elle pas créditée ?", answer: "Causes courantes : VPN/proxy/bloqueur, offre déjà réalisée, exigences non remplies (pays, appareil, objectif). En cas de doute, contactez d'abord le support de l'offre wall." },
    { question: "Faut-il une vérification d'identité ?", answer: "Non : aucune pièce d'identité n'est demandée. En revanche, un email vérifié est obligatoire pour retirer." },
    { question: "Combien coûte l'adhésion Prime ?", answer: "Elle est facultative et payante : elle augmente la limite de retrait à 25 $ par jour, ajoute un emplacement de chat, un badge et un support prioritaire. Le prix courant est affiché sur la page Prime." },
    { question: "Puis-je annuler un retrait ?", answer: "Oui, tant qu'il n'est pas en cours de traitement : le montant revient sur votre solde." },
  ],
  docCoverage: "full",
  officialSources: [
    { title: "Site officiel Fire Faucet", url: "https://firefaucet.win/" },
    { title: "FAQ / Help Center Fire Faucet (Auto Faucet, Fuel, retraits, règles)", url: "https://firefaucet.win/faq/" },
  ],
  lastVerified: "2026-10-02",
};