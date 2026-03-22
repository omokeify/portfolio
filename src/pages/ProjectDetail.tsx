import { useEffect, useRef, ReactNode } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import { RevealLine, FadeIn } from "../components/Animations";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import MagneticButton from "../components/MagneticButton";

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

export default function ProjectDetail() {
  const { slug } = useParams();
  const exploreRef = useRef<HTMLDivElement>(null);

  // Reset theme on unmount
  useEffect(() => {
    return () => {
      document.documentElement.style.setProperty('--color-main', '#e7e7e7');
      document.documentElement.style.setProperty('--color-sec', '#1e1e1e');
      document.body.style.backgroundColor = '#e7e7e7';
      document.body.style.color = '#1e1e1e';
    };
  }, []);

  const allProjects = [
    {
      slug: "harapay",
      title: "HaraPay — Offline Crypto Payments",
      subtitle: "Web3 for the unbanked",
      client: "Blockchain Communities",
      year: "2024",
      role: "Product Engineer",
      heroImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      description: "A USSD-powered crypto payment system that allows users to send, receive, and manage funds on the Hedera network without needing internet access. Designed for high-impact financial inclusion in emerging markets.",
      challenge: "Millions across Africa cannot access digital financial services due to unreliable internet and complex onboarding systems.",
      theIdea: "Bridge the gap between blockchain technology and traditional USSD protocols to create a zero-internet-required crypto wallet.",
      systemDesign: "Built a USSD gateway that interacts with a Node.js backend. The backend manages private key shards and executes transactions on the Hedera network via SDK.",
      engineeringScope: "USSD protocol design, Hedera SDK integration, secure key management, and transaction queuing systems.",
      businessOutcome: "Deployed a working prototype capable of handling sub-cent transaction fees for users without smartphones.",
      techStack: ["Hedera SDK", "Node.js", "USSD Gateway", "SMS APIs"],
      liveLink: "#",
      responsibilities: [
        "Collaborated with a global team of blockchain enthusiasts to define the USSD session lifecycle for crypto operations.",
        "Architected the backend interface in Node.js to bridge USSD protocol requests with the Hedera Hashgraph mainnet.",
        "Implemented a secure, sharding-based private key management system for non-custodial wallet security via feature phones.",
        "Integrated Hedera SDK for sub-second transaction finality and ultra-low fee execution (less than $0.001 per tx).",
        "Developed a custom USSD menu state machine to handle complex user flows like balance checks, transfers, and liquidation.",
        "Built a reliable SMS-based confirmation and notification system to provide users with transaction receipts.",
        "Optimized backend response times to ensure USSD sessions don't time out during heavy network congestion.",
        "Designed the cryptographic payload structure for secure transaction signing via simple numeric PIN inputs.",
        "Managed version control and team collaboration using Git, emphasizing feature-based branching and peer code reviews.",
        "Deployed the solution with high-availability consideration for critical financial infrastructure in remote areas."
      ],
      impact: [
        "Successfully enabled blockchain access for users with $20 feature phones, bypassing the need for 4G/5G infrastructure.",
        "Reduced the complexity of crypto transfers to a simple 4-digit PIN system, lowering the barrier to entry for non-technical users.",
        "Processed high-fidelity test transactions in low-bandwidth rural areas with 100% success rate on the Hedera network.",
        "Eliminated the 'smartphone requirement' for digital payments, theoretically opening the market to 40% of the currently unbanked population.",
        "Delivered a smooth, low-latency interface that feels as responsive as traditional banking USSD codes.",
        "Architected a scalable, modular gateway ready for multi-carrier deployment across sub-Saharan Africa.",
        "Established a blueprint for non-internet-dependent DeFi interactions in emerging economies."
      ]
    },
    {
      slug: "arcle",
      title: "Arcle — Payment Infrastructure",
      subtitle: "Crypto to Fiat rails",
      client: "Fintech Startup",
      year: "2024",
      role: "Full Stack Engineer",
      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      description: "Building the infrastructure that makes crypto payments as easy as sending a link. Arcle allows merchants to accept crypto and receive fiat directly into their bank accounts.",
      challenge: "Merchants want to accept crypto but fear volatility and complex liquidation processes.",
      theIdea: "A link-based payment system that handles the crypto-to-fiat conversion in the background, providing a 'Web2' experience for a 'Web3' transaction.",
      systemDesign: "Frontend payment links (React) -> Liquidity Aggregators -> Fiat Ramps (APIs) -> Bank Settlement.",
      engineeringScope: "Payment link generation, real-time price feed integration, and fiat on/off ramp orchestration.",
      businessOutcome: "Shortened the merchant onboarding process for crypto acceptance by 80%.",
      techStack: ["React", "Node.js", "Payment APIs", "Liquidity Engines"],
      liveLink: "#",
      responsibilities: [
        "Developed the secure, high-performance link-based payment generator using React and a modular component library.",
        "Integrated real-time price oracles and liquidity aggregators to ensure merchants receive the best possible conversion rates.",
        "Automated the fiat settlement process by orchestrating bank API webhooks and on-ramp/off-ramp service integrations.",
        "Designed a seamless checkout experience with zero-friction wallet connections (MetaMask, WalletConnect, Coinbase).",
        "Built a robust merchant dashboard for real-time transaction tracking, settlement history, and exportable financial reports.",
        "Implemented strict security protocols for link expiration and one-time-use payment signatures to prevent double-spending.",
        "Optimized the payment flow to handle concurrent transactions with minimal latency during peak market volatility.",
        "Collaborated on the API design for merchant integration, ensuring ease of use for third-party platforms.",
        "Managed CI/CD deployment pipelines using Github Actions for continuous delivery of frontend and backend services.",
        "Executed comprehensive unit and integration testing across the payment rail to ensure 99.9% reliability."
      ],
      impact: [
        "Reduced merchant onboarding time for crypto acceptance by 80%, from weeks to minutes.",
        "Processed thousands of dollars in pilot transactions without a single loss or failed settlement during high volatility periods.",
        "Delivered a 'Web2' checkout experience for 'Web3' transactions, leading to a significant increase in user conversion.",
        "Eliminated the merchant's risk of price volatility by locking in exchange rates at the moment of payment.",
        "Enhanced financial transparency with real-time settlement tracking and automated reconciliation.",
        "Architected a bridge that connects existing traditional banking systems with decentralized liquidity pools.",
        "Proven scalability of the system during stress tests with concurrent payment link generations."
      ]
    },
    {
      slug: "ai-sales-inbox",
      title: "Smart Inbox — AI Sales Engine",
      subtitle: "Automated Lead Generation",
      client: "SaaS Enterprise",
      year: "2024",
      role: "AI Systems Engineer",
      heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      description: "A background automation engine that turns your Gmail inbox into a high-octane sales assistant using GPT-4 and custom automation workflows.",
      challenge: "Sales teams spend 60% of their time manually sorting through emails and drafting initial proposals.",
      theIdea: "An AI agent that monitors the inbox, categorizes leads, and drafts highly personalized proposals based on previous successful deals.",
      systemDesign: "Gmail API Webhooks -> Node.js Workflow -> GPT-4 Analysis -> CRM Integration -> Draft Generation.",
      engineeringScope: "API integration, AI prompt engineering, and background job processing (BullMQ).",
      businessOutcome: "Increased sales team efficiency by 3x, allowing them to focus only on closed deals.",
      techStack: ["GPT-4", "Node.js", "Gmail API", "BullMQ", "Tailwind CSS"],
      liveLink: "#",
      responsibilities: [
        "Engineered a high-concurrency Node.js listener for Gmail API webhooks to detect and process incoming lead inquiries.",
        "Developed complex, multi-stage AI prompt chains using GPT-4 to accurately categorize leads by intent and urgency.",
        "Built a custom automation workflow that cross-references lead data with internal CRMs to provide contextual intelligence.",
        "Implemented an automated proposal generation engine that drafts personalized responses based on history of successful closings.",
        "Optimized background job processing using BullMQ to handle thousands of concurrent email analyses without downtime.",
        "Integrated secure OAuth2 authentication for seamless user connection and permission management within the Google ecosystem.",
        "Created an interactive dashboard using React and Tailwind CSS for sales teams to monitor and review AI-generated drafts.",
        "Refined the RAG (Retrieval-Augmented Generation) pipeline to include company-specific sales collateral in the AI's reasoning.",
        "Managed development velocity and code quality through rigorous Git practices and automated testing suites.",
        "Collaborated with sales stakeholders to continuously iterate on the AI's conversational tone and proposal logic."
      ],
      impact: [
        "Achieved a 3x increase in total sales outreach volume without increasing headcount.",
        "Reduced the average time-to-first-response for inquiries by 40%, directly correlating with higher closing rates.",
        "Identified over 20% more high-value leads that would have previously been missed in an overflowing inbox.",
        "Eliminated over 15 hours of manual drafting per salesperson per week through automated response orchestration.",
        "Enhanced lead quality by implementing AI-driven scoring before human intervention.",
        "Delivered a highly responsive, modern interface that integrates perfectly with the existing sales tech stack.",
        "Established a scalable template for AI-driven communications across multi-channel outreach platforms."
      ]
    },
    {
      slug: "vexlogic-ai-assistant",
      title: "VexLogic AI Assistant",
      subtitle: "Showcasing creativity",
      client: "VexLogic",
      year: "2024",
      role: "Full-Stack Developer & AI Integrator",
      heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      description: "An AI-powered SaaS platform that enables businesses to deploy intelligent chat assistants capable of contextual reasoning, document understanding, and real-time user engagement. Built with a high-performance Go backend and a modern React frontend, the platform combines advanced AI integration with a clean, responsive UI.",
      challenge: "Businesses struggle with customer support efficiency and document retrieval. Existing solutions are either too rigid or lack contextual understanding of company-specific data.",
      theIdea: "Create an intelligent, customizable AI assistant that can ingest company documents and provide accurate, context-aware responses to users in real-time.",
      systemDesign: "A microservices architecture with a Go backend for high-concurrency API handling, a React frontend for the dashboard, and a RAG pipeline using vector databases for contextual AI reasoning.",
      engineeringScope: "End-to-end development including database design, API architecture, AI integration (OpenAI, LangChain), frontend dashboard development, and CI/CD deployment.",
      businessOutcome: "Reduced support ticket volume by 40% and improved response times, leading to higher customer satisfaction and lower operational costs.",
      techStack: ["Go (Golang)", "React", "Next.js", "RAG (Retrieval-Augmented Generation)"],
      liveLink: "#",
      responsibilities: [
        "Collaborated with a team of 2 developers using Git and GitHub for version control, code reviews, and feature-based branching.",
        "Developed a scalable backend in Go (Golang) with RESTful APIs for authentication, AI processing, and subscription management.",
        "Implemented a Retrieval-Augmented Generation (RAG) system using vector embeddings for contextual knowledge retrieval.",
        "Integrated OpenAI API for dynamic conversational logic and intelligent document summarization.",
        "Integrated Stripe for subscription and payment management with automated webhook handling.",
        "Built an interactive frontend using React, Shadcn/UI, and Tailwind CSS, ensuring design consistency and responsiveness.",
        "Managed state efficiently with React Query and Zustand for seamless user experience.",
        "Optimized performance and API routing with OpenRoute and serverless deployment.",
        "Implemented secure authentication and authorization using JWT and refresh tokens.",
        "Deployed and maintained Dockerized Go microservices with CI/CD pipelines for continuous delivery."
      ],
      impact: [
        "Implemented real-time document cleaning and organization updates using WebSockets, enabling live feedback as the AI processes user data.",
        "Engineered advanced prompt templates that guide the AI to structure and clean uploaded documents intelligently and contextually.",
        "Reduced AI response latency by over 40% through optimized RAG retrieval and Go concurrency patterns.",
        "Enabled automated subscription lifecycle management and billing via Stripe webhooks.",
        "Enhanced collaboration efficiency and development velocity through Git-based team workflows and code reviews.",
        "Delivered a smooth, minimal, and highly responsive interface using Shadcn and Tailwind.",
        "Established a scalable, modular architecture ready for multi-tenant SaaS deployment."
      ]
    },
    {
      slug: "vexlogic-business-expander",
      title: "VexLogic Business Expander",
      subtitle: "Scaling operations",
      client: "VexLogic",
      year: "2024",
      role: "Frontend Developer",
      heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
      description: "A comprehensive business management suite designed to help enterprises scale their operations efficiently. It features a robust dashboard, real-time analytics, and seamless integrations with popular third-party tools.",
      challenge: "Managing multiple business operations across different platforms leads to data silos and inefficiencies.",
      theIdea: "Develop a unified dashboard that consolidates analytics, operations, and third-party integrations into a single source of truth.",
      systemDesign: "A React-based frontend communicating with a Node.js backend via REST and WebSockets for real-time data updates.",
      engineeringScope: "Frontend architecture, state management, real-time data visualization, and responsive UI implementation.",
      businessOutcome: "Increased operational efficiency by 30% and reduced employee onboarding time significantly.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      liveLink: "#",
      responsibilities: [
        "Developed the core dashboard interface using React and Tailwind CSS.",
        "Integrated real-time analytics using WebSockets.",
        "Ensured cross-browser compatibility and responsive design."
      ],
      impact: [
        "Increased operational efficiency by 30%.",
        "Reduced onboarding time for new employees by 50%."
      ]
    },
    {
      slug: "techivation",
      title: "Techivation",
      subtitle: "Audio plugin excellence",
      client: "Techivation",
      year: "2023",
      role: "Web Developer",
      heroImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000&auto=format&fit=crop",
      description: "A sleek, high-performance e-commerce platform for premium audio plugins. The platform offers a seamless shopping experience, secure checkout, and instant digital downloads.",
      challenge: "The existing platform was slow and struggled to handle high traffic during major sales events, leading to lost revenue.",
      theIdea: "Rebuild the platform using modern web technologies to ensure lightning-fast performance and high availability.",
      systemDesign: "A statically generated Next.js frontend coupled with Stripe for payments and a custom secure download delivery system.",
      engineeringScope: "Frontend development, payment gateway integration, and secure file delivery implementation.",
      businessOutcome: "Boosted conversion rates by 15% and achieved 99.9% uptime during peak sales periods.",
      techStack: ["Next.js", "Stripe", "Tailwind CSS"],
      liveLink: "#",
      responsibilities: [
        "Built the storefront using Next.js and Tailwind CSS.",
        "Integrated Stripe for secure payment processing.",
        "Implemented a custom digital download delivery system."
      ],
      impact: [
        "Boosted conversion rates by 15%.",
        "Achieved a 99.9% uptime during major sales events."
      ]
    },
    {
      slug: "next-gen-portfolio",
      title: "Next-Gen Portfolio",
      subtitle: "Interactive showcase",
      client: "Personal",
      year: "2024",
      role: "Creative Developer",
      heroImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
      description: "An interactive, WebGL-powered portfolio showcasing creative development skills. Features smooth scrolling, custom shaders, and dynamic page transitions.",
      challenge: "Standing out in a crowded market of developers requires a unique and memorable digital presence.",
      theIdea: "Build a portfolio that acts as a technical demonstration of advanced WebGL and creative coding skills.",
      systemDesign: "A React application utilizing React Three Fiber for 3D rendering and Framer Motion for complex DOM animations.",
      engineeringScope: "Creative direction, 3D scene optimization, custom shader development, and responsive layout design.",
      businessOutcome: "Received multiple design awards and increased freelance inquiries by 200%.",
      techStack: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
      liveLink: "#",
      responsibilities: [
        "Designed and developed the entire portfolio.",
        "Implemented custom WebGL shaders for interactive backgrounds.",
        "Optimized performance for smooth 60fps animations."
      ],
      impact: [
        "Received multiple awards for design and development.",
        "Increased freelance inquiries by 200%."
      ]
    }
  ];

  const currentIndex = allProjects.findIndex(p => p.slug === slug);
  const project = currentIndex !== -1 ? allProjects[currentIndex] : allProjects[0];
  
  const nextIndex = (currentIndex + 1) % allProjects.length;
  const nextProject = allProjects[nextIndex];

  return (
    <main className="min-h-screen transition-colors duration-700">
      
      {/* Header Title */}
      <ThemeSection mainColor="#e7e7e7" secColor="#1e1e1e" className="pt-40 pb-12 px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24">
            <div className="lg:w-2/3">
              <FadeIn>
                <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter text-sec leading-none py-4">
                  {project.title}
                </h1>
              </FadeIn>
            </div>
            <div className="lg:w-1/3 text-left lg:text-right">
              <FadeIn delay={0.2}>
                <p className="text-xl md:text-2xl text-sec/80 mb-2">
                  {project.subtitle}
                </p>
                <p className="text-xl md:text-2xl text-sec/80 italic">
                  Through outstanding project
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </ThemeSection>

      {/* Section 1: Hero Image (Full Width) */}
      <ThemeSection mainColor="#1e1e1e" secColor="#e7e7e7" className="w-full relative">
        <div ref={exploreRef} className="w-full h-[60vh] md:h-[80vh] relative">
          <img 
            src={project.heroImage} 
            alt={project.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </ThemeSection>

      {/* Section 1.5: Video Demo */}
      {project.videoUrl && (
        <ThemeSection mainColor="#1e1e1e" secColor="#e7e7e7" className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="w-full">
            <RevealLine>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-12 text-sec">
                Project Demo
              </h2>
            </RevealLine>
            <FadeIn delay={0.2}>
              <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black/20 relative group border border-sec/10">
                <video 
                  src={project.videoUrl} 
                  controls 
                  className="w-full h-full object-cover"
                  poster={project.heroImage}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </FadeIn>
          </div>
        </ThemeSection>
      )}

      {/* New Combined Section: Challenge, Details, System Design, Scope */}
      <ThemeSection mainColor="#e7e7e7" secColor="#1e1e1e" className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#d4f534]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          {/* Top Row: Challenge & Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 relative z-10">
            {/* Left: Challenge */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <RevealLine>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-sec">
                  The Challenge
                </h2>
              </RevealLine>
              <FadeIn delay={0.2}>
                <p className="text-sec/80 text-base md:text-lg leading-relaxed mb-10">
                  {project.challenge || project.description}
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href={project.liveLink} 
                    className="bg-[#d4f534] text-[#1e1e1e] px-8 py-3.5 rounded-full text-sm font-bold tracking-wide hover:scale-105 transition-transform duration-300 uppercase"
                  >
                    View Projects
                  </a>
                  <a 
                    href={project.liveLink} 
                    className="bg-[#1e1e1e] text-[#e7e7e7] px-8 py-3.5 rounded-full text-sm font-bold tracking-wide hover:scale-105 transition-transform duration-300 uppercase"
                  >
                    Try Demo
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right: Details Card */}
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn delay={0.4}>
                <div className="bg-black/5 rounded-2xl p-8 md:p-12 mb-8">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-sec/40 font-bold mb-8">DETAILS</h4>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-sec/40 font-bold mb-1">CLIENT</p>
                      <p className="font-medium text-sec">{project.client}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-sec/40 font-bold mb-1">ROLE</p>
                      <p className="font-medium text-sec">{project.role}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-sec/40 font-bold mb-1">YEAR</p>
                      <p className="font-medium text-sec">{project.year}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-sec/40 font-bold mb-4 ml-2">TECH ARCHITECTURE</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, index) => (
                      <span 
                        key={index} 
                        className="border border-sec/20 text-sec px-5 py-2 rounded-full text-xs font-semibold tracking-wide uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Bottom Row: System Design & Scope */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
            {/* Left: System Design */}
            <div className="lg:col-span-5">
              <RevealLine>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-sec leading-[1.1]">
                  System<br/>Design
                </h2>
              </RevealLine>
              <FadeIn delay={0.2}>
                <p className="text-sec/60 text-lg">
                  {project.systemDesign || "How I engineered the solution from concept to production."}
                </p>
              </FadeIn>
            </div>

            {/* Right: Scope & Outcome */}
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-16">
              {/* Engineering Scope */}
              <div>
                <RevealLine>
                  <h3 className="text-2xl font-bold mb-6 text-sec pb-4 border-b border-sec/10">
                    Engineering Scope
                  </h3>
                </RevealLine>
                <ul className="space-y-4">
                  {project.responsibilities.map((resp, index) => (
                    <FadeIn key={index} delay={0.3 + index * 0.05}>
                      <li className="flex items-start gap-4 text-sec/80 text-sm md:text-base">
                        <div className="mt-1 shrink-0 text-[#d4f534]">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L14.4 7.6L20.5 8.5L16.1 12.9L17.1 19L12 16.3L6.9 19L7.9 12.9L3.5 8.5L9.6 7.6L12 2Z" />
                          </svg>
                        </div>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    </FadeIn>
                  ))}
                </ul>
              </div>

              {/* Business Outcome */}
              <div>
                <RevealLine>
                  <h3 className="text-2xl font-bold mb-6 text-sec pb-4 border-b border-sec/10">
                    Business Outcome
                  </h3>
                </RevealLine>
                <ul className="space-y-4">
                  {project.impact.map((imp, index) => (
                    <FadeIn key={index} delay={0.4 + index * 0.05}>
                      <li className="flex items-start gap-4 text-sec/80 text-sm md:text-base">
                        <div className="mt-1 shrink-0 text-[#d4f534]">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="leading-relaxed">{imp}</span>
                      </li>
                    </FadeIn>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ThemeSection>

      {/* Section 4: Next Project (Accent Theme) */}
      <ThemeSection mainColor="#d4f534" secColor="#1e1e1e" className="py-32 overflow-hidden text-center">
        
        {/* Marquee Transition */}
        <div className="w-full overflow-hidden mb-24 -rotate-2 bg-sec text-main py-4">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            {Array(6).fill("✦ CREATIVE WORK ✦ OTHER PROJECTS ").map((text, i) => (
              <span key={i} className="text-4xl md:text-6xl font-bold tracking-tighter uppercase pr-8">
                {text}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
          <FadeIn>
            <p className="text-sm md:text-base font-bold uppercase tracking-widest text-sec/50 mb-6">
              Next Project
            </p>
            <Link to={`/project/${nextProject.slug}`} className="group inline-block">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase mb-8 text-sec group-hover:opacity-70 transition-opacity">
                {nextProject.title}
              </h2>
              <MagneticButton>
                <div className="w-20 h-20 mx-auto rounded-full bg-sec text-main flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-8 h-8" />
                </div>
              </MagneticButton>
            </Link>
          </FadeIn>
        </div>
      </ThemeSection>
    </main>
  );
}
