import { motion, useScroll, useTransform } from "motion/react";

export default function BackgroundWave() {
  const { scrollYProgress } = useScroll();
  
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
      <motion.svg 
        style={{ y }}
        viewBox="0 0 1440 1024" 
        className="absolute w-full h-full object-cover opacity-30" 
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path 
          d="M 1200 -200 C 800 200, 600 600, 1000 800 C 1400 1000, 1200 1300, 1000 1500" 
          fill="none" 
          stroke="#d4f534" 
          strokeWidth="120" 
          strokeLinecap="round"
          className="blur-[2px]"
          style={{ pathLength }}
        />
      </motion.svg>
    </div>
  );
}
