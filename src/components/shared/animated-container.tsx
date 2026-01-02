"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { fadeInUp } from "@/lib/animations";

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
}

export function AnimatedContainer({
  children,
  className,
  variants = fadeInUp,
  delay = 0,
  once = true,
}: AnimatedContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
