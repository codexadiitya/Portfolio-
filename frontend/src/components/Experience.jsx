import { motion } from "framer-motion";
import { EXPERIENCE } from "../data/portfolio";

const Experience = () => {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="relative py-16 md:py-28 px-6 md:px-10 border-t border-border"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8 md:gap-16">
        <div className="col-span-12 md:col-span-4 md:sticky md:top-32 h-fit">
          <p className="eyebrow mb-4">// Journey</p>
          <h2 className="hero-h text-5xl md:text-7xl text-foreground">
            Work
            <br />
            <span className="italic">history.</span>
          </h2>
          <p className="mt-6 text-sm text-foreground/50 max-w-xs">
            Five roles, three continents, one recurring theme: shipping.
          </p>
        </div>

        <div className="col-span-12 md:col-span-8 relative">
          <div className="absolute left-[10px] top-2 bottom-2 w-px bg-border" />
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
              <div className="absolute left-0 top-1 w-5 h-5 rounded-full border border-foreground/30 bg-background flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))]" />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
                {e.year}
              </div>
              <div className="mt-2 font-serif text-3xl md:text-4xl text-foreground">
                {e.role},{" "}
                <span className="italic text-[hsl(var(--accent))]">{e.company}</span>
              </div>
              <p className="mt-3 text-sm text-foreground/60 leading-relaxed max-w-2xl">
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
