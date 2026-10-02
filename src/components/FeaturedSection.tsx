import { motion } from "motion/react";
import { Flame } from "lucide-react";
import { platforms } from "../data/platforms";
import PlatformCard from "./PlatformCard";
import FadeIn from "./FadeIn";

export default function FeaturedSection() {
  const featured = platforms.filter((p) => p.featured);

  if (featured.length === 0) return null;

  return (
    <section id="a-decouvrir" className="section section--alt">
      <div className="container">
        <FadeIn className="section__head">
          <span className="section__eyebrow">
            <Flame size={14} />
            Sélection
          </span>
          <h2 className="section__title">Plateformes recommandées</h2>
          <p className="section__subtitle">
            Une sélection de plateformes à découvrir parmi celles présentées.
          </p>
        </FadeIn>

        <motion.div
          className="grid grid--3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
        >
          {featured.map((platform) => (
            <motion.div
              key={platform.id}
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
              <PlatformCard platform={platform} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
