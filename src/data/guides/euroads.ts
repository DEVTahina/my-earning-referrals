import type { PlatformGuide } from "./types";

/**
 * Guide EuroAds — sources officielles : euroads.biz et euroads.biz/en/faq
 */
export const euroadsGuide: PlatformGuide = {
  whatIsIt:
    "EuroAds est un réseau publicitaire européen (euroads.biz) qui fonctionne à double sens : les annonceurs y lancent des campagnes (trafic, Telegram, YouTube, Instagram, TikTok, bannières, CPA), et les exécutants gagnent de l'argent en réalisant les missions proposées dans la section « Earn ». Tout est libellé en euros (EUR) sur un solde unique.",
  howItWorks:
    "Un exécutant s'inscrit, ouvre la section « Earn », choisit une mission disponible (visites de trafic, tâches sociales, etc.), la réalise conformément aux instructions, puis la récompense est créditée sur son solde en EUR après contrôle de la mission. Chaque semaine, des « quêtes » EuroPass ajoutent des récompenses supplémentaires. Le même solde sert à retirer ses gains ou à acheter des services publicitaires : ce n'est pas un compte d'épargne et ce n'est pas un placement financier.",
  callouts: [
    {
      tone: "info",
      title: "Important — un compte, une personne",
      text: "EuroAds indique qu'une personne = un compte. Les comptes liés (même appareil, même IP, mêmes moyens de paiement, comportement similaire) peuvent être gelés ou bannis, avec annulation des bonus et des récompenses de parrainage. Les gains d'un compte banni ne sont pas remboursés.",
    },
    {
      tone: "warning",
      title: "Attention — vérifications de conformité",
      text: "La FAQ précise qu'EuroAds peut demander une pièce d'identité ou des informations complémentaires, retarder un retrait ou bloquer temporairement un compte en cas d'activité suspecte. Coopérer avec le support accélère le traitement.",
    },
  ],
  features: [
    {
      title: "Missions dans la section Earn",
      description:
        "Missions de trafic, tâches sociales et autres jobs : la récompense est créditée sur le solde EUR après vérification.",
    },
    {
      title: "Quêtes hebdomadaires EuroPass",
      description:
        "Un ensemble d'objectifs hebdomadaires (tâches, trafic, actions sociales, gains) à valider pour obtenir des récompenses. La progression repart à zéro chaque semaine.",
    },
    {
      title: "Solde unique en euros",
      description:
        "Le même solde sert au retrait et à l'achat de services publicitaires sur la plateforme.",
    },
    {
      title: "Retraits en cryptomonnaies",
      description:
        "La FAQ recommande USDT TRC-20 au quotidien (frais réseau faibles), le réseau choisi devant correspondre à l'adresse utilisée.",
    },
    {
      title: "Page de paiements publique",
      description:
        "Une page « Payouts » affiche les retraits réussis récents (montant et date), preuve publique que la plateforme paie.",
    },
    {
      title: "Parrainage sur 2 niveaux",
      description:
        "Commissions de niveau 1 et de niveau 2 ; la commission de niveau 2 ne dépasse jamais 15 %.",
    },
  ],
  dashboard: [
    {
      title: "Earn",
      description:
        "La zone de travail de l'exécutant : liste des missions disponibles (trafic, tâches sociales) et suivi des récompenses.",
    },
    {
      title: "EuroPass",
      description:
        "Les quêtes de la semaine en cours, avec l'avancement de chaque objectif et les récompenses à réclamer.",
    },
    {
      title: "Referrals",
      description:
        "Votre lien de parrainage et les commissions générées par vos filleuls et vos arrières-filleuls.",
    },
    {
      title: "Top-up",
      description:
        "Le dépôt de fonds servant à acheter des services publicitaires (principalement USDT TRC-20, plus BTC, ETH et TRX selon les méthodes activées).",
    },
    {
      title: "Payouts",
      description:
        "Page publique listant les retraits récents réussis, et votre historique de demandes de retrait.",
    },
  ],
  earningMethods: [
    {
      title: "Missions de trafic",
      description:
        "Le cœur du revenu de l'exécutant : realizez les visites / actions de trafic demandées par les annonceurs.",
      steps: [
        {
          title: "Ouvrir la liste des jobs",
          description:
            "Dans le menu, section « Earn », les jobs disponibles sont listés avec leur description et leur valeur.",
        },
        {
          title: "Lire les conditions avant de commencer",
          description:
            "Vérifiez le site, la durée, le device attendu et les contraintes : une mission mal comprise n'est pas payée.",
        },
        {
          title: "Réaliser la mission",
          description:
            "Effectuez exactement l'action demandée, sans automatisation ni intermédiaire.",
        },
        {
          title: "Attendre le contrôle et le crédit",
          description:
            "La FAQ indique que la récompense est créditée sur le solde EUR après vérification de la tâche.",
        },
      ],
    },
    {
      title: "Tâches sociales",
      description:
        "EuroAds mentionne explicitement les « social tasks » dans la section Earn : actions sociales rémunérées, soumises aux mêmes contrôles anti-fraude.",
    },
    {
      title: "Quêtes EuroPass (hebdomadaires)",
      description:
        "Atteignez les objectifs de la semaine (tâches, trafic, actions sociales, gains) pour réclamer des récompenses bonus. La progression est réinitialisée chaque semaine.",
    },
    {
      title: "Boost de vos propres campagnes (côté annonceur)",
      description:
        "Si vous devenez aussi annonceur, les fonctions « Boost » et « Auto-boost » permettent de remonter une offre dans le fil des exécutants. Le boost est facturé sur le solde.",
    },
  ],
  registrationSteps: [
    {
      step: 1,
      title: "Ouvrir le site officiel",
      description:
        "Passez par le bouton « Commencer à gagner » : vous arrivez sur euroads.biz, à l'adresse exacte affichée dans ce guide.",
      tips: [
        "Vérifiez la barre d'adresse : les copies de plateformes sont fréquentes.",
        "La FAQ impose 18 ans minimum pour utiliser le service.",
      ],
    },
    {
      step: 2,
      title: "Créer le compte",
      description:
        "Registration depuis « Sign up » (le site invite à s'inscrire pour annoncer ou pour gagner sur les tâches).",
    },
    {
      step: 3,
      title: "Confirmer votre adresse email",
      description:
        "Utilisez une adresse valide et fonctionnelle : elle sert aux demandes de retrait et aux vérifications de sécurité.",
    },
    {
      step: 4,
      title: "Compléter votre profil",
      description:
        "Renseignez des informations exactes : EuroAds précise que vous êtes responsable de la légalité de vos contenus et que les fausses données exposent à des sanctions.",
    },
    {
      step: 5,
      title: "Explorer la section Earn",
      description:
        "Première visite utile : repérez les missions disponibles, la page EuroPass et les consignes avant de lancer une campagne.",
    },
  ],
  earningGuide: [
    {
      step: 1,
      title: "Étape 1 — Inscription",
      description:
        "Créez votre compte avec une seule adresse email, et gardez l'accès à votre boîte mail : c'est là que passent les demandes et vérifications.",
    },
    {
      step: 2,
      title: "Étape 2 — Vérification",
      description:
        "EuroAds peut demander des informations d'identité ou de contexte pour se conformer aux exigences de ses partenaires de paiement. Ce n'est pas systématique, mais il faut y être prêt.",
    },
    {
      step: 3,
      title: "Étape 3 — Comprendre le solde EUR",
      description:
        "Le solde est commun : il sert à retirer vos gains et à payer des services publicitaires. C'est un solde prépayé de service, pas un placement.",
    },
    {
      step: 4,
      title: "Étape 4 — Trouver les premières missions",
      description:
        "Tout part de la section « Earn » du menu. Les offres changent régulièrement : revenez souvent.",
    },
    {
      step: 5,
      title: "Étape 5 — Choisir une mission",
      description:
        "Avant de commencer, vérifiez la récompense, la durée attendue, le type d'appareil requis et si une validation manuelle est probable.",
    },
    {
      step: 6,
      title: "Étape 6 — Réaliser la mission",
      description:
        "Suivez les consignes à la lettre. La FAQ est claire : fraude, bots et fausses actions ne sont pas payés et peuvent entraîner un bannissement.",
    },
    {
      step: 7,
      title: "Étape 7 — Vérification",
      description:
        "Une fois la mission contrôlée, la récompense apparaît sur le solde. Certaines validations prennent plus de temps que d'autres.",
    },
    {
      step: 8,
      title: "Étape 8 — Suivre son solde",
      description:
        "Le solde en EUR cumul vos récompenses et vos éventuels dépôts : gardez la distinction entre ce que vous avez gagné et ce que vous avez chargé.",
    },
    {
      step: 9,
      title: "Étape 9 — Atteindre le seuil de retrait",
      description:
        "Le seuil de retrait publié par la FAQ est de 5 EUR. Vérifiez toujours la valeur affichée dans votre espace avant d'économiser.",
    },
    {
      step: 10,
      title: "Étape 10 — Retirer",
      description:
        "Demandez un retrait vers votre portefeuille personnel, sur le réseau correspondant (USDT TRC-20 recommandé par la FAQ).",
      tips: [
        "Doublez la vérification du réseau et de l'adresse : une erreur de réseau peut être définitive.",
        "Les retraits sont traités manuellement ou automatiquement, généralement en quelques heures, jusqu'à 24–48 h en période chargée.",
      ],
    },
  ],
  refusedReasons: [
    "Fraude, faux engagements ou actions simulées : non payées et susceptibles d'entraîner un bannissement.",
    "Comptes multiples utilisés pour farmmer des bonus, du parrainage ou des tâches (interdits).",
    "Comptes liés détectés via appareil, IP, paiements ou comportement : gel possible, annulation des bonus et des récompenses de parrainage.",
    "Contenu ou traffic contraire aux règles (fraude, phishing, malware, bots, biens illicites, armes, drogues, exploitation de mineurs).",
    "Demande de retrait en cours d'alerte de conformité : la demande peut être retardée le temps de l'examen.",
  ],
  withdrawal: {
    description:
      "Le retrait se fait depuis le solde EUR vers votre propre portefeuille crypto, sur le réseau que vous choisissez. La FAQ précise que les retraits sont traités manuellement ou automatiquement, généralement en quelques heures, et jusqu'à 24–48 h en période de pointe. Des frais de prestataire de paiement peuvent s'appliquer.",
    steps: [
      {
        title: "Vérifier le solde et le seuil",
        description: "Le seuil de retrait publié par la FAQ est de 5 EUR.",
      },
      {
        title: "Choisir la méthode",
        description:
          "La FAQ recommande USDT TRC-20 au quotidien ; BTC, ETH et TRX sont également cités selon les méthodes activées.",
      },
      {
        title: "Saisir votre adresse de portefeuille",
        description:
          "Votre adresse personnelle, sur le réseau correspondant. Aucun compte n'est nécessaire chez le prestataire de paiement.",
      },
      {
        title: "Demander le retrait",
        description: "La demande est traitée par l'équipe ; un contrôle de conformité peut avoir lieu.",
      },
      {
        title: "Recevoir les fonds",
        description:
          "Un e-mail de confirmation est envoyé une fois le retrait envoyé (les frais réseau éventuels sont indiqués avant validation).",
      },
    ],
    methods: ["USDT (TRC-20)", "Bitcoin (BTC)", "Ethereum (ETH)", "Tron (TRX)"],
    minimum: "5 EUR (seuil publié dans la FAQ officielle)",
    processingTime:
      "Quelques heures en moyenne, jusqu'à 24–48 h en période de pointe (FAQ officielle)",
  },
  conditions: [
    "18 ans minimum pour utiliser le service.",
    "Une personne = un compte ; les comptes multiples sont interdits.",
    "Interdits : fraude, hameçonnage, malware, bots / fausses actions, multi-comptes, biens et services illégaux, armes, drogues, exploitation de mineurs.",
    "Des vérifications d'identité peuvent être demandées ; un compte peut être gelé en cas d'activité suspecte.",
    "Le solde déjà dépensé en services publicitaires n'est généralement pas remboursable (remboursements uniquement pour erreurs techniques clairement établies).",
    "Les commissions de parrainage de niveau 2 ne dépassent jamais 15 %.",
  ],
  mistakes: [
    {
      title: "Créer un second compte pour cumuler les bonus",
      text: "C'est la faute la plus explicitement sanctionnée : les comptes liés sont détectés (appareil, IP, paiements) et peuvent être bannis sans payout.",
    },
    {
      title: "Confondre solde gagné et solde déposé",
      text: "Le solde est commun. Gardez une trace de vos dépôts pour ne pas croire à un gain ce qui est un achat de service.",
    },
    {
      title: "Choisir le mauvais réseau crypto",
      text: "La FAQ insiste : vérifiez le réseau et l'adresse avant de confirmer, un mauvais réseau peut être irréversible.",
    },
    {
      title: "Faire confiance à une copie du site",
      text: "Vérifiez toujours euroads.biz dans la barre d'adresse et le lien de support officiel.",
    },
  ],
  tips: [
    "Commencez par des missions courtes pour comprendre la validation avant de viser des tâches plus lourdes.",
    "Suivez vos quêtes EuroPass chaque semaine : c'est un complément récurrent et la progression est réinitialisée chaque semaine.",
    "Lisez la valeur, la durée et les contraintes avant de démarrer une mission.",
    "Revenez régulièrement : le stock de missions évolue chaque jour.",
    "Mettez de côté au fur et à mesure : atteindre 5 EUR demande de la régularité.",
    "Gardez vos preuves (captures) pour toute mission litigieuse avant de contacter le support.",
  ],
  referral: {
    description:
      "EuroAds décrit un programme de parrainage sur deux niveaux : vous partagez votre lien depuis la page « Referrals » et vous touchez des commissions sur l'activité de vos filleuls (niveau 1) et de vos arrière-filleuls (niveau 2, plafonnée à 15 %). Un bonus unique de parrain peut aussi être versé au parrain lorsque le filleul remplit les conditions (par exemple vérification Telegram et seuil de gains). Le multi-compte pour farmer du parrainage est interdit et bloqué.",
  },
  faq: [
    {
      question: "EuroAds est-il gratuit ?",
      answer:
        "Gagner via la section Earn est gratuit. En revanche, le dépôt de fonds est un paiement prépayé de services publicitaires : la FAQ précise que ce n'est ni un produit d'investissement, ni un dépôt bancaire, ni un change.",
    },
    {
      question: "Quel est le seuil minimum de retrait ?",
      answer:
        "La FAQ officielle indique 5 EUR. Vérifiez la valeur affichée dans votre espace, car les conditions peuvent évoluer.",
    },
    {
      question: "Puis-je utiliser plusieurs comptes ?",
      answer:
        "Non. Une personne = un compte. EuroAds détecte les comptes liés (appareil, IP, paiements, comportement) et peut les geler ou les bannir, en annulant bonus et gains de parrainage.",
    },
    {
      question: "Le VPN est-il autorisé ?",
      answer:
        "La FAQ n'énonce pas de interdiction explicite du VPN, mais elle précise que les comptes liés sont détectés et que toute activité doit rester conforme aux règles. En cas de doute, contactez support@euroads.biz avant d'utiliser un VPN.",
    },
    {
      question: "Combien puis-je gagner ?",
      answer:
        "Cela dépend des missions disponibles, de leur valeur et de votre activité. Aucun montant n'est garanti : la FAQ rappelle que le service est fourni « tel quel ».",
    },
    {
      question: "Pourquoi mon retrait est-il retardé ?",
      answer:
        "Les retraits sont traités manuellement ou automatiquement. Un retard peut venir d'un contrôle de conformité ou d'une période chargée (jusqu'à 24–48 h annoncées par la FAQ).",
    },
    {
      question: "Comment contacter le support ?",
      answer:
        "Par email à support@euroads.biz, via Telegram t.me/euroadsofficial, ou via le formulaire du site. La FAQ annonce une réponse sous 24–48 h les jours ouvrés. Pour un problème de paiement, indiquez : email du compte, date et heure, montant, devise, moyen de paiement et identifiant de transaction.",
    },
    {
      question: "Puis-je me faire rembourser un dépôt ?",
      answer:
        "La FAQ prévoit des remboursements pour les erreurs techniques claires (double débit, fonds crédités à tort) si le solde n'a pas déjà été dépensé en services publicitaires. Les demandes sont examinées au cas par cas, généralement sous 1 à 3 jours ouvrés.",
    },
  ],
  docCoverage: "full",
  officialSources: [
    { title: "Site officiel EuroAds", url: "https://euroads.biz/" },
    { title: "FAQ officielle EuroAds (solde, paiements, règles)", url: "https://euroads.biz/en/faq" },
  ],
  lastVerified: "2026-10-02",
};