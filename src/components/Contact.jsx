import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to send message.");
      });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-10 bg-slate-900 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="text-cyan-400 text-lg mb-3">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Work Together
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project idea, internship opportunity,
            or collaboration in mind? Feel free to reach out.
          </p>

        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              bg-slate-950
              border border-slate-800
              rounded-3xl
              p-8
              hover:border-cyan-400
              transition-all
              duration-300
            "
          >

            <h3 className="text-2xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              {/* Email */}
              <a
                href="mailto:nikhilsinghkaintura@gmail.com"
                className="
                  flex items-start gap-4
                  text-gray-300
                  hover:text-cyan-400
                  transition duration-300
                  break-all
                "
              >
                <FaEnvelope className="text-2xl shrink-0 mt-1" />

                <span>
                  nikhilsinghkaintura@gmail.com
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/KAINNIKHIL"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-start gap-4
                  text-gray-300
                  hover:text-cyan-400
                  transition duration-300
                  break-all
                "
              >
                <FaGithub className="text-2xl shrink-0 mt-1" />

                <span>
                  GitHub
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/nikhil-singh-kaintura"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-start gap-4
                  text-gray-300
                  hover:text-cyan-400
                  transition duration-300
                  break-all
                "
              >
                <FaLinkedin className="text-2xl shrink-0 mt-1" />

                <span>
                  LinkedIn
                </span>
              </a>

            </div>

          </motion.div>

          {/* Right Side */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              bg-slate-950
              border border-slate-800
              rounded-3xl
              p-8
              space-y-6
              hover:border-cyan-400
              transition-all
              duration-300
            "
          >

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="
                w-full
                bg-slate-900
                border border-slate-700
                rounded-xl
                px-5 py-4
                outline-none
                focus:border-cyan-400
                transition duration-300
              "
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="
                w-full
                bg-slate-900
                border border-slate-700
                rounded-xl
                px-5 py-4
                outline-none
                focus:border-cyan-400
                transition duration-300
              "
            />

            {/* Message */}
            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
              className="
                w-full
                bg-slate-900
                border border-slate-700
                rounded-xl
                px-5 py-4
                outline-none
                resize-none
                focus:border-cyan-400
                transition duration-300
              "
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="
                w-full
                py-4
                rounded-xl
                bg-cyan-400
                text-slate-900
                font-semibold
                hover:scale-[1.02]
                transition
                duration-300
              "
            >
              Send Message
            </button>

          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;