import { useState } from "react";
import React from "react";
import { semester1Subjects } from "../../../Constants";
import Navbar from "../navbar/navbar";

const SemesterNotesPage = () => {

    const [selectedUnit, setSelectedUnit] = useState(null);
    return (
        <>
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-15 text-center">Semester 1 Notes</h1>

                {semester1Subjects.map((subject, index) => (
                    <div key={index} className="mb-10">
                        <h2 className="text-2xl font-semibold text-blue-500 mb-5">{subject.subject}</h2>

                        {subject.units.map((unit, i) => (
                            <div key={i} className="mb-6 ml-6">
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSelectedUnit(selectedUnit === i ? null : i);
                                    }}
                                    className="font-medium text-lg mb-1 hover:underline"
                                >
                                    {unit.name}
                                </a>
                                {selectedUnit === i && (
                                    <iframe
                                        src={`/${unit.file}#toolbar=0&navpanes=0&scrollbar=0`}
                                        title={`${subject.subject} - ${unit.name}`}
                                        className="w-full h-72"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};

export default SemesterNotesPage;
