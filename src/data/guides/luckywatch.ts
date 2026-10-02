import type { PlatformGuide } from "./types";

/**
 * Guide LuckyWatch — source officielle : luckywatch.pro
 */
export const luckywatchGuide: PlatformGuide = {
  whatIsIt:
    "LuckyWatch est une application mobile qui vous rémunère pour regarder de courtes vidéos. Le site met en avant un principe simple : « No investment or skills required ». En plus du visionnage, l'application propose une devise interne (les Clover Coins) et des boosts qui augmentent vos revenus ou réduisent vos frais.",
  howItWorks:
    "Vous installez l'application, vous créez un compte, puis vous regardez des vidéos : chaque visionnage est crédité sur votre solde (le site affiche des crédits de l'ordre de quelques millièmes de dollar par vidéo, variable). Vous pouvez ensuite convertir vos Clover Coins en boosts ou en argent, et mapper vos filleuls sur trois niveaux pour recevoir jusqu'à 20 % de leurs gains.",
  callouts: [
    {
      tone: "info",
      title: "Important — le visionnage doit être réel",
      text: "Le site indique que votre vision est comptée (« Your view has been counted! ») : regarder les vidéos hors de l'application, ou interrompre le visionnage, ne crédite rien.",
    },
    {
      tone: "warning",
      title: "Attention — l'automatisation proposée par le site",
      text: "Le site propose un fonctionnement automatique sous Android via l'application MacroDroid et un script fourni par LuckyWatch. C'est une fonctionnalité annoncée par la plateforme elle-même : l'utiliser peut entrer en conflit avec les conditions de YouTube ou d'autres plateformes de contenu. Assumez-en le risque.",
    },
    {
      tone: "info",
      title: "Important — pas de seuil publié",
      text: "Le site n'affiche pas de seuil de retrait minimum ni de délai. Ces informations se trouvent dans l'application, une fois connecté.",
    },
  ],
  features: [
    { title: "Visionnage rémunéré", description: "Des crédits sont ajoutés au solde à chaque vidéo visionnée." },
    { title: "Clover Coins", description: "La devise interne du site, attribuée pour les referrals, le visionnage et l'activité, échangeable en boosts ou en argent." },
    { title: "Boosts", description: "1 jour +20 % de revenu ; 1 semaine +2 % de revenu sur les filleuls de niveau 1 ; bonus uniques : +10 % sur Telegram Stars, 1 $ sur le solde, 0 % de frais de retrait." },
    { title: "Programme d'affiliation sur 3 niveaux", description: "Jusqu'à 20 % des gains de vos filleuls, crédités instantanément sur votre solde." },
    { title: "Tableau des versements", description: "Le site affiche en temps réel les demandes de retrait des utilisateurs." },
    { title: "Visionnage automatique (Android)", description: "Via MacroDroid et un script fourni par LuckyWatch." },
  ],
  dashboard: [
    { title: "Balance", description: "Votre solde en dollars et vos Clover Coins." },
    { title: "Vidéos", description: "La file de vidéos à visionner, avec le crédit correspondant." },
    { title: "Boosts", description: "Les boosts achetés avec vos Clover Coins et leurs effets." },
    { title: "Referrals", description: "Vos statistiques de revenu par niveau de filleuls." },
    { title: "Retrait", description: "La demande de retrait et son historique." },
  ],
  earningMethods: [
    {
      title: "Regarder des vidéos",
      description: "La méthode principale : chaque vidéo visionnée crédite votre solde.",
      steps: [
        { title: "Ouvrir l'application", description: "La file de vidéos s'affiche avec le crédit correspondant." },
        { title: "Regarder la vidéo", description: "Le visionnage doit être effectué dans l'application pour être compté." },
        { title: "Récupérer le crédit", description: "Le site affiche « Credited to balance » après le visionnage." },
        { title: "Passer à la vidéo suivante", description: "Vous pouvez enchaîner ou continuer plus tard." },
      ],
    },
    {
      title: "Clover Coins",
      description:
        "La devise interne, gagnée via les referrals, le visionnage et l'activité, que vous pouvez échanger contre des boosts ou de l'argent.",
    },
    {
      title: "Parrainage (3 niveaux, jusqu'à 20 %)",
      description:
        "Invitez des utilisateurs via votre lien : vous recevez jusqu'à 20 % de leurs gains, crédité instantanément, sans frais cachés.",
    },
    {
      title: "Boosts",
      description:
        "Des amélioration achetées en Clover Coins : +20 % de revenu sur un jour, +2 % sur les filleuls de niveau 1 sur une semaine, un bonus de 1 $ sur le solde, et un bonus unique de 0 % de frais de retrait.",
    },
  ],
  registrationSteps: [
    { step: 1, title: "Ouvrir LuckyWatch", description: "Passez par « Commencer à gagner » : vous arrivez sur luckywatch.pro." },
    { step: 2, title: "Installer l'application", description: "Le site présente l'application comme mobile (Android notamment, avec une option d'automatisation)." },
    { step: 3, title: "Créer le compte", description: "Inscription dans l'application." },
    { step: 4, title: "Regarder une première vidéo", description: "Pour comprendre la mécanique et voir le crédit arriver." },
    { step: 5, title: "Découvrir les boosts et les referrals", description: "Les deux leviers annoncés par le site pour augmenter vos revenus." },
  ],
  earningGuide: [
    { step: 1, title: "Étape 1 — Installation et inscription", description: "Compte mobile créé." },
    { step: 2, title: "Étape 2 — Première vidéo", description: "Le plus simple : regardez une vidéo et vérifiez le crédit." },
    { step: 3, title: "Étape 3 — Régularité", description: "Revenez chaque jour : c'est le cumul qui compte." },
    { step: 4, title: "Étape 4 — Clover Coins", description: "Accumulez la devise interne en regardant des vidéos et en invitant." },
    { step: 5, title: "Étape 5 — Boosts", description: "Convertissez des Clover Coins en boosts pour augmenter temporairement vos revenus." },
    { step: 6, title: "Étape 6 — Parrainage", description: "Partagez votre lien : jusqu'à 20 % des gains de vos filleuls sur 3 niveaux." },
    { step: 7, title: "Étape 7 — Suivre son solde", description: "Solde et statistiques sont visibles dans l'application." },
    { step: 8, title: "Étape 8 — Retirer", description: "Le seuil et les délais ne sont pas publiés sur le site : vérifiez dans l'application." },
  ],
  refusedReasons: [
    "Vidéo non réellement visionnée dans l'application.",
    "Visionnage interrompu ou changement d'application.",
    "Tentative d'automatisation non conforme aux règles de l'application.",
  ],
  withdrawal: {
    description:
      "Le site n'affiche ni seuil minimum ni délai de retrait : ces informations se trouvent dans l'application. En revanche, il met en avant un tableau des versements en temps réel, et un boost unique « 0 % withdrawal fee » qui supprime les frais de retrait. La méthode de retrait elle-même n'est pas précisée sur la page d'accueil : vérifiez-la dans l'application avant de compter sur un retrait rapide.",
    steps: [
      { title: "Atteindre le seuil affiché dans l'application", description: "Non publié sur le site : vérifiez-le une fois connecté." },
      { title: "Vérifier les frais", description: "Un boost unique porte les frais de retrait à 0 %." },
      { title: "Demander le retrait", description: "Depuis l'application, en suivant la procédure affichée." },
      { title: "Suivre votre demande", description: "Le site affiche un tableau des demandes de retrait en temps réel." },
    ],
    methods: ["Méthode affichée dans l'application (non précisée sur le site)"],
    minimum: "Non publié sur le site",
    processingTime: "Non publié sur le site",
  },
  conditions: [
    "Le visionnage doit être réalisé dans l'application pour être crédité.",
    "Le site annonce une option d'automatisation sous Android (MacroDroid + script) : à utiliser en connaissance de cause.",
    "Les paramètres d'information et les seuils évoluent : vérifiez dans l'application.",
  ],
  mistakes: [
    { title: "Regarder des vidéos hors de l'application", text: "La vue n'est alors pas comptabilisée." },
    { title: "Changer d'application pendant le visionnage", text: "Le crédit dépend du visionnage dans l'application." },
    { title: "Ignorer les boosts", text: "Les Clover Coins se transforment en boosts qui augmentent vos revenus : c'est documenté par le site." },
    { title: "Compter sur un retrait rapide", text: "Ni seuil ni délai ne sont publiés : vérifiez dans l'application." },
  ],
  tips: [
    "Commencez par regarder des vidéos régulièrement : c'est la base du revenu.",
    "Convertissez vos Clover Coins en boosts plutôt que de les laisser dormir.",
    "Le boost « 0 % withdrawal fee » est intéressant quand vous atteignez le seuil.",
    "Inviter des amis reste le levier le plus fort : jusqu'à 20 % sur trois niveaux.",
  ],
  faq: [
    { question: "Combien gagne-t-on par vidéo ?", answer: "Le site affiche des crédits de l'ordre de quelques millièmes de dollar par vidéo (par exemple +0,0085 USD), variables selon les vidéos." },
    { question: "Faut-il investir de l'argent ?", answer: "Le site met en avant « No investment or skills required » : l'application est censée être gratuite. Méfiez-vous de toute version payante non officielle." },
    { question: "Comment suis-je payé ?", answer: "Le site ne publie pas la méthode exacte ni le seuil : tout se passe dans l'application. Il affiche en revanche un tableau des versements en temps réel." },
    { question: "Qu'est-ce que les Clover Coins ?", answer: "La devise interne du site, gagnée via les referrals, le visionnage et l'activité. Elle s'échange contre des boosts ou de l'argent." },
    { question: "Comment fonctionne le parrainage ?", answer: "Le site annonce 3 niveaux de filleuls et jusqu'à 20 % de leurs gains, crédités instantanément, sans frais cachés." },
    { question: "Puis-je automatiser le visionnage ?", answer: "Le site propose lui-même une automatisation sous Android via MacroDroid et un script dédié. C'est annoncé par la plateforme, mais cela peut entrer en conflit avec les conditions des sites de contenu." },
    { question: "Comment contacter le support ?", answer: "Par email à team@luckywatch.pro, via le bot Telegram @luckywatch_support_bot, ou dans le chat communautaire @luckywatchpro." },
  ],
  docCoverage: "partial",
  officialSources: [{ title: "Site officiel LuckyWatch", url: "https://luckywatch.pro/" }],
  lastVerified: "2026-10-02",
};