import { FadeIn, RevealLine } from "./Animations";
import MagneticButton from "./MagneticButton";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-main text-sec relative z-10 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <RevealLine>
              <h2 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase leading-none">
                 Featured <br /> <span className="opacity-20 italic font-medium">Systems</span>
              </h2>
            </RevealLine>
            <FadeIn className="hidden lg:block">
               <span className="w-1.5 h-1.5 rounded-full bg-thr animate-pulse inline-block mb-1 mx-2"></span>
               <p className="text-sec/40 text-[10px] font-bold uppercase tracking-[0.4em]">Product Engineering Edition • 2026</p>
            </FadeIn>
        </div>

        {/* Project 1: HaraPay (BIG - Full Width) */}
        <FadeIn>
          <div id="harapay" className="mb-16 md:mb-32 bg-sec/5 border border-sec/10 rounded-[3rem] p-8 md:p-12 lg:p-20 group hover:border-thr/20 transition-all">
            <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
              <div className="lg:w-2/5">
                <div className="flex items-center gap-3 mb-8">
                   <div className="w-2 h-2 rounded-full bg-thr animate-pulse"></div>
                   <span className="text-thr text-[10px] font-bold uppercase tracking-widest">Web3 Infrastructure</span>
                </div>
                <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9] uppercase">HaraPay</h3>
                <p className="text-2xl text-sec/70 font-medium mb-12 leading-relaxed border-l-2 border-thr/30 pl-8 italic">
                   "Enabling financial access for the next billion through USSD-powered blockchain infrastructure."
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 opacity-60">
                   <div>
                      <h4 className="font-bold text-[10px] uppercase tracking-widest text-sec mb-2">The Mission</h4>
                      <p className="text-sm">Bridging the Hedera Hashgraph network with traditional USSD protocols to bypass internet dependency.</p>
                   </div>
                   <div>
                      <h4 className="font-bold text-[10px] uppercase tracking-widest text-sec mb-2">Technicals</h4>
                      <p className="text-sm">Hedera SDK, Secure Key Sharding, High-concurrency USSD Gateways.</p>
                   </div>
                </div>

                <div className="flex flex-wrap gap-6">
                  <MagneticButton>
                    <Link to="/project/harapay" className="bg-sec text-main px-10 py-5 rounded-full font-bold text-xs uppercase tracking-[0.3em] hover:scale-105 transition-all flex items-center gap-3 shadow-2xl">
                      View Case Study <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </MagneticButton>
                  <MagneticButton>
                    <a href="#" className="px-10 py-5 border border-sec/20 text-sec rounded-full font-bold text-xs uppercase tracking-[0.3em] hover:bg-sec hover:text-main transition-all">
                      Live Interaction
                    </a>
                  </MagneticButton>
                </div>
              </div>
              <div className="lg:w-3/5 relative min-h-[400px] lg:min-h-[600px] bg-main rounded-[2.5rem] border border-sec/10 overflow-hidden flex items-center justify-center group-hover:scale-[1.01] transition-transform duration-1000">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,245,52,0.15)_0%,transparent_70%)] group-hover:opacity-100 transition-opacity"></div>
                
                {/* Visual System Representation */}
                <div className="relative z-10 p-12 w-full h-full flex items-center justify-center">
                   <div className="max-w-md w-full bg-sec/5 border border-sec/10 p-10 rounded-[2rem] backdrop-blur-xl group-hover:border-thr/20 transition-all">
                      <div className="flex justify-between items-center mb-8 border-b border-sec/10 pb-6">
                         <span className="text-sec/40 font-mono text-xs">*384*11#</span>
                         <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                         </div>
                      </div>
                      <div className="space-y-4 font-mono">
                         <p className="text-thr font-bold text-lg mb-8 uppercase tracking-widest">HaraPay Console v1.02</p>
                         <p className="text-sec text-sm">1. TRANSFER CRYPTO</p>
                         <p className="text-sec text-sm">2. VIEW HBAR BALANCE</p>
                         <p className="text-sec text-sm">3. LIQUIDATE ASSETS</p>
                         <p className="text-sec text-sm">4. SHARE QR (SMS)</p>
                         <div className="mt-12 h-10 w-full bg-sec/10 border-b-2 border-thr flex items-center px-4">
                            <span className="text-thr animate-pulse">_</span>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Grid for Project 2 & 3 - Full width stretch */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Project 2: Arcle */}
          <FadeIn delay={0.2}>
            <div className="bg-sec/5 border border-sec/10 rounded-[3rem] p-12 h-full flex flex-col hover:border-thr/20 transition-all group overflow-hidden relative">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-12">
                   <span className="bg-main border border-sec/10 text-sec px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full">Fintech Rails</span>
                   <span className="text-sec/20 text-5xl font-bold tracking-tighter">02</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 uppercase leading-none">Arcle — <br/>Payment Bridge</h3>
                <p className="text-sec/60 text-lg md:text-xl font-medium mb-12 leading-relaxed">Making decentralized payments as easy as clicking a localized Web2 link.</p>
                
                <div className="space-y-8 flex-grow opacity-80">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-4 bg-sec/5 rounded-2xl border border-sec/10">
                        <span className="block text-thr font-bold text-xl mb-1">80%</span>
                        <span className="text-[9px] uppercase tracking-widest opacity-50 font-bold">Reduction in Friction</span>
                     </div>
                     <div className="p-4 bg-sec/5 rounded-2xl border border-sec/10">
                        <span className="block text-thr font-bold text-xl mb-1">Instant</span>
                        <span className="text-[9px] uppercase tracking-widest opacity-50 font-bold">Fiat Settlement</span>
                     </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-12 border-t border-sec/10 flex items-center justify-between">
                   <Link to="/project/arcle" className="text-[10px] font-bold uppercase tracking-[0.4em] hover:text-thr transition-colors">Project Deep Dive</Link>
                   <div className="w-12 h-12 rounded-full border border-sec/20 flex items-center justify-center group-hover:bg-thr group-hover:text-sec group-hover:border-thr transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                   </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Project 3: Smart AI */}
          <FadeIn delay={0.3}>
            <div className="bg-sec/5 border border-sec/10 rounded-[3rem] p-12 h-full flex flex-col hover:border-thr/20 transition-all group overflow-hidden relative">
               <div className="relative z-10">
                  <div className="flex items-center justify-between mb-12">
                    <span className="bg-main border border-sec/10 text-sec px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full">AI & Automation</span>
                    <span className="text-sec/20 text-5xl font-bold tracking-tighter">03</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 uppercase leading-none">Smart AI — <br/>Sales Engine</h3>
                  <p className="text-sec/60 text-lg md:text-xl font-medium mb-12 leading-relaxed">Architecting the background AI infrastructure that powers modern outreach.</p>
                  
                  <div className="p-6 bg-main/40 border border-sec/10 rounded-2xl mb-8 group-hover:bg-main/60 transition-all">
                     <div className="flex items-center gap-3 mb-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-thr animate-pulse"></div>
                        <span className="text-[10px] font-mono text-sec/50">LEAD DETECTION ACTIVE...</span>
                     </div>
                     <p className="text-xs text-sec/80 leading-relaxed font-medium">System monitors Gmail API, classifies high-intent behavior via GPT-4o, and automates high-fidelity proposal drafts instantly.</p>
                  </div>

                  <div className="mt-auto pt-12 border-t border-sec/10 flex items-center justify-between">
                    <Link to="/project/ai-sales-inbox" className="text-[10px] font-bold uppercase tracking-[0.4em] hover:text-thr transition-colors">Engineering Scope</Link>
                    <div className="w-12 h-12 rounded-full border border-sec/20 flex items-center justify-center group-hover:bg-thr group-hover:text-sec group-hover:border-thr transition-all">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
               </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
