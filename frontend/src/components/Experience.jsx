import { motion } from "framer-motion";
import { EXPERIENCE } from "../data/portfolio";

const Experience = () => {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="relative py-24 md:py-32 px-6 md:px-10 border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8 md:gap-16">
        <div className="col-span-12 md:col-span-4 md:sticky md:top-32 h-fit">
          <p className="eyebrow mb-4">// Journey</p>
          <h2 className="hero-h text-5xl md:text-7xl text-white">
            Work
            <br />
            <span className="italic">history.</span>
          </h2>
          <p className="mt-6 text-sm text-white/50 max-w-xs">
            Five roles, three continents, one recurring theme: shipping.
          </p>
        </div>

        <div className="col-span-12 md:col-span-8 relative">
          <div className="absolute left-[10px] top-2 bottom-2 w-px bg-white/10" />
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative pl-10 pb-14 last:pb-0"
              data-testid={`experience-${i}`}
            >
              <div className="absolute left-0 top-1 w-5 h-5 rounded-full border border-white/30 bg-[#050505] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                {e.year}
              </div>
              <div className="mt-2 font-serif text-3xl md:text-4xl text-white">
                {e.role},{" "}
                <span className="italic text-white/60">{e.company}</span>
              </div>
              <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-2xl">
                {e.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
