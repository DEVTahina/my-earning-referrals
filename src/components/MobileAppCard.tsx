import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, CreditCard, Smartphone, Info } from "lucide-react";
import type { Platform } from "../data/platforms";
import { trackReferralClick } from "../lib/analytics";
import PaymentMethodsModal from "./PaymentMethodsModal";
import { useLanguage } from "../hooks/useLanguage";
import { localizePlatform } from "../i18n/localize";

export default function MobileAppCard({ platform: raw }: { platform: Platform }) {
  const { lang, t } = useLanguage();
  const platform = localizePlatform(raw, lang);
  const [logoError, setLogoError] = useState(false);
  const [showPayments, setShowPayments] = useState(false);
  const hasLink = Boolean(platform.referralUrl);
  const showFallback = !platform.logo || logoError;

  return (
    <motion.article
      className="mcard"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <div className="mcard__glow" aria-hidden="true" />

      <div className="mcard__head">
        <div className="pcard__logo-box mcard__logo-box">
          {showFallback ? (
            <span className="mcard__icon" aria-hidden="true">
              <Smartphone size={20} />
            </span>
          ) : (
            <img
              src={platform.logo ?? undefined}
              alt={t("card.logoAlt", { name: platform.name })}
              className="pcard__logo-img"
              loading="lazy"
              onError={() => setLogoError(true)}
            />
          )}
        </div>

        {platform.badges && platform.badges.length > 0 && (
          <div className="pcard__badges">
            {platform.badges.map((badge) => (
              <span key={badge} className={`pcard__badge pcard__badge--${badge.toLowerCase()}`}>
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      <h3 className="mcard__name">{platform.name}</h3>
      {platform.subtitle && (
        <p className="pcard__subtitle">{platform.subtitle}</p>
      )}

      <p className="mcard__description">{platform.description}</p>

      {platform.highlights && platform.highlights.length > 0 && (
        <ul className="pcard__highlights">
          {platform.highlights.map((h) => (
            <li key={h} className="pcard__highlight">
              <span className="pcard__highlight-icon" aria-hidden="true">
                <Check size={12} />
              </span>
              {h}
            </li>
          ))}
        </ul>
      )}

      <motion.button
        type="button"
        className="pcard__payments"
        onClick={() => setShowPayments(true)}
        aria-haspopup="dialog"
        aria-label={t("card.paymentsAria", { name: platform.name })}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <CreditCard size={14} aria-hidden="true" />
        {t("card.payments")}
      </motion.button>

      <AnimatePresence>
        {showPayments && (
          <PaymentMethodsModal onClose={() => setShowPayments(false)} />
        )}
      </AnimatePresence>

      {hasLink ? (
        <motion.a
          href={platform.referralUrl ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary mcard__cta"
          aria-label={t("card.startAria", { name: platform.name })}
          onClick={() => trackReferralClick(platform, "mobile_app_card", platform.referralUrl)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          {t("cta.start")}
          <ArrowRight size={16} />
        </motion.a>
      ) : (
        <button type="button" className="btn mcard__cta mcard__cta--disabled" disabled>
          {t("cta.soon")}
        </button>
      )}

      <Link
        to={`/platforms/${platform.id}`}
        className="pcard__about"
        aria-label={t("card.aboutAria", { name: platform.name })}
      >
        <Info size={14} />
        {t("card.about")}
      </Link>
    </motion.article>
  );
}
