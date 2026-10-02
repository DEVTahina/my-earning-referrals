import type { GuideBlock } from "../../data/guides";

/** Grille de blocs réutilisable (fonctionnalités, méthodes de gain…). */
export default function GuideBlocks({ blocks }: { blocks: GuideBlock[] }) {
  return (
    <div className="gblocks">
      {blocks.map((b) => (
        <div key={b.title} className="gblocks__item">
          <h4 className="gblocks__title">{b.title}</h4>
          <p className="gblocks__text">{b.description}</p>
        </div>
      ))}
    </div>
  );
}
