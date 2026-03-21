import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { RevealLine, FadeIn } from "./Animations";
import { motion, useScroll, useTransform } from "motion/react";
import MagneticButton from "./MagneticButton";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "VexLogic ai",
    category: "SaaS Platform",
    image: "https://picsum.photos/seed/vexlogic/800/600",
    link: "/project/vexlogic-ai-assistant"
  },
  {
    title: "VexLogic bussiness",
    category: "Business Solution",
    image: "https://picsum.photos/seed/vexlogicbiz/800/600",
    link: "/project/vexlogic-business-expander"
  },
  {
    title: "Comra",
    category: "Web Application",
    image: "https://picsum.photos/seed/comra/800/600",
    link: "/project/comra"
  },
  {
    title: "Superhost",
    category: "Management Dashboard",
    image: "https://picsum.photos/seed/superhost/800/600",
    link: "/project/superhost"
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <FadeIn delay={index * 0.1}>
      <Link to={project.link} className="group block" data-cursor="View">
        <div ref={ref} className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-sec/10">
          <motion.img 
            style={{ y, scale: 1.1 }}
            src={project.image} 
            alt={project.title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-sec/70 transition-colors uppercase">
              {project.title}
            </h3>
            <p className="text-sec/50 text-sm uppercase tracking-wider font-bold">
              {project.category}
            </p>
          </div>
          <div className="w-12 h-12 rounded-full border border-sec/20 flex items-center justify-center group-hover:bg-sec group-hover:text-main transition-all duration-300">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}

export default function ProjectsPreview() {
  return (
    <section id="works" className="py-24 px-6 md:px-12 lg:px-24 bg-main text-sec">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <RevealLine>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 uppercase">
                Selected Works
              </h2>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-sec/70 max-w-md font-medium">
                Explore my journey and the technologies that define my craft.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.3}>
            <MagneticButton>
              <Link to="/works" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-sec/60 transition-colors group">
                All Projects
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </MagneticButton>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
