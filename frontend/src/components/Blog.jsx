import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BLOG } from "../data/portfolio";

const Blog = () => {
  return (
    <section
      id="blog"
      data-testid="blog-section"
      className="relative py-16 md:py-28 px-6 md:px-10 border-t border-border"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="eyebrow mb-4">// Journal</p>
            <h2 className="hero-h text-5xl md:text-7xl text-foreground">
              Notes &amp; <span className="italic">essays.</span>
            </h2>
          </div>
          <a
            href="#"
            data-testid="blog-all-link"
            data-cursor="hover"
            className="hidden md:inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-foreground/60 hover:text-foreground"
          >
            All entries <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {BLOG.map((b, i) => (
            <motion.a
              key={b.id}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group block border border-border bg-card hover:border-foreground/30 transition-all"
              data-testid={`blog-card-${b.id}`}
              data-cursor="hover"
            >
              <div className="aspect-[16/10] overflow-hidden bg-card">
                <img
                  src={b.cover}
                  alt={b.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-foreground/40 mb-4">
                  <span>{b.tag}</span>
                  <span>{b.date} · {b.read}</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground leading-tight group-hover:italic transition-all">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm text-foreground/55 leading-relaxed">
                  {b.excerpt}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-foreground/60 group-hover:text-foreground">
                  Read essay <ArrowUpRight size={12} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
