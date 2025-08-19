import React, { useEffect, Suspense, useState } from "react";
import { sem3Subjects, sem4Subjects } from "../../../../Constants";
import Navbar from "../../navbar/navbar";
import { ArrowLeft, FileText, ChevronUp, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ThirdSemester = () => {
  const navigate = useNavigate();

  const excludedSubjects = ["DOS", ""]; // add any subjects you don’t want

  {
    sem3Subjects
      .filter(subject => !excludedSubjects.includes(subject.subject))
      .map((subject, index) => (
        <SubjectBlock key={index} subject={subject} delay={index * 0.1} />
      ))
  }

  const sem3WithCOA = [
    ...sem3Subjects,
    sem4Subjects.find(sub => sub.subject === "COA") // 👈 only adds COA
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative pt-32">
        <div className="hidden md:block">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm md:text-base text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-all p-2 rounded-md"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Go Back</span>
          </button>
        </div>

        <motion.div
          className="flex flex-col items-center justify-start min-h-screen px-6 pb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold text-center text-black dark:text-white mb-16">
            Semester 3 Notes
          </h1>

          <div className="w-full max-w-4xl space-y-8">
            <Suspense fallback={<div className="text-white">Loading Notes...</div>}>
              {[...sem3Subjects, ...sem4Subjects.filter(sub => sub.subject === "COA")]
                .map((subject, index) => (
                  <SubjectBlock key={index} subject={subject} delay={index * 0.1} />
                ))}


            </Suspense>
          </div>
        </motion.div>
      </div>
    </>
  );
};

const SubjectBlock = ({ subject, delay }) => {
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isQBOpen, setIsQBOpen] = useState(false);
  const [islabOpen, setIslabOpen] = useState(false);
  //   const [isLetOpen , setIsLetOpen] = useState(false);
  const [isTOpen, setIsTOpen] = useState(false);
  const [isModuleOpen, setIsModuleOpen] = useState(false);
  const [openModuleUnits, setOpenModuleUnits] = useState({});

  const notes = subject.units.filter((unit) =>
    unit.name.toLowerCase().includes("unit") || unit.name.toLowerCase().includes("notes")
  );

  const Module = subject?.units?.filter((unit) =>
    unit.name.toLowerCase().includes("module")
  ) || [];

  const moduleGroups = Module.reduce((acc, unit) => {
    const name = unit.name.trim(); // e.g., "Module-1"
    if (!acc[name]) acc[name] = [];
    acc[name].push(unit);
    return acc;
  }, {});

  const questionBank = subject.units.filter((unit) =>
    unit.name.toLowerCase().includes("question")
  );
  const labManual = subject.units.filter((unit) =>
    unit.name.toLowerCase().includes("labmanual")
  );
  const topic = subject.units.filter((unit) =>
    unit.name.toLowerCase().includes("topic")
  );

  const others = subject.units.filter(
    (unit) =>
      !unit.name.toLowerCase().includes("unit") &&
      !unit.name.toLowerCase().includes("notes") &&
      !unit.name.toLowerCase().includes("theories") &&
      !unit.name.toLowerCase().includes("question") &&
      !unit.name.toLowerCase().includes("short-ans") &&
      !unit.name.toLowerCase().includes("labmanual") &&
      !unit.name.toLowerCase().includes("letter") &&
      !unit.name.toLowerCase().includes("topic") &&
      !unit.name.toLowerCase().includes("module")
  );

  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4 border-b border-gray-500 pb-2">
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
            className="flex items-center justify-between  text-left text-black dark:text-white px-2 py-2  rounded-md hover:bg-white/20 transition"
          >
            <span className="text-lg font-semibold text-black dark:text-white">Notes</span>
            {isNotesOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>

          {isNotesOpen && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 ml-2">
              {notes.map((unit, unitIndex) => (
                <UnitLink key={unitIndex} unit={unit} delay={unitIndex * 0.05} />
              ))}
            </div>
          )}
        </div>
      )}
      {Object.keys(moduleGroups).length > 0 && (
        <div className="mt-6">
          <button
            onClick={() => {
              setIsModuleOpen((prev) => {
                const newState = !prev;
                if (!newState) {
                  // Reset all open child modules when closing parent
                  setOpenModuleUnits({});
                }
                return newState;
              });
            }}

            className="flex items-center justify-between text-left text-black dark:text-white px-2 py-2 rounded-md hover:bg-white/20 transition"
          >
            <span className="text-lg font-semibold">Modules</span>
            {isModuleOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>

          {isModuleOpen && (
            <div className="mt-2 space-y-5 ml-4 ">
              {Object.keys(moduleGroups).map((moduleName, idx) => (
                <div key={idx}>
                  <button
                    onClick={() =>
                      setOpenModuleUnits((prev) => ({
                        ...prev,
                        [moduleName]: !prev[moduleName],
                      }))
                    }
                    className="flex items-center justify-between w-28 text-left  text-black dark:text-white px-2 py-1 rounded-md hover:bg-white/10 transition "
                  >
                    <span className="text-base font-medium">{moduleName}</span>
                    {openModuleUnits[moduleName] ? (
                      <ChevronUp className="w-4 h-4 group-hover:hidden" />
                    ) : (
                      <ChevronDown className="w-4 h-4 group-hover:hidden" />
                    )}
                    <ChevronDown className="w-4 h-4 hidden group-hover:block absolute right-2" />
                  </button>

                  {openModuleUnits[moduleName] && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2 ml-4">
                      {moduleGroups[moduleName].map((unit, i) => (
                        <UnitLink key={i} unit={unit} delay={i * 0.05} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}



      {questionBank.length > 0 && (
        <div className="mt-6">
          <button
            onClick={() => setIsQBOpen(!isQBOpen)}
            className="flex items-center justify-between text-left text-black dark:text-white px-2 py-2 rounded-md hover:bg-white/20 transition"
          >
            <span className="text-lg font-semibold text-black dark:text-white">Question Bank</span>
            {isQBOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>

          {isQBOpen && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 ml-2">
              {questionBank.map((unit, unitIndex) => (
                <UnitLink key={unitIndex} unit={unit} delay={unitIndex * 0.05} />
              ))}
            </div>
          )}
        </div>
      )}
      {labManual.length > 0 && (
        <div className="mt-6">
          <button
            onClick={() => setIslabOpen(!islabOpen)}
            className="flex items-center justify-between text-left text-white px-2 py-2 rounded-md hover:bg-white/20 transition"
          >
            <span className="text-lg font-semibold text-black dark:text-white">Lab Manual</span>
            {islabOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>

          {islabOpen && (
            <div className="grid grid-cols-1 sm:grid-cols-3    gap-4 mt-4 ml-2">
              {labManual.map((unit, unitIndex) => (
                <UnitLink key={unitIndex} unit={unit} delay={unitIndex * 0.05} />
              ))}
            </div>
          )}
        </div>
      )}
      {topic.length > 0 && (
        <div className="mt-6">
          <button
            onClick={() => setIsTOpen(!isTOpen)}
            className="flex items-center justify-between text-left text-black dark:text-white px-2 py-2 rounded-md hover:bg-white/20 transition"
          >
            <span className="text-lg font-semibold text-black dark:text-white">TOPICS</span>
            {isTOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>

          {isTOpen && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 ml-2">
              {topic.map((unit, unitIndex) => (
                <UnitLink key={unitIndex} unit={unit} delay={unitIndex * 0.05} />
              ))}
            </div>
          )}
        </div>
      )}

    </motion.div>
  );
};

const UnitLink = ({ unit, delay }) => {
  const label = unit.name.toLowerCase();
  const isPPT = unit.file.endsWith(".ppt") || unit.file.endsWith(".pptx");


  const getBadgeColor = () => {
    if (label.includes("pyq")) return "bg-yellow-600";
    if (label.includes("book")) return "bg-purple-600";
    if (label.includes("notes") || label.includes("unit")) return "bg-green-600";
    if (label.includes("syllabus")) return "bg-blue-600";
    if (label.includes("imp")) return "bg-red-600";
    return "bg-gray-600";
  };


  return (
    <motion.div
      className="flex items-center space-x-3"
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
    >
      <div className="flex item-center space-x-3">
        <FileText className="w-5 h-5 text-red-500 shrink-0" />
        <a
          href={unit.file}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 text-lg transition-colors flex items-center space-x-2"
        >
          <span>{unit.displayName || unit.name}</span>
          <span className={`text-xs text-white px-2 py-0.5 rounded-full ${getBadgeColor()}`}>
            {label.includes("pyq")
              ? "PYQ"
              : label.includes("imp")
                ? "IMP"
                : label.includes("book")
                  ? "Book"
                  : label.includes("lords")
                    ? "Lords"
                    : label.includes("theories") || label.includes("short-ans")
                      ? "Theory"
                      : label.includes("notes") || label.includes("unit")
                        ? "Notes"
                        : label.includes("syllabus")
                          ? "Syllabus"
                          : label.includes("PPT")
                            ? "PPT"
                            : label.includes("book")
                              ? "Book"
                              : label.includes("lords")
                                ? "Lords"
                                : label.includes("theories") || label.includes("short-ans")
                                  ? "Theory"
                                  : label.includes("notes") || label.includes("unit")
                                    ? "Notes"
                                    : label.includes("syllabus")
                                      ? "Syllabus"
                                      : "PDF"}
          </span>
        </a>
      </div>

      {/* ✅ Embed PPT if it's a .ppt or .pptx file */}
      {isPPT && unit.file.startsWith("http") && (
        <iframe
          src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(unit.file)}`}
          width="100%"
          height="400"
          frameBorder="0"
          title={unit.name}
          className="rounded-md border mt-2"
        />
      )}
    </motion.div>
  );
};
export default ThirdSemester;
