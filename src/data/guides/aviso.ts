import type { PlatformGuide } from "./types";

/**
 * Guide Aviso — sources officielles : aviso.bz, aviso.bz/faq, aviso.bz/rules
 */
export const avisoGuide: PlatformGuide = {
  whatIsIt:
    "Aviso (aviso.bz) est une plateforme de crowd-marketing et de micro-tâches : des annonceurs publient des tâches (visiter un site, répondre à un sondage, tester un produit ou une interface, lire une lettre, passer un test) et des exécutants les réalisent pour être rémunérés. Le site annonce plus de 4 millions d'utilisateurs et fonctionne principalement en russe.",
  howItWorks:
    "La FAQ officielle résume quatre façons de gagner : 1) consulter les liens payants des annonceurs, 2) exécuter les tâches des annonceurs, 3) lire les lettres des annonceurs, 4) passer les tests des annonceurs. Chaque action est réalisée depuis le navigateur, puis validée : vos gains sont comptabilisés sur le compte et le retrait se fait via des portefeuilles électroniques.",
  callouts: [
    {
      tone: "warning",
      title: "Attention — règles très strictes sur les comptes",
      text: "L'offre publique interdit explicitement : plusieurs comptes, se connecter à plusieurs comptes depuis un même appareil, réutiliser les mêmes données d'inscription ou de portefeuille, et recréer un compte après un bannissement. Les contrevenants reçoivent un « ticket noir » pouvant aller jusqu'au blocage, sans compensation. Toute automatisation (autoclickers, autobrowsers, accélérateurs de timer) est également interdite.",
    },
    {
      tone: "info",
      title: "Important — désactivez les bloqueurs",
      text: "Le site affiche un avertissement explicite : pour fonctionner correctement, il faut désactiver AdBlock, AdGuard ou uBlock. La FAQ ajoute : si les liens publicitaires n'apparaissent pas mais que les statistiques existent, essayez de désactiver le pare-feu / anti-spyware ou de changer de navigateur.",
    },
    {
      tone: "info",
      title: "Important — langue du projet",
      text: "La langue officielle du projet est le russe (une version anglaise de l'offre existe). Toutes les communications et le support sont principalement en russe : prévoyez un moyen de comprendre les consignes des tâches.",
    },
  ],
  features: [
    { title: "Liens payants à consulter", description: "La première des quatre méthodes citées dans la FAQ." },
    { title: "Tâches des annonceurs", description: "Visiter des sites, remplir des formulaires, suivre des consignes précises." },
    { title: "Lettres (emails) à lire", description: "Une méthode spécifique d'Aviso : lire les messages des annonceurs." },
    { title: "Tests à passer", description: "Répondre aux tests mis en ligne par les annonceurs." },
    { title: "Statut d'exécutant", description: "La FAQ explique qu'un statut « Worker » (Рабочий) s'obtient en remplissant tous les champs de profil, y compris les comptes de paiement." },
    { title: "Concours de filleuls", description: "Un concours de referral est décrit dans la FAQ." },
    { title: "Matériaux de parrainage", description: "La FAQ indique que les matériaux de promotion des filleuls sont disponibles dans l'espace personnel, section « Matériaux publicitaires »." },
  ],
  profileSetup: [
    {
      step: 1,
      title: "Remplir tous les champs du profil",
      description:
        "La FAQ précise que le statut « Worker » n'apparaît qu'une fois tous les champs du profil renseignés, y compris les comptes des systèmes de paiement.",
      tips: ["Un profil incomplet limite l'accès à certaines tâches."],
    },
    {
      step: 2,
      title: "Renseigner des données vraies",
      description:
        "L'offre publique impose de fournir des informations authentiques à l'inscription et dans le profil : les fausses données sont une violation pouvant entraîner un blocage.",
    },
    {
      step: 3,
      title: "Ajouter vos méthodes de paiement",
      description:
        "Le retrait passe par WebMoney, YuMoney et Payeer selon la FAQ : ces coordonnées doivent figurer dans votre profil.",
    },
    {
      step: 4,
      title: "Confirmer votre email",
      description:
        "L'offre publique indique qu'un compte doit être activé en confirmant l'email d'inscription sous 7 jours ; les comptes non confirmés sont supprimés après 7 jours.",
    },
  ],
  dashboard: [
    { title: "Voir les pubs ( liens payants)", description: "La liste des liens publicitaires à consulter pour gagner." },
    { title: "Tâches", description: "Les missions des annonceurs à exécuter." },
    { title: "Matériaux publicitaires", description: "Les outils de promotion mis à disposition pour(parrainage." },
    { title: "Вывод средств (Retrait)", description: "Le lien de demande de paiement, décrit dans la FAQ." },
    { title: "Statistiques", description: "Suivi de vos visites et gains par lien." },
  ],
  earningMethods: [
    {
      title: "Consulter les liens payants",
      description:
        "Première méthode de la FAQ : consulter une publicité d'annonceur jusqu'à la redirection. Sans cela, la statistique n'est pas créditée.",
      steps: [
        { title: "Cliquer sur le lien", description: "Le lien s'ouvre dans une fenêtre active avec un timer." },
        { title: "Rester sur la page", description: "La FAQ précise qu'on ne peut pas quitter la fenêtre active ; le timer ne se poursuit pas sinon." },
        { title: "Aller jusqu'à la redirection", description: "Le site de l'annonceur doit être consulté jusqu'à la redirection, sinon les fonds ne sont pas crédités." },
        { title: "Attendre la mise à jour", description: "Les statistiques se mettent généralement à jour sous 2 à 10 minutes." },
      ],
    },
    { title: "Exécuter les tâches des annonceurs", description: "Missions plus variées, avec des consignes propres à chaque annonceur." },
    { title: "Lire les lettres des annonceurs", description: "Ouvrir et lire les messages publicitaires mis en ligne." },
    { title: "Passer les tests des annonceurs", description: "Répondre aux questionnaires / tests publiés par les annonceurs." },
    { title: "Parrainage", description: "La FAQ décrit deuxdoors revenus : un revenu automatique calculé par le système (selon votre statut) et des « médailles » échangeables en argent." },
  ],
  registrationSteps: [
    { step: 1, title: "Ouvrir aviso.bz", description: "Passez par « Commencer à gagner » : vous arrivez sur le site officiel." },
    { step: 2, title: "Créer le compte", description: "Inscription sur le site ; l'offre publique est acceptée à l'inscription." },
    { step: 3, title: "Confirmer l'email sous 7 jours", description: "Sans confirmation, le compte est supprimé après 7 jours." },
    { step: 4, title: "Compléter le profil", description: "Renseignez toutes les informations, y compris les systèmes de paiement, pour obtenir le statut d'exécutant." },
    { step: 5, title: "Commencer par une action simple", description: "Consultez un lien payant ou une lettre pour comprendre la mécanique." },
  ],
  earningGuide: [
    { step: 1, title: "Étape 1 — Inscription et confirmation", description: "Créez le compte et confirmez l'email dans les 7 jours." },
    { step: 2, title: "Étape 2 — Vérification", description: "L'administration vérifie les comptes avant paiement (voir la FAQ sur le retrait)." },
    { step: 3, title: "Étape 3 — Profil complet", description: "Sans profil complet (y compris les paiements), le statut d'exécutant n'apparaît pas." },
    { step: 4, title: "Étape 4 — Trouver les premières actions", description: "Commencez par les liens payants ou les lettres, plus simples que les tests." },
    { step: 5, title: "Étape 5 — Réaliser correctement", description: "Restez sur la fenêtre active et allez jusqu'à la redirection : c'est la condition de crédit." },
    { step: 6, title: "Étape 6 — Vérifier les statistiques", description: "Comptez 2 à 10 minutes : les statistiques se mettent à jour avec un léger délai." },
    { step: 7, title: "Étape 7 — Suivre son solde", description: "Votre compte principal credite les récompenses." },
    { step: 8, title: "Étape 8 — Demander le retrait", description: "Depuis « Вывод средств », une fois par jour, dans la limite de 1 000 roubles par jour." },
    { step: 9, title: "Étape 9 — Contrôle administratif", description: "Après la demande, l'administration vérifie la conformité du compte ; le FAQ annonce un paiement sous 24 h si tout est conforme." },
  ],
  refusedReasons: [
    "Quitter la fenêtre active avant la fin du timer : le timer ne se poursuit pas et la vue n'est pas comptabilisée.",
    "Ne pas aller jusqu'à la redirection du site annonceur : les fonds ne sont pas crédités (FAQ).",
    "Faux rapports d'exécution de tâches : l'administration analyse les rapports (interdit explicite).",
    "Autoclickers, autobrowsers ou accélérateurs de timer : strictement interdits.",
    "Multi-comptes, comptes partagés depuis un même appareil ou données d'identification identiques.",
    "Publication ou envoi de rapports / réponses de tâches à d'autres utilisateurs (interdit).",
    "Compte inactif : les comptes sans connexion pendant 1, 3, 6 ou 12 mois peuvent être supprimés avec remise à zéro des soldes (offre publique).",
  ],
  withdrawal: {
    description:
      "La FAQ décrit la procédure : dans votre compte, cliquez sur le lien « Вывод средств » (Retrait). Les paiements sont effectués via WebMoney, YuMoney et Payeer, en mode automatique. Le retrait est possible une fois par jour, pour un maximum de 1 000 roubles par jour. Après la demande, l'administration vérifie que le compte respecte les règles ; si tout est conforme, le paiement intervient sous 24 h. L'offre publique ajoute que le retrait du compte principal peut être automatique (instantané) ou avec vérification (1 à 4 jours) selon votre statut, qu'il nécessite un numéro de mobile confirmé, et que la première paie peut être soumise à vérification.",
    steps: [
      { title: "Atteindre le seuil affiché", description: "Le seuil n'est pas chiffré dans la FAQ : il dépend de votre statut et des tarifs affichés sur le site." },
      { title: "Ouvrir la section de retrait", description: "Dans votre compte, lien « Вывод средств »." },
      { title: "Choisir le portefeuille", description: "WebMoney, YuMoney ou Payeer selon la FAQ." },
      { title: "Envoyer la demande", description: "Une fois par jour, jusqu'à 1 000 RUB par jour." },
      { title: "Contrôle administratif", description: "L'administration vérifie la conformité du compte." },
      { title: "Recevoir le paiement", description: "Sous 24 h si le compte est conforme (FAQ) ; sinon, une vérification de 1 à 4 jours peut s'appliquer." },
    ],
    methods: ["WebMoney", "YuMoney", "Payeer"],
    minimum: "Non chiffré dans la FAQ — dépend du statut et des tarifs affichés sur le site",
    processingTime: "Jusqu'à 24 h après validation (FAQ) ; l'offre publique prévoit un mode avec vérification de 1 à 4 jours selon le statut",
  },
  conditions: [
    "Un seul compte par personne, et pas plus d'un compte connecté depuis un même appareil (offre publique).",
    "Interdiction de réutiliser des données d'inscription ou de portefeuille identiques sur plusieurs comptes.",
    "Interdiction de recréer un compte après un bannissement.",
    "Interdiction stricte des autoclickers, autobrowsers et accélérateurs de timer.",
    "Interdiction d'envoyer de faux rapports d'exécution de tâches.",
    "Email à confirmer sous 7 jours, sinon suppression du compte.",
    "Suppression possible des comptes inactifs (1, 3, 6 ou 12 mois) avec remise à zéro des soldes.",
    "Langage officiel : russe. Les messages publiés doivent être en russe.",
  ],
  mistakes: [
    { title: "Laisser AdBlock activé", text: "Le site affiche explicitement qu'AdBlock / AdGuard / uBlock empêchent le fonctionnement correct (liens non affichés)." },
    { title: "Quitter la fenêtre du timer", text: "La FAQ est claire : on ne peut pas quitter la fenêtre active, sinon le timer s'arrête." },
    { title: "Oublier la redirection", text: "Le site annonceur doit être consulté jusqu'à la redirection, sinon rien n'est crédité." },
    { title: "Créer un compte de secours", text: "Le multi-compte est l'interdiction la plus sévère et la plus sanctionnée de l'offre publique." },
    { title: "Pseudonyme / informations fausses", text: "Les fausses données sont une violation explicite pouvant entraîner un blocage." },
  ],
  tips: [
    "Complétez votre profil (y compris les paiements) pour obtenir le statut d'exécutant et accéder à plus d'options.",
    "Commencez par les liens payants et les lettres, plus simples que les tests.",
    "Restez sur la fenêtre active jusqu'à la redirection, puis patientez 2 à 10 minutes pour les statistiques.",
    "La FAQ montre que l'administration vérifie le compte avant chaque paiement : gardez un profil irréprochable.",
    "Lisez attentivement chaque tâche avant de l'accepter : les consignes varient d'un annonceur à l'autre.",
    "Gardez la main sur votre karma : la FAQ décrit un mécanisme de karma entre exécutants.",
  ],
  referral: {
    description:
      "Aviso décrit un programme de parrainage à plusieurs niveaux : vous invitez via un lien unique, vous touchez un revenu calculé automatiquement (le montant dépend de votre statut), et vous pouvez obtenir des « médailles » échangeables en argent. Le site dispose aussi de matériaux de promotion dans votre espace personnel et d'un concours de filleuls. Attention : l'offre publique mentionne l'existence d'une « bourse aux filleuls » — vos filleuls peuvent être revendus sur un marché tiers, indépendamment de votre consentement.",
  },
  faq: [
    { question: "Comment gagner de l'argent sur Aviso ?", answer: "La FAQ officielle liste quatre méthodes : consulter les liens payants, exécuter les tâches, lire les lettres et passer les tests des annonceurs." },
    { question: "Puis-je avoir plusieurs comptes ?", answer: "Non, catégoriquement : la FAQ et l'offre publique l'interdisent, et c'est la violation la plus sanctionnée." },
    { question: "Pourquoi je ne vois pas les liens publicitaires ?", answer: "La FAQ suggère de désactiver le pare-feu / anti-spyware, et le site demande de désactiver AdBlock, AdGuard ou uBlock. Si rien ne change, essayez un autre navigateur." },
    { question: "Pourquoi mes statistiques ne se mettent-elles pas à jour ?", answer: "Parce que vous n'avez pas consulté le site annonceur jusqu'à la redirection. Les statistiques se mettent ensuite à jour sous 2 à 10 minutes." },
    { question: "Comment suis-je payé ?", answer: "Via WebMoney, YuMoney ou Payeer, en mode automatique, une fois par jour et jusqu'à 1 000 RUB. Après la demande, l'administration vérifie le compte et paie sous 24 h si tout est conforme." },
    { question: "Comment obtenir le statut « Worker » ?", answer: "En remplissant tous les champs du profil, y compris les comptes des systèmes de paiement (FAQ)." },
    { question: "Le retrait est-il immédiat ?", answer: "Il peut être automatique, mais il passe aussi par une vérification (1 à 4 jours) selon votre statut et les circumstances. La FAQ annonce un paiement sous 24 h après validation." },
    { question: "Y a-t-il un age minimum ?", answer: "L'offre publique ne fixe pas de limite d'âge explicite, mais ne fournit pas non plus de garantie d'accès : lisez les conditions sur le site." },
  ],
  docCoverage: "full",
  officialSources: [
    { title: "Site officiel Aviso", url: "https://aviso.bz/" },
    { title: "FAQ / Aide officielle Aviso", url: "https://aviso.bz/faq" },
    { title: "Offre publique (règles) Aviso", url: "https://aviso.bz/rules" },
  ],
  lastVerified: "2026-10-02",
};