import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "How It Works", to: "/how-it-works" },
    { name: "Contact", to: "/contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? "bg-beige/80 backdrop-blur-lg shadow-sm py-3" : "bg-transparent py-4 md:py-8"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 md:gap-4 group cursor-pointer">
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <img src="/logo.png" alt="LET US WED Logo" className="w-full h-full object-contain" />
          </div>
          <span className={`text-base md:text-2xl font-serif tracking-[0.15em] md:tracking-[0.4em] ${isScrolled ? "text-primary" : "text-gray-900"}`}>LET US WED</span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-10 text-[10px] uppercase tracking-[0.4em] font-semibold">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              to={item.to} 
              className="relative group overflow-hidden py-1"
            >
              <span className="block group-hover:-translate-y-full transition-transform duration-500">{item.name}</span>
              <span className="absolute top-full left-0 block text-primary transition-transform duration-500 group-hover:-translate-y-full">{item.name}</span>
            </Link>
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
              {navLinks.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.to} 
                  className="text-2xl font-serif tracking-widest hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
