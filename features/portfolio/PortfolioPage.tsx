import Architecture from "./sections/Architecture";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import { ThemeToggle } from "../theme";

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.08),_transparent_45%),linear-gradient(to_bottom,_var(--background),_var(--background))] text-[var(--foreground)]">
      <Hero />
      <Skills />
      <Projects />
      <Architecture />
      <Experience />
      <Footer />
      <ThemeToggle />
    </div>
  );
}
