import { motion } from "motion/react";
import { Mail, Users, ClipboardList, Target, Calendar, CheckCircle, MapPin, FileText, Heart } from "lucide-react";

export const HowItWorks = () => {
  return (
    <section className="py-20 md:py-40 px-4 md:px-8 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-gold mb-4 tracking-widest uppercase">How Let Us Wed Works</h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-8 md:w-12 bg-gold/30" />
              <span className="text-base md:text-xl italic text-gray-500 font-serif">Simple. Structured. Stress-Free.</span>
              <div className="h-px w-8 md:w-12 bg-gold/30" />
            </div>
          </motion.div>
        </div>
        
        <div className="relative">
          {/* The "Winding Path" SVG */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-full max-w-[800px] hidden md:block pointer-events-none opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 800 2000" fill="none" preserveAspectRatio="none">
              <motion.path
                d="M400 0 C 600 200, 200 400, 400 600 C 600 800, 200 1000, 400 1200 C 600 1400, 200 1600, 400 1800 C 600 2000, 200 2200, 400 2400"
                stroke="#d4af37"
                strokeWidth="2"
                strokeDasharray="12 12"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <div className="space-y-16 md:space-y-32 relative">
            {[
              { id: 1, title: "ENQUIRY", description: "Clients contact via Instagram, WhatsApp, or Call.", icon: Mail, align: "left" },
              { id: 2, title: "CONSULTATION", description: "We understand your vision & style.", icon: Users, align: "right" },
              { id: 3, title: "REQUIREMENTS", description: "Budget, Guest Count, Preferences.", icon: ClipboardList, align: "left" },
              { id: 4, title: "CURATED OPTIONS", description: "Tailored Venues & Vendors.", icon: Target, align: "right" },
              { id: 5, title: "AVAILABILITY CHECK", description: "Confirm Dates & Packages.", icon: Calendar, align: "left" },
              { id: 6, title: "SHORTLISTING", description: "Select the Best Matches.", icon: CheckCircle, align: "right" },
              { id: 7, title: "SITE VISITS", description: "Schedule & Assist Visits.", icon: MapPin, align: "left" },
              { id: 8, title: "BOOKING SUPPORT", description: "Negotiate & Finalize.", icon: FileText, align: "right" },
              { id: 9, title: "END-TO-END ASSISTANCE", description: "Smooth & Stress-Free Execution.", icon: Heart, align: "left" }
            ].map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: item.align === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 ${item.align === "right" ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`flex-1 flex flex-col items-center md:items-${item.align === "right" ? "start" : "end"} text-center md:text-${item.align === "right" ? "left" : "right"}`}>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-gold font-bold text-lg">{item.id}.</span>
                    <h4 className="text-2xl md:text-3xl font-serif text-gray-900 tracking-wider">{item.title}</h4>
                  </div>
                  <p className="text-gray-500 font-light text-lg max-w-sm">{item.description}</p>
                </div>

                <div className="relative shrink-0">
                  <div className="w-20 h-20 bg-white shadow-xl rounded-full flex items-center justify-center relative z-10 border border-gold/20 group-hover:scale-110 transition-transform cursor-default">
                    <item.icon className="text-gold" size={32} />
                  </div>
                  {/* Circle Pulse Effect */}
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-gold rounded-full -z-0"
                  />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-40 text-center"
        >
          <div className="inline-block relative">
            <h3 className="text-3xl md:text-6xl font-serif text-gold italic">From Enquiry to "I Do"—</h3>
            <h3 className="text-3xl md:text-6xl font-serif text-gold italic md:ml-12 mt-2 md:mt-0">We Handle Everything</h3>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 md:w-48 h-px bg-gold/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
