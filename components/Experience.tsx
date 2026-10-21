"use client";

import { useState } from "react";
import SectionGlow from "@/components/SectionGlow";

export default function Experience() {
  const [hmifOpen, setHmifOpen] = useState(false);
  const [committeeOpen, setCommitteeOpen] = useState(false);

  return (
    <section
      id="experience"
      className="relative scroll-mt-16 overflow-hidden px-6 pb-24 pt-10 md:pb-32 md:pt-14"
    >
      <SectionGlow position="bottom-right" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Section Label */}
        <p className="mb-10 text-xs font-medium uppercase tracking-[0.35em] text-foreground/40">
          03 — Experience
        </p>

        <div className="border-y border-foreground/10">
          {/* =========================
              BCA
          ========================== */}
          <article className="grid gap-5 border-b border-foreground/10 py-8 md:grid-cols-[180px_1fr] md:gap-12">
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/40">
              Nov 2025 — Jul 2026
            </p>

            <div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h2 className="text-lg font-semibold tracking-[-0.01em]">
                  PT. Bank Central Asia, Tbk.
                </h2>

                <p className="text-sm text-foreground/40">
                  Data Science Intern
                </p>
              </div>

              <p className="mt-1 text-sm text-foreground/60">
                Accounting & Tax Division
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-foreground/60">
                Developed Excel and VBA automation systems to support data
                processing, validation, comparison, and document generation
                within Group Accounting.
              </p>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/40">
                <span>Excel / VBA</span>
                <span>Automation</span>
                <span>Data Processing</span>
              </div>
            </div>
          </article>

          {/* =========================
              HMIF
          ========================== */}
          <div className="border-b border-foreground/10">
            {/* HMIF Header */}
            <button
              type="button"
              onClick={() => setHmifOpen(!hmifOpen)}
              className="grid w-full cursor-pointer gap-5 py-8 text-left md:grid-cols-[180px_1fr] md:gap-12"
              aria-expanded={hmifOpen}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-foreground/40">
                2022 — 2025
              </p>

              <div className="flex items-start justify-between gap-8">
                <div>
                  <h2 className="text-lg font-semibold tracking-[-0.01em]">
                    Himpunan Mahasiswa Informatika
                  </h2>

                  <p className="mt-1 text-sm text-foreground/60">
                    3 years of organizational experience
                  </p>
                </div>

                <span
                  className={`text-lg font-light text-foreground/40 transition-transform duration-300 ${
                    hmifOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </div>
            </button>

            {/* HMIF Details */}
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                hmifOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="border-t border-foreground/10 pb-8 pt-7 md:ml-57">
                  {/* Supervisor */}
                  <div className="grid gap-3 pb-7 md:grid-cols-[1fr_140px]">
                    <div>
                      <h3 className="text-base font-medium">
                        Supervisor of the Daily Management Board
                      </h3>

                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/60">
                        <li>
                          • Coordinated and supervised 60+ members&apos; daily
                          operations.
                        </li>
                        <li>
                          • Ensured all work programs were aligned with
                          organizational goals.
                        </li>
                        <li>
                          • Improved focus and effectiveness through regular
                          evaluation and guidance.
                        </li>
                      </ul>
                    </div>

                    <p className="text-xs uppercase tracking-[0.15em] text-foreground/40 md:text-right">
                      Mar 2024 — Feb 2025
                    </p>
                  </div>

                  {/* Head of Secretariat */}
                  <div className="grid gap-3 border-t border-foreground/10 py-7 md:grid-cols-[1fr_140px]">
                    <div>
                      <h3 className="text-base font-medium">
                        Head of Secretariat
                      </h3>

                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/60">
                        <li>
                          • Organized and maintained 200+ organizational
                          documents with a structured filing system.
                        </li>
                        <li>
                          • Increased document retrieval efficiency through a
                          new archiving system.
                        </li>
                        <li>
                          • Standardized document management procedures across
                          the organization.
                        </li>
                      </ul>
                    </div>

                    <p className="text-xs uppercase tracking-[0.15em] text-foreground/40 md:text-right">
                      Mar 2023 — Feb 2024
                    </p>
                  </div>

                  {/* Secretariat Staff */}
                  <div className="grid gap-3 border-t border-foreground/10 pt-7 md:grid-cols-[1fr_140px]">
                    <div>
                      <h3 className="text-base font-medium">
                        Secretariat Staff
                      </h3>

                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/60">
                        <li>
                          • Maintained and organized a comprehensive filing
                          system for documents and inventory.
                        </li>
                        <li>
                          • Ensured document accuracy and accessibility for the
                          team.
                        </li>
                        <li>
                          • Supported collaboration between secretariat and
                          treasury teams.
                        </li>
                      </ul>
                    </div>

                    <p className="text-xs uppercase tracking-[0.15em] text-foreground/40 md:text-right">
                      Mar 2022 — Feb 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              COMMITTEE
          ========================== */}
          <div>
            {/* Committee Header */}
            <button
              type="button"
              onClick={() => setCommitteeOpen(!committeeOpen)}
              className="grid w-full cursor-pointer gap-5 py-8 text-left md:grid-cols-[180px_1fr] md:gap-12"
              aria-expanded={committeeOpen}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-foreground/40">
                2022 — 2025
              </p>

              <div className="flex items-start justify-between gap-8">
                <div>
                  <h2 className="text-lg font-semibold tracking-[-0.01em]">
                    Committee Experience
                  </h2>

                  <p className="mt-1 text-sm text-foreground/60">
                    Selected event and committee involvement
                  </p>
                </div>

                <span
                  className={`text-lg font-light text-foreground/40 transition-transform duration-300 ${
                    committeeOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </div>
            </button>

            {/* Committee Details */}
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                committeeOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="border-t border-foreground/10 pb-8 pt-7 md:ml-57">
                  <p className="text-sm leading-relaxed text-foreground/60">
                    Committee experience will be added here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}