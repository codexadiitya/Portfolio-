import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Home,
  User,
  Briefcase,
  Layers,
  BookOpen,
  Mail,
  Download,
  Copy,
  Github,
} from "lucide-react";
import { PROFILE } from "../data/portfolio";

const CommandPalette = ({ open, setOpen }) => {
  const [q, setQ] = useState("");

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);

  useEffect(() => {
    if (open) setQ("");
  }, [open]);

  const go = (href) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 60);
  };

  const items = [
    { icon: Home, label: "Go to Home", action: () => go("#home"), kbd: "h" },
    { icon: User, label: "About me", action: () => go("#about"), kbd: "a" },
    { icon: Briefcase, label: "Projects", action: () => go("#projects"), kbd: "p" },
    { icon: Layers, label: "Experience", action: () => go("#experience"), kbd: "e" },
    { icon: BookOpen, label: "Journal", action: () => go("#blog"), kbd: "j" },
    { icon: Mail, label: "Contact", action: () => go("#contact"), kbd: "c" },
    {
      icon: Copy,
      label: `Copy email → ${PROFILE.email}`,
      action: async () => {
        await navigator.clipboard.writeText(PROFILE.email);
        toast.success("Email copied.");
        setOpen(false);
      },
    },
    {
      icon: Download,
      label: "Download resume (demo)",
      action: () => {
        toast.info("Demo mode — resume PDF is not attached.");
        setOpen(false);
      },
    },
    {
      icon: Github,
      label: "Open GitHub profile",
      action: () => {
        window.open("https://github.com", "_blank");
        setOpen(false);
      },
    },
  ];

  const filtered = items.filter((i) =>
    i.label.toLowerCase().includes(q.toLowerCase())
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-start justify-center pt-24 px-6"
      onClick={() => setOpen(false)}
      data-testid="command-palette-backdrop"
    >
      <div
        className="w-full max-w-xl bg-card border border-border shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        data-testid="command-palette"
      >
        <div className="p-4 border-b border-border">
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Type a command or search..."
            data-testid="command-palette-input"
            className="w-full bg-transparent outline-none text-foreground text-sm font-mono placeholder:text-foreground/30"
          />
        </div>
        <ul className="max-h-[50vh] overflow-y-auto py-2">
          {filtered.map((it, i) => (
            <li key={i}>
              <button
                onClick={it.action}
                data-testid={`command-item-${i}`}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground/80 hover:bg-foreground/5 hover:text-foreground text-left"
              >
                <it.icon size={16} className="text-foreground/50" />
                <span className="flex-1">{it.label}</span>
                {it.kbd && (
                  <kbd className="text-[10px] font-mono uppercase tracking-widest text-foreground/40 border border-border px-1.5 py-0.5">
                    {it.kbd}
                  </kbd>
                )}
              </button>
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="px-4 py-6 text-xs font-mono uppercase tracking-widest text-foreground/40">
              No results.
            </li>
          )}
        </ul>
        <div className="border-t border-border px-4 py-2 flex justify-between text-[10px] font-mono uppercase tracking-widest text-foreground/40">
          <span>↑↓ Navigate · ↵ Select</span>
          <span>Esc to close</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
