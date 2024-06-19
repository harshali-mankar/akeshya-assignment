"use client";

import { useMotionValue, useSpring, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const UP = "up";
const DOWN = "down";

const TextTicker = ({ value, direction = UP }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(direction === DOWN ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === DOWN ? 0 : value);
    }
  }, [motionValue, isInView, direction, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
};

export default TextTicker;
