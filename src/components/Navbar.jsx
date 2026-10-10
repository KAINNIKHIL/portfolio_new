import React, { useState, useEffect } from "react";
import { HiMenu, HiX, HiOutlineArrowNarrowRight } from "react-icons/hi";

const navLinks = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      let current = "home";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 150) {
          current = section.id;
        }
      }

      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-cyan-400/10 bg-[#020B18]/90 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "border-transparent bg-[#020B18]/30"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-lg font-bold text-cyan-300 transition duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-400/20">
            NK<span className="text-cyan-400">.</span>
          </div>
          <div className="hidden sm:block">
            <span className="block text-sm font-semibold tracking-wide text-white">
              Nikhil Kaintura
            </span>
            <span className="block text-xs text-slate-400">
              Full Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-7 md:flex lg:gap-9">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                aria-current={active === link ? "location" : undefined}
                className={`relative block py-2 text-sm capitalize transition-colors duration-200 ${
                  active === link
                    ? "text-cyan-300"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link}

                <span
                  className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-cyan-400 transition-all duration-300 ${
                    active === link ? "w-full" : "w-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Actions & Mobile menu toggle */}
        <div className="flex items-center gap-4">
          {/* Resume button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-lg border border-cyan-400/50 px-4 py-2 text-sm font-medium text-cyan-300 transition duration-300 hover:border-cyan-300 hover:bg-cyan-400/10 md:inline-flex"
          >
            Resume
            <HiOutlineArrowNarrowRight className="text-base" />
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="rounded-lg border border-slate-700 p-2 text-2xl text-cyan-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/5 md:hidden"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-cyan-400/10 bg-[#020B18]/98 transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[450px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-5">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                tabIndex={menuOpen ? 0 : -1}
                onClick={closeMenu}
                className={`flex items-center justify-between rounded-lg px-4 py-3 capitalize transition ${
                  active === link
                    ? "bg-cyan-400/10 text-cyan-300"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link}
                {active === link && (
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                )}
              </a>
            </li>
          ))}

          <li className="pt-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
              className="flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Download Resume
              <HiOutlineArrowNarrowRight />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;