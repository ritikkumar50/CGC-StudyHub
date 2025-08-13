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
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import CertificatesPage from "./components/CertificatePage/CertificatePage";
import ECE from "./components/sub-subCourses/ECE";
import ECEFirstsemester from "./components/All-Semester/ECE/FirstSem"; 
import ECESecondSemester from "./components/All-Semester/ECE/SecondSem";
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
          <Route path="/btech/ece" element={<ECE />} />
          <Route path="/btech/ece/firstsemester" element={<ECEFirstsemester />} />
          <Route path="/btech/ece/secondsemester" element={<ECESecondSemester />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}