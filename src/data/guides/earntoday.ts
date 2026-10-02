import type { PlatformGuide } from "./types";

/**
 * Guide EarnToday — source officielle : earntoday.online
 */
export const earntodayGuide: PlatformGuide = {
  whatIsIt:
    "EarnToday est une plateforme d'earning en navigateur : vous gagnez de petites cryptomonnaies en répondant à des sondages, en regardant des publicités PTC et en complétant des offres. Le site indique n'avoir aucune adhésion payante,réclamer un faucet toutes les 5 minutes et propose 10 % des gains de vos filleuls.",
  howItWorks:
    "Le site s'appuie sur des réseaux d'offres reconnus (CPX Research, Offerwall.me, TimeWall) pour les sondages et offres. En complément, vous avez un faucet à réclamer toutes les 5 minutes, un mur de liens courts (qui rapporte de l'argent et de l'énergie) et des PTC. Les gains s'accumulent sur un solde, avec un seuil de retrait très bas, et les paiements FaucetPay sont annoncés comme instantanés.",
  callouts: [
    {
      tone: "info",
      title: "Important — seuil de retrait très bas",
      text: "Le site affiche un seuil de retrait de 0,01 $. C'est un point positif pour commencer, mais cela signifie que les frais éventuels pèsent lourd sur de petits montants : vérifiez les frais avant chaque retrait.",
    },
    {
      tone: "warning",
      title: "Attention — gardez vos preuves",
      text: "Le site met en avant une page de « Payment Proofs » avec les montants et adresses ayant été payés. Consultable publiquement, elle sert de référence — mais elle ne garantit pas vos paiements à vous.",
    },
  ],
  features: [
    { title: "Sondages", description: "Via les réseaux d'offres partenaires, dont CPX Research." },
    { title: "PTC Ads", description: "Regarder des publicités rémunérées." },
    { title: "Offers", description: "Compléter des offres pour gagner." },
    { title: "Faucet 5 min", description: "Le site annonce une récompense de 0,0005 $ toutes les 5 minutes." },
    { title: "Shortlinks Wall", description: "Un mur de liens courts qui rapporte de l'argent et de l'énergie." },
    { title: "Parrainage 10 %", description: "10 % des gains de vos filleuls." },
    { title: "Aucune adhésion payante", description: "Le site met en avant l'absence d'adhésion payante." },
  ],
  dashboard: [
    { title: "Balance", description: "Votre solde de gains en cours." },
    { title: "Sondages / Offers", description: "Les tâches regroupées depuis les réseaux partenaires." },
    { title: "Faucet", description: "La zone de réclamation périodique." },
    { title: "Shortlinks Wall", description: "Le mur de liens courts." },
    { title: "Retrait", description: "La section de retrait et les méthodes de paiement acceptées." },
  ],
  earningMethods: [
    {
      title: "Sondages",
      description: "La première source citée par le site, via des réseaux comme CPX Research.",
      steps: [
        { title: "Ouvrir la section sondages", description: "Les questionnaires disponibles sont listés." },
        { title: "Répondre de façon cohérente", description: "Les réponses incohérentes sont la première cause de rejet sur ce type de réseau." },
        { title: "Attendre la validation", description: "La validation dépend du réseau partenaire." },
      ],
    },
    {
      title: "Offres",
      description: "Le site liste les offres comme méthode distincte, via des réseaux comme Offerwall.me et TimeWall.",
    },
    {
      title: "PTC Ads",
      description: "Regarder des publicités rémunérées depuis le navigateur.",
    },
    {
      title: "Faucet",
      description: "Le site annonce une récompense de 0,0005 $ toutes les 5 minutes, sans effort.",
    },
    {
      title: "Shortlinks Wall",
      description: "Cliquer sur des liens courts pour gagner de l'argent et de l'énergie (cette énergie peut servir à autre chose sur la plateforme).",
    },
    {
      title: "Parrainage",
      description: "Le site annonce 10 % des gains de vos filleuls, sans frais caché.",
    },
  ],
  registrationSteps: [
    { step: 1, title: "Ouvrir EarnToday", description: "Passez par « Commencer à gagner » pour arriver sur earntoday.online." },
    { step: 2, title: "Créer le compte", description: "Inscription avec votre email." },
    { step: 3, title: "Confirmer si demandé", description: "Suivez la procédure de validation si un email est envoyé." },
    { step: 4, title: "Explorer le tableau de bord", description: "Repérez Sondages, Offers, PTC, Faucet, Shortlinks et la section Retrait." },
  ],
  earningGuide: [
    { step: 1, title: "Étape 1 — Inscription", description: "Compte créé avec un email valide." },
    { step: 2, title: "Étape 2 — Revenir souvent", description: "Le faucet se réclame toutes les 5 minutes : la régularité paie." },
    { step: 3, title: "Étape 3 — Faire les sondages et offres", description: "Ce sont les activités les plus rémunératrices du site." },
    { step: 4, title: "Étape 4 — Compléter avec le PTC", description: "Le PTC est plus rapide à réaliser et s'empile avec le reste." },
    { step: 5, title: "Étape 5 — Lire les conditions des offres", description: "Chaque réseau partenaire a ses propres règles de validation." },
    { step: 6, title: "Étape 6 — Suivre son solde", description: "Le solde se met à jour au fil des validations." },
    { step: 7, title: "Étape 7 — Retirer", description: "Le seuil affiché est de 0,01 $ ; les paiements FaucetPay sont annoncés comme instantanés." },
  ],
  refusedReasons: [
    "Réponses incohérentes ou non sincères aux sondages (cause classique de rejet sur les réseaux d'offres).",
    "Offre déjà réalisée : la plupart des offres ne se font qu'une fois par personne et par réseau.",
    "Tâche réalisée depuis un VPN ou un environnement non conforme.",
    "Faucet réclamé avant l'expiration du délai de 5 minutes.",
  ],
  withdrawal: {
    description:
      "Le site affiche un seuil de retrait minimum de 0,01 $ et met en avant des paiements instantanés via FaucetPay, ainsi qu'un support des cryptomonnaies et une page publique de preuves de paiement. Vérifiez les frais, la devise et le réseau avant de valider une demande : les informations détaillées (seuils par méthode, délais) ne sont pas publiées sur la page d'accueil.",
    steps: [
      { title: "Vérifier le solde", description: "Votre solde de gains, distinct du Purchase Balance éventuel." },
      { title: "Atteindre le seuil", description: "0,01 $ selon l'affichage du site." },
      { title: "Choisir la méthode", description: "FaucetPay ou cryptomonnaie prise en charge, selon l'espace." },
      { title: "Saisir la destination", description: "Identifiant FaucetPay ou adresse crypto, vérifiez-la soigneusement." },
      { title: "Demander le retrait", description: "Validez la demande ; les paiements FaucetPay sont annoncés comme instantanés." },
    ],
    methods: ["FaucetPay", "Cryptomonnaies prises en charge"],
    minimum: "0,01 $ (seuil affiché sur le site)",
    processingTime: "FaucetPay : annoncé comme instantané · autres méthodes : à vérifier dans votre espace",
  },
  conditions: [
    "Le site annonce qu'il n'y a aucune adhésion payante : la plateforme est censée être gratuite.",
    "Les offres proviennent de réseaux partenaires (CPX Research, Offerwall.me, TimeWall) qui imposent leurs propres règles.",
    "Les gains dépendent de la disponibilité des tâches : rien n'est garanti.",
  ],
  mistakes: [
    { title: "Répondre au hasard aux sondages", text: "Les incohérences de réponses sont la première cause de disqualification sur les réseaux d'offres." },
    { title: "Faire la même offre deux fois", text: "Une offre se fait une seule fois par personne, souvent sur tous les sites du réseau." },
    { title: "Attendre un montant garanti", text: "Le faucet est minuscule (0,0005 $ toutes les 5 minutes) : l'intérêt est le cumul, pas le montant isolé." },
  ],
  tips: [
    "Mettez un rappel pour le faucet : 5 minutes, c'est le rythme de base du site.",
    "Combinez faucet + PTC + offres : aucune activité ne suffit seule.",
    "Le parrainage de 10 % est annoncé clairement : partagez votre lien depuis votre tableau de bord.",
    "Vérifiez la page Payment Proofs : elle donne un ordre de grandeur concret des paiements récents.",
  ],
  referral: {
    description:
    "Le site annonce 10 % de tout ce que gagnent vos filleuls, sur leurs sondages, offres et PTC (« Earn 10% from referrals' surveys, offers & PTC »). Le lien de parrainage se partage depuis votre compte ; aucun détail supplémentaire sur les seuils n'est publié, vérifiez dans votre espace.",
  },
  faq: [
    { question: "Quel est le seuil de retrait ?", answer: "Le site affiche 0,01 $ comme seuil minimum. Vérifiez la valeur actuelle dans votre espace, car elle peut évoluer." },
    { question: "Comment sont les paiements ?", answer: "Le site met en avant des paiements instantanés via FaucetPay et un support des cryptomonnaies, avec une page publique de Payment Proofs." },
    { question: "Y a-t-il une adhésion payante ?", answer: "Le site affiche « No Paid Memberships » : l'earning est censé être entièrement gratuit." },
    { question: "Qu'est-ce que le faucet ?", answer: "Une récompense périodique : le site annonce 0,0005 $ toutes les 5 minutes." },
    { question: "Comment sont validés les sondages ?", answer: "Par les réseaux partenaires (CPX Research, Offerwall.me, TimeWall), qui ont chacun leurs règles. Des réponses incohérentes sont la cause la plus fréquente de rejet." },
    { question: "Y a-t-il un programme de parrainage ?", answer: "Oui : 10 % des gains de vos filleuls, annoncés sur la page d'accueil." },
  ],
  docCoverage: "partial",
  officialSources: [{ title: "Site officiel EarnToday", url: "https://earntoday.online/" }],
  lastVerified: "2026-10-02",
};