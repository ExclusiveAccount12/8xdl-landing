import Logo8XDL from './Logo'

export default function PolicyHeroPanel({
  kicker,
  title,
  subtitle,
  meta,
  summaryTitle,
  summaryItems = [],
}) {
  return (
    <div className="policy-hero-panel">
      <div className="legal-hero policy-hero-copy">
        <span className="legal-kicker">{kicker}</span>
        <h1>{title}</h1>
        <p className="subtitle">{subtitle}</p>
        <div className="legal-meta">
          {meta.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <aside className="policy-brand-card" aria-label={`${title} summary`}>
        <div className="policy-brand-top">
          <div className="policy-logo-shell">
            <Logo8XDL size={72} />
          </div>
          <div>
            <span className="policy-brand-kicker">8XDL Android suite</span>
            <strong>{summaryTitle}</strong>
          </div>
        </div>

        <div className="policy-summary-list">
          {summaryItems.map((item) => (
            <article key={item} className="policy-summary-item">
              <span className="policy-summary-dot" />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </aside>
    </div>
  )
}
