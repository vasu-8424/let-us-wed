import { motion } from "motion/react";
import { MapPin, Users, Phone, Sparkles } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";

interface ServiceCardProps {
  icon: any;
  title: string;
  description: string;
  points: string[];
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, points, index }: ServiceCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    className="group relative bg-white/40 backdrop-blur-sm p-6 md:p-12 rounded-sm border border-white/50 hover:bg-white/80 transition-all duration-700"
  >
    <div className="absolute top-0 right-0 p-4 md:p-8 opacity-5 group-hover:opacity-10 transition-opacity">
      <Icon size={120} className="hidden md:block" />
      <Icon size={80} className="md:hidden" />
    </div>
    <div className="relative z-10">
      <div className="w-12 h-12 bg-primary/5 flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
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

export const Services = () => {
  return (
    <section className="py-20 md:py-40 px-4 md:px-8 relative z-10 bg-beige/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Our Services" subtitle="Simplifying Your Journey" />
        
        <p className="text-center text-lg md:text-xl text-gray-500 font-light mb-12 md:mb-24 max-w-3xl mx-auto">
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
            className="bg-primary p-8 md:p-16 rounded-sm shadow-2xl flex flex-col justify-center items-center text-center text-white relative overflow-hidden group"
          >
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mb-8"
            >
              <img src="/LUW_Final_Logomark.png" alt="LUW Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain opacity-30 grayscale brightness-0 invert" />
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-serif mb-4 md:mb-6">And Much More...</h3>
            <p className="opacity-70 font-light text-base md:text-lg">Every detail is handled with absolute care and precision.</p>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
