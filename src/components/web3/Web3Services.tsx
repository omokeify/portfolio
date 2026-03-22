import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Layers, Code2, Database, Shield } from "lucide-react";
import { RevealLine, FadeIn } from "../Animations";

const services = [
  {
    num: "01",
    icon: <Code2 className="w-8 h-8" strokeWidth={1.5} />,
    title: "Smart Contract\nDevelopment",
    description: "Secure, optimized, and audited Solidity smart contracts for DeFi, NFTs, and custom dApps."
  },
  {
    num: "02",
    icon: <Layers className="w-8 h-8" strokeWidth={1.5} />,
    title: "dApp\nArchitecture",
    description: "End-to-end architecture for decentralized applications, ensuring seamless integration."
  },
  {
    num: "03",
    icon: <Database className="w-8 h-8" strokeWidth={1.5} />,
    title: "Web3\nIntegrations",
    description: "Connecting traditional Web2 systems with Web3 infrastructure, wallets, and IPFS."
  },
  {
    num: "04",
    icon: <Shield className="w-8 h-8" strokeWidth={1.5} />,
    title: "Security &\nAuditing",
    description: "Deep focus on smart contract vulnerabilities to ensure robust and exploit-free code."
  }
];

export default function Web3Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={containerRef} className="relative pt-24 bg-main text-sec overflow-hidden min-h-screen flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 relative z-10 flex-grow">
        
        {/* Top Label */}
        <FadeIn>
          <div className="flex items-center gap-2 mb-16">
            <div className="w-2 h-2 rounded-full bg-thr"></div>
            <span className="text-sm uppercase tracking-wider font-medium">How I build decentralized futures</span>
          </div>
        </FadeIn>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <FadeIn>
            <div>
              <div className="text-xs font-bold tracking-widest text-sec/50 uppercase mb-2">Smart Contracts Deployed</div>
              <div className="text-6xl md:text-8xl font-bold tracking-tighter">15+</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="md:pl-24">
              <div className="text-xs font-bold tracking-widest text-sec/50 uppercase mb-2">Web3 Projects</div>
              <div className="text-6xl md:text-8xl font-bold tracking-tighter">10+</div>
            </div>
          </FadeIn>
        </div>

        {/* Center Text */}
        <div className="max-w-3xl mx-auto mb-32">
          <RevealLine>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-8">
              Bridging the gap between complex blockchain<br className="hidden md:block" /> infrastructure and seamless user experiences
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
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
