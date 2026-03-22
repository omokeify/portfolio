import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { RevealLine, FadeIn } from "../components/Animations";
import { ArrowUpRight, Grid } from "lucide-react";
import FlowingMenu from "../components/FlowingMenu";

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
  const [view, setView] = useState<"grid" | "flowing">("grid");

  useEffect(() => {
    // Default to interactive on desktop, grid on mobile
    setView(window.innerWidth >= 768 ? "flowing" : "grid");
  }, []);

  const flowingItems = projects.map(p => ({
    link: p.link,
    text: p.title,
    image: p.image
  }));

  return (
    <main className="pt-32 pb-24 bg-main text-sec min-h-screen">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
        
        {/* Header Section matching Web2 Works */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-sec/10 pb-20">
          <div>
            <RevealLine>
              <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase mb-10 leading-[0.8]">
                Web3 <br /> <span className="opacity-20 italic font-medium">Portfolio</span>
              </h1>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-3xl text-sec/60 w-full max-w-4xl font-medium leading-relaxed">
                Architecting decentralized systems that bridge the gap between blockchain complexity and <span className="text-thr italic font-bold">real-world adoption.</span>
              </p>
            </FadeIn>
          </div>

          {/* View Toggle */}
          <FadeIn delay={0.3} className="flex items-center gap-2 bg-sec/5 p-1.5 rounded-full border border-sec/10 self-start md:self-auto shrink-0 shadow-xl backdrop-blur-md">
            <button 
              onClick={() => setView('grid')}
              className={`p-4 rounded-full transition-all duration-500 ${view === 'grid' ? 'bg-thr text-sec shadow-lg' : 'text-sec/40 hover:text-sec hover:bg-sec/5'}`}
              aria-label="Grid View"
            >
              <Grid className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setView('flowing')}
              className={`px-8 py-4 rounded-full transition-all duration-500 font-bold text-[10px] uppercase tracking-[0.2em] hidden sm:block ${view === 'flowing' ? 'bg-thr text-sec shadow-lg' : 'text-sec/40 hover:text-sec hover:bg-sec/5'}`}
              aria-label="Interactive View"
            >
              Interactive
            </button>
          </FadeIn>
        </div>

        {/* Content Section */}
        {view === "flowing" ? (
          <FadeIn delay={0.4}>
            <div className="py-20">
               <FlowingMenu items={flowingItems} />
            </div>
          </FadeIn>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {projects.map((project, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Link to={project.link} className="group block h-full">
                  <div className="relative overflow-hidden rounded-[2.5rem] mb-10 aspect-[4/3] bg-sec border border-sec/10 group-hover:border-thr/30 transition-all shadow-2xl">
                    <div className="absolute inset-0 bg-sec/30 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    
                    <div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                       <span className="bg-thr text-sec px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-2xl">
                          Case Study
                       </span>
                    </div>
                  </div>
                  
                  <div className="flex items-start justify-between px-4">
                    <div className="max-w-[80%]">
                      <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 group-hover:text-thr transition-colors uppercase leading-[0.9]">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4">
                         <span className="w-2 h-2 rounded-full bg-thr"></span>
                         <p className="text-sec/40 text-xs md:text-sm uppercase tracking-[0.3em] font-bold">
                          {project.category}
                        </p>
                      </div>
                    </div>
                    <div className="w-16 h-16 rounded-full border border-sec/10 flex items-center justify-center group-hover:bg-thr group-hover:text-sec group-hover:border-thr transition-all duration-700 shrink-0 shadow-lg">
                      <ArrowUpRight className="w-7 h-7" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        )}

        {/* Bottom Navigation matching Web2 Works structure */}
        <div className="mt-48 text-center border-t border-sec/10 pt-32">
           <FadeIn>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-16 opacity-10">
                 Switch to Systems <br /> Generalist View
              </h2>
              <Link 
                to="/works" 
                className="inline-flex items-center gap-6 bg-sec text-main px-14 py-7 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] hover:scale-105 transition-all shadow-2xl"
              >
                 View All Works
                 <ArrowUpRight className="w-5 h-5" />
              </Link>
           </FadeIn>
        </div>
      </div>
    </main>
  );
}
