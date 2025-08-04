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

const math1 = "https://drive.google.com/file/d/1HqcfI6nsrG2qSzsMsZdNeLoZIHzGMu_k/view?usp=sharing";
const CSE = "./src/assets/btech-cse/sem-1/PTU-Examination/5th sem btech ai ml syllabus.pdf";
const AIML = "./src/assets/btech-cse/sem-1/PTU-Examination/5th sem btech cse syllabus.pdf";
const AIDS = "./src/assets/btech-cse/sem-1/PTU-Examination/5th sem btech it syllabus.pdf";
const CD = "./src/assets/btech-cse/sem-1/PTU-Examination/2024 CD EXAM.pdf";
const pyq = "https://drive.google.com/file/d/1m20ru7TXOWdkoVvhw6EEwu3vee7gw-qU/view?usp=sharing";
const PYQ = "https://drive.google.com/file/d/14Ng-lHIemC5QX3g4lGDlElq5sIs4paIU/view?usp=sharing";
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
const CHEMBOOK = "https://drive.google.com/file/d/1DHA63mqcVeiM8b9uu5_Y87tBtSGhnWgG/view?usp=sharing";
const CHEMUNIT1 = "https://drive.google.com/file/d/1jdcJFeW9GHSdGRAyqY7Zx22G6lgeiq6l/view?usp=sharing";
const CHEMUNIT2 = "https://drive.google.com/file/d/1zc58g-nqbvcoUk1sPkRBrUsXHsS00c9R/view?usp=sharing";
const CHEMUNIT3 = "https://drive.google.com/file/d/1xu6NyImEfe5M8ZqgC6DcQM_jKJyF1Jct/view?usp=sharing";
const CHEMUNIT4 = "https://drive.google.com/file/d/1Vtmlx1Kyp0e9kEDaFmVrWUXE_7lfEX1L/view?usp=sharing";
const CHEMUNIT5 = "https://drive.google.com/file/d/1myQa8KCAFPT8f3gUpVOfUB814XYRL6Fq/view?usp=sharing";
const CHEMUNIT6 = "https://drive.google.com/file/d/1wlf0I-rbUUjcAxmc8e0dSdshszIU6txL/view?usp=sharing";
const CHEMUNIT7 = "https://drive.google.com/file/d/1pCHlGwJM2jZHrU6amUhCNq9N7U6KzD4D/view?usp=sharing";
const ORGANIC = "https://docs.google.com/presentation/d/1e6knn_VVT9zbW8XS2rnEwuzZwv6S6rRK/edit?usp=sharing&ouid=109230584634916341705&rtpof=true&sd=true";
// Question bank 
const questionBank = "https://drive.google.com/file/d/1CCZ1Pc0yWhOgcgyljd95q1DurUrDwbIk/view?usp=sharing";
const questionBank2 = "https://drive.google.com/file/d/1fvyfxLxKdmOxvSr3V1rmGZcAdRMeHaws/view?usp=sharing";
const questionBank3 = "https://drive.google.com/file/d/1basYG18W5aE0gJowKoKi0Tys-Y8Bl0EC/view?usp=sharing";
//m-2
// const Book = "./src/assets/btech-cse/sem-2/M-2/Book.pdf";
//english
const Article = "https://drive.google.com/file/d/1a-pamHmXVryPmvYgkBhfRQVh-3815HRY/view?usp=sharing";
const BussinessMail = "https://drive.google.com/file/d/1h7P2FYfjVOkg1OW2zhEyw1p7I910_-Hy/view?usp=sharing";
const Cliches = "https://drive.google.com/file/d/1O49pPJeWFLStl4jNFH6qCJeQcWo_eZD6/view?usp=sharing";
const ComplaintLetter = "https://drive.google.com/file/d/1Az9LrN63L6YIqknZIqXwOaqVhdqXnSf8/view?usp=sharing";
const Mechanism = "https://drive.google.com/file/d/1XOmkIZ3TNHDAwI0rcIhBZjXHGRkfT6Ek/view?usp=drive_linkā";
const Prefix = "https://drive.google.com/file/d/1p-TpguUJni7NI3bF0SDT0aAm8gD0pB78/view?usp=drive_link";
const Notes = "https://drive.google.com/file/d/1S8ncLDXQ3UKz8hSMGVtcgo3OwpVYSS2t/view?usp=drive_link";
const Modifiers = "https://drive.google.com/file/d/1iUUulUEjyzXyw54Jr5-dopNubcExGmsW/view?usp=drive_link";
const Noun = "https://drive.google.com/file/d/13AF-M_aheAXXiLjdJN4wyBBE3lGt7xp3/view?usp=drive_link";
const Precis = "https://drive.google.com/file/d/1FRuZNkbaQhx3gySXcN65nirxKQquptEQ/view?usp=drive_link";
const PurcahseOrder = "https://drive.google.com/file/d/1AUHV2OBay1eO6blUV6SoRWaT-PTVbHE6/view?usp=drive_link";
const ReportWirtting = "https://drive.google.com/file/d/156LnEdBdETcGZsfJeYO8i8sezkSzof-F/view?usp=drive_link";
const SalesLetter = "https://drive.google.com/file/d/1_l019X7XY3tgKU_ON8vMWKQMfF_lpAri/view?usp=drive_link";
const Lab = "https://drive.google.com/file/d/1n4WbnsSCSxSibXz-vJTyp4JYb0731nlI/view?usp=drive_link";
const Lab2 = "https://drive.google.com/file/d/16Sa8wD5IWJr-KquU5cuojTW90Zvm2vpA/view?usp=drive_link";
const questionbankeng = "https://drive.google.com/file/d/1Pip1V9IbW9cOTYzQN2E-7t7dYGgRbrtA/view?usp=drive_link";
//Workshop
const labManual = "https://drive.google.com/file/d/1fjjWz9m5GGixVwFnLSoHOXul1SGQCsyu/view?usp=sharing";
const labViva = "https://drive.google.com/file/d/1Rn9ZC7zgw1OtKkez0fs2gnYcvK1gzLUt/view?usp=sharing";
//PPS
const PPSUNIT1 = "https://drive.google.com/file/d/1fvn_BSg7UFROXhUz01Ol_DKUDmXse7Zi/view?usp=drive_link";
const PPSUNIT3 = "https://drive.google.com/file/d/1Z22LTb1wqGO5nlSbNzKaUglho5vFTEav/view?usp=drive_link";
const PPSUNIT4 = "https://drive.google.com/file/d/1xZgfi6IiRizCtjXn8cWDqKYtyuEiexNE/view?usp=drive_link";
const PPSUNIT6 = "https://drive.google.com/file/d/1KZxlG3AewCy7WMrt0KxQMFOB6hMDE91-/view?usp=drive_link";
const PPSUNIT7 = "https://drive.google.com/file/d/1PUdJ02bpKzeHy_HciheQntZwD18-7Gr3/view?usp=drive_link";
const PPSUNIT8 = "https://drive.google.com/file/d/1hRvLNd8Zq9AZAJCsHVHLPa5s8nXFAE3y/view?usp=drive_link";
const PPSUNIT9 = "https://drive.google.com/file/d/1I3qzICJq3zqioq1xaNpppg7VR7g7KS3Z/view?usp=drive_link";
const BOOK = "https://drive.google.com/file/d/1ALVxiWqzHT0ePIUHRWljwxo9cr_42s5J/view?usp=drive_link";
const LabManual = "https://drive.google.com/file/d/1dwKDVxjTZ6R5tKG5_fJgjifm5PWEZl5_/view?usp=drive_link";
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
const OOPSUNIT1 = "https://drive.google.com/file/d/1I5FVooLBatoWosXtJH75LUzPYE5d2Nkv/view?usp=drive_link";
const OOPSUNIT2 = "https://drive.google.com/file/d/10U2foDhD1VRZ-p5-3TSzNUd7flUfsFT_/view?usp=drive_link";
const OOPSUNIT3 = "https://drive.google.com/file/d/1LGhQ2zh5n1SUx1YCXcxdpRigyJZpvZca/view?usp=drive_link";
const OOPSUNIT4 = "https://drive.google.com/file/d/1ruB82HBydALVlt07xpN0ln1-UGbtmIrw/view?usp=drive_link";
const OOPSUNIT5 = "https://drive.google.com/file/d/1D4MWeWRpmbse5cfEb9oxBxSr0Q8OjPhr/view?usp=drive_link";
const OOPSlabManual = "https://drive.google.com/file/d/119umK-fh7HXykxlhkMSKeIG2M-7wPox9/view?usp=drive_link";
//DE
const Notes1 = "https://drive.google.com/file/d/1ZQ2ms75FeMSm_ES9hDsIhwxM6PgIwvdz/view?usp=drive_link";
const Notes2 = "https://drive.google.com/file/d/1UiHvPo6oCEltOcfPrwS70u7N8pkFN3zB/view?usp=drive_link";
const Notes3 = "https://drive.google.com/file/d/1h2MsntHsPZch14JrtQGda5nQxEfnVvRb/view?usp=drive_link";
const Notes4 = "https://drive.google.com/file/d/19tIUQ2oWGTNPp1SOrot0goHqJjuIpOP-/view?usp=drive_link";
const Notes5 = "https://drive.google.com/file/d/1UJIdAbwLDy_TmHCCX-1nG3-3OC0dmIwB/view?usp=drive_link";
const Notes6 = "https://drive.google.com/file/d/1n7TkOKy9bSx0RErZ0YOqsxaIIUtpF28Z/view?usp=drive_link";
const Notes7 = "https://drive.google.com/file/d/1Jrkdzr_GGcP1QEwqNjcvwzoQY0OZ5Raz/view?usp=drive_link";
const Notes8 = "https://drive.google.com/file/d/1rD3qsG7Hc_K2MP8x70mR-R6xcr1j6oEA/view?usp=drive_link";
const Notes9 = "https://drive.google.com/file/d/1cIyzofyx4YofUId9UaZ7CaApEAiJC1t2/view?usp=drive_link";
const Notes10 = "https://drive.google.com/file/d/1rPcFHh9fGFzCAuVtx_fR17JyiXqry0OD/view?usp=drive_link";
const Notes11 = "https://drive.google.com/file/d/1QKka_p7_r-i1O3ALgWQovLpaV2pRRDoY/view?usp=drive_link";
const Notes12 = "https://drive.google.com/file/d/130zlq7DRBTod0fWPiZoPmtxifRUWJDEe/view?usp=drive_link";
const Notes13 = "https://drive.google.com/file/d/1f5sclhCjPwjwa_JmlmIRRIfKCbz6ipr5/view?usp=drive_link";
const Notes14 = "https://drive.google.com/file/d/1UxD5QVQYt9oZr4VGqwLJUbgnTngjd-Ez/view?usp=drive_link";
//DOS
const IMP = "https://drive.google.com/file/d/1ZKs6mmAnnf6ViXZUnje_ny41dnMqocSy/view?usp=drive_link";
const Topic1 = "https://drive.google.com/file/d/1dd_pJwo_fWd3hft4urp8aluvs_HawOuM/view?usp=drive_link";
const Topic2 = "https://drive.google.com/file/d/1fOTA6GNbsKz2D-h04iOMm08bMHonUEqK/view?usp=drive_link";
const Topic3 = "https://drive.google.com/file/d/1DZoDIwu5OecQHUo1_7JNFvUk6bka5jdA/view?usp=drive_link";
const Topic4 = "https://drive.google.com/file/d/1s7iLWCeo0-gLJXu_tOloxmsMNqD3y8-k/view?usp=drive_link";
const Topic5 = "https://drive.google.com/file/d/1wMojx_9RKUTxVbdZqjuJmHm-1SLGgxIk/view?usp=drive_link";
const Topic6 = "https://drive.google.com/file/d/125dNXThD9xhYthCIk08jnO5wcR_Bqmy_/view?usp=drive_link";
const Topic7 = "https://drive.google.com/file/d/1tN1-2GylKe-4o9VwzXoT3nogPa5FmJrI/view?usp=drive_link";
const Topic8 = "https://drive.google.com/file/d/1PGEpLobWdYQZSVicvX-cj0hB6Avnz5yf/view?usp=drive_link";
const question = "https://drive.google.com/file/d/1ZKs6mmAnnf6ViXZUnje_ny41dnMqocSy/view?usp=drive_link";
const question2 = "https://drive.google.com/file/d/16obYK-Ik_UGug819PvJvy5U5Azs9sdzS/view?usp=drive_link";
const DOSBOOK =  "https://drive.google.com/file/d/1oIkhtdHsIS74NFDo63FRtOMQ6Hd5ItCp/view?usp=drive_link";
//dsa
const Module1 = "https://drive.google.com/file/d/1DAXPC418AO9GMuKIMdMSBH3iiTvSkqQw/view?usp=drive_link";
const Module2 = "https://drive.google.com/file/d/1_meXvhy2l98WRlr0Sp6kgvi4Ip5vjx1Y/view?usp=drive_link";
const Module3 = "https://drive.google.com/file/d/1zVmwzAjFyvVg0fxC2vq7uVyOmXtX-Lja/view?usp=drive_link";
const Module4 = "https://drive.google.com/file/d/1M_kO6PRq1ADkYZifJmN-Rts27Nh7rKcJ/view?usp=drive_link";
const Module5 = "https://drive.google.com/file/d/1P7Onz5poFvAZEesR5_pUpEj9EvW6fVWh/view?usp=drive_link";
const Question = "https://drive.google.com/file/d/1BRkiK8IrMiP9M3kyaqp-r3JFUdRuuknh/view?usp=drive_link";
const Question2 = "https://drive.google.com/file/d/1Ir6XRbw6q9pt6vT4gHsFUr7Eiunn8_se/view?usp=drive_link";
const DSALab = "https://drive.google.com/file/d/17ofBdo-49VNCiYvr_kFfzCZnjfDZEDxI/view?usp=drive_link";

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