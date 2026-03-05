import { useState } from "react";
import { useScrolled } from "../hooks/useScrolled";

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

/**
 * Nav — fixed top navigation with scroll-aware background.
 */
export default function Nav() {
  const scrolled = useScrolled(50);
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: "24px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: scrolled
          ? "rgba(8,12,16,0.97)"
          : "linear-gradient(to bottom, rgba(8,12,16,0.9), transparent)",
        backdropFilter: "blur(8px)",
        transition: "background 0.3s",
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        style={{
          fontSize: "18px",
          fontWeight: 800,
          letterSpacing: "-0.5px",
          color: "#e8edf5",
          textDecoration: "none",
        }}
      >
        Hamza<span style={{ color: "#00e5ff" }}>  </span>Ansari
      </a>

      {/* Links */}
      <ul className="nav-links" style={{ display: "flex", gap: "36px", listStyle: "none", margin: 0, padding: 0 }}>
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
    </nav>
  );
}
