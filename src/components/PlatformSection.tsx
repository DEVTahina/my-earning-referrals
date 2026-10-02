import { motion } from "motion/react";
import { Globe } from "lucide-react";
import { platforms } from "../data/platforms";
import PlatformCard from "./PlatformCard";
import FadeIn from "./FadeIn";

export default function PlatformSection() {
  const websites = platforms.filter((p) => p.category === "website");

  return (
    <section id="plateformes" className="section">
      <div className="container">
        <FadeIn className="section__head">
          <span className="section__eyebrow">
            <Globe size={14} />
            Web
          </span>
          <h2 className="section__title">Plateformes Web</h2>
          <p className="section__subtitle">
            Découvrez différentes plateformes accessibles depuis votre navigateur.
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
          {websites.map((platform) => (
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
