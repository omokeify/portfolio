import { motion } from "motion/react";

export default function CrissCrossMarquee() {
  const text = "Driven by Passion, Built with Code ✺ Custom Web Experiences ✺ ";
  
  // Repeat the text to ensure it covers the screen width
  const repeatedText = Array(4).fill(text).join("");

  return (
    <section className="relative h-64 bg-main overflow-hidden flex flex-col items-center justify-center">
      {/* First Marquee - Scrolling Left */}
      <div className="absolute w-[110%] bg-sec text-main py-4 transform -rotate-3 z-10 flex whitespace-nowrap overflow-hidden shadow-xl">
        <div className="animate-marquee flex whitespace-nowrap text-2xl md:text-4xl font-bold uppercase tracking-wider">
          <span className="pr-4">{repeatedText}</span>
          <span className="pr-4">{repeatedText}</span>
        </div>
      </div>

      {/* Second Marquee - Scrolling Right */}
      <div className="absolute w-[110%] bg-main text-sec border-y-2 border-sec py-4 transform rotate-3 flex whitespace-nowrap overflow-hidden">
        <div className="animate-marquee-reverse flex whitespace-nowrap text-2xl md:text-4xl font-bold uppercase tracking-wider">
          <span className="pr-4">{repeatedText}</span>
          <span className="pr-4">{repeatedText}</span>
        </div>
      </div>
    </section>
  );
}
