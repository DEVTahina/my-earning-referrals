import type { PlatformGuide } from "./types";

/**
 * Guide PR Social Tasks — sources officielles : pr.social (Terms of Service),
 * pr.social/privacy et la structure publique du site.
 * Les pages /tasks, /faq et /support sont rendues côté client : leur contenu
 * n'est pas lisible publiquement, le guide reste donc prudent.
 */
export const prSocialGuide: PlatformGuide = {
  whatIsIt:
    "PR.SOCIAL est une place d'échange de tâches sociales : vous êtes rémunéré pour réaliser des actions sur les réseaux sociaux — likes, abonnements (follows), commentaires — sur 18 plateformes différentes. La plateforme fonctionne dans les deux sens : des annonceurs passent des commandes, des exécutants les réalisent. Les retraits se font en USDT, TRX et Toncoin.",
  howItWorks:
    "Le fonctionnement est celui d'un micro-job : vous consultation la liste des tâches disponibles, vous acceptez une commande (par exemple aimer une publication ou suivre un compte), vous réalisez l'action avec votre propre compte social, puis la plateforme vérifie et crédite la récompense sur votre portefeuille. La plateforme mentionne des tarifs à partir de 0,002 $, un système d'avertissements et un programme de parrainage de 10 %.",
  callouts: [
    {
      tone: "info",
      title: "Important — des actions réelles sont demandées",
      text: "Ce type de service repose sur des actions sociales réelles. Les faux comptes, les actions automatisées ou les manipulations d'algorithme sont contraire à l'usage annoncé et exposent à des sanctions.",
    },
    {
      tone: "warning",
      title: "Attention — documentation technique limitée",
      text: "Les pages de tâches, de FAQ et de support sont générées côté client et leur contenu n'est pas lisible publiquement. Nous ne documentons donc que ce qui est publiquement accessible (conditions, structure du site).",
    },
  ],
  features: [
    { title: "18 plateformes sociales", description: "Likes, follows et commentaires sur 18 réseaux, annoncés dans les conditions officielles." },
    { title: "Tarifs à partir de 0,002 $", description: "Le tarif de base indiqué dans les conditions officielles." },
    { title: "Retraits crypto", description: "USDT, TRX et Toncoin, selon les conditions officielles." },
    { title: "Système d'avertissements", description: "Un dispositif de sanctions progressives est mentionné dans les conditions officielles." },
    { title: "Parrainage 10 %", description: "Un programme de parrainage à 10 % est mentionné dans les conditions officielles." },
    { title: "Commandes d'annnonceurs", description: "La structure du site (/orders, /create-order) montre un côté annonceur, en plus des tâches." },
  ],
  dashboard: [
    { title: "Dashboard", description: "Vue d'ensemble de vos gains et de vos tâches." },
    { title: "Tasks", description: "Les tâches sociales disponibles à réaliser." },
    { title: "My Tasks", description: "Vos tâches en cours et leur statut." },
    { title: "Wallet", description: "Votre solde et les demandes de retrait." },
    { title: "Referrals", description: "Votre lien de parrainage et vos filleuls." },
    { title: "Support / Tickets", description: "Ouverture de tickets pour toute question." },
  ],
  earningMethods: [
    {
      title: "Likes",
      description: "Aimer une publication, une vidéo ou un compte, selon la commande.",
      steps: [
        { title: "Ouvrir la liste des tâches", description: "Les commandes disponibles sont listées avec leur réseau et leur récompense." },
        { title: "Accepter la tâche", description: "Acceptez la commande pour qu'elle soit réservée." },
        { title: "Réaliser l'action", description: "Effectuez l'action depuis votre compte social personnel." },
        { title: "Attendre la vérification", description: "La plateforme contrôle l'action avant de créditer la récompense." },
      ],
    },
    {
      title: "Follows (abonnements)",
      description: "Suivre un compte, comme annoncé dans les conditions officielles.",
    },
    {
      title: "Commentaires",
      description: "Rédiger des commentaires ou interactions, selon les commandes publiées.",
    },
    {
      title: "Parrainage (10 %)",
      description: "Un programme à 10 % est mentionné dans les conditions officielles.",
    },
  ],
  registrationSteps: [
    { step: 1, title: "Ouvrir PR.SOCIAL", description: "Passez par « Commencer à gagner » : vous arrivez sur pr.social." },
    { step: 2, title: "Créer le compte", description: "La structure du site confirme une page /register dédiée à l'inscription." },
    { step: 3, title: "Préparer vos comptes sociaux", description: "La plupart des tâches demandent un compte réel sur le réseau concerné." },
    { step: 4, title: "Découvrir le tableau de bord", description: "Repérez Tasks, My Tasks, Wallet, Referrals et Support." },
  ],
  earningGuide: [
    { step: 1, title: "Étape 1 — Inscription", description: "Compte créé sur pr.social." },
    { step: 2, title: "Étape 2 — Choix des comptes sociaux", description: "Utilisez des comptes authentiques et actifs : les actions doivent être réelles." },
    { step: 3, title: "Étape 3 — Trouver les premières tâches", description: "Parcourez la liste des commandes et leurs conditions." },
    { step: 4, title: "Étape 4 — Choisir une tâche", description: "Vérifiez le réseau concerné, la récompense et la durée attendue." },
    { step: 5, title: "Étape 5 — Réaliser l'action", description: "Faites exactement ce qui est demandé, sans automatisation." },
    { step: 6, title: "Étape 6 — Vérification", description: "La plateforme contrôle l'action ; un avertissement peut être appliqué en cas de manquement." },
    { step: 7, title: "Étape 7 — Suivre son portefeuille", description: "Les récompenses apparaissent dans la section Wallet." },
    { step: 8, title: "Étape 8 — Retirer", description: "Retraits en USDT, TRX ou Toncoin selon les conditions officielles." },
  ],
  refusedReasons: [
    "Actions non réalisées ou réalisées de façon incorrecte (vérification par la plateforme).",
    "Comptes sociaux fictifs, inactifs ou réutilisés.",
    "Automatisation des actions sociales.",
    "Non-respect des règles des réseaux sociaux concernés.",
  ],
  withdrawal: {
    description:
      "Les conditions officielles indiquent des retraits en USDT, TRX et Toncoin. Le seuil exact, les frais et les délais ne sont pas publiés dans les pages accessibles publiquement : ils sont à vérifier dans votre portefeuille, une fois connecté.",
    steps: [
      { title: "Ouvrir la section Wallet", description: "C'est là que se trouvent vos demandes de retrait." },
      { title: "Vérifier le seuil et les frais", description: "Non publiés publiquement : vérifiez-les dans votre espace." },
      { title: "Choisir la devise", description: "USDT, TRX ou Toncoin selon les conditions officielles." },
      { title: "Saisir l'adresse", description: "Adresse de portefeuille vérifiée deux fois avant envoi." },
      { title: "Confirmer la demande", description: "La demande part vers le traitement prévu par la plateforme." },
    ],
    methods: ["USDT", "TRX", "Toncoin"],
    minimum: "Non publié publiquement",
    processingTime: "Non publié publiquement",
  },
  conditions: [
    "Les conditions officielles mentionnent un système d'avertissements en cas de manquement.",
    "Les actions sociales doivent être réelles et conformes aux règles des réseaux concernés.",
    "Un programme de parrainage de 10 % est mentionné dans les conditions officielles.",
    "Les retraits se font en USDT, TRX et Toncoin.",
  ],
  mistakes: [
    { title: "Utiliser des faux comptes sociaux", text: "Les actions doivent être réelles : un faux compte expose à un avertissement puis à une sanction." },
    { title: "Automatiser les actions", text: "L'automatisation est contraire à l'usage du service." },
    { title: "Ignorer les conditions d'une commande", text: "Chaque commande peut avoir ses propres contraintes (compte, délai, type d'action)." },
    { title: "Communiquer par le support public", text: "La structure du site prévoit un système de tickets dédié pour le support." },
  ],
  tips: [
    "Utilisez des comptes sociaux réalistes (ancienneté, activité) : cela améliore les chances de validation.",
    "Acceptez d'abord des tâches simples pour comprendre la chaîne de vérification.",
    "Les actions sont vérifiées : gardez une capture d'écran de chaque action réalisée.",
    "Le parrainage de 10 % est documenté : partagez votre lien depuis la section Referrals.",
  ],
  faq: [
    { question: "Qu'est-ce que PR.SOCIAL ?", answer: "Une place d'échange de tâches sociales : likes, follows et commentaires sur 18 plateformes, rémunérés, avec un côté annonceur pour passer des commandes." },
    { question: "Combien gagne une tâche ?", answer: "Les conditions officielles mentionnent des tarifs à partir de 0,002 $. Le montant dépend de la commande." },
    { question: "Comment sont payés mes gains ?", answer: "En USDT, TRX ou Toncoin, selon les conditions officielles." },
    { question: "Faut-il avoir des comptes sociaux ?", answer: "Oui : pour réaliser les actions demandées (likes, follows, commentaires), vous devez disposer d'un compte réel sur le réseau concerné." },
    { question: "Y a-t-il un programme de parrainage ?", answer: "Oui : un programme à 10 % est mentionné dans les conditions officielles." },
    { question: "Comment contacter le support ?", answer: "Via le système de tickets du site (section Support / Tickets), visible dans la structure du site." },
  ],
  docCoverage: "partial",
  officialSources: [
    { title: "Site officiel PR.SOCIAL", url: "https://pr.social/" },
    { title: "Conditions d'utilisation PR.SOCIAL", url: "https://pr.social/terms" },
  ],
  lastVerified: "2026-10-02",
};