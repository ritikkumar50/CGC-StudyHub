import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import HeroSection from "./components/Heropsection/Herosection";
import CoursesSection from "./components/Courses/Course";
import ContactSection from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";
import BtechCourses from "./components/SubCourse/BtechCourse";
import CSE from "./components/sub-subCourses/CSE";
import FirstSemester from "./components/All-Semester/Btech-CSE/FirstSemester";
import SecondSemester from "./components/All-Semester/Btech-CSE/SecondSemester";
import ThirdSemester from "./components/All-Semester/Btech-CSE/ThirdSemester";
import FourthSemester from "./components/All-Semester/Btech-CSE/FourthSem";
import FifthSemester from "./components/All-Semester/Btech-CSE/FifthSem";
import SixthSemester from "./components/All-Semester/Btech-CSE/SixthSem";
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
          <Route path="/btech/cse" element={<CSE />} />
          <Route path="/btech/cse/firstsemester" element={<FirstSemester />} />
          <Route path="/btech/cse/secondsemester" element={<SecondSemester />} />
          <Route path="/btech/cse/thirdsemester" element={<ThirdSemester />} />
          <Route path="/btech/cse/fourthsemester" element={<FourthSemester />} />
          <Route path="/btech/cse/fifthsemester" element={<FifthSemester />} />
          <Route path="/btech/cse/sixthsemester" element={<SixthSemester />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}