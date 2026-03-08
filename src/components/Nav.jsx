import { useState, useEffect } from "react";
import { useScrolled } from "../hooks/useScrolled";

const TerminalLogo = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#080c10" />

    <rect x="5" y="6" width="4" height="2" fill="#00e5ff" />
    <rect x="5" y="6" width="2" height="20" fill="#00e5ff" />
    <rect x="5" y="24" width="4" height="2" fill="#00e5ff" />

    <rect x="11" y="9" width="3" height="14" fill="#00e5ff" />
    <rect x="14" y="15" width="4" height="2" fill="#00e5ff" />
    <rect x="18" y="9" width="3" height="14" fill="#00e5ff" />

    <rect x="23" y="6" width="4" height="2" fill="#00e5ff" />
    <rect x="25" y="6" width="2" height="20" fill="#00e5ff" />
    <rect x="23" y="24" width="4" height="2" fill="#00e5ff" />
  </svg>
);
const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Nav() {
  const scrolled = useScrolled(50);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (

    <>
      <nav
        className="main-nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 102,
          padding: "24px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: scrolled || isMenuOpen
            ? "rgba(8,12,16,0.97)"
            : "linear-gradient(to bottom, rgba(8,12,16,0.9), transparent)",
          backdropFilter: "blur(8px)",
          transition: "background 0.3s",
        }}
      >

        <a
          href="#hero"
          onClick={closeMenu}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "18px",
            fontWeight: 800,
            letterSpacing: "-0.5px",
            color: "#e8edf5",
            textDecoration: "none",
            zIndex: 102,
          }}
        >

          <TerminalLogo />
          <span>
            Hamza<span style={{ color: "#00e5ff" }}>.</span>Ansari
          </span>
        </a>

        <ul
          className="nav-links"
          style={{
            display: "flex",
            gap: "36px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {NAV_LINKS.map((label) => (
            <li key={label}>
              <a
                href={`#${label.toLowerCase()}`}
                className="nav-link"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "12px",
                  color: hoveredLink === label ? "#00e5ff" : "#5a6475",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={() => setHoveredLink(label)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="mobile-menu-btn hoverable"
          onClick={toggleMenu}
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            color: "#00e5ff",
            fontFamily: "'DM Mono', monospace",
            fontSize: "12px",
            letterSpacing: "0.1em",
            cursor: "none",
            zIndex: 102,
          }}
        >
          {isMenuOpen ? "[ CLOSE ]" : "[ MENU ]"}
        </button>
      </nav>

      <div
        className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}
        style={{
          position: "fixed",
          inset: 0,
          background: "#080c10",
          zIndex: 101,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? "all" : "none",
          transition: "opacity 0.4s ease",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 50%, rgba(0,229,255,0.02) 50%)",
            backgroundSize: "100% 4px",
            pointerEvents: "none"
          }}
        />

        <ul style={{ listStyle: "none", padding: 0, margin: 0, textAlign: "center" }}>
          {NAV_LINKS.map((label, index) => (
            <li
              key={label}
              style={{
                margin: "24px 0",
                transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isMenuOpen ? 1 : 0,
                transition: `transform 0.4s ease ${index * 0.1}s, opacity 0.4s ease ${index * 0.1}s`
              }}
            >
              <a
                href={`#${label.toLowerCase()}`}
                onClick={closeMenu}
                className="hoverable"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#e8edf5",
                  textDecoration: "none",
                  display: "inline-block",
                  position: "relative",
                }}
              >
                {label}
                <span style={{ color: "#00e5ff", fontFamily: "'DM Mono', monospace", fontSize: "14px", marginLeft: "8px", verticalAlign: "middle" }}>0{index + 1}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}