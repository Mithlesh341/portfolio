import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiShadcnui,
  SiRender,
  SiVercel,
  SiPostman,
  SiMinutemailer,
  SiStripe,
  SiRazorpay,
} from "react-icons/si";
import { KeySquare, Shapes, MessageCircleCode } from "lucide-react"; 
import { BsStars } from "react-icons/bs";

export default function SkillsSection() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
         { name: "Email.js", icon: <SiMinutemailer className="text-white" /> },
      ],
    },
    {
      category: "Designing and Animation",
      items: [
        
        { name: "Shadcn", icon: <SiShadcnui className="text-white" /> },
        { name: "Daisy UI", icon: <BsStars className="text-pink-400" /> },
        { name: "Framer Motion", icon: <SiFramer className="text-purple-400" /> },
        { name: "Sweet Alert", icon: <span className="text-yellow-400">🎉</span> },
        { name: "Toast", icon: <span className="text-orange-400">🔔</span> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
        { name: "React Icons", icon: <FaReact className="text-blue-300" /> },
        { name: "Lucide React", icon: <Shapes className="text-green-400" /> },
      ],
    },
    {
      category: "Authentication and Payment Gateway",
      items: [
        { name: "JWT Token", icon: <KeySquare className="text-yellow-400" /> },
        { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
         { name: "Stripe", icon: <SiStripe className="text-red-500" /> },
         { name: "Razorpay", icon: <SiRazorpay className="text-blue-400" /> }, 
      ],
    },
    {
      category: "Database",
      items: [{ name: "MongoDB", icon: <SiMongodb className="text-green-500" /> }],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
        { name: "Web Sockets", icon: <MessageCircleCode className="text-gray-300"/>},
         { name: "Nodemailer", icon: <SiMinutemailer className="text-white" /> },
      ],
    },
        {
      category: "Deployment and Testing Tools",
      items: [
        { name: "Render", icon: <SiRender className="text-gray-400" /> },
        { name: "Vercel", icon: <SiVercel className="text-white" /> },
        { name: "PostMan", icon: <SiPostman className="text-orange-500" /> }
      ],
    },
  ];

  return (
    <section className="px-10 py-20 bg-gradient-to-br from-blue-950 via-black to-blue-900 text-white">

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-yellow-400">Technologies</h2>
        <p className="text-white/70 mt-2">
          Here are the technologies I’m working with
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((group, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-blue-950 via-black to-blue-900 p-6 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-yellow-300">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-4">
              {group.items.map((tech, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-xl">{tech.icon}</span>
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
