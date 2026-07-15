import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { SKILLS, MARQUEE_TECH } from "../data/portfolio";

const Skills = () => {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="relative py-24 md:py-32 border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-4">// Stack</p>
            <h2 className="hero-h text-5xl md:text-7xl text-white">
              Build&nbsp;<span className="italic">tools.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/50">
            Levels below are subjective — I round down. If it's not here and you
            need it, I'll pick it up in a week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
          {SKILLS.map((s, i) => (
            <div key={s.name} data-testid={`skill-${i}`}>
              <div className="flex justify-between items-baseline text-sm">
                <span className="font-mono uppercase tracking-widest text-xs text-white/80">
                  {s.name}
                </span>
                <span className="font-mono text-xs text-white/40">
                  {s.level}
                </span>
              </div>
              <div className="mt-2 h-px bg-white/10 relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 bg-white"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 border-y border-white/10 py-8">
        <Marquee gradient={false} speed={40} className="overflow-hidden">
          {MARQUEE_TECH.map((t, i) => (
            <span
              key={i}
              className="mx-8 font-serif text-4xl md:text-6xl text-white/80 hover:text-white transition-colors"
            >
              {t}
              <span className="text-white/20 mx-8">◆</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
