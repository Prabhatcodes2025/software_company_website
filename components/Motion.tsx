"use client";

import { motion, type MotionProps } from "framer-motion";
import { PropsWithChildren } from "react";
import { clsx } from "clsx";

type RevealProps = PropsWithChildren<
  MotionProps & {
    className?: string;
    delay?: number;
  }
>;

export function Reveal({ children, className, delay = 0, ...props }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function HoverLift({ children, className, delay = 0, ...props }: RevealProps) {
  return (
    <motion.div
      className={clsx("h-full", className)}
      initial={{ opacity: 0, y: 26, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
