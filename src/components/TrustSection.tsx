import { FadeIn } from "./Animations";

export default function TrustSection() {
  const partners = [
    "CoinW (Ambassador)",
    "Hedera Ecosystem (Certified Developer)",
    "Fizen (Community & Growth)",
    "Blockchain communities across Africa"
  ];

  return (
    <section className="py-12 border-y border-sec/10 bg-sec/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <FadeIn>
          <h3 className="text-center text-sm font-bold tracking-widest uppercase text-sec/50 mb-8">
            Built with & contributed to
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, i) => (
              <div key={i} className="text-lg md:text-xl font-medium text-sec/80 text-center">
                {partner}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
