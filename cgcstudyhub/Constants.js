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
      { name: "BOOK", file: "/1st-Sem/EGD/EGD_Book.pdf" },
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
      { name: "Unit-1", file: PPSUNIT1 },
      { name: "Unit-3", file: PPSUNIT3 },
      { name: "Unit-4", file: PPSUNIT4 },
      { name: "Unit-6", file: PPSUNIT6 },
      { name: "Unit-7", file: PPSUNIT7 },
      { name: "Unit-8", file: PPSUNIT8 },
      { name: "Unit-9", file: PPSUNIT9 },
      { name: "LabManual", file: LabManual },
      { name: "BOOK", file: BOOK },

    ]
  },
  {
    subject: "WorkShop",
    units: [
      { name: "Lab Manual", file: labManual },
      { name: "Lab (viva)", file: labViva },
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
const DOSBOOK = "https://drive.google.com/file/d/1oIkhtdHsIS74NFDo63FRtOMQ6Hd5ItCp/view?usp=drive_link";
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
    subject: "OOPS",
    units: [
      { name: "Unit-1", file: OOPSUNIT1 },
      { name: "Unit-2", file: OOPSUNIT2 },
      { name: "Unit-3", file: OOPSUNIT3 },
      { name: "Unit-4", file: OOPSUNIT4 },
      { name: "Unit-5", file: OOPSUNIT5 },
      { name: "LabManual", file: OOPSlabManual },
    ],
  },
  {
    subject: "DE",
    units: [
      { name: "Notes-1", file: Notes1 },
      { name: "Notes-2", file: Notes2 },
      { name: "Notes-3", file: Notes3 },
      { name: "Notes-4", file: Notes4 },
      { name: "Notes-5", file: Notes5 },
      { name: "Notes-6", file: Notes6 },
      { name: "Notes-7", file: Notes7 },
      { name: "Notes-8", file: Notes8 },
      { name: "Notes-9", file: Notes9 },
      { name: "Notes-10", file: Notes10 },
      { name: "Notes-11", file: Notes11 },
      { name: "Notes-12", file: Notes12 },
      { name: "Notes-13", file: Notes13 },
      { name: "Notes-14", file: Notes14 },
    ],
  },
  {
    subject: "DOS",
    units: [
      { name: "Imp Questions", file: IMP },
      { name: "capitalism-Topic", file: Topic1 },
      { name: "buddhist economist-Topic", file: Topic2 },
      { name: "Economic Activities-Topic", file: Topic3 },
      { name: "economic development-Topic", file: Topic4 },
      { name: "ECONOMIC INSTITUTION-Topic", file: Topic5 },
      { name: "socialism marxism-Topic", file: Topic6 },
      { name: "TypesofGovernment-Topic", file: Topic7 },
      { name: "Socialism-topic", file: Topic8 },
      { name: "QuestionBank", file: question },
      { name: "QuestionBank2", file: question2 },
      { name: "BOOK", file: DOSBOOK },
    ],
  },
  {
    subject: "DSA",
    units: [
      { name: "Unit-1", file: Module1 },
      { name: "Unit-2", file: Module2 },
      { name: "Unit-3", file: Module3 },
      { name: "Unit-4", file: Module4 },
      { name: "Unit-5", file: Module5 },
      { name: "PYQ", file: Question },
      { name: "PYQ(solved)", file: Question2 },
      { name: "LabManual", file: DSALab }
    ],
  },


]
//4th semester
//LORDS
const LORDS = "https://drive.google.com/file/d/1b2g0d3j4k5l6m7n8o9p0q1r2s3t4u5v6/view?usp=drive_link";
//Handwritten module1
const MModule1_1 = "https://drive.google.com/file/d/1il5GeCwQ_FAr0Omur2EcNS3J9bCX-vr5/view?usp=sharing";
const MModule1_2 = "https://drive.google.com/file/d/1pfNZWUEwyVofXi0e_QF4hduiLUUqmCT2/view?usp=sharing";
const MModule1_3 = "https://drive.google.com/file/d/1QVVjR3ywlk8oAGsCNZTyDsap9qqSBBo5/view?usp=sharing";
const MModule1_4 = "https://drive.google.com/file/d/1QVVjR3ywlk8oAGsCNZTyDsap9qqSBBo5/view?usp=sharing";
//handwritten module2
const MModule2_1 = "https://drive.google.com/file/d/1mtfq0J_ixHS3cgTOgiNChQffsmRBy7dh/view?usp=sharing";
const MModule2_2 = "https://drive.google.com/file/d/1741a4DomQvTucKP59oPyvzhf9HNwsnqm/view?usp=sharing";
//handwritten module3
const MModule3_1 = "https://drive.google.com/file/d/1DlgWS9zKB43HqNXTUQlgjN9Ns9ovC5td/view?usp=sharing";
//handwritten module4
const MModule4_1 = "https://drive.google.com/file/d/14ifn0i0haZaYEydlCwEz7xl3RIHJVoSq/view?usp=sharing";
const MModule4_2 = "https://drive.google.com/file/d/1MPFHE1eBCeBecoLwD4p7TojPstOsFvHH/view?usp=sharing";
//handwritten module5
const MModule5_1 = "https://drive.google.com/file/d/1zi63oxSSDefwNpjbNTdAQ1DcUBy2m77-/view?usp=sharing";
const MModule5_2 = "https://drive.google.com/file/d/15g9l86x_h_1hAewhAOzql_y4aXNQ4yj1/view?usp=sharing";
//Question Bank
const QuestionBank1 = "https://drive.google.com/file/d/1cf_gFscCS9_nrEgdiILWKDcAupLH9uHz/view?usp=sharing";
const QuestionBank2 = "https://drive.google.com/file/d/1gau3CSq9lUXVF-ssZCJKlnagPRp7-8wB/view?usp=sharing";
const QuestionBank3 = "https://drive.google.com/file/d/1LT26E_lU-hxdcusunw0Oyxf7jZ0t18Rx/view?usp=sharing";
const QuestionBank4 = "https://drive.google.com/file/d/11O2B9pDwnsUcR8sBzNtduwL8q4jucQmu/view?usp=sharing";
const QuestionBank5 = "https://drive.google.com/file/d/1g-AdyHXz9u5xDxoJhVqcf_Lae5I6fA9s/view?usp=sharing";
//DAA 
const DAAUnit1 = "https://drive.google.com/file/d/1FoQRUQzxz9Wzb9puZOB3l_Ui6ARwyxDN/view?usp=sharing";
const DAAUnit2 = "https://drive.google.com/file/d/1-oU_trZdQVAwr-KIoqcViTVHcL0FyWHC/view?usp=sharing";
const DAAUnit3 = "https://drive.google.com/file/d/17eluh2nf5UhoJzOwjdT5iILd1QLDPMve/view?usp=sharing";
const DAAUnit4 = "https://drive.google.com/file/d/1g8jULaPbk6-08FfoKOSmodohJpjODHjr/view?usp=sharing";
const DAAUnit5 = "https://drive.google.com/file/d/1KjLFm7kwksvgl-4fkSDHidXP36QXbyC-/view?usp=sharing";
//DAA FILE
const DAAFile = "https://drive.google.com/file/d/1zb0llrVxeOxbMeFbRXglZhSP1p02NA6I/view?usp=sharing";
//DAA LORDS
const DAALORDS = "https://drive.google.com/file/d/17E1puB0luc7dvy9jXgK14bmiLajfnUVW/view?usp=sharing";
//DAA BOOK
const DAABook = "https://drive.google.com/file/d/145Q8S0ol0GwfBQ9mRtytg8G14MOda42e/view?usp=sharing";

//OS BOOK
const OsBook ="https://drive.google.com/file/d/1T4tuCYi-oKV_y6ZDLD7OKp9Mla0XRm72/view?usp=sharing";
//lab file
const LabFile = "https://drive.google.com/file/d/1H4_70X9Zp7OqYWrEpWEQ5oahyqhq21JY/view?usp=sharing";
//lords
const LordsFile = "https://drive.google.com/file/d/1pvmA3gChlnxLPjaQ4hkGEsk-_3a-jpIN/view?usp=sharing";
//module
const OSModule1 = "https://drive.google.com/file/d/1dGPL0XDAgd1JBCjcofdTZM6ZyR_BZ7jh/view?usp=sharing";
const OSModule1_2 = "https://docs.google.com/presentation/d/1vlgbttFGVKOoNIx1rZOnWC3PtFgrryci/edit?usp=sharing&rtpof=true&sd=true";
const OSModule1_3 = "https://drive.google.com/file/d/1D6MfOhPWqNRfp4dI_kqlpgf8SIdVCImr/view?usp=sharing";
const OSModule1_4 = "https://drive.google.com/file/d/176c9In4jz3QDpwFfOHxCGLWUJpVU5wkt/view?usp=sharing";
const OSModule2 = "https://drive.google.com/file/d/1dnJGLnHozhwa5BjCbxdCfIzRp58J-v89/view?usp=sharing";
const OSModule2_2 = "https://drive.google.com/file/d/1jfSacsFRMm7azn5md6LLEnYjwZkXeUnI/view?usp=sharing";
const OSModule2_3 = "https://drive.google.com/file/d/1Sd9ES4PSwNwftZSfgdzSTH78cUinUQad/view?usp=sharing";
const OSModule2_4 = "https://drive.google.com/file/d/17LycQ1O1Ap0ZRSSuPsthF1hiqmSq2F22/view?usp=sharing";
const OSModule3 = "https://drive.google.com/file/d/18y4IrTkx43gPJk9a-8CqsiZskA_VJRUE/view?usp=sharing";
const OSModule4 = "https://drive.google.com/file/d/15Nd9cmqEZ3co4jdtE542PHpzkDHZ7ie7/view?usp=sharing";
const OSModule5 = "https://drive.google.com/file/d/1DY0cAb8uxCC5yWXPEHEhWOx8Y4jrKjmc/view?usp=sharing";
const OSModule6_1 = "https://drive.google.com/file/d/1HVsxMqZf2mxGcu7mrA-O_UpadASMlKvI/view?usp=sharing";
const OSModule6_2 = "https://drive.google.com/file/d/1p8F9fqoxjSdvXYz849gSsnkBajUSSOKX/view?usp=sharing";
const OSModule6_3 = "https://drive.google.com/file/d/1l4HJ1RqLErP60KaN-jwrJLn67mC7jASS/view?usp=sharing";
//COA 
const COAUnit1 = "https://drive.google.com/file/d/1QVTQD6gla8vYcO_jtRizGb970xh0rGu9/view?usp=sharing";
const COAUnit1_1 = "https://drive.google.com/file/d/1WOZI-rMWEJCGPxN4XelKdFv7lYAgPuZp/view?usp=sharing";
const COAUnit1_3 = "https://drive.google.com/file/d/1DeCwIAg3X_auV3gNDjF77hqNZe-9NZmM/view?usp=sharing";
const COAUnit1_4 = "https://drive.google.com/file/d/1pTnEHGueuEH8dXU7kiCU-sKdW2ewOFzw/view?usp=sharing";
const COAUnit1_5 = "https://drive.google.com/file/d/1Bg8q5Bi_3V_2iizzphxpdCsRPrjkaNtd/view?usp=sharing";
const COAIMP ="https://drive.google.com/file/d/1LYrdpkEtox45T1HgqM9Gzf5ufgTSW20B/view?usp=sharing";
const COAUnit2 = "https://drive.google.com/file/d/1zPkwFZaKlThyhxAvgAj0jQ722o5gfACs/view?usp=sharing";
const COAUnit2_1 = "https://drive.google.com/file/d/1T9RdkdFSRpu_Nqr42S0uC9R3G2g0jQgy/view?usp=sharing";
const COAUnit2_2 = "https://drive.google.com/file/d/1zGt_9Fx6JZ5sIPJjRw9pfuFKbPYoiZxu/view?usp=sharing";
const COAUnit2_3 = "https://drive.google.com/file/d/14NcBdNm67sfjDMk_7Ow2_IFQ5p8lU88X/view?usp=sharing";
const COAUnit2_4 = "https://drive.google.com/file/d/1HPbM1zMdpvIyFCoPHIHZnIVkdfeGYWWm/view?usp=sharing";
const COAUnit2_5 = "https://drive.google.com/file/d/1YuLIKyrjvRYEIsOieRiVYsdQgF-0KQ-E/view?usp=sharing";
const COAUnit3 = "https://drive.google.com/file/d/1Da0LNZ9JeLp2zpXyfbgDkcmIIHidzdwy/view?usp=sharing";
const COAUnit3_1 = "https://drive.google.com/file/d/1eYoafvdU65EYUwDO6p3aHcNUdFHKnaOz/view?usp=sharing";
const COAUnit3_2 = "https://drive.google.com/file/d/1ES_3t_lu5CEK6oDR334XB3L8ufucH009/view?usp=sharing";
const COAUnit3_4 = "https://drive.google.com/file/d/1Fs4t9MvB8bX6A6o9ZleFy-T9DQMT1IgW/view?usp=sharing";
const COAUnit4 = "https://drive.google.com/file/d/1RU_fIVlPXUpPqPhxiSstRgMjwrWdg-Ti/view?usp=sharing";
const COAUnit4_1 = "https://drive.google.com/file/d/1ysUbdXQO9XJY3y5C23ZBF51arbiTEvMj/view?usp=sharing";
const COAUnit4_2 = "https://drive.google.com/file/d/111pOsFLSCvhXcalkucRaMqhJTH30JXS9/view?usp=sharing";
const COAUnit4_3 = "https://drive.google.com/file/d/1yXf-ePXx6l_jnD6jKmaRcnp0ZNkC68A0/view?usp=sharing";
const COAUnit4_4 = "https://drive.google.com/file/d/1j4K9OHeXpej6BQR-mY6M5Y3VXBUjepdN/view?usp=sharing";
const COAIMP2 ="https://drive.google.com/file/d/13uABiP02sY5kGLMzWn7PycNK4O4XG4EI/view?usp=sharing";
//EVS
const EVSUnit1 = "https://drive.google.com/file/d/1vMq49fDSvuXoWB1U_rikbYLb_Cjh4CnT/view?usp=sharing";
const EVSUnit2 = "https://drive.google.com/file/d/1QEHVnpAj3DnLt5Rdua_Z5LzEgJ8sXCg3/view?usp=sharing";
const EVSUnit3 = "https://drive.google.com/file/d/19YvPYpTKo6KJCoMnkukcXx4qZ3DjCr6w/view?usp=sharing";
const EVSUnit4 = "https://drive.google.com/file/d/1HRuJ5saCgE6TosfzLbbHchfGmbkVOcBe/view?usp=sharing";
//uhv
const UHVUnit1 = "https://drive.google.com/file/d/14fbo1AmeUbUXhbJU5X-DOZWZOsd3Ywfi/view?usp=sharing";
const UHVBOOK = "https://drive.google.com/file/d/1EuT6MrSgA2x-sEgTna7dMlWYlwYlCgjI/view?usp=sharing";
export const sem4Subjects = [
  {
    subject: "M-4",
    units: [
      { name: "Module-1", file: MModule1_1, displayName: "Functions" },
      { name: "Module-1", file: MModule1_2, displayName: "Principle of Mathematical Induction" },
      { name: "Module-1", file: MModule1_3, displayName: "Relations" },
      { name: "Module-1", file: MModule1_4, displayName: "Sets" },
      { name: "Module-2", file: MModule2_1, displayName: "Combination Mathematics" },
      { name: "Module-2", file: MModule2_2, displayName: "Inclusion Exclusion" },
      { name: "Module-3", file: MModule3_1, displayName: "Propostional Logic" },
      { name: "Module-4", file: MModule4_1, displayName: "Group Therory" },
      { name: "Module-4", file: MModule4_2, displayName: "Rings and Fields" },
      { name: "Module-5", file: MModule5_1, displayName: "Graph Theory" },
      { name: "Module-5", file: MModule5_2, displayName: "Trees Algorithms" },
      { name: "Question Bank-1", file: QuestionBank1, displayName: "Question Bank unit-1" },
      { name: "Question Bank-2", file: QuestionBank2, displayName: "Question Bank unit-2" },
      { name: "Question Bank-3", file: QuestionBank3, displayName: "Question Bank unit-3" },
      { name: "Question Bank-4", file: QuestionBank4 , displayName: "Question Bank unit-4" },
      { name: "Question Bank-5", file: QuestionBank5, displayName: "Question Bank unit-5" },
      { name: "LORDS", file: LORDS },
    ],
  },
  {
  subject: "OS",
    units:[
      {name:"BOOK", file:OsBook, displayName:"BOOK"},
      {name:"Labmanual", file:LabFile, displayName:"Lab Manual"},
      {name:"LORDS", file:LORDS, displayName:"LORDS"},
      {name:"Module-1", file:OSModule1, displayName:"Introduction"},
      {name:"Module-1", file:OSModule1_2, displayName:"OS Services"},
      {name:"Module-1", file:OSModule1_3, displayName:"OS Design and Implementation"},
      {name:"Module-1", file:OSModule1_4, displayName:"Structure of OS"},
      {name:"Module-2", file:OSModule2, displayName:"Processes"},
      {name:"Module-2", file:OSModule2_2, displayName:"Threads"},
      {name:"Module-2", file:OSModule2_3, displayName:"Process Scheduling"},
      {name:"Module-2", file:OSModule2_4, displayName:"Real-Time Scheduling"},
      {name:"Module-3", file:OSModule3, displayName:"Inter-process Communication"},
      {name:"Module-4", file:OSModule4, displayName:"Deadlocks"},
      {name:"Module-5", file:OSModule5, displayName:"Memory Management"},
      {name:"Module-6", file:OSModule6_1, displayName:"I/O Hardware"},
      {name:"Module-6", file:OSModule6_2, displayName:"File Management"},
      {name:"Module-6", file:OSModule6_3, displayName:"Disk Management"},
    ],
},
{
  subject :"DAA",
  units: [
    { name: "Unit-1", file: DAAUnit1, displayName: "Introduction to DAA" },
    { name: "Unit-2", file: DAAUnit2, displayName: "Divide and Conquer" },
    { name: "Unit-3", file: DAAUnit3, displayName: "Greedy Method" },
    { name: "Unit-4", file: DAAUnit4, displayName: "Dynamic Programming" },
    { name: "Unit-5", file: DAAUnit5, displayName: "Backtracking" },
    { name: "Labmanual", file: DAAFile, displayName: " Lab Manual" },
    { name: "DAA LORDS", file: DAALORDS, displayName: "LORDS" },
    { name: "DAA Book", file: DAABook , displayName: "Book" },
  ],
},


{
  subject : "COA",
  units: [
    { name: "Module-1", file: COAUnit1, displayName: "Introduction to COA" },
    { name: "Module-1", file: COAUnit1_1, displayName: "ADDRESSING MODELS" },
    { name: "Module-1", file: COAUnit1_3, displayName: "8085 Microprocessor" },
    { name: "Module-1", file: COAUnit1_4, displayName: "SIGNED NUMBERS" },
    { name: "Module-1", file: COAUnit1_5, displayName: "Microprocessor" },
    { name: "Module-1", file: COAIMP , displayName: "IMP TOPICS" }, 
    { name: "Module-2", file: COAUnit2, displayName: "Process and Process States" },
    { name: "Module-2", file: COAUnit2_1, displayName: "PERIPHERAL DEVICES" },
    { name: "Module-2", file: COAUnit2_2, displayName: "X86 architecture" },
    { name: "Module-2", file: COAUnit2_3, displayName: "Memory Organization" },
    { name: "Module-2", file: COAUnit2_4, displayName: "Previlieged Instructions" },
    { name: "Module-2", file: COAUnit2_5, displayName: "I/O Organizations " },
    { name: "Module-3", file: COAUnit3, displayName: "Pipeline Hazards" },
    { name: "Module-3", file: COAUnit3_1, displayName: "Pipelining" },
    { name: "Module-3", file: COAUnit3_2, displayName: "Parallel Processing" },
    { name: "Module-3", file: COAUnit3_4, displayName: "Pipeline Types" },
    { name: "Module-4", file: COAUnit4, displayName: "Cache Mapping" },
    { name: "Module-4", file: COAUnit4_1, displayName: "Memory Interleaving" },
    { name: "Module-4", file: COAUnit4_2, displayName: "Cache Memory" },
    { name: "Module-4", file: COAUnit4_3, displayName: "Replacement algorithm" },
    { name: "Module-4", file: COAUnit4_4, displayName: "Memory Organization" },
    { name: "IMP", file: COAIMP2, displayName: "IMP TOPICS" },
  ],
},
{
  subject : "EVS",
  units: [
    { name: "Unit-1", file: EVSUnit1, displayName: "Natural Resources" },
    { name: "Unit-2", file: EVSUnit2, displayName: "Ecosystem" },
    { name: "Unit-3", file: EVSUnit3, displayName: "Biodiversity and its types " },
    { name: "Unit-4", file: EVSUnit4, displayName: "Social Issues" },
  ],
},
{
  subject : "UHV",
  units: [
    { name: "Unit-1", file: UHVUnit1, displayName: "Understanding Human Values" },
    { name: "BOOK", file: UHVBOOK, displayName: "UHV Book" },
  ],
},
]
//5th semester
//FLAT
const FLATUNIT1 = "https://drive.google.com/file/d/1fywV0eVHGR9eF0GWNcTHBFUI9a9udR2s/view?usp=sharing";
const FLATUNIT2 = "https://drive.google.com/file/d/1sm1qrjWrHPh7Q5KIlhRMFpfQioUbUtZ7/view?usp=sharing";
const FLATUNIT3 = "https://drive.google.com/file/d/1dy45w3HgQ6XPqRQw6j8TN-s951rbs-_z/view?usp=sharing";
const FLATUNIT4 = "https://drive.google.com/file/d/1dQSzSNQ_OyfJu6BfpfAaQVSqMywTZNuO/view?usp=sharing";
const FLATUNIT5 = "https://drive.google.com/file/d/1myX-kM_oqPXxPyskMKy6ipv6vu1TXjTm/view?usp=sharing";
const FLATUNIT6 = "https://drive.google.com/file/d/1hwJuFhSnCNeqeygdcMTG4Hjuyrf-xJmP/view?usp=sharing";
//FLAT_Topics
const FLATTopics = "https://drive.google.com/file/d/1XhpQEJUl1W3ZCFVXuiFFhn2nuMDONR-X/view?usp=sharing";
const FLATTopics2 = "https://drive.google.com/file/d/1HvnXppVDm0P88k67LizA-lxx79BxNEaK/view?usp=sharing";
const FLATTopics3 = "https://drive.google.com/file/d/1uJYI7boWgjmUS3-KYWPmnyNzT7ZgX9GD/view?usp=sharing";
const FLATTopics4 = "https://drive.google.com/file/d/1zfvWshO-eEn28oQJnUb4Z7O6zpnAszJV/view?usp=sharing"; 
const FLATTopics5 = "https://drive.google.com/file/d/1oMNjq1vS4pMYAiChAsdpF2ysKjuMdVas/view?usp=sharing";
//SE
const SEUNIT1 = "https://drive.google.com/file/d/10-k_On6AZNXwgjvX3SqBb434NHPoTE6l/view?usp=sharing";
const SEUNIT2 = "https://drive.google.com/file/d/1iahRjnTfcT6p4XTEfa7x_dN_EQIPjg8J/view?usp=sharing";
const SEUNIT3 = "https://drive.google.com/file/d/1_wiyas9x7ICptGj8cEtaBzLZNoSOeKx_/view?usp=sharing";
const SEUNIT4 = "https://drive.google.com/file/d/1IzjVNxBayAvkkapgLQGOX5Jrto685g_x/view?usp=sharing";
const SEUNIT5 = "https://drive.google.com/file/d/1pLvP9cogZ_5oYSuVhgtOzJHvDwQ8cjjW/view?usp=sharing";
const SELab1 = "https://drive.google.com/file/d/1FXjxXU9rRCT_seZNpQrumBXMask2Hlj1/view?usp=sharing";  
const SELab2 = "https://drive.google.com/file/d/1etk86eR7sYYmiqNu5d34YivFbXtl1PEO/view?usp=sharing";
//DBMS
const DBMSUNIT1 = "https://drive.google.com/file/d/1oU1maHgbALHd9VusTW2_8m2tGFQpu5Rf/view?usp=sharing";
const DBMSUNIT2 = "https://drive.google.com/file/d/1lOpkcmo-tqDcnr7nFpn6YbuwG8tNpZRS/view?usp=sharing";
const DBMSUNIT3 = "https://drive.google.com/file/d/198YjLawXsgr9Ai9aeMi_0Ls_y2LClCrf/view?usp=sharing";
const DBMSUNIT4 = "https://drive.google.com/file/d/1nCijz_MQm-wevhpLRofMW_W0CZHb8flG/view?usp=sharing";
const DBMSUNIT5 = "https://drive.google.com/file/d/1bdzgBe-E18QmdFzXbdhkN0wpOwQsH7vR/view?usp=sharing";
const DBMSUNIT6 = "https://drive.google.com/file/d/1LEhMMhb9a6FgDBjO8PYmanOE0zR4kNIJ/view?usp=sharing"
const DBMSLAB = "https://drive.google.com/file/d/1ACXXx20L9yA_kfkdLyEHDhcT2kIYCNjl/view?usp=sharing";
const DBMSLAB2 = "https://drive.google.com/file/d/174VrEXKt4nWbc5-5qiW8D1Rycr5Ketos/view?usp=sharing";
//CN
const CNUNIT1 = "https://drive.google.com/file/d/1vDqiNAZHNDnE2qY7eP6dloH8tDeM9qO1/view?usp=sharing";
const CNUNIT2 = "https://drive.google.com/file/d/1r4unW_UL2DO5QFsqROcTKPMvQThcyFS9/view?usp=sharing";
const CNUNIT3 = "https://drive.google.com/file/d/194EEyYoV6cJUbd87ROXBIMM5E4DALi4g/view?usp=sharing";
const CNUNIT4 = "https://drive.google.com/file/d/1CyDhdNAHTvWd0YZc2eHOF0aVcIEonqxP/view?usp=sharing";
const CNLAB = "https://drive.google.com/file/d/1mtfq0J_ixHS3cgTOgiNChQffsmRBy7dh/view?usp=sharing";
//ERP
const ERPUNIT1 = "https://drive.google.com/file/d/1yXY1IhJ8PmvYwpMiKUG2xZAAUSMMHlu3/view?usp=sharing";
const ERPUNIT2 = "https://drive.google.com/file/d/1gCO05nSb_zLtUbWhxtCPOTTQ9GB6kNro/view?usp=sharing";
const ERPUNIT3 = "https://drive.google.com/file/d/16s-7MgwGCR4eVrp7qeDcySQjUz-QGrUM/view?usp=sharing";
const ERPUNIT4 = "https://drive.google.com/file/d/12uN6hCL-c58kxX0zWnf54_I74wGp8tPB/view?usp=sharing";
const ERPUNIT5 = "https://drive.google.com/file/d/1HZm-GF5lc4NM3SV7LtQWZqKDcD6mK_mM/view?usp=sharing";
const ERPSYLLABUS = "https://drive.google.com/file/d/1sDTa72WmVL1dgZphBLvCaHkcndskS2TG/view?usp=sharing";
const ERPIMP = "https://drive.google.com/file/d/1nOTLFMCFI2FS11V9Q88hlpRgaoY5FKUD/view?usp=sharing";
//WT
const WTUNIT1 = "https://drive.google.com/file/d/1zBQurkkLHUMoyZTZGppddFlK8YM__xZz/view?usp=sharing";
const WTUNIT2 = "https://drive.google.com/file/d/1VIra6NDVQqJh3LfFgfs6oTk2ijchf_Ru/view?usp=sharing";
const WTUNIT3 = "https://drive.google.com/file/d/1Y1vWmFhwgWcoDalpmLmn3hfKLY5M4XJh/view?usp=sharing";
const WTUNIT4 = "https://drive.google.com/file/d/1MGQmbvKCLS3WoXfVCd3kc8F1nerL94it/view?usp=sharing";
const WTUNIT5 = "https://drive.google.com/file/d/1NtU4Bd_vTaYvIlSCJ8BrV49y3EXQDuFF/view?usp=sharing";
const WTUNIT6 = "https://drive.google.com/file/d/1UkjD9sicdj0YvmzdVkDGwjOp5sLzn0ow/view?usp=sharing";
//COI
const COIUNIT1 = "https://drive.google.com/file/d/1gq9bqu676GYXui_h7Trx_Z_0lwGA66kp/view?usp=sharing";
const COIUNIT2 = "https://drive.google.com/file/d/1KfdM31AagmqszsfvGcoT4P3I4Wv9DA3y/view?usp=sharing";
const COIUNIT3 = "https://drive.google.com/file/d/1ecY6_ZjjckPtLt0KqZKg2dLiuZ8_2trt/view?usp=sharing";
const COIUNIT4 = "https://drive.google.com/file/d/1QcGFZK45Lxsk_AcWNCDcNdsLN6aQeOrs/view?usp=sharing";
const COIUNIT5 = "https://drive.google.com/file/d/1XrdWh2zua07gl6ZGCVhNxLBrrZPioANh/view?usp=sharing";
const COIUNIT6 = "https://drive.google.com/file/d/1jsbIRMyaVPXZxFSyvqq5sWWPTqYAfyTJ/view?usp=sharing";
const COIUNIT7 = "https://drive.google.com/file/d/1xrwSvkKVH4cFRmixlJO_5a3AjlfWJHui/view?usp=sharing";
const COIUNIT8 = "https://drive.google.com/file/d/1ySnqROR8faUIuwoH7SzGp0-f007df7YS/view?usp=sharing";
const COIUNIT9 = "https://drive.google.com/file/d/14yRlHZMgEdguXsc2e23iaGx2NW__L_0r/view?usp=sharing";
const COIUNIT10 = "https://drive.google.com/file/d/1vmTDoAYJf88yvhVFIMMIgdxb9c63-nVr/view?usp=sharing";
const COIUNIT11 = "https://drive.google.com/file/d/1Qj5Ve-zEiZoDOZc5AMQ-qxst6iCunWN6/view?usp=sharing";
const COIUNIT12= "https://drive.google.com/file/d/1ou4n0SOfCwAvuQvZmCO9L1nfkI3s-4Po/view?usp=sharing";
const COIUNIT13 = "https://drive.google.com/file/d/1Wtka0lt7X6QBdrcLK6M-QCriDOvE5gi6/view?usp=sharing";
const COIUNIT14= "https://drive.google.com/file/d/1GPP5eG7J9UlOSCIISJnnrkFp8aUMblUx/view?usp=sharing";

export const sem5Subjects = [
  {
   subject: "FLAT",
    units: [
     { name: "Unit-1", file: FLATUNIT1, displayName: "Introduction to FLAT" },
      { name: "Unit-2", file: FLATUNIT2, displayName: "Regular Languages" },
      { name: "Unit-3", file: FLATUNIT3, displayName: "Context-free languages" },
      { name: "Unit-4", file: FLATUNIT4, displayName: "Context-sensitive languages " }, 
      { name: "Unit-5", file: FLATUNIT5, displayName: "Turing Machines" },
      { name: "Unit-6", file: FLATUNIT6, displayName: "Undecidability & Intractablity: " },
      { name: "IMP-Topics", file: FLATTopics, displayName: "DFA-NFA Conversion" },
      { name: "IMP-Topics", file: FLATTopics2, displayName: "Minimisation DFA" },
      { name: "IMP-Topics", file: FLATTopics3, displayName: "Properties of RE" },
      { name: "IMP-Topics", file: FLATTopics4, displayName: "Pumping Lemma CFL" },
      { name: "IMP-Topics", file: FLATTopics5, displayName: "Turing Machines" },  
    ],
    },
    {
      subject:"SE",
      units:[
      { name: "Unit-1", file: SEUNIT1,  },
      { name: "Unit-2", file: SEUNIT2, },
      { name: "Unit-3", file: SEUNIT3, },
      { name: "Unit-4", file: SEUNIT4,displayName: "Unit 4-5" },
      { name: "Unit-5", file: SEUNIT5, },
      { name: "LabManual", file: SELab1, displayName: "Front-Page" },
      { name: "LabManual", file: SELab2, displayName: "File" },
      ],
    },
    {
      subject: "DBMS",
      units: [
        { name: "Unit-1", file: DBMSUNIT1, },
        { name: "Unit-2", file: DBMSUNIT2,  },
        { name: "Unit-3", file: DBMSUNIT3,  },
        { name: "Unit-4", file: DBMSUNIT4, },
        { name: "Unit-5", file: DBMSUNIT5,  },
        { name: "Unit-6", file: DBMSUNIT6,},
        { name: "LabManual", file: DBMSLAB, displayName:"FRONT-PAGE"},
        { name: "LabManual", file: DBMSLAB2, displayName:"FILE"},
      ],
    }
    ,
    {
      subject: "CN",
      units: [
        { name: "Unit-1", file: CNUNIT1, },
        { name: "Unit-2", file: CNUNIT2, },
        { name: "Unit-3", file: CNUNIT3,  },
        { name: "Unit-4", file: CNUNIT4,},
        { name: "LabManual", file: CNLAB, displayName:"FILE"},
      ],
    },
    {
      subject: "ERP",
      units: [
        { name: "Unit-1", file: ERPUNIT1, },
        { name: "Unit-2", file: ERPUNIT2, },
        { name: "Unit-3", file: ERPUNIT3,  },
        { name: "Unit-4", file: ERPUNIT4,  },
        { name: "Unit-5", file: ERPUNIT5, },
        { name: "Syllabus", file: ERPSYLLABUS, displayName: "Syllabus" },
        { name: "IMP", file: ERPIMP, displayName:"IMP TOPICS"},
      ],
    },
    {
      subject: "WT (Elective)",
      units: [
        { name: "Unit-1", file: WTUNIT1, },
        { name: "Unit-2", file: WTUNIT2, },
        { name: "Unit-3", file: WTUNIT3,  },
        { name: "Unit-4", file: WTUNIT4,  },
        { name: "Unit-5", file: WTUNIT5,  },
        { name: "Unit-6", file: WTUNIT6,  },
      ],
    },
    {
      subject: "COI (Elective)",
      units: [
        { name: "IMP-Topics-1", file: COIUNIT1,   displayName: "Introduction to COI" },
        { name: "IMP-Topics-2", file: COIUNIT2,   displayName: "Fundamental RIGHTS" },
        { name: "IMP-Topics-4", file: COIUNIT4,   displayName: "State-Policy" },
        { name: "IMP-Topics-5", file: COIUNIT5,   displayName: "CITIZENSHIP" },
        { name: "IMP-Topics-6", file: COIUNIT6,   displayName: "THE UNION" },
        { name: "IMP-Topics-7", file: COIUNIT7,   displayName: "ARTICLES" },
        { name: "IMP-Topics-8", file: COIUNIT8,   displayName: "ARTICLES-2" },
        { name: "IMP-Topics-9", file: COIUNIT9,   displayName: "SUPREME-COURT" },
        { name: "IMP-Topics-10", file: COIUNIT10 ,displayName: "THE STATES" }, 
        { name: "IMP-Topics-11", file: COIUNIT11 ,displayName: "ARTCILE INFO" }, 
        { name: "IMP-Topics-12", file: COIUNIT12 ,displayName: "HIGH-COURTS" }, 
        { name: "IMP-Topics-13", file: COIUNIT13 ,displayName: "43rd AMENDMENT" }, 
        { name: "IMP-Topics-14", file: COIUNIT14 ,displayName: "Union Territories" }, 
      ],
    }
]

//Wc
const WCUNIT1 = "https://drive.google.com/file/d/1GVqxGxioMgukq4UUeFB5-gfMmRhI2EwF/view?usp=sharing";
const WCUNIT2 = "https://drive.google.com/file/d/1QZKS8OWZkpvFeSFpZbc0o2qQpmZ_22Rt/view?usp=sharing";
const WCUNIT3 = "https://drive.google.com/file/d/1Ffba_ZIfWreQaQ069VWd7mjD30qp1B1S/view?usp=sharing";
const WCUNIT4 = "https://drive.google.com/file/d/1WCzrBVf4Khwaxqho2y5VyjrN-NTgVc8k/view?usp=sharing";
const WCUNIT5 = "https://drive.google.com/file/d/1desD87np8VuTEPAjQ-RkXvpK8CDWHghZ/view?usp=sharing";

export const sem6Subjects = [
  {

  
  subject: "WC (Web Technologies)",
  units: [
    { name: "Unit-1", file: WCUNIT1, },
    { name: "Unit-2", file: WCUNIT2, },
    { name: "Unit-3", file: WCUNIT3, },
    { name: "Unit-4", file: WCUNIT4,},
    { name: "Unit-5", file: WCUNIT5,},

  ]
},
]