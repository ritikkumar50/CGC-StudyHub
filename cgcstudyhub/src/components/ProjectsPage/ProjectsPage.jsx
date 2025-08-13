import React, { useState, useEffect } from "react";
import { projectsData } from "../../../Constants"; // Your data file

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDomain, setFilterDomain] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const loaderRef = React.useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);


  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDomain =
      filterDomain === "All" || project.domain === filterDomain;

    return matchesSearch && matchesDomain;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="text-center mb-8 mt-20 px-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-red-900 dark:text-white">
          🚀 Student Project Ideas
        </h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
          Explore projects built by your seniors and developers. Learn, adapt,
          and innovate.
        </p>
        <button className="mt-4 px-4 py-2 sm:px-5 sm:py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 shadow-md  transition text-sm sm:text-base">
          <a
            href="https://forms.gle/jLXbDvNVRd7piMLNA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Share Your Project
          </a>

        </button>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 px-4">
        <input
          type="text"
          placeholder="Search projects..."
          className="flex- px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-sm sm:text-base"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-sm sm:text-base"
          value={filterDomain}
          onChange={(e) => setFilterDomain(e.target.value)}
        >
          <option>All</option>
          <option>Web Development</option>
          <option>AI/ML</option>
          <option>Blockchain</option>
        </select>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transform transition duration-300 flex flex-col cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 flex-1">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs sm:text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
          )) : (
          <p className="text-center text-gray-600 dark:text-gray-400 col-span-full">
            No projects found.
          </p>
        )}
      </div>
      {selectedProject && (
        <div className="fixed inset-0  backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full overflow-hidden shadow-lg relative">
            {/* Close button */}
            <button
              className="absolute top-2 right-3 text-white bg-gray-800 rounded-full p-1 hover:bg-gray-700"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover"
            />

            {/* Details */}
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {selectedProject.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedProject.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">
                {selectedProject.codeLink || selectedProject.CodeLink ? (
                  <a
                    href={selectedProject.codeLink || selectedProject.CodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-block text-center text-black dark:text-white hover:text-white py-3 px-8 rounded-full mt-5 text-lg font-bold border border-[#000000] transition duration-450 transform hover:scale-105 bg-gradient-to-r hover:from-[#8245ec] hover:to-[#a855f7] hover:shadow-[0_0_2px_#8245ec,0_0_2px_#8245ec,0_0_40px_#8245ec]"
                  >
                    View Code
                  </a>
                ) : null}
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='flex-1 inline-block  text-center text-black dark:text-white hover:text-white py-3 px-8 rounded-full mt-5 text-lg font-bold border border-[#000000] transition duration-450 trasnform hover:scale-105 bg-gradient-to-r hover:from-[#8245ec] hover:to-[#a855f7] hover:shadow-[0_0_2px_#8245ec,0_0_2px_#8245ec,0_0_40px_#8245ec]'                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )
      }

      {
        visibleCount < filteredProjects.length && (
          <div
            ref={loaderRef}
            className="flex justify-center py-6 text-gray-600 dark:text-gray-400"
          >
            Loading more projects...
          </div>
        )
      }
    </div >
  );
}
