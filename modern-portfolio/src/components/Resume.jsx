import { FiFileText } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section id="resume" className="bg-black py-28 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">

        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-blue-500 tracking-widest mb-3"
        >
          04. RESUME
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-white mb-14"
        >
          My Resume
        </motion.h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="backdrop-blur-lg bg-white/5 border border-gray-800 rounded-2xl p-12 shadow-[0_0_50px_rgba(37,99,235,0.2)] hover:shadow-[0_0_60px_rgba(37,99,235,0.4)] transition duration-300"
        >

          {/* Animated Icon */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-20 h-20 mx-auto mb-8 flex items-center justify-center rounded-full bg-blue-900/40 border border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.6)]"
          >
            <FiFileText className="text-blue-400 text-3xl" />
          </motion.div>

          {/* Description */}
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            My resume highlights my frontend expertise, hands-on project
            experience, and strong foundation in Data Structures & Algorithms.
            It is structured in an ATS-friendly format and optimized for
            technical recruiter screening.
          </p>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-6 text-left mb-12">

            <div>
              <h4 className="text-blue-400 font-semibold mb-2">Education</h4>
              <p className="text-gray-400 text-sm">
                B.Tech Computer Science Engineering (3rd Year)
              </p>
            </div>

            <div>
              <h4 className="text-blue-400 font-semibold mb-2">Experience</h4>
              <p className="text-gray-400 text-sm">
                Frontend Developer Intern – UI & API Integration
              </p>
            </div>

            <div>
              <h4 className="text-blue-400 font-semibold mb-2">Core Skills</h4>
              <p className="text-gray-400 text-sm">
                JavaScript, React, DSA, REST APIs, MySQL
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-5">

            <a
              href="/Gotur_Pranitha_Resume.pdf"
              download
              className="bg-blue-500 hover:bg-blue-600 text-black px-10 py-3 rounded-lg font-semibold transition shadow-[0_0_25px_rgba(37,99,235,0.6)]"
            >
              Download Resume (PDF)
            </a>

            <a
              href="/Gotur_Pranitha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black px-10 py-3 rounded-lg transition"
            >
              View Online
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
