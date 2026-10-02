import { AlertTriangle, Info, Lightbulb } from "lucide-react";
import type { GuideCallout } from "../../data/guides";

const icons = {
  info: Info,
  tip: Lightbulb,
  warning: AlertTriangle,
} as const;

/** Encarts « Important », « Conseil » et « Attention » issus du datasource. */
export default function GuideCallouts({
  callouts,
}: {
  callouts?: GuideCallout[];
}) {
  if (!callouts || callouts.length === 0) return null;

  return (
    <div className="gcallouts">
      {callouts.map((c) => {
        const Icon = icons[c.tone];
        return (
          <aside key={c.title} className={`gcallout gcallout--${c.tone}`}>
            <span className="gcallout__icon" aria-hidden="true">
              <Icon size={15} />
            </span>
            <div>
              <p className="gcallout__title">{c.title}</p>
              <p className="gcallout__text">{c.text}</p>
            </div>
          </aside>
        );
      })}
    </div>
  );
}