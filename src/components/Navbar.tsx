import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Works", href: "#works" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-6 text-sec transition-transform duration-500 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        <MagneticButton>
          <a href="#" className="text-3xl font-bold tracking-tighter inline-flex items-center">
            F<span className="w-1 h-6 bg-sec ml-1"></span>
          </a>
        </MagneticButton>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 mr-4">
            {links.map((link) => (
              <div key={link.name}>
                <MagneticButton>
                  <a
                    href={link.href}
                    className="text-sm font-medium hover:opacity-70 transition-opacity"
                  >
                    {link.name}
                  </a>
                </MagneticButton>
              </div>
            ))}
          </div>
          <MagneticButton>
            <a href="#contact" className="bg-sec text-main px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:scale-105 transition-transform">
              Contact
              <div className="bg-main text-sec rounded-full p-1">
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </a>
          </MagneticButton>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-4 md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Floating Sticky Menu Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed top-6 right-8 z-50"
          >
            <MagneticButton>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-full bg-sec text-main flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </MagneticButton>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-main flex flex-col items-center justify-center gap-8 z-40"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-bold tracking-tighter hover:text-sec/70 transition-colors text-sec"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
