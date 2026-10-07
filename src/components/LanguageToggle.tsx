import { useLanguage } from "../hooks/useLanguage";
import { LANGUAGES } from "../i18n/types";

/**
 * Sélecteur de langue : deux segments visibles (🇫🇷 Français ↔ 🇲🇬 Malagasy),
 * miroir du bouton de thème — état mémorisé dans localStorage, clic pour basculer.
 * Les drapeaux sont dessinés en CSS (les emojis de drapeaux ne s'affichent pas sur Windows).
 */
export default function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="lang-toggle" role="group" aria-label={t("lang.switch")}>
      {LANGUAGES.map((l) => {
        const active = l.code === lang;
        return (
          <button
            key={l.code}
            type="button"
            className={`lang-toggle__option${active ? " is-active" : ""}`}
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            aria-label={active ? l.label : `${t("lang.switch")} : ${l.label}`}
            title={active ? l.label : `${t("lang.switch")} : ${l.label}`}
          >
            <span className={`lang-flag lang-flag--${l.code}`} aria-hidden="true" />
            <span className="lang-toggle__label">{l.label}</span>
          </button>
        );
      })}
    </div>
  );
}
