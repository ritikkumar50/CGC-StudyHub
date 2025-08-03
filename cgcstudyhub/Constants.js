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
// import EGDBOOK from "./src/assets/btech-cse/sem-1/EGD/EGD_Book.pdf";
// import EGDPYQ from "./src/assets/btech-cse/sem-1/EGD/EGD-2022.pdf";
// const EGDBOOK = "./public/!st-Sem/EGD/EGD_Book.pdf";
const EGDPYQ = "./public/!st-Sem/EGD/EGD-2022.pdf";

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
      // { name: "BOOK", file: EGDBOOK },
      { name: "PYQ", file: "./public/!st-Sem/EGD/EGD-2022.pdf "},

    ],
  },
];
//2nd sem files 
import CHEMBOOK from "./src/assets/btech-cse/sem-2/CHEM/Book - Engineering chemistry SK Bhasin.pdf";
import CHEMUNIT1 from "./src/assets/btech-cse/sem-2/CHEM/Atomic Structures(1) (1).pdf";
import CHEMUNIT2 from "./src/assets/btech-cse/sem-2/CHEM/Spectroscopy-compressed.pdf";
import CHEMUNIT3 from "./src/assets/btech-cse/sem-2/CHEM/UNIT-3.pdf";
import CHEMUNIT4 from "./src/assets/btech-cse/sem-2/CHEM/FREE ENERGY ,WATER CHEMISTRY, CORROSION.pdf";
import CHEMUNIT5 from "./src/assets/btech-cse/sem-2/CHEM/Periodicity.pdf";
import CHEMUNIT6 from "./src/assets/btech-cse/sem-2/CHEM/Stereochemistry.pdf";
import CHEMUNIT7 from "./src/assets/btech-cse/sem-2/CHEM/UNIT-7.pdf";
import ORGANIC from "./src/assets/btech-cse/sem-2/CHEM/ORGANIC CHEMISTRY.pptx";
// Question bank 
import questionBank from "./src/assets/btech-cse/sem-2/CHEM/Question-bank.pdf";
import questionBank2 from "./src/assets/btech-cse/sem-2/CHEM/Short-Answer.pdf";
import questionBank3 from "./src/assets/btech-cse/sem-2/CHEM/Theories.pdf";
//m-2
// import Book from "./src/assets/btech-cse/sem-2/M-2/Book.pdf";
//english
import Article from "./src/assets/btech-cse/sem-2/ENG/Articles.pdf";
import BussinessMail from "./src/assets/btech-cse/sem-2/ENG/Business Emails.pdf";
import Cliches from "./src/assets/btech-cse/sem-2/ENG/Cliches.pdf";
import ComplaintLetter from "./src/assets/btech-cse/sem-2/ENG/Complaint Letter.pdf";
import Mechanism from "./src/assets/btech-cse/sem-2/ENG/Describing, Defining and Classifying.pdf";
import Prefix from "./src/assets/btech-cse/sem-2/ENG/English Notes on Prefixes, Suffixes,Antonyms, synonyms, Homonyms, Abbreviations.pdf";
import Notes from "./src/assets/btech-cse/sem-2/ENG/English_Notes.pdf";
import Modifiers from "./src/assets/btech-cse/sem-2/ENG/Misplaced Modifiers- Notes & QA.pdf";
import Noun from "./src/assets/btech-cse/sem-2/ENG/Noun Pronoun Agreement.pdf";
import Precis from "./src/assets/btech-cse/sem-2/ENG/Precis writing.pdf";
import PurcahseOrder from "./src/assets/btech-cse/sem-2/ENG/Purchase Order.pdf";
import ReportWirtting from "./src/assets/btech-cse/sem-2/ENG/Report Writing.pdf";
import SalesLetter from "./src/assets/btech-cse/sem-2/ENG/SALES LETTER.pdf";
import Lab from "./src/assets/btech-cse/sem-2/ENG/English_File.pdf";
import Lab2 from "./src/assets/btech-cse/sem-2/ENG/PRACTICAL Interviews.pdf";
import questionbankeng from "./src/assets/btech-cse/sem-2/ENG/English_Question_Bank.pdf";
//Workshop
import labManual from "./src/assets/btech-cse/sem-2/Workshop/WorkshopFile.pdf";
import labViva from "./src/assets/btech-cse/sem-2/Workshop/Workshop_Imp_Viva_Questions.pdf";
//PPS
import PPSUNIT1 from "./src/assets/btech-cse/sem-2/PPS/UNIT-1.pdf";
import PPSUNIT3 from "./src/assets/btech-cse/sem-2/PPS/UNIT-3.pdf";
import PPSUNIT4 from "./src/assets/btech-cse/sem-2/PPS/UNIT-4.pdf";
import PPSUNIT6 from "./src/assets/btech-cse/sem-2/PPS/Unit-6.pdf";
import PPSUNIT7 from "./src/assets/btech-cse/sem-2/PPS/UNIT-7.pdf";
import PPSUNIT8 from "./src/assets/btech-cse/sem-2/PPS/UNIT-8.pdf";
import PPSUNIT9 from "./src/assets/btech-cse/sem-2/PPS/UNIT-9.pdf";
import BOOK from "./src/assets/btech-cse/sem-2/PPS/PpsBook.pdf";
import LabManual from "./src/assets/btech-cse/sem-2/PPS/PpsFile.pdf";
export const sem2Subjects = [

  {
    subject: "CHEMISTRY",
    units: [
      { name: "BOOK", file: CHEMBOOK },
      // { name: "PYQ", file: CHEMISTRYPYQ },
      { name: "Unit-1", file: CHEMUNIT1 },
      { name: "Unit-2", file: CHEMUNIT2 },
      { name: "Unit-3", file: CHEMUNIT3 },
      { name: "Unit-4", file: CHEMUNIT4 },
      { name: "Unit-5", file: CHEMUNIT5 },
      { name: "Unit-6", file: CHEMUNIT6 },
      { name: "Unit-7", file: CHEMUNIT7 },
      { name: "orgainic Chemistry (PPT)", file: ORGANIC },
      { name: "Question Bank1", file: questionBank },
      { name: "Short-Ans", file: questionBank2 },
      { name: "Theories", file: questionBank3 },
    ],

  },
  {
    subject: "ENGLISH",
    units: [
      { name: "Article Notes", file: Article },
      { name: "Bussiness Letter", file: BussinessMail },
      { name: "Cliches Notes", file: Cliches },
      { name: "Complaint Letter", file: ComplaintLetter },
      { name: "Mechanism Notes", file: Mechanism },
      { name: "Prefix Notes", file: Prefix },
      { name: "Notes", file: Notes },
      { name: "Modifiers Notes", file: Modifiers },
      { name: "Noun Notes", file: Noun },
      { name: "Precis Notes", file: Precis },
      { name: "PurcahseOrder Letter", file: PurcahseOrder },
      { name: "Report Wirtting Letter", file: ReportWirtting },
      { name: "SalesLetter", file: SalesLetter },
      { name: "LabManual", file: Lab },
      { name: "LabManual2", file: Lab2 },
      { name: "Question bank", file: questionbankeng },

    ]
  },
  {
    subject: "M-2",
    units: [
      // {name:"BOOK", file: Book}

    ]
  },
  {
    subject: "PPS",
    units: [
       {name:"Unit-1", file:PPSUNIT1},
       {name:"Unit-3", file:PPSUNIT3},
       {name:"Unit-4", file:PPSUNIT4},
       {name:"Unit-6", file:PPSUNIT6},
       {name:"Unit-7", file:PPSUNIT7},
       {name:"Unit-8", file:PPSUNIT8},
       {name:"Unit-9", file:PPSUNIT9},
       {name:"LabManual", file:LabManual},
       {name:"BOOK", file:BOOK},

    ]
  },
  {
    subject: "WorkShop",
    units: [
       {name:"Lab Manual", file:labManual},
       {name:"Lab (viva)" , file:labViva},
    ]
  },
]
//3rd semester
import OOPSUNIT1 from "./src/assets/btech-cse/sem-3/OOPS/UNIT-1.pdf";
import OOPSUNIT2 from "./src/assets/btech-cse/sem-3/OOPS/UNIT-2.pdf";
import OOPSUNIT3 from "./src/assets/btech-cse/sem-3/OOPS/UNIT-3.pdf";
import OOPSUNIT4 from "./src/assets/btech-cse/sem-3/OOPS/UNIT-4.pdf";
import OOPSUNIT5 from "./src/assets/btech-cse/sem-3/OOPS/UNIT-5.pdf";
import OOPSlabManual from "./src/assets/btech-cse/sem-3/OOPS/oops lab.pdf";
//DE
import Notes1 from "./src/assets/btech-cse/sem-3/DE/Class DE L3 1.9.2021.pdf";
import Notes2 from "./src/assets/btech-cse/sem-3/DE/Class DE L3 3.9.2021.pdf";
import Notes3 from "./src/assets/btech-cse/sem-3/DE/Class DE L4 4.9.2021.pdf";
import Notes4 from "./src/assets/btech-cse/sem-3/DE/Class DE L6 9.9.2021.pdf";
import Notes5 from "./src/assets/btech-cse/sem-3/DE/Class DE L7 10.9.2021.pdf";
import Notes6 from "./src/assets/btech-cse/sem-3/DE/Class DE L8 13.9.2021.pdf";
import Notes7 from "./src/assets/btech-cse/sem-3/DE/Class DE L9 16.9.2021.pdf";
import Notes8 from "./src/assets/btech-cse/sem-3/DE/Class DE L9 17.9.2021.pdf";
import Notes9 from "./src/assets/btech-cse/sem-3/DE/Class DE L11 20.9.2021.pdf";
import Notes10 from "./src/assets/btech-cse/sem-3/DE/Class DE L12 23.9.2021.pdf";
import Notes11 from "./src/assets/btech-cse/sem-3/DE/Class DE L14 28.9.2021.pdf";
import Notes12 from "./src/assets/btech-cse/sem-3/DE/Class DE L15 30.9.2021 (1).pdf";
import Notes13 from "./src/assets/btech-cse/sem-3/DE/Class DE L16 5.10.2021.pdf";
import Notes14 from "./src/assets/btech-cse/sem-3/DE/L DE 31.8.2021.pdf";
//DOS
import IMP from "./src/assets/btech-cse/sem-3/DOS/IMP_question.pdf";
import Topic1 from "./src/assets/btech-cse/sem-3/DOS/capitalism.pdf";
import Topic2 from "./src/assets/btech-cse/sem-3/DOS/buddhist economist.pdf";
import Topic3 from "./src/assets/btech-cse/sem-3/DOS/Economic Activities PDF.pdf";
import Topic4 from "./src/assets/btech-cse/sem-3/DOS/economic development.pdf";
import Topic5 from "./src/assets/btech-cse/sem-3/DOS/ECONOMIC INSTITUTION PDF.pdf";
import Topic6 from "./src/assets/btech-cse/sem-3/DOS/socialism marxism.pdf";
import Topic7 from "./src/assets/btech-cse/sem-3/DOS/TypesofGovernment.pdf";
import Topic8 from "./src/assets/btech-cse/sem-3/DOS/What is Socialism.pdf";
import question from "./src/assets/btech-cse/sem-3/DOS/IMP_question.pdf";
import question2 from "./src/assets/btech-cse/sem-3/DOS/IMPORTANT QUESTION OF 3RD UNIT 4 MARKS.pdf";
import DOSBOOK from  "./src/assets/btech-cse/sem-3/DOS/PDF_BOOK 1.pdf";
//dsa
import Module1 from "./src/assets/btech-cse/sem-3/DSA/DS MODULE 1_merged.pdf";
import Module2 from "./src/assets/btech-cse/sem-3/DSA/Module2.pdf";
import Module3 from "./src/assets/btech-cse/sem-3/DSA/Module3.pdf";
import Module4 from "./src/assets/btech-cse/sem-3/DSA/Module4.pdf";
import Module5 from "./src/assets/btech-cse/sem-3/DSA/Module5.pdf";
import Question from "./src/assets/btech-cse/sem-3/DSA/DS JAN 2021.pdf";
import Question2 from "./src/assets/btech-cse/sem-3/DSA/DS PTU SOLVED PAPERS.pdf";
import DSALab from "./src/assets/btech-cse/sem-3/DSA/DS_File.pdf";

export const sem3Subjects = [

  {
    subject : "OOPS",
    units :[
      {name:"Unit-1", file:OOPSUNIT1},
      {name:"Unit-2", file:OOPSUNIT2},
      {name:"Unit-3", file:OOPSUNIT3},
      {name:"Unit-4", file:OOPSUNIT4},
      {name:"Unit-5", file:OOPSUNIT5},
      {name:"LabManual", file:OOPSlabManual},
    ],
  },
 {
  subject:"DE",
  units:[
     {name:"Notes-1", file:Notes1},
     {name:"Notes-2", file:Notes2},
     {name:"Notes-3", file:Notes3},
     {name:"Notes-4", file:Notes4},
     {name:"Notes-5", file:Notes5},
     {name:"Notes-6", file:Notes6},
     {name:"Notes-7", file:Notes7},
     {name:"Notes-8", file:Notes8},
     {name:"Notes-9", file:Notes9},
     {name:"Notes-10", file:Notes10},
     {name:"Notes-11", file:Notes11},
     {name:"Notes-12", file:Notes12},
     {name:"Notes-13", file:Notes13},
     {name:"Notes-14", file:Notes14},
  ],
 },
 {
  subject:"DOS",
  units:[
     {name:"Imp Questions", file:IMP},
     {name:"capitalism-Topic", file:Topic1},
     {name:"buddhist economist-Topic", file:Topic2},
     {name:"Economic Activities-Topic", file:Topic3},
     {name:"economic development-Topic", file:Topic4},
     {name:"ECONOMIC INSTITUTION-Topic", file:Topic5},
     {name:"socialism marxism-Topic", file:Topic6},
     {name:"TypesofGovernment-Topic", file:Topic7},
     {name:"Socialism-topic", file:Topic8},
     {name:"QuestionBank", file:question},
     {name:"QuestionBank2", file:question2},
     {name:"BOOK", file:DOSBOOK},
  ],
 },
 {
    subject:"DSA",
    units:[
       {name:"Unit-1", file:Module1},
       {name:"Unit-2", file:Module2},
       {name:"Unit-3", file:Module3},
       {name:"Unit-4", file:Module4},
       {name:"Unit-5", file:Module5},
       {name:"PYQ", file:Question},
       {name:"PYQ(solved)", file:Question2},
       {name:"LabManual", file:DSALab}
    ],
 },


]