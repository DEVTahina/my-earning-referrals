import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, CreditCard, Flame, Info, Star } from "lucide-react";
import type { Platform } from "../data/platforms";
import PaymentMethodsModal from "./PaymentMethodsModal";

/** Avatar de repli (initiale) si aucun logo n'est disponible. */
function LogoFallback({ name }: { name: string }) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return (
    <span
      className="pcard__logo pcard__logo--placeholder"
      style={{ background: `hsl(${hue}, 55%, 45%)` }}
      aria-hidden="true"
    >
      {name.charAt(0)}
    </span>
  );
}

export default function PlatformCard({ platform }: { platform: Platform }) {
  const [logoError, setLogoError] = useState(false);
  const [showPayments, setShowPayments] = useState(false);
  const hasLink = Boolean(platform.referralUrl);
  const showFallback = !platform.logo || logoError;

  return (
    <motion.article
      className="pcard"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      {platform.featured && (
        <span className="pcard__featured-badge">
          <Star size={12} />
          À la une
        </span>
      )}

      <div className="pcard__head">
        <div className="pcard__logo-box">
          {showFallback ? (
            <LogoFallback name={platform.name} />
          ) : (
            <img
              src={platform.logo ?? undefined}
              alt={`Logo ${platform.name}`}
              className="pcard__logo-img"
              loading="lazy"
              onError={() => setLogoError(true)}
            />
          )}
        </div>

        {platform.badges && platform.badges.length > 0 && (
          <div className="pcard__badges">
            {platform.badges.map((badge) => (
              <span
                key={badge}
                className={`pcard__badge pcard__badge--${badge.toLowerCase()}`}
              >
                {badge === "HOT" && <Flame size={11} />}
                {badge === "TOP" && <Star size={11} />}
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      <h3 className="pcard__name">{platform.name}</h3>
      {platform.subtitle && (
        <p className="pcard__subtitle">{platform.subtitle}</p>
      )}

      <p className="pcard__description">{platform.description}</p>

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
        aria-label={`Voir les méthodes de paiement de ${platform.name}`}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <CreditCard size={14} aria-hidden="true" />
        Méthodes de paiement
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
          className="btn btn--primary pcard__cta"
          aria-label={`Commencer à gagner avec ${platform.name} (nouvel onglet)`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          Commencer à gagner
          <ArrowRight size={16} />
        </motion.a>
      ) : (
        <button type="button" className="btn pcard__cta pcard__cta--disabled" disabled>
          Bientôt disponible
        </button>
      )}

      <Link
        to={`/platforms/${platform.id}`}
        className="pcard__about"
        aria-label={`En savoir plus sur ${platform.name}`}
      >
        <Info size={14} />
        À propos
      </Link>
    </motion.article>
  );
}
