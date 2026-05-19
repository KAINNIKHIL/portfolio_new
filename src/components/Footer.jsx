import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10 px-6 md:px-10">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400">
            Nikhil Kaintura
          </h2>

          <p className="text-gray-500 mt-2">
            Full Stack Developer
          </p>
        </div>

        {/* Center */}
        <p className="text-gray-500 text-sm text-center">
          © 2026 Nikhil Singh Kaintura. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-5">

          <a
            href="https://github.com/KAINNIKHIL"
            target="_blank"
            className="text-2xl text-gray-400 hover:text-cyan-400 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/nikhil-singh-kaintura"
            target="_blank"
            className="text-2xl text-gray-400 hover:text-cyan-400 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="#home"
            className="text-xl p-3 rounded-full bg-slate-800 hover:bg-cyan-400 hover:text-slate-900 transition duration-300"
          >
            <FaArrowUp />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;