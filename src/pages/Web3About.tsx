import { useEffect, useRef, ReactNode } from "react";
import { useInView, motion } from "motion/react";
import { RevealLine, FadeIn } from "../components/Animations";
import MagneticButton from "../components/MagneticButton";
import { ArrowUpRight } from "lucide-react";

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

export default function Web3About() {
  // Reset theme on unmount
  useEffect(() => {
    return () => {
      document.documentElement.style.setProperty('--color-main', '#e7e7e7');
      document.documentElement.style.setProperty('--color-sec', '#1e1e1e');
      document.body.style.backgroundColor = '#e7e7e7';
      document.body.style.color = '#1e1e1e';
    };
  }, []);

  return (
    <main className="min-h-screen transition-colors duration-700 overflow-hidden">
      
      {/* Intro Section */}
      <ThemeSection mainColor="#e7e7e7" secColor="#1e1e1e" className="w-full pt-40 pb-20 px-6 md:px-12 lg:px-24">
        <div className="w-full flex flex-col md:flex-row gap-8 justify-between relative">
          <div className="pt-12 pb-7">
            <RevealLine>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-tight text-sec mb-8">
                Web3 Architect
              </h1>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-full lg:max-w-4xl xl:max-w-5xl text-sec/80 font-medium">
                I build the invisible rails and manage the human ecosystems of the decentralized economy. Most of my work sits at the intersection of Blockchain infrastructure, Ecosystem Management, and Community Growth. From architecting USSD crypto gateways like HaraPay to hosting IRL events and writing technical whitepapers, I bridge the gap between protocol logic and real-world adoption. I'm a multi-chain builder with hands-on experience across Base, Hedera, Solana, Flow, BNB, and Cardano.
              </p>
            </FadeIn>
          </div>
        </div>
      </ThemeSection>

      {/* Detailed Text & Image Section */}
      <ThemeSection mainColor="#1e1e1e" secColor="#e7e7e7" className="w-full py-32 px-6 md:px-12 lg:px-24">
        <div className="w-full flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-8 text-lg md:text-xl text-sec/80 leading-relaxed justify-center">
            <FadeIn delay={0.3}>
              <p>
                As a technical architect in the Web3 space, I prioritize the 'Bridge'—the critical infrastructure that connects traditional finance with decentralized protocols. My work on HaraPay enabled crypto transactions for the unbanked via secure USSD technology, proving that blockchain can solve foundational accessibility issues.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p>
                My approach combines cryptographic security with exceptional user UX—specializing in stablecoin settlement, cross-chain orchestration, and high-performance middleware. I've worked across diverse protocols from Hedera to Ethereum, consistently delivering production-ready infrastructure that scales for enterprise demand.
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <p>
                What sets me apart is my ability to manage the entire Web3 stack: from writing optimized Smart Contracts to building the off-chain liquidity engines and front-end dApps that interact with them. I don't just handle transactions—I architect the systems that drive measurable global adoption.
              </p>
            </FadeIn>
          </div>
          <div className="relative overflow-hidden h-[60vh] md:h-[80vh] w-full md:w-1/2 rounded-2xl">
            <FadeIn delay={0.6} className="w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop" 
                alt="Web3 Architecture" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105"
                referrerPolicy="no-referrer"
              />
            </FadeIn>
          </div>
        </div>
      </ThemeSection>

      {/* Web3 Specific Skills */}
      <ThemeSection mainColor="#e7e7e7" secColor="#1e1e1e" className="w-full pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {[
            {
              skill: "Payment Orchestration",
              p: "I architect payment rails that bridge crypto and fiat. My expertise covers cross-border settlement using stablecoins, USSD-to-Crypto gateways for offline accessibility, and multi-signature wallet infrastructures for secure corporate treasury management."
            },
            {
              skill: "Ecosystem Management",
              p: "Beyond code, I lead growth. I manage multi-chain communities, handle social media strategy for top-tier projects, and manage decentralized marketing campaigns that turn technical protocols into household names."
            },
            {
              skill: "Protocol Narrative",
              p: "I translate complexity into clarity. I author technical whitepapers, comprehensive documentation, and educational content that empowers developers and investors to understand and build on emerging decentralized architectures."
            },
            {
              skill: "IRL Events & Education",
              p: "I bridge the digital and physical worlds by hosting IRL Web3 events, workshops, and educational seminars. I focus on onboarding the next wave of builders and users through hands-on demonstrations and strategic ecosystem networking."
            }
          ].map((item, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.1} className="flex flex-col">
              <div className="flex flex-col gap-4 mb-6">
                <span className="text-sec/50 text-sm">0{index + 1}</span>
                <div className="w-full h-[1px] bg-sec/20"></div>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-sec mb-4 uppercase">
                {item.skill}
              </h3>
              <p className="text-base text-sec/60 leading-relaxed font-medium">
                {item.p}
              </p>
            </FadeIn>
          ))}
        </div>
      </ThemeSection>

      {/* Impact Section */}
      <ThemeSection mainColor="#d4f534" secColor="#1e1e1e" className="w-full pt-16 pb-32 px-6 md:px-12 lg:px-24">
        <div className="w-full">
          <div className="text-center mb-16">
            <RevealLine>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-sec mb-4">
                Web3 Impact
              </h2>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-sec/60 max-w-3xl mx-auto">
                Proven results in moving value and scaling decentralized adoption
              </p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "100%",
                label: "Offline Reach",
                description: "Developed USSD crypto gateways for the unbanked via HaraPay infrastructure"
              },
              {
                number: "0.2s",
                label: "Settlement Speed",
                description: "Optimized payment rails for near-instant stablecoin clearing on Hedera"
              },
              {
                number: "5+",
                label: "Chain Integrations",
                description: "Cross-chain liquidity bridge architecture across Ethereum, Polygon, and more"
              },
              {
                number: "Secure",
                label: "Institutional Grade",
                description: "Multi-sig and HSM-backed infrastructure for enterprise crypto custody"
              }
            ].map((stat, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.1} className="h-full">
                <div className="bg-sec text-main p-8 md:p-10 rounded-2xl h-full flex flex-col">
                  <div className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
                    {stat.number}
                  </div>
                  <div className="text-lg md:text-xl font-bold mb-4 uppercase tracking-tighter">
                    {stat.label}
                  </div>
                  <div className="text-sm text-main/60 leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </ThemeSection>

      {/* Tech Arsenal Section (Synced with Web2 but context focused) */}
      <ThemeSection mainColor="#1e1e1e" secColor="#e7e7e7" className="w-full py-32 px-6 md:px-12 lg:px-24">
        <div className="w-full">
          <div className="text-center mb-16">
            <RevealLine>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-sec mb-4">
                Decentralized Arsenal
              </h2>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-sec/70 max-w-3xl mx-auto">
                Enterprise tools for the next generation of finance
              </p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                category: "Blockchains & Ecosystems",
                techs: ["Base", "Hedera Hashgraph", "Solana", "Flow", "BNB Chain", "Cardano", "Ethereum", "Polygon"]
              },
              {
                category: "Growth & Strategy",
                techs: ["Web3 Marketing", "Social Media Management", "Community Ops", "Growth Hacking", "IRL Events", "Education"]
              },
              {
                category: "Smart Contracts & Dev",
                techs: ["Solidity", "Rust", "Hardhat", "Foundry", "Viem/Wagmi", "Web3.js", "Ethers.js"]
              },
              {
                category: "Docs & Architecture",
                techs: ["Whitepaper Authoring", "Technical Documentation", "SDK Design", "IPFS", "Arweave", "Chainlink"]
              },
              {
                category: "Security & Infrastructure",
                techs: ["Multi-Sig", "Gnosis Safe", "Security Auditing", "CI/CD", "Docker", "Nginx", "PM2"]
              },
              {
                category: "Core Systems & UI",
                techs: ["Node.js", "Express/Fastify", "PostgreSQL", "Redis", "React", "Next.js", "Tailwind CSS"]
              }
            ].map((category, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.1} className="flex flex-col">
                <h3 className="text-2xl font-bold tracking-tight mb-6 text-sec uppercase tracking-tighter">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.techs.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 bg-sec/10 text-sec rounded-full text-sm font-medium hover:bg-sec hover:text-main transition-colors duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </ThemeSection>

      {/* CTA Section & Marquees (Consistent Branding) */}
      <ThemeSection mainColor="#e7e7e7" secColor="#1e1e1e" className="w-full pt-32 pb-0 overflow-hidden">
        <div className="w-full px-6 md:px-12 lg:px-24 mb-10">
          <FadeIn>
            <div className="bg-sec text-main py-16 px-8 md:py-20 md:px-16 rounded-3xl text-center max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 uppercase">
                Ready to Architect the Future?
              </h2>
              <p className="text-base md:text-lg text-main/70 max-w-3xl mx-auto leading-relaxed">
                Whether you're building a decentralized payment gateway, institutional liquidity rails, or complex protocol integrations, I bring the technical depth to turn decentralized theory into production-ready infrastructure.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Criss-Cross Marquees */}
        <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center mt-10">
          <div className="absolute w-[110%] bg-[#1e1e1e] text-[#e7e7e7] py-4 md:py-6 transform -rotate-3 z-0 flex overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap items-center"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            >
              {Array(4).fill("Decentralized Rails ✺ Secure Smart Contracts ✺ Protocol Engineering ✺ Institutional Liquidity ✺ Stablecoin Settlement ✺ ").map((text, i) => (
                <span key={i} className="text-2xl md:text-4xl font-bold tracking-wide pr-4 uppercase italic">
                  {text}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="absolute w-[110%] bg-[#1e1e1e] text-[#e7e7e7] py-4 md:py-6 transform rotate-3 z-10 flex overflow-hidden shadow-2xl border-y border-white/10">
            <motion.div
              className="flex whitespace-nowrap items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            >
              {Array(4).fill("Decentralized Rails ✺ Secure Smart Contracts ✺ Protocol Engineering ✺ Institutional Liquidity ✺ Stablecoin Settlement ✺ ").map((text, i) => (
                <span key={i} className="text-2xl md:text-4xl font-bold tracking-wide pr-4 uppercase italic">
                  {text}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </ThemeSection>

    </main>
  );
}
