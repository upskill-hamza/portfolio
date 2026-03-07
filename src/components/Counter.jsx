import { useCounter } from "../hooks/useCounter";

export default function Counter({ target, suffix = "" }) {
  const [ref, val] = useCounter(target);

  return (
    <span ref={ref}>
      {val}{suffix}
    </span>
  );
}
