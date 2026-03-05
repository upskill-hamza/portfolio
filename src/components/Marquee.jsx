import { MARQUEE_ITEMS } from "../data/portfolioData";

/**
 * Marquee — horizontally scrolling skills strip between Hero and About.
 */
export default function Marquee() {
  // Duplicate items so the loop is seamless
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid #1a2030",
        borderBottom: "1px solid #1a2030",
        padding: "18px 0",
        background: "#0d1117",
      }}
    >
      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "12px",
              letterSpacing: "0.1em",
              color: item.accent ? "#00e5ff" : "#5a6475",
              padding: "0 40px",
              whiteSpace: "nowrap",
              borderRight: "1px solid #1a2030",
            }}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
