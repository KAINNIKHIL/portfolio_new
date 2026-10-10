import React from "react";
import { motion } from "framer-motion";
import { HiCode, HiAcademicCap, HiTerminal } from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";

const highlights = [
  {
    icon: HiCode,
    title: "Full Stack Development",
    description:
      "Building interactive interfaces and connecting them with backend APIs.",
  },
  {
    icon: HiTerminal,
    title: "Backend & Databases",
    description:
      "Working with Node.js, Express, MongoDB, and PostgreSQL.",
  },
  {
    icon: HiAcademicCap,
    title: "Continuous Learning",
    description:
      "Strengthening my development skills through practical projects.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-950 py-20 text-white lg:py-28">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -top-40 right-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1fr_0.9fr] lg:gap-24 lg:px-8">
        {/* Left: Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              About Me
            </p>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Developer by curiosity.
            <span className="mt-2 block text-slate-400">
              Builder by practice.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
            I'm Nikhil Kaintura, a Full Stack Developer with an MCA
            background and a focus on building useful web applications.
            I enjoy turning ideas into responsive interfaces and
            connecting them to working backend services.
          </p>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
            Through personal projects and internship experience, I've
            worked with React, Node.js, Express, and databases. I'm
            continuing to improve my problem-solving skills and learn
            how to build maintainable applications.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/15"
            >
              Download Resume
              <HiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#projects"
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
            >
              Explore my work →
            </a>
          </div>
        </motion.div>

        {/* Right: Areas of focus */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-3xl bg-cyan-400/[0.03] blur-xl" />

          <div className="relative space-y-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className="group flex gap-5 rounded-2xl border border-slate-800/90 bg-[#071426]/90 p-5 transition duration-300 hover:border-cyan-400/30 hover:bg-[#0A192C] sm:p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.07] text-xl text-cyan-300 transition group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                    <Icon />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400 sm:text-base">
                      {item.description}
                    </p>
                  </div>

                  <HiArrowUpRight className="ml-auto hidden shrink-0 text-slate-600 transition group-hover:text-cyan-300 sm:block" />
                </motion.div>
              );
            })}
          </div>

          {/* Education note */}
          <div className="mt-5 flex items-center gap-3 px-2 text-sm text-slate-500">
            <HiAcademicCap className="text-lg text-cyan-400" />
            <span>BCA · MCA</span>
            <span className="text-slate-700">/</span>
            <span>Learning through building</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;