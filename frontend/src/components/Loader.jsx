import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "नमस्ते",
  "Hello",
  "Bonjour",
  "KONINCHWA"
];

const Loader = ({ onDone }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === words.length - 1) {
      const t = setTimeout(onDone, 900);
      return () => clearTimeout(t);
    }
    const t = setTimeout(
      () => {
        setIndex((i) => i + 1);
      },
      index === 0 ? 800 : 600
    );
    return () => clearTimeout(t);
  }, [index, onDone]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 0 }}
        exit={{ y: "-100vh" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[200] bg-[#050505] flex flex-col justify-between p-6 md:p-10 text-white"
        data-testid="page-loader"
      >
        <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-white/50">
          <span>Aditya Diwan — Portfolio 2026</span>
          <span>Raipur, India</span>
        </div>

        <div className="flex items-center justify-center flex-1">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex items-center gap-4 text-5xl md:text-7xl font-serif italic text-[#DFBA73]"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#DFBA73] block animate-pulse" />
            <span>{words[index]}</span>
          </motion.div>
        </div>

        <div className="w-full">
          <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3">
            <span>Loading Experience</span>
            <span>{String(Math.round(((index + 1) / words.length) * 100))}%</span>
          </div>
          <div className="h-px w-full bg-white/10 relative overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${((index + 1) / words.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 bg-[#DFBA73]"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
