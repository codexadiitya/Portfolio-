import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import "./App.css";
import "./index.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import GitHubGraph from "./components/GitHubGraph";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";

function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fallback in case loader doesn't finish for any reason
    const t = setTimeout(() => setLoading(false), 4500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="App grain overflow-hidden w-full min-h-screen" data-testid="app-root">
      {loading && <Loader onDone={() => setLoading(false)} />}

      <CustomCursor />
      <Navbar onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} />

      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Skills />
        <GitHubGraph />
        <Blog />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0a0a0a",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#ededed",
            fontFamily: "Manrope, sans-serif",
          },
        }}
      />
    </div>
  );
}

export default App;
