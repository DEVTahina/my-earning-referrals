import type { PlatformGuide } from "./types";

/**
 * Guide TimeBucks — sources officielles : timebucks.com et son Help Center
 * (help.timebucks.com : « What Is TimeBucks », « Getting Started »,
 * « How Payouts Work », « What Is the Daily Streak », « Available payment methods »).
 */
export const timebucksGuide: PlatformGuide = {
  whatIsIt:
    "TimeBucks est une plateforme internationale de tâches rémunérées qui regroupe plusieurs méthodes de gain sur un même compte : sondages, offres (offers), tâches, visionnage de contenus et des applications, jeux, ainsi qu'un bonus quotidien. Votre Help Center officiel décrit un seuil de retrait de 3 $ et des paiements automatiques, sans bouton de retrait manuel.",
  howItWorks:
    "Après inscription, vous retrouvez dans l'onglet Earn toutes les méthodes disponibles. Vous réalisez une activité (sondage, offre, tâche, vidéo), la plateforme vous crédite, et votre solde de gains s'accumule. Lorsque votre solde atteint 3 $, le paiement est envoyé automatiquement selon le calendrier de versement : il n'y a pas de bouton « retrait » dans l'interface.",
  callouts: [
    {
      tone: "info",
      title: "Important — pas de bouton de retrait",
      text: "Votre Help Center explique que TimeBucks paie automatiquement : il n'y a pas de bouton de retrait. Une fois le seuil de 3 $ atteint, le versement part tout seul aux jours de paiement.",
    },
    {
      tone: "info",
      title: "Important — solde publicitaire et solde de gains",
      text: "La FAQ du Help Center pose la question « How do I transfer my Advertising Balance to my Wallet Balance so that I can reach the minimum payout and withdraw? » : le solde publicitaire et le solde de gains sont deux notions bien distinctes. Seul le solde de gains compte pour atteindre le seuil.",
    },
    {
      tone: "tip",
      title: "Conseil — le Daily Streak",
      text: "Le « Daily Streak » est un système de récompenses pour les connexions régulières : pendant les 10 premiers jours, il n'y a pas de condition de gain. C'est une régularité simple à installer.",
    },
  ],
  features: [
    { title: "Sondages", description: "Répondre à des enquêtes rémunérées via des partenaires de marché." },
    { title: "Offres", description: "Inscriptions, essais et applications à tester, selon la disponibilité." },
    { title: "Tâches", description: "Petites missions diverses listées sur le compte." },
    { title: "Contenus / vidéos", description: "Visionnage de contenus rémunérés." },
    { title: "Daily Streak", description: "Système de bonus pour les connexions régulières, sans condition de gain sur les 10 premiers jours." },
    { title: "Vérification d'identité (ID check)", description: "Le Help Center propose un article « Tips for completing the ID check » : une vérification d'identité peut être demandée." },
    { title: "Parrainage", description: "Le programme d'invitation est accessible depuis votre compte." },
  ],
  dashboard: [
    { title: "Earn", description: "L'onglet principal : toutes les méthodes de gain disponibles." },
    { title: "Balance / Earnings balance", description: "Votre solde de gains, celui qui compte pour le seuil de 3 $." },
    { title: "Daily Streak", description: "Suivi de votre série de connexions et des bonus associés." },
    { title: "Payouts", description: "L'historique des versements automatiques." },
    { title: "Account / Profile", description: "Vos informations et, le cas échéant, la vérification d'identité." },
  ],
  earningMethods: [
    {
      title: "Sondages",
      description: "La méthode la plus classique : donner votre avis via des partenaires.",
      steps: [
        { title: "Ouvrir l'onglet Earn", description: "Les sondages disponibles sont listés dans votre compte." },
        { title: "Choisir un sondage", description: "Vérifiez la durée et la récompense avant de commencer." },
        { title: "Répondre correctement", description: "Répondez de manière cohérente : les exclusions en cours de route existent et sont normales." },
        { title: "Attendre la validation", description: "La récompense est créditée après validation." },
      ],
    },
    {
      title: "Offres",
      description: "Terminer une offre (inscription, essai, installation) selon les conditions de l'offre.",
    },
    {
      title: "Tâches", description: "Petites missions proposées dans l'onglet Earn." },
    {
      title: "Contenus et vidéos",
      description: "Visionnage de contenus rémunérés, une méthode classique de ce type de plateforme.",
    },
    {
      title: "Applications",
      description: "Le Help Center et la plateforme mentionnent l'installation d'applications comme catégorie d'offre.",
    },
    {
      title: "Parrainage",
      description: "Inviter des proches via le programme d'invitation accessible depuis votre compte." },
  ],
  registrationSteps: [
    { step: 1, title: "Ouvrir TimeBucks", description: "Passez par « Commencer à gagner » : vous arrivez sur timebucks.com." },
    { step: 2, title: "Créer le compte", description: "Inscription avec votre email (ou via un réseau social, selon les options affichées)." },
    { step: 3, title: "Compléter votre profil", description: "Un profil renseigné aide à recevoir des sondages correspondant à votre profil." },
    { step: 4, title: "Vérifier votre identité si demandé", description: "Le Help Center publie un article dédié aux conseils pour réussir l'ID check : c'est une étape normale sur cette plateforme." },
    { step: 5, title: "Découvrir l'onglet Earn", description: "Toutes les méthodes de gain sont regroupées ici." },
  ],
  earningGuide: [
    { step: 1, title: "Étape 1 — Inscription", description: "Compte créé avec un email valide." },
    { step: 2, title: "Étape 2 — Profil", description: "Plus votre profil est complet, plus vous recevez de sondages correspondants." },
    { step: 3, title: "Étape 3 — Vérification d'identité", description: "Si l'ID check est demandé, suivez les conseils du Help Center : les échecs sont souvent liés à la qualité du scan." },
    { step: 4, title: "Étape 4 — Premier sondage", description: "Commencez par un sondage court pour comprendre la validation." },
    { step: 5, title: "Étape 5 — Explorer les autres méthodes", description: "Offres, tâches, contenus : la variété dépend de ce qui est disponible dans votre région." },
    { step: 6, title: "Étape 6 — Installer le Daily Streak", description: "Connectez-vous régulièrement : les 10 premiers jours ne demandent aucun gain." },
    { step: 7, title: "Étape 7 — Suivre le solde de gains", description: "C'est l'Earnings balance qui compte pour le seuil, pas le solde publicitaire." },
    { step: 8, title: "Étape 8 — Atteindre 3 $", description: "Seuil de retrait documenté par le Help Center." },
    { step: 9, title: "Étape 9 — Recevoir le paiement", description: "Automatique, sans bouton de retrait, selon le calendrier de versement." },
  ],
  refusedReasons: [
    "Exclusion d'un sondage en cours de route : les partenaires sélectionnent selon des critères précis, ce n'est pas une erreur de votre part.",
    "Réponses incohérentes ou non sincères.",
    "Offre non terminée conformément aux conditions de l'offre.",
    "Vérification d'identité (ID check) non aboutie : le Help Center explique que la plupart des échecs viennent de la qualité du scan.",
  ],
  withdrawal: {
    description:
      "Le Help Center officiel est clair : TimeBucks paie automatiquement, il n'y a pas de bouton de retrait. Le seuil de retrait documenté est de 3 $. L'article « What Is TimeBucks » cite comme méthodes de paiement PayPal, Bitcoin, Litecoin, Skrill, Airtm, Wise / virement bancaire, et d'autres. L'article sur les méthodes de paiement détaille également PayPal, le virement Wise et des cryptomonnaies (par exemple Solana). Le calendrier de versement est publié dans l'article « How Payouts Work ».",
    steps: [
      { title: "Atteindre 3 $ de solde de gains", description: "Seuil minimum documenté par le Help Center." },
      { title: "Vérifier votre moyen de paiement", description: "PayPal, Bitcoin, Litecoin, Skrill, Airtm, Wise / virement bancaire et autres méthodes citées." },
      { title: "Attendre le versement automatique", description: "Aucun bouton : le paiement part tout seul aux jours de versement." },
      { title: "Suivre l'historique", description: "Les versements apparaissent dans votre compte." },
    ],
    methods: ["PayPal", "Bitcoin", "Litecoin", "Skrill", "Airtm", "Wise / virement bancaire", "Cryptomonnaies (par exemple Solana)"],
    minimum: "3 $ (seuil documenté par le Help Center officiel)",
    processingTime: "Versements automatiques selon le calendrier publié dans le Help Center",
  },
  conditions: [
    "Les paiements sont automatiques : aucun retrait manuel n'est possible.",
    "Le solde de gains et le solde publicitaire sont distincts ; seul le solde de gains compte pour le seuil.",
    "Une vérification d'identité peut être demandée (articles « Tips for completing the ID check » du Help Center).",
    "Les réponses aux sondages doivent être cohérentes et sincères.",
    "La disponibilité des méthodes dépend de votre pays et des partenaires.",
  ],
  mistakes: [
    { title: "Chercher un bouton « retrait »", text: "Il n'existe pas : le Help Center explique que les paiements sont automatiques." },
    { title: "Confondre solde publicitaire et solde de gains", text: "Seul le solde de gains permet d'atteindre le seuil de 3 $." },
    { title: "Rusher l'ID check", text: "Le Help Center précise que la plupart des échecs sont des problèmes de qualité de scan, pas des rejets définitifs." },
    { title: "S'attendre à beaucoup de sondages", text: "Le nombre dépend de votre profil, de votre région et des besoins des partenaires." },
  ],
  tips: [
    "Complétez votre profil : c'est ce qui maximise le nombre de sondages reçus.",
    "Installez le Daily Streak : les 10 premiers jours ne demandent aucun gain.",
    "Lisez l'article « Why am I not getting Surveys? » du Help Center si vous avez l'impression de ne rien recevoir.",
    "Diversifiez : offertes, tâches et contenus ne sont pas proposés selon les mêmes calendriers.",
    "Visez la méthode de paiement la plus simple pour vous : Wise et PayPal sont souvent plus accessibles que certaines cryptos.",
  ],
  faq: [
    { question: "Comment retirer mes gains ?", answer: "Il n'y a pas de bouton de retrait : le Help Center explique que les paiements sont automatiques. Atteignez 3 $ de solde de gains, puis le versement part selon le calendrier officiel." },
    { question: "Quel est le seuil de retrait ?", answer: "3 $ de solde de gains, d'après le Help Center officiel." },
    { question: "Quels moyens de paiement sont acceptés ?", answer: "PayPal, Bitcoin, Litecoin, Skrill, Airtm, Wise / virement bancaire, ainsi que d'autres méthodes dont des cryptomonnaies (Solana par exemple), selon l'article sur les méthodes de paiement." },
    { question: "Pourquoi ne reçois-je pas de sondages ?", answer: "Cela dépend de votre profil, de votre région et de la demande des partenaires. Le Help Center a une question dédiée à ce sujet ; complétez votre profil en priorité." },
    { question: "Pourquoi suis-je exclu d'un sondage ?", answer: "Les partenaires filtrent les répondants selon des critères précis : une exclusion en cours de route n'est pas une erreur de votre part." },
    { question: "Qu'est-ce que le Daily Streak ?", answer: "Un système de récompenses pour les connexions régulières : pendant les 10 premiers jours, il n'y a aucune condition de gain à remplir." },
    { question: "Dois-je vérifier mon identité ?", answer: "Le Help Center publie un article « Tips for completing the ID check », ce qui indique qu'une vérification peut être demandée. Les échecs sont souvent liés à la qualité du scan." },
    { question: "Comment convertir mon solde publicitaire ?", answer: "C'est une question posée dans la FAQ du Help Center : le solde publicitaire et le solde de gains sont distincts et seul le second compte pour atteindre le seuil." },
  ],
  docCoverage: "full",
  officialSources: [
    { title: "Site officiel TimeBucks", url: "https://timebucks.com/" },
    { title: "Help Center — What Is TimeBucks (seuil, méthodes, fréquence)", url: "https://help.timebucks.com/en/articles/12137505-what-is-timebucks" },
    { title: "Help Center — Getting Started on TimeBucks", url: "https://help.timebucks.com/en/articles/5384152-getting-started-on-timebucks" },
    { title: "Help Center — How Payouts Work", url: "https://help.timebucks.com/en/articles/10615460-how-payouts-work" },
    { title: "Help Center — Available payment methods", url: "https://help.timebucks.com/en/articles/10123545-available-payment-methods" },
    { title: "Help Center — What is the Daily Streak", url: "https://help.timebucks.com/en/articles/14132228-what-is-the-daily-streak" },
  ],
  lastVerified: "2026-10-02",
};