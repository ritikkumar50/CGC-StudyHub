// src/pages/CertificatesPage.jsx
import React, { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { certificatesData } from "../../../Constants"; // Your data file


export default function CertificatesPage() {
  const [search, setSearch] = useState("");

  const filteredCertificates = certificatesData.filter(cert =>
    cert.name.toLowerCase().includes(search.toLowerCase()) ||
    cert.description.toLowerCase().includes(search.toLowerCase())
  );

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-12 mt-20">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Certificates & <span className="text-red-700 dark:text-blue-600">Learning Platforms </span> 
      </h1>

      {/* Search Bar */}
      <div className="max-w-lg mx-auto mb-10">
        <input
          type="text"
          placeholder="Search certificates..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-ponter">
        {filteredCertificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden"
          >
            <img
              src={cert.image}
              alt={cert.name}
              className="w-full h-52 object-contain p-4 bg-gray-50 dark:bg-gray-900 cursor-pointer"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {cert.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {cert.description}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:scale-105 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Visit <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
