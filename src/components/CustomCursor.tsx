import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const cursorElement = target.closest('[data-cursor]');
      
      if (cursorElement) {
        setIsHovering(true);
        const text = cursorElement.getAttribute('data-cursor');
        if (text) {
          setCursorText(text);
        } else {
          setCursorText("");
        }
      } else {
        const isClickable = 
          target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' || 
          target.closest('a') || 
          target.closest('button');
          
        setIsHovering(!!isClickable);
        setCursorText("");
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Only show custom cursor on devices that support hover
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 bg-thr rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:flex items-center justify-center text-sec font-bold text-[10px] uppercase tracking-wider overflow-hidden"
      animate={{
        x: mousePosition.x - (isHovering ? (cursorText ? 40 : 24) : 8),
        y: mousePosition.y - (isHovering ? (cursorText ? 40 : 24) : 8),
        width: isHovering ? (cursorText ? 80 : 48) : 16,
        height: isHovering ? (cursorText ? 80 : 48) : 16,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <AnimatePresence>
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {cursorText}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
