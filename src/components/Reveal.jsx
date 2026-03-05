import { useReveal } from "../hooks/useReveal";

/**
 * Reveal — wraps children with a scroll-triggered fade-up animation.
 *
 * Props:
 *  delay     {number}  — transition delay in ms
 *  className {string}  — extra classes on the wrapper div
 *  style     {object}  — extra inline styles
 */
export default function Reveal({ children, delay = 0, className = "", style = {} }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
