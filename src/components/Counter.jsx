import { useCounter } from "../hooks/useCounter";

/**
 * Counter — animates a number from 0 → target when scrolled into view.
 *
 * Props:
 *  target {number}  — final value
 *  suffix {string}  — appended after the number (e.g. "+")
 */
export default function Counter({ target, suffix = "" }) {
  const [ref, val] = useCounter(target);

  return (
    <span ref={ref}>
      {val}{suffix}
    </span>
  );
}
