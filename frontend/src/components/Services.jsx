import { motion } from "framer-motion";
import { SERVICES } from "../data/portfolio";

const Services = () => {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-24 md:py-32 px-6 md:px-10 border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="eyebrow mb-4">// Services</p>
            <h2 className="hero-h text-5xl md:text-7xl text-white">
              What I <span className="italic">do.</span>
            </h2>
          </div>
          <p className="hidden md:block text-xs font-mono uppercase tracking-widest text-white/40 max-w-xs text-right">
            Four disciplines, one taste bar. Pick any combination — I bill by the
            outcome, not the hour.
          </p>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group grid grid-cols-12 gap-6 items-center py-8 md:py-12 px-2 hover:bg-white/[0.02] transition-colors"
              data-testid={`service-${s.id}`}
              data-cursor="hover"
            >
              <div className="col-span-2 md:col-span-1 font-mono text-xs text-white/40">
                {s.number}
              </div>
              <div className="col-span-10 md:col-span-4">
                <h3 className="font-serif text-3xl md:text-5xl text-white group-hover:italic transition-all">
                  {s.title}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-4 text-sm text-white/60 leading-relaxed">
                {s.body}
              </div>
              <div className="col-span-12 md:col-span-3 flex flex-wrap gap-2">
                {s.tools.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 border border-white/15 text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
