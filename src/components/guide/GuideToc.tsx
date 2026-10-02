/** Sommaire du guide : navigation par ancres avec scroll fluide. */
export default function GuideToc({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav className="gtoc" aria-label="Sommaire du guide">
      <span className="gtoc__label">Sommaire</span>
      <ol className="gtoc__list">
        {items.map((item, i) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="gtoc__link">
              <span className="gtoc__num">{String(i + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
