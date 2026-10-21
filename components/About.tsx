import Image from "next/image";
import SectionGlow from "@/components/SectionGlow";

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-6 overflow-hidden px-6 pb-24 pt-12 md:pb-32 md:pt-16"
    >
      <SectionGlow position="top-right" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Section Label */}
        <p className="mb-16 text-xs font-medium uppercase tracking-[0.35em] text-foreground/40">
          01 — About Me
        </p>

        <div className="grid gap-14 lg:grid-cols-[350px_1fr] lg:gap-20">
          {/* Left — Photo */}
          <div>
            <div className="relative aspect-4/5 w-full overflow-hidden bg-foreground/5">
              <Image
                src="/images/profile.jpg"
                alt="Athiyya Adzky Khairany"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 350px"
              />
            </div>
          </div>

          {/* Right — Introduction */}
          <div>
            <h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl lg:text-6xl">
              Athiyya Adzky Khairany
            </h2>

            {/* Statement */}
            <div className="mt-10 max-w-3xl">
              <p className="text-2xl font-medium leading-relaxed tracking-[-0.02em] text-foreground/80 md:text-3xl">
                Exploring ideas through data, technology, and the things I
                build along the way.
              </p>
            </div>

            {/* Information */}
            <div className="mt-16 grid gap-10 border-t border-foreground/10 pt-8 sm:grid-cols-2">
              {/* Area of Interest */}
              <div>
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/40">
                  01 — Area of Interest
                </p>

                <p className="max-w-sm text-sm leading-relaxed text-foreground/60">
                  Data Science · Data Analytics · Machine Learning · AI ·
                  Recommendation Systems · Data-Driven Products
                </p>
              </div>

              {/* Tools */}
              <div>
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/40">
                  02 — Tools
                </p>

                <p className="max-w-sm text-sm leading-relaxed text-foreground/60">
                  Python · SQL · Power BI · Excel / VBA · Scikit-learn ·
                  TensorFlow · Next.js · React · TypeScript · Tailwind CSS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}