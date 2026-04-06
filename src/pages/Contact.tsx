import { motion } from "motion/react";
import { Phone, Mail, Sparkles, MapPin, ChevronRight, Heart } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";

export const Contact = () => {
  return (
    <section className="py-20 md:py-40 px-4 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
          <div>
            <SectionHeading title="Get in Touch" subtitle="Start Your Journey" centered={false} />
            <p className="text-lg md:text-xl text-gray-500 font-light leading-loose mb-12 md:mb-16 italic">
              We would love to hear about your love story and how we can help you design your perfect day. Reach out for a personal consultation.
            </p>
            
            <div className="space-y-8 md:space-y-12">
              {[
                { icon: Phone, label: "Call Us", value: "7481081074" },
                { icon: Mail, label: "Email Us", value: "letuswed@gmail.com" },
                { icon: Sparkles, label: "Timings", value: "9 AM – 9 PM (All Days)" },
                { icon: MapPin, label: "Visit Us", value: "No. 8-2-548/62, Rd Number 7, Opposite Meridian School, Vimal Nagar, Zahara Nagar, Banjara Hills, Hyderabad – 500034" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-16 h-16 bg-white shadow-lg flex items-center justify-center rounded-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-1 md:mb-2">{item.label}</p>
                    <p className="text-xl md:text-2xl font-serif text-gray-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-beige/40 backdrop-blur-md p-6 md:p-16 rounded-sm shadow-2xl border border-white/20 relative"
          >
            <div className="absolute top-0 right-0 p-4 md:p-8 opacity-5">
              <img src="/LUW_Final_Logomark.png" alt="LUW Logo" className="w-24 h-24 object-contain grayscale" />
            </div>
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-200 py-4 focus:border-primary outline-none transition-all font-serif text-lg" placeholder="Your Name" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Phone</label>
                  <input type="tel" className="w-full bg-transparent border-b border-gray-200 py-4 focus:border-primary outline-none transition-all font-serif text-lg" placeholder="Your Phone" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Event Type</label>
                  <select className="w-full bg-transparent border-b border-gray-200 py-4 focus:border-primary outline-none transition-all font-serif text-lg">
                    <option value="">Select Event Type</option>
                    <option value="wedding">Wedding</option>
                    <option value="engagement">Engagement</option>
                    <option value="pre-wedding">Pre-Wedding</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Event Date</label>
                  <input type="date" className="w-full bg-transparent border-b border-gray-200 py-4 focus:border-primary outline-none transition-all font-serif text-lg" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Requirements</label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {["Venue", "Photographer", "Decorator", "Caterer"].map((req) => (
                    <label key={req} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 border-2 border-gray-200 rounded-sm checked:bg-primary checked:border-primary transition-all cursor-pointer" />
                      <span className="text-gray-600 group-hover:text-primary transition-colors">{req}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Tell us more about your requirements</label>
                <textarea rows={3} className="w-full bg-transparent border-b border-gray-200 py-4 focus:border-primary outline-none transition-all font-serif text-lg resize-none" placeholder="Share your dreams..."></textarea>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Preferred Time to Contact</label>
                <input type="text" className="w-full bg-transparent border-b border-gray-200 py-4 focus:border-primary outline-none transition-all font-serif text-lg" placeholder="e.g., Afternoon, 6 PM" />
              </div>
              <button className="w-full bg-primary text-white py-6 rounded-sm uppercase tracking-[0.4em] font-bold hover:shadow-2xl transition-all duration-500 flex items-center justify-center gap-4 group">
                Book Free Consultation <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
