"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function parseStat(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  return {
    number: match ? Number(match[1]) : 0,
    suffix: match ? match[2] : value
  };
}

export function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { number, suffix } = parseStat(value);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => setDisplay(Math.round(latest)));
    return unsubscribe;
  }, [spring]);

  useEffect(() => {
    if (inView) motionValue.set(number);
  }, [inView, motionValue, number]);

  return (
    <motion.span ref={ref} initial={{ opacity: 0.5 }} animate={inView ? { opacity: 1 } : undefined}>
      {display}
      {suffix}
    </motion.span>
  );
}
