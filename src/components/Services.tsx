import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Layers, PenTool, Code2, Globe } from "lucide-react";
import { RevealLine, FadeIn } from "./Animations";

const services = [
  {
    num: "01",
    icon: <Layers className="w-8 h-8" strokeWidth={1.5} />,
    title: "UI/UX\nDesign",
    description: "Crafting intuitive and engaging user interfaces that provide seamless experiences across all devices and platforms."
  },
  {
    num: "02",
    icon: <PenTool className="w-8 h-8" strokeWidth={1.5} />,
    title: "Graphic\nDesign",
    description: "Creating visually compelling graphics and brand identities that communicate your message effectively."
  },
  {
    num: "03",
    icon: <Code2 className="w-8 h-8" strokeWidth={1.5} />,
    title: "Web\nDevelopment",
    description: "Building robust, scalable, and high-performance web applications using modern technologies."
  },
  {
    num: "04",
    icon: <Globe className="w-8 h-8" strokeWidth={1.5} />,
    title: "SEO\nOptimization",
    description: "Improving your website's visibility and ranking on search engines to drive organic traffic."
  }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={containerRef} className="relative pt-24 bg-main text-sec overflow-hidden min-h-screen flex flex-col justify-between">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 flex-grow">
        
        {/* Top Label */}
        <FadeIn>
          <div className="flex items-center gap-2 mb-16">
            <div className="w-2 h-2 rounded-full bg-thr"></div>
            <span className="text-sm uppercase tracking-wider font-medium">How I transform ideas to live</span>
          </div>
        </FadeIn>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <FadeIn>
            <div>
              <div className="text-xs font-bold tracking-widest text-sec/50 uppercase mb-2">Years of Experience</div>
              <div className="text-6xl md:text-8xl font-bold tracking-tighter">4+</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="md:pl-24">
              <div className="text-xs font-bold tracking-widest text-sec/50 uppercase mb-2">Projects Completed</div>
              <div className="text-6xl md:text-8xl font-bold tracking-tighter">30+</div>
            </div>
          </FadeIn>
        </div>

        {/* Center Text */}
        <div className="max-w-3xl mx-auto mb-32">
          <RevealLine>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-8">
              Transforming ideas into exceptional digital<br className="hidden md:block" /> experiences through expertise and innovation
            </h2>
          </RevealLine>
          <FadeIn delay={0.3}>
            <div className="w-8 h-8 rounded-full border border-sec/40 ml-12">
              {/* Empty circle as in the image */}
            </div>
          </FadeIn>
        </div>

      </div>

      {/* Bottom Grid */}
      <div className="w-full border-t border-b border-sec/20 relative z-10">
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-r border-sec/20">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`p-8 md:p-10 lg:p-12 border-b lg:border-b-0 border-sec/20 hover:bg-sec/5 transition-colors ${
                  index === 0 ? 'md:border-r lg:border-r' : 
                  index === 1 ? 'lg:border-r' : 
                  index === 2 ? 'md:border-r lg:border-r' : ''
                }`}
              >
                <FadeIn delay={index * 0.1}>
                  <div className="flex justify-between items-start mb-16">
                    <div className="text-sec">
                      {service.icon}
                    </div>
                    <span className="text-sec/40 text-xl font-medium">{service.num}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-6 whitespace-pre-line">
                    {service.title}
                  </h3>
                  <p className="text-sec/60 text-xs md:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
