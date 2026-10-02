import { ChevronDown } from "lucide-react";
import type { GuideBlock } from "../../data/guides";

/**
 * Méthodes de gain en accordéon (le premier bloc est ouvert par défaut).
 * Les sous-étapes ne s'affichent que si elles existent dans le datasource.
 */
export default function GuideAccordion({ blocks }: { blocks: GuideBlock[] }) {
  return (
    <div className="gaccordion">
      {blocks.map((b, i) => (
        <details
          key={b.title}
          className="gaccordion__item"
          open={i === 0 ? true : undefined}
        >
          <summary className="gaccordion__summary">
            <h4 className="gaccordion__title">{b.title}</h4>
            <ChevronDown size={17} className="gaccordion__chevron" aria-hidden="true" />
          </summary>
          <div className="gaccordion__body">
            <p className="gaccordion__text">{b.description}</p>
            {b.steps && b.steps.length > 0 && (
              <ol className="gaccordion__steps">
                {b.steps.map((s, index) => (
                  <li key={s.title} className="gaccordion__step">
                    <span className="gaccordion__num" aria-hidden="true">
                      {index + 1}
                    </span>
                    <div>
                      <p className="gaccordion__step-title">{s.title}</p>
                      <p className="gaccordion__step-text">{s.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}