import Marquee from "react-fast-marquee";
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { PROFILE } from "../data/portfolio";

// Custom Discord icon (lucide doesn't ship one)
const DiscordIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3c-.19.34-.412.797-.564 1.158a18.27 18.27 0 0 0-5.988 0A9.4 9.4 0 0 0 9.442 3a19.79 19.79 0 0 0-3.76 1.369C2.394 8.29 1.66 12.093 1.988 15.836A19.9 19.9 0 0 0 7.85 18.94c.484-.66.914-1.362 1.284-2.098-.708-.267-1.386-.6-2.024-.985.17-.126.336-.257.5-.393 3.9 1.82 8.11 1.82 11.958 0 .164.136.33.267.5.393-.638.385-1.316.718-2.024.985.37.736.8 1.438 1.284 2.098a19.9 19.9 0 0 0 5.862-3.104c.402-4.362-.786-8.13-3.373-11.467ZM9.68 13.94c-1.183 0-2.156-1.086-2.156-2.42 0-1.333.947-2.42 2.156-2.42 1.21 0 2.183 1.086 2.156 2.42 0 1.334-.947 2.42-2.156 2.42Zm5.64 0c-1.183 0-2.156-1.086-2.156-2.42 0-1.333.946-2.42 2.156-2.42 1.21 0 2.183 1.086 2.156 2.42 0 1.334-.946 2.42-2.156 2.42Z" />
  </svg>
);

const icons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Discord: DiscordIcon,
  "X / Twitter": Twitter,
};

const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="relative border-t border-white/10 bg-[#080808]"
    >
      {/* Big footer marquee */}
      <div className="py-16 md:py-24 overflow-hidden">
        <Marquee gradient={false} speed={30}>
          <span className="font-serif text-[12vw] md:text-[10vw] leading-none text-white/95 tracking-tighter mx-8">
            Let&apos;s build something
          </span>
          <span className="font-serif italic text-[12vw] md:text-[10vw] leading-none text-white/40 tracking-tighter mx-8">
            &nbsp;bespoke.&nbsp;
          </span>
          <span className="font-serif text-[12vw] md:text-[10vw] leading-none text-white/95 tracking-tighter mx-8">
            Let&apos;s build something
          </span>
          <span className="font-serif italic text-[12vw] md:text-[10vw] leading-none text-white/40 tracking-tighter mx-8">
            &nbsp;bespoke.&nbsp;
          </span>
        </Marquee>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-12">
        <div className="grid grid-cols-12 gap-8 border-t border-white/10 pt-12">
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 border border-white/40 rotate-45 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white -rotate-45" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest">
                {PROFILE.name}
              </span>
            </div>
            <p className="text-sm text-white/55 max-w-xs">
              {PROFILE.location} — freelance & full-time. Currently taking on
              select 2026 briefs.
            </p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-2 text-sm">
              {["About", "Projects", "Experience", "Journal", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase() === "projects" ? "projects" : l.toLowerCase() === "journal" ? "blog" : l.toLowerCase()}`}
                    className="text-white/70 hover:text-white nav-link"
                    data-testid={`footer-nav-${l.toLowerCase()}`}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <p className="eyebrow mb-4">Elsewhere</p>
            <ul className="space-y-2 text-sm">
              {PROFILE.socials.map((s) => {
                const Icon = icons[s.label] || ArrowUpRight;
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 text-white/70 hover:text-white group"
                      data-testid={`footer-social-${s.label.toLowerCase().replace(/\s|\/|,/g, "-")}`}
                      data-cursor="hover"
                    >
                      <Icon size={16} />
                      <span>{s.label}</span>
                      <span className="text-white/30 group-hover:text-white/60 text-xs font-mono">
                        {s.handle}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-2">
            <p className="eyebrow mb-4">Colophon</p>
            <p className="text-xs text-white/50 leading-relaxed">
              Built with React, Tailwind & Framer Motion. Set in Cormorant &
              Manrope.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[10px] font-mono uppercase tracking-widest text-white/40">
          <span data-testid="footer-copy">
            © 2026 {PROFILE.name} — All rights reserved.
          </span>
          <span>Made with ♥ &nbsp;·&nbsp; Demo portfolio</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
