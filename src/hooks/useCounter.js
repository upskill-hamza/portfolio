import { useState, useEffect } from "react";
import { useReveal } from "./useReveal";

/**
 * useCounter — animates a number from 0 → target when scrolled into view.
 * @param {number} target    — final value
 * @param {number} duration  — animation duration in ms
 * @returns [ref, displayValue]
 */
export function useCounter(target, duration = 1400) {
  const [ref, visible] = useReveal(0.5);
  const [val, setVal] = useState(0);
  const isDecimal = target % 1 !== 0;

  useEffect(() => {
    if (!visible) return;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = progress * target;
      setVal(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [visible, target, duration, isDecimal]);

  return [ref, val];
}
