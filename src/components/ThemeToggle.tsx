import { AnimatePresence, motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
      title={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
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
