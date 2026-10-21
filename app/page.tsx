import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-background text-foreground">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <ThemeToggle />
    </>
  );
}