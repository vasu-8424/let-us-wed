import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Sparkles } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Link } from "react-router-dom";

export const Home = () => {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[calc(100vh-116px)] -mt-[116px] flex items-center justify-center px-8 overflow-hidden">
        {/* Triple Image Background */}
        <div className="absolute inset-0 flex">
          {[
            "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=100&w=1200", // Old Venue Middle
            "/frame.png", // Frame Image Middle
            "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=100&w=1200"  // Couple Right
          ].map((src, i) => (
            <motion.div 
              key={i}
              style={{ y: i === 1 ? 0 : y1 }}
              className={`relative h-full overflow-hidden border-x border-white/10 flex-1 ${i !== 1 ? "hidden md:block" : "block"}`}
            >
              <div className="absolute inset-0 bg-beige/30 z-10 backdrop-blur-[1px]" />
              <img 
                src={src} 
                alt={`Wedding Scene ${i + 1}`} 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        <div className="relative z-20 text-center max-w-6xl px-4 mt-20 md:mt-0 pt-[116px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-8 md:mb-10"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 mx-auto flex items-center justify-center relative">
              <motion.img 
                src="/LUW_Final_Logomark.png" 
                alt="LET US WED Symbol" 
                className="w-full h-full object-contain relative z-10"
                animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                transition={{ 
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              <motion.div 
                animate={{ rotate: 360, scale: [1, 1.15, 1] }}
                transition={{ 
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" }, 
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut" } 
                }}
                className="absolute inset-[-30px] border-2 border-primary/5 rounded-full"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-[10px] uppercase tracking-[0.6em] text-gray-500 font-bold mb-8"
          >
            Welcome to Let Us Wed
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="text-4xl md:text-7xl lg:text-9xl font-serif text-gray-900 mb-8 md:mb-12 tracking-tight leading-[1.1] md:leading-[0.95]"
          >
            Your Big Day Deserves the Right Decisions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 1 }}
            className="text-lg md:text-2xl text-gray-600 font-light mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            From dream venues to perfect vendors — we help you choose what truly fits your wedding story.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-col items-center"
          >
            <Link 
              to="/contact"
              className="inline-block bg-primary text-white border border-primary/20 px-8 py-4 rounded-sm text-[10px] uppercase tracking-[0.5em] font-bold transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl hover:bg-gold hover:border-gold hover:text-white"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 opacity-20 hidden lg:block"
        >
          <Sparkles size={100} className="text-primary" />
        </motion.div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 md:py-40 px-4 md:px-8 relative z-10 bg-beige/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Glimpses of Forever" subtitle="A Visual Narrative" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              { src: "/gallery-4.png", title: "Glimpses of Perfection", date: "Recent Wedding" },
              { src: "/gallery-3.png", title: "Exquisite Catering", date: "Grand Banquet" },
              { src: "/stage.png", title: "Royal Stage Design", date: "Reception Decor" },
              { src: "/mandap.png", title: "Magnificent Mandap", date: "Traditional Vows" },
              { src: "/gallery-5.png", title: "Floral Grandeur", date: "Stage Concept" },
              { src: "/unique.png", title: "Curated Excellence", date: "Unique Concept" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 1 }}
                className="group"
              >
                <div className="framed-image mb-8">
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                      <Sparkles className="text-white" size={40} />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-serif text-gray-900 mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">{item.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-60 px-4 md:px-8 bg-primary text-white text-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif mb-8 md:mb-12 leading-tight">Thoughtfully planned… Beautifully brought to life</h2>
          <Link 
            to="/contact"
            className="inline-block border border-white/30 px-20 py-8 rounded-sm text-[10px] uppercase tracking-[0.5em] font-bold transition-all duration-500 hover:scale-105 hover:bg-white hover:text-primary"
          >
            Contact Us
          </Link>
        </motion.div>
        
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] border border-white/5 rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] border border-white/5 rounded-full"
        />
      </section>
    </>
  );
};
