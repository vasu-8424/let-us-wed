import { motion } from "motion/react";

export const FloatingFlowers = () => {
  const flowers = Array.from({ length: 15 });
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {flowers.map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: Math.random() * window.innerWidth, y: -50, rotate: 0, opacity: 0 }}
          animate={{ 
            y: window.innerHeight + 50,
            x: `calc(${Math.random() * 100}vw + ${Math.sin(i) * 50}px)`,
            rotate: 360,
            opacity: [0, 0.4, 0.4, 0]
          }}
          transition={{ 
            duration: 15 + Math.random() * 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 20
          }}
          className="absolute"
        >
          <img src="/LUW_Final_Logomark.png" alt="Logo" className="w-8 h-8 md:w-12 md:h-12 object-contain grayscale opacity-20" />
        </motion.div>
      ))}
    </div>
  );
};
