import type { PlatformGuide } from "./types";

/**
 * Guide MakeYouTask — source officielle : makeyoutask.com
 */
export const makeyoutaskGuide: PlatformGuide = {
  whatIsIt:
    "MakeYouTask est un site à deux visages. D'un côté, une plateforme d'earning : vous regardez des vidéos, vous vous abonnez à des chaînes, vous faites des tâches rapides et vous lancez une roue de la fortune pour gagner des coins, puis vous retirez vos gains. De l'autre, un panneau SMM (achat de vues YouTube, d'abonnés, d'heures de visionnage) destiné aux créateurs et agences, avec une API pour revendeurs.",
  howItWorks:
    "Le principe côté utilisateur est simple : inscription, accumulation de coins via le visionnage et les tâches, puis cash-out vers un portefeuille crypto ou un moyen de paiement. Le faucet permet de réclamer des récompenses gratuites plusieurs fois par jour. Le site met aussi en avant des \"Digital Farm\", des paquets d'achat payants qui ne font pas partie de l'earning gratuit : ce sont des produits achetés, à traiter avec prudence.",
  callouts: [
    {
      tone: "warning",
      title: "Attention — le site vend aussi des produits payants",
      text: "En plus de l'earning gratuit, MakeYouTask propose des offres SMM et des \"Digital Farm\" (Cyber Wheat, Flaming Corn, Crypto Beanstalk) avec des rendements annoncés sur 180 jours. Ce ne sont pas des gains de tâches : ce sont des achats. N'investissez pas de l'argent dans ce type d'offre en croyant qu'il s'agit d'une récompense.",
    },
    {
      tone: "info",
      title: "Important — le mot de passe de vos réseaux",
      text: "Le site affirme ne jamais demander le mot de passe de votre compte YouTube ni les droits de gestion : seules les URL publiques de vos vidéos sont utilisées. Ne partagez jamais vos identifiants, même si un « agent » vous les demande.",
    },
  ],
  features: [
    {
      title: "Visionnage de vidéos rémunéré",
      description: "Regarder des vidéos crédite des coins sur votre compte.",
    },
    {
      title: "Tâches rapides",
      description: "Missions courtes à réaliser depuis le navigateur, en plus du visionnage.",
    },
    {
      title: "Roue de la fortune",
      description: "Un jeu de chance intégré qui rapporte des coins selon la plateforme.",
    },
    {
      title: "Faucet",
      description: "Le site met en avant un faucet : des récompenses gratuites réclamables plusieurs fois par jour.",
    },
    {
      title: "Inscription via Email, Google ou Telegram",
      description: "Trois moyens de créer un compte proposés directement sur la page d'accueil.",
    },
    {
      title: "Panneau SMM + API revendeur",
      description:
        "Le site vend aussi des vues, abonnés et heures de visionnage YouTube, et propose une API REST pour les revendeurs.",
    },
  ],
  dashboard: [
    {
      title: "Balance / coins",
      description: "Le solde de coins gagné via les tâches et le visionnage.",
    },
    {
      title: "Watch / Earn",
      description: "Les listes de vidéos et de tâches disponibles.",
    },
    {
      title: "Faucet",
      description: "La zone de réclamation des récompenses gratuites périodiques.",
    },
    {
      title: "Retrait (cash out)",
      description: "La section de cash-out vers portefeuille crypto ou moyen de paiement.",
    },
  ],
  earningMethods: [
    {
      title: "Regarder des vidéos",
      description:
        "L'activité principale du côté utilisateur : chaque visionnage crédite des coins.",
      steps: [
        { title: "Ouvrir la liste de vidéos", description: "La file de contenus à visionner s'affiche depuis votre tableau de bord." },
        { title: "Regarder réellement la vidéo", description: "Restez sur l'onglet pendant la lecture : une visionnage interrompu est généralement invalidé." },
        { title: "Récupérer les coins", description: "La récompense est créditée à la fin du visionnage." },
      ],
    },
    {
      title: "S'abonner à des chaînes",
      description:
        "La page d'accueil mentionne explicitement les abonnements aux chaînes comme source de coins.",
    },
    {
      title: "Tâches rapides (quick tasks)",
      description:
        "Des missions courtes listées dans le tableau de bord, à réaliser selon les consignes affichées.",
    },
    {
      title: "Roue de la fortune (spin the wheel)",
      description: "Un générateur aléatoire qui ajoute des coins : c'est un jeu de chance, pas un revenu régulier.",
    },
    {
      title: "Faucet",
      description: "Récompenses gratuites réclamables plusieurs fois par jour, comme indiqué sur le site.",
    },
  ],
  registrationSteps: [
    {
      step: 1,
      title: "Ouvrir le site officiel",
      description: "Passez par « Commencer à gagner » depuis EarnZone : vous arrivez sur makeyoutask.com.",
      tips: ["Méfiez-vous des clones : vérifiez le domaine dans la barre d'adresse."],
    },
    {
      step: 2,
      title: "Créer un compte gratuit",
      description: "La page d'accueil propose une création de compte en quelques secondes, par email, Google ou Telegram.",
    },
    {
      step: 3,
      title: "Vérifier votre accès",
      description: "Confirmez les demandes éventuelles du site (email ou compte social utilisé à l'inscription).",
    },
    {
      step: 4,
      title: "Découvrir le tableau de bord",
      description: "Repérez la liste de vidéos, les quick tasks, la roue et le faucet.",
    },
  ],
  earningGuide: [
    { step: 1, title: "Étape 1 — Inscription", description: "Compte créé via Email, Google ou Telegram." },
    { step: 2, title: "Étape 2 — Première vidéo", description: "Commencez par un visionnage simple pour comprendre la mécanique des coins." },
    { step: 3, title: "Étape 3 — Alterner les activités", description: "Vidéos, tâches rapides, faucet et roue : diversifiez pour ne pas dépendre d'une seule source." },
    { step: 4, title: "Étape 4 — Respecter le visionnage", description: "Ne changez pas d'onglet pendant la lecture : c'est la cause la plus fréquente de tâche non créditée." },
    { step: 5, title: "Étape 5 — Suivre son solde", description: "Votre solde de coins évolue après chaque activité validée." },
    { step: 6, title: "Étape 6 — Réclamer le faucet", description: "Revenez réclamer les récompenses gratuites plusieurs fois par jour, comme indiqué par le site." },
    { step: 7, title: "Étape 7 — Atteindre le seuil de retrait", description: "Le seuil n'est pas publié clairement sur la page d'accueil : vérifiez-le dans votre espace avant d'économiser." },
    { step: 8, title: "Étape 8 — Retirer", description: "Cash-out vers un portefeuille crypto ou un moyen de paiement ; un témoignage du site mentionne FaucetPay." },
  ],
  refusedReasons: [
    "Visionnage interrompu ouchang d'onglet : la tâche n'est généralement pas créditée.",
    "Tâche réalisée plusieurs fois ou via un outil automatisé (la plateforme met en avant des tâches réalisées par de \"vrais utilisateurs\").",
    "Compte créé en double pour exploiter les récompenses.",
    "Contenu de paiement non conforme (ex. demandes de mots de passe de réseaux sociaux, qui sont explicitement refusés par le site).",
  ],
  withdrawal: {
    description:
      "La page d'accueil indique un cash-out vers « votre portefeuille crypto ou moyen de paiement préféré », sans publier de seuil ni de délai précis. Un témoignage public mentionne un paiement sur FaucetPay. Vérifiez donc les conditions de retrait, le seuil et les frais directement dans votre espace : elles ne sont pas documentées publiquement.",
    steps: [
      { title: "Vérifier le seuil affiché", description: "Non publié sur la page d'accueil : consultez-le dans votre tableau de bord." },
      { title: "Choisir la destination", description: "Portefeuille crypto ou moyen de paiement proposé par la plateforme." },
      { title: "Demander le cash-out", description: "Depuis la section de retrait de votre compte." },
      { title: "Attendre la validation", description: "Aucune durée officielle n'est publiée : prévoyez de la patience." },
    ],
    methods: ["Portefeuille crypto", "Moyens de paiement acceptés par la plateforme (FaucetPay cité par un témoignage public)"],
    processingTime: "Non publié officiellement — vérifiez dans votre espace",
  },
  conditions: [
    "La plateforme met en avant que ses tâches SMM sont réalisées par de vrais utilisateurs, sans bots ni scripts : l'automatisation est contraire à l'esprit du service.",
    "Le site ne demandera jamais le mot de passe de votre compte YouTube ni vos accès de gestion.",
    "Des offres payantes (« Digital Farm », packs SMM) existent sur le site : ce ne sont pas des gains de tâches.",
  ],
  mistakes: [
    { title: "Confondre l'earning et les achats", text: "Les \"Digital Farm\" sont des produits payants avec rendements annoncés, pas des récompenses de visionnage." },
    { title: "Changer d'onglet pendant une vidéo", text: "Les tâches SMM sont décrites comme réalisées par de vrais utilisateurs : un visionnage coupé n'est pas comptabilisé." },
    { title: "Donner ses identifiants à un tiers", text: "Le site affirme ne jamais les demander : toute demande de ce type est une alerte." },
  ],
  tips: [
    "Commencez par comprendre le circuit des coins avant de viser des tasks plus complexes.",
    "Réclamez le faucet régulièrement : c'est la source la plus simple.",
    "Gardez une trace de vos visionnages si une tâche est contestée.",
    "Ne payez rien pour « débloquer » vos gains : c'est le schéma classique d'arnaque.",
  ],
  referral: {
    description:
      "La page d'accueil met en avant l'inscription et le cash-out, mais ne détaille pas publiquement les règles du programme de parrainage. Utilisez le lien de referral affiché dans votre espace : les conditions exactes (paliers, délais) sont propres au compte et évoluent.",
  },
  faq: [
    { question: "MakeYouTask est-il vraiment gratuit ?", answer: "L'earning (vidéos, tâches, faucet) est gratuit. En revanche, le site vend aussi des services SMM et des paquets payants : ce sont des achats, pas des gains." },
    { question: "Faut-il un portefeuille crypto ?", answer: "Le cash-out se fait vers un portefeuille crypto ou un moyen de paiement accepté. Si vous n'avez pas de portefeuille, créez-en un sur un service connu avant de viser un retrait." },
    { question: "Comment sont crédités les coins ?", answer: "Après chaque activité validée : visionnage de vidéo, tâche rapide, faucet ou jeu de la roue. Une tâche non créditée est généralement due à un visionnage interrompu." },
    { question: "Puis-je automatiser le visionnage ?", answer: "La plateforme met en avant que les tâches sont réalisées par de vrais utilisateurs. L'automatisation est donc contraire à l'usage annoncé et peut entraîner la perte de vos gains." },
    { question: "Quel est le seuil de retrait ?", answer: "Il n'est pas publié sur la page d'accueil. Consultez la section retrait de votre compte : c'est la seule source fiable et à jour." },
    { question: "Le site demande-t-il mon mot de passe YouTube ?", answer: "Non : le site affirme ne jamais demander de mot de passe ni de droits de gestion, seulement des URL publiques." },
  ],
  docCoverage: "partial",
  officialSources: [{ title: "Site officiel MakeYouTask", url: "https://makeyoutask.com/" }],
  lastVerified: "2026-10-02",
};