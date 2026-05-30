import { useState, useEffect } from "react";

export function useCountUp(end: number, start: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, end, duration]);

  return count;
}
