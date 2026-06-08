"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 29) % 100}%`,
  top: `${(index * 47) % 100}%`,
  delay: (index % 8) * 0.35,
  size: index % 5 === 0 ? "size-1.5" : "size-1"
}));

export function HeroBackground() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-9, 9]);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX / window.innerWidth - 0.5);
      y.set(event.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_90deg,rgba(56,213,255,0.28),rgba(11,61,145,0.2),rgba(67,243,182,0.18),rgba(56,213,255,0.28))] blur-3xl"
        style={{ rotateX, rotateY }}
      />
      <motion.div
        className="absolute right-[-12rem] top-10 h-[34rem] w-[34rem] rounded-full border border-cyanfire/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-[-10rem] bottom-10 h-[28rem] w-[28rem] rounded-full border border-mint/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className={`absolute ${particle.size} rounded-full bg-cyanfire shadow-[0_0_18px_rgba(56,213,255,0.9)]`}
          style={{ left: particle.left, top: particle.top }}
          animate={{ opacity: [0.12, 0.55, 0.12], y: [0, -14, 0], scale: [1, 1.35, 1] }}
          transition={{ duration: 6.5, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
