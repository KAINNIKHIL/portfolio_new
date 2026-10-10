import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFastapi,
  SiPostgresql,
  SiNextdotjs,
  SiSocketdotio,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-400" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-400" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-300" },
      { name: "React", icon: <FaReact />, color: "text-cyan-300" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-300" },
    ],
  },
  {
    title: "Backend",
    description: "Developing APIs and application functionality.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-400" },
      { name: "Express.js", icon: <SiExpress />, color: "text-slate-200" },
      { name: "REST APIs", icon: <TbApi />, color: "text-amber-400" },
      { name: "FastAPI", icon: <SiFastapi />, color: "text-teal-400" },
      { name: "WebSockets", icon: <SiSocketdotio />, color: "text-cyan-400" }
    ],
  },
  {
    title: "Databases & Tools",
    description: "Managing application data and development workflows.",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-sky-400" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-300" },
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-400" },
      { name: "GitHub", icon: <FaGithub />, color: "text-white" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden bg-slate-950 py-20 text-white lg:py-28">
      {/* Background accent */}
      <div className="pointer-events-none absolute -left-20 top-1/3 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              My Toolkit
            </p>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 md:text-lg">
            Tools and technologies I use to build web applications, work with
            data, and bring ideas to life.
          </p>
        </motion.div>

        {/* Skill Groups */}
        <div className="space-y-14">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: groupIndex * 0.1 }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 sm:text-2xl">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    {group.description}
                  </p>
                </div>

                <span className="font-mono text-xs text-slate-600">
                  {String(groupIndex + 1).padStart(2, "0")} / 03
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {group.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.045,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="group flex min-h-32 flex-col items-start justify-between rounded-2xl border border-slate-800/90 bg-[#071426]/80 p-4 transition-colors duration-300 hover:border-cyan-400/40 hover:bg-[#0A192C] sm:min-h-36 sm:p-5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-2xl transition duration-300 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/[0.06]">
                      <span className={skill.color}>{skill.icon}</span>
                    </div>

                    <div className="mt-5 flex w-full items-center justify-between gap-2">
                      <span className="text-sm font-medium text-slate-300 transition-colors group-hover:text-white sm:text-base">
                        {skill.name}
                      </span>

                      <span className="text-sm text-slate-700 transition-colors group-hover:text-cyan-400">
                        ↗
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing note */}
        <div className="mt-16 flex flex-wrap items-center gap-3 border-t border-slate-800 pt-7">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          <p className="text-sm text-slate-400">
            Always learning, building, and improving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;