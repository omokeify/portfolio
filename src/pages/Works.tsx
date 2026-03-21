import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { RevealLine, FadeIn } from "../components/Animations";
import { ArrowUpRight, Grid, List } from "lucide-react";
import FlowingMenu from "../components/FlowingMenu";

const projects = [
  {
    title: "VexLogic AI Assistant",
    category: "AI Solution",
    image: "https://picsum.photos/seed/vexlogicai/800/600",
    link: "/project/vexlogic-ai-assistant"
  },
  {
    title: "VexLogic Business Expander",
    category: "Business Solution",
    image: "https://picsum.photos/seed/vexlogicbiz/800/600",
    link: "/project/vexlogic-business-expander"
  },
  {
    title: "Techivation",
    category: "Web Application",
    image: "https://picsum.photos/seed/techivation/800/600",
    link: "/project/techivation"
  },
  {
    title: "Comra",
    category: "Web Application",
    image: "https://picsum.photos/seed/comra/800/600",
    link: "/project/comra"
  },
  {
    title: "Comra Dashboard",
    category: "Dashboard",
    image: "https://picsum.photos/seed/comradash/800/600",
    link: "/project/comra-dashboard"
  },
  {
    title: "SiraDatia CV Builder",
    category: "Web Application",
    image: "https://picsum.photos/seed/siradatia/800/600",
    link: "/project/siradatia-cv-builder"
  },
  {
    title: "Reservado – Airbnb Clone",
    category: "Web Application",
    image: "https://picsum.photos/seed/reservado/800/600",
    link: "/project/reservado-airbnb-clone"
  },
  {
    title: "Superhost",
    category: "Management Dashboard",
    image: "https://picsum.photos/seed/superhost/800/600",
    link: "/project/superhost"
  },
  {
    title: "Fintechracy",
    category: "Fintech App",
    image: "https://picsum.photos/seed/fintechracy/800/600",
    link: "/project/fintechracy"
  },
  {
    title: "FTR-Client",
    category: "Web Application",
    image: "https://picsum.photos/seed/ftrclient/800/600",
    link: "/project/ftr-client"
  },
  {
    title: "VexLogic AI Assistant Website",
    category: "Landing Page",
    image: "https://picsum.photos/seed/vexlogicweb/800/600",
    link: "/project/vexlogic-ai-assistant-website"
  }
];

export default function Works() {
  const [view, setView] = useState<"grid" | "flowing">("grid");

  useEffect(() => {
    setView(window.innerWidth >= 768 ? "flowing" : "grid");
  }, []);

  const flowingItems = projects.map(p => ({
    link: p.link,
    text: p.title,
    image: p.image
  }));

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-main text-sec min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <RevealLine>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6">
                My Work
              </h1>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-sec/70 max-w-3xl font-medium">
                Discover my latest projects where design, technology, and creativity come together to craft engaging digital experiences. Below is a collection of my favourites.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} className="flex items-center gap-2 bg-sec/5 p-1 rounded-full border border-sec/10 self-start md:self-auto shrink-0">
            <button 
              onClick={() => setView('grid')}
              className={`p-3 rounded-full transition-all duration-300 ${view === 'grid' ? 'bg-sec text-main shadow-md' : 'text-sec/50 hover:text-sec'}`}
              aria-label="Grid View"
            >
              <Grid className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setView('flowing')}
              className={`px-4 py-3 rounded-full transition-all duration-300 font-medium text-sm hidden sm:block ${view === 'flowing' ? 'bg-sec text-main shadow-md' : 'text-sec/50 hover:text-sec'}`}
              aria-label="Interactive View"
            >
              Interactive
            </button>
          </FadeIn>
        </div>

        {view === "flowing" ? (
          <FadeIn delay={0.4}>
            <FlowingMenu items={flowingItems} />
          </FadeIn>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {projects.map((project, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Link to={project.link} className="group block">
                  <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-sec/10">
                    <img 
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
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
