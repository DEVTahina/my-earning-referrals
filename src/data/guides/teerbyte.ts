import type { PlatformGuide } from "./types";

/**
 * Guide TeerByte — documentation officielle limitée :
 * le site n'expose ni FAQ, ni centre d'aide, ni conditions accessibles publiquement.
 * Le guide reste donc volontairement prudent et signalétique.
 */
export const teerbyteGuide: PlatformGuide = {
  whatIsIt:
    "TeerByte se présente comme une plateforme de micro-tâches et de récompenses en ligne : l'utilisateur devrait cumuler des gains en réalisant des missions depuis son navigateur. La plateforme est référencée sur EarnZone via un lien de parrainage court, et non via un sous-domaine qui lui soit propre.",
  howItWorks:
    "Le fonctionnement détaillé n'est pas documenté publiquement : nous n'avons pas pu accéder à une FAQ, à un centre d'aide, à des conditions d'utilisation ou à une page de/documentation ouverte. Le principe attendu d'une telle plateforme — inscription, liste de tâches, validation, cumul sur un solde, retrait — est donc décrit ici de façon générique, sans inventer de fonctionnalité précise.",
  callouts: [
    {
      tone: "warning",
      title: "Attention — documentation officielle limitée",
      text: "Nous n'avons pas pu consulter de FAQ, de conditions d'utilisation ni de page d'aide officielles pour cette plateforme. Ce guide ne décrit donc que le minimum vérifiable. Vérifiez vous-même le site officiel avant de vous inscrire.",
    },
    {
      tone: "warning",
      title: "Attention — les pièges classiques des plateformes de tâches",
      text: "Une méthode d'escroquerie très répandue consiste à demander un dépôt ou un « déblocage » de gains pour pouvoir retirer. Si un site vous demande de payer pour accéder à vos gains ou pour les « accélérer », c'est un signal d'alerte majeur : ne payez jamais pour retirer.",
    },
    {
      tone: "info",
      title: "Important — vérifiez le lien de destination",
      text: "Le lien EarnZone de cette plateforme pointe vers un domaine raccourci distinct. Vérifiez toujours la destination réelle du lien avant de créer un compte.",
    },
  ],
  features: [
    {
      title: "Micro-tâches en ligne",
      description: "C'est la catégorie annoncée par la plateforme sur EarnZone.",
    },
    {
      title: "Navigation dans le navigateur",
      description: "Les plateformes de micro-tâches de ce type fonctionnent généralement depuis un navigateur, sans installation.",
    },
  ],
  earningMethods: [
    {
      title: "Tâches disponibles",
      description:
        "Sur ce type de plateforme, les tâches (visites, clics, questionnaires courts) sont listées dans le tableau de bord et créditées après validation. Sur cette plateforme précise, la liste réelle n'est pas vérifiable publiquement.",
    },
  ],
  registrationSteps: [
    {
      step: 1,
      title: "Vérifier la destination du lien",
      description:
        "Contrôlez le domaine affiché après avoir suivi le lien de la card EarnZone.",
      tips: ["Un lien de raccourcissement vers un domaine inattendu est un motif de prudence."],
    },
    {
      step: 2,
      title: "Lire les conditions avant de vous inscrire",
      description:
        "Cherchez une page de conditions, une FAQ ou une politique de retrait. Si elle est absente, c'est déjà une information.",
    },
    {
      step: 3,
      title: "Créer le compte avec une adresse dédiée",
      description:
        "Si vous décidez d'essayer, utilisez une adresse email dédiée et un mot de passe unique, pour ne pas exposer vos autres comptes.",
    },
    {
      step: 4,
      title: "Ne jamais déposer d'argent pour « débloquer » vos gains",
      description:
        "Aucun dépôt ne devrait être nécessaire pour retirer des gains réellement gagnés.",
    },
  ],
  earningGuide: [
    { step: 1, title: "Étape 1 — Vérification préalable", description: "Domaine, conditions, mentions légales : faites le point avant toute inscription." },
    { step: 2, title: "Étape 2 — Inscription prudente", description: "Email dédié, mot de passe unique, aucun paiement demandé." },
    { step: 3, title: "Étape 3 — Observer le fonctionnement", description: "Regardez comment le site présente les tâches, les délais et les retraits avant d'investir du temps." },
    { step: 4, title: "Étape 4 — Tester sur une petite échelle", description: "Neuinsist pas sur un petit montant : le but est d'observer, pas d'accumuler." },
    { step: 5, title: "Étape 5 — Vérifier les conditions de retrait", description: "Avant tout, lisez comment et quand un retrait est traité." },
  ],
  refusedReasons: [
    "Aucune information officielle n'est publiée : les motifs de refus ne peuvent pas être documentés.",
  ],
  withdrawal: {
    description:
      "Aucun document officiel accessible ne décrit les méthodes, le seuil ou les délais de retrait de cette plateforme. Ces informations doivent être lues directement sur le site, après connexion, avant tout engagement.",
    methods: ["À vérifier sur le site officiel"],
    minimum: "Non documenté publiquement",
    processingTime: "Non documenté publiquement",
  },
  conditions: [
    "Aucun règlement intérieur, aucune FAQ et aucune politique de retrait n'ont pu être consultés publiquement.",
    "Vérifiez l'existence de conditions d'utilisation et d'informations légales avant de vous inscrire.",
  ],
  mistakes: [
    {
      title: "Déposer de l'argent pour « débloquer » des gains",
      text: "Aucune plateforme de tâches légitime ne demande de paiement pour retirer des gains acquis. C'est le scénario d'escroquerie le plus courant.",
    },
    {
      title: "Réutiliser votre mot de passe principal",
      text: "Si le site est peu documenté, limitez la casse : email dédié, mot de passe unique.",
    },
    {
      title: "Suivre un lien sans vérifier le domaine",
      text: "Vérifiez la destination réelle du lien de parrainage.",
    },
  ],
  tips: [
    "Méfiez-vous des promesses de gains quotidiens affichés en très grand : ce sont des arguments, pas des faits.",
    "Cherchez des preuves de retrait crédibles (page publique de versements) avant de vous engager.",
    "Si le site demande un dépôt pour retirer, arrêtez immédiatement : c'est le signal d'alerte le plus fiable.",
  ],
  faq: [
    {
      question: "Comment TeerByte gagne-t-il de l'argent ?",
      answer:
        "Sur ce type de plateforme, l'annonceur paie pour des actions simples (visites, clics, tâches) et la plateforme garde une part. Sans documentation officielle lisible, nous ne pouvons pas détailler le mécanisme exact.",
    },
    {
      question: "Faut-il déposer de l'argent pour commencer ?",
      answer:
        "Les plateformes de micro-tâches légitimes sont gratuites. Tout dépôt demandé pour « débloquer » ou « accélérer » des gains doit vous alerter.",
    },
    {
      question: "Comment retirer mes gains ?",
      answer:
        "Les méthodes et le seuil ne sont pas documentés publiquement. Consultez l'espace retiré de votre compte avant de commencer.",
    },
    {
      question: "Puis-je utiliser un VPN ?",
      answer:
        "Aucune règle officielle n'a pu être consultée. Par prudence, évitez le VPN : c'est le premier moyen de détection utilisé par ce type de plateforme.",
    },
  ],
  docCoverage: "partial",
  officialSources: [
    { title: "Domaine référencé pour TeerByte", url: "https://teerbyte.com/" },
  ],
  lastVerified: "2026-10-02",
};