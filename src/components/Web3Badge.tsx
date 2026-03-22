import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export default function Web3Badge() {
  const location = useLocation();
  const navigate = useNavigate();
  const isWeb3 = location.pathname.startsWith("/web3");
  const [isFlipping, setIsFlipping] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isFlipping) return;
    
    setIsFlipping(true);
    
    // Halfway through the flip, navigate
    setTimeout(() => {
      navigate(isWeb3 ? "/" : "/web3");
      window.scrollTo(0, 0);
    }, 600);
    
    // End animation
    setTimeout(() => {
      setIsFlipping(false);
    }, 1200);
  };

  return (
    <>
      <a 
        href={isWeb3 ? "/" : "/web3"} 
        onClick={handleClick}
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-white border border-sec/10 px-2 py-6 flex flex-col items-center gap-4 z-50 rounded-l-md shadow-sm hover:bg-gray-100 transition-colors cursor-pointer group scale-75 md:scale-100 origin-right"
      >
        <span className="font-bold text-xl text-black group-hover:scale-110 transition-transform">
          {isWeb3 ? "W2" : "W3"}
        </span>
        <span className="text-xs font-medium tracking-widest text-black -rotate-90 mt-6 mb-4 group-hover:scale-110 transition-transform">
          {isWeb3 ? "Web2" : "Web3"}
        </span>
      </a>

      {/* Book Flip Overlay */}
      <AnimatePresence>
        {isFlipping && (
          <div className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center" style={{ perspective: "2000px" }}>
            <motion.div
              initial={{ rotateY: 90, scale: 0.8, opacity: 0 }}
              animate={{ rotateY: 0, scale: 1, opacity: 1 }}
              exit={{ rotateY: -90, scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full h-full bg-sec flex items-center justify-center shadow-2xl"
            >
              <div className="text-main text-4xl md:text-7xl font-bold tracking-tighter uppercase flex flex-col items-center gap-6">
                <motion.div
                  animate={{ rotateY: [0, 180, 360] }}
                  transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
                  className="w-16 h-16 md:w-24 md:h-24 border-4 border-main rounded-full flex items-center justify-center"
                >
                  <span className="text-xl md:text-3xl">{isWeb3 ? "W2" : "W3"}</span>
                </motion.div>
                {isWeb3 ? "Switching to Web2..." : "Switching to Web3..."}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
