import React, { useEffect, useState, useRef } from "react";
import Navbar from "../navbar/navbar";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";

// Images - Import only what's needed (avoid unnecessary copies)
import baby1 from "../../assets/babyimage/Gemini_Generated_Image_h9eg57h9eg57h9eg.png";
import baby2 from "../../assets/babyimage/Gemini_Generated_Image_cooxa0cooxa0coox.png";
import baby3 from "../../assets/babyimage/Gemini_Generated_Image_6wozfy6wozfy6woz.png";
import baby4 from "../../assets/babyimage/Gemini_Generated_Image_b0e5gbb0e5gbb0e5.png";
import baby5 from "../../assets/babyimage/Gemini_Generated_Image_3hqczz3hqczz3hqc.png";
import baby6 from "../../assets/babyimage/Gemini_Generated_Image_34578e34578e3457.png";
import baby7 from "../../assets/babyimage/Gemini_Generated_Image_ipewvlipewvlipew.png";

const semesterData = [
 
   
    { id: 1, title: "Semester 1", image: baby1 },
    { id: 2, title: "Semester 2", image: baby2 },
    { id: 3, title: "Semester 3", image: baby3 },
    { id: 4, title: "Semester 4", image: baby4 },
    { id: 5, title: "Semester 5", image: baby5 },
    { id: 6, title: "Semester 6", image: baby6 },
    { id: 7, title: "Semester 7", image: baby7 },
  
  
];

export default function IT() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-all">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-25">


        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-600 dark:text-white mb-12">
           <span className="text-indigo-600">IT Journey</span>
        </h1>

        {/* Semester Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {semesterData.map((sem) => (
            <SemesterCard key={sem.id} sem={sem} navigate={navigate} />
          ))}
        </div>
      </div>
    </div>
  );
}

const SemesterCard = React.memo(({ sem, navigate }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={() => {
        if (sem.id === 1) navigate("/btech/it/firstsemester");
        else if (sem.id === 2) navigate("/btech/it/secondsemester");
        else if (sem.id === 3) navigate("/btech/it/thirdsemester");
        else if (sem.id === 4) navigate("/btech/it/fourthsemester");
        else if (sem.id === 5) navigate("/btech/it/fifthsemester");
        else if (sem.id === 6) navigate("/btech/it/sixthsemester");
        else if (sem.id === 7) navigate("/btech/it/seveenthsemester");
       
       
       
       
              
      }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center hover:scale-105 transition-all duration-300"
    >
      {isInView && (
        <img
          src={sem.image}
          loading="lazy"
          alt={sem.title}
          className="w-full h-56 object-contain mx-auto mb-4"
        />
      )}
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{sem.title}</h2>
    </motion.div>
  );
});
