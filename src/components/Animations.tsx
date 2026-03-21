import { motion } from "motion/react";
import { ReactNode, Key } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  key?: Key;
}

export function RevealLine({ children, delay = 0, className = "" }: RevealProps) {
  return (
    <div className="overflow-hidden pb-2 -mb-2">
      <motion.div
        initial={{ y: "115%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function FadeIn({ children, delay = 0, className = "" }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
