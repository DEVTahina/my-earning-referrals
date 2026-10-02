import type { PlatformGuide } from "./types";

/**
 * Guide MXFins — source unique : mxfins.biz
 * La page d'accueil ne présente pas de FAQ ni de conditions : uniquement des plans
 * d'investissement et des tableaux de dépôts / versements.
 */
export const mxfinsGuide: PlatformGuide = {
  whatIsIt:
    "MXFins ne se présente pas comme une plateforme de micro-tâches : la page d'accueil affiche des « Investment Plans » avec des rendements annoncés de 300 % à 1 050 %, un capital global, un tableau des derniers dépôts et un tableau des derniers versements. Le parcours affiché est en trois étapes : Signup, Earn, Withdrawal.",
  howItWorks:
    "D'après la page d'accueil, vous créez un compte, vous choisissez un plan d'investissement (dépôt minimum affiché : de 1 $ à 1 000 $), les gains sont calculés « Every second », puis vous pouvez demander un retrait. Aucun mécanisme de tâches rémunérées n'est présenté sur le site : il s'agit d'un produit de placement, pas d'un site d'earning par l'activité.",
  callouts: [
    {
      tone: "warning",
      title: "Attention — ceci n'est pas une plateforme de micro-tâches",
      text: "Aucun programme de tâches, de sondages ou de PTC n'est décrit sur le site. Le modèle affiché repose sur le dépôt d'argent et des rendements annoncés. Ce type de produit comporte un risque de perte en capital élevé et n'est pas un moyen de gagner de l'argent en réalisant des tâches.",
    },
    {
      tone: "warning",
      title: "Attention — rendements annoncés et risque",
      text: "Des rendements très élevés affichés (300 % à 1 050 %) sur 30 jours ne sont pas des gains garantis. Le site affiche « Accrual Every second » : cela décrit un calcul interne, pas un rendement de marché. Ne déposez de l'argent que ce que vous pouvez perdre, et vérifiez le cadre légal applicable dans votre pays.",
    },
    {
      tone: "info",
      title: "Important — aucune documentation publique",
      text: "Le site ne propose ni FAQ, ni conditions d'utilisation, ni politique de retrait lisible publiquement. Nous ne pouvons donc documenter ni les seuils, ni les méthodes, ni les délais de retrait.",
    },
  ],
  features: [
    { title: "Plans d'investissement", description: "De 5 paliers affichés, de 300 % à 1 050 % annoncés, avec un minimum de dépôt croissant (de 1 $ à 1 000 $)." },
    { title: "Accrual « Every second »", description: "Le site indique que les gains sont calculés en continu, seconde après seconde." },
    { title: "Tableau des dépôts récents", description: "Une liste publique des derniers dépôts, avec montant et date." },
    { title: "Tableau des versements récents", description: "Une liste publique des derniers versements, avec montant et date." },
    { title: "Compteurs de la plateforme", description: "Nombre d'utilisateurs, utilisateurs en ligne et capital affiché en page d'accueil." },
  ],
  dashboard: [
    { title: "Investment Plans", description: "La liste des plans et leurs conditions affichées." },
    { title: "Balance / Accrual", description: "Solde et calcul en cours." },
    { title: "Deposits", description: "Historique des dépôts." },
    { title: "Withdrawel (retrait)", description: "La demande de retrait, nommée « Withdrawel » sur le site." },
  ],
  earningMethods: [
    {
      title: "Placement sur un plan",
      description:
        "C'est le seul mécanisme décrit par le site : choisir un plan, déposer le minimum requis, laisser les rendements s'accumuler selon les règles affichées.",
      steps: [
        { title: "Créer un compte", description: "Étape « Signup » indiquée sur la page d'accueil." },
        { title: "Choisir un plan", description: "Chaque plan affiche un minimum, un pourcentage par jour et une durée affichée de 30 jours." },
        { title: "Déposer les fonds", description: "Le dépôt apparaît dans le tableau des dépôts récents." },
        { title: "Laisser l'accrual se calculer", description: "Le site indique un calcul « Every second »." },
        { title: "Demander le retrait", description: "Étape « Withdrawel » du parcours en trois temps." },
      ],
    },
    {
      title: "Aucune méthode de micro-tâches documentée",
      description:
        "Le site ne décrit ni surveys, ni PTC, ni offres, ni tâches sociales. Si vous cherchiez un site d'earning par l'activité, ce n'est pas le bon type de plateforme.",
    },
  ],
  registrationSteps: [
    { step: 1, title: "Ouvrir le site", description: "Passez par « Commencer à gagner » depuis EarnZone : vérifiez le domaine affiché." },
    { step: 2, title: "Créer un compte (Signup)", description: "Première étape du parcours indiqué sur la page d'accueil." },
    { step: 3, title: "Lire attentivement les conditions", description: "Le site ne publie pas de conditions lisibles : faites diligence avant toute dépôt." },
    { step: 4, title: "Ne jamais déposer à l'aveugle", description: "Si le risque de perte en capital n'est pas explicite et accepté, ne déposez pas." },
  ],
  earningGuide: [
    { step: 1, title: "Étape 1 — Comprendre la nature du produit", description: "C'est un placement avec dépôt, pas une plateforme de tâches." },
    { step: 2, title: "Étape 2 — Vérifier les mentions légales", description: "Cherchez une société identifiée, une adresse et des conditions : leur absence est un signal." },
    { step: 3, title: "Étape 3 — Évaluer le risque", description: "Des rendements annoncés très élevés sur 30 jours comportent un risque de perte totale." },
    { step: 4, title: "Étape 4 — Si vous deposez", description: "N'utilisez que une somme dont la perte totale serait acceptable pour vous." },
    { step: 5, title: "Étape 5 — Vérifier les versements", description: "Suivez le tableau des versements et la date de chaque paiement." },
    { step: 6, title: "Étape 6 — Demander le retrait", description: "Le site indique une étape « Withdrawel » mais aucun délai ni seuil public." },
  ],
  refusedReasons: [
    "Aucune information officielle n'est publiée : les motifs de refus de retrait ne sont pas documentables.",
  ],
  withdrawal: {
    description:
      "Le site mentionne une étape « Withdrawel » dans son parcours en trois temps et affiche un tableau des derniers versements. Aucun seuil, aucune méthode et aucun délai de retrait ne sont publiés dans une page de conditions : ces informations doivent être vérifiées sur le site, sur votre compte, avant tout dépôt.",
    methods: ["Non documenté publiquement"],
    minimum: "Non documenté publiquement",
    processingTime: "Non documenté publiquement",
  },
  conditions: [
    "Le site ne publie ni FAQ, ni conditions d'utilisation, ni politique de retrait accessible publiquement.",
    "Le modèle affiché repose sur un dépôt d'argent : le risque de perte en capital est integral.",
    "Les rendements annoncés (300 % à 1 050 %) sont des paramètres commerciaux affichés, pas des rendements garantis.",
  ],
  mistakes: [
    {
      title: "Déposer pour « gagner de l'argent en tasks »",
      text: "Ce site ne vend pas de tâches : il affiche des plans d'investissement. Ne confondez pas les deux usages.",
    },
    {
      title: "Croire les rendements garantis",
      text: "« Accrual Every second » décrit un calcul interne. Aucun placement à rendement élevé n'est garanti.",
    },
    {
      title: "Déposer une somme importante",
      text: "Ne déposez que ce que vous accepteriez de perdre intégralement.",
    },
    {
      title: "Ignorer l'absence de conditions",
      text: "Pas de conditions lisibles = pas de recours clair en cas de problème.",
    },
  ],
  tips: [
    "Si vous cherchiez un vrai site d'earning par les tâches, consultez plutôt les plateformes de cette catégorie sur EarnZone.",
    "Vérifiez toujours l'existence de mentions légales et d'une société identifiable.",
    "Méfiez-vous des rendements affichés en très grand : c'est un argument commercial.",
    "Testez avec de très petites sommes, si vous décidez malgré tout.",
  ],
  faq: [
    {
      question: "MXFins est-il une plateforme de micro-tâches ?",
      answer:
        "Non. La page d'accueil ne montre aucun programme de tâches : elle affiche des plans d'investissement avec dépôt minimum et rendements annoncés.",
    },
    {
      question: "Combien gagne-t-on par jour ?",
      answer:
        "Le site affiche des pourcentages par plan (de 10 % à 35 % annoncés sur la page d'accueil). Ce sont des valeurs commerciales affichées, pas des gains garantis.",
    },
    {
      question: "Comment retirer ?",
      answer:
        "Le site indique une étape « Withdrawel » mais ne publie ni seuil, ni méthode, ni délai. Vérifiez ces informations sur le site et sur votre compte avant tout dépôt.",
    },
    {
      question: "Faut-il déposer de l'argent ?",
      answer:
        "Oui : les plans affichés ont tous un dépôt minimum (de 1 $ à 1 000 $). C'est un placement, pas un emploi.",
    },
    {
      question: "Y a-t-il une FAQ ou des conditions ?",
      answer: "Non, aucune FAQ ni condition d'utilisation lisible n'a pu être trouvée sur le site. C'est une information importante à prendre en compte." },
  ],
  docCoverage: "partial",
  officialSources: [{ title: "Site officiel MXFins", url: "https://mxfins.biz/" }],
  lastVerified: "2026-10-02",
};