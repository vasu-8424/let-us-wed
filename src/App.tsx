import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "motion/react";
import { 
  Heart, 
  MapPin, 
  Users, 
  Palette, 
  Utensils, 
  Camera, 
  Phone, 
  Mail, 
  Instagram, 
  ChevronRight,
  Menu,
  X,
  Sparkles,
  ClipboardList,
  Target,
  Calendar,
  CheckCircle,
  FileText
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// --- Components ---

const FloatingFlowers = () => {
  const flowers = Array.from({ length: 15 });
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {flowers.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: -50, 
            rotate: 0,
            opacity: 0 
          }}
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
          <img 
            src="/LUW_Final_Logomark.png" 
            alt="Logo" 
            className="w-8 h-8 md:w-12 md:h-12 object-contain grayscale opacity-20"
          />
        </motion.div>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? "bg-beige/80 backdrop-blur-lg shadow-sm py-3" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center gap-2 md:gap-4 group cursor-pointer">
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <img src="/logo.png" alt="LET US WED Logo" className="w-full h-full object-contain" />
          </div>
          <span className={`text-base md:text-2xl font-serif tracking-[0.15em] md:tracking-[0.4em] ${isScrolled ? "text-primary" : "text-gray-900"}`}>LET US WED</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-10 text-[10px] uppercase tracking-[0.4em] font-semibold">
          {[
            { name: "Home", href: "#home" },
            { name: "About Us", href: "#philosophy" },
            { name: "Services", href: "#services" },
            { name: "How It Works", href: "#experience" },
            { name: "Contact", href: "#contact" }
          ].map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="relative group overflow-hidden py-1"
            >
              <span className="block group-hover:-translate-y-full transition-transform duration-500">{item.name}</span>
              <span className="absolute top-full left-0 block text-primary transition-transform duration-500 group-hover:-translate-y-full">{item.name}</span>
            </a>
          ))}
        </div>

        <button className="lg:hidden text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-beige/95 backdrop-blur-xl shadow-2xl overflow-hidden lg:hidden"
          >
            <div className="flex flex-col items-center gap-8 py-12">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#philosophy" },
                { name: "Services", href: "#services" },
                { name: "How It Works", href: "#experience" },
                { name: "Contact", href: "#contact" }
              ].map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-2xl font-serif tracking-widest hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle, centered = true }: { title: string; subtitle?: string; centered?: boolean }) => (
  <div className={`${centered ? "text-center" : "text-left"} mb-20`}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <span className="text-primary text-xs uppercase tracking-[0.5em] font-bold mb-4 block">{subtitle}</span>
      <h2 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight">
        {title}
      </h2>
      <div className={`w-20 h-px bg-primary/30 mt-10 ${centered ? "mx-auto" : ""}`} />
    </motion.div>
  </div>
);

interface ServiceCardProps {
  icon: any;
  title: string;
  description: string;
  points: string[];
  index: number;
  key?: number | string;
}

const ServiceCard = ({ icon: Icon, title, description, points, index }: ServiceCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    className="group relative bg-white/40 backdrop-blur-sm p-12 rounded-sm border border-white/50 hover:bg-white/80 transition-all duration-700"
  >
    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
      <Icon size={120} />
    </div>
    <div className="relative z-10">
      <div className="w-12 h-12 bg-primary/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
        <Icon className="text-primary" size={28} />
      </div>
      <h3 className="text-3xl font-serif mb-6 text-gray-900">{title}</h3>
      <p className="text-gray-500 mb-8 leading-relaxed font-light text-lg">{description}</p>
      <ul className="space-y-4">
        {points.map((point, idx) => (
          <li key={idx} className="flex items-center gap-4 text-sm text-gray-400 font-medium tracking-wide">
            <div className="w-1 h-1 rounded-full bg-primary/30" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="marble-bg min-h-screen relative overflow-x-hidden">
      {/* Custom Cursor */}
      <div className="custom-cursor hidden md:block" id="cursor" />
      
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[60] origin-left" style={{ scaleX }} />
      
      {/* Floral Overlays & Animations */}
      <div className="fixed inset-0 floral-overlay z-0" />
      <FloatingFlowers />
      
      <Navbar />

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center px-8 overflow-hidden">
        {/* Triple Image Background */}
        <div className="absolute inset-0 z-0 flex">
          {[
            "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=100&w=1200", // Couple Left
            "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=100&w=1200", // Venue Middle
            "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=100&w=1200"  // Couple Right
          ].map((src, i) => (
            <motion.div 
              key={i}
              style={{ y: i === 1 ? 0 : y1 }}
              className="flex-1 relative h-full overflow-hidden border-x border-white/10"
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

        <div className="relative z-20 text-center max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-10"
          >
            <div className="w-32 h-32 md:w-48 md:h-48 mx-auto flex items-center justify-center relative">
              <motion.img 
                src="/LUW_Final_Logomark.png" 
                alt="LET US WED Symbol" 
                className="w-full h-full object-contain relative z-10"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0] 
                }}
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
            className="text-5xl md:text-8xl lg:text-9xl font-serif text-gray-900 mb-12 tracking-tight leading-[0.95]"
          >
            Your Big Day Deserves the Right Decisions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 1 }}
            className="text-xl md:text-2xl text-gray-600 font-light mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            From dream venues to perfect vendors — we help you choose what truly fits your wedding story.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-col items-center"
          >
            <motion.a 
              href="#contact"
              whileHover={{ letterSpacing: "0.6em" }}
              className="text-[11px] uppercase tracking-[0.5em] font-bold text-gray-900 border-b border-gray-900/20 pb-3 hover:border-primary transition-all duration-500"
            >
              Book Consultation
            </motion.a>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 opacity-20 hidden lg:block"
        >
          <Sparkles size={100} className="text-primary" />
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-40 px-8 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="/gallery-10.png" 
                alt="Philosophy" 
                className="w-full h-full object-cover hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/5 backdrop-blur-xl p-12 flex items-center justify-center rounded-sm border border-white/20">
              <Heart size={80} className="text-primary/20" fill="currentColor" />
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

      {/* Services Section */}
      <section id="services" className="py-40 px-8 relative z-10 bg-beige/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our Services" subtitle="Simplifying Your Journey" />
          
          <p className="text-center text-xl text-gray-500 font-light mb-24 max-w-3xl mx-auto">
            At Let Us Wed, we focus on simplifying your wedding planning journey through expert consultation and curated recommendations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: MapPin,
                title: "Venue Discovery",
                description: "We understand your requirements and present venues that match your expectations, budget, and guest size.",
                points: ["Requirement Analysis", "Budget-Friendly Options", "Guest Size Mapping"]
              },
              {
                icon: Users,
                title: "Vendor Recommendations",
                description: "We connect you with multiple vendor options — photographers, decorators, caterers — so you can choose what fits best.",
                points: ["Curated Photographers", "Expert Decorators", "Finest Caterers"]
              },
              {
                icon: Sparkles,
                title: "Wedding Consultation",
                description: "We help you plan smarter by guiding you through decisions, comparisons, and priorities.",
                points: ["Decision Support", "Priority Planning", "Comparison Analysis"]
              },
              {
                icon: Phone,
                title: "Booking Assistance",
                description: "We coordinate with venues and vendors to check availability and help you move forward smoothly.",
                points: ["Availability Checks", "Coordination", "Smooth Process"]
              }
            ].map((service, idx) => (
              <ServiceCard 
                key={idx} 
                icon={service.icon}
                title={service.title}
                description={service.description}
                points={service.points}
                index={idx} 
              />
            ))}
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-primary p-16 rounded-sm shadow-2xl flex flex-col justify-center items-center text-center text-white relative overflow-hidden group"
            >
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-8"
              >
                <Heart size={64} fill="currentColor" className="opacity-30" />
              </motion.div>
              <h3 className="text-4xl font-serif mb-6">And Much More...</h3>
              <p className="opacity-70 font-light text-lg">Every detail is handled with absolute care and precision.</p>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="experience" className="py-40 px-8 relative z-10 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-serif text-gold mb-4 tracking-widest uppercase">How Let Us Wed Works</h2>
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-gold/30" />
                <span className="text-xl italic text-gray-500 font-serif">Simple. Structured. Stress-Free.</span>
                <div className="h-px w-12 bg-gold/30" />
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

            <div className="space-y-32 relative">
              {[
                {
                  id: 1,
                  title: "ENQUIRY",
                  description: "Clients contact via Instagram, WhatsApp, or Call.",
                  icon: Mail,
                  align: "left"
                },
                {
                  id: 2,
                  title: "CONSULTATION",
                  description: "We understand your vision & style.",
                  icon: Users,
                  align: "right"
                },
                {
                  id: 3,
                  title: "REQUIREMENTS",
                  description: "Budget, Guest Count, Preferences.",
                  icon: ClipboardList,
                  align: "left"
                },
                {
                  id: 4,
                  title: "CURATED OPTIONS",
                  description: "Tailored Venues & Vendors.",
                  icon: Target,
                  align: "right"
                },
                {
                  id: 5,
                  title: "AVAILABILITY CHECK",
                  description: "Confirm Dates & Packages.",
                  icon: Calendar,
                  align: "left"
                },
                {
                  id: 6,
                  title: "SHORTLISTING",
                  description: "Select the Best Matches.",
                  icon: CheckCircle,
                  align: "right"
                },
                {
                  id: 7,
                  title: "SITE VISITS",
                  description: "Schedule & Assist Visits.",
                  icon: MapPin,
                  align: "left"
                },
                {
                  id: 8,
                  title: "BOOKING SUPPORT",
                  description: "Negotiate & Finalize.",
                  icon: FileText,
                  align: "right"
                },
                {
                  id: 9,
                  title: "END-TO-END ASSISTANCE",
                  description: "Smooth & Stress-Free Execution.",
                  icon: Heart,
                  align: "left"
                }
              ].map((item, idx) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: item.align === "left" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className={`flex items-center gap-8 md:gap-24 ${item.align === "right" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div className={`flex-1 flex flex-col ${item.align === "right" ? "items-start text-left" : "items-end text-right"}`}>
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
            className="mt-40 text-center"
          >
            <div className="inline-block relative">
              <h3 className="text-4xl md:text-6xl font-serif text-gold italic">From Enquiry to "I Do"—</h3>
              <h3 className="text-4xl md:text-6xl font-serif text-gold italic ml-12">We Handle Everything</h3>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-px bg-gold/30" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-40 px-8 relative z-10 bg-beige/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Glimpses of Forever" subtitle="A Visual Narrative" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              { src: "/gallery-4.png", title: "Glimpses of Perfection", date: "Recent Wedding" },
              { src: "/gallery-3.png", title: "Exquisite Catering", date: "Grand Banquet" },
              { src: "/gallery-2.png", title: "Royal Stage Design", date: "Reception Decor" },
              { src: "/gallery-1.png", title: "Magnificent Mandap", date: "Traditional Vows" },
              { src: "/gallery-5.png", title: "Floral Grandeur", date: "Stage Concept" },
              { src: "/gallery-6.png", title: "Curated Excellence", date: "Unique Concept" }
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
      <section className="py-60 px-8 bg-primary text-white text-center relative z-10 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h2 className="text-6xl md:text-8xl font-serif mb-12 leading-tight">Thoughtfully planned… Beautifully brought to life</h2>
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#c62828" }}
            className="inline-block border border-white/30 px-20 py-8 rounded-sm text-[10px] uppercase tracking-[0.5em] font-bold transition-all duration-500"
          >
            Contact Us
          </motion.a>
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

      {/* Contact Section */}
      <section id="contact" className="py-40 px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div>
              <SectionHeading title="Get in Touch" subtitle="Start Your Journey" centered={false} />
              <p className="text-xl text-gray-500 font-light leading-loose mb-16 italic">
                We would love to hear about your love story and how we can help you design your perfect day. Reach out for a personal consultation.
              </p>
              
              <div className="space-y-12">
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
                      <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-2">{item.label}</p>
                      <p className="text-2xl font-serif text-gray-900">{item.value}</p>
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
              className="bg-beige/40 backdrop-blur-md p-16 rounded-sm shadow-2xl border border-white/20 relative"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Heart size={100} className="text-primary" fill="currentColor" />
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

      {/* Footer */}
      <footer className="py-32 px-8 bg-transparent border-t border-primary/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="w-24 h-24 mb-12 flex items-center justify-center transition-transform duration-500 hover:scale-110">
            <img src="/LUW_Final_Logomark.png" alt="LET US WED Logo" className="w-full h-full object-contain" />
          </div>
          <h2 className="text-4xl font-serif mb-4 tracking-[0.4em]">LET US WED</h2>
          <p className="text-gray-400 italic font-serif mb-16 text-lg">"Where Your Forever Begins, Flawlessly Designed."</p>
          
          <div className="w-full max-w-2xl h-px bg-gray-100 mb-16" />
          
          <div className="flex flex-wrap justify-center gap-12 text-[10px] uppercase tracking-[0.5em] text-gray-400 font-bold mb-16">
            {[
              { name: "Home", href: "#home" },
              { name: "About Us", href: "#philosophy" },
              { name: "Services", href: "#services" },
              { name: "How It Works", href: "#experience" },
              { name: "Contact", href: "#contact" }
            ].map((item) => (
              <a key={item.name} href={item.href} className="hover:text-primary transition-colors">{item.name}</a>
            ))}
          </div>
          
          <p className="text-gray-300 text-[10px] uppercase tracking-[0.5em] font-bold">
            &copy; {new Date().getFullYear()} LET US WED. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Cursor Script */}
      <script dangerouslySetInnerHTML={{ __html: `
        const cursor = document.getElementById('cursor');
        document.addEventListener('mousemove', (e) => {
          cursor.style.left = e.clientX + 'px';
          cursor.style.top = e.clientY + 'px';
        });
        document.addEventListener('mousedown', () => cursor.style.transform = 'scale(0.8)');
        document.addEventListener('mouseup', () => cursor.style.transform = 'scale(1)');
      `}} />
    </div>
  );
}
