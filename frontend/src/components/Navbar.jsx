import { useEffect, useState } from "react";
import { Menu, X, Command } from "lucide-react";

const links = [
  { label: "Index", href: "#home" },
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Journal", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ onOpenPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#050505]/85 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="#home" data-testid="nav-logo" className="flex items-center gap-3">
          <div className="w-8 h-8 border border-white/30 rotate-45 flex items-center justify-center">
            <div className="w-2 h-2 bg-white -rotate-45" />
          </div>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-white/70">
            Aditya&nbsp;/&nbsp;<span className="text-white">Diwan</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10 text-xs font-mono tracking-widest uppercase">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-white/70 hover:text-white"
              data-testid={`nav-link-${l.label.toLowerCase()}`}
            >
              <span className="text-white/40 mr-1">0{i + 1}.</span>
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenPalette}
            data-testid="nav-command-btn"
            className="flex items-center gap-2 border border-white/15 hover:border-white/40 px-3 py-1.5 text-[10px] font-mono tracking-widest uppercase text-white/70 hover:text-white transition-all"
          >
            <Command size={12} />
            <span>Ctrl K</span>
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          data-testid="nav-mobile-toggle"
          aria-label="menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#050505] px-6 py-8 flex flex-col gap-6 font-mono text-sm tracking-widest uppercase">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white"
              data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
