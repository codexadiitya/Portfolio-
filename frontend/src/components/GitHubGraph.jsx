import { CONTRIBUTIONS } from "../data/portfolio";

const shades = [
  "var(--contrib-0)",
  "var(--contrib-1)",
  "var(--contrib-2)",
  "var(--contrib-3)",
  "var(--contrib-4)",
];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const GitHubGraph = () => {
  const weeks = [];
  for (let w = 0; w < 26; w++) {
    weeks.push(CONTRIBUTIONS.slice(w * 7, w * 7 + 7));
  }
  const total = CONTRIBUTIONS.reduce((a, b) => a + b, 0);
  const streak = 27; // demo

  return (
    <section
      id="github"
      data-testid="github-section"
      className="relative py-16 md:py-28 px-6 md:px-10 border-t border-border"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-4">// Public activity</p>
            <h2 className="hero-h text-5xl md:text-7xl text-foreground">
              Building in <span className="italic">the open.</span>
            </h2>
          </div>
          <div className="flex gap-8 text-sm">
            <div>
              <div className="font-serif text-3xl text-foreground">{total}</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-foreground/40 mt-1">
                Contributions · 6mo
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl text-foreground">{streak}</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-foreground/40 mt-1">
                Day streak
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl text-foreground">42</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-foreground/40 mt-1">
                Public repos
              </div>
            </div>
          </div>
        </div>

        <div className="border border-border bg-card p-6 md:p-10 overflow-x-auto no-scrollbar">
          <div className="min-w-[720px]">
            <div className="flex gap-[3px] mb-2 ml-6">
              {months.slice(0, 6).map((m) => (
                <span
                  key={m}
                  className="text-[10px] font-mono uppercase tracking-widest text-foreground/40 flex-1"
                >
                  {m}
                </span>
              ))}
            </div>
            <div className="flex gap-[3px]" data-testid="github-graph">
              {weeks.map((w, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {w.map((v, di) => (
                    <div
                      key={di}
                      className={`contrib contrib-${v} cursor-pointer`}
                      title={`${v} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-foreground/40">
              <span>Less</span>
              <div className="flex gap-1">
                {shades.map((c, i) => (
                  <div key={i} className={`contrib contrib-${i}`} />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubGraph;
