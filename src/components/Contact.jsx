import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiArrowUpRight, FiSend, FiMessageCircle } from "react-icons/fi";

const socialLinks = [
  {
    label: "GitHub",
    detail: "Explore my projects",
    href: "https://github.com/KAINNIKHIL",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    detail: "Let's connect professionally",
    href: "https://www.linkedin.com/in/nikhil-singh-kaintura",
    icon: FaLinkedin,
  },
];

const inputClasses =
  "w-full rounded-xl border border-slate-700/80 bg-[#071426] px-5 py-4 text-white placeholder:text-slate-500 outline-none transition duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10";

const Contact = () => {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSending || !form.current) return;

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables.");
      toast.error("Contact service is temporarily unavailable.");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      toast.success("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#020B18] px-6 py-24 text-white md:px-10 md:py-28"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2 text-sm font-medium tracking-wide text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            CONTACT
          </span>

          <h2 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Let's Build Something <span className="text-cyan-400">Great.</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Have a project idea, internship opportunity, or collaboration in
            mind? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.15 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-[#061224]/90 p-7 transition duration-300 hover:border-cyan-400/40 sm:p-9"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-400/[0.05] blur-2xl transition duration-500 group-hover:bg-cyan-400/10" />

            <div className="relative">
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-300">
                <FiMessageCircle />
              </div>

              <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-cyan-400">
                Get in touch
              </p>

              <h3 className="mb-3 text-2xl font-bold sm:text-3xl">
                Contact Information
              </h3>

              <p className="mb-9 leading-7 text-slate-400">
                Open to discussing web development, interesting projects, and
                opportunities to grow as a developer.
              </p>

              {/* Email link */}
              <a
                href="mailto:nikhilsinghkaintura@gmail.com"
                className="group/email mb-8 flex items-start gap-4 rounded-2xl border border-slate-800 bg-[#020B18]/70 p-4 transition duration-300 hover:border-cyan-400/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-xl text-cyan-300">
                  <FaEnvelope />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="mb-1 block text-sm text-slate-500">
                    Email me at
                  </span>
                  <span className="break-all text-sm font-medium text-slate-200 transition group-hover/email:text-cyan-300 sm:text-base">
                    nikhilsinghkaintura@gmail.com
                  </span>
                </span>

                <FiArrowUpRight className="mt-1 shrink-0 text-lg text-slate-500 transition group-hover/email:-translate-y-1 group-hover/email:translate-x-1 group-hover/email:text-cyan-300" />
              </a>

              {/* Social links */}
              <div className="space-y-3">
                {socialLinks.map(({ label, detail, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social flex items-center gap-4 rounded-2xl border border-transparent p-3 transition duration-300 hover:border-slate-700 hover:bg-slate-900/60"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-800/80 text-xl text-slate-300 transition group-hover/social:bg-cyan-400/10 group-hover/social:text-cyan-300">
                      <Icon />
                    </span>

                    <span className="flex-1">
                      <span className="block font-semibold text-slate-200">
                        {label}
                      </span>
                      <span className="mt-1 block text-sm text-slate-500">
                        {detail}
                      </span>
                    </span>

                    <FiArrowUpRight className="text-lg text-slate-500 transition group-hover/social:-translate-y-1 group-hover/social:translate-x-1 group-hover/social:text-cyan-300" />
                  </a>
                ))}
              </div>

              <div className="mt-8 border-t border-slate-800 pt-6">
                <p className="text-sm leading-6 text-slate-500">
                  Prefer email? Send me a message using the form and I'll get
                  back to you.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.15 }}
            className="rounded-3xl border border-slate-800/80 bg-[#061224]/90 p-7 transition duration-300 hover:border-cyan-400/30 sm:p-9"
          >
            <div className="mb-8">
              <h3 className="mb-2 text-2xl font-bold">Send Me a Message</h3>
              <p className="text-sm leading-6 text-slate-400">
                Fill out the form below. Your message will be sent directly to
                my inbox.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  maxLength={254}
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  name="message"
                  placeholder="Tell me about your idea or opportunity..."
                  required
                  maxLength={5000}
                  className={`${inputClasses} resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-4 font-semibold text-[#020B18] transition duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? "Sending..." : "Send Message"}
                {!isSending && (
                  <FiSend className="text-lg transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                )}
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                Your details are used to respond to your message.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;