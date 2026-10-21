export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "Rihla",
      description:
        "A small decision-making tool for Muslim travelers to compare places based on prayer-friendly factors.",
      technologies: "Next.js · TypeScript · Tailwind CSS",
      year: "2026",
      demo: "#",
      github: "#",
    },
    {
      number: "02",
      title: "Trash Classification",
      description:
        "Machine learning project for classifying different types of waste through image classification.",
      technologies: "Python · TensorFlow · MobileNetV2",
      year: "2025",
      demo: "#",
      github: "#",
    },
    {
      number: "03",
      title: "CbCR Data Manager",
      description:
        "Excel-based automation system for managing and processing Country-by-Country Report data.",
      technologies: "Excel · VBA · Data Processing",
      year: "2026",
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-20 px-6 pb-24 pt-6 md:pb-32 md:pt-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Label */}
        <p className="mb-10 text-xs font-medium uppercase tracking-[0.35em] text-foreground/40">
          04 — Projects
        </p>

        {/* Project List */}
        <div className="border-y border-foreground/10">
          {projects.map((project) => (
            <article
              key={project.number}
              className="grid gap-5 border-b border-foreground/10 py-8 last:border-b-0 md:grid-cols-[60px_1fr_80px] md:gap-10"
            >
              {/* Number */}
              <p className="text-xs uppercase tracking-[0.2em] text-foreground/40">
                {project.number}
              </p>

              {/* Main Content */}
              <div>
                <h2 className="text-lg font-semibold tracking-[-0.01em] md:text-xl">
                  {project.title}
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/60">
                  {project.description}
                </p>

                <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/40">
                  {project.technologies}
                </p>

                {/* Links */}
                <div className="mt-4 flex gap-5 text-xs font-medium">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/50 transition-colors hover:text-primary"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/50 transition-colors hover:text-primary"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>

              {/* Year */}
              <p className="text-xs uppercase tracking-[0.15em] text-foreground/40 md:text-right">
                {project.year}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}