/**
 * Hero — full-viewport landing section with animated orbs and grid.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid overlay */}
      <div className="hero-grid" />

      {/* Orb 1 */}
      <div
        style={{
          position: "absolute",
          width: "600px", height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,229,255,0.12), transparent 70%)",
          top: "-100px", right: "-100px",
          filter: "blur(120px)",
          animation: "float1 8s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      {/* Orb 2 */}
      <div
        style={{
          position: "absolute",
          width: "400px", height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.1), transparent 70%)",
          bottom: 0, left: "100px",
          filter: "blur(120px)",
          animation: "float2 10s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div style={{ maxWidth: "900px", position: "relative", zIndex: 2 }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            letterSpacing: "0.12em",
            color: "#00e5ff",
            border: "1px solid rgba(0,229,255,0.25)",
            padding: "6px 14px",
            background: "rgba(0,229,255,0.04)",
            marginBottom: "32px",
            animation: "fadeUp 0.8s 0.2s both",
          }}
        >
          <span
            style={{
              width: "6px", height: "6px",
              borderRadius: "50%",
              background: "#00e5ff",
              animation: "blink 1.5s infinite",
              display: "inline-block",
            }}
          />
          Available for internships &amp; projects
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: "clamp(56px, 8vw, 108px)",
            fontWeight: 800,
            lineHeight: 0.92,
            letterSpacing: "-3px",
            marginBottom: "24px",
            animation: "fadeUp 0.8s 0.4s both",
          }}
        >
          Building
          <br />
          <span
            style={{
              WebkitTextStroke: "1.5px rgba(255,255,255,0.2)",
              color: "transparent",
              display: "block",
            }}
          >
            the future
          </span>
        </h1>

        {/* Description */}
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "14px",
            lineHeight: 1.8,
            color: "#5a6475",
            maxWidth: "480px",
            marginBottom: "48px",
            animation: "fadeUp 0.8s 0.6s both",
          }}
        >
          CS student specializing in Web Development, Data Structures &amp; Algorithms,
          and Machine Learning. I turn complex problems into elegant solutions.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            animation: "fadeUp 0.8s 0.8s both",
          }}
        >
          <a href="#projects" className="btn-primary hoverable">View My Work</a>
          <a href="#contact"  className="btn-outline  hoverable">Get In Touch</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "40px", left: "48px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontFamily: "'DM Mono', monospace",
          fontSize: "11px",
          color: "#5a6475",
          letterSpacing: "0.08em",
          animation: "fadeUp 0.8s 1s both",
        }}
      >
        <div
          style={{
            width: "40px", height: "1px",
            background: "#5a6475",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute", inset: 0,
              background: "#00e5ff",
              animation: "scanline 2s linear infinite",
            }}
          />
        </div>
        SCROLL
      </div>
    </section>
  );
}
