import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "Developed a comprehensive full-stack e-commerce platform using the MERN stack. Utilized Redux for efficient state management across the application. ",
    tech: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB", "Stripe", "Resend"],
    image: "/ecom.png",
  },
  {
    id: 2,
    title: "Video App",
    description:
      "Developed a feature-rich video-sharing application during internship using Next.js and TypeScript. Implemented group creation with member invitations and secure joining via Firebase authentication. ",
    tech: ["Next.js", "Tailwind", "Node.js", "Express.js", "MongoDB", "RajorPay", "Nodemailer"],
    image: "/yt.png",
  },

    {
    id: 3,
    title: "Global Review",
    description:
      " Collaborated as part of a four-member team to design and develop a customer review website with a user-friendly interface that allows users to search for products and view corresponding reviews.",
    tech: ["React", "CSS", "Node.js", "Express.js", "MongoDB", "Stripe"],
    image: "/minor.png",
  },
    {
    id: 4,
    title: "Solar System",
    description:
      "Animated solar system using Three.js, with stunning visuals and interactive dynamics.",
    tech: ["HTML", "CSS", "JavaScript", "Three.js"],
    image: "/solar.png",
  },  
    {
    id: 5,
    title: "Food Delievery App",
    description:
      "Designed and developed food delivery application with a user-friendly interface showcasing a dynamic list of available food items.",
    tech: ["React", "CSS", "Node.js", "Express.js", "MongoDB", "Stripe"],
    image: "/tomato.png",
  },
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-blue-950 via-black to-blue-900 text-white" id="projects">

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-white">
          My Projects
        </h2>
        <p className="mt-2 text-gray-300">
          Some of the cool things I’ve worked on as a developer
        </p>
      </div>


      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
<motion.div
  key={project.id}
  whileHover={{
    scale: 1.05,
    y: -8,
    boxShadow: "0 10px 25px rgba(255, 255, 150, 0.5)",
  }}
  transition={{ type: "spring", stiffness: 200, damping: 15 }}
  className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-800 cursor-pointer relative group"
  onClick={() => navigate(`/projects/${project.id}`)}
>
 
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-white/20 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>


  <div className="h-48 bg-gray-700 flex items-center justify-center">
    <img
      src={project.image}
      alt={project.title}
      className="object-cover h-full w-full"
    />
  </div>


  <div className="p-5 relative z-10">
    <h3 className="text-xl font-semibold group-hover:text-yellow-300 transition">
      {project.title}
    </h3>
    <p className="text-gray-400 text-sm mt-2 line-clamp-3">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2 mt-4">
      {project.tech.map((t, i) => (
        <span
          key={i}
          className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full group-hover:bg-yellow-500/20"
        >
          {t}
        </span>
      ))}
    </div>
  </div>
</motion.div>

        ))}
      </div>
    </section>
  );
}
