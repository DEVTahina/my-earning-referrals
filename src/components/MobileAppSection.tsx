import { motion } from "motion/react";
import { Smartphone } from "lucide-react";
import { platforms } from "../data/platforms";
import MobileAppCard from "./MobileAppCard";
import FadeIn from "./FadeIn";
import { useLanguage } from "../hooks/useLanguage";

export default function MobileAppSection() {
  const { t } = useLanguage();
  const mobileApps = platforms.filter((p) => p.category === "mobile");

  return (
    <section id="applications" className="section section--alt">
      <div className="container">
        <FadeIn className="section__head">
          <span className="section__eyebrow section__eyebrow--alt">
            <Smartphone size={14} />
            Mobile
          </span>
          <h2 className="section__title">{t("apps.title")}</h2>
          <p className="section__subtitle">
            {t("apps.subtitle")}
          </p>
        </FadeIn>

        <motion.div
          className="grid grid--2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {mobileApps.map((app) => (
            <motion.div
              key={app.id}
              className="grid__cell"
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.21, 0.65, 0.36, 1] },
                },
              }}
            >
              <MobileAppCard platform={app} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
