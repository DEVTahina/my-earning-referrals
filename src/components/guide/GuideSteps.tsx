import type { GuideStep } from "../../data/guides";

/** Liste d'étapes numérotées réutilisable (inscription, guide A→Z…). */
export default function GuideSteps({ steps }: { steps: GuideStep[] }) {
  return (
    <ol className="gsteps">
      {steps.map((s) => (
        <li key={s.step} className="gsteps__item">
          <span className="gsteps__num" aria-hidden="true">
            {String(s.step).padStart(2, "0")}
          </span>
          <div className="gsteps__body">
            <h4 className="gsteps__title">{s.title}</h4>
            <p className="gsteps__text">{s.description}</p>
            {s.tips && s.tips.length > 0 && (
              <ul className="gsteps__tips">
                {s.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}