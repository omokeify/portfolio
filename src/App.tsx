/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutPreview from "./components/AboutPreview";
import Services from "./components/Services";
import ProjectsPreview from "./components/ProjectsPreview";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import Marquee from "./components/Marquee";
import MusicPlayer from "./components/MusicPlayer";
import BackgroundWave from "./components/BackgroundWave";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-main text-sec min-h-screen font-sans selection:bg-sec selection:text-main">
      <BackgroundWave />
      <Preloader />
      <CustomCursor />
      <Navbar />
      <MusicPlayer />
      <main>
        <Hero />
        <AboutPreview />
        <Services />
        <ProjectsPreview />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
