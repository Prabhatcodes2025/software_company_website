"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function PremiumCursor() {
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 220, damping: 28, mass: 0.25 });
  const smoothY = useSpring(y, { stiffness: 220, damping: 28, mass: 0.25 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const onMove = (event: MouseEvent) => {
      setVisible(true);
      x.set(event.clientX - 14);
      y.set(event.clientY - 14);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden size-7 rounded-full border border-cyanfire/35 bg-cyanfire/10 mix-blend-screen backdrop-blur-sm lg:block"
      style={{ x: smoothX, y: smoothY, opacity: visible ? 1 : 0 }}
    />
  );
}
