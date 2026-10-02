import { motion } from "motion/react";
import { Layers, UserPlus, ListChecks, Gift } from "lucide-react";
import FadeIn from "./FadeIn";

const steps = [
  {
    icon: Layers,
    title: "Choisissez une plateforme",
    text: "Parcourez la liste et sélectionnez celle qui correspond à vos envies.",
  },
  {
    icon: UserPlus,
    title: "Inscrivez-vous avec mon lien",
    text: "Créez votre compte sur la plateforme via le bouton dédié.",
  },
  {
    icon: ListChecks,
    title: "Effectuez les tâches disponibles",
    text: "Micro-tâches, sondages, offres : chaque plateforme propose ses missions.",
  },
  {
    icon: Gift,
    title: "Recevez vos récompenses",
    text: "Selon les conditions de chaque plateforme, cumulez vos gains.",
  },
];

export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="section">
      <div className="container">
        <FadeIn className="section__head">
          <span className="section__eyebrow">
            <ListChecks size={14} />
            Guide
          </span>
          <h2 className="section__title">Comment ça marche ?</h2>
          <p className="section__subtitle">
            Quatre étapes simples pour commencer sur les plateformes présentées.
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
              <h3 className="step__title">{step.title}</h3>
              <p className="step__text">{step.text}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
