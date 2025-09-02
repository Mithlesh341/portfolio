
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-black to-blue-900 text-white overflow-hidden py-12 px-10">

      <motion.svg
        className="absolute top-10 left-10 w-10 h-10 text-yellow-400/40"
        fill="currentColor"
        viewBox="0 0 200 200"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <polygon points="100,10 190,190 10,190" />
      </motion.svg>

      <motion.svg
        className="absolute bottom-20 left-1/2 w-8 h-8 text-purple-400/40"
        fill="currentColor"
        viewBox="0 0 200 200"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <circle cx="100" cy="100" r="80" />
      </motion.svg>

      <motion.svg
        className="absolute top-1/2 right-20 w-12 h-12 text-white/20"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 100 100"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <path d="M10,80 Q50,10 90,80" />
      </motion.svg>

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">

        <motion.div
          className="relative flex justify-center shadow-lg shadow-white rounded-4xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/prof.png"
            alt="profile"
            className="relative w-80 h-auto rounded-2xl shadow-lg z-10"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-yellow-400 uppercase tracking-wider font-semibold mb-2">
            About Me
          </h3>

          <motion.p
            className="text-white/70 max-w-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I am a dedicated and detail-oriented full-stack developer with
            experience in designing and developing scalable, user-centric web
            applications. My expertise lies in working with technologies such as
            React.js, Next.js, Node.js, MongoDB, and Tailwind CSS to build
            efficient and modern solutions. I have a strong interest in
            problem-solving, clean code practices, and continuously enhancing my
            technical skills to stay aligned with industry standards. I am
            seeking opportunities to contribute to innovative projects where I
            can apply my skills, grow as a professional, and create meaningful
            digital experiences.
          </motion.p>


          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white/10 border-l-4 border-yellow-400 rounded-lg px-6 py-4 shadow-md hover:scale-105 transition"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <h4 className="font-semibold text-xl text-yellow-300">
                4 Full Stack projects completed
              </h4>
              <p className="text-white/70 text-sm">
                View my projects by{" "}
                <a href="/projects">
                  <span className="text-yellow-400">clicking here</span>
                </a>
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 border-l-4 border-purple-400 rounded-lg px-6 py-4 shadow-md hover:scale-105 transition"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <h4 className="font-semibold text-xl text-purple-300">
                200+ DSA problems solved
              </h4>
              <p className="text-white/70 text-sm">
                I have solved over 200 problems of Data Structures and Algorithm
                on{" "}
                <a
                  href="https://leetcode.com/u/Monu341/"
                  className="text-orange-400"
                >
                  Leetcode
                </a>{" "}
                and{" "}
                <a
                  href="https://www.geeksforgeeks.org/user/mithleshmop4x2/"
                  className="text-orange-400"
                >
                  GeeksforGeeks
                </a>{" "}
                using Java language.
              </p>
            </motion.div>
          </motion.div>

          <motion.a
            href="/cv.pdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <button className="mt-10 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-500 cursor-pointer">
              Download CV
            </button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
