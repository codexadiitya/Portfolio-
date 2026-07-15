import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PROFILE } from "../data/portfolio";

const rotatingTitles = ["FULL-STACK DEVELOPER.", "ML ENGINEER.", "INTERFACE DESIGNER.", "SYSTEMS THINKER."];

const Hero = () => {
  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const target = rotatingTitles[idx];
    let i = 0;
    setTyped("");
    const t = setInterval(() => {
      i++;
      setTyped(target.slice(0, i));
      if (i >= target.length) {
        clearInterval(t);
        setTimeout(() => setIdx((idx + 1) % rotatingTitles.length), 2200);
      }
    }, 55);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  useEffect(() => {
    const upd = () =>
      setTime(
        new Date().toLocaleTimeString("en-DE", {
          timeZone: "Europe/Berlin",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    upd();
    const t = setInterval(upd, 30000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen pt-32 pb-16 px-6 md:px-10 flex flex-col justify-between"
    >
      {/* Top eyebrow row */}
      <div className="flex justify-between items-start text-[11px] font-mono tracking-widest uppercase text-foreground/55">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {PROFILE.availability}
        </div>
        <div className="hidden sm:block">
          <span className="text-foreground/30">Berlin&nbsp;/&nbsp;</span>
          <span data-testid="hero-clock">{time} CET</span>
        </div>
      </div>

      {/* Main title */}
      <div className="mt-16 md:mt-8 max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="grid grid-cols-12 gap-4 items-end"
        >
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow mb-6">// Portfolio&nbsp;— MMXXVI</p>
            <h1
              className="hero-h text-[14vw] sm:text-[12vw] md:text-[9.5vw] leading-[0.85] text-foreground"
              data-testid="hero-heading"
            >
              A studio<br />of one.
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 md:pl-8 border-l border-border hidden md:block">
            <p className="text-sm text-foreground/70 leading-relaxed max-w-xs font-sans">
              I engineer bespoke digital products at the intersection of{" "}
              <span className="text-foreground font-serif italic">craft</span>,{" "}
              <span className="text-foreground font-serif italic">systems</span> &{" "}
              <span className="text-foreground font-serif italic">machine intelligence</span>.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-foreground/40">
              <MapPin size={12} />
              Berlin&nbsp;/&nbsp;Remote
            </div>
          </div>
        </motion.div>
      </div>

      {/* Rotating role */}
      <div className="mt-12 max-w-[1400px] mx-auto w-full flex flex-wrap items-baseline justify-between gap-6">
        <div className="flex items-baseline gap-4">
          <span className="eyebrow">Currently&nbsp;→</span>
          <span
            className="hero-h text-3xl md:text-5xl text-foreground font-serif italic"
            data-testid="hero-rotating-title"
          >
            {typed}
            <span className="inline-block w-[2px] h-[0.8em] bg-foreground align-middle ml-1 animate-pulse" />
          </span>
        </div>

        <a
          href="#contact"
          data-testid="hero-cta"
          data-cursor="hover"
          className="group inline-flex items-center gap-3 border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all px-6 py-3 rounded-full text-xs font-mono tracking-widest uppercase text-foreground"
        >
          Let&apos;s connect
          <ArrowUpRight
            size={16}
            className="group-hover:rotate-45 transition-transform"
          />
        </a>
      </div>

      {/* Scroll hint */}
      <div className="mt-16 flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-foreground/30">
        <span className="w-8 h-px bg-foreground/30" />
        Scroll to explore
      </div>
    </section>
  );
};

export default Hero;
