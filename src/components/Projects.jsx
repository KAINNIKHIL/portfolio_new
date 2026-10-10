import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden bg-slate-950 py-20 text-white lg:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col justify-between gap-5 sm:mb-16 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Selected Work
              </p>
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Projects I've Built
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 md:text-lg">
              A selection of applications where I turn ideas into
              functional, user-focused web experiences.
            </p>
          </div>

          <span className="font-mono text-sm text-slate-500">
            {String(projects?.length ?? 0).padStart(2, "0")} projects
          </span>
        </motion.div>

        {/* Project grid */}
        <div className="grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects?.map((project, index) => (
            <motion.article
              key={project.title ?? index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.1,
              }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -5 }}
              className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-800/90 bg-[#071426] transition-colors duration-300 hover:border-cyan-400/40"
            >
              {/* Project image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0B192B]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center font-mono text-sm text-slate-500">
                    Project Preview
                  </div>
                )}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020B18]/70 via-transparent to-transparent opacity-70" />

                {project.featured && (
                  <span className="absolute left-4 top-4 rounded-full border border-cyan-300/30 bg-[#020B18]/85 px-3 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-md">
                    Featured
                  </span>
                )}

                {project.status && (
                  <span className="absolute right-4 top-4 rounded-full border border-slate-600/70 bg-[#020B18]/85 px-3 py-1.5 text-xs text-slate-200 backdrop-blur-md">
                    {project.status}
                  </span>
                )}
              </div>

              {/* Project information */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-cyan-300 sm:text-2xl">
                    {project.title}
                  </h3>

                  <FiArrowUpRight className="mt-1 shrink-0 text-xl text-slate-600 transition-colors group-hover:text-cyan-300" />
                </div>

                <p className="mb-6 flex-1 text-sm leading-7 text-slate-400 sm:text-base">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-7 flex flex-wrap gap-2">
                  {project.tech?.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-slate-700/80 bg-slate-900/70 px-2.5 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Project links */}
                <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-slate-800 pt-5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
                    >
                      <FaGithub className="text-base" />
                      Source Code
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live demo`}
                      className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                    >
                      Live Demo
                      <FiExternalLink className="text-base" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;