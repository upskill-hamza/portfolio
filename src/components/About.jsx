import Reveal from "./Reveal";
import Counter from "./Counter";
import SectionLabel from "./SectionLabel";
import { STATS } from "../data/portfolioData";

export default function About() {
  return (
    <section
      id="about"
      className="about-grid"
      style={{
        padding: "120px 48px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "center",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div>
        <Reveal>
          <SectionLabel>About Me</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(36px,4vw,52px)",
              fontWeight: 800,
              letterSpacing: "-2px",
              lineHeight: 1.05,
              marginBottom: "24px",
            }}
          >
            Code is my<br />superpower
          </h2>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", lineHeight: 1.9, color: "#5a6475", marginBottom: "16px" }}>
            I'm a 2nd year Computer Science student specializing in Data Science, passionate about building
            things that live on the internet, solving hard algorithmic challenges,
            and teaching machines to learn.
          </p>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", lineHeight: 1.9, color: "#5a6475" }}>
            When I'm not grinding LeetCode or training neural networks, you'll
            find me building side projects and exploring the intersection of robust engineering and visual storytelling—blending technical skills with my love for graphic design and photography.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginTop: "40px" }}>
          {STATS.map((stat, i) => (
            <Reveal key={i} delay={i * 100}>
              <div
                className="stat-card hoverable"
                style={{
                  padding: "24px",
                  border: "1px solid #1a2030",
                  background: "#0f1520",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span style={{ fontSize: "36px", fontWeight: 800, letterSpacing: "-2px", color: "#00e5ff", display: "block" }}>
                  <Counter target={stat.num} suffix={stat.suffix} />
                </span>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#5a6475", letterSpacing: "0.05em", marginTop: "4px" }}>
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={200} className="about-visual-col">
        <div
          style={{
            background: "#0f1520",
            border: "1px solid #1a2030",
            borderRadius: "8px",
            overflow: "hidden",
            fontFamily: "'DM Mono', monospace",
            fontSize: "12px",
            lineHeight: 1.7,
            boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,229,255,0.05)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "12px 16px",
              background: "rgba(255,255,255,0.03)",
              borderBottom: "1px solid #1a2030",
            }}
          >
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57" }} />
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#febc2e" }} />
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840" }} />
            <span style={{ marginLeft: "8px", fontSize: "11px", color: "#5a6475" }}>about_me.py</span>
          </div>

          <pre style={{ padding: "20px", margin: 0, overflowX: "auto", fontSize: "12px" }}>
            <span style={{ color: "#6272a4", fontStyle: "italic" }}># Hello, World! 👋{"\n\n"}</span>
            <span style={{ color: "#ff79c6" }}>class </span>
            <span style={{ color: "#00e5ff" }}>Developer</span>
            {":\n    "}
            <span style={{ color: "#ff79c6" }}>def </span>
            <span style={{ color: "#50fa7b" }}>__init__</span>
            {"(self):\n        self.name = "}
            <span style={{ color: "#f1fa8c" }}>"Hamza Ansari"</span>
            {"\n        self.role = "}
            <span style={{ color: "#f1fa8c" }}>"CS Student"</span>
            {"\n        self.year = "}
            <span style={{ color: "#bd93f9" }}>2</span>
            {"\n\n        self.skills = [\n            "}
            <span style={{ color: "#f1fa8c" }}>"Web Development"</span>
            {",\n            "}
            <span style={{ color: "#f1fa8c" }}>"Data Structures"</span>
            {",\n            "}
            <span style={{ color: "#f1fa8c" }}>"Machine Learning"</span>
            {",\n        ]\n\n    "}
            <span style={{ color: "#ff79c6" }}>def </span>
            <span style={{ color: "#50fa7b" }}>solve_problem</span>
            {"(self, problem):\n        "}
            <span style={{ color: "#6272a4", fontStyle: "italic" }}># Never give up 🔥</span>
            {"\n        "}
            <span style={{ color: "#ff79c6" }}>while not </span>
            {"self.solved(problem):\n            self.iterate()\n        "}
            <span style={{ color: "#ff79c6" }}>return </span>
            <span style={{ color: "#f1fa8c" }}>{'"Solution found!"\n\n'}</span>
            <span style={{ color: "#6272a4", fontStyle: "italic" }}># Currently building something cool...</span>
            {"\nHamza = "}
            <span style={{ color: "#00e5ff" }}>Developer</span>
            {"()\nHamza.solve_problem("}
            <span style={{ color: "#f1fa8c" }}>"future"</span>
            {")"}
          </pre>
        </div>
      </Reveal>
    </section>
  );
}