import React, { Suspense, useEffect, useState } from "react";
import { semester1Subjects } from "../../../Constants";
import Navbar from "../navbar/navbar";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SemesterNotesPage = () => {
  const navigate = useNavigate();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <div className="relative pt-32">
        {/* Go Back button */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm md:text-base text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-all p-2 rounded-md"
          >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 cursor-pointer" />
            <span className="hidden sm:inline">Go Back</span>
          </button>
        </div>

        {/* Main content with heading */}
        <motion.div
          className="flex flex-col items-center justify-start min-h-screen px-6 pb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold text-center text-white mb-16">
            Semester 1 Notes
          </h1>

          <div className="w-full max-w-4xl space-y-8">
            <Suspense fallback={<div className="text-white">Loading notes...</div>}>
              {semester1Subjects.map((subject, subjectIndex) => (
                <SubjectBlock key={subjectIndex} subject={subject} delay={subjectIndex * 0.1} />
              ))}
            </Suspense>
          </div>
        </motion.div>
      </div>
    </>
  );
};

// ✅ Extracted block into a lazy-rendered component
const SubjectBlock = ({ subject, delay }) => {

  const [isNotesOpen, setIsNotesOpen] = useState(false);

  const notes = subject.units.filter((unit) =>
    unit.name.toLowerCase().includes("unit") || unit.name.toLowerCase().includes("notes")
  );
  const others = subject.units.filter(
    (unit) =>
      !unit.name.toLowerCase().includes("unit") &&
      !unit.name.toLowerCase().includes("notes")
  );
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 border-b border-gray-500 pb-2">
        {subject.subject}
      </h2>


      {/* Other Files (Books, PYQs, etc.) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-2">
        {others.map((unit, unitIndex) => (
          <UnitLink key={unitIndex} unit={unit} delay={unitIndex * 0.05} />
        ))}
      </div>

      {/* Notes Section */}
      {notes.length > 0 && (
        <div className="mt-6">
          <button
            onClick={() => setIsNotesOpen(!isNotesOpen)}
            className="flex items-center justify-between  text-left text-white px-2 py-2  rounded-md hover:bg-white/20 transition"
          >
            <span className="text-lg font-semibold">Notes</span>
            {isNotesOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>

          {isNotesOpen && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 ml-2">
              {notes.map((unit, unitIndex) => (
                <UnitLink key={unitIndex} unit={unit} delay={unitIndex * 0.05} />
              ))}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

// ✅ Separated unit link with simpler animation and lighter DOM
const UnitLink = ({ unit, delay }) => {
  const label = unit.name.toLowerCase();

  const getBadgeColor = () => {
    if (label.includes("pyq")) return "bg-yellow-600";
    if (label.includes("book")) return "bg-purple-600";
    if (label.includes("notes") || label.includes("unit")) return "bg-green-600";
    if (label.includes("syllabus")) return "bg-blue-600";
    return "bg-gray-600";
  };
   const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);


  return (
    <motion.div
      className="flex items-center space-x-3"
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
    >
      <FileText className="w-5 h-5 text-red-500 shrink-0" />



      {isMobile ? (
        <a
          href={unit.file}
          download
          className="text-blue-400 hover:text-blue-600 text-lg transition-colors flex items-center space-x-2"
        >
          <span>{unit.name}</span>
          <span className={`text-xs text-white px-2 py-0.5 rounded-full ${getBadgeColor()}`}>
            {label.includes("pyq")
              ? "PYQ"
              : label.includes("book")
                ? "Book"
                : label.includes("notes") || label.includes("unit")
                  ? "Notes"
                  : label.includes("syllabus")
                    ? "Syllabus"
                    : "PDF"}
          </span>
        </a>
      ) : (
        <a
          href={unit.file}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 text-lg transition-colors flex items-center space-x-2"
        >
          <span>{unit.name}</span>
          <span className={`text-xs text-white px-2 py-0.5 rounded-full ${getBadgeColor()}`}>
            {label.includes("pyq")
              ? "PYQ"
              : label.includes("book")
                ? "Book"
                : label.includes("notes") || label.includes("unit")
                  ? "Notes"
                  : label.includes("syllabus")
                    ? "Syllabus"
                    : "PDF"}
          </span>
        </a>
      )}

    </motion.div>
  );
};

export default SemesterNotesPage;
