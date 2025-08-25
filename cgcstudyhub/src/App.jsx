import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import HeroSection from "./components/Heropsection/Herosection";
import CoursesSection from "./components/Courses/Course";
import ContactSection from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";
import BtechCourses from "./components/SubCourse/BtechCourse";
import CSE from "./components/sub-subCourses/CSE";
import CSEFirstSemester from "./components/All-Semester/Btech-CSE/FirstSemester";
import CSESecondSemester from "./components/All-Semester/Btech-CSE/SecondSemester";
import CSEThirdSemester from "./components/All-Semester/Btech-CSE/ThirdSemester";
import CSEFourthSemester from "./components/All-Semester/Btech-CSE/FourthSem";
import CSEFifthSemester from "./components/All-Semester/Btech-CSE/FifthSem";
import CSESixthSemester from "./components/All-Semester/Btech-CSE/SixthSem";
import CSESeventhSemester from "./components/All-Semester/Btech-CSE/SeveenthSem";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import CertificatesPage from "./components/CertificatePage/CertificatePage";
import ECE from "./components/sub-subCourses/ECE";
import ECEFirstsemester from "./components/All-Semester/ECE/FirstSem";
import ECESecondSemester from "./components/All-Semester/ECE/SecondSem";
import ECEFourthSemester from "./components/All-Semester/ECE/FourthSem";
import ECESixthSemester from "./components/All-Semester/ECE/SixthSem";
import IT from "./components/sub-subCourses/IT";
import ITFirstsemester from "./components/All-Semester/IT/FirstSem";
import ITSecondsemester from "./components/All-Semester/IT/SecondSem";
import ITThirdsemester from "./components/All-Semester/IT/ThirdSem";
import ITFourthsemester from "./components/All-Semester/IT/FourthSem";
import ITFifthsemester from "./components/All-Semester/IT/FifthSem";
import ITSixthSemester from "./components/All-Semester/IT/SixthSem";


import Pharma from "./components/SubCourse/Pharma";
import BPharma from "./components/sub-subCourses/BPharma";
import BFirstSemester from "./components/All-Semester/BPharma/FirstSem";
import BSecondSemester from "./components/All-Semester/BPharma/SecondSem";
import BThirdSemester from "./components/All-Semester/BPharma/ThirdSem";
import BForthSemester from "./components/All-Semester/BPharma/FourthSem";
import BFifthSemester from "./components/All-Semester/BPharma/FifthSem";
function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
      <Navbar />
      <HeroSection />
      <CoursesSection />

      <ContactSection />
      <BackToTopButton />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/btech" element={<BtechCourses />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/btech/cse" element={<CSE />} />
          <Route path="/btech/cse/firstsemester" element={<CSEFirstSemester />} />
          <Route path="/btech/cse/secondsemester" element={<CSESecondSemester />} />
          <Route path="/btech/cse/thirdsemester" element={<CSEThirdSemester />} />
          <Route path="/btech/cse/fourthsemester" element={<CSEFourthSemester />} />
          <Route path="/btech/cse/fifthsemester" element={<CSEFifthSemester />} />
          <Route path="/btech/cse/sixthsemester" element={<CSESixthSemester />} />
          <Route path="/btech/cse/seventhsemester" element={<CSESeventhSemester />} />

          <Route path="/btech/ece" element={<ECE />} />
          <Route path="/btech/ece/firstsemester" element={<ECEFirstsemester />} />
          <Route path="/btech/ece/secondsemester" element={<ECESecondSemester />} />
          <Route path="/btech/ece/fourthsemester" element={<ECEFourthSemester />} />
          <Route path="/btech/ece/sixthsemester" element={<ECESixthSemester />} />

          <Route path="/btech/it" element={<IT />} />
          <Route path="/btech/it/firstsemester" element={<ITFirstsemester />} />
          <Route path="/btech/it/secondsemester" element={<ITSecondsemester />} />
          <Route path="/btech/it/thirdsemester" element={<ITThirdsemester />} />
          <Route path="/btech/it/fourthsemester" element={<ITFourthsemester />} />
          <Route path="/btech/it/fifthsemester" element={<ITFifthsemester />} />
          <Route path="/btech/it/sixthsemester" element={<ITSixthSemester />} />

          <Route path="/pharma" element={<Pharma />} />
          <Route path="/pharma/bpharma" element={<BPharma />} />
          <Route path="/pharma/bpharma/firstsemester" element={<BFirstSemester />} />
          <Route path="/pharma/bpharma/secondsemester" element={<BSecondSemester />} />
          <Route path="/pharma/bpharma/thirdsemester" element={<BThirdSemester />} />
          <Route path="/pharma/bpharma/fourthsemester" element={<BForthSemester />} />
          <Route path="/pharma/bpharma/fifthsemester" element={<BFifthSemester />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}