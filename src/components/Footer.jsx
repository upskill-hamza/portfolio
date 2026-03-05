/**
 * Footer — simple bottom bar with credits.
 */
export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #1a2030",
        padding: "24px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        zIndex: 2,
      }}
    >
      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#5a6475", letterSpacing: "0.05em" }}>
        © 2026 <span style={{ color: "#00e5ff" }}>Hamza Ansari</span>. Designed &amp; Built with 💙
      </p>
      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#5a6475", letterSpacing: "0.05em" }}>
        Made with <span style={{ color: "#00e5ff" }}>React · Tailwind · Scroll Triggers</span>
      </p>
    </footer>
  );
}
