import { siteConfig } from "../data/platforms";
import { Zap } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { localizeSiteConfig } from "../i18n/localize";

export default function Footer() {
  const { lang, t } = useLanguage();
  const config = localizeSiteConfig(lang);
  const navLinks = [
    { label: t("nav.home"), href: "#accueil" },
    { label: t("nav.platforms"), href: "#plateformes" },
    { label: t("nav.apps"), href: "#applications" },
    { label: t("nav.how"), href: "#comment-ca-marche" },
  ];

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
            <p className="footer__description">{config.tagline}</p>
          </div>

          <nav className="footer__nav" aria-label={t("nav.ariaFooter")}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="footer__link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer__socials">
            {config.socials.map((social) =>
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
          <p className="footer__disclaimer">{config.disclaimer}</p>
          <p className="footer__copy">
            © {new Date().getFullYear()} {siteConfig.name}. {t("footer.copy")}
          </p>
        </div>
      </div>
    </footer>
  );
}
