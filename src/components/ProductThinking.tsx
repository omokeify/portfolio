import { FadeIn, RevealLine } from "./Animations";

export default function ProductThinking() {
  const articles = [
    {
      title: "Why Most Crypto Products Fail in Africa",
      desc: "Most products assume internet access, financial literacy, and trust — which doesn't reflect reality."
    },
    {
      title: "Designing for Offline Users",
      desc: "USSD isn't outdated — it's the most accessible financial interface in emerging markets."
    },
    {
      title: "Web2 vs Web3 UX Gap",
      desc: "Web3 is powerful but unusable for most people — the next wave will fix UX, not just infrastructure."
    },
    {
      title: "The Future of AI + Payments",
      desc: "AI will become the interface layer for financial systems — removing complexity completely."
    }
  ];

  return (
    <section className="py-24 bg-sec text-main relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <RevealLine>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Product Thinking</h2>
        </RevealLine>
        <FadeIn delay={0.2}>
          <p className="text-xl text-main/60 mb-16">How I think about building systems.</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, i) => (
            <FadeIn key={i} delay={0.1 * i}>
              <div className="group p-8 rounded-3xl border border-main/10 hover:bg-main/5 transition-colors cursor-pointer h-full flex flex-col justify-between">
                <div>
                  <div className="text-thr font-mono text-sm mb-4">0{i + 1}</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-thr transition-colors">{article.title}</h3>
                  <p className="text-main/70 leading-relaxed">{article.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
