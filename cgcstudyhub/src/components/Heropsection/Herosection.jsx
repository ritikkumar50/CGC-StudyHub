import React, { useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import StudyIllustration from "../../assets/image/undraw_education_3vwh.svg";

export default function HeroSection() {
  const illustration = useMemo(() => StudyIllustration, []);

  const scrollToCourses = useCallback(() => {
    const section = document.getElementById("Courses");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="Home"
      className="relative flex flex-col md:flex-row items-center justify-center 
        min-h-[80vh] md:min-h-screen 
        pt-28 md:pt-18 px-4 md:px-6 
        bg-gradient-to-br from-blue-50 via-white to-blue-300  
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
        transition-colors duration-700"
    >
      {/* Left Text Section */}
      <div className="px-8 flex-1 text-center md:text-left space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-white"
        >
          <span className="italic">Hey</span>{" "}
          <span className="text-blue-600 dark:text-blue-400">CGCians</span>,
          <br /> Welcome to{" "}
          <span className="text-blue-500 dark:text-blue-300">CGCStudyHub</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-base sm:text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0"
        >
          "Your one-stop hub for free notes, courses, and growth."
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
          onClick={scrollToCourses}
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg shadow-md transition-all duration-300"
        >
          Explore Courses
        </motion.button>
      </div>

      {/* Right Animated Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="flex-1 flex justify-center mt-8 md:mt-0"
      >
        <motion.img
          src={illustration}
          alt="Study"
          className="w-64 sm:w-72 md:w-[400px] object-contain drop-shadow-xl"
          loading="lazy"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.div>
    </section>
  );
}
