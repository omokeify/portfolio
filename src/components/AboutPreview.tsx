import { ArrowUpRight } from "lucide-react";
import { RevealLine, FadeIn } from "./Animations";
import MagneticButton from "./MagneticButton";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPreview() {
  const curveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (curveRef.current) {
      gsap.to(curveRef.current, {
        scrollTrigger: {
          trigger: "#hero",
          start: "top 90%",
          end: "bottom+=600 top",
          scrub: 1
        },
        scaleY: 6,
        ease: "power3.inOut",
        duration: 3
      });
    }
  }, []);

  return (
    <section id="about" className="relative z-30 py-24 px-6 md:px-12 lg:px-24 bg-sec text-main">
      {/* Curve */}
      <div 
        ref={curveRef}
        className="overflow-hidden absolute left-1/2 -top-8 lg:-top-12 transform -translate-x-1/2 w-full h-8 lg:h-16 z-40 origin-bottom"
      >
        <div className="absolute right-[-10%] rounded-[50%] h-[150%] w-[120%] bg-sec" />
      </div>

      <div className="max-w-7xl mx-auto relative z-50 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <RevealLine>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 leading-tight">
              I'm Fredy Omoke — a Full Stack Developer crafting fast, scalable, and immersive digital experiences that merge creativity with engineering precision.
            </h2>
          </RevealLine>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-2xl text-main/70 leading-relaxed">
              I specialize in developing SaaS platforms, AI-driven products, and interactive 3D web experiences using technologies like Next.js, Node.js, and Three.js.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="flex items-center gap-2 mt-8">
            <MagneticButton>
              <a href="#about" className="inline-flex items-center justify-center bg-thr text-sec px-8 py-4 rounded-full font-medium hover:bg-thr/90 transition-colors">
                About Me
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="#about" className="inline-flex items-center justify-center bg-thr text-sec w-14 h-14 rounded-full hover:bg-thr/90 transition-colors group">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </MagneticButton>
          </div>
        </FadeIn>

        <div className="w-full flex justify-between items-center mt-24 text-sm text-main/60">
          <FadeIn delay={0.4}>
            <div className="flex items-center gap-2">
              <span className="animate-bounce">↓</span> Scroll to Explore
            </div>
          </FadeIn>
          <FadeIn delay={0.5}>
            <div>My Short Story</div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
