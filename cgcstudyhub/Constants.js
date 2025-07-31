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

export const semester1Subjects = [
  {
    subject: "Mathematics-I",
    units: [
      { name: "Unit 1", file: "unit1.pdf" },
      // { name: "Unit 2", file: "unit2.pdf" },
      // { name: "PYQ", file: "pyq.pdf" },
    ],
  },
  // {
  //   subject: "Physics",
  //   units: [
  //     { name: "Unit 1", file: "unit1.pdf" },
  //     { name: "Unit 2", file: "unit2.pdf" },
  //   ],
  // },
  // Add more subjects...
];
