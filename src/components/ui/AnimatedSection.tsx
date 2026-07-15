"use client";

import { motion } from "motion/react";
import React from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  yOffset = 20,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
