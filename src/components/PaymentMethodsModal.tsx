import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import { ArrowUpRight, CreditCard, ExternalLink, X } from "lucide-react";
import { WALLET_LINK_METHODS } from "../data/platforms";
import { trackWalletClick } from "../lib/analytics";

/**
 * Modal "Méthodes de paiement" — identique sur toutes les cards :
 * affiche vos deux liens referral wallet (FaucetPay et Binance),
 * ouverts dans un nouvel onglet.
 */
export default function PaymentMethodsModal({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  // Fermeture avec Escape + focus initial sur le bouton fermer.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  // Verrouille le scroll de la page tant que le modal est ouvert.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  // Rendu en portal : évite que le transform au hover de la card ne
  // devienne le référentiel du positionnement fixed du modal.
  return createPortal(
    <div
      className="pmodal__overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        className="pmodal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pmodal-title"
        initial={{ opacity: 0, y: 18, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
      >
        <div className="pmodal__head">
          <h4 className="pmodal__title" id="pmodal-title">
            <CreditCard size={16} aria-hidden="true" />
            Méthodes de paiement
          </h4>
          <button
            type="button"
            ref={closeRef}
            className="pmodal__close"
            onClick={onClose}
            aria-label="Fermer le modal des méthodes de paiement"
          >
            <X size={17} />
          </button>
        </div>

        <p className="pmodal__note">
          Créez votre portefeuille pour recevoir vos gains :
        </p>

        <ul className="pmodal__list">
          {WALLET_LINK_METHODS.map((method) => (
            <li key={method.id}>
              <a
                href={method.referralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pmodal__item pmodal__item--link"
                aria-label={`${method.name} — ouvrir dans un nouvel onglet`}
                onClick={() => trackWalletClick(method, "payment_methods_modal", method.referralUrl)}
              >
                {method.logo ? (
                  <span className="pmodal__logo" aria-hidden="true">
                    <img src={method.logo} alt="" width={22} height={22} />
                  </span>
                ) : (
                  <span className="pmodal__logo pmodal__logo--generic" aria-hidden="true">
                    {method.name.charAt(0)}
                  </span>
                )}
                <span className="pmodal__method-info">
                  <span className="pmodal__method-name">
                    {method.name}
                    <ExternalLink
                      size={12}
                      className="pmodal__method-link-icon"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="pmodal__method-type">{method.label}</span>
                </span>
                <ArrowUpRight size={16} className="pmodal__arrow" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <button type="button" className="btn pmodal__close-btn" onClick={onClose}>
          Fermer
        </button>
      </motion.div>
    </div>,
    document.body
  );
}
