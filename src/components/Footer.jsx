import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800/80 bg-[#020B18] px-6 py-10 text-white md:px-10">
      {/* Subtle cyan glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-6">
          {/* Brand */}
          <a
            href="#home"
            aria-label="Nikhil Kaintura - Back to home"
            className="group text-center md:text-left"
          >
            <h2 className="text-2xl font-bold tracking-tight">
              Nikhil <span className="text-cyan-400">Kaintura.</span>
            </h2>

            <p className="mt-2 text-sm text-slate-500 transition-colors duration-300 group-hover:text-slate-300">
              Full Stack Developer
            </p>
          </a>

          {/* Copyright */}
          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Nikhil Singh Kaintura.
            <span className="mt-1 block sm:mt-0 sm:inline">
              {" "}All rights reserved.
            </span>
          </p>

          {/* Social links and back to top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/KAINNIKHIL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-[#071426] text-lg text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nikhil-singh-kaintura"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-[#071426] text-lg text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="group flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-xl text-[#020B18] transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
              <FiArrowUp className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 border-t border-slate-800/70 pt-6 text-center">
          <p className="text-xs tracking-wide text-slate-600">
            Designed &amp; built with React and Tailwind CSS
            <span className="mx-2 text-cyan-500">·</span>
            Always learning, always building.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;