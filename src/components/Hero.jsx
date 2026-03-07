export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "#060606",
      }}
    >

      <div className="hero-grid" />

      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,229,255,0.12), transparent 70%)",
          top: "-100px",
          right: "-100px",
          filter: "blur(120px)",
          animation: "float1 8s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.1), transparent 70%)",
          bottom: 0,
          left: "100px",
          filter: "blur(120px)",
          animation: "float2 10s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <div
        className="hero-content"
        style={{
          maxWidth: "1300px",
          width: "100%",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >

        <div
          className="hero-text-col"
          style={{
            flex: "1.2",
            maxWidth: "800px",
          }}
        >

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
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#00e5ff",
                animation: "blink 1.5s infinite",
                display: "inline-block",
              }}
            />
            Available for internships & projects
          </div>

          <h1
            style={{
              fontSize: "clamp(48px, 7vw, 92px)",
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
            CS student specializing in Web Development, Data Structures & Algorithms,
            and Machine Learning. I turn complex problems into elegant solutions.
          </p>

          <div
            className="hero-ctas"
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              animation: "fadeUp 0.8s 0.8s both",
            }}
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary hoverable">
              View My Resume
            </a>
            <a href="#contact" className="btn-outline hoverable">
              Get In Touch
            </a>
          </div>
        </div>

        <div
          className="spinning-ring-container"
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "fadeUp 1s 0.8s both",
          }}
        >
          <div
            className="hero-image-wrapper"
            style={{
              position: "relative",
              width: "clamp(300px, 35vw, 450px)",
              aspectRatio: "1/1",
            }}
          >
            <div
              className="spinning-ring"
              style={{
                position: "absolute",
                inset: "-25px",
                border: "1.5px dashed rgba(0,229,255,0.2)",
                borderRadius: "50%",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: "0",
                background: "radial-gradient(circle, rgba(0,229,255,0.1) 0%, transparent 70%)",
                borderRadius: "50%",
              }}
            />

            <div
              className="image-portal"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid rgba(0,229,255,0.4)",
                background: "#060606",
                boxShadow: "0 0 100px rgba(0,229,255,0.15)",
                position: "relative",
              }}
            >
              <img
                src="/hero.jpg"
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(100%) contrast(1.1) brightness(0.9) drop-shadow(3px 0px 0px rgba(0,255,255,0.4)) drop-shadow(-3px 0px 0px rgba(255,0,50,0.4))",
                  opacity: 0.85,
                }}
              />

              <div
                className="hologram-scan"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, transparent 50%, rgba(0,229,255,0.03) 50%)",
                  backgroundSize: "100% 4px",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="scroll-indicator"
        style={{
          position: "absolute",
          bottom: "40px",
          left: "48px",
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
            width: "40px",
            height: "1px",
            background: "#5a6475",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
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