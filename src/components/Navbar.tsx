import { motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Works", href: "#works" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 text-sec">
      <MagneticButton>
        <a href="#" className="text-3xl font-bold tracking-tighter inline-flex items-center">
          A<span className="w-1 h-6 bg-sec ml-1"></span>
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

      {/* Mobile Nav Menu */}
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
              className="text-4xl font-bold tracking-tighter hover:text-sec/70 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
