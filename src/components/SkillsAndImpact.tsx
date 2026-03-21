import { FadeIn, RevealLine } from "./Animations";

export default function SkillsAndImpact() {
  return (
    <section className="py-24 bg-sec text-main rounded-t-[3rem] -mb-10 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Skills */}
          <div>
            <RevealLine>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12">Skills</h2>
            </RevealLine>
            <div className="space-y-12">
              <FadeIn delay={0.1}>
                <h3 className="text-xl font-bold text-thr mb-4 border-b border-main/10 pb-2">Design</h3>
                <ul className="space-y-2 text-main/80 font-medium">
                  <li>UX for low-bandwidth environments</li>
                  <li>Fintech & payment interfaces</li>
                </ul>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h3 className="text-xl font-bold text-thr mb-4 border-b border-main/10 pb-2">Development</h3>
                <ul className="space-y-2 text-main/80 font-medium">
                  <li>Full-stack apps (Next.js, Node.js)</li>
                  <li>API & system integrations</li>
                </ul>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h3 className="text-xl font-bold text-thr mb-4 border-b border-main/10 pb-2">Web3</h3>
                <ul className="space-y-2 text-main/80 font-medium">
                  <li>Hedera SDK</li>
                  <li>Wallet architecture</li>
                  <li>Smart contract interaction</li>
                </ul>
              </FadeIn>
            </div>
          </div>

          {/* Community & Impact */}
          <div>
            <RevealLine>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12">Beyond Code</h2>
            </RevealLine>
            <div className="space-y-6">
              <FadeIn delay={0.1}>
                <div className="bg-main/5 border border-main/10 p-6 rounded-2xl hover:bg-main/10 transition-colors">
                  <p className="font-medium text-lg">Hosted blockchain events across Africa</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="bg-main/5 border border-main/10 p-6 rounded-2xl hover:bg-main/10 transition-colors">
                  <p className="font-medium text-lg">Educated 100+ users on crypto & AI</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="bg-main/5 border border-main/10 p-6 rounded-2xl hover:bg-main/10 transition-colors">
                  <p className="font-medium text-lg">Built and managed tech communities</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="bg-main/5 border border-main/10 p-6 rounded-2xl hover:bg-main/10 transition-colors">
                  <p className="font-medium text-lg">Ambassador at CoinW</p>
                </div>
              </FadeIn>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
