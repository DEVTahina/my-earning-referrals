import { useEffect, useState } from "react";
import { Menu, X, Rocket, Zap } from "lucide-react";
import { siteConfig } from "../data/platforms";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Plateformes", href: "#plateformes" },
  { label: "Applications", href: "#applications" },
  { label: "Comment ça marche", href: "#comment-ca-marche" },
];

export default function Header() {
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

        <nav className="header__nav" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="header__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <ThemeToggle />
          <a href="#plateformes" className="btn btn--primary btn--sm header__cta">
            <Rocket size={16} />
            Commencer à gagner
          </a>
        </div>

        <button
          type="button"
          className="header__burger"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="header__mobile" aria-label="Navigation mobile">
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
            <ThemeToggle />
            <a
              href="#plateformes"
              className="btn btn--primary header__mobile-cta"
              onClick={() => setOpen(false)}
            >
              <Rocket size={18} />
              Commencer à gagner
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
