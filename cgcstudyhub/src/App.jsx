import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import HeroSection from "./components/Heropsection/Herosection";
import CoursesSection from "./components/Courses/Course";
import ContactSection from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";
import BtechCourses from "./components/SubCourse/BtechCourse";
import CSE from "./components/sub-subCourses/CSE";
import FirstSemester from "./components/SemesterSubject/FirstSemester";
import SecondSemester from "./components/SemesterSubject/SecondSemester";
import ThirdSemester from "./components/SemesterSubject/ThirdSemester";
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}