import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { RevealLine, FadeIn } from "../components/Animations";
import { ArrowUpRight, Grid } from "lucide-react";

const projects = [
  {
    title: "HaraPay — Offline Crypto Payments",
    category: "Web3 Infrastructure",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop",
    link: "/project/harapay"
  },
  {
    title: "Arcle — Payment Infrastructure",
    category: "Fintech Rails",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    link: "/project/arcle"
  },
  {
    title: "Smart Inbox — AI Sales Engine",
    category: "AI & Automation",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop",
    link: "/project/ai-sales-inbox"
  }
];

export default function Web3Works() {
  const [view, setView] = useState<"grid">("grid");

  return (
    <main className="pt-32 pb-24 bg-main text-sec min-h-screen">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-sec/10 pb-16">
          <div>
            <RevealLine>
              <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase mb-8 leading-none">
                Web3 <br /> <span className="opacity-20 italic font-medium">Portfolio</span>
              </h1>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-3xl text-sec/70 w-full font-medium leading-relaxed">
                Architecting decentralized systems that bridge the gap between blockchain complexity and <span className="text-thr italic font-bold">real-world adoption.</span>
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Link to={project.link} className="group block h-full">
                <div className="relative overflow-hidden rounded-[2rem] mb-8 aspect-[4/3] bg-sec border border-sec/10 group-hover:border-thr/30 transition-colors shadow-2xl">
                  <div className="absolute inset-0 bg-sec/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Hover Tag */}
                  <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <span className="bg-thr text-sec px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">
                        View Case Study
                     </span>
                  </div>
                </div>
                
                <div className="flex items-start justify-between px-2">
                  <div className="max-w-[80%]">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 group-hover:text-thr transition-colors uppercase leading-[0.9]">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3">
                       <span className="w-1.5 h-1.5 rounded-full bg-thr"></span>
                       <p className="text-sec/40 text-xs md:text-sm uppercase tracking-[0.2em] font-bold">
                        {project.category}
                      </p>
                    </div>
                  </div>
                  <div className="w-14 h-14 rounded-full border border-sec/10 flex items-center justify-center group-hover:bg-thr group-hover:text-sec group-hover:border-thr transition-all duration-500 shrink-0">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-40 text-center border-t border-sec/10 pt-24">
           <FadeIn>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-12">
                 Looking for Enterprise <br /> <span className="opacity-20 text-sec">Web2 Systems?</span>
              </h2>
              <Link 
                to="/works" 
                className="inline-flex items-center gap-4 bg-sec text-main px-12 py-6 rounded-full font-bold uppercase tracking-[0.3em] text-xs hover:scale-105 transition-transform"
              >
                 View General Works
                 <ArrowUpRight className="w-4 h-4" />
              </Link>
           </FadeIn>
        </div>
      </div>
    </main>
  );
}
