import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { RevealLine, FadeIn } from "./Animations";
import MagneticButton from "./MagneticButton";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-sec text-main pt-24 pb-12 rounded-t-[3rem] mt-24 overflow-hidden">
      <div className="w-full overflow-hidden py-12 mb-24 border-y border-main/10">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1035] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 15,
          }}
        >
          <span className="text-6xl md:text-8xl lg:text-[10rem] font-bold uppercase tracking-tighter px-8 leading-[0.9]">
            Let's Work Together • Let's Work Together • Let's Work Together •
          </span>
          <span className="text-6xl md:text-8xl lg:text-[10rem] font-bold uppercase tracking-tighter px-8 leading-[0.9]">
            Let's Work Together • Let's Work Together • Let's Work Together •
          </span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          <FadeIn delay={0.2}>
            <h4 className="text-xs uppercase tracking-widest text-main/50 font-bold mb-6">Links</h4>
            <ul className="space-y-4 font-medium flex flex-col items-start">
              <li><MagneticButton><Link to="/" className="text-main/80 hover:text-thr transition-colors inline-block py-1">Home</Link></MagneticButton></li>
              <li><MagneticButton><Link to="/works" className="text-main/80 hover:text-thr transition-colors inline-block py-1">Work</Link></MagneticButton></li>
              <li><MagneticButton><Link to="/about" className="text-main/80 hover:text-thr transition-colors inline-block py-1">About</Link></MagneticButton></li>
              <li><MagneticButton><a href="https://wa.me/2347039662696" target="_blank" rel="noopener noreferrer" className="text-main/80 hover:text-thr transition-colors inline-block py-1">Contact</a></MagneticButton></li>
            </ul>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <h4 className="text-xs uppercase tracking-widest text-main/50 font-bold mb-6">Socials</h4>
            <ul className="space-y-4 font-medium flex flex-col items-start">
              <li>
                <MagneticButton>
                  <a href="mailto:fredyomoke@gmail.com" className="text-main/80 hover:text-thr transition-colors inline-flex items-center gap-1 group py-1">
                    Email <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 transition-all" />
                  </a>
                </MagneticButton>
              </li>
              <li>
                <MagneticButton>
                  <a href="https://www.linkedin.com/in/fredyomoke/" target="_blank" rel="noopener noreferrer" className="text-main/80 hover:text-thr transition-colors inline-flex items-center gap-1 group py-1">
                    LinkedIn <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 transition-all" />
                  </a>
                </MagneticButton>
              </li>
              <li>
                <MagneticButton>
                  <a href="https://wa.me/2347039662696" target="_blank" rel="noopener noreferrer" className="text-main/80 hover:text-thr transition-colors inline-flex items-center gap-1 group py-1">
                    WhatsApp <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 transition-all" />
                  </a>
                </MagneticButton>
              </li>
              <li>
                <MagneticButton>
                  <a href="https://github.com/fredyomoke" target="_blank" rel="noopener noreferrer" className="text-main/80 hover:text-thr transition-colors inline-flex items-center gap-1 group py-1">
                    GitHub <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 transition-all" />
                  </a>
                </MagneticButton>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.4} className="col-span-2 md:col-span-2">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-main mb-6">
              FREDY
            </h2>
            <div className="flex flex-col sm:flex-row gap-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-main/50 font-bold mb-2">Version</h4>
                <p className="text-main/80 font-medium">2026 © Edition</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-main/50 font-bold mb-2">Contact</h4>
                <p className="text-main/80 font-medium">+2347039662696</p>
                <p className="text-main/80 font-medium">fredyomoke@gmail.com</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
}
