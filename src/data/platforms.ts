import euroadsLogo from "../assets/images/logos/euroads.png";
import makeyoutaskLogo from "../assets/images/logos/makeyoutask.png";
import coinliLogo from "../assets/images/logos/coinli.png";
import minitaskyLogo from "../assets/images/logos/minitasky.png";
import earntodayLogo from "../assets/images/logos/earntoday.png";
import teerbyteLogo from "../assets/images/logos/teerbyte.png";
import mxfinsLogo from "../assets/images/logos/mxfins.png";
import firefaucetLogo from "../assets/images/logos/firefaucet.png";
import prSocialLogo from "../assets/images/logos/pr-social.png";
import timebucksLogo from "../assets/images/logos/timebucks.png";
import surveooLogo from "../assets/images/logos/surveoo.png";
import faucetpayLogo from "../assets/images/logos/faucetpay.png";
import binanceLogo from "../assets/images/logos/binance.png";
import honeygainLogo from "../assets/images/logos/honeygain.png";
import luckywatchLogo from "../assets/images/logos/luckywatch.png";
import blockbusterLogo from "../assets/images/logos/blockbuster.png";
import glowliveLogo from "../assets/images/logos/glowlive.png";

export type PlatformCategory = "website" | "mobile";

export type PaymentMethodType =
  | "wallet"
  | "crypto"
  | "bank"
  | "paypal"
  | "gift-card"
  | "other";

export interface PaymentMethod {
  id: string;
  name: string;
  type: PaymentMethodType;
  /** Précision affichée sous le nom (ex. "SEPA / SWIFT"). */
  label?: string;
  /** Logo local (src/assets/images/logos/…). */
  logo?: string;
  /** Votre lien referral pour ce wallet (si vous en avez un). */
  referralUrl?: string;
  /** Page officielle où cette méthode est documentée. */
  officialSource?: string;
}

/**
 * Vos liens referral pour les wallets du modal "Méthodes de paiement".
 * Réutilise les vrais liens déjà fournis dans ce datasource :
 * remplacer ici si vous changez de lien.
 */
const walletLinks = {
  faucetpay: "https://faucetpay.io/r/9937239",
  binance: "https://www.binance.com/activity/referral-entry/CPA?ref=CPA_00P55S21CS",
} satisfies Record<string, string>;

/** Date de la dernière vérification des méthodes de paiement. */
export const PAYMENT_METHODS_LAST_VERIFIED = "2026-10-01";

/**
 * Méthodes affichées dans le modal "Méthodes de paiement" de CHAQUE card :
 * vos deux liens referral wallet (FaucetPay et Binance), ouverts en
 * nouvel onglet. Modifier uniquement ici pour changer les liens.
 */
export const WALLET_LINK_METHODS: PaymentMethod[] = [
  {
    id: "faucetpay",
    name: "FaucetPay",
    type: "wallet",
    label: "Micro-portefeuille crypto",
    logo: faucetpayLogo,
    referralUrl: walletLinks.faucetpay,
    officialSource: "https://faucetpay.io/",
  },
  {
    id: "binance",
    name: "Binance",
    type: "wallet",
    label: "Exchange crypto",
    logo: binanceLogo,
    referralUrl: walletLinks.binance,
    officialSource: "https://www.binance.com/",
  },
];

export interface Platform {
  id: string;
  name: string;
  category: PlatformCategory;
  description: string;
  referralUrl: string | null;
  logo?: string | null;
  /** Badges éditoriaux contrôlés depuis le datasource ("TOP", "HOT"…). */
  badges?: string[];
  /** Catégorie / type affiché sous le nom. */
  subtitle?: string;
  /** Points forts affichés en petits blocs avec icône. */
  highlights?: string[];
  /** Type de récompense connu, sinon texte neutre. */
  rewardType?: string | null;
  tags?: string[];
  featured?: boolean;
}

export type SocialLink = { label: string; url: string | null };

export const siteConfig = {
  name: "EarnZone",
  tagline:
    "Découvrez des plateformes de micro-tâches, rewards et earning accessibles en ligne.",
  disclaimer:
    "Les revenus, récompenses et conditions varient selon chaque plateforme. Ce site présente des plateformes tierces et ne garantit aucun montant de gain. Consultez toujours les conditions de chaque service avant de vous inscrire.",
  socials: [
    { label: "Facebook", url: null },
    { label: "Telegram", url: null },
    { label: "TikTok", url: null },
    { label: "WhatsApp", url: null },
  ] as SocialLink[],
};

/**
 * Datasource centralisé.
 * Pour ajouter / retirer une plateforme, modifier uniquement ce tableau.
 * referralUrl : remplacer par vos vrais liens de referral.
 * badges / highlights / rewardType : uniquement des informations vérifiables,
 * ne rien inventer (laisser null / vide si inconnu).
 */
export const platforms: Platform[] = [
  // ---------- WEBSITES ----------
  {
    id: "euroads",
    name: "EuroAds",
    category: "website",
    subtitle: "PTC & Tasks",
    description:
      "Effectuez des tâches simples, consultez des publicités et découvrez différentes façons de cumuler des récompenses.",
    referralUrl: "https://euroads.biz/r/BMP1N3",
    logo: euroadsLogo,
    highlights: [
      "Gagnez en accomplissant des tâches simples",
      "PTC, réseaux sociaux et CPA disponibles",
      "Faucet et activités rémunérées",
    ],
    rewardType: null,
    tags: ["PTC", "Tasks", "CPA"],
  },

  {
    id: "makeyoutask",
    name: "MakeYouTask",
    category: "website",
    subtitle: "Faucet & Games",
    description:
      "Regardez des vidéos, consultez des publicités et réalisez des micro-tâches directement depuis votre navigateur.",
    referralUrl: "https://makeyoutask.com/start/71752",
    logo: makeyoutaskLogo,
    highlights: [
      "Regardez des vidéos et gagnez",
      "PTC Ads et contenus à consulter",
      "Micro-tâches accessibles en ligne",
    ],
    rewardType: null,
    tags: ["PTC", "Vidéos", "Tasks"],
  },

  {
    id: "coinli",
    name: "Coinli",
    category: "website",
    subtitle: "Crypto & Micro-tâches",
    description:
      "Découvrez différentes activités en ligne permettant de cumuler des récompenses liées aux cryptomonnaies.",
    referralUrl: "https://coinli.net/i/26149",
    logo: coinliLogo,
    highlights: [
      "Réalisez des micro-tâches en ligne",
      "Découvrez plusieurs activités crypto",
      "Cumulez des récompenses selon les tâches",
    ],
    rewardType: null,
    tags: ["Crypto", "Tasks", "Rewards"],
  },

  {
    id: "aviso",
    name: "Aviso",
    category: "website",
    subtitle: "Faucet & Offers",
    description:
      "Complétez des offres et différentes activités disponibles pour accumuler des récompenses.",
    referralUrl: "https://aviso.bz/?r=aviso_0504",
    logo: null,
    highlights: [
      "Faucet et récompenses disponibles",
      "Complétez des offres rémunérées",
      "Plusieurs activités à découvrir",
    ],
    rewardType: null,
    tags: ["Faucet", "Offers", "Tasks"],
  },

  {
    id: "minitasky",
    name: "MiniTasky",
    category: "website",
    subtitle: "Micro Task",
    description:
      "Réalisez des micro-tâches, des offres et des activités en ligne pour cumuler des récompenses.",
    referralUrl: "https://minitasky.com/?ref=94f7fea1",
    logo: minitaskyLogo,
    badges: ["HOT"],
    highlights: [
      "Réalisez des micro-tâches en ligne",
      "Offers, surveys et activités disponibles",
      "Plusieurs façons de gagner des récompenses",
    ],
    rewardType: null,
    tags: ["Micro Task", "Offers", "Surveys"],
    featured: true,
  },

  {
    id: "earntoday",
    name: "EarnToday",
    category: "website",
    subtitle: "Tasks & Rewards",
    description:
      "Découvrez des tâches et activités en ligne accessibles directement depuis votre navigateur.",
    referralUrl: "https://earntoday.online/?r=12180",
    logo: earntodayLogo,
    highlights: [
      "Effectuez des tâches au quotidien",
      "Cumulez des récompenses selon votre activité",
      "Accès simple depuis votre navigateur",
    ],
    rewardType: null,
    tags: ["Tasks", "Rewards", "Online"],
  },

  {
    id: "teerbyte",
    name: "TeerByte",
    category: "website",
    subtitle: "Micro Task & Rewards",
    description:
      "Participez à différentes activités et micro-tâches disponibles en ligne pour cumuler des récompenses.",
    referralUrl: "https://link24.store/ref2069826_sg6",
    logo: teerbyteLogo,
    highlights: [
      "Découvrez des micro-tâches disponibles",
      "Effectuez des missions en ligne",
      "Cumulez des récompenses selon votre activité",
    ],
    rewardType: null,
    tags: ["Micro Task", "Tasks", "Rewards"],
  },

  {
    id: "mxfins",
    name: "MXFins",
    category: "website",
    subtitle: "Online Earning",
    description:
      "Explorez différentes possibilités d'activité et de récompenses accessibles directement depuis votre navigateur.",
    referralUrl: "https://mxfins.biz/?ref=1617",
    logo: mxfinsLogo,
    highlights: [
      "Découvrez des activités en ligne",
      "Accès rapide depuis le navigateur",
      "Explorez les opportunités disponibles",
    ],
    rewardType: null,
    tags: ["Earning", "Online", "Rewards"],
  },

  {
    id: "firefaucet",
    name: "FireFaucet",
    category: "website",
    subtitle: "Faucet & PTC",
    description:
      "Combinez faucet, PTC, offres et autres activités pour accumuler des récompenses en crypto.",
    referralUrl: "https://firefaucet.win/ref/1606910",
    logo: firefaucetLogo,
    highlights: [
      "Réclamez régulièrement votre faucet",
      "PTC, offres et activités disponibles",
      "Plusieurs façons de gagner en crypto",
    ],
    rewardType: "Crypto",
    tags: ["Faucet", "PTC", "Crypto"],
  },

  {
    id: "pr-social-tasks",
    name: "PR Social Tasks",
    category: "website",
    subtitle: "Social Task",
    description:
      "Effectuez des actions sur les réseaux sociaux comme les likes, abonnements et partages pour obtenir des récompenses.",
    referralUrl: "https://pr.social/?ref=c2c7a8bc",
    logo: prSocialLogo,
    highlights: [
      "Gagnez en effectuant des actions sociales",
      "Like, Follow, Share et Subscribe",
      "Découvrez les tâches sociales disponibles",
    ],
    rewardType: null,
    tags: ["Social", "Tasks", "Crypto"],
  },

  {
    id: "timebucks",
    name: "TimeBucks",
    category: "website",
    subtitle: "Surveys, Offers & Tasks",
    description:
      "Explorez différentes activités en ligne comme les sondages, offres, contenus et tâches disponibles.",
    referralUrl: "https://timebucks.com/?refID=229319645",
    logo: timebucksLogo,
    badges: ["HOT"],
    highlights: [
      "Répondez à des sondages rémunérés",
      "Offers, vidéos et différentes tâches",
      "Plusieurs activités accessibles en ligne",
    ],
    rewardType: "Crypto",
    tags: ["Surveys", "Offers", "Tasks"],
    featured: false,
  },

  {
    id: "surveoo",
    name: "Surveoo",
    category: "website",
    subtitle: "Paid Surveys",
    description:
      "Répondez à des sondages et partagez votre opinion pour cumuler des récompenses.",
    referralUrl: "https://www.surveoo.com/?r=2649136",
    logo: surveooLogo,
    highlights: [
      "Répondez à des sondages rémunérés",
      "Partagez votre opinion simplement",
      "Sondages disponibles en français",
    ],
    rewardType: "PayPal",
    tags: ["Surveys", "Opinions", "Rewards"],
    featured: true,
  },

  {
    id: "faucetpay",
    name: "FaucetPay",
    category: "website",
    subtitle: "Crypto Micro-Wallet",
    description:
      "Utilisez un micro-portefeuille crypto pour recevoir, gérer et transférer des récompenses provenant de différents services.",
    referralUrl: "https://faucetpay.io/r/9937239",
    logo: faucetpayLogo,
    highlights: [
      "Recevez des récompenses crypto",
      "Micro-paiements et transferts crypto",
      "Compatible avec différents services",
    ],
    rewardType: "Crypto",
    tags: ["Crypto", "Wallet", "Payments"],
    featured: true,
  },

  {
    id: "binance",
    name: "Binance",
    category: "website",
    subtitle: "Crypto Exchange",
    description:
      "Une plateforme crypto permettant notamment de gérer, acheter, vendre et échanger différents actifs numériques.",
    referralUrl:
      "https://www.binance.com/activity/referral-entry/CPA?ref=CPA_00P55S21CS",
    logo: binanceLogo,
    badges: ["TOP"],
    highlights: [
      "Achetez et vendez des cryptomonnaies",
      "Gérez vos actifs numériques",
      "Accessible sur Web et Mobile",
    ],
    rewardType: null,
    tags: ["Crypto", "Exchange", "Wallet"],
  },

  {
    id: "honeygain",
    name: "Honeygain",
    category: "website",
    subtitle: "Bandwidth Sharing",
    description:
      "Partagez une partie de votre connexion Internet inutilisée et accumulez des récompenses selon les conditions du service.",
    referralUrl: "https://join.honeygain.com/ETAHIC3FC3",
    logo: honeygainLogo,
    badges: ["HOT"],
    highlights: [
      "Partagez votre connexion inutilisée",
      "Utilisez plusieurs appareils compatibles",
      "Accumulez des récompenses passivement",
    ],
    rewardType: "PayPal & Crypto",
    tags: ["Passive", "Bandwidth", "Crypto"],
  },

  // ---------- APPLICATIONS MOBILES ----------
  {
    id: "luckywatch",
    name: "LuckyWatch",
    category: "mobile",
    subtitle: "Watch & Earn",
    description:
      "Application mobile permettant de regarder des vidéos et de participer à des activités pour cumuler des récompenses.",
    referralUrl: "https://luckywatch.pro/u/oitqu",
    logo: luckywatchLogo,
    highlights: [
      "Regardez des vidéos et gagnez",
      "Utilisez l'application depuis votre smartphone",
      "Participez aux activités disponibles",
    ],
    rewardType: null,
    tags: ["Watch", "Mobile", "Rewards"],
  },

  {
    id: "playbb",
    name: "Blockbuster",
    category: "mobile",
    subtitle: "Puzzle & Social",
    description:
      "Jeu de puzzle mobile (« block-matching ») avec classements, invitations récompensées, chat privé et cadeaux virtuels.",
    referralUrl: "https://playbb.fun/u/28528362",
    logo: blockbusterLogo,
    highlights: [
      "Déplacez, faites pivoter et retournez les blocs",
      "Invitez des amis et recevez des gems",
      "Version web jouable sans installation",
    ],
    rewardType: null,
    tags: ["Puzzle", "Games", "Social"],
  },

  {
    id: "biubiuclub",
    name: "Glow Live",
    category: "mobile",
    subtitle: "Voice Chat & Party",
    description:
      "Application de chat vocal en groupe et de divertissement : salons, jeux entre amis, cadeaux et programme d'invitation.",
    referralUrl: "https://app.biubiuclub.com/invite/v2?r=8J6E23&ticket=",
    logo: glowliveLogo,
    highlights: [
      "Salons de groupe en temps réel (voix et texte)",
      "Jeux et activités vocales entre amis",
      "Invitez des amis et suivez vos récompenses",
    ],
    rewardType: null,
    tags: ["Voice Chat", "Party", "Social"],
  },
];