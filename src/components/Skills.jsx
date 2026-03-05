import { useState } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { SKILL_CATS } from "../data/portfolioData";

function SkillCard({ cat }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className="skill-cat hoverable"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "36px",
        border: `1px solid ${hov ? "rgba(0,229,255,0.3)" : "#1a2030"}`,
        background: "#0f1520",
        position: "relative",
        overflow: "hidden",
        transform: hov ? "translateY(-4px)" : "none",
        transition: "border-color 0.3s, transform 0.3s",
      }}
    >
      {/* Bottom glow line on hover */}
      <div
        className="skill-bottom-line"
        style={{ opacity: hov ? 1 : 0 }}
      />

      <span style={{ fontSize: "28px", marginBottom: "20px", display: "block" }}>{cat.icon}</span>

      <div style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "8px" }}>
        {cat.title}
      </div>

      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#5a6475", lineHeight: 1.7, marginBottom: "24px" }}>
        {cat.desc}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {cat.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.05em",
              padding: "4px 10px",
              border: `1px solid ${hov ? "rgba(0,229,255,0.2)" : "#1a2030"}`,
              color: hov ? "#00e5ff" : "#5a6475",
              background: hov ? "rgba(0,229,255,0.04)" : "transparent",
              transition: "all 0.2s",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * Skills — three-column grid of skill category cards.
 */
export default function Skills() {
  return (
    <section id="skills" style={{ padding: "120px 48px", maxWidth: "1200px", margin: "0 auto" }}>
      <Reveal>
        <SectionLabel>Expertise</SectionLabel>
        <h2
          style={{
            fontSize: "clamp(36px,4vw,52px)",
            fontWeight: 800,
            letterSpacing: "-2px",
            lineHeight: 1.05,
            marginBottom: "64px",
          }}
        >
          What I Work With
        </h2>
      </Reveal>

      <div
        className="skills-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }}
      >
        {SKILL_CATS.map((cat, i) => (
          <Reveal key={i} delay={i * 100}>
            <SkillCard cat={cat} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
