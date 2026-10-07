import { motion } from "motion/react";
import { ArrowDown, Rocket } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function CTASection() {
  const { t } = useLanguage();
  const scrollToPlatforms = () => {
    document.getElementById("plateformes")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="cta">
      <div className="container">
        <motion.div
          className="cta__box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.65, 0.36, 1] }}
        >
          <h2 className="cta__title">{t("cta.title")}</h2>
          <p className="cta__text">
            {t("cta.text")}
          </p>
          <motion.button
            type="button"
            className="btn btn--light btn--lg"
            onClick={scrollToPlatforms}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Rocket size={18} />
            {t("cta.seePlatforms")}
            <ArrowDown size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
