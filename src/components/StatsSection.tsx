import { motion } from "motion/react";
import { Globe, Smartphone, MousePointerClick, Sparkles } from "lucide-react";
import { platforms } from "../data/platforms";

const stats = [
  { icon: Sparkles, label: "plateformes disponibles" },
  { icon: Globe, label: "accessibles via navigateur" },
  { icon: Smartphone, label: "applications mobiles" },
  { icon: MousePointerClick, label: "accès simple, sans inscription ici" },
];

export default function StatsSection() {
  const total = platforms.length;
  const websites = platforms.filter((p) => p.category === "website").length;
  const mobile = platforms.filter((p) => p.category === "mobile").length;

  const values = [`${total}+`, `${websites}`, `${mobile}`, "100%"];

  return (
    <section className="stats" aria-label="Introduction">
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
              <span className="stats__label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
