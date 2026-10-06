import type { PlatformGuide } from "./types";

/**
 * Guide Blockbuster — sources officielles : blockme.games (site officiel +
 * FAQ de l'éditeur ELFTECH HK LIMITED), fiche Google Play de l'application
 * et lien d'invitation playbb.fun.
 */
export const blockbusterGuide: PlatformGuide = {
  whatIsIt:
    "Blockbuster (accessible via le lien d'invitation playbb.fun) est un jeu mobile de puzzle de type « block-matching » édité par ELFTECH HK LIMITED. La fiche Google Play la présente sous le nom « Blockbuster - Games & Social » : au-delà du puzzle, l'application propose des éléments sociaux (chat privé, cadeaux virtuels, possibilité d'observer les parties des meilleurs joueurs) et un système de récompenses lié au score et aux invitations.",
  howItWorks:
    "Vous posez des blocs sur un plateau : le score augmente avec le nombre de carrés effacés, et effacer plusieurs lignes d'un seul coup ajoute un multiplicateur. Un mode solo permet de viser un haut score, et des événements de classement (ranking events) récompensent en pièces (coins). Côté social, vous copiez votre lien d'invitation : après vérification de l'inscription de l'ami, vous recevez des gems selon les règles en vigueur dans l'application.",
  callouts: [
    {
      tone: "warning",
      title: "Attention — information contradictoire sur le cash-out des gems",
      text: "La fiche Google Play annonce « Gems can be safely withdrawn – a secure and reliable process », tandis que la FAQ officielle indique que les gems sont une devise virtuelle d'application, non échangeables en argent réel. Les deux informations proviennent de sources officielles : vérifiez la règle en cours dans l'application avant de compter sur un retrait.",
    },
    {
      tone: "info",
      title: "Important — les invitations sont vérifiées",
      text: "Selon la FAQ officielle, les invitations peuvent prendre du temps à vérifier : les installations depuis le même appareil, les comptes répétés ou les méthodes anormales sont filtrés par le contrôle de risque, et le résultat final suit les règles de l'application.",
    },
    {
      tone: "info",
      title: "Important — plateformes disponibles",
      text: "La FAQ précise que la version iPhone (App Store) n'est pas encore disponible, et qu'une version web est jouable directement depuis le site. Le multijoueur en ligne est annoncé en bêta pour une future version (v2).",
    },
  ],
  features: [
    {
      title: "Puzzle évolutif",
      description:
        "Base classique de poses de blocs enrichie de contrôles avancés : déplacer, faire pivoter et retourner les blocs pour créer de meilleurs alignements (fiche Google Play).",
    },
    {
      title: "Mode solo et classements",
      description:
        "Mode solo pour viser les hauts scores, avec des événements de classement récompensés en pièces (fiche Google Play).",
    },
    {
      title: "Invitations récompensées en gems",
      description:
        "Copiez votre lien d'invitation, un ami installe et s'inscrit : après vérification, vous recevez des gems selon les dernières règles affichées dans l'application (FAQ officielle).",
    },
    {
      title: "Observer les meilleurs joueurs",
      description:
        "Vous pouvez regarder les parties en direct des meilleurs joueurs mondiaux, découvrir leurs stratégies et échanger avec la communauté (fiche Google Play).",
    },
    {
      title: "Chat privé et cadeaux virtuels",
      description:
        "Messagerie privée pour rester en contact, envoi et réception de cadeaux virtuels (fiche Google Play). La page « messages » regroupe messages d'inconnus, messages d'amis (chat et historique de cadeaux) et messages système (FAQ officielle).",
    },
    {
      title: "Version web sans installation",
      description:
        "Le site officiel propose une version web jouable sans installer l'application ; certaines fonctions, comportements de compte et règles de récompense peuvent différer selon la version (FAQ officielle).",
    },
  ],
  dashboard: [
    {
      title: "Messages",
      description:
        "Messages d'inconnus, messages d'amis (chat et historique de cadeaux) et messages système pour les mises à jour et événements (FAQ officielle).",
    },
    {
      title: "Score et classements",
      description: "Votre score en mode solo et les événements de classement en cours.",
    },
    {
      title: "Invitations et récompenses",
      description:
        "Votre lien d'invitation, les invitations en cours de vérification et les gems reçues.",
    },
  ],
  earningMethods: [
    {
      title: "Jouer en mode solo",
      description:
        "Chaque partie fait progresser votre score : effacer plusieurs lignes d'un coup augmente le multiplicateur, et les événements de classement récompensent en pièces.",
      steps: [
        {
          title: "Lancer une partie",
          description: "Posez les blocs proposés sur le plateau.",
        },
        {
          title: "Planifier les clears multiples",
          description:
            "Préparer plusieurs lignes d'un coup est plus rentable que de poser les blocs un par un (FAQ officielle).",
        },
        {
          title: "Utiliser la fonction « replace »",
          description:
            "Elle permet de rafraîchir les blocs disponibles quand les pièces ne conviennent pas : à utiliser avec parcimonie.",
        },
      ],
    },
    {
      title: "Inviter des amis (gems)",
      description:
        "Copiez votre lien d'invitation, un ami installe et s'inscrit : après vérification, les gems sont créditées selon les dernières règles de l'application.",
    },
    {
      title: "Événements de classement",
      description:
        "Les événements de ranking publiés dans l'application récompensent les hauts scores (la fiche Google Play signale notamment une augmentation des prix du classement quotidien).",
    },
  ],
  registrationSteps: [
    {
      step: 1,
      title: "Ouvrir le lien d'invitation",
      description:
        "Passez par « Commencer à gagner » : le lien playbb.fun vous redirige vers l'installation officielle de Blockbuster.",
    },
    {
      step: 2,
      title: "Installer l'application",
      description:
        "Application Android sur Google Play (le site officiel indique que la version iPhone n'est pas encore publiée) — ou jouez à la version web depuis le site.",
    },
    {
      step: 3,
      title: "Créer le compte",
      description: "Inscription dans l'application, puis découverte du mode solo.",
    },
    {
      step: 4,
      title: "Copier votre lien d'invitation",
      description:
        "Depuis l'application, pour l'envoyer à vos contacts : leurs inscriptions sont vérifiées avant crédit des gems.",
    },
    {
      step: 5,
      title: "Suivre messages et classements",
      description:
        "Les messages système annoncent les événements, mises à jour et le lancement du multijoueur.",
    },
  ],
  earningGuide: [
    {
      step: 1,
      title: "Étape 1 — Installation et inscription",
      description: "Compte créé via le lien d'invitation officiel.",
    },
    {
      step: 2,
      title: "Étape 2 — Première partie",
      description:
        "Jouez en mode solo pour comprendre la mécanique de pose et de score.",
    },
    {
      step: 3,
      title: "Étape 3 — Optimiser les clears",
      description:
        "Visez les effacements multiples : ils déclenchent un multiplicateur de score.",
    },
    {
      step: 4,
      title: "Étape 4 — Participer aux classements",
      description: "Les événements de ranking récompensent les meilleurs scores en pièces.",
    },
    {
      step: 5,
      title: "Étape 5 — Inviter des amis",
      description:
        "Partagez votre lien : les gems sont créditées après vérification de l'invitation.",
    },
    {
      step: 6,
      title: "Étape 6 — Suivre vos récompenses",
      description:
        "Vérifiez les gems et l'état de vos invitations dans l'application, et lisez les règles en vigueur affichées dans l'app.",
    },
    {
      step: 7,
      title: "Étape 7 — Vérifier le retrait",
      description:
        "Les sources officielles divergent sur le cash-out des gems : confirmez la possibilité et les conditions de retrait dans l'application.",
    },
  ],
  refusedReasons: [
    "Invitation encore en cours de vérification (délai variable).",
    "Installation réalisée depuis un appareil déjà utilisé (filtrage anti-fraude).",
    "Comptes répétés ou méthodes d'invitation anormales détectés par le contrôle de risque.",
    "Invitation jugée invalide : la réponse officielle de l'éditeur sur Google Play indique que la récompense dépend de la qualité de l'invite et que certaines invitations invalides ne reçoivent pas de récompense.",
  ],
  withdrawal: {
    description:
      "Les sources officielles divergent : la fiche Google Play annonce un retrait des gems « sécurisé et fiable », alors que la FAQ officielle décrit les gems comme une devise virtuelle d'application sans valeur monétaire réelle. Aucun seuil minimum, aucune méthode et aucun délai ne sont publiés sur les sites officiels : vérifiez la procédure de retrait dans l'application avant de compter sur un paiement.",
    steps: [
      {
        title: "Ouvrir la section retrait de l'application",
        description: "La procédure exacte n'est pas documentée sur le site officiel.",
      },
      {
        title: "Contrôler les conditions en vigueur",
        description:
          "Les règles de récompense et de retrait évoluent et sont affichées dans l'application.",
      },
      {
        title: "Confirmer votre solde et votre identité",
        description:
          "Une vérification peut être demandée dans l'application : suivez les instructions affichées.",
      },
    ],
    methods: ["Non publiées sur les sources officielles (à vérifier dans l'application)"],
    minimum: "Non publié sur les sources officielles",
    processingTime: "Non publié sur les sources officielles",
  },
  conditions: [
    "Les invitations sont soumises à vérification ; le contrôle de risque filtre les installations sur le même appareil, les comptes répétés et les méthodes anormales.",
    "Les récompenses d'invitation suivent « les dernières règles affichées dans l'application », susceptibles d'évoluer.",
    "Selon la FAQ officielle, les gems sont une devise virtuelle d'application sans attributs de monnaie réelle.",
    "La version iPhone n'est pas encore disponible ; le multijoueur en ligne est annoncé en bêta pour une version ultérieure.",
  ],
  mistakes: [
    {
      title: "Compter sur un cash-out immédiat des gems",
      text: "La fiche Google Play et la FAQ officielle se contredisent : vérifiez la règle en cours dans l'application.",
    },
    {
      title: "Inviter depuis le même appareil ou avec plusieurs comptes",
      text: "Ces invitations sont filtrées par le contrôle de risque et peuvent ne jamais être créditées.",
    },
    {
      title: "Poser les blocs sans planifier",
      text: "Effacer plusieurs lignes d'un seul coup déclenche un multiplicateur : mieux vaut préparer les clears.",
    },
  ],
  tips: [
    "Préparez les effacements multiples plutôt que de vider le plateau ligne par ligne.",
    "Gardez des utilisations de la fonction « replace » pour les situations bloquantes.",
    "Lisez les messages système : ils annoncent les événements de classement et les nouveautés.",
    "Testez la version web si vous ne pouvez pas installer l'application Android.",
  ],
  referral: {
    description:
      "Le programme d'invitation fonctionne ainsi (FAQ officielle) : vous copiez votre lien d'invitation, un ami installe l'application et s'inscrit, l'invitation est vérifiée par le système, puis vous recevez des gems selon les dernières règles de l'application. L'éditeur précise sur Google Play que la récompense dépend de la qualité de l'invite : certaines invitations invalides ne reçoivent aucune récompense.",
  },
  faq: [
    {
      question: "Comment recevoir les gems d'invitation ?",
      answer:
        "Copiez votre lien d'invitation, invitez un ami à installer et s'inscrire : après vérification, les gems sont créditées selon les dernières règles de l'application.",
    },
    {
      question: "Les gems peuvent-elles être échangées en argent ?",
      answer:
        "Les sources officielles divergent : la FAQ indique que les gems sont une devise virtuelle non cashable, tandis que la fiche Google Play annonce un retrait des gems. Vérifiez la règle en cours dans l'application.",
    },
    {
      question: "Pourquoi mon invitation n'est-elle pas comptée ?",
      answer:
        "La vérification prend du temps. Les installations sur le même appareil, les comptes répétés et les méthodes anormales sont filtrés par le contrôle de risque ; le résultat final suit les règles de l'application.",
    },
    {
      question: "Puis-je jouer sans installer l'application ?",
      answer:
        "Oui, la version web est jouable depuis le site officiel ; certaines fonctions et règles de récompense peuvent toutefois différer de l'application.",
    },
    {
      question: "Blockbuster est-il disponible sur iPhone ?",
      answer:
        "Non : la FAQ officielle indique que la sortie App Store n'est pas encore disponible.",
    },
    {
      question: "Y a-t-il du multijoueur ?",
      answer:
        "Une bêta multijoueur en ligne est annoncée pour une prochaine version (v2) ; la date est communiquée via les messages système.",
    },
    {
      question: "Comment contacter le support ?",
      answer:
        "Par email : support@blockme.games (site officiel) ou support@elftech.hk (contact affiché sur Google Play).",
    },
  ],
  docCoverage: "partial",
  officialSources: [
    { title: "Site officiel Blockbuster", url: "https://www.blockme.games/" },
    { title: "FAQ officielle Blockbuster", url: "https://www.blockme.games/faq.html" },
    {
      title: "Fiche Google Play — Blockbuster - Games & Social",
      url: "https://play.google.com/store/apps/details?id=hk.elftech.block",
    },
    { title: "Lien d'invitation officiel playbb.fun", url: "https://playbb.fun/" },
  ],
  lastVerified: "2026-10-06",
};
