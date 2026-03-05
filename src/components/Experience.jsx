import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { TIMELINE } from "../data/portfolioData";

/**
 * Experience — vertical timeline with scroll-triggered reveal per item.
 */
export default function Experience() {
  return (
    <section id="experience" style={{ padding: "120px 48px", maxWidth: "1200px", margin: "0 auto" }}>
      <Reveal>
        <SectionLabel>Journey</SectionLabel>
        <h2
          style={{
            fontSize: "clamp(36px,4vw,52px)",
            fontWeight: 800,
            letterSpacing: "-2px",
            lineHeight: 1.05,
            marginBottom: "64px",
          }}
        >
          Experience &amp; Education
        </h2>
      </Reveal>

      {/* Timeline */}
      <div style={{ paddingLeft: "48px", position: "relative" }}>
        {/* Vertical line */}
        <div className="timeline-line" />

        {TIMELINE.map((item, i) => (
          <Reveal key={i} delay={i * 100}>
            <div style={{ position: "relative", marginBottom: "56px" }}>
              {/* Dot */}
              <div
                style={{
                  position: "absolute",
                  left: "-52px", top: "8px",
                  width: "10px", height: "10px",
                  borderRadius: "50%",
                  background: "#080c10",
                  border: "2px solid #00e5ff",
                  boxShadow: "0 0 12px rgba(0,229,255,0.4)",
                }}
              />

              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#00e5ff", letterSpacing: "0.1em", marginBottom: "8px" }}>
                {item.date}
              </div>
              <div style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "4px" }}>
                {item.role}
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "#5a6475", marginBottom: "16px" }}>
                {item.org}
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "#5a6475", lineHeight: 1.8, maxWidth: "600px" }}>
                {item.desc}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
