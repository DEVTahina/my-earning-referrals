import type { PlatformGuide } from "./types";

/**
 * Guide Surveoo — sources officielles : surveoo.com/fr/ et surveoo.com/fr/bien-demarrer
 */
export const surveooGuide: PlatformGuide = {
  whatIsIt:
    "Surveoo est un panel de sondages rémunérés : vous répondez à des enquêtes d'opinion commandées par des marques et des instituts, et vous êtes rémunéré pour le temps que vous y consacrez. Les études durent de 1 à 15 minutes, et jusqu'à 75 sondages peuvent être disponibles chaque jour. Les récompenses sont versées par virement bancaire, PayPal, Amazon, carte Visa prépayée ou cartes cadeaux.",
  howItWorks:
    "Vous créez un compte gratuit avec quelques informations de base (nom, prénom, genre, âge, email, localisation), vous confirmez votre adresse email, et vous accédez immédiatement à une liste de sondages personnalisée. Pour chaque enquête, la durée moyenne, la récompense, la thématique et l'institut partenaire sont affichés avant de commencer. Vos récompenses se cumulent dans votre tableau de bord, puis vous les retirez une fois le seuil atteint.",
  callouts: [
    {
      tone: "info",
      title: "Important — 18 ans minimum",
      text: "Le site précise que tout le monde peut participer à la seule condition d'avoir plus de 18 ans. L'inscription est gratuite et ne demande ni carte bancaire, ni donnée sensible.",
    },
    {
      tone: "tip",
      title: "Conseil — la régularité prime",
      text: "Le guide de démarrage de Surveoo insiste : la liste est mise à jour en continu et les meilleures enquêtes partent vite, car chaque étude recherche un nombre limité de répondants. Se connecter régulièrement, même quelques minutes, change tout.",
    },
    {
      tone: "info",
      title: "Important — vos réponses restent anonymes",
      text: "Le site indique que vos informations ne sont jamais revendues et que vos réponses restent anonymes. Il précise également travailler avec des instituts reconnus (CPX Research, Cint, Toluna, PureSpectrum, Lucid).",
    },
  ],
  features: [
    { title: "Inscription en 1 minute", description: "Inscription gratuite en moins d'une minute, sans donnée sensible ni carte bancaire." },
    { title: "Liste de sondages personnalisée", description: "Les enquêtes correspondent à votre profil et vos centres d'intérêt." },
    { title: "Informations affichées avant de commencer", description: "Durée moyenne, récompense, thématique et institut partenaire." },
    { title: "Notification par email", description: "Le site indique prévenir par email lorsqu'une étude correspond à votre profil." },
    { title: "Tableau de bord de progression", description: "Nombre de sondages complétés et récompenses cumulées, en temps réel." },
    { title: "Multi-appareils", description: "Smartphone, tablette ou ordinateur : le site s'adapte à tous les écrans." },
  ],
  profileSetup: [
    {
      step: 1,
      title: "Renseigner vos informations de base",
      description:
        "Le guide de démarrage cite précisément : nom, prénom, genre, âge, email et localisation. Le site précise qu'aucune donnée sensible et aucune carte bancaire ne sont demandées.",
      tips: ["Restez cohérent avec vos informations réelles : elles servent à cibler les enquêtes adaptées."],
    },
    {
      step: 2,
      title: "Confirmer votre adresse email",
      description:
        "Le site précise qu'une fois le compte confirmé par email, vous accédez à votre liste de sondages personnalisée. C'est l'email qui vous permet aussi d'être prévenu des études qui correspondent à votre profil.",
    },
    {
      step: 3,
      title: "Renseigner vos préférences",
      description:
        "Le site met en avant des sondages « personnalisés » correspondant à vos centres d'intérêt : plus vos préférences sont complètes, plus les enquêtes Cibleront bien.",
    },
    {
      step: 4,
      title: "Vérifier vos moyens de paiement",
      description:
        "Les méthodes disponibles dépendent de votre pays : virement, PayPal, Amazon, Visa prépayée ou cartes cadeaux.",
    },
  ],
  dashboard: [
    { title: "Liste de sondages", description: "Vos enquêtes personnalisées, avec durée et récompense affichées." },
    { title: "Tableau de bord", description: "Nombre de sondages complétés et récompenses cumulées, en temps réel." },
    { title: "Compte / profil", description: "Vos informations et préférences." },
    { title: "Retrait", description: "L'espace dédié pour demander un versement une fois le seuil atteint." },
  ],
  earningMethods: [
    {
      title: "Sondages rémunérés",
      description: "La méthode principale : répondre à des enquêtes pour aider les marques à améliorer leurs produits.",
      steps: [
        { title: "Ouvrir la liste de sondages", description: "Vos enquêtes personnalisées s'affichent avec durée, récompense et thématique." },
        { title: "Choisir un sondage", description: "Vous choisissez librement ceux qui vous plaisent ; certains affichent aussi la note donnée par les membres." },
        { title: "Vérifier la durée et la récompense", description: "Ces informations sont affichées avant de commencer, pour éviter les mauvaises surprises." },
        { title: "Répondre honnêtement", description: "Des réponses de qualité vous font gagner plus d'enquêtes mieux rémunérées." },
        { title: "Terminer jusqu'au bout", description: "Un sondage quitté en cours de route n'est généralement pas rémunéré." },
        { title: "Suivre vos récompenses", description: "Elles se cumulent dans votre tableau de bord." },
      ],
    },
    {
      title: "Bonus de régularité",
      description:
        "Le guide de démarrage met en avant la connexion régulière : les meilleures enquêtes partent vite et les membres réguliers cumulent le plus.",
    },
  ],
  registrationSteps: [
    { step: 1, title: "Ouvrir Surveoo", description: "Passez par « Commencer à gagner » : vous arrivez sur surveoo.com." },
    {
      step: 2,
      title: "Créer le compte (gratuit, ~1 minute)",
      description:
        "Nom, prénom, genre, âge, email et localisation : ce sont les seules informations demandées.",
      tips: ["Aucune carte bancaire n'est demandée : c'est un point de vigilance rassurant."],
    },
    { step: 3, title: "Confirmer votre email", description: "La confirmation email débloque votre liste de sondages personnalisée." },
    { step: 4, title: "Accéder à vos premier sondages", description: "Le site indique un accès immédiat aux enquêtes après confirmation." },
  ],
  earningGuide: [
    { step: 1, title: "Étape 1 — Inscription", description: "Compte créé gratuitement en moins d'une minute." },
    { step: 2, title: "Étape 2 — Confirmation email", description: "Obligatoire pour accéder à votre liste personnalisée." },
    { step: 3, title: "Étape 3 — Compléter vos préférences", description: "Elles déterminent les enquêtes qui vous seront proposées." },
    { step: 4, title: "Étape 4 — Trouver les premiers sondages", description: "La liste apparaît sur votre tableau de bord et se met à jour en continu." },
    { step: 5, title: "Étape 5 — Choisir un sondage", description: "Vérifiez la durée et la récompense avant de commencer." },
    { step: 6, title: "Étape 6 — Répondre", description: "De manière honnête et cohérente, sans précipitation." },
    { step: 7, title: "Étape 7 — Terminer le sondage", description: "Un sondage abandonné n'est pas rémunéré." },
    { step: 8, title: "Étape 8 — Suivre vos récompenses", description: "Le tableau de bord suit le nombre de sondages et le cumul." },
    { step: 9, title: "Étape 9 — Atteindre le seuil de retrait", description: "Une fois le seuil atteint, vous demandez un versement depuis l'espace dédié." },
    { step: 10, title: "Étape 10 — Choisir votre méthode", description: "Virement, PayPal, Amazon, Visa prépayée ou cartes cadeaux, selon votre pays." },
  ],
  refusedReasons: [
    "Profil non correspondant : si le sondage cible un profil précis et que le vôtre ne correspond plus, l'enquête se termine prématurément.",
    "Réponses non sincères ou incohérentes : le site insiste sur l'honnêteté des réponses.",
    "Sondage quitté en cours de route (non rémunéré).",
    "Quota de répondants atteint : les études recherchent un nombre limité de personnes.",
  ],
  withdrawal: {
    description:
      "Le site indique que les récompenses sont versées sous 48 h une fois le seuil de retrait atteint. Les méthodes proposées sont : virement bancaire (SEPA et SWIFT), PayPal, carte cadeau Amazon, carte Visa prépayée, et une large sélection de cartes cadeaux (Nike, Uber, Spotify, PlayStation Store…). Les options s'adaptent au pays de résidence et de nouvelles solutions sont ajoutées régulièrement.",
    steps: [
      { title: "Atteindre le seuil de retrait", description: "Le site explique que vous recevez toujours les récompenses cumulées une fois ce seuil atteint." },
      { title: "Ouvrir l'espace de retrait", description: "Rendez-vous dans l'espace dédié depuis votre tableau de bord." },
      { title: "Choisir votre méthode", description: "Virement (SEPA/SWIFT), PayPal, Amazon, Visa prépayée ou carte cadeau." },
      { title: "Valider la demande", description: "Vous indiquez le moyen de versement souhaité." },
      { title: "Recevoir vos récompenses", description: "Le site annonce un traitement sous 48 h." },
    ],
    methods: ["Virement bancaire (SEPA / SWIFT)", "PayPal", "Carte cadeau Amazon", "Carte Visa prépayée", "Cartes cadeaux (Nike, Uber, Spotify, PlayStation Store…)"],
    processingTime: "Versement annoncé sous 48 h",
  },
  conditions: [
    "18 ans minimum pour participer.",
    "Inscription gratuite, sans donnée sensible ni carte bancaire demandée.",
    "Les réponses doivent être honnêtes et cohérentes.",
    "Les réponses sont anonymes et vos informations ne sont pas revendues.",
    "Les méthodes de paiement dépendent du pays de résidence.",
    "Les récompenses et la disponibilité des sondages varient selon les pays (mention explicite du site).",
  ],
  mistakes: [
    { title: "Abandonner un sondage", text: "Un sondage quitté en cours de route n'est pas rémunéré : terminiez-le." },
    { title: "Répondre au hasard", text: "Des réponses de qualité sont ce qui vous fait accéder aux enquêtes les mieux rémunérées." },
    { title: "Ne pas confirmer son email", text: "Sans confirmation, vous n'avez pas accès à votre liste de sondages personnalisée." },
    { title: "Se connecter une fois par mois", text: "Le guide de démarrage insiste : les meilleures enquêtes partent vite, la régularité est le vrai levier." },
  ],
  tips: [
    "Connectez-vous régulièrement, même quelques minutes : c'est le conseil le plus répété par le site lui-même.",
    "Lisez la durée et la récompense avant de commencer : tout est affiché à l'avance.",
    "Consultez vos emails : le site prévient lorsqu'une étude correspond bien à votre profil.",
    "Choisissez un moyen de retrait adapté à votre pays : virement et PayPal sont les plus universels.",
    "Restez cohérent dans vos réponses sur le long terme : c'est ce qui entretient la qualité de votre profil.",
  ],
  referral: {
    description:
      "Surveoo fonctionne avec un programme de parrainage : vos filleuls s'inscrivent via votre lien et vous êtes rémunéré sur leur activité. Les taux et conditions précis sont indiqués dans votre espace personnel et peuvent évoluer : vérifiez-les sur place plutôt que de supposer un montant.",
  },
  faq: [
    { question: "L'inscription est-elle vraiment gratuite ?", answer: "Oui : le site indique une inscription 100 % gratuite, en 1 minute, sans carte bancaire et sans donnée sensible." },
    { question: "Pourquoi ne vois-je aucun sondage ?", answer: "Vérifiez que votre email est confirmé et que votre profil est complet : c'est ce qui déclenche l'envoi d'enquêtes correspondant à votre profil." },
    { question: "Pourquoi suis-je exclu d'un sondage en cours de route ?", answer: "Chaque enquête cible un profil précis et un nombre limité de répondants. Si votre profil ne correspond plus, le sondage se termine : ce n'est pas une erreur de votre part." },
    { question: "Un sondage abandonné est-il payé ?", answer: "Non : un sondage quitté en cours de route n'est généralement pas rémunéré." },
    { question: "Comment suis-je payé ?", answer: "Par virement bancaire (SEPA / SWIFT), PayPal, carte cadeau Amazon, carte Visa prépayée ou cartes cadeaux, selon votre pays. Le site annonce un traitement sous 48 h." },
    { question: "Mes données sont-elles protégées ?", answer: "Le site indique que vos informations ne sont jamais revendues à des tiers et que vos réponses restent 100 % anonymes." },
    { question: "Avec qui Surveoo travaille-t-il ?", answer: "Le site cite des instituts reconnus : CPX Research, Cint, Toluna, PureSpectrum, Lucid." },
    { question: "Quel âge faut-il avoir ?", answer: "Plus de 18 ans, c'est la condition indiquée sur le site." },
  ],
  docCoverage: "full",
  officialSources: [
    { title: "Site officiel Surveoo", url: "https://www.surveoo.com/fr/" },
    { title: "Guide officiel « Bien démarrer sur Surveoo »", url: "https://www.surveoo.com/fr/bien-demarrer" },
  ],
  lastVerified: "2026-10-02",
};