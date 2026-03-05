import { useRef, useState, useEffect } from "react";

/**
 * Cursor — custom dot + lagging ring cursor.
 * Hides the system cursor (set cursor: none on body in CSS).
 */
export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos     = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Track mouse position → update dot instantly
    const onMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top  = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", onMove);

    // Smooth ring lag
    let raf;
    const animate = () => {
      const p = pos.current;
      p.rx += (p.mx - p.rx) * 0.12;
      p.ry += (p.my - p.ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = p.rx + "px";
        ringRef.current.style.top  = p.ry + "px";
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    // Hover detection
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);
    const targets = document.querySelectorAll("a, button, .hoverable");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  const dotSize  = hovered ? "20px" : "10px";
  const ringSize = hovered ? "52px" : "36px";

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0, left: 0,
          zIndex: 9999,
          pointerEvents: "none",
          borderRadius: "50%",
          width: dotSize,
          height: dotSize,
          background: "#00e5ff",
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s, height 0.2s",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0, left: 0,
          zIndex: 9998,
          pointerEvents: "none",
          borderRadius: "50%",
          width: ringSize,
          height: ringSize,
          border: `1.5px solid rgba(0,229,255,${hovered ? 0.7 : 0.35})`,
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s, height 0.2s, border-color 0.2s",
        }}
      />
    </>
  );
}
