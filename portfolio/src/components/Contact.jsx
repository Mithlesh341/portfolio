
import { motion } from "framer-motion";
import { Mail, Phone,  } from "lucide-react";
import emailjs from "emailjs-com";

export default function Contact() {
    function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLPATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message, try again.");
        }
      );
  }
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 py-16"
    >

      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-blue-900"></div>

      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-30"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-16 right-12 w-28 h-28 bg-yellow-300 rounded-full opacity-20"
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />


      <div className="relative bg-blue-800/30 backdrop-blur-xl shadow-2xl rounded-3xl p-10 w-full max-w-6xl border border-white/30 flex flex-col md:flex-row gap-10">
        

        <div className="flex-1 space-y-6">
          <h2 className="text-2xl font-bold text-white">Let's Connect</h2>
          <p className="text-gray-400">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-blue-900/40 p-4 rounded-2xl">
              <Mail className="text-yellow-400 w-6 h-6" />
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-medium">mithleshmourya2004@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-blue-900/40 p-4 rounded-2xl">
              <Phone className="text-yellow-400 w-6 h-6" />
              <div>
                <p className="text-gray-400 text-sm">Mobile Number</p>
                <p className="text-white font-medium">+91 942478 7807</p>
              </div>
            </div>

          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left">
            Send Message
          </h2>
          <p className="text-gray-400 text-center md:text-left mt-2">
            Fill out the form below and I'll get back to you soon!
          </p>


          <form className="mt-8 space-y-6" onSubmit={sendEmail}>
            <div className="flex flex-col gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="px-5 py-3 rounded-full bg-blue-900/50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="px-5 py-3 rounded-full bg-blue-900/50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <textarea
              placeholder="Message Description"
              name="message"
              rows="5"
              className="w-full px-5 py-3 rounded-2xl bg-blue-900/50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold shadow-lg hover:shadow-yellow-400/50 transition cursor-pointer"
            >
              Submit
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
