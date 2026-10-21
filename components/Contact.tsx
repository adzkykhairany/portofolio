"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { sendContactEmail } from "@/app/actions/contact";
import SectionGlow from "@/components/SectionGlow";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSending(true);
    setStatus(null);

    const result = await sendContactEmail(formData);

    if (result.success) {
      form.reset();

      setStatus({
        type: "success",
        message: "Message sent successfully.",
      });

      setTimeout(() => {
        setStatus(null);
      }, 10000);
    } else {
      setStatus({
        type: "error",
        message: result.error ?? "Something went wrong. Please try again.",
      });
    }

    setIsSending(false);
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-16 overflow-hidden px-6 pb-0 pt-6 md:pt-8"
    >
      <SectionGlow position="bottom-right" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Section Label */}
        <p className="mb-12 text-xs font-medium uppercase tracking-[0.35em] text-foreground/40">
          05 — Contact
        </p>

        {/* Contact Content */}
        <div className="grid gap-16 border-t border-foreground/10 py-14 md:grid-cols-[1fr_1fr] md:gap-20 md:py-16">
          {/* Left */}
          <div>
            <h2 className="max-w-xl text-[clamp(3rem,6vw,5.5rem)] font-medium leading-[0.9] tracking-tighter">
              Let&apos;s
              <br />
              <span className="text-foreground/40">connect.</span>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-relaxed text-foreground/60 md:text-base">
              Whether it&apos;s an opportunity, a project, or simply a
              conversation, I&apos;d be glad to connect.
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-5">
              <a
                href="mailto:adzkyykhairany@gmail.com"
                className="flex items-center gap-3 text-sm text-foreground/60 transition-colors hover:text-primary"
              >
                <Mail size={17} strokeWidth={1.5} />
                <span>adzkyykhairany@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 text-sm text-foreground/60">
                <MapPin size={17} strokeWidth={1.5} />
                <span>Indonesia — Available Remotely</span>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <form onSubmit={handleSubmit} className="flex flex-col">
            {/* Name */}
            <div className="border-b border-foreground/10">
              <label
                htmlFor="name"
                className="block pt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/40"
              >
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full bg-transparent py-4 text-sm text-foreground outline-none placeholder:text-foreground/30"
              />
            </div>

            {/* Email */}
            <div className="border-b border-foreground/10">
              <label
                htmlFor="email"
                className="block pt-6 text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/40"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full bg-transparent py-4 text-sm text-foreground outline-none placeholder:text-foreground/30"
              />
            </div>

            {/* Message */}
            <div className="border-b border-foreground/10">
              <label
                htmlFor="message"
                className="block pt-6 text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/40"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me anything..."
                className="w-full resize-none bg-transparent py-4 text-sm leading-relaxed text-foreground outline-none placeholder:text-foreground/30"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSending}
              className="mt-8 inline-flex w-fit items-center gap-2 border border-foreground bg-foreground px-6 py-3 text-sm font-semibold uppercase tracking-wide text-background transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSending ? "Sending..." : "Send Message"}
              {!isSending && <ArrowUpRight size={16} />}
            </button>

            {/* Status */}
            {status && (
              <p
                className={`mt-4 text-xs ${
                  status.type === "success"
                    ? "text-primary"
                    : "text-red-500"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>

        {/* Footer */}
        <footer className="flex flex-col gap-5 border-t border-foreground/10 py-7 text-xs text-foreground/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© Athiyya Adzky Khairany.</p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/adzkyykhairany"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/athiyya-adzky-khairany/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              LinkedIn
            </a>

            <a
              href="#home"
              className="transition-colors hover:text-primary"
            >
              Back to top ↑
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}