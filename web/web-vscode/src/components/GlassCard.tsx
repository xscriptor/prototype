"use client";

import { motion } from "motion/react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover3d?: boolean;
}

export default function GlassCard({ children, className = "", hover3d = false }: GlassCardProps) {
  if (hover3d) {
    return (
      <motion.div
        className={`glass-card rounded-2xl ${className}`}
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.div>
    );
  }
  return <div className={`glass-card rounded-2xl ${className}`}>{children}</div>;
}
