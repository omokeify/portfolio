import Web3Hero from "../components/web3/Web3Hero";
import Web3AboutPreview from "../components/web3/Web3AboutPreview";
import Web3Services from "../components/web3/Web3Services";
import Web3ProjectsPreview from "../components/web3/Web3ProjectsPreview";
import Web3Experience from "../components/web3/Web3Experience";
import CrissCrossMarquee from "../components/CrissCrossMarquee";

export default function Web3Portfolio() {
  return (
    <main>
      <Web3Hero />
      <Web3AboutPreview />
      <Web3Services />
      <Web3ProjectsPreview />
      <Web3Experience />
      <CrissCrossMarquee />
    </main>
  );
}
