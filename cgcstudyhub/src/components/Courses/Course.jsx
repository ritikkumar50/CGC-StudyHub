import React from "react";
import { coursesData } from "../../../Constants";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
export default function CoursesSection() {
  return (
    <section
      id="Courses"
      className="bg-gray-50 dark:bg-gray-900 py-12 px-10">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-8"
        >
          Explore <span className=" text-blue-600 " >Courses</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {coursesData.map((course, index) => (
            <Link
              to={course.id === "btech" ? "/btech" : "#"}
              key={course.id}
              className="block"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden flex flex-col items-center p-4 cursor-pointer hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20"
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
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {course.title}
                  </h3>
                </div>
              </motion.div>
            </Link>

          ))}

        </div>
      </div>
    </section>
  );
}
