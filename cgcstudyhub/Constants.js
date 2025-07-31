import Btechanimation from "./src/assets/Lottie/software engineer.json";
import Pharmaanimation from "./src/assets/Lottie/DOCTOR.json";

export const coursesData = [
  {
    id: "btech",  // Change 1 to "btech"
    title: "B.Tech",
    animation: Btechanimation,
  },
  {
    id: "pharma", // Change 2 to "pharma"
    title: "Pharmacy",
    animation: Pharmaanimation,
  },
  //   {
  //     id: 3,
  //     title: "MBA",
  //     description: "Master DSA with hands-on coding problems and solutions.",

  //   },
];
import CSEAnimation from "./src/assets/Lottie/coding.json";
import AIMLAnimation from "./src/assets/Lottie/Artificial intelligence Lottie Animation.json";
import AIDSAnimation from "./src/assets/Lottie/AI intelligence.json";
import ITAnimation from "./src/assets/Lottie/networking.json";
import ECEAnimation from "./src/assets/Lottie/Laptop.json";

export const btechCourses = [
  {
    id: "cse",
    name: "Computer Science & Engineering (CSE)",
    description: "Dive into programming, AI, and software development.",
    animation: CSEAnimation,
  },
  {
    id: "aiml",
    name: "Artificial Intelligence & Machine Learning (AIML)",
    description: "Master AI, neural networks, and data-driven intelligence.",
    animation: AIMLAnimation,
  },
  {
    id: "aids",
    name: "Artificial Intelligence & Data Science (AIDS)",
    description: "Explore AI and data science for real-world problem-solving.",
    animation: AIDSAnimation,
  },
  {
    id: "it",
    name: "Information Technology (IT)",
    description: "Learn networking, security, and modern IT systems.",
    animation: ITAnimation,
  },
  {
    id: "ece",
    name: "Electronics & Communication Engineering (ECE)",
    description: "Focus on circuits, communication, and embedded systems.",
    animation: ECEAnimation,
  },
];

// first semester notes

import math1 from "./src/assets/btech-cse/sem-1/math-1/unit1.pdf";
import CSE from "./src/assets/btech-cse/sem-1/PTU-Examination/5th sem btech ai ml syllabus.pdf";
import AIML from "./src/assets/btech-cse/sem-1/PTU-Examination/5th sem btech cse syllabus.pdf";
import AIDS from "./src/assets/btech-cse/sem-1/PTU-Examination/5th sem btech it syllabus.pdf";
import CD from "./src/assets/btech-cse/sem-1/PTU-Examination/2024 CD EXAM.pdf";
import pyq from "./src/assets/btech-cse/sem-1/math-1/M-1-2022.pdf";
import PYQ from "./src/assets/btech-cse/sem-1/math-1/MATH-1-2022.pdf";
// PHYSICS
import unit1 from "./src/assets/btech-cse/sem-1/PHYSICS/Sem1_PHY_1.pdf";
import unit2 from "./src/assets/btech-cse/sem-1/PHYSICS/Sem1_PHY_2.pdf";
import unit3 from "./src/assets/btech-cse/sem-1/PHYSICS/Sem1_PHY_3.pdf";
import unit4 from "./src/assets/btech-cse/sem-1/PHYSICS/Sem1_PHY_4.pdf";
import PhyPYQ from "./src/assets/btech-cse/sem-1/PHYSICS/PHY-2022.pdf";
// BEE
import BEEunit1 from "./src/assets/btech-cse/sem-1/BEE/BEE_Notes-1-104.pdf";
import BEEunit2 from "./src/assets/btech-cse/sem-1/BEE/BEE_Notes-104-154.pdf";
import BEEPYQ from "./src/assets/btech-cse/sem-1/BEE/BEE-2022.pdf";
//EGD
import EGDBOOK from "./src/assets/btech-cse/sem-1/EGD/EGD_Book.pdf";
import EGDPYQ from "./src/assets/btech-cse/sem-1/EGD/EGD-2022.pdf";

export const semester1Subjects = [
  {
    subject: "PTU-Examination",
    units: [
      { name: "2022 Paper ", file: CD },
      { name: "syllabus ", file: CSE },
      { name: "Syllabus 2", file: AIML },
      { name: "Syllabus 3", file: AIDS },
    ]
  },
  {
    subject: "Mathematics-I",
    units: [
      { name: "Unit 1", file: math1 },
      // { name: "Unit 2", file: "unit2.pdf" },
      { name: "PYQ", file: pyq },
      { name: "PYQ", file: PYQ },
      { name: "BOOK", file: "pyq.pdf" },
    ],
  },
  {
    subject: "Physics",
    units: [
      { name: "Unit 1", file: unit1 },
      { name: "Unit 2", file: unit2 },
      { name: "Unit 3", file: unit3 },
      { name: "Unit 4", file: unit4 },
      { name: "PYQ", file: PhyPYQ },

    ],
  },
  {
    subject: "BEE",
    units: [
      { name: "Unit 1", file: BEEunit1 },
      { name: "Unit 2", file: BEEunit2 },
      { name: "PYQ", file: BEEPYQ },

    ],
  }, {
    subject: "EGD",
    units: [
      { name: "BOOK", file: EGDBOOK },
      { name: "PYQ", file: EGDPYQ },

    ],
  },
];
