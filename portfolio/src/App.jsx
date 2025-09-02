import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Project";
import ProjectDetails from "./components/ProjectDetails";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      <nav className="flex justify-between items-center px-10 py-6 bg-gradient-to-br from-blue-950 via-black to-blue-900">
        <a href="/"><h1 className="font-bold text-xl text-white hover:text-yellow-400 cursor-pointer">Portfolio</h1></a>
        <ul className="hidden md:flex space-x-8 text-white/80">
          <a href="/">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          </a>
          <a href="/about">
            <li className="hover:text-yellow-400 cursor-pointer">About Me </li>
          </a>
          <a href="/projects">
            <li className="hover:text-yellow-400 cursor-pointer">Projects</li>
          </a>

          <a href="/contact">
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
          </a>
        </ul>
        <a href="/cv.pdf.pdf" target="_blank" rel="noopener noreferrer">
          <button className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-500 cursor-pointer">
            Download CV
          </button>
        </a>
      </nav>
      <Router>
        <Routes>
          <Route path="/" element={<HeroSection />}></Route>

          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
