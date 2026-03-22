import { useEffect, useRef, ReactNode } from "react";
import { useInView, motion } from "motion/react";
import { RevealLine, FadeIn } from "../components/Animations";
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
      <ThemeSection mainColor="#0a0a0a" secColor="#e7e7e7" className="w-full pt-40 pb-20 px-6 md:px-12 lg:px-24">
        <div className="w-full flex flex-col md:flex-row gap-8 justify-between relative">
          <div className="pt-12 pb-7">
            <RevealLine>
              <h1 className="text-5xl md:text-6xl lg:text-9xl font-bold tracking-tighter leading-[0.8] text-sec mb-12 uppercase">
                Web3 <br /> <span className="opacity-20 italic">Architect</span>
              </h1>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-lg lg:text-xl xl:text-3xl leading-relaxed max-w-full lg:max-w-4xl xl:max-w-5xl text-sec/80 font-medium">
                I build the invisible rails of the decentralized economy. My focus is on creating production-ready Web3 infrastructure—from offline crypto payment gateways like HaraPay to complex liquidity engines like Arcle. I specialize in bridging the gap between blockchain complexity and the seamless user experiences businesses expect.
              </p>
            </FadeIn>
          </div>
        </div>
      </ThemeSection>

      {/* Detailed Text & Image Section */}
      <ThemeSection mainColor="#1e1e1e" secColor="#e7e7e7" className="w-full py-32 px-6 md:px-12 lg:px-24">
        <div className="w-full flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-8 text-lg md:text-2xl text-sec/80 leading-relaxed justify-center font-medium">
            <FadeIn delay={0.3}>
              <p>
                As a technical architect in the Web3 space, I don't just write smart contracts—I build entire ecosystems. My work on **HaraPay** enabled crypto transactions for the unbanked via USSD technology, proving that blockchain can solve real-world problems in emerging markets.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p>
                Through **Arcle**, I architected the liquidity and payment rails that allow businesses to interact with crypto as easily as they do with fiat. I specialize in stablecoin settlement, cross-chain orchestration, and high-security infrastructure that meets enterprise standards.
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <p>
                My philosophy is simple: technology should be powerful but invisible. Whether it's Hedera SDK integrations or optimizing gas for high-frequency transactions, I ensure the underlying complexity never compromises the end-user experience.
              </p>
            </FadeIn>
          </div>
          <div className="relative overflow-hidden h-[60vh] md:h-[80vh] w-full md:w-1/2 rounded-[3rem] border border-sec/10 shadow-3xl bg-black">
            <FadeIn delay={0.6} className="w-full h-full opacity-60">
              <img 
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop" 
                alt="Web3 Architecture" 
                className="w-full h-full object-cover transition-all duration-1000 hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </FadeIn>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
        </div>
      </ThemeSection>

      {/* Web3 Specific Skills */}
      <ThemeSection mainColor="#0a0a0a" secColor="#e7e7e7" className="w-full pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {[
            {
              skill: "Payment Orchestration",
              p: "I architect payment rails that bridge crypto and fiat. My expertise covers cross-border settlement using stablecoins, USSD-to-Crypto gateways for offline accessibility, and multi-signature wallet infrastructures for secure corporate treasury management."
            },
            {
              skill: "Liquidity Infrastructure",
              p: "Building the backend of decentralized finance—leveraging smart contracts and off-chain liquidity engines to ensure instant, low-cost swaps and payments. I specialize in optimizing order routing and managing deep integration with Layer 1 and Layer 2 protocols."
            },
            {
              skill: "Protocol Integration",
              p: "Deep technical experience with Hedera, Ethereum, and Polygon. I build robust SDK wrappers and middleware that allow legacy enterprises to communicate with distributed ledgers without rebuilding their entire stack from scratch."
            }
          ].map((item, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.1} className="flex flex-col group">
              <div className="flex flex-col gap-6 mb-8">
                <span className="text-thr font-bold tracking-widest text-xs">0{index + 1} // ARCHITECTURE</span>
                <div className="w-full h-[1px] bg-sec/10 group-hover:bg-thr/50 transition-colors"></div>
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-sec mb-6 uppercase">
                {item.skill}
              </h3>
              <p className="text-lg text-sec/50 leading-relaxed font-medium">
                {item.p}
              </p>
            </FadeIn>
          ))}
        </div>
      </ThemeSection>

      {/* Impact Section */}
      <ThemeSection mainColor="#d4f534" secColor="#1e1e1e" className="w-full pt-20 pb-40 px-6 md:px-12 lg:px-24">
        <div className="w-full text-center">
           <RevealLine>
              <h2 className="text-7xl md:text-[10vw] font-bold tracking-tighter uppercase mb-20 leading-none">
                 Moving Value <br /> <span className="opacity-30">Globally</span>
              </h2>
           </RevealLine>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-sec text-main p-12 rounded-[2.5rem] flex flex-col justify-between h-[400px]">
                 <span className="text-xs font-bold tracking-widest uppercase opacity-40">Adoption</span>
                 <h3 className="text-6xl font-bold tracking-tighter italic">Offline Crypto</h3>
                 <p className="text-main/60 leading-relaxed">Pioneered USSD-based crypto payments for zero-data environments via HaraPay.</p>
              </div>
              <div className="bg-sec text-main p-12 rounded-[2.5rem] flex flex-col justify-between h-[400px]">
                 <span className="text-xs font-bold tracking-widest uppercase opacity-40">Engineering</span>
                 <h3 className="text-6xl font-bold tracking-tighter italic">Liquidity Rails</h3>
                 <p className="text-main/60 leading-relaxed">Built the middleware that allows seamless fiat-to-crypto bridging for businesses.</p>
              </div>
              <div className="bg-sec text-main p-12 rounded-[2.5rem] flex flex-col justify-between h-[400px]">
                 <span className="text-xs font-bold tracking-widest uppercase opacity-40">Future</span>
                 <h3 className="text-6xl font-bold tracking-tighter italic">Stable Settlement</h3>
                 <p className="text-main/60 leading-relaxed">Optimizing cross-border transactions using the security of Hedera and Ethereum.</p>
              </div>
           </div>
        </div>
      </ThemeSection>

      {/* Bottom Navigation */}
      <footer className="w-full py-32 bg-sec text-main flex flex-center text-center justify-center items-center">
         <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12 uppercase">
               Interested in my <br /> <span className="opacity-40">System Design?</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
               <a href="https://wa.me/2347039662696" className="bg-main text-sec px-12 py-6 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform">
                  Contact Architect
               </a>
            </div>
         </FadeIn>
      </footer>

    </main>
  );
}
