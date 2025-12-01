import { motion } from "framer-motion";

const GlassCard = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-lg shadow-xl ${className}`}
    >
      <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;