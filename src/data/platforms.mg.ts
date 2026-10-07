import type { Platform, PaymentMethod } from "./platforms";

/**
 * Traductions malgache des données de plateformes (interface + cartes).
 * Les noms de marque, logos, liens referral et badges restent en eux-mêmes.
 * Une clé absente = conservation du texte français.
 */
export type PlatformPatch = Partial<
  Pick<Platform, "subtitle" | "description" | "highlights" | "rewardType">
>;

export const platformsMg: Record<string, PlatformPatch> = {
  euroads: {
    subtitle: "PTC & Asa kely",
    description:
      "Ataovy asa kely, jereo fampirantiana ary keo ny fomba samihafa hananganana vola.",
    highlights: [
      "Mahazo velona amin'ny asa kely",
      "PTC, raikambana sosialy ary CPA azo ampiasaina",
      "Faucet sy asa azo lovia",
    ],
  },
  makeyoutask: {
    subtitle: "Faucet & Vilazany",
    description:
      "Jereo sary fanaovana, jereo fampirantiana ary ataovy micro-tâches ao amin'ny mpifandehanao.",
    highlights: [
      "Jereo sary ary mahazo velona",
      "PTC Ads sy fampirantiana azo jerena",
      "Micro-tâches azo atao an-tératra",
    ],
  },
  coinli: {
    subtitle: "Crypto & Asa kely",
    description:
      "Jereo ny asa samihafa mifandrenda amin'ny fampitoviana crypto izay mety hanampy anao hampiasa vola.",
    highlights: [
      "Ataovy micro-tâches an-tératra",
      "Keo ny asa crypto samihafa",
      "Ampiasao ny fankasitrahana araka ny asa",
    ],
  },
  aviso: {
    subtitle: "Faucet & Fivarotana",
    description:
      "Feno fivarotana sy asa samihafa mba hananganana fankasitrahana.",
    highlights: [
      "Faucet sy fankasitrahana azo ampiasaina",
      "Feno fivarotana azo lovia",
      "Asa samihafa azo jerin-ko",
    ],
  },
  minitasky: {
    subtitle: "Asa kely",
    description:
      "Ataovy micro-tâches, fivarotana sy asa an-tératra mba hananganana fankasitrahana.",
    highlights: [
      "Ataovy micro-tâches an-tératra",
      "Offers, surveys sy asa samihafa",
      "Fomba maro hahazo fankasitrahana",
    ],
  },
  earntoday: {
    subtitle: "Asa & Fankasitrahana",
    description:
      "Keo asa sy asa an-tératra azo ampiasaina mivantana amin'ny mpifandehanao.",
    highlights: [
      "Ataovy asa isanandro",
      "Ampiasao ny fankasitrahana araka ny asanao",
      "Fampidirana tsotra avy amin'ny mpifandehanao",
    ],
  },
  teerbyte: {
    subtitle: "Asa kely & Fankasitrahana",
    description:
      "Mandraiso asa samihafa sy micro-tâches an-tératra mba hananganana fankasitrahana.",
    highlights: [
      "Keo ny micro-tâches azo atao",
      "Ataovy asa an-tératra",
      "Ampiasao ny fankasitrahana araka ny asanao",
    ],
  },
  mxfins: {
    subtitle: "Fahazotoana an-tératra",
    description:
      "Jereo ny fomba samihafa hananganana velona mivantana amin'ny mpifandehanao.",
    highlights: [
      "Keo ny asa an-tératra",
      "Fampidirana haingana avy amin'ny mpifandeha",
      "Jereo ny fahafahana misokatra",
    ],
  },
  firefaucet: {
    subtitle: "Faucet & PTC",
    description:
      "Fampifangaroana faucet, PTC, fivarotana sy asa hahazoana crypto.",
    highlights: [
      "Andao ny faucet fohy isanandro",
      "PTC, fivarotana sy asa samihafa",
      "Fomba maro hahazo crypto",
    ],
    rewardType: "Crypto",
  },
  "pr-social-tasks": {
    subtitle: "Asa sosialy",
    description:
      "Ataovy asa amin'ny raikambana sosialy toy ny fiantohana, fanatontolana sy zazakamamaky mba hahazoana fankasitrahana.",
    highlights: [
      "Mahazo velona amin'ny asa sosialy",
      "Like, Follow, Share sy Subscribe",
      "Keo ny asa sosialy",
    ],
  },
  timebucks: {
    subtitle: "Sondaje, Fivarotana & Asa",
    description:
      "Jereo ny asa an-tératra toy ny sondaje, fivarotana, vahaolana sy asa azo atao.",
    highlights: [
      "Valio ny sondaje azo lovia",
      "Fivarotana, sary fanaovana sy asa samihafa",
      "Asa maro an-tératra",
    ],
    rewardType: "Crypto",
  },
  surveoo: {
    subtitle: "Sondaje azo lovia",
    description:
      "Valio ny sondaje ary anambaro ny hevitrao mba hahazoana fankasitrahana.",
    highlights: [
      "Valio ny sondaje azo lovia",
      "Anambaro ny hevitrao mora",
      "Sondaje azo atao amin'ny Frantsay",
    ],
    rewardType: "PayPal",
  },
  faucetpay: {
    subtitle: "Poamana crypto kely",
    description:
      "Ampiasao poamana crypto kely hanodinana, hanandrana sy hanafana fankasikrana avy amin'ny rafiha maro.",
    highlights: [
      "Mandray fankasitrahana crypto",
      "Fampitoviana crypto kely",
      "Mifanaraka amin'ny rafiha maro",
    ],
    rewardType: "Crypto",
  },
  binance: {
    subtitle: "Fampitoviana crypto",
    description:
      "Sehatra crypto mahafahan'ny mitantana, mividy, mivarotra ary mampifandray samy endrika vola amin'ny nomeray.",
    highlights: [
      "Mividy sy mivarotra cryptocurrency",
      "Mitantana ny zavatra Ara-pelatony",
      "Azo ampiasaina amin'ny Web sy Finday",
    ],
  },
  honeygain: {
    subtitle: "Fizarana internet",
    description:
      "Zarao angona internet tsy ampiasainao ary ampitovao fankasitrahana araka ny fetran'ny rafitra.",
    highlights: [
      "Zarao ny fandefasanao",
      "Ampiasao fitaovana maro mety",
      "Mamokatra velona tsy misy asa",
    ],
    rewardType: "PayPal & Crypto",
  },
  luckywatch: {
    subtitle: "Jereo & Mahazo",
    description:
      "Rakikiray amin'ny finday ahafahana mijery sary fanaovana sy manao asa kely mba hampiasa vola.",
    highlights: [
      "Jereo sary ary mahazo velona",
      "Ampiasao ny rakikiray avy amin'ny smartphone-nao",
      "Mandraiso ny asa samihafa",
    ],
  },
  playbb: {
    subtitle: "Puzzle & Sosialy",
    description:
      "Lalao puzzle amin'ny finday (« block-missing ») misy klase, fampirantiana azo lovia, fiaraha-monina sy zavatra omena.",
    highlights: [
      "Sokafy, hodino ary ovao ny bilaika",
      "Antso namana ary mahazo gems",
      "Endrika amin'ny entan-kevitra azo ampiasaina tsy misy fananganana",
    ],
  },
  biubiuclub: {
    subtitle: "Fiombonana an'ohitra & Party",
    description:
      "Rakikiray fiaraha-monina an'ohitra sy fialam-boly: kelkely, lalao eo amin'ny namana, zavatra omena ary tetikasa fampirantiana.",
    highlights: [
      "Kelkely amin'ny fotoana tena izy (feo sy soratra)",
      "Lalao sy asa eo amin'ny namana",
      "Invitez amis ary araho ny fankasitrahanao",
    ],
  },
};

/** Textes du site (pied de page) en malgache. */
export const siteConfigMg: { tagline: string; disclaimer: string } = {
  tagline:
    "Keo sehatra asa kely, fankasitrahana sy fahafahana mahazo velona an-tératra.",
  disclaimer:
    "Miova ny velona, ny fankasitrahana sy ny fetra araka ny sehatra tsirairay. Io tranonkala io dia maneho sehatra antsipiriany ka tsy manome famantarana vola. Marofo jerena foana ny fetran'ny rafitra tsirairay alohan'ny hanoratana anarana.",
};

/** Libellés des wallets du modal « Méthodes de paiement ». */
export const walletMethodsMg: Record<string, Partial<PaymentMethod>> = {
  faucetpay: { label: "Poamana crypto kely" },
  binance: { label: "Rafitra crypto" },
};
