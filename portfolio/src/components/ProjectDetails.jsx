import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: `
Developed a comprehensive full-stack e-commerce platform using the MERN stack. Implemented the frontend with 
React, ensuring a responsive and user-friendly interface. Utilized Redux for efficient state management across the 
application. Developed the backend using Node.js and Express.js, creating RESTful APIs for seamless data interaction. 
Integrated MongoDB for robust data storage and management.Enhanced the user experience by integrating 
Cloudinary for efficient image storage and retrieval. Implemented Stripe to enable secure online payment processing. 
The platform supports functionalities such as user authentication, product search and filtering, shopping cart 
management, and order processing. 

`,
    image: "/ecom.png",
    tech: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB", "Stripe", "Resend", "SweetAlert", "Toastify", "JWT token"],
    github: "https://github.com/Mithlesh341/Full_Stack_E_Commerce_Website",
    demo: "https://full-stack-e-commerce-website-xp4u.vercel.app/",
  },
  {
    id: 2,
    title: "Video App",
    description: `
Developed a feature-rich video-sharing application during internship using Next.js and TypeScript. Implemented 
group creation with member invitations and secure joining via Firebase authentication. Integrated Razorpay for tier
based video access plans with automated invoicing through Nodemailer. Built a custom gesture-based video player 
supporting advanced controls (skip, pause, next video, comment section access). Enabled real-time messaging using 
WebSocket and addressed deployment challenges by hosting the backend on Render. Planned enhancements include 
scaling features to deliver a YouTube-like user experience. `,
    image: "/yt.png",
    tech: ["Next.js", "Tailwind", "Node.js", "Express.js", "MongoDB", "RajorPay", "Nodemailer", "Firebase"],
    github: "https://github.com/Mithlesh341/Your-tube",
    demo: "https://your-tube-blue.vercel.app/",
  },  
 
   {
    id: 3,
    title: "Global Review",
    description: `
Collaborated in a four-member team to design and develop a customer review platform with a responsive and user
friendly interface. Implemented search functionality for products and enabled customers to browse and submit 
reviews based on personal experiences. Integrated an administrative panel to review and approve submitted content, 
ensuring moderation and quality control. Built the backend using Node.js and Express.js with MongoDB for data 
management, and tested APIs using Postman. (This project is currently not live) `,
    image: "/minor.png",
    tech: ["React", "CSS", "Node.js", "Express.js", "MongoDB", "Stripe"],
    github: "https://github.com/Mithlesh341/Global-review-system-master",

  },  
   {
    id: 4,
    title: "Solar System",
    description: `
      Although I wasn’t selected for the internship I applied to, I’m grateful for the journey. That opportunity pushed me to explore and learn Three.js—and now I’ve brought the solar system to life with stunning visuals and interactive dynamics.

With this project, I explored 3D web development and dynamic animations in a browser. Learned about Three.js basics—scene creation, mesh setup, lighting, textures, and animation loops
 

Functionalities include speed control slider for every planet and Pause/Resume button.`,
    image: "/solar.png",
    tech: ["HTML", "CSS", "JavaScript", "Three.js"],
    github: "https://github.com/Mithlesh341/animated-solar-system",
    demo: "https://animated-solar-system.vercel.app/",
  },  
      {
    id: 5,
    title: "Food Delievery App",
    description: `
 Designed and developed food delivery application with a user-friendly interface showcasing a dynamic list of 
available food items. Customers can filter food by categories such as Salad, Ice Cream, Sandwich, and more. 
Implemented a shopping cart system where users can add selected items, view cart contents, and proceed to 
checkout by submitting the required order and delivery details. 
Integrated an admin panel that allows administrators to manage food items, including adding new products and 
updating the status of customer orders. 
Secured the application using JSON Web Tokens (JWT) for robust user authentication.`,
    image: "/tomato.png",
    tech: ["React", "CSS", "Node.js", "Express.js", "MongoDB", "Stripe"],
    github: "https://github.com/Mithlesh341/food-dev",
    demo: "https://food-dev-frontend-zdla.onrender.com/",
  },   
 
];

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-black to-blue-900 text-white px-6 py-10 md:px-20">

      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-gray-400 hover:text-yellow-400 transition cursor-pointer"
      >
        ← Back to Projects
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
          {project.title}
        </h1>
        <div className="flex flex-wrap justify-center gap-3">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-4 py-1 text-sm bg-gray-800 text-gray-300 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full flex justify-center mb-10"
      >
        <img
          src={project.image}
          alt={project.title}
          className="rounded-2xl shadow-lg max-h-[400px] object-contain"
        />
      </motion.div>

      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2 }}
  className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-lg"
>
  <p>{project.description}</p>
</motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex gap-6 justify-center mt-10"
      >
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-900 border border-gray-700 rounded-xl hover:bg-yellow-400 hover:text-black transition"
        >
          GitHub Repo
        </a>

{project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-yellow-400 text-black rounded-xl hover:bg-yellow-500 transition"
        >
          Live Demo
        </a>
)}

      </motion.div>
    </div>
  );
}
