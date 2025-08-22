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

import cec1 from "../../assets/babyimage/Gemini_Generated_Image_rcwsmmrcwsmmrcws.png";

const semesterData = {
  COE: [
    { id: 1, title: "Semester 1", image: baby1 },
    { id: 2, title: "Semester 2", image: baby2 },
    { id: 3, title: "Semester 3", image: baby3 },
    { id: 4, title: "Semester 4", image: baby4 },
    { id: 5, title: "Semester 5", image: baby5 },
    { id: 6, title: "Semester 6", image: baby6 },
    { id: 7, title: "Semester 7", image: baby7 },
  ],
  CEC: [
    { id: 1, title: "Semester 1", image: cec1 },
    { id: 2, title: "Semester 2", image: baby2 },
    { id: 3, title: "Semester 3", image: baby3 },
    { id: 4, title: "Semester 4", image: baby4 },
    { id: 5, title: "Semester 5", image: baby5 },
    { id: 6, title: "Semester 6", image: baby6 },
    { id: 7, title: "Semester 7", image: baby7 },
  ],
};

export default function CSE() {
  const navigate = useNavigate();
  const [selectedCollege, setSelectedCollege] = useState("COE");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-all">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-25">
        {/* Back Button */}
        {/* <div className="hidden md:block mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-700 dark:text-gray-300 relative group"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            <span className="font-medium hover:text-blue-600">Go Back</span>
          </button>
        </div> */}

        {/* Segmented Control */}
        <div className="flex justify-center mb-10 py-8 md:py-0">
          <div className="bg-gray-200 dark:bg-gray-800 p-1 rounded-xl flex space-x-7 ">
            {["COE", "CEC"].map((college) => (
              <button
                key={college}
                onClick={() => setSelectedCollege(college)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200  ${
                  selectedCollege === college
                    ? "bg-indigo-600 text-white w-32"
                    : "bg-transparent text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {college}
              </button>
            ))}
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-600 dark:text-white mb-12">
          {selectedCollege} <span className="text-indigo-600">CSE Journey</span>
        </h1>

        {/* Semester Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {semesterData[selectedCollege].map((sem) => (
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
        if (sem.id === 1) navigate("/btech/cse/firstsemester");
        else if (sem.id === 2) navigate("/btech/cse/secondsemester");
        else if (sem.id === 3) navigate("/btech/cse/thirdsemester");
        else if (sem.id === 4) navigate("/btech/cse/fourthsemester");
        else if (sem.id === 5) navigate("/btech/cse/fifthsemester");  
         else if (sem.id === 6) navigate("/btech/cse/sixthsemester");      
          else if (sem.id === 7) navigate("/btech/cse/seventhsemester");
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
