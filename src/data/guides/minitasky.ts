import type { PlatformGuide } from "./types";

/**
 * Guide MiniTasky — sources officielles : minitasky.com, minitasky.com/frequently-asked-questions
 */
export const minitaskyGuide: PlatformGuide = {
  whatIsIt:
    "MiniTasky est une plateforme de micro-tâches et de petites missions (micro jobs) : vous gagnez des cryptomonnaies en watchant des publicités PTC et vidéo, en complétant des offres et des sondages, en visitant des liens sponsorisés, en réclamant le faucet et les défis quotidiens, ou en vendant de petites prestations (gigs). C'est aussi une place de marché pour les annonceurs, qui peuvent publier des micro jobs.",
  howItWorks:
    "Après inscription, vous disposez de plusieurs méthodes de gain (vidéo, PTC, offres/sondages, shortlinks, faucet, défis quotidiens, concours, micro jobs). Chaque tâche validée crédite votre solde. La FAQ ajoute un programme d'affiliation : vous gagnez 10 % des gains de vos filleuls, à vie. Les retraits se font en crypto, FaucetPay, BinancePay, bKash ou Wise.",
  callouts: [
    {
      tone: "warning",
      title: "Attention — un seul compte, pas de VPN",
      text: "La FAQ est formelle : un seul compte est autorisé ; les comptes multiples, VPN, proxies, bots ou tout logiciel automatisé sont interdits sous peine de bannissement permanent. Ne vous rabattez pas sur un VPN « juste pour regarder » : c'est le compte entier qui est en jeu.",
    },
    {
      tone: "info",
      title: "Important — 120 jours d'inactivité",
      text: "La FAQ précise que si vous ne vous connectez pas au moins une fois tous les 120 jours, votre compte est définitivement supprimé, avec la perte de tous vos soldes, du Purchase Balance et de vos filleuls. Une connexion par mois suffit.",
    },
  ],
  features: [
    { title: "Micro tasks & gigs", description: "Petites missions, et vente de petites prestations sur la place de marché." },
    { title: "PTC et publicités vidéo", description: "Regarder des pubs et des vidéos rémunérées." },
    { title: "Offres et sondages", description: "Offres walls et sondages rémunérés." },
    { title: "Liens sponsorisés (shortlinks)", description: "Visiter des liens sponsorisés." },
    { title: "Défis quotidiens et succès", description: "Défis de connexion quotidienne et objectifs à thème." },
    { title: "Concours", description: "Concours de liens courts et concours de parrainage." },
    { title: "Faucet", description: "Réclamation périodique de petites récompenses." },
    { title: "Affiliation 10 % à vie", description: "10 % des gains de vos filleuls, selon la FAQ." },
  ],
  dashboard: [
    { title: "Tâches / Offres", description: "La liste des tâches disponibles, filtrées par catégorie." },
    { title: "Faucet & Défis", description: "Les récompenses périodiques et les objectifs quotidiens." },
    { title: "Portefeuille", description: "Solde, Purchase Balance et historique des retraits." },
    { title: "Parrainage", description: "Votre lien d'affiliation et le suivi de vos filleuls." },
    { title: "Support", description: "Ouverture de tickets depuis le site." },
  ],
  earningMethods: [
    {
      title: "Regarder des vidéos (Video Ads)",
      description: "La page d'accueil met en avant les Video Ads : vous gagnez en regardant des vidéos YouTube.",
      steps: [
        { title: "Ouvrir la section vidéo", description: "Les vidéo tasks sont listées avec leur récompense." },
        { title: "Regarder la vidéo", description: "La tâche n'est validée que si la vidéo est réellement visionnée." },
        { title: "Recevoir la récompense", description: "Le crédit apparaît après validation." },
      ],
    },
    {
      title: "Lire des articles (Read Articles)",
      description: "La page d'accueil cite explicitement la lecture d'articles comme source de revenus.",
    },
    {
      title: "PTC (Publicités)",
      description: "La FAQ mentionne les PTC Ads comme catégorie de gain.",
    },
    {
      title: "Offres et sondages",
      description: "Les offres walls et les sondages sont cités par la FAQ (« completing offer surveys »)." },
    {
      title: "Liens courts (Shortlinks)",
      description: "La page d'accueil cite les liens sponsorisés comme moyen de gagner de l'énergie et des récompenses." },
    {
      title: "Faucet",
      description: "La page d'accueil indique que le faucet se réclame toutes les 4 minutes." },
    {
      title: "Défis quotidiens et concours",
      description: "Défis de connexion quotidienne, concours de shortlinks et concours de referral (FAQ)." },
    {
      title: "Micro jobs (petites prestations)", description: "La FAQ mentionne la vente de « gigs » : de petites prestations rémunérées." },
    {
      title: "Parrainage (10 %)", description: "La FAQ annonce une commission de 10 % à vie sur les gains de vos filleuls." },
  ],
  registrationSteps: [
    { step: 1, title: "Ouvrir MiniTasky", description: "Passez par « Commencer à gagner » : vous arrivez sur minitasky.com." },
    { step: 2, title: "Créer le compte", description: "Inscription en ligne avec votre email." },
    { step: 3, title: "Sécuriser le compte", description: "Utilisez un mot de passe fort : un compte volé est un compte perdu (et les gains avec)." },
    { step: 4, title: "Découvrir le tableau de bord", description: "Repérez les sections Tâches, Faucet, Portefeuille et Parrainage." },
  ],
  earningGuide: [
    { step: 1, title: "Étape 1 — Inscription", description: "Compte créé avec un seul compte par personne." },
    { step: 2, title: "Étape 2 — Connaître les règles", description: "Lisez la FAQ : un compte, pas de VPN, pas de bot. Ces règles protègent vos gains." },
    { step: 3, title: "Étape 3 — Première tâche vidéo", description: "Commencez par une vidéo ou un article pour comprendre la validation." },
    { step: 4, title: "Étape 4 — Compléter les offres", description: "Les offres et sondages offrent le meilleur rapport entre gain et temps quand ils sont disponibles." },
    { step: 5, title: "Étape 5 — Revenir chaque jour", description: "Défis quotidiens et faucet : la régularité est ce qui fait la différence." },
    { step: 6, title: "Étape 6 — Suivre son solde", description: "Portefeuille = solde retirable ; Purchase Balance = budget publicitaire non retirable." },
    { step: 7, title: "Étape 7 — Atteindre le seuil", description: "Seuil de retrait : 0,20 $ selon la FAQ." },
    { step: 8, title: "Étape 8 — Retirer", description: "Choisissez FaucetPay, crypto, BinancePay, bKash ou Wise ; paiement généralement sous 48 h." },
    { step: 9, title: "Étape 9 — Ne pas oublier le 120 jours", description: "Connectez-vous au moins une fois tous les 120 jours pour ne pas perdre le compte." },
  ],
  refusedReasons: [
    "Comptes multiples, VPN, proxies, bots ou logiciel automatisé (bannissement permanent, FAQ).",
    "Tâche réalisée en violation des conditions de l'offre (ex. : ofrecer déjà faite).",
    "Commande de contenu interdit (drogue, pornographie, terrorisme, activités illégales) : l'annonce est supprimée et le compte banni avec les soldes.",
    "Inactivité de plus de 120 jours : suppression définitive du compte et des soldes.",
  ],
  withdrawal: {
    description:
      "La FAQ indique un seuil de retrait de 0,20 $. Vous pouvez retirer via Crypto, FaucetPay, BinancePay, bKash ou Wise, et les paiements sont généralement traités sous 48 h. Votre « Purchase Balance » (solde d'achat) n'est pas retirable : il sert uniquement à l'achat d'annonces ; le budget inutilisé d'une campagne supprimée est remboursé sur le Purchase Balance, pas en cryptomonnaie.",
    steps: [
      { title: "Vérifier le solde retirable", description: "Seuls vos gains sont retirables : le Purchase Balance est réservé à l'achat d'annonces." },
      { title: "Atteindre 0,20 $", description: "Seuil de retrait publié dans la FAQ officielle." },
      { title: "Choisir la méthode", description: "Crypto, FaucetPay, BinancePay, bKash ou Wise selon ce qui est proposé dans votre espace." },
      { title: "Saisir la destination", description: "Adresse de portefeuille crypto ou identifiant du moyen de paiement choisi, vérifié deux fois." },
      { title: "Demander le retrait", description: "La demande est transmise depuis votre portefeuille." },
      { title: "Attendre le traitement", description: "Les paiements sont généralement traités sous 48 heures." },
    ],
    methods: ["Crypto", "FaucetPay", "BinancePay", "bKash", "Wise"],
    minimum: "0,20 $ (seuil publié dans la FAQ officielle)",
    processingTime: "Généralement sous 48 h (FAQ officielle)",
  },
  conditions: [
    "Un seul compte autorisé ; les comptes multiples sont interdits (FAQ).",
    "VPN, proxies, bots et logiciels automatisés interdits, sous peine de bannissement permanent (FAQ).",
    "Inactivité de 120 jours : suppression définitive du compte, des soldes et des filleuls (FAQ).",
    "Le Purchase Balance est réservé à l'achat d'annonces et n'est ni retirable ni remboursable en cryptomonnaie (FAQ).",
    "Interdiction de promouvoir des produits liés aux drogues, à la pornographie, au terrorisme ou à des activités illégales : l'annonce est retirée et le compte banni avec les soldes (FAQ).",
    "MiniTasky décline toute responsabilité lorsque vous choisissez de participer à des sites externes (schémas de type Ponzi, sites de jeux) présentés dans les annonces : faites vos propres recherches avant de vous engager (FAQ).",
  ],
  mistakes: [
    { title: "Utiliser un VPN", text: "La FAQ l'interdit explicitement : le VPN, les proxies et les bots entraînent un bannissement permanent." },
    { title: "Laisser le compte inactif 120 jours", text: "Le compte est supprimé avec les soldes. Une connexion par mois suffit à l'éviter." },
    { title: "Croire que le Purchase Balance est retirable", text: "Il sert à l'achat d'annonces et n'est pas retirable. Seul le solde de gains l'est." },
    { title: "Suivre des liens d'offres sans lire", text: "La FAQ décline toute responsabilité pour les sites externes : lisez les conditions de chaque offre avant de valider." },
    { title: "Créer un compte pour faire un deuxièmeEssaI", text: "Multi-comptes = bannissement immédiat. Un seul compte." },
  ],
  tips: [
    "Connectez-vous au moins une fois tous les 120 jours : c'est la seule règle absolue.",
    "Le faucet est réclamable plusieurs fois par jour : c'est le gain le plus régulier.",
    "Combinez vidéo, articles, offres et shortlinks selon leur disponibilité.",
    "Le 10 % d'affiliation est « à vie » : le parrainage est un vrai levier, sans multi-compte.",
    "Gardez une trace des offres réalisées pour résoudre les litiges avec le support.",
  ],
  referral: {
    description:
      "La FAQ annonce une commission de 10 % sur tous les gains de vos filleuls, à vie (« 10% Lifetime Commission »). Le site organise aussi un concours de referral. Le lien est partagé depuis votre espace ; respectez la règle du compte unique, le farmage de filleuls étant condamné par les règles.",
  },
  faq: [
    { question: "Comment gagner sur MiniTasky ?", answer: "De multiples façons : micro tasks et gigs, PTC et vidéo ads, offres et sondages, liens sponsorisés, défis quotidiens, concours, et 10 % d'affiliation sur les gains de vos filleuls (FAQ)." },
    { question: "Quel est le seuil de retrait ?", answer: "0,20 $ selon la FAQ officielle. Les paiements sont généralement traités sous 48 h." },
    { question: "Quelles méthodes de retrait sont disponibles ?", answer: "Crypto, FaucetPay, BinancePay, bKash et Wise, selon la FAQ." },
    { question: "Le VPN est-il autorisé ?", answer: "Non : la FAQ interdit explicitement les VPN, proxies et bots, sous peine de bannissement permanent." },
    { question: "Que se passe-t-il si je ne me connecte pas pendant 120 jours ?", answer: "Votre compte est définitivement supprimé, avec la perte de tous les soldes, du Purchase Balance et de vos filleuls (FAQ)." },
    { question: "Puis-je retirer mon Purchase Balance ?", answer: "Non : le Purchase Balance sert uniquement à l'achat d'annonces et n'est pas retirable. Le budget inutilisé d'une campagne supprimée y est remboursé (FAQ)." },
    { question: "Comment contacter le support ?", answer: "Via le système de tickets du site, ou par l'email indiqué sur la page de contact." },
  ],
  docCoverage: "full",
  officialSources: [
    { title: "Site officiel MiniTasky", url: "https://minitasky.com/" },
    { title: "FAQ officielle MiniTasky (règles, retraits, affiliation)", url: "https://minitasky.com/frequently-asked-questions" },
  ],
  lastVerified: "2026-10-02",
};