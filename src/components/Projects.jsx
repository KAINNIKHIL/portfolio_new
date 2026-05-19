import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import projects from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-10 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 text-lg mb-3">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Work
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="
                bg-slate-900
                border border-slate-800
                rounded-3xl
                overflow-hidden
                hover:border-cyan-400
                hover:shadow-cyan-500/20
                hover:shadow-2xl
                transition-all
                duration-300
                flex flex-col
              "
            >

              {/* Image */}
              <div className="overflow-hidden relative">

                {/* Featured Badge */}
                {project.featured && (
                  <span
                    className="
                      absolute top-4 left-4 z-10
                      bg-cyan-400
                      text-slate-900
                      text-xs
                      font-bold
                      px-3 py-1
                      rounded-full
                    "
                  >
                    Featured
                  </span>
                )}

                {/* Status Badge */}
                {project.status && (
                  <span
                    className="
                      absolute top-4 right-4 z-10
                      bg-slate-950/80
                      backdrop-blur-md
                      text-cyan-300
                      text-xs
                      px-3 py-1
                      rounded-full
                      border border-cyan-400/30
                    "
                  >
                    ● {project.status}
                  </span>
                )}

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-56 md:h-64
                    object-cover
                    hover:scale-105
                    transition
                    duration-500
                  "
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    text-gray-400
                    leading-relaxed
                    mb-6
                  "
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">

                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="
                        px-4 py-2
                        rounded-full
                        bg-slate-800
                        border border-slate-700
                        text-sm text-gray-300
                      "
                    >
                      {item}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-auto">

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2
                      px-5 py-3
                      rounded-xl
                      bg-slate-800
                      hover:bg-slate-700
                      transition
                      duration-300
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  {/* Live Demo */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2
                      px-5 py-3
                      rounded-xl
                      bg-cyan-400
                      text-slate-900
                      font-semibold
                      hover:scale-105
                      transition
                      duration-300
                    "
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>

                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;