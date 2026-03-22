/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import MusicPlayer from "./components/MusicPlayer";
import BackgroundWave from "./components/BackgroundWave";
import ScrollToTop from "./components/ScrollToTop";
import Web3Badge from "./components/Web3Badge";

import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import ProjectDetail from "./pages/ProjectDetail";
import Web3Portfolio from "./pages/Web3Portfolio";
import Web3Works from "./pages/Web3Works";

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
    <Router>
      <ScrollToTop />
      <div className="bg-main text-sec min-h-screen font-sans selection:bg-sec selection:text-main transition-colors duration-700">
        <BackgroundWave />
        <Preloader />
        <CustomCursor />
        <Navbar />
        <MusicPlayer />
        <Web3Badge />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="/web3" element={<Web3Portfolio />} />
          <Route path="/web3-works" element={<Web3Works />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
