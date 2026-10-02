import { ChevronDown } from "lucide-react";
import type { GuideFaq } from "../../data/guides";

/** FAQ en accordéon (details/summary : accessible et léger). */
export default function GuideFaqList({ items }: { items: GuideFaq[] }) {
  return (
    <div className="gfaq">
      {items.map((item) => (
        <details key={item.question} className="gfaq__item">
          <summary className="gfaq__question">
            {item.question}
            <ChevronDown size={16} className="gfaq__chevron" aria-hidden="true" />
          </summary>
          <p className="gfaq__answer">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
