import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { TIMELINE } from "../data/portfolioData";

/**
 * Experience — alternating left/right timeline.
 */
export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "clamp(60px, 10vw, 120px) clamp(24px, 5vw, 48px)",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <Reveal>
        <SectionLabel>Journey</SectionLabel>
        <h2
          style={{
            fontSize: "clamp(36px,4vw,52px)",
            fontWeight: 800,
            letterSpacing: "-2px",
            lineHeight: 1.05,
            marginBottom: "64px",
            textAlign: "center", // Centered heading looks great with a center timeline
          }}
        >
          Experience & Education
        </h2>
      </Reveal>

      <div className="timeline-container">
        {/* The center gradient line */}
        <div className="timeline-center-line" />

        {TIMELINE.map((item, i) => {
          // Even numbers (0, 2, 4) go left. Odd numbers (1, 3, 5) go right.
          const isLeft = i % 2 === 0;

          return (
            <Reveal key={i} delay={i * 100}>
              <div
                className={`timeline-item ${isLeft ? "timeline-left" : "timeline-right"}`}
              >
                {/* Glowing Dot */}
                <div className="timeline-dot" />

                {/* Date */}
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "11px",
                    color: "#00e5ff",
                    letterSpacing: "0.1em",
                    marginBottom: "8px",
                  }}
                >
                  {item.date}
                </div>

                {/* Role / Degree */}
                <div
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    letterSpacing: "-0.5px",
                    marginBottom: "4px",
                  }}
                >
                  {item.role}
                </div>

                {/* Organization / University */}
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "13px",
                    color: "#5a6475",
                    marginBottom: "16px",
                  }}
                >
                  {item.org}
                </div>

                {/* Description */}
                <div
                  className="desc-box"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "12px",
                    color: "#bec1c4",
                    lineHeight: 1.8,
                    maxWidth: "400px", // Shorter max-width so it fits on half the screen
                  }}
                >
                  {item.desc}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}