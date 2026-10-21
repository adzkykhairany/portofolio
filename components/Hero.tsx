export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden px-6 py-20"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/4 h-125 w-125 rounded-full bg-[radial-gradient(circle,rgba(217,119,6,0.14)_0%,rgba(245,158,11,0.06)_35%,transparent_70%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(217,119,6,0.18)_0%,rgba(245,158,11,0.07)_35%,transparent_70%)]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col">
        {/* Main Content */}
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_280px]">
          {/* Headline */}
          <h1 className="max-w-5xl text-[clamp(3.5rem,6.5vw,6.5rem)] font-medium uppercase leading-[0.85] tracking-[-0.06em]">
            Data, Models,
            <br />
            <span className="text-[#8F8981]">& Intelligence.</span>
          </h1>

          {/* Description */}
          <p className="max-w-xs pb-2 text-sm leading-relaxed text-foreground/60 md:text-base">
            Informatics graduate exploring data, machine learning, and AI to
            turn complex problems into thoughtful solutions.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="border border-foreground bg-foreground px-7 py-3 text-center text-sm font-semibold uppercase tracking-wide text-background transition-opacity hover:opacity-80"
          >
            View Project
          </a>

          <a
            href="#contact"
            className="border border-foreground/20 px-7 py-3 text-center text-sm font-semibold uppercase tracking-wide transition-colors hover:border-foreground hover:bg-foreground/5"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-foreground/40 transition-colors hover:text-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.35em]">
          Scroll
        </span>

        <span className="h-8 w-px bg-foreground/20" />

        <span className="flex h-6 w-4 items-start justify-center rounded-full border border-foreground/40 pt-1">
          <span className="h-1.5 w-1 rounded-full bg-foreground/60" />
        </span>
      </a>
    </section>
  );
}