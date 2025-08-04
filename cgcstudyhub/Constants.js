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

const math1 = "./src/assets/btech-cse/sem-1/math-1/unit1.pdf";
const CSE = "./src/assets/btech-cse/sem-1/PTU-Examination/5th sem btech ai ml syllabus.pdf";
const AIML = "./src/assets/btech-cse/sem-1/PTU-Examination/5th sem btech cse syllabus.pdf";
const AIDS = "./src/assets/btech-cse/sem-1/PTU-Examination/5th sem btech it syllabus.pdf";
const CD = "./src/assets/btech-cse/sem-1/PTU-Examination/2024 CD EXAM.pdf";
const pyq = "./src/assets/btech-cse/sem-1/math-1/M-1-2022.pdf";
const PYQ = "./src/assets/btech-cse/sem-1/math-1/MATH-1-2022.pdf";
// PHYSICS
const unit1 = "https://drive.google.com/file/d/1CITsUZ-WCd3VL9c--On7BcOMOZXSYHYM/view?usp=sharing";
const unit2 = "https://drive.google.com/file/d/1OcYLaBqQ7YDfCIvoYRem9uDuVNCTyZQs/view?usp=sharing";
const unit3 = "https://drive.google.com/file/d/1VHAJLvGQcf4GeJ5XDi17Bxhszoz-KVqB/view?usp=sharing";
const unit4 = "https://drive.google.com/file/d/1aHVqaLOoKJyPtWTsOlppWhlU-gqwrQrT/view?usp=sharing";
const PhyPYQ = "https://drive.google.com/file/d/1ROVq_jQpQ2FYUekuhb0NmQqLfhu_nkpB/view?usp=sharing";
// BEE
const BEEunit1 = "https://drive.google.com/file/d/1t_fXA3029mFoPeRgaKJ0wuuzoHeLqfBZ/view?usp=sharing";
const BEEunit2 = "https://drive.google.com/file/d/1YgrAjfZl5-yE3m9uK55jLCrtTt_Q2qJj/view?usp=sharing";
const BEEPYQ = "https://drive.google.com/file/d/1kO2fQTsr2NYxofyaPaLHnDFYgVUfNyeb/view?usp=sharing";
//EGD
// const EGDBOOK = "./src/assets/btech-cse/sem-1/EGD/EGD_Book.pdf";
// const EGDPYQ = "./src/assets/btech-cse/sem-1/EGD/EGD-2022.pdf";
const EGDBOOK = "https://drive.google.com/file/d/1FyYMKOWy4YQ39az4mKYigVuzpJ6uIJve/view?usp=sharing";
const EGDPYQ = "https://drive.google.com/file/d/1WDZcenY3hAy3gck2A1-0JPyFHN3JUx-z/view?usp=sharing";

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
      { name: "BOOK", file:"/1st-Sem/EGD/EGD_Book.pdf" },
      { name: "PYQ", file: "/1st-Sem/EGD/EGD_2022.pdf" },

    ],
  },
];
//2nd sem files 
const CHEMBOOK = "./src/assets/btech-cse/sem-2/CHEM/Book - Engineering chemistry SK Bhasin.pdf";
const CHEMUNIT1 = "./src/assets/btech-cse/sem-2/CHEM/Atomic Structures(1) (1).pdf";
const CHEMUNIT2 = "./src/assets/btech-cse/sem-2/CHEM/Spectroscopy-compressed.pdf";
const CHEMUNIT3 = "./src/assets/btech-cse/sem-2/CHEM/UNIT-3.pdf";
const CHEMUNIT4 = "./src/assets/btech-cse/sem-2/CHEM/FREE ENERGY ,WATER CHEMISTRY, CORROSION.pdf";
const CHEMUNIT5 = "./src/assets/btech-cse/sem-2/CHEM/Periodicity.pdf";
const CHEMUNIT6 = "./src/assets/btech-cse/sem-2/CHEM/Stereochemistry.pdf";
const CHEMUNIT7 = "./src/assets/btech-cse/sem-2/CHEM/UNIT-7.pdf";
const ORGANIC = "./src/assets/btech-cse/sem-2/CHEM/ORGANIC CHEMISTRY.pptx";
// Question bank 
const questionBank = "./src/assets/btech-cse/sem-2/CHEM/Question-bank.pdf";
const questionBank2 = "./src/assets/btech-cse/sem-2/CHEM/Short-Answer.pdf";
const questionBank3 = "./src/assets/btech-cse/sem-2/CHEM/Theories.pdf";
//m-2
// const Book = "./src/assets/btech-cse/sem-2/M-2/Book.pdf";
//english
const Article = "./src/assets/btech-cse/sem-2/ENG/Articles.pdf";
const BussinessMail = "./src/assets/btech-cse/sem-2/ENG/Business Emails.pdf";
const Cliches = "./src/assets/btech-cse/sem-2/ENG/Cliches.pdf";
const ComplaintLetter = "./src/assets/btech-cse/sem-2/ENG/Complaint Letter.pdf";
const Mechanism = "./src/assets/btech-cse/sem-2/ENG/Describing, Defining and Classifying.pdf";
const Prefix = "./src/assets/btech-cse/sem-2/ENG/English Notes on Prefixes, Suffixes,Antonyms, synonyms, Homonyms, Abbreviations.pdf";
const Notes = "./src/assets/btech-cse/sem-2/ENG/English_Notes.pdf";
const Modifiers = "./src/assets/btech-cse/sem-2/ENG/Misplaced Modifiers- Notes & QA.pdf";
const Noun = "./src/assets/btech-cse/sem-2/ENG/Noun Pronoun Agreement.pdf";
const Precis = "./src/assets/btech-cse/sem-2/ENG/Precis writing.pdf";
const PurcahseOrder = "./src/assets/btech-cse/sem-2/ENG/Purchase Order.pdf";
const ReportWirtting = "./src/assets/btech-cse/sem-2/ENG/Report Writing.pdf";
const SalesLetter = "./src/assets/btech-cse/sem-2/ENG/SALES LETTER.pdf";
const Lab = "./src/assets/btech-cse/sem-2/ENG/English_File.pdf";
const Lab2 = "./src/assets/btech-cse/sem-2/ENG/PRACTICAL Interviews.pdf";
const questionbankeng = "./src/assets/btech-cse/sem-2/ENG/English_Question_Bank.pdf";
//Workshop
const labManual = "./src/assets/btech-cse/sem-2/Workshop/WorkshopFile.pdf";
const labViva = "./src/assets/btech-cse/sem-2/Workshop/Workshop_Imp_Viva_Questions.pdf";
//PPS
const PPSUNIT1 = "./src/assets/btech-cse/sem-2/PPS/UNIT-1.pdf";
const PPSUNIT3 = "./src/assets/btech-cse/sem-2/PPS/UNIT-3.pdf";
const PPSUNIT4 = "./src/assets/btech-cse/sem-2/PPS/UNIT-4.pdf";
const PPSUNIT6 = "./src/assets/btech-cse/sem-2/PPS/Unit-6.pdf";
const PPSUNIT7 = "./src/assets/btech-cse/sem-2/PPS/UNIT-7.pdf";
const PPSUNIT8 = "./src/assets/btech-cse/sem-2/PPS/UNIT-8.pdf";
const PPSUNIT9 = "./src/assets/btech-cse/sem-2/PPS/UNIT-9.pdf";
const BOOK = "./src/assets/btech-cse/sem-2/PPS/PpsBook.pdf";
const LabManual = "./src/assets/btech-cse/sem-2/PPS/PpsFile.pdf";
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
const OOPSUNIT1 = "./src/assets/btech-cse/sem-3/OOPS/UNIT-1.pdf";
const OOPSUNIT2 = "./src/assets/btech-cse/sem-3/OOPS/UNIT-2.pdf";
const OOPSUNIT3 = "./src/assets/btech-cse/sem-3/OOPS/UNIT-3.pdf";
const OOPSUNIT4 = "./src/assets/btech-cse/sem-3/OOPS/UNIT-4.pdf";
const OOPSUNIT5 = "./src/assets/btech-cse/sem-3/OOPS/UNIT-5.pdf";
const OOPSlabManual = "./src/assets/btech-cse/sem-3/OOPS/oops lab.pdf";
//DE
const Notes1 = "./src/assets/btech-cse/sem-3/DE/Class DE L3 1.9.2021.pdf";
const Notes2 = "./src/assets/btech-cse/sem-3/DE/Class DE L3 3.9.2021.pdf";
const Notes3 = "./src/assets/btech-cse/sem-3/DE/Class DE L4 4.9.2021.pdf";
const Notes4 = "./src/assets/btech-cse/sem-3/DE/Class DE L6 9.9.2021.pdf";
const Notes5 = "./src/assets/btech-cse/sem-3/DE/Class DE L7 10.9.2021.pdf";
const Notes6 = "./src/assets/btech-cse/sem-3/DE/Class DE L8 13.9.2021.pdf";
const Notes7 = "./src/assets/btech-cse/sem-3/DE/Class DE L9 16.9.2021.pdf";
const Notes8 = "./src/assets/btech-cse/sem-3/DE/Class DE L9 17.9.2021.pdf";
const Notes9 = "./src/assets/btech-cse/sem-3/DE/Class DE L11 20.9.2021.pdf";
const Notes10 = "./src/assets/btech-cse/sem-3/DE/Class DE L12 23.9.2021.pdf";
const Notes11 = "./src/assets/btech-cse/sem-3/DE/Class DE L14 28.9.2021.pdf";
const Notes12 = "./src/assets/btech-cse/sem-3/DE/Class DE L15 30.9.2021 (1).pdf";
const Notes13 = "./src/assets/btech-cse/sem-3/DE/Class DE L16 5.10.2021.pdf";
const Notes14 = "./src/assets/btech-cse/sem-3/DE/L DE 31.8.2021.pdf";
//DOS
const IMP = "./src/assets/btech-cse/sem-3/DOS/IMP_question.pdf";
const Topic1 = "./src/assets/btech-cse/sem-3/DOS/capitalism.pdf";
const Topic2 = "./src/assets/btech-cse/sem-3/DOS/buddhist economist.pdf";
const Topic3 = "./src/assets/btech-cse/sem-3/DOS/Economic Activities PDF.pdf";
const Topic4 = "./src/assets/btech-cse/sem-3/DOS/economic development.pdf";
const Topic5 = "./src/assets/btech-cse/sem-3/DOS/ECONOMIC INSTITUTION PDF.pdf";
const Topic6 = "./src/assets/btech-cse/sem-3/DOS/socialism marxism.pdf";
const Topic7 = "./src/assets/btech-cse/sem-3/DOS/TypesofGovernment.pdf";
const Topic8 = "./src/assets/btech-cse/sem-3/DOS/What is Socialism.pdf";
const question = "./src/assets/btech-cse/sem-3/DOS/IMP_question.pdf";
const question2 = "./src/assets/btech-cse/sem-3/DOS/IMPORTANT QUESTION OF 3RD UNIT 4 MARKS.pdf";
const DOSBOOK =  "./src/assets/btech-cse/sem-3/DOS/PDF_BOOK 1.pdf";
//dsa
const Module1 = "./src/assets/btech-cse/sem-3/DSA/DS MODULE 1_merged.pdf";
const Module2 = "./src/assets/btech-cse/sem-3/DSA/Module2.pdf";
const Module3 = "./src/assets/btech-cse/sem-3/DSA/Module3.pdf";
const Module4 = "./src/assets/btech-cse/sem-3/DSA/Module4.pdf";
const Module5 = "./src/assets/btech-cse/sem-3/DSA/Module5.pdf";
const Question = "./src/assets/btech-cse/sem-3/DSA/DS JAN 2021.pdf";
const Question2 = "./src/assets/btech-cse/sem-3/DSA/DS PTU SOLVED PAPERS.pdf";
const DSALab = "./src/assets/btech-cse/sem-3/DSA/DS_File.pdf";

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