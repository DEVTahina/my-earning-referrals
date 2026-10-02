import type { PlatformGuide } from "./types";

/**
 * Guide Coinli — sources officielles : coinli.net, coinli.net/faq, coinli.net/terms
 */
export const coinliGuide: PlatformGuide = {
  whatIsIt:
    "Coinli est une plateforme d'earning crypto : vous gagnez des cryptomonnaies en regardant des publicités, en complétant des tâches, en visitant des pages, en jouant, en proposant des offres, en réclamant le faucet, en passant des liens courts, ou en invitant des filleuls. Les gains sont retirables vers FaucetPay ou vers un portefeuille crypto.",
  howItWorks:
    "La FAQ indique que les gains sont possibles dès l'inscription. Vous accumulez des cryptos via les tâches et les pubs, vous claimz régulièrement le faucet, vous pouvez augmenter vos gains avec les liens courts, les PTC, les concours et les invitations, puis vous retirez vers FaucetPay (instantané) ou vers un portefeuille crypto (délai de traitement). Un « Purchase Balance » séparé sert à acheter de la publicité, upgrading des offres ou acheter des lottery / referral : cet argent n'est pas retirable.",
  callouts: [
    {
      tone: "warning",
      title: "Attention — règles strictes sur l'accès",
      text: "Les conditions de Coinli interdisent explicitement : proxy et VPN, filter breaker, proxy résidentiel, plusieurs comptes, compte partagé, plusieurs comptes sur le même réseau, bloqueurs de pop-ups, bloqueurs de pubs/scripts (AdBlock, NoScript), task bypassers et tout outil d'automatisation. Les conditions précisent qu'un compte par foyer et par IP est la règle, et qu'une violation entraîne un bannissement définitif.",
    },
    {
      tone: "info",
      title: "Important — le Purchase Balance n'est pas retirable",
      text: "Le FAQ précise que le Purchase Balance sert à acheter de la publicité, à upgrade une adhésion, à jouer à la loterie et à acheter des referrals : ces fonds ne peuvent pas être retirés.",
    },
  ],
  features: [
    { title: "Publicités (PTC)", description: "Regarder des publicités rémunérées, un des principaux points d'entrée." },
    { title: "Tâches", description: "Micro-tâches et offres pour accumuler des cryptos." },
    { title: "Faucet", description: "Récompenses régulières à réclamer, mentionnées sur la page d'accueil." },
    { title: "Gaming / Lucky bet", description: "La page d'accueil référence des jeux et un « Lucky ticket »." },
    { title: "Liens courts et offres", description: "Shortlinks et offre walls accessibles depuis l'interface." },
    { title: "Bonus quotidien et concours", description: "Bonus quotidien, « weekly cashback » et concours référencés sur la home." },
    { title: "Staking Center", description: "La FAQ mentionne un Staking Center et des bonus (100 DOGE, TRX) affichés sur le site." },
  ],
  dashboard: [
    { title: "Home / tableau de bord", description: "Vos gains, les raccourcis vers chaque activité (pub, tâche, faucet, liens courts)." },
    { title: "Withdraw", description: "La section de retrait : choisir la méthode (FaucetPay ou portefeuille crypto) et saisir l'adresse." },
    { title: "Purchase Balance", description: "Le solde d'achat, non retirable, destiné à la publicité et aux services." },
    { title: "FAQ / Support / Telegram", description: "Accès à la FAQ, au support (support@coinli.net) et au canal Telegram." },
  ],
  earningMethods: [
    {
      title: "Regarder des publicités (PTC)",
      description: "La FAQ indique que les cryptos se gagnent en complétant des tâches, en regardant des pubs, en jouant et en prenant des offres.",
      steps: [
        { title: "Ouvrir la section pub", description: "Accédez à la zone de publicité depuis le menu." },
        { title: "Regarder la publicité", description: "Ne fermez pas l'onglet pendant la durée affichée." },
        { title: "Récupérer la récompense", description: "Les crédits sont ajoutés après visionnage." },
      ],
    },
    {
      title: "Tâches et offres (offers)",
      description: "La FAQ cite explicitement les tâches, les offres et les « social jobs » comme sources de gains.",
    },
    {
      title: "Faucet",
      description: "La FAQ indique que vos gains augmentent en réclamant régulièrement le faucet.",
    },
    {
      title: "Liens courts (shortlinks)",
      description: "Cités dans la FAQ comme moyen d'augmenter les gains.",
    },
    {
      title: "Gaming",
      description: "La FAQ mentionne le gaming comme source de gains ; la home référence aussi les jeux et le « Lucky ticket ».",
    },
    {
      title: "Concours (contests)",
      description: "La FAQ mentionne les concours comme moyen de gagner plus.",
    },
    {
      title: "Inviter des filleuls (referrals)",
      description: "La home indique que vos filleuls génèrent un revenu passif sur leurs visites et recharges de solde.",
    },
  ],
  registrationSteps: [
    { step: 1, title: "Ouvrir Coinli", description: "Passez par « Commencer à gagner » : vous arrivez sur coinli.net." },
    {
      step: 2,
      title: "Créer le compte",
      description: "Inscription avec un email et un mot de passe. La FAQ précise que les mots de passe sont hachés.",
      tips: ["Utilisez un mot de passe fort et unique, et activez la 2FA (la FAQ le recommande)."],
    },
    { step: 3, title: "Activer la 2FA", description: "La FAQ explique que la double authentification est une couche de sécurité supplémentaire recommandée." },
    { step: 4, title: "Découvrir le tableau de bord", description: "Repérez les raccourcis Pub, Tâches, Faucet, liens courts et la section Withdraw." },
  ],
  earningGuide: [
    { step: 1, title: "Étape 1 — Inscription", description: "Compte créé avec un email valide." },
    { step: 2, title: "Étape 2 — Sécurité", description: "Activez la 2FA : c'est la première chose que la FAQ recommande." },
    { step: 3, title: "Étape 3 — Première tâche", description: "Commencez par une tâche simple pour comprendre la validation." },
    { step: 4, title: "Étape 4 — Prendre l'habitude du faucet", description: "La FAQ insiste : réclamer régulièrement le faucet augmente les gains." },
    { step: 5, title: "Étape 5 — Explorer les autres sources", description: "Shortlinks, PTC, jeux, concours : diversify." },
    { step: 6, title: "Étape 6 — Inviter (avec prudence)", description: "Les referrals augmentent vos revenus, mais le multi-compte est strictement interdit." },
    { step: 7, title: "Étape 7 — Retrait", description: "La FAQ : allez dans « Withdraw », choisissez FaucetPay ou portefeuille crypto, saisissez l'adresse et confirmez." },
    { step: 8, title: "Étape 8 — Délais", description: "FaucetPay : instantané. Portefeuille direct : vérification manuelle sous 24 à 72 h." },
  ],
  refusedReasons: [
    "Plusieurs comptes sur le même foyer ou la même IP (règle FAQ : bannissement permanent).",
    "Utilisation d'un VPN, d'un proxy, d'un proxy résidentiel, d'un « filter breaker » ou d'un bloqueur de scripts.",
    "Tentatives de « bypass » de tâche (task bypassers) ou usage d'un outil d'automatisation.",
    "Partage de compte ou comptes multiples sur le même réseau.",
    "Abus du système de sondages, d'offres ou de tâches sociales (interdit par les conditions).",
    "Abus du système de publicités PTC, également interdit.",
  ],
  withdrawal: {
    description:
      "La FAQ détaille la procédure : allez dans la section « Withdraw », choisissez votre méthode (FaucetPay ou portefeuille crypto), entrez l'adresse et confirmez. Le seuil minimum dépend de la méthode choisie. Les retraits vers micro-portefeuilles comme FaucetPay sont traités instantanément ; les versements directs vers un portefeuille sont vérifiés manuellement sous 24 à 72 h.",
    steps: [
      { title: "Ouvrir la section Withdraw", description: "Le retrait se fait depuis votre tableau de bord." },
      { title: "Choisir la méthode", description: "FaucetPay ou portefeuille crypto, selon la méthode disponible." },
      { title: "Saisir l'adresse", description: "Adresse de portefeuille crypto ou identifiant FaucetPay, vérifiez-la deux fois." },
      { title: "Confirmer", description: "Validez la demande de retrait." },
      { title: "Attendre le traitement", description: "Instantané via FaucetPay ; 24–72 h pour un portefeuille direct (contrôle manuel)." },
    ],
    methods: ["FaucetPay", "Portefeuille crypto (adresse directe)"],
    minimum: "Dépend de la méthode — la FAQ renvoie à la page de retrait pour le seuil de chaque option",
    processingTime: "FaucetPay : instantané · Portefeuille direct : 24 à 72 h (vérification manuelle)",
  },
  conditions: [
    "Un seul compte par personne et par foyer/IP : les comptes multiples sont strictement interdits (bannissement permanent).",
    "Interdits : proxy, VPN, proxy résidentiel, filter breaker, bloqueurs de pop-ups, AdBlock / NoScript, task bypassers, outils d'automatisation.",
    "Interdit d'abuser du système de sondages, d'offres, de tâches sociales ou de publicités PTC.",
    "Le Purchase Balance n'est pas retirable.",
    "Les mots de passe sont stockés hachés ; la 2FA est recommandée pour sécuriser le compte.",
  ],
  mistakes: [
    { title: "Installer un AdBlock", text: "Les conditions de Coinli listent explicitement les bloqueurs de scripts et de pubs parmi les interdits. Désactivez-les sur le site." },
    { title: "Utiliser un VPN", text: "Le VPN est banni par les conditions. En cas de déplacement ou d'accès depuis un pays différent, contactez le support avant d'utiliser un VPN." },
    { title: "Créer un second compte", text: "La règle est claire et la sanction est définitive. Raison de bannissement la plus courante." },
    { title: "Confondre Purchase Balance et gains", text: "L'argent d'achat n'est pas retirable : il sert à la publicité et aux services." },
  ],
  tips: [
    "Activez la 2FA dès le compte créé : la FAQ le recommande explicitement.",
    "Réclamez le faucet régulièrement, c'est le levier le plus simple.",
    "Combinez PTC, tâches, liens courts et concours.",
    "Inviter des filleuls augmente vos revenus passifs, mais respectez la règle du compte unique.",
    "Privilégiez FaucetPay pour un retrait instantané quand c'est possible.",
  ],
  referral: {
    description:
      "La page d'accueil indique que vos filleuls génèrent un revenu passif sur leurs visites et leurs recharges de solde. Vous les invitez depuis l'espace dédié de votre compte ; les conditions précises (montants, conditions) sont indiquées dans votre tableau de bord et évoluent.",
  },
  faq: [
    { question: "Puis-je gagner dès l'inscription ?", answer: "Oui : la FAQ indique que les gains sont possibles immédiatement après l'inscription, en regardant des pubs et en complétant des tâches." },
    { question: "Quel est le seuil de retrait ?", answer: "Il dépend de la méthode : la FAQ renvoie à la page de retrait pour le seuil spécifique de chaque option." },
    { question: "Le retrait FaucetPay est-il rapide ?", answer: "Oui : la FAQ indique que la plupart des retraits vers micro-portefeuilles comme FaucetPay sont traités instantanément. Un portefeuille direct est vérifié manuellement sous 24–72 h." },
    { question: "Le VPN est-il autorisé ?", answer: "Non : les conditions de service interdisent explicitement les proxy, VPN et proxy résidentiel." },
    { question: "Puis-je avoir plusieurs comptes ?", answer: "Non : un compte par foyer et par IP. La FAQ précise qu'une violation entraîne un bannissement permanent." },
    { question: "Comment contacter le support ?", answer: "Via la page Support du site ou l'adresse support@coinli.net mentionnée dans la FAQ." },
  ],
  docCoverage: "full",
  officialSources: [
    { title: "Site officiel Coinli", url: "https://coinli.net/" },
    { title: "FAQ officielle Coinli (gains, retraits, règles)", url: "https://coinli.net/faq" },
    { title: "Conditions d'utilisation Coinli (VPN, multi-comptes, automatisation)", url: "https://coinli.net/terms" },
  ],
  lastVerified: "2026-10-02",
};