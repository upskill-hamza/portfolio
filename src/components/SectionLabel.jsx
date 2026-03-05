/**
 * SectionLabel — accent label shown above section titles.
 */
export default function SectionLabel({ children, center = false }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: center ? "center" : "flex-start",
        gap: "12px",
        fontFamily: "'DM Mono', monospace",
        fontSize: "15px",
        letterSpacing: "0.2em",
        color: "#00e5ff",
        textTransform: "uppercase",
        marginBottom: "20px",
      }}
    >
      <span
        style={{
          width: "24px",
          height: "1px",
          background: "#00e5ff",
          display: "inline-block",
          flexShrink: 0,
        }}
      />
      {children}
    </div>
  );
}
