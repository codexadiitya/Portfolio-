import { motion } from "framer-motion";
import { PROFILE } from "../data/portfolio";

const stats = [
  { k: "07", v: "Years shipping" },
  { k: "40+", v: "Products in production" },
  { k: "12", v: "Open-source repos" },
  { k: "∞", v: "Coffee shots" },
];

const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-16 md:py-32 px-6 md:px-10 border-t border-border"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8 md:gap-16">
        <div className="col-span-12 md:col-span-5">
          <p className="eyebrow mb-4">// About</p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="hero-h text-5xl md:text-7xl text-foreground"
          >
            Design,
            <br />
            <span className="italic font-serif">code</span>,
            <br />
            engage.
          </motion.h2>

          <div className="mt-8 aspect-[4/5] max-w-[380px] overflow-hidden bg-card border border-border">
            <img
              src={PROFILE.portrait}
              alt="Portrait"
              data-testid="about-portrait"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        <div className="col-span-12 md:col-span-7 flex flex-col justify-between gap-16">
          <div>
            <p className="text-2xl md:text-4xl font-serif leading-[1.15] text-foreground/85 tracking-tight">
              My blend of{" "}
              <span className="italic text-foreground/50">design</span>,{" "}
              <span className="italic text-foreground/50">coding</span>,{" "}
              <span className="italic text-foreground/50">functionality</span> and{" "}
              <span className="italic text-foreground/50">interaction</span> sets me apart
              — one person, one bill, one uncompromising taste bar.
            </p>
            <p className="mt-8 text-sm md:text-base text-foreground/60 leading-relaxed max-w-2xl">
              I've spent the last seven years shipping products for founders,
              retailers and research labs. I care about typography as much as
              I care about tail latencies. If it's on the page — pixel, packet,
              or paragraph — I want to know why.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-8">
            {stats.map((s, i) => (
              <div key={i} data-testid={`about-stat-${i}`}>
                <div className="font-serif text-4xl md:text-5xl text-foreground">
                  {s.k}
                </div>
                <div className="mt-1 text-[10px] font-mono uppercase tracking-widest text-foreground/40">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
