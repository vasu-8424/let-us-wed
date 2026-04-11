import { Link } from "react-router-dom";

export const Footer = () => {
    const navLinks = [
        { name: "Home", to: "/" },
        { name: "About Us", to: "/about" },
        { name: "Services", to: "/services" },
        { name: "How It Works", to: "/how-it-works" },
        { name: "Contact", to: "/contact" }
    ];

  return (
    <footer className="py-16 md:py-32 px-4 md:px-8 bg-transparent border-t border-primary/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="w-20 h-20 md:w-24 md:h-24 mb-8 md:mb-12 flex items-center justify-center transition-transform duration-500 hover:scale-110">
          <img src="/LUW_Final_Logomark.png" alt="LET US WED Logo" className="w-full h-full object-contain" />
        </div>
        <h2 className="text-3xl md:text-4xl font-serif mb-4 tracking-[0.4em]">LET US WED</h2>
        <p className="text-gray-400 italic font-serif mb-12 md:mb-16 text-base md:text-lg max-w-sm md:max-w-none">"Where Your Forever Begins, Flawlessly Designed."</p>
        
        <div className="w-full max-w-2xl h-px bg-gray-100 mb-12 md:mb-16" />
        
        <div className="flex flex-wrap justify-center gap-12 text-[10px] uppercase tracking-[0.5em] text-gray-400 font-bold mb-8">
          <a href="mailto:Letuswed2026@gmail.com" className="hover:text-primary transition-colors">Letuswed2026@gmail.com</a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-12 text-[10px] uppercase tracking-[0.5em] text-gray-400 font-bold mb-16">
          {navLinks.map((item) => (
            <Link key={item.name} to={item.to} className="hover:text-primary transition-colors">{item.name}</Link>
          ))}
        </div>
        
        <p className="text-gray-300 text-[10px] uppercase tracking-[0.5em] font-bold">
          &copy; {new Date().getFullYear()} LET US WED. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
