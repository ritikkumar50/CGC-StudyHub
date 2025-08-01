// SemesterNotesPage.jsx

import React from "react";
import { semester1Subjects } from "../../../Constants";
import Navbar from "../navbar/navbar";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FileText } from "lucide-react"; // Add at the top with other imports



const SemesterNotesPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <div className="relative pt-32">
                {/* Go Back button (fixed at top left) */}
                <div className="hidden md:block">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-sm md:text-base text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-all p-2 rounded-md"
                    >
                        <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 cursor-pointer" />
                        <span className="hidden sm:inline">Go Back</span>
                    </button>
                </div>
                {/* Full screen heading centered */}
                <motion.div
                    className="flex flex-col items-center justify-start min-h-screen px-6 pb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >

                    <h1 className="text-5xl font-bold text-center text-white mb-16">
                        Semester 1 Notes
                    </h1>

                    {/* Notes content below heading */}
                    <div className="w-full max-w-4xl space-y-8">
                        {semester1Subjects.map((subject, subjectIndex) => (
                            <motion.div
                                key={subjectIndex}
                                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg transition-transform hover:scale-[1.01]"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: subjectIndex * 0.2 }}
                            >
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 border-b border-gray-500 pb-2">
                                    {subject.subject}
                                </h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-2">
                                    {subject.units.map((unit, unitIndex) => {
                                        const label = unit.name.toLowerCase();

                                        // Badge color based on content type
                                        const getBadgeColor = () => {
                                            if (label.includes("pyq")) return "bg-yellow-600";
                                            if (label.includes("book")) return "bg-purple-600";
                                            if (label.includes("notes") || label.includes("unit")) return "bg-green-600";
                                            if (label.includes("syllabus")) return "bg-blue-600";
                                            return "bg-gray-600";
                                        };

                                        return (
                                            <motion.div
                                                key={unitIndex}
                                                initial={{ opacity: 0, x: 30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: unitIndex * 0.1 }}
                                                className="flex items-center space-x-3"
                                            >
                                                {/* PDF Icon */}
                                                <FileText className="w-5 h-5 text-red-500 shrink-0" />

                                                {/* Link + Badge */}
                                                <a
                                                    href={unit.file}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-400 hover:text-blue-600 text-lg transition-colors flex items-center space-x-2"
                                                >
                                                    <span>{unit.name}</span>

                                                    {/* Badge */}
                                                    <span
                                                        className={`text-xs text-white px-2 py-0.5 rounded-full ${getBadgeColor()}`}
                                                    >
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
                                            </motion.div>
                                        );
                                    })}
                                </div>


                            </motion.div>
                        ))}
                    </div>

                </motion.div>
            </div>
        </>
    );
};

export default SemesterNotesPage;
