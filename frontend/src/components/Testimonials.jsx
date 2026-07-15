import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "../data/portfolio";

const Testimonials = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS[i];

  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="relative py-16 md:py-28 px-6 md:px-10 border-t border-border"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-14">
          <p className="eyebrow mb-4">// Kind words</p>
          <h2 className="hero-h text-5xl md:text-7xl text-foreground">
            What people <span className="italic">say.</span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2 flex md:flex-col items-start md:items-end gap-2 md:pt-4">
            <Quote size={48} className="text-foreground/15" />
          </div>
          <div className="col-span-12 md:col-span-8 relative min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                data-testid="testimonial-quote"
                className="font-serif text-3xl md:text-5xl text-foreground/90 leading-[1.2] tracking-tight"
              >
                “{t.quote}”
              </motion.blockquote>
            </AnimatePresence>
            <div className="mt-10 flex items-center justify-between">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-foreground">
                  {t.author}
                </div>
                <div className="text-xs text-foreground/40 mt-1">{t.role}</div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setI((i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                  data-testid="testimonial-prev"
                  className="w-10 h-10 border border-border hover:border-foreground/50 flex items-center justify-center text-foreground/70 hover:text-foreground transition-all"
                  aria-label="prev"
                >
                  <ArrowLeft size={14} />
                </button>
                <button
                  onClick={() => setI((i + 1) % TESTIMONIALS.length)}
                  data-testid="testimonial-next"
                  className="w-10 h-10 border border-border hover:border-foreground/50 flex items-center justify-center text-foreground/70 hover:text-foreground transition-all"
                  aria-label="next"
                >
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block col-span-2 text-right">
            <div className="font-mono text-xs uppercase tracking-widest text-foreground/40">
              {String(i + 1).padStart(2, "0")}
              <span className="text-foreground/20"> / {String(TESTIMONIALS.length).padStart(2, "0")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
