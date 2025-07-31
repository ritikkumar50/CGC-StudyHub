import React, { useEffect } from "react";
import { btechCourses } from "../../../Constants";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../navbar/navbar";
import { Player } from "@lottiefiles/react-lottie-player";
import { ArrowLeft } from "lucide-react";
import BackToTopButton from "../BackToTopButton/BackToTopButton";
import engineerillusion from "../../assets/image/undraw_developer-activity_4zqd.svg";

export default function BtechCourses() {
  const navigate = useNavigate();

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // stagger effect for each card
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // Scroll to top when component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
      {/* Navbar */}
      <Navbar />

      {/* Go Back Arrow */}
      <div className="max-w-6xl mx-auto px-6 mt-26">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-700 dark:text-gray-300 relative group transition"
        >
          <ArrowLeft className="w-6 h-6 mr-2 " />
          <span className="font-medium">Go Back</span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16">
        {/* Left Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left md:w-1/2 space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Welcome Future <span className="text-indigo-600 dark:text-indigo-400">Engineers 🚀</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Explore specialized branches of B.Tech and shape your future with cutting-edge technologies.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="md:w-1/2 flex justify-center mt-8 md:mt-0"
        >
          <motion.img
            src={engineerillusion}
            alt="Engineer"
            className="w-64 sm:w-72 md:w-[380px] object-contain drop-shadow-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>
      </div>


      {/* B.Tech Sub-courses Grid */}
      <div className="px-6 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 white mb-8">
          Explore B.Tech <span className="text-blue-600">Branches</span>
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          {btechCourses.map((course, index) => (
            <motion.div
              key={course.id}
dark:text-              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden flex flex-col items-center p-4 cursor-pointer hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20"
              onClick={() => navigate(`/btech/${course.id}`)}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <Player
                src={course.animation}
                loop
                autoplay
                style={{ height: "200px", width: "200px" }}
              />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {course.name}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Optional back-to-top button */}
      <BackToTopButton />
    </div>
  );
}
