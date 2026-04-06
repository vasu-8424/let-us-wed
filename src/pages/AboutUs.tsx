import { motion } from "motion/react";
import { SectionHeading } from "../components/SectionHeading";

export const AboutUs = () => {
  return (
    <section className="py-20 md:py-40 px-4 md:px-8 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
            <img 
              src="/couple.png" 
              alt="Philosophy" 
              className="w-full h-full object-cover hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-24 h-24 md:w-32 md:h-32 bg-black flex items-center justify-center rounded-sm shadow-xl z-20">
            <img src="/LUW_Final_Logomark.png" alt="LUW Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          </div>
        </motion.div>

        <div className="relative">
          <SectionHeading title="About Us" subtitle="Who We Are" centered={false} />
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-2xl md:text-3xl font-serif text-gray-800 leading-tight mb-8"
          >
            Let Us Wed is your trusted wedding consultation partner, dedicated to simplifying your big day. 
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg text-gray-500 font-light leading-loose max-w-lg mb-8"
          >
            We specialize in helping you discover the best venues and vendors that match your style, vision, and budget. We don’t manage weddings — we help you make the right choices.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
