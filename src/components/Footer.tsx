import { siteConfig } from "../data/platforms";
import { Zap } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Plateformes", href: "#plateformes" },
  { label: "Applications", href: "#applications" },
  { label: "Comment ça marche", href: "#comment-ca-marche" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#accueil" className="header__logo">
              <span className="header__logo-icon">
                <Zap size={18} strokeWidth={2.5} />
              </span>
              {siteConfig.name}
            </a>
            <p className="footer__description">{siteConfig.tagline}</p>
          </div>

          <nav className="footer__nav" aria-label="Navigation pied de page">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="footer__link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer__socials">
            {siteConfig.socials.map((social) =>
              social.url ? (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social"
                >
                  {social.label}
                </a>
              ) : (
                <span key={social.label} className="footer__social footer__social--disabled">
                  {social.label}
                </span>
              )
            )}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__disclaimer">{siteConfig.disclaimer}</p>
          <p className="footer__copy">
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
