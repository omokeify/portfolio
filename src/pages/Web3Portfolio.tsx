import { useState, useEffect } from "react";
import Web3Hero from "../components/web3/Web3Hero";
import Web3AboutPreview from "../components/web3/Web3AboutPreview";
import Web3Services from "../components/web3/Web3Services";
import Web3ProjectsPreview from "../components/web3/Web3ProjectsPreview";
import Web3Experience from "../components/web3/Web3Experience";
import CrissCrossMarquee from "../components/CrissCrossMarquee";

export default function Web3Portfolio() {
  const [hue, setHue] = useState(180); // Start with a cool blue/cyan for Web3

  useEffect(() => {
    const handleScroll = () => {
      // Logic: Start at 180 (Cyan) and cycle based on scroll
      // We use a slower multiplier (0.05) for a professional feel
      const newHue = (180 + window.scrollY * 0.05) % 360;
      setHue(newHue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main 
      className="transition-colors duration-500 ease-out"
      style={{ 
        backgroundColor: `hsla(${hue}, 40%, 4%, 1)`, // Dark, tinted background
        backgroundImage: `radial-gradient(circle at 50% 50%, hsla(${hue}, 60%, 15%, 0.1), transparent)` 
      }}
    >
      <Web3Hero />
      <Web3AboutPreview />
      <Web3Services />
      <Web3ProjectsPreview />
      <Web3Experience />
      <CrissCrossMarquee />
    </main>
  );
}
