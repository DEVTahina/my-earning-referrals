import { AnimatePresence, motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../hooks/useLanguage";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? t("theme.enableLight") : t("theme.enableDark")}
      title={isDark ? t("theme.switchLight") : t("theme.switchDark")}
    >
      <span className="theme-toggle__track">
        <motion.span
          className="theme-toggle__thumb"
          animate={{ x: isDark ? 0 : 22 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <AnimatePresence initial={false} mode="wait">
            {isDark ? (
              <motion.span
                key="moon"
                className="theme-toggle__icon"
                initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                transition={{ duration: 0.18 }}
              >
                <Moon size={14} />
              </motion.span>
            ) : (
              <motion.span
                key="sun"
                className="theme-toggle__icon"
                initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
                transition={{ duration: 0.18 }}
              >
                <Sun size={14} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.span>
      </span>
    </button>
  );
}
