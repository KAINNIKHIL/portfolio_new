import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-10 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <p className="text-cyan-400 mb-3 text-lg">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Passionate About
            <span className="text-cyan-400 block">
              Modern Web Development
            </span>
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg mb-6">
            I specialize in building responsive and
            scalable web applications using modern
            frontend and backend technologies.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg mb-8">
            My focus is on creating clean user
            experiences, optimized performance,
            and production-ready applications
            with strong attention to design
            and usability.
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-block px-7 py-3 rounded-xl bg-cyan-400 text-slate-900 font-semibold hover:scale-105 transition duration-300"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >

          {[
            {
              number: "10+",
              label: "Frontend Projects",
            },
            {
              number: "5+",
              label: "Backend Integrations",
            },
            {
              number: "1+",
              label: "Years Learning",
            },
            {
              number: "100%",
              label: "Responsive Design",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition duration-300"
            >
              <h3 className="text-4xl font-bold text-cyan-400 mb-3">
                {item.number}
              </h3>

              <p className="text-gray-400">
                {item.label}
              </p>
            </div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default About;