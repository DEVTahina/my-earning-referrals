import type { PlatformGuide } from "./types";

/**
 * Guide Glow Live — sources officielles : biubiuclub.com (site officiel),
 * fiche Google Play / App Store de l'éditeur BIUBIUBIU LIMITED et pages
 * d'invitation app.biubiuclub.com.
 */
export const glowLiveGuide: PlatformGuide = {
  whatIsIt:
    "Glow Live (biubiuclub.com) est une application mobile de chat vocal en groupe et de divertissement éditée par BIUBIUBIU LIMITED. La fiche Google Play la décrit comme une communauté de discussion et de loisirs en ligne : salons de groupe en temps réel, jeux entre amis et rencontres. Le site officiel résume l'esprit du service avec la phrase « Friends are the family you choose for yourself ».",
  howItWorks:
    "Vous créez un compte dans l'application, rejoignez ou créez une salle (party) et échangez en voix ou en texte avec les autres membres. L'application propose des jeux vocaux, des publications du quotidien, des cadeaux et des personnalisations (cadres d'avatar, décorations). Un volet récompenses existe côté invitation : l'application affiche des écrans dédiés (invitations, récompenses, retrait) et le site officiel promeut l'idée de gagner de l'argent en chattant.",
  callouts: [
    {
      tone: "warning",
      title: "Attention — promesses de gains promotionnelles",
      text: "La description officielle de la page d'invitation annonce « earn money by chatting — $1 per hour ». Il s'agit d'un argument promotionnel du site officiel, pas d'un montant garanti : aucun tarif horaire ni seuil de gain n'est contractuel.",
    },
    {
      tone: "info",
      title: "Important — disponibilité par région",
      text: "Certains avis Google Play signalent un refus d'accord avec le message « This service is not yet in your region ». Vérifiez d'abord que le service est disponible dans votre pays avant de créer un compte.",
    },
    {
      tone: "info",
      title: "Important — données collectées",
      text: "La fiche Google Play indique que l'application collecte des informations personnelles et financières, partage des identifiants d'appareil avec des tiers et chiffre les données en transit. Consultez la politique de confidentialité avant d'accepter les permissions.",
    },
  ],
  features: [
    {
      title: "Parties en temps réel",
      description:
        "Salons de groupe animés : discussions, rencontre d'amis et jeux, sans interruption (fiche Google Play).",
    },
    {
      title: "Salons gratuits",
      description:
        "Création de salons de discussion et chat vocal/texte gratuits pour se connecter avec les autres (fiche Google Play).",
    },
    {
      title: "Publications et recommandations",
      description:
        "Partagez votre quotidien, trouvez des amis selon vos centres d'intérêt et rejoignez instantanément les salons des utilisateurs en ligne (fiche Google Play).",
    },
    {
      title: "Activités et jeux vocaux",
      description:
        "Chant, jeux vocaux et autres animations entre amis dans les salons (fiche Google Play).",
    },
    {
      title: "Personnalisation",
      description:
        "Cadeaux, cadres d'avatar et décorations pour personnaliser votre profil (fiche Google Play).",
    },
    {
      title: "Invitations et récompenses",
      description:
        "L'application contient des écrans d'invitation, de récompenses et de retrait (chaînes officielles « Invite Friends », « My Rewards », « Withdrawal Records »), ainsi qu'un volet programme d'agence.",
    },
  ],
  profileSetup: [
    {
      step: 1,
      title: "Installer l'application",
      description: "Disponible sur Google Play et sur l'App Store (liens du site officiel).",
    },
    {
      step: 2,
      title: "Créer le compte",
      description: "Inscription dans l'application, puis connexion avec votre profil.",
    },
    {
      step: 3,
      title: "Compléter le profil",
      description: "Photo, pseudo et décoration (cadre d'avatar) : le profil est visible dans les salons.",
    },
    {
      step: 4,
      title: "Vérifier les permissions",
      description:
        "Micro pour le chat vocal, et les permissions éventuelles listées dans la fiche de l'application (localisation, notifications).",
    },
  ],
  dashboard: [
    {
      title: "Salons et amis",
      description: "Les salons en ligne, vos contacts et les publications du fil.",
    },
    {
      title: "Invitations",
      description:
        "Votre lien d'invitation et la liste des invités (la chaîne officielle « invitation/invite_list » y est consacrée).",
    },
    {
      title: "Récompenses",
      description:
        "Écrans « My Rewards » et « Reward Details » : détails des récompenses et avancement des tâches.",
    },
    {
      title: "Retrait",
      description:
        "Écrans « Withdraw » et « Withdrawal Records » : montant, demande et historique des retraits.",
    },
  ],
  earningMethods: [
    {
      title: "Inviter des amis",
      description:
        "Le site officiel et l'application mettent en avant l'invitation : l'application affiche des écrans dédiés et l'enregistrement des invitations vérifiées.",
    },
    {
      title: "Compléter des tâches",
      description:
        "L'application propose des tâches récompensées (chaîne officielle « Complete tasks to receive rewards ») et des récompenses à récupérer.",
    },
    {
      title: "Activités de chat (argumentaire officiel)",
      description:
        "La page d'invitation officielle promeut l'idée de gagner de l'argent en chattant (« $1 per hour ») : promesse promotionnelle à vérifier dans l'application, sans montant garanti.",
    },
    {
      title: "Programme d'agence",
      description:
        "L'application comporte un parcours « agency » (nom d'agence, justificatif d'exploitation des revenus de l'agence) destiné aux recruteurs de membres et de hosts.",
    },
  ],
  registrationSteps: [
    {
      step: 1,
      title: "Ouvrir le lien d'invitation",
      description:
        "Passez par « Commencer à gagner » : vous arrivez sur la page d'invitation officielle app.biubiuclub.com.",
    },
    {
      step: 2,
      title: "Installer l'application",
      description: "Google Play ou App Store, selon votre appareil.",
    },
    {
      step: 3,
      title: "Créer le compte",
      description: "Inscription dans l'application, puis complétion du profil.",
    },
    {
      step: 4,
      title: "Rejoindre une salle",
      description: "Entrez dans un salon existant pour découvrir le chat vocal et les jeux.",
    },
    {
      step: 5,
      title: "Explorer les récompenses",
      description: "Consultez les écrans d'invitation, de récompenses et de retrait pour connaître les règles en vigueur.",
    },
  ],
  earningGuide: [
    {
      step: 1,
      title: "Étape 1 — Installation et inscription",
      description: "Compte créé depuis le lien d'invitation officiel.",
    },
    {
      step: 2,
      title: "Étape 2 — Découvrir les salons",
      description: "Rejoignez des parties pour comprendre l'organisation de l'application.",
    },
    {
      step: 3,
      title: "Étape 3 — Compléter les tâches",
      description: "Les tâches récompensées et les récompenses à récupérer sont affichées dans l'application.",
    },
    {
      step: 4,
      title: "Étape 4 — Inviter des amis",
      description: "Partagez votre lien d'invitation et suivez les invitations vérifiées.",
    },
    {
      step: 5,
      title: "Étape 5 — Suivre vos récompenses",
      description: "Les écrans « My Rewards » et « Reward Details » détaillent vos gains.",
    },
    {
      step: 6,
      title: "Étape 6 — Vérifier les conditions de retrait",
      description: "Seuils, méthode et délais ne sont pas publiés : vérifiez l'écran de retrait dans l'application.",
    },
    {
      step: 7,
      title: "Étape 7 — Retirer",
      description: "Soumettez la demande depuis l'écran de retrait et suivez l'historique correspondant.",
    },
  ],
  refusedReasons: [
    "Invitation non encore vérifiée par le système de l'application.",
    "Compte ou appareil déjà utilisé pour une invitation (filtrage anti-fraude classique de ce type d'application).",
    "Région non supportée : l'application peut refuser la connexion (avis Google Play).",
    "Vérification d'identité ou de visage non aboutie (signalée par des avis Google Play).",
  ],
  withdrawal: {
    description:
      "L'application contient un parcours de retrait (écrans « Withdraw », « Withdrawal Records », « Withdrawal application submitted »), mais aucun seuil minimum, méthode ni délai n'est publié sur les sites officiels. Ces informations se trouvent dans l'application, une fois connecté : vérifiez-les avant de compter sur un paiement.",
    steps: [
      {
        title: "Ouvrir l'écran de retrait",
        description: "Depuis l'espace récompenses / portefeuille de l'application.",
      },
      {
        title: "Saisir le montant",
        description:
          "L'application indique si le montant dépasse votre solde (message officiel « Withdrawal amount exceeds balance »).",
      },
      {
        title: "Suivre la demande",
        description:
          "La demande est enregistrée (« Withdrawal application submitted ») et son historique reste consultable dans « Withdrawal Records ».",
      },
    ],
    methods: ["Retrait depuis l'application (méthodes affichées dans l'app)"],
    minimum: "Non publié sur les sources officielles",
    processingTime: "Non publié sur les sources officielles",
  },
  conditions: [
    "Les récompenses et le retrait suivent les règles affichées dans l'application, susceptibles d'évoluer.",
    "Le service peut refuser l'accès depuis certaines régions.",
    "L'application collecte des données personnelles et financières et partage des identifiants d'appareil : consultez la politique de confidentialité.",
    "Les montants annoncés sur les pages d'invitation (par exemple « $1 per hour ») sont promotionnels et non contractuels.",
  ],
  mistakes: [
    {
      title: "Compter sur le tarif horaire annoncé",
      text: "« $1 per hour » est un argument promotionnel du site officiel, pas une garantie de gain.",
    },
    {
      title: "Créer un compte dans une région non supportée",
      text: "Des avis Google Play rapportent un blocage « This service is not yet in your region » : vérifiez d'abord la disponibilité.",
    },
    {
      title: "Ignorer les conditions de retrait",
      text: "Seuils et délais ne sont publiés nulle part : consultez l'écran de retrait avant d'investir du temps.",
    },
  ],
  tips: [
    "Lisez les écrans d'aide de l'application : les règles de récompenses et de retrait y sont détaillées.",
    "Complétez votre profil : les salons mettent en avant les profils complets et personnalisés.",
    "Invitez via votre lien officiel et suivez les invitations vérifiées dans l'application.",
    "Vérifiez la disponibilité du service dans votre région avant de commencer.",
  ],
  referral: {
    description:
      "L'application propose un parcours d'invitation complet : lien d'invitation, liste des invités, récompenses liées aux invitations vérifiées et suivi dans les écrans « My Rewards » / « Withdrawal Records ». Le site officiel promeut activement l'invitation d'amis ; les conditions précises (montant, vérification, plafonds) sont affichées dans l'application et évoluent.",
  },
  faq: [
    {
      question: "Qu'est-ce que Glow Live ?",
      answer:
        "Une application de chat vocal en groupe et de divertissement : salons en temps réel, jeux entre amis, publications et rencontres, éditée par BIUBIUBIU LIMITED.",
    },
    {
      question: "Combien peut-on gagner ?",
      answer:
        "La page d'invitation officielle annonce « $1 per hour » : il s'agit d'un argument promotionnel. Aucun montant garanti n'est publié ; consultez les règles dans l'application.",
    },
    {
      question: "Comment fonctionne le programme d'invitation ?",
      answer:
        "Vous partagez votre lien d'invitation ; l'application enregistre les invitations vérifiées et affiche les récompenses associées dans ses écrans dédiés.",
    },
    {
      question: "Comment retirer ses gains ?",
      answer:
        "Depuis l'écran de retrait de l'application (« Withdraw »), avec un historique consultable (« Withdrawal Records »). Seuils, méthodes et délais ne sont pas publiés sur le site officiel.",
    },
    {
      question: "L'application est-elle disponible partout ?",
      answer:
        "Non : des avis Google Play rapportent un refus d'accès avec le message « This service is not yet in your region ». Vérifiez la disponibilité dans votre pays.",
    },
    {
      question: "Sur quelles plateformes est-elle disponible ?",
      answer:
        "Android (Google Play) et iOS (App Store), selon les liens publiés sur le site officiel biubiuclub.com.",
    },
    {
      question: "Comment contacter le support ?",
      answer: "Par email : feedback@biubiufun.com (contact affiché sur Google Play).",
    },
  ],
  docCoverage: "partial",
  officialSources: [
    { title: "Site officiel Glow Live", url: "https://www.biubiuclub.com/" },
    {
      title: "Fiche Google Play — Glow Live",
      url: "https://play.google.com/store/apps/details?id=com.biubiuclub.biubiuclubchat",
    },
    {
      title: "Fiche App Store — Glow Live",
      url: "https://apps.apple.com/us/app/glow-live-voice-chat/id1620753606",
    },
    { title: "Pages d'invitation officielles", url: "https://app.biubiuclub.com/" },
  ],
  lastVerified: "2026-10-06",
};
