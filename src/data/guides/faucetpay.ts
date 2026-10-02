import type { PlatformGuide } from "./types";

/**
 * Guide FaucetPay — sources officielles : faucetpay.io, faucetpay.io/fees
 */
export const faucetpayGuide: PlatformGuide = {
  whatIsIt:
    "FaucetPay est un micro-portefeuille de cryptomonnaies pensé pour les petits montants. Le site met en avant plus de 600 faucets vérifiés, 20 devises supportées et une file unique réunissant faucets, PTC et offre walls. C'est à la fois votre compte de réception (beaucoup de plateformes vous paient directement dessus) et un petit outil d'échange et de transfert entre utilisateurs.",
  howItWorks:
    "Vous créez un compte (connexion par lien magique depuis votre email), la double authentification est activée par défaut, et vous obtenez une adresse par devise. Les faucets, les tâches et les campagnes PTC créditent directement ce portefeuille. Vous pouvez échanger une devise contre une autre, envoyer instantly à un autre utilisateur FaucetPay sans frais, ou retirer vers un portefeuille externe en payant les frais réseau.",
  callouts: [
    {
      tone: "info",
      title: "Important — sécurité par défaut",
      text: "Le site met en avant la 2FA activée par défaut, une phrase anti-phishing présente dans chaque email, une liste blanche d'adresses de retrait (24 h de délai pour une nouvelle adresse) et un journal d'audit exportable. FaucetPay précise ne jamais demander votre mot de passe par email ou par chat.",
    },
    {
      tone: "tip",
      title: "Conseil — les transferts entre comptes sont gratuits",
      text: "La page des frais indique que les transferts entre utilisateurs FaucetPay ne touchent jamais la blockchain : ils sont instantanés et sans frais. Seul le retrait « on-chain » coûte les frais du réseau.",
    },
    {
      tone: "warning",
      title: "Attention — ce n'est pas une banque",
      text: "Un micro-portefeuille crypto n'offre aucune garantie bancaire. Vérifiez toujours l'adresse de destination : un envoi crypto est généralement irréversible.",
    },
  ],
  features: [
    { title: "600+ faucets vérifiés", description: "Le site affiche plus de 600 faucets partenaires, avec filtres par devise et suivi de séries de réclamations." },
    { title: "PTC et offre walls unifiés", description: "Les campagnes PTC et les offre walls sont réunis dans une même file avec des versements annoncés comme honnêtes." },
    { title: "Échange entre devises", description: "Échangez une devise contre une autre, à tout moment." },
    { title: "Transferts P2P gratuits", description: "Envoyez instantanément à un autre utilisateur FaucetPay, sans frais on-chain." },
    { title: "Stake FEY", description: "Le staking de FEY (le token natif) génère un rendement composé chaque jour à 00:00 UTC, déblocable après la période de verrouillage." },
    { title: "Jeux vérifiables", description: "Crash, Plinko, Dice, Limbo et Roulette combinent une graine serveur et votre graine client : chaque tour est vérifiable." },
    { title: "Réseau publicitaire", description: "Campagnes PTC, bannières, annonces natives et emplacements sponsorisés dans le réseau FaucetPay." },
    { title: "2FA par défaut", description: "Active dès la création du compte, avec codes de récupération et contrôle des sessions par appareil." },
  ],
  dashboard: [
    { title: "Portefeuille", description: "Vos soldes par devise, mis à jour en direct." },
    { title: "Liste des faucets", description: "Les faucets partenaires, avec filtres, favoris et suivi de série." },
    { title: "PTC & Offerwall", description: "La file unifiée des campagnes." },
    { title: "Jeux", description: "Crash, Plinko, Dice, Limbo et Roulette, avec vérification des tirages." },
    { title: "Retrait", description: "Retrait on-chain, avec les frais et minimums par devise." },
    { title: "Paramètres / Sécurité", description: "2FA, phrase anti-phishing, liste blanche de retraits et journal d'audit." },
  ],
  earningMethods: [
    {
      title: "Réclamer sur les faucets partenaires",
      description:
        "Le site met en avant plus de 600 faucets vérifiés, avec suivi des séries de réclamations.",
      steps: [
        { title: "Ouvrir la liste des faucets", description: "Filtrez par devise et mettez en favori ceux qui vous interested." },
        { title: "Réclamer", description: "La récompense arrive directement sur votre portefeuille FaucetPay." },
        { title: "Suivre votre série", description: "Le site permet de suivre les séries de réclamations." },
      ],
    },
    {
      title: "PTC et offre walls",
      description:
        "Campagnes PTC et fournisseurs d'offre walls réunis dans une seule file, avec des versements décrits comme transparents.",
    },
    {
      title: "Jeux provably fair",
      description:
        "Crash, Plinko, Dice, Limbo et Roulette : le résultat combine une graine serveur et votre graine client, que vous pouvez faire tourner et vérifier ensuite depuis votre historique.",
    },
    {
      title: "Stake FEY",
      description:
        "Le token natif FEY peut être verrouillé pour générer un rendement qui se compose chaque jour à minuit UTC. Déblocage possible après la période de verrouillage.",
    },
    {
      title: "Transferts reçus d'autres services",
      description:
        "De nombreuses plateformes de tâches paient directement sur FaucetPay : c'est le rôle principal du portefeuille dans votre parcours.",
    },
  ],
  registrationSteps: [
    { step: 1, title: "Ouvrir FaucetPay", description: "Passez par « Commencer à gagner » : vous arrivez sur faucetpay.io." },
    {
      step: 2,
      title: "Créer le compte",
      description:
        "La page d'accueil met en avant une connexion par lien magique depuis l'email, sans mot de passe à choisir.",
      tips: ["Utilisez une adresse email valide et surveillée : c'est votre point de récupération."],
    },
    {
      step: 3,
      title: "Activer la 2FA",
      description:
        "Elle est active par défaut, mais associez-la à une application d'authentification et conservez les codes de récupération.",
    },
    {
      step: 4,
      title: "Copier vos adresses de dépôt", description: "Chaque devise a son adresse : c'est celle à fournir aux faucets et plateformes." },
  ],
  earningGuide: [
    { step: 1, title: "Étape 1 — Inscription", description: "Compte créé par lien magique, 2FA déjà activée." },
    { step: 2, title: "Étape 2 — Sécurité", description: "Ajoutez votre application d'authentification et notez la phrase anti-phishing de vos emails." },
    { step: 3, title: "Étape 3 — Recevoir vos premiers gains", description: "Réclamez sur un faucet compatible ou faites-vous payer par une plateforme de tâches." },
    { step: 4, title: "Étape 4 — Suivre le solde", description: "Chaque entrée apparaît dans votre portefeuille, par devise." },
    { step: 5, title: "Étape 5 — Échanger si nécessaire", description: "Convertissez une devise en une autre avant de retirer." },
    { step: 6, title: "Étape 6 — Vérifier les frais", description: "La page des frais affiche le coût et le minimum par devise et par réseau." },
    { step: 7, title: "Étape 7 — Retirer", description: "Retrait on-chain : le montant est débité des frais réseau indiqués avant confirmation." },
    { step: 8, title: "Étape 8 — Vérifier la liste blanche", description: "Une nouvelle adresse de retrait impose 24 h de délai et une confirmation par email." },
  ],
  refusedReasons: [
    "Adresse de retrait incorrecte ou non conforme au réseau : un envoi crypto est irréversible.",
    "Retrait demandé vers une adresse non pré-approuvée sans respecter le délai de 24 h.",
    "Tentative de retrait après une compromission de compte (la liste blanche et la 2FA protègent contre cela).",
  ],
  withdrawal: {
    description:
      "Deux options de retrait existent. Le retrait on-chain vers un portefeuille externe est soumis aux frais réseau de la devise, avec un minimum par devise affiché dans la page des frais (exemples : Bitcoin frais normal 0,00001000 / minimum 0,00120000 ; Litecoin 0,00002000 / 0,00200000 ; Ethereum 0,00200000 / 0,02000000 ; USDT 0,02000000 / 8,00000000 ; Dogecoin 1 / 30). Les frais sont dynamiques et le montant exact est affiché dans la fenêtre de confirmation avant validation. Le transfert direct entre deux comptes FaucetPay est, lui, instantané et sans frais.",
    steps: [
      { title: "Choisir « Normal » ou « Prioritaire »", description: "Le normal paie le frais standard du réseau ; le prioritaire est plus cher mais plus rapide en cas de congestion." },
      { title: "Vérifier le minimum de la devise", description: "Chaque devise a son minimum propre, consultable sur la page des frais (tableau par réseau)." },
      { title: "Saisir l'adresse de destination", description: "Vérifiez le réseau : une erreur peut être définitive." },
      { title: "Contrôler le montant affiché", description: "Le montant exact des frais est affiché avant confirmation (les frais sont dynamiques)." },
      { title: "Confirmer", description: "Pour une nouvelle adresse, la liste blanche impose 24 h de délai et une étape par email." },
    ],
    methods: ["Retrait on-chain (BTC, ETH, USDT, LTC, DOGE, TRX, SOL, XMR…)", "Transfert direct entre comptes FaucetPay (gratuit et instantané)"],
    minimum: "Variable par devise et par réseau (exemples : BTC 0,0012 / LTC 0,002 / ETH 0,02 / USDT 8 / DOGE 30)",
    processingTime: "Le transfert FaucetPay → FaucetPay est instantané ; l'on-chain dépend du réseau",
  },
  conditions: [
    "2FA activée par défaut sur chaque nouveau compte.",
    "Phrase anti-phishing : si elle est absente d'un email, l'email n'est pas légitime.",
    "Liste blanche d'adresses de retrait : une nouvelle adresse impose 24 h de délai et une confirmation par email.",
    "Journal d'audit exportable (connexions, retraits, changements de paramètres).",
    "FaucetPay ne demande jamais votre mot de passe par email ou par chat.",
    "Les frais de retrait on-chain sont dynamiques, liés à la congestion du réseau.",
  ],
  mistakes: [
    { title: "Copier une adresse sans vérifier le réseau", text: "Un transfert crypto est irréversible : le mauvais réseau peut entraîner une perte définitive." },
    { title: "Retirer de très petits montants sans comparer les frais", text: "Sur les cryptos à frais élevés, le minimum de retrait peut dépasser le montant accumulé." },
    { title: "Ignorer la phrase anti-phishing", text: "C'est le moyen le plus simple de repérer un email d'hameçonnage." },
    { title: "Payer des frais alors qu'un transfert FaucetPay suffit", text: "Envoyer à un autre utilisateur FaucetPay est instantané et gratuit." },
  ],
  tips: [
    "Utilisez FaucetPay comme porte d'entrée de vos gains : la plupart des plateformes acceptent une adresse FaucetPay.",
    "Mettez en favori les faucets qui versent régulièrement et suivez vos séries.",
    "Vérifiez les frais d'une devise avant de la choisir pour vos retraits : les frais relativement au montant retiré comptent beaucoup.",
    "Activez la liste blanche d'adresses dès maintenant : elle évite les vols de山寨.",
  ],
  faq: [
    { question: "FaucetPay est-il une banque ?", answer: "Non : c'est un micro-portefeuille crypto. Les fonds ne bénéficient d'aucune garantie bancaire et leur valeur varie avec le marché." },
    { question: "Comment recevoir des cryptos sur FaucetPay ?", answer: "Chaque devise possède une adresse de dépôt : vous la fournissez à un faucet ou à une plateforme de tâches, qui vous paie directement." },
    { question: "Quels sont les frais de retrait ?", answer: "Ils dépendent de la devise et du réseau, et sont dynamiques. La page officielle des frais affiche le tarif normal et le tarif prioritaire, avec les minimums. Le montant exact est affiché avant confirmation." },
    { question: "Les transferts entre comptes FaucetPay sont-ils gratuits ?", answer: "Oui : ils sont instantanés et ne touchent pas la blockchain, donc sans frais." },
    { question: "Faut-il un dépôt pour utiliser FaucetPay ?", answer: "Non : le site indique que vous pouvez réclamer des faucets, compléter des tâches d'offre walls et accumuler des FEY sans jamais déposer. Les dépôts ne sont nécessaires que pour le staking, les échanges et les retraits on-chain." },
    { question: "La 2FA est-elle obligatoire ?", answer: "Elle est activée par défaut sur chaque nouveau compte, avec codes de récupération et contrôle des sessions par appareil." },
    { question: "Puis-je vérifier les résultats des jeux ?", answer: "Oui : chaque tour combine une graine serveur et votre graine client. Vous pouvez faire tourner les graines et vérifier un tour passé depuis votre historique." },
  ],
  docCoverage: "full",
  officialSources: [
    { title: "Site officiel FaucetPay", url: "https://faucetpay.io/" },
    { title: "Frais et minimums de retrait par devise (page officielle)", url: "https://faucetpay.io/fees" },
  ],
  lastVerified: "2026-10-02",
};