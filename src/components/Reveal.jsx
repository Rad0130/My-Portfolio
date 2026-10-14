import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export const PageTitle = ({ title, sub }) => (
  <div className="text-center mb-14 pt-6">
    <h1 className="font-display text-5xl md:text-7xl font-bold grad-text pb-2">{title}</h1>
    <p className="text-lg text-slate-300 max-w-2xl mx-auto mt-3">{sub}</p>
  </div>
);