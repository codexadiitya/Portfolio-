import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Send, Copy, Check } from "lucide-react";
import { PROFILE } from "../data/portfolio";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Fill out all three fields — I read every one.");
      return;
    }
    toast.success("Message received. This is a demo — no email actually sent.", {
      description: `Thanks ${form.name.split(" ")[0]}, I'll pretend to reply within 24h.`,
    });
    setForm({ name: "", email: "", message: "" });
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    toast.success("Email copied to clipboard.");
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-16 md:py-32 px-6 md:px-10 border-t border-border"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8 md:gap-16">
        <div className="col-span-12 md:col-span-6">
          <p className="eyebrow mb-4">// Contact</p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="hero-h text-6xl md:text-8xl text-foreground"
          >
            Have an <span className="italic">idea?</span>
            <br />
            Let&apos;s <span className="italic">talk.</span>
          </motion.h2>

          <p className="mt-8 text-sm md:text-base text-foreground/60 leading-relaxed max-w-md">
            Freelance, contract, or a full-time conversation — I read every note
            that lands in my inbox. Typically I reply within 24 hours (CET
            hours, obviously).
          </p>

          <div className="mt-10 space-y-4">
            <button
              onClick={copyEmail}
              data-testid="contact-copy-email"
              data-cursor="hover"
              className="group flex items-center justify-between w-full md:max-w-md border-b border-border hover:border-foreground pb-3 text-left"
            >
              <span className="font-serif text-base sm:text-xl md:text-2xl text-foreground group-hover:italic transition-all break-all sm:break-normal">
                {PROFILE.email}
              </span>
              {copied ? (
                <Check size={16} className="text-emerald-400" />
              ) : (
                <Copy size={16} className="text-foreground/40 group-hover:text-foreground" />
              )}
            </button>
            <div className="text-xs font-mono uppercase tracking-widest text-foreground/40">
              {PROFILE.location} · {PROFILE.availability}
            </div>
          </div>
        </div>

        <form
          onSubmit={submit}
          data-testid="contact-form"
          className="col-span-12 md:col-span-6 border border-border p-6 md:p-10 bg-card flex flex-col gap-6"
        >
          <div>
            <label className="text-[10px] font-mono uppercase tracking-widest text-foreground/50">
              Your name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              data-testid="contact-input-name"
              className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-foreground text-base"
              placeholder="Ada Lovelace"
            />
          </div>
          <div>
            <label className="text-[10px] font-mono uppercase tracking-widest text-foreground/50">
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              data-testid="contact-input-email"
              className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-foreground text-base"
              placeholder="you@studio.com"
            />
          </div>
          <div>
            <label className="text-[10px] font-mono uppercase tracking-widest text-foreground/50">
              What&apos;s on your mind
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              data-testid="contact-input-message"
              rows={5}
              className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-foreground text-base resize-none"
              placeholder="A rough brief, a rougher budget, a starting date."
            />
          </div>
          <button
            type="submit"
            data-testid="contact-submit"
            data-cursor="hover"
            className="group mt-4 self-start inline-flex items-center gap-3 border border-foreground/30 hover:border-foreground hover:bg-foreground hover:text-background transition-all px-8 py-3 text-xs font-mono tracking-widest uppercase text-foreground"
          >
            Send message
            <Send
              size={14}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </button>
          <p className="text-[10px] font-mono uppercase tracking-widest text-foreground/30">
            Demo mode — no email is actually sent.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
