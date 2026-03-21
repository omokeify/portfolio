import { FadeIn, RevealLine } from "./Animations";
import MagneticButton from "./MagneticButton";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-main text-sec relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <RevealLine>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-16">Featured Projects</h2>
        </RevealLine>

        {/* Project 1: HaraPay (BIG) */}
        <FadeIn>
          <div id="harapay" className="mb-16 md:mb-32 bg-sec/5 border border-sec/10 rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">HaraPay — Offline Crypto Payments via USSD</h3>
                <p className="text-xl text-thr font-medium mb-8">Enabling financial access without internet.</p>
                
                <div className="space-y-6 text-sec/80">
                  <div>
                    <h4 className="font-bold text-sec mb-2">Problem</h4>
                    <p>Millions across Africa cannot access digital financial services due to unreliable internet and complex onboarding systems.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sec mb-2">Solution</h4>
                    <p>Built a USSD-powered crypto payment system that allows users to send, receive, and manage funds without needing internet access.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sec mb-2">What I Did</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Designed USSD-first user experience</li>
                      <li>Built backend logic for transaction handling</li>
                      <li>Integrated Hedera network for fast, low-cost transactions</li>
                      <li>Created SMS-based confirmation system</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-sec mb-2">Tech Stack</h4>
                    <p className="font-mono text-sm">Hedera SDK · Node.js · USSD APIs · SMS Gateway</p>
                  </div>
                  <div className="bg-thr/10 border border-thr/20 p-4 rounded-xl">
                    <h4 className="font-bold text-thr mb-1">Outcome</h4>
                    <p>A working prototype bridging blockchain with real-world accessibility.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <MagneticButton>
                    <a href="#" className="bg-sec text-main px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform flex items-center gap-2">
                      View Case Study <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </MagneticButton>
                  <MagneticButton>
                    <a href="#" className="border border-sec/20 text-sec px-6 py-3 rounded-full font-medium hover:bg-sec/5 transition-colors">
                      Try Demo
                    </a>
                  </MagneticButton>
                </div>
              </div>
              <div className="lg:w-1/2 relative min-h-[300px] bg-main rounded-2xl border border-sec/10 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,245,52,0.1)_0%,transparent_70%)]"></div>
                <div className="text-center p-8 relative z-10">
                  <div className="w-64 h-[500px] border-[8px] border-sec/20 rounded-[3rem] mx-auto relative bg-main flex flex-col items-center justify-center shadow-2xl">
                    <div className="w-24 h-6 bg-sec/20 rounded-b-xl absolute top-0"></div>
                    <div className="text-sec font-mono text-sm text-left w-full px-6">
                      <p className="text-sec/50 mb-4">*384*1#</p>
                      <p className="font-bold mb-4">Welcome to HaraPay</p>
                      <p className="mb-2">1. Send Crypto</p>
                      <p className="mb-2">2. Check Balance</p>
                      <p className="mb-2">3. Receive</p>
                      <div className="mt-8 border-t border-sec/20 pt-4 flex gap-2">
                        <div className="flex-1 border-b-2 border-sec/50"></div>
                        <span className="text-xs text-sec/50">SEND</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Grid for Project 2 & 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 2: Arcle */}
          <FadeIn delay={0.2}>
            <div className="bg-sec/5 border border-sec/10 rounded-3xl p-8 h-full flex flex-col hover:bg-sec/10 transition-colors">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Arcle — Crypto to Fiat Payment Infrastructure</h3>
              <p className="text-thr font-medium mb-6">Making crypto payments as easy as sending a link.</p>
              
              <div className="space-y-4 text-sec/80 flex-grow">
                <div>
                  <h4 className="font-bold text-sec">Problem</h4>
                  <p className="text-sm">Crypto payments are complex for non-crypto users.</p>
                </div>
                <div>
                  <h4 className="font-bold text-sec">Solution</h4>
                  <p className="text-sm">Built a system that allows users to generate secure payment links where payers can choose fiat or crypto.</p>
                </div>
                <div>
                  <h4 className="font-bold text-sec">What I Did</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Designed payment UX flows</li>
                    <li>Built link-based transaction logic</li>
                    <li>Integrated fiat on/off ramp concepts</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-sec/10">
                <h4 className="font-bold text-sec mb-2 text-sm">Tech</h4>
                <p className="font-mono text-xs">React · Node.js · Payment APIs · Wallet Logic</p>
              </div>
            </div>
          </FadeIn>

          {/* Project 3: AI Inbox */}
          <FadeIn delay={0.3}>
            <div className="bg-sec/5 border border-sec/10 rounded-3xl p-8 h-full flex flex-col hover:bg-sec/10 transition-colors">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">AI Sales Inbox</h3>
              <p className="text-thr font-medium mb-6">Turning emails into leads, proposals, and revenue.</p>
              
              <div className="space-y-4 text-sec/80 flex-grow">
                <div>
                  <h4 className="font-bold text-sec">What it does</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                    <li>Connects to Gmail</li>
                    <li>Detects high-value leads</li>
                    <li>Generates personalized outreach</li>
                    <li>Converts inbox into a sales assistant</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-sec/10">
                <h4 className="font-bold text-sec mb-2 text-sm">Tech</h4>
                <p className="font-mono text-xs">AI APIs · Automation · Backend workflows</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
