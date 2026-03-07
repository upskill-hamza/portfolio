import { useRef, useState, useEffect } from "react";

export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos     = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  const [hovered, setHovered] = useState(false);

  // Optional: Detect if device is touch-enabled to hide cursor
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check for touch device on mount
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return; // Stop running cursor logic on phones
    }

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
      // The 0.12 acts as friction/easing. Lower = more lag, Higher = tighter
      p.rx += (p.mx - p.rx) * 0.12; 
      p.ry += (p.my - p.ry) * 0.12;
      
      if (ringRef.current) {
        ringRef.current.style.left = p.rx + "px";
        ringRef.current.style.top  = p.ry + "px";
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    // Hover detection (Event Delegation)
    const handleMouseOver = (e) => {
      // .closest() checks if the element or any of its parents match the selector
      if (e.target.closest("a, button, .hoverable")) {
        setHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest("a, button, .hoverable")) {
        setHovered(false);
      }
    };

    // Attach listeners to the document, not individual elements
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  // If it's a mobile/touch device, don't render the custom cursor at all
  if (isTouchDevice) return null;

  const dotSize  = hovered ? "15px" : "10px";
  const ringSize = hovered ? "45px" : "36px";

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
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
          top: 0,
          left: 0,
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