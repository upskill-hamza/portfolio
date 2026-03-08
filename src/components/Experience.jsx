import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { TIMELINE } from "../data/portfolioData";

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
            textAlign: "center",
          }}
        >
          Experience & Education
        </h2>
      </Reveal>

      <div className="timeline-container">

        <div className="timeline-center-line" />

        {TIMELINE.map((item, i) => {

          const isLeft = i % 2 === 0;

          return (
            <Reveal key={i} delay={i * 100}>
              <div
                className={`timeline-item ${isLeft ? "timeline-left" : "timeline-right"}`}
              >
                <div className="timeline-dot" />

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

                <div
                  className="desc-box"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "12px",
                    color: "#bec1c4",
                    lineHeight: 1.8,
                    maxWidth: "400px",
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