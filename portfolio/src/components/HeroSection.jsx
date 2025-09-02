
import { motion } from "framer-motion";
import SkillsSection from "./SkillsSection";
import Contact from "./Contact";
import About from "./About";
import FooterSection from "./Footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-blue-950 via-black to-blue-900 text-white overflow-hidden min-h-screen">

      <motion.svg
        className="absolute top-20 left-10 w-20 h-20 text-white/10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 100 100"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <path d="M10,80 Q50,10 90,80" />
      </motion.svg>
      <motion.svg
        className="absolute top-20 left-40 w-20 h-20 text-white/10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 100 100"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <path d="M10,80 Q50,10 90,80" />
      </motion.svg>

      <motion.svg
        className="absolute top-50 left-80 w-20 h-20 text-white/10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 100 100"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <path d="M10,80 Q50,10 90,80" />
      </motion.svg>

      <motion.svg
        className="absolute top-40 right-32 w-16 h-16 text-yellow-500/20"
        fill="currentColor"
        viewBox="0 0 200 200"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <circle cx="100" cy="100" r="80" />
      </motion.svg>

      <div className="grid md:grid-cols-2 gap-10 items-center px-10 py-20 relative z-10">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
            Hello, I’m <br /> Mithlesh Mourya <br /> A{" "}
            <span className="text-yellow-400">Full Stack Web Developer</span>
          </h2>
          <motion.p
            className="text-white/70 mt-5 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            I'm a final year Computer Science Engineering student from Samrat
            Ashok Technological Institute, Vidisha. Over the years I have honed
            my skills in Web Development using MERN stack and Data Structures
            and Algorithms using Java language.
          </motion.p>

          <motion.div
            className="flex justify-center md:justify-start mt-5 space-x-6 text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a
              href="https://github.com/Mithlesh341"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-yellow-400 transition transform hover:scale-110"
            >
              <FaGithub size={35} />
            </a>
            <a
              href="https://www.linkedin.com/in/mithlesh-mourya/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-yellow-400 transition transform hover:scale-110"
            >
              <FaLinkedin size={35} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.img
            src="./src/assets/my-photo.png"
            alt="profile"
            className="w-auto h-auto rounded-2xl shadow-lg shadow-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />

          <motion.div
            className="absolute bottom-10 left-10 bg-white text-black px-4 py-2 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="font-bold text-xl">Mithlesh Mourya</span> <br />
            <span className="text-sm">Full Stack Web Developer</span>
          </motion.div>
        </motion.div>
      </div>

      <About />
      <SkillsSection />
      <Contact />
      <FooterSection />
    </div>
  );
}
