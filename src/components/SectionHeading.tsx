import { motion } from "motion/react";

export const SectionHeading = ({ title, subtitle, centered = true }: { title: string; subtitle?: string; centered?: boolean }) => (
  <div className={`${centered ? "text-center" : "text-left"} mb-12 md:mb-20`}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <span className="text-primary text-xs uppercase tracking-[0.5em] font-bold mb-4 block">{subtitle}</span>
      <h2 className="text-4xl md:text-7xl font-serif text-gray-900 leading-tight">
        {title}
      </h2>
      <div className={`w-16 md:w-20 h-px bg-primary/30 mt-6 md:mt-10 ${centered ? "mx-auto" : ""}`} />
    </motion.div>
  </div>
);
