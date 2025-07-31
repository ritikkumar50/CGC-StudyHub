import React, { useEffect } from "react";
import Navbar from "../navbar/navbar";
import baby1 from "../../assets/babyimage/Gemini_Generated_Image_h9eg57h9eg57h9eg.png";
import baby2 from "../../assets/babyimage/Gemini_Generated_Image_cooxa0cooxa0coox.png";
import baby3 from "../../assets/babyimage/Gemini_Generated_Image_6wozfy6wozfy6woz.png";
import baby4 from "../../assets/babyimage/Gemini_Generated_Image_b0e5gbb0e5gbb0e5.png";
import baby5 from "../../assets/babyimage/Gemini_Generated_Image_3hqczz3hqczz3hqc.png";
import baby6 from "../../assets/babyimage/Gemini_Generated_Image_34578e34578e3457.png";
import baby7 from "../../assets/babyimage/Gemini_Generated_Image_ipewvlipewvlipew.png";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";


const semesterData = [
    { id: 1, title: "Semester 1", image: baby1 },
    { id: 2, title: "Semester 2", image: baby2 },
    { id: 3, title: "Semester 3", image: baby3 },
    { id: 4, title: "Semester 4", image: baby4 },
    { id: 5, title: "Semester 5", image: baby5 },
    { id: 6, title: "Semester 6", image: baby6 },
    { id: 7, title: "Semester 7", image: baby7 },
];


export default function CSE() {

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-all">
            <Navbar />

            <div className="max-w-6xl mx-auto px-6 py-30 cursor-pointer">
                {/* Go Back Arrow */}
                <div className="max-w-6xl mx-auto px-6">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center text-gray-700 dark:text-gray-300 relative group transition"
                    >
                        <ArrowLeft className="w-6 h-6 mr-2 " />
                        <span className="font-medium hover:text-blue-600 ">Go Back</span>
                    </button>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-600 dark:text-white mb-12">
                    CSE <span className="text-indigo-600">Journey</span>

                </h1>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {semesterData.map((sem) => (
                        <div
                            key={sem.id}
                            onClick={() => {
                                // Route to different semester pages
                                if (sem.id === 1) navigate("/firstsemester");
                                // Add similar if statements for other semesters later
                            }}
                            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                            <img
                                src={sem.image}
                                alt={`Semester ${sem.id}`}
                                className="w-full h-56 object-contain mx-auto mb-4"
                            />
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                                {sem.title}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
