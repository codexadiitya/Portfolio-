import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onDone }) => {
  const [p, setP] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setP((v) => {
        const next = v + Math.random() * 8 + 3;
        if (next >= 100) {
          clearInterval(t);
          setTimeout(onDone, 400);
          return 100;
        }
        return next;
      });
    }, 80);
    return () => clearInterval(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-[200] bg-[#050505] flex flex-col justify-between p-6 md:p-10"
        data-testid="page-loader"
      >
        <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-white/50">
          <span>Alex Mercer — Portfolio 2026</span>
          <span>Berlin</span>
        </div>
        <div className="text-center">
          <div className="hero-h text-[18vw] md:text-[10vw] text-white leading-[0.85]">
            <span className="italic">alex</span>mercer
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-white/50 mb-3">
            <span>Loading assets</span>
            <span>{Math.floor(p)}%</span>
          </div>
          <div className="h-px w-full bg-white/10 relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-white"
              style={{ width: `${p}%`, transition: "width 0.2s ease-out" }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
