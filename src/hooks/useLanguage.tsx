import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { fr, type TranslationKey } from "../i18n/fr";
import { mg } from "../i18n/mg";
import { DEFAULT_LANGUAGE, HTML_LANG, type Language } from "../i18n/types";

const STORAGE_KEY = "earnzone-language";

const dictionaries: Record<Language, Partial<Record<TranslationKey, string>>> = {
  fr,
  mg,
};

/**
 * Langue initiale : localStorage sinon français (langue par défaut).
 * Contrairement au thème, aucune préférence système n'est lue.
 */
function getInitialLanguage(): Language {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === "mg" ? "mg" : DEFAULT_LANGUAGE;
}

interface LanguageValue {
  lang: Language;
  setLang: (lang: Language) => void;
  /** Passe fr ↔ mg (usage du bouton de langue). */
  toggle: () => void;
  /** Traduit une clé du dictionnaire, avec interpolation {name}, {date}… */
  t: (key: TranslationKey, vars?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageValue | null>(null);

/**
 * Fournisseur de langue, miroir de la logique de `useTheme` :
 * application de `<html lang>`, persistance dans localStorage,
 * français par défaut.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.setAttribute("lang", HTML_LANG[lang]);
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((l) => (l === "fr" ? "mg" : "fr"));
  }, []);

  const t = useCallback(
    (key: TranslationKey, vars?: Record<string, string | number>) => {
      const raw = dictionaries[lang][key] ?? fr[key] ?? key;
      if (!vars) return raw;
      return raw.replace(/\{(\w+)\}/g, (match, name) =>
        name in vars ? String(vars[name]) : match
      );
    },
    [lang]
  );

  const value = useMemo<LanguageValue>(
    () => ({ lang, setLang, toggle, t }),
    [lang, toggle, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

/** Accès à la langue courante — à consommer dans les composants rendant du texte. */
export function useLanguage(): LanguageValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage doit être utilisé dans <LanguageProvider>");
  }
  return ctx;
}
