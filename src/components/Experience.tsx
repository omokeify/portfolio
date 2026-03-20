import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { RevealLine, FadeIn } from "./Animations";

const experiences = [
  {
    companyName: "Techivation",
    role: "Full Stack Developer (Part-time)",
    date: "May 2025 – Present",
    shortDesc: "Building and maintaining Techivation’s full web and SaaS ecosystem powering audio plugin licensing and management.",
  },
  {
    companyName: "VexLogic",
    role: "Full Stack Engineer (Part-time)",
    date: "Jun 2025 – Present",
    shortDesc: "Developing an AI-powered SaaS platform with real-time collaboration, billing systems, and intelligent document management.",
  },
  {
    companyName: "Comra AI",
    role: "Full Stack Developer (Full-time)",
    date: "Nov 2024 – Present",
    shortDesc: "Building immersive 3D virtual tour systems using React Three Fiber, Prisma, and PostgreSQL for real estate and architecture.",
  },
  {
    companyName: "Digital Natives",
    role: "Frontend Developer (Full-time)",
    date: "Feb 2024 – Oct 2024",
    shortDesc: "Built scalable web apps and reusable UI systems using React, Next.js, and Tailwind CSS for enterprise clients.",
  },
  {
    companyName: "Fintechracy",
    role: "Frontend Developer (Full-time)",
    date: "Nov 2023 – Mar 2024",
    shortDesc: "Developed a mobile-first PWA for financial management with offline storage, barcode scanning, and performance optimization.",
  },
  {
    companyName: "Codintex",
    role: "Software Engineer (Internship)",
    date: "Jul 2022 – Sep 2023",
    shortDesc: "Worked on enterprise desktop apps using .NET and C#, gaining foundational experience in backend systems and security.",
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-sec text-main relative min-h-screen">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <RevealLine>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 uppercase">
            Experience
          </h2>
        </RevealLine>
        <FadeIn delay={0.2}>
          <p className="text-main/70 font-medium text-lg md:text-xl">
            Explore my journey and the technologies that define my craft.
          </p>
        </FadeIn>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-main/20 -translate-x-1/2" />
        
        {/* Timeline Progress */}
        <motion.div 
          className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-thr origin-top -translate-x-1/2 shadow-[0_0_15px_rgba(212,245,52,0.5)]"
          style={{ scaleY }}
        />

        <div className="relative z-10">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <ExperienceItem key={index} experience={exp} isEven={isEven} index={index} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

const ExperienceItem: React.FC<{ experience: typeof experiences[0], isEven: boolean, index: number }> = ({ experience, isEven, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className={`w-full flex items-center mb-[15vh] md:mb-[25vh]`}>
      {/* Dot */}
      <motion.div 
        className="absolute left-1/2 w-3 h-3 rounded-full border-2 border-main bg-sec -translate-x-1/2 z-20"
        style={{ scale, opacity }}
      />

      {/* Content */}
      <motion.div 
        className={`w-full md:w-[45%] ${isEven ? 'md:pr-16 text-right' : 'md:ml-auto md:pl-16 text-left'}`}
        style={{ opacity, y }}
      >
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-2 text-main/80">
          {experience.companyName}
        </h3>
        <h4 className="text-xl md:text-2xl font-light mb-4 text-main/60">
          {experience.role}
        </h4>
        <p className="text-main/50 text-sm md:text-base leading-relaxed mb-4 max-w-xl ml-auto">
          {experience.shortDesc}
        </p>
        <span className="text-sm font-bold uppercase tracking-widest text-thr">
          {experience.date}
        </span>
      </motion.div>
    </div>
  );
}
