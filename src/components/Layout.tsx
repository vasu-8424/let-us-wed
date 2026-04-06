import { motion, useScroll, useSpring } from "motion/react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingFlowers } from "./FloatingFlowers";
import { useEffect } from "react";

export const Layout = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;
    
    let currentX = 0;
    let currentY = 0;

    const moveCursor = (e: MouseEvent) => {
      currentX = e.clientX;
      currentY = e.clientY;
      cursor.style.transform = `translate(${currentX - 10}px, ${currentY - 10}px)`;
    };
    
    const downCursor = () => {
      cursor.style.transform = `translate(${currentX - 10}px, ${currentY - 10}px) scale(0.8)`;
      cursor.style.backgroundColor = 'rgba(198, 40, 40, 0.2)';
    };
    
    const upCursor = () => {
      cursor.style.transform = `translate(${currentX - 10}px, ${currentY - 10}px) scale(1)`;
      cursor.style.backgroundColor = 'transparent';
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', downCursor);
    document.addEventListener('mouseup', upCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', downCursor);
      document.removeEventListener('mouseup', upCursor);
    };
  }, []);

  return (
    <div className="marble-bg min-h-screen relative overflow-x-hidden pt-[116px]">
      {/* Custom Cursor */}
      <div className="custom-cursor hidden md:block" id="cursor" />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[60] origin-left" 
        style={{ scaleX }} 
      />
      
      {/* Floral Overlays & Animations */}
      <div className="fixed inset-0 floral-overlay z-0" />
      <FloatingFlowers />
      
      <Navbar />

      <main className="relative z-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
