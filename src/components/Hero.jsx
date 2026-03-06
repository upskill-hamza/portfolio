/**
 * Hero — full-viewport landing section with animated orbs, grid, and holographic profile.
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
        background: "#060606", // Ensuring a dark base for the blend
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

      {/* NEW: Main Layout Wrapper (Flexbox) */}
      <div style={{
        maxWidth: "1300px",
        width: "100%",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "40px",
        position: "relative",
        zIndex: 2
      }}>

        {/* LEFT COLUMN: Text Content */}
        <div style={{ flex: "1.2", maxWidth: "800px" }}>
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
              fontSize: "clamp(48px, 7vw, 92px)", // Slightly smaller to accommodate photo
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
            <a href="#contact" className="btn-outline  hoverable">Get In Touch</a>
          </div>
        </div>

        {/* RIGHT COLUMN: Holographic Image Portal */}
        <div className="spinning-ring-container" style={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          animation: "fadeUp 1s 0.8s both"
        }}>
          <div style={{ position: "relative", width: "clamp(300px, 35vw, 450px)", aspectRatio: "1/1" }}>

            {/* 1. Rotating Outer Ring */}
            <div
              className="spinning-ring"
              style={{
                position: "absolute",
                inset: "-25px",
                border: "2px dashed rgba(0,229,255,0.2)",
                borderRadius: "50%",
                animation: "spin 60s linear infinite",
              }}
            />

            {/* 2. Inner Glow Aura */}
            <div style={{
              position: "absolute",
              inset: "0",
              background: "radial-gradient(circle, rgba(0,229,255,0.1) 0%, transparent 70%)",
              borderRadius: "50%",
            }} />

            {/* 3. The Image Portal */}
            <div className="image-portal" style={{
              
              width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden",
              border: "3px solid rgba(0,229,255,0.4)", background: "#060606",
              boxShadow: "0 0 100px rgba(0,229,255,0.15)", position: "relative"
            }}>
              <img
                src="/hero.jpg"
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(100%) contrast(1.1) brightness(0.9) drop-shadow(3px 0px 0px rgba(0,255,255,0.4)) drop-shadow(-3px 0px 0px rgba(255,0,50,0.4))", opacity: 0.85
                }}
              />

              {/* Scanline Overlay Effect */}
              <div className="hologram-scan" style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to bottom, transparent 50%, rgba(0,229,255,0.03) 50%)",
                backgroundSize: "100% 4px",
                pointerEvents: "none"
              }} />
            </div>
          </div>
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