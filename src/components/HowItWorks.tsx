import { motion } from "motion/react";
import { Layers, UserPlus, ListChecks, Gift, type LucideIcon } from "lucide-react";
import FadeIn from "./FadeIn";
import { useLanguage } from "../hooks/useLanguage";
import type { TranslationKey } from "../i18n/fr";

const steps: { icon: LucideIcon; title: TranslationKey; text: TranslationKey }[] = [
  {
    icon: Layers,
    title: "how.s1.title",
    text: "how.s1.text",
  },
  {
    icon: UserPlus,
    title: "how.s2.title",
    text: "how.s2.text",
  },
  {
    icon: ListChecks,
    title: "how.s3.title",
    text: "how.s3.text",
  },
  {
    icon: Gift,
    title: "how.s4.title",
    text: "how.s4.text",
  },
];

export default function HowItWorks() {
  const { t } = useLanguage();
  return (
    <section id="comment-ca-marche" className="section">
      <div className="container">
        <FadeIn className="section__head">
          <span className="section__eyebrow">
            <ListChecks size={14} />
            {t("how.eyebrow")}
          </span>
          <h2 className="section__title">{t("how.title")}</h2>
          <p className="section__subtitle">
            {t("how.subtitle")}
          </p>
        </FadeIn>

        <motion.ol
          className="steps"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.09 } },
          }}
        >
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              className="step"
              variants={{
                hidden: { opacity: 0, y: 26 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.21, 0.65, 0.36, 1] },
                },
              }}
            >
              <span className="step__number">{String(i + 1).padStart(2, "0")}</span>
              <span className="step__icon" aria-hidden="true">
                <step.icon size={22} />
              </span>
              <h3 className="step__title">{t(step.title)}</h3>
              <p className="step__text">{t(step.text)}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
