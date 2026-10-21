export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-6 px-6 pb-24 pt-16 md:pb-32 md:pt-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Label */}
        <p className="mb-16 text-xs font-medium uppercase tracking-[0.35em] text-foreground/40">
          02 — Education
        </p>

        {/* Education Card */}
        <div className="border border-foreground/10 bg-foreground/2">
          {/* Header */}
          <div className="flex flex-col gap-8 p-6 md:flex-row md:items-start md:justify-between md:p-8">
            <div>
              <p className="text-xl font-medium tracking-[-0.02em] md:text-2xl">
                Bachelor of Informatics
              </p>

              <p className="mt-2 text-sm text-foreground/60">
                Universitas Jenderal Soedirman
              </p>
            </div>

            <p className="text-xs uppercase tracking-[0.2em] text-foreground/40">
              2021 — 2025
            </p>
          </div>

          {/* Highlights */}
          <div className="grid border-t border-foreground/10 sm:grid-cols-2">
            {/* GPA */}
            <div className="border-b border-foreground/10 p-6 sm:border-b-0 sm:border-r md:p-8">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/40">
                Academic
              </p>

              <p className="mt-4 text-3xl font-medium tracking-[-0.04em]">
                3.77
                <span className="ml-2 text-base text-foreground/30">
                  / 4.00
                </span>
              </p>

              <p className="mt-2 text-sm text-foreground/50">
                Final GPA
              </p>
            </div>

            {/* Organization */}
            <div className="p-6 md:p-8">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/40">
                Beyond Academics
              </p>

              <p className="mt-4 text-3xl font-medium tracking-[-0.04em]">
                3 Years
              </p>

              <p className="mt-2 text-sm text-foreground/50">
                Active in student organizations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}