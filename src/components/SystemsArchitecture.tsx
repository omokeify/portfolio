import { FadeIn, RevealLine } from "./Animations";
import { Wallet, CreditCard, Webhook, Smartphone } from "lucide-react";

export default function SystemsArchitecture() {
  const systems = [
    { name: "Wallet flows", icon: <Wallet className="w-8 h-8" /> },
    { name: "Payment systems", icon: <CreditCard className="w-8 h-8" /> },
    { name: "API integrations", icon: <Webhook className="w-8 h-8" /> },
    { name: "USSD architecture", icon: <Smartphone className="w-8 h-8" /> },
  ];

  return (
    <section className="py-24 bg-main text-sec border-t border-sec/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <RevealLine>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Systems & Architecture</h2>
            </RevealLine>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-sec/70 leading-relaxed border-l-4 border-thr pl-6">
                I don't just build interfaces — I design systems that connect users, infrastructure, and real-world use cases.
              </p>
            </FadeIn>
          </div>
          
          <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
            {systems.map((sys, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="bg-sec/5 border border-sec/10 p-8 rounded-2xl flex flex-col items-center justify-center text-center gap-4 hover:bg-sec/10 transition-colors h-40">
                  <div className="text-thr">{sys.icon}</div>
                  <h4 className="font-bold">{sys.name}</h4>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
