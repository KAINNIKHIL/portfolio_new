import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-10 pt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
          }}
          className="relative flex justify-center order-2 md:order-1"
        >

          {/* Glow */}
          <div className="absolute w-64 h-64 bg-teal-400/20 blur-3xl rounded-full"></div>

          {/* Lottie Animation */}
          <DotLottieReact
  src="/Developer.lottie"
  loop
  autoplay
  className="relative w-full max-w-xl"
/>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2"
        >

          <p className="text-teal-400 text-lg mb-4">
            Full Stack Developer
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">

            Building Modern
            <span className="text-teal-400 block">
              Web Experiences
            </span>

          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10">

            I'm
            <span className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent font-semibold">
              {" "}Nikhil Kaintura
            </span>
            {" "}— a Full Stack Developer focused on creating scalable,
            responsive, and visually engaging digital products.

          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5">

            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-teal-400 text-slate-900 font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-teal-400/20"
            >
              Explore My Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl border border-slate-700 text-gray-300 hover:border-teal-400 hover:text-teal-400 transition duration-300"
            >
              Contact Me
            </a>

          </div>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-3 mt-10">

            {[
              "React",
              "Node.js",
              "MongoDB",
              "Tailwind",
              "Appwrite",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-gray-300 text-sm hover:border-teal-400 hover:text-teal-400 transition duration-300"
              >
                {tech}
              </span>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;