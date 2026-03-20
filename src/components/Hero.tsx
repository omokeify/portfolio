import { motion } from "motion/react";
import { RevealLine, FadeIn } from "./Animations";
import MagneticButton from "./MagneticButton";
import { Linkedin, Github, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-main text-sec">
      
      {/* Background Blob Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80 z-0">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-purple-400 via-yellow-300 to-blue-400 rounded-full blur-3xl mix-blend-multiply animate-pulse" />
      </div>

      {/* Decorative Circle */}
      <div className="absolute left-[25%] top-[25%] w-8 h-8 rounded-full border-2 border-sec/80 hidden lg:block z-10" />

      {/* Main Text */}
      <div className="z-10 flex flex-col items-center text-center mt-12">
        <RevealLine delay={0.1}>
          <h2 className="text-lg md:text-xl font-medium text-sec mb-4">
            Hi! I'm Fredy Omoke
          </h2>
        </RevealLine>
        
        <RevealLine delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-normal tracking-tight leading-[1.1] text-sec">
            Full-stack Developer
          </h1>
        </RevealLine>
        
        <RevealLine delay={0.3}>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-normal tracking-tight leading-[1.1] text-sec">
            UI & UX Designer.
          </h1>
        </RevealLine>
      </div>

      {/* Left Sidebar */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-20 hidden lg:flex">
        <div className="w-[1px] h-48 bg-sec/30 relative mb-4">
          <div className="absolute -top-1 -left-[1.5px] w-1 h-1 bg-sec rounded-full" />
          <div className="absolute -bottom-1 -left-[1.5px] w-1 h-1 bg-sec rounded-full" />
        </div>
        <MagneticButton>
          <a href="#" className="text-sec hover:text-sec/70 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </MagneticButton>
        <MagneticButton>
          <a href="#" className="text-sec hover:text-sec/70 transition-colors">
            <MessageCircle className="w-5 h-5" />
          </a>
        </MagneticButton>
        <MagneticButton>
          <a href="#" className="text-sec hover:text-sec/70 transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </MagneticButton>
      </div>

      {/* Scroll Down */}
      <FadeIn delay={1.2} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <span className="text-sm text-sec font-medium">
          scroll down
        </span>
      </FadeIn>

      {/* Right W. Honors Badge */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-white border border-sec/10 px-2 py-6 flex flex-col items-center gap-4 z-50 hidden lg:flex rounded-l-md shadow-sm">
        <span className="font-bold text-xl text-black">W.</span>
        <span className="text-xs font-medium tracking-widest text-black -rotate-90 mt-6 mb-4">Honors</span>
      </div>

      {/* Bottom Right Button */}
      <div className="fixed bottom-8 right-8 z-50 hidden lg:block">
        <MagneticButton>
          <button className="w-14 h-14 rounded-full bg-sec flex items-center justify-center hover:bg-sec/90 transition-colors text-main">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12c2-4 6-4 8 0s6 4 8 0" />
            </svg>
          </button>
        </MagneticButton>
      </div>
    </section>
  );
}
