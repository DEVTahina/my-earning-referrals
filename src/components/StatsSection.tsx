import { motion } from "motion/react";
import { Globe, Smartphone, MousePointerClick, Sparkles } from "lucide-react";
import { platforms } from "../data/platforms";
import { useLanguage } from "../hooks/useLanguage";
import type { TranslationKey } from "../i18n/fr";

const stats: { icon: typeof Globe; label: TranslationKey }[] = [
  { icon: Sparkles, label: "stats.platforms" },
  { icon: Globe, label: "stats.web" },
  { icon: Smartphone, label: "stats.mobile" },
  { icon: MousePointerClick, label: "stats.access" },
];

export default function StatsSection() {
  const { t } = useLanguage();
  const total = platforms.length;
  const websites = platforms.filter((p) => p.category === "website").length;
  const mobile = platforms.filter((p) => p.category === "mobile").length;

  const values = [`${total}+`, `${websites}`, `${mobile}`, "100%"];

  return (
    <section className="stats" aria-label={t("stats.aria")}>
      <div className="container">
        <motion.div
          className="stats__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stats__item"
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.21, 0.65, 0.36, 1] },
                },
              }}
            >
              <stat.icon size={22} className="stats__icon" />
              <span className="stats__value">{values[i]}</span>
              <span className="stats__label">{t(stat.label)}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
