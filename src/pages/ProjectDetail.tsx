import { useEffect, useRef, ReactNode } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import { RevealLine, FadeIn } from "../components/Animations";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import MagneticButton from "../components/MagneticButton";

interface ThemeSectionProps {
  mainColor: string;
  secColor: string;
  children: ReactNode;
  className?: string;
}

function ThemeSection({ mainColor, secColor, children, className = "" }: ThemeSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      document.documentElement.style.setProperty('--color-main', mainColor);
      document.documentElement.style.setProperty('--color-sec', secColor);
      document.body.style.backgroundColor = mainColor;
      document.body.style.color = secColor;
    }
  }, [isInView, mainColor, secColor]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const exploreRef = useRef<HTMLDivElement>(null);

  // Reset theme on unmount
  useEffect(() => {
    return () => {
      document.documentElement.style.setProperty('--color-main', '#e7e7e7');
      document.documentElement.style.setProperty('--color-sec', '#1e1e1e');
      document.body.style.backgroundColor = '#e7e7e7';
      document.body.style.color = '#1e1e1e';
    };
  }, []);

  const allProjects = [
    {
      slug: "vexlogic-ai-assistant",
      title: "VexLogic AI Assistant",
      subtitle: "Showcasing creativity",
      client: "VexLogic",
      year: "2024",
      role: "Full-Stack Developer & AI Integrator",
      heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop",
      description: "An AI-powered SaaS platform that enables businesses to deploy intelligent chat assistants capable of contextual reasoning, document understanding, and real-time user engagement. Built with a high-performance Go backend and a modern React frontend, the platform combines advanced AI integration with a clean, responsive UI.",
      techStack: ["Go (Golang)", "React", "Next.js", "RAG (Retrieval-Augmented Generation)"],
      liveLink: "#",
      responsibilities: [
        "Collaborated with a team of 2 developers using Git and GitHub for version control, code reviews, and feature-based branching.",
        "Developed a scalable backend in Go (Golang) with RESTful APIs for authentication, AI processing, and subscription management.",
        "Implemented a Retrieval-Augmented Generation (RAG) system using vector embeddings for contextual knowledge retrieval.",
        "Integrated OpenAI API for dynamic conversational logic and intelligent document summarization.",
        "Integrated Stripe for subscription and payment management with automated webhook handling.",
        "Built an interactive frontend using React, Shadcn/UI, and Tailwind CSS, ensuring design consistency and responsiveness.",
        "Managed state efficiently with React Query and Zustand for seamless user experience.",
        "Optimized performance and API routing with OpenRoute and serverless deployment.",
        "Implemented secure authentication and authorization using JWT and refresh tokens.",
        "Deployed and maintained Dockerized Go microservices with CI/CD pipelines for continuous delivery."
      ],
      impact: [
        "Implemented real-time document cleaning and organization updates using WebSockets, enabling live feedback as the AI processes user data.",
        "Engineered advanced prompt templates that guide the AI to structure and clean uploaded documents intelligently and contextually.",
        "Reduced AI response latency by over 40% through optimized RAG retrieval and Go concurrency patterns.",
        "Enabled automated subscription lifecycle management and billing via Stripe webhooks.",
        "Enhanced collaboration efficiency and development velocity through Git-based team workflows and code reviews.",
        "Delivered a smooth, minimal, and highly responsive interface using Shadcn and Tailwind.",
        "Established a scalable, modular architecture ready for multi-tenant SaaS deployment."
      ]
    },
    {
      slug: "vexlogic-business-expander",
      title: "VexLogic Business Expander",
      subtitle: "Scaling operations",
      client: "VexLogic",
      year: "2024",
      role: "Frontend Developer",
      heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
      description: "A comprehensive business management suite designed to help enterprises scale their operations efficiently. It features a robust dashboard, real-time analytics, and seamless integrations with popular third-party tools.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      liveLink: "#",
      responsibilities: [
        "Developed the core dashboard interface using React and Tailwind CSS.",
        "Integrated real-time analytics using WebSockets.",
        "Ensured cross-browser compatibility and responsive design."
      ],
      impact: [
        "Increased operational efficiency by 30%.",
        "Reduced onboarding time for new employees by 50%."
      ]
    },
    {
      slug: "techivation",
      title: "Techivation",
      subtitle: "Audio plugin excellence",
      client: "Techivation",
      year: "2023",
      role: "Web Developer",
      heroImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000&auto=format&fit=crop",
      description: "A sleek, high-performance e-commerce platform for premium audio plugins. The platform offers a seamless shopping experience, secure checkout, and instant digital downloads.",
      techStack: ["Next.js", "Stripe", "Tailwind CSS"],
      liveLink: "#",
      responsibilities: [
        "Built the storefront using Next.js and Tailwind CSS.",
        "Integrated Stripe for secure payment processing.",
        "Implemented a custom digital download delivery system."
      ],
      impact: [
        "Boosted conversion rates by 15%.",
        "Achieved a 99.9% uptime during major sales events."
      ]
    },
    {
      slug: "next-gen-portfolio",
      title: "Next-Gen Portfolio",
      subtitle: "Interactive showcase",
      client: "Personal",
      year: "2024",
      role: "Creative Developer",
      heroImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
      description: "An interactive, WebGL-powered portfolio showcasing creative development skills. Features smooth scrolling, custom shaders, and dynamic page transitions.",
      techStack: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
      liveLink: "#",
      responsibilities: [
        "Designed and developed the entire portfolio.",
        "Implemented custom WebGL shaders for interactive backgrounds.",
        "Optimized performance for smooth 60fps animations."
      ],
      impact: [
        "Received multiple awards for design and development.",
        "Increased freelance inquiries by 200%."
      ]
    }
  ];

  const currentIndex = allProjects.findIndex(p => p.slug === slug);
  const project = currentIndex !== -1 ? allProjects[currentIndex] : allProjects[0];
  
  const nextIndex = (currentIndex + 1) % allProjects.length;
  const nextProject = allProjects[nextIndex];

  return (
    <main className="min-h-screen transition-colors duration-700">
      
      {/* Header Title */}
      <ThemeSection mainColor="#e7e7e7" secColor="#1e1e1e" className="pt-40 pb-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24">
            <div className="lg:w-2/3">
              <RevealLine>
                <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter text-sec leading-none">
                  {project.title}
                </h1>
              </RevealLine>
            </div>
            <div className="lg:w-1/3 text-left lg:text-right">
              <FadeIn delay={0.2}>
                <p className="text-xl md:text-2xl text-sec/80 mb-2">
                  {project.subtitle}
                </p>
                <p className="text-xl md:text-2xl text-sec/80 italic">
                  Through outstanding project
                </p>
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={0.4}>
            <button 
              onClick={() => exploreRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 text-sec/80 text-sm font-medium hover:text-sec transition-colors cursor-pointer"
            >
              <ArrowDown className="w-4 h-4" />
              <span>Scroll to Explore</span>
            </button>
          </FadeIn>
        </div>
      </ThemeSection>

      {/* Section 1: Hero Image (Full Width) */}
      <ThemeSection mainColor="#1e1e1e" secColor="#e7e7e7" className="w-full relative">
        <div ref={exploreRef} className="w-full h-[60vh] md:h-[80vh] relative">
          <img 
            src={project.heroImage} 
            alt={project.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </ThemeSection>

      {/* Section 2: Details (Dark Theme) */}
      <ThemeSection mainColor="#1e1e1e" secColor="#e7e7e7" className="w-full">
        <div className="w-full border-t border-sec/20 py-16 px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">
            
            {/* Left Side: Description & Buttons */}
            <div className="lg:w-1/2 flex flex-col items-start">
              <FadeIn>
                <p className="text-base md:text-lg leading-relaxed mb-12 text-sec/90 max-w-2xl">
                  {project.description}
                </p>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <div className="flex items-center gap-3">
                  <a 
                    href={project.liveLink} 
                    className="bg-[#d4f534] text-[#1e1e1e] px-8 py-3.5 rounded-full font-bold tracking-wide hover:scale-105 transition-transform duration-300"
                  >
                    Live Website
                  </a>
                  <a 
                    href={project.liveLink} 
                    className="bg-[#d4f534] text-[#1e1e1e] p-3.5 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right Side: Client & Tech Stack */}
            <div className="lg:w-5/12 flex flex-col gap-10">
              <FadeIn delay={0.3}>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-sec">Client</h4>
                  <p className="text-sec/70">{project.client}</p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-sec text-main px-5 py-2 rounded-full text-sm font-semibold tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </ThemeSection>

      {/* Section 3: My Role & Impact (Light Theme) */}
      <ThemeSection mainColor="#e7e7e7" secColor="#1e1e1e" className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column */}
          <div className="lg:col-span-4">
            <RevealLine>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-sec">
                My Role
              </h2>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-sec/60 font-medium">
                My contributions and responsibilities in this project
              </p>
            </FadeIn>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8">
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl font-medium mb-12 text-sec">
                {project.role}
              </p>
            </FadeIn>

            <div className="mb-12">
              <RevealLine>
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-sec">
                  Key Responsibilities
                </h3>
              </RevealLine>
              <ul className="space-y-3">
                {project.responsibilities.map((resp, index) => (
                  <FadeIn key={index} delay={0.4 + index * 0.05}>
                    <li className="flex gap-3 text-sec/80 text-sm md:text-base">
                      <span>•</span>
                      <span>{resp}</span>
                    </li>
                  </FadeIn>
                ))}
              </ul>
            </div>

            <div>
              <RevealLine>
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-sec">
                  Project Impact
                </h3>
              </RevealLine>
              <ul className="space-y-3">
                {project.impact.map((imp, index) => (
                  <FadeIn key={index} delay={0.4 + index * 0.05}>
                    <li className="flex gap-3 text-sec/80 text-sm md:text-base">
                      <span>•</span>
                      <span>{imp}</span>
                    </li>
                  </FadeIn>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </ThemeSection>

      {/* Section 4: Next Project (Accent Theme) */}
      <ThemeSection mainColor="#d4f534" secColor="#1e1e1e" className="py-32 overflow-hidden text-center">
        
        {/* Marquee Transition */}
        <div className="w-full overflow-hidden mb-24 -rotate-2 bg-sec text-main py-4">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            {Array(6).fill("✦ CREATIVE WORK ✦ OTHER PROJECTS ").map((text, i) => (
              <span key={i} className="text-4xl md:text-6xl font-bold tracking-tighter uppercase pr-8">
                {text}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
          <FadeIn>
            <p className="text-sm md:text-base font-bold uppercase tracking-widest text-sec/50 mb-6">
              Next Project
            </p>
            <Link to={`/project/${nextProject.slug}`} className="group inline-block">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase mb-8 text-sec group-hover:opacity-70 transition-opacity">
                {nextProject.title}
              </h2>
              <MagneticButton>
                <div className="w-20 h-20 mx-auto rounded-full bg-sec text-main flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-8 h-8" />
                </div>
              </MagneticButton>
            </Link>
          </FadeIn>
        </div>
      </ThemeSection>
    </main>
  );
}
