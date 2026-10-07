import { motion } from "motion/react";
import { Rocket, Compass, Globe, Smartphone } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

const easeOut = [0.21, 0.65, 0.36, 1] as const;

export default function Hero() {
  const { t } = useLanguage();

  const scrollToPlatforms = () => {
    document.getElementById("plateformes")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="accueil" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <motion.span
            className="hero__badge"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <Globe size={14} />
            Web
            <span className="hero__badge-sep">•</span>
            <Smartphone size={14} />
            Mobile
          </motion.span>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: easeOut }}
          >
            {t("hero.title")}{" "}
            <span className="hero__title-accent">{t("hero.titleAccent")}</span>
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease: easeOut }}
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24, ease: easeOut }}
          >
            <motion.button
              type="button"
              className="btn btn--primary btn--lg"
              onClick={scrollToPlatforms}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Rocket size={18} />
              {t("cta.start")}
            </motion.button>
            <motion.a
              href="#plateformes"
              className="btn btn--ghost btn--lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Compass size={18} />
              {t("cta.seePlatforms")}
            </motion.a>
          </motion.div>

          <motion.p
            className="hero__note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t("hero.note")}
          </motion.p>
        </div>

        <motion.div
          className="hero__visual"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
        >
          <motion.div
            className="hero__card hero__card--main"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="hero__coin">🪙</span>
            <div className="hero__card-line" />
            <div className="hero__card-line hero__card-line--short" />
          </motion.div>
          <motion.div
            className="hero__card hero__card--float-1"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            <span>📱</span>
          </motion.div>
          <motion.div
            className="hero__card hero__card--float-2"
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          >
            <span>✅</span>
          </motion.div>
          <motion.div
            className="hero__card hero__card--float-3"
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          >
            <span>🎁</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
