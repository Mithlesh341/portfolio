import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-br from-blue-950 via-black to-blue-900 text-white py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-center">

        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-yellow-400">Mithlesh Mourya</h3>
          <p className="text-white/70">Full Stack Web Developer</p>
        </div>


        <div className="flex justify-center space-x-6">

                <div className=" border-white/20 mt-8 pt-1 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Mithlesh Mourya. All rights reserved.
      </div>
        </div>

        <div className="flex justify-center md:justify-end space-x-6 text-2xl">
          <a
            href="https://github.com/Mithlesh341"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mithlesh-mourya/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaLinkedin />
          </a>

        </div>
      </div>


    </footer>
  );
}
