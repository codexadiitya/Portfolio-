import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ArrowUpRight, Search } from "lucide-react";
import { PROJECTS } from "../data/portfolio";

const categories = ["All", "Web", "ML", "Design"];

const Projects = () => {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return PROJECTS.filter(
      (p) =>
        (cat === "All" || p.category === cat) &&
        (q === "" ||
          p.title.toLowerCase().includes(q.toLowerCase()) ||
          p.stack.join(" ").toLowerCase().includes(q.toLowerCase()))
    );
  }, [cat, q]);

  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="relative py-16 md:py-28 px-6 md:px-10 border-t border-border"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <p className="eyebrow mb-4">// Selected work — 2023 → 2026</p>
            <h2 className="hero-h text-5xl md:text-7xl text-foreground">
              Recent <span className="italic">projects.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2 border border-border focus-within:border-foreground/50 px-4 py-2">
              <Search size={14} className="text-foreground/40" />
              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search stack..."
                data-testid="projects-search"
                className="bg-transparent outline-none text-xs font-mono uppercase tracking-widest text-foreground placeholder:text-foreground/30 w-40"
              />
            </div>
            <div className="flex gap-1" data-testid="projects-filter">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  data-testid={`project-filter-${c.toLowerCase()}`}
                  data-cursor="hover"
                  className={`text-[10px] font-mono uppercase tracking-widest px-4 py-2 border transition-all ${
                    cat === c
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-foreground/60 hover:text-foreground hover:border-foreground/40"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bento grid */}
        <motion.div
          layout
          className="grid grid-cols-12 gap-4 md:gap-6"
        >
          <AnimatePresence>
            {filtered.map((p, i) => {
              const span =
                i % 5 === 0
                  ? "col-span-12 md:col-span-8"
                  : i % 5 === 1
                  ? "col-span-12 md:col-span-4"
                  : i % 5 === 2
                  ? "col-span-12 md:col-span-4"
                  : i % 5 === 3
                  ? "col-span-12 md:col-span-4"
                  : "col-span-12 md:col-span-4";
              return (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={span}
                  data-testid={`project-card-${p.slug}`}
                >
                  <Tilt
                    tiltMaxAngleX={4}
                    tiltMaxAngleY={4}
                    glareEnable
                    glareMaxOpacity={0.15}
                    glareBorderRadius="0px"
                    perspective={1400}
                    className="h-full"
                  >
                    <a
                      href={p.link || "#"}
                      target={p.link ? "_blank" : undefined}
                      rel={p.link ? "noopener noreferrer" : undefined}
                      className="group h-full border border-border bg-card hover:border-foreground/30 transition-all overflow-hidden flex flex-col block"
                      data-cursor="hover"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-widest bg-background/80 backdrop-blur px-2 py-1 text-foreground">
                          {p.category}
                        </div>
                        <div className="absolute top-3 right-3 text-[10px] font-mono text-foreground/70 bg-background/80 backdrop-blur px-2 py-1">
                          {p.year}
                        </div>
                      </div>
                      <div className="p-5 md:p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="font-serif text-2xl md:text-3xl text-foreground leading-tight">
                              {p.title}
                            </h3>
                            <ArrowUpRight
                              size={20}
                              className="text-foreground/40 group-hover:text-foreground group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                            />
                          </div>
                          <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
                            {p.description}
                          </p>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {p.stack.map((t) => (
                            <span
                              key={t}
                              className="text-[9px] font-mono uppercase tracking-widest px-2 py-1 border border-border text-foreground/50"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </a>
                  </Tilt>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-24 text-center text-foreground/40 font-mono text-xs uppercase tracking-widest">
            No projects matched. Try a different filter.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
