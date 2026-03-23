import { useState } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { PROJECTS } from "../data/portfolioData";

function ProjectCard({ project, delay = 0 }) {
  const [hov, setHov] = useState(false);

  return (
    <Reveal delay={delay}>
      <div
        className={`hoverable${project.featured ? " featured-card" : ""}`}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          background: "#0f1520",
          border: `1px solid ${hov ? "rgba(0,229,255,0.3)" : "#1a2030"}`,
          overflow: "hidden",
          position: "relative",
          transform: hov ? "translateY(-6px)" : "none",
          transition: "border-color 0.3s, transform 0.3s",
          display: project.featured ? "grid" : "block",
          gridTemplateColumns: project.featured ? "1fr 1fr" : undefined,
        }}
      >
        <div
          style={{
            height: project.featured ? "auto" : "220px",
            minHeight: project.featured ? "280px" : undefined,
            background: "#0d1117",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: project.featured ? "64px" : "48px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="grid-lines" />
          <div
            style={{
              position: "absolute", inset: 0,
              background: `radial-gradient(circle at 50% 50%, ${project.glow}, transparent 70%)`,
            }}
          />
          <div style={{ position: "relative", width: "90%", height: "90%"  }}>
            {/* Screenshot */}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                style={{
                  border: "2px solid rgba(255,255,255,0.6)",
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: hov ? 1 : 0,
                  transform: hov ? "translateY(0) scale(1)" : "translateY(20px) scale(1.05)",
                  transition: "opacity 0.35s ease, transform 0.35s ease",
                  zIndex: 1,
                }}
              />
            )}

            {/* Icon */}
            <span
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: project.featured ? "64px" : "48px",
                opacity: hov ? 0 : 1,
                transform: hov ? "translateY(-20px)" : "translateY(0)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
                zIndex: 2,
              }}
            >
              {project.icon}
            </span>
          </div>
        </div>

        <div style={{ padding: "32px" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#5a6475", letterSpacing: "0.1em", marginBottom: "12px" }}>
            {project.num}
          </div>
          <div style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "10px" }}>
            {project.title}
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "#5a6475", lineHeight: 1.7, marginBottom: "24px" }}>
            {project.desc}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
            {project.stack.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "10px",
                  padding: "4px 10px",
                  borderRadius: "2px",
                  background: "rgba(0,229,255,0.08)",
                  color: "#00e5ff",
                  letterSpacing: "0.05em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            className="hoverable"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              color: hov ? "#00e5ff" : "#e8edf5",
              textDecoration: "none",
              letterSpacing: "0.05em",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "color 0.2s",
            }}
          >
            View Project
            <span style={{ display: "inline-block", transform: hov ? "translateX(4px)" : "none", transition: "transform 0.2s" }}>→</span>
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const [featured, ...rest] = PROJECTS;

  return (
    <section id="projects" className="projects-section" style={{ padding: "120px 48px", maxWidth: "1200px", margin: "0 auto" }}>
      <Reveal>
        <SectionLabel>Work</SectionLabel>
        <h2
          style={{
            fontSize: "clamp(36px,4vw,52px)",
            fontWeight: 800,
            letterSpacing: "-2px",
            lineHeight: 1.05,
            marginBottom: "64px",
          }}
        >
          Featured Projects
        </h2>
      </Reveal>

      <div
        className="projects-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}
      >
        <div style={{ gridColumn: "1 / -1" }} className="project-featured">
          <ProjectCard project={featured} delay={0} />
        </div>

        {rest.map((p, i) => (
          <ProjectCard key={p.num} project={p} delay={(i + 1) * 100} />
        ))}
      </div>
    </section>
  );
}
