import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

const technologies = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white" id="home">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[40rem] w-[40rem] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-8 lg:px-8">
        {/* Left: Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            <span className="text-sm font-medium tracking-wide text-cyan-300">
              FULL STACK DEVELOPER
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
            Turning Ideas
            <br />
            Into{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Web Solutions.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            Hey, I'm{" "}
            <span className="font-semibold text-white">Nikhil Kaintura</span>. I
            build responsive web applications using React, Node.js, Express, and
            databases, with a focus on useful features and clean user experiences.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              Explore Projects
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-xl border border-slate-700 bg-white/[0.02] px-6 py-3.5 font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:text-cyan-300"
            >
              Contact Me <span>↗</span>
            </a>
          </div>

          {/* Technologies */}
          <div className="mt-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Technologies I Work With
            </p>

            <div className="flex max-w-xl flex-wrap gap-2.5">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-slate-800 bg-slate-900/70 px-3.5 py-2 text-sm text-slate-300 transition duration-300 hover:border-cyan-400/50 hover:text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Developer animation, no personal photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 25 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative order-2 mx-auto flex w-full max-w-lg items-center justify-center"
        >
          {/* Decorative rings */}
          <div className="absolute h-64 w-64 rounded-full border border-cyan-400/10 sm:h-80 sm:w-80" />
          <div className="absolute h-52 w-52 rounded-full border border-blue-400/10 sm:h-64 sm:w-64" />
          <div className="absolute h-64 w-64 rounded-full bg-cyan-400/10 blur-[80px] sm:h-80 sm:w-80" />

          {/* Animation card */}
          <div className="relative w-full overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900/90 via-[#071426] to-[#04101f] p-4 shadow-2xl shadow-cyan-950/30 sm:p-6">
            <div className="mb-2 flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>

              <span className="font-mono text-xs text-slate-500">
                developer.json
              </span>
            </div>

            <div className="relative">
              <DotLottieReact
                src="/Developer.lottie"
                loop
                autoplay
                className="relative mx-auto aspect-square w-full max-w-md"
              />
            </div>

            <div className="rounded-xl border border-cyan-400/10 bg-[#020B18]/80 p-4 font-mono text-xs leading-6 sm:text-sm">
              <p className="text-slate-500">{"// A little about me"}</p>
              <p>
                <span className="text-cyan-300">const</span>{" "}
                <span className="text-blue-300">developer</span> = &#123;
              </p>
              <p className="pl-4 text-slate-300">
                role: <span className="text-emerald-300">"Full Stack"</span>,
              </p>
              <p className="pl-4 text-slate-300">
                focus: <span className="text-emerald-300">"Building"</span>,
              </p>
              <p className="pl-4 text-slate-300">
                mindset: <span className="text-emerald-300">"Keep Learning"</span>
              </p>
              <p className="text-cyan-300">&#125;;</p>
            </div>
          </div>

          {/* Floating label */}
          <div className="absolute -right-2 top-10 rounded-xl border border-cyan-400/20 bg-[#071426]/95 px-4 py-3 shadow-xl shadow-black/20 sm:-right-6">
            <p className="text-xs text-slate-500">Currently building</p>
            <p className="mt-1 text-sm font-semibold text-cyan-300">
              Web Experiences ↗
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;