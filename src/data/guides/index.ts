import type { Guides } from "./types";

import { euroadsGuide } from "./euroads";
import { makeyoutaskGuide } from "./makeyoutask";
import { coinliGuide } from "./coinli";
import { avisoGuide } from "./aviso";
import { minitaskyGuide } from "./minitasky";
import { earntodayGuide } from "./earntoday";
import { teerbyteGuide } from "./teerbyte";
import { mxfinsGuide } from "./mxfins";
import { firefaucetGuide } from "./firefaucet";
import { prSocialGuide } from "./pr-social-tasks";
import { timebucksGuide } from "./timebucks";
import { surveooGuide } from "./surveoo";
import { faucetpayGuide } from "./faucetpay";
import { binanceGuide } from "./binance";
import { honeygainGuide } from "./honeygain";
import { luckywatchGuide } from "./luckywatch";

export type {
  Guides,
  PlatformGuide,
  GuideBlock,
  GuideStep,
  GuideSubStep,
  GuideFaq,
  GuideCallout,
  GuideMistake,
  GuideSource,
  GuideWithdrawal,
  CalloutTone,
} from "./types";
export { GUIDES_LAST_VERIFIED } from "./types";

/**
 * Datasource centralisé des guides « À propos ».
 * Chaque guide est rédigé à partir des sources officielles listées
 * dans `officialSources` (non affichées sur le site).
 */
export const guides: Guides = {
  euroads: euroadsGuide,
  makeyoutask: makeyoutaskGuide,
  coinli: coinliGuide,
  aviso: avisoGuide,
  minitasky: minitaskyGuide,
  earntoday: earntodayGuide,
  teerbyte: teerbyteGuide,
  mxfins: mxfinsGuide,
  firefaucet: firefaucetGuide,
  "pr-social-tasks": prSocialGuide,
  timebucks: timebucksGuide,
  surveoo: surveooGuide,
  faucetpay: faucetpayGuide,
  binance: binanceGuide,
  honeygain: honeygainGuide,
  luckywatch: luckywatchGuide,
};

export default guides;