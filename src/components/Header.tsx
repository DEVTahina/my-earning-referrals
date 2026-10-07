import { useEffect, useState } from "react";
import { Menu, X, Rocket, Zap } from "lucide-react";
import { siteConfig } from "../data/platforms";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../hooks/useLanguage";

export default function Header() {
  const { t } = useLanguage();
  const navLinks = [
    { label: t("nav.home"), href: "#accueil" },
    { label: t("nav.platforms"), href: "#plateformes" },
    { label: t("nav.apps"), href: "#applications" },
    { label: t("nav.how"), href: "#comment-ca-marche" },
  ];

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header__inner">
        <a href="#accueil" className="header__logo" onClick={() => setOpen(false)}>
          <span className="header__logo-icon">
            <Zap size={18} strokeWidth={2.5} />
          </span>
          {siteConfig.name}
        </a>

        <nav className="header__nav" aria-label={t("nav.ariaMain")}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="header__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <LanguageToggle />
          <ThemeToggle />
          <a href="#plateformes" className="btn btn--primary btn--sm header__cta">
            <Rocket size={16} />
            {t("cta.start")}
          </a>
        </div>

        <button
          type="button"
          className="header__burger"
          aria-label={open ? t("menu.close") : t("menu.open")}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="header__mobile" aria-label={t("nav.ariaMobile")}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="header__mobile-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="header__mobile-row">
            <LanguageToggle />
            <ThemeToggle />
            <a
              href="#plateformes"
              className="btn btn--primary header__mobile-cta"
              onClick={() => setOpen(false)}
            >
              <Rocket size={18} />
              {t("cta.start")}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
