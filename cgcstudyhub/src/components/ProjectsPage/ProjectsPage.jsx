import React, { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Blockchain Voting System",
    description: "A secure online voting platform using Ethereum blockchain.",
    domain: "Blockchain",
    level: "Advanced",
    tech: ["Solidity", "React", "Web3.js"],
    image: "https://picsum.photos/400/250?random=1",
  },
  {
    id: 2,
    title: "AI Chatbot for Students",
    description: "A chatbot to answer common student queries.",
    domain: "AI/ML",
    level: "Intermediate",
    tech: ["Python", "TensorFlow", "Flask"],
    image: "https://picsum.photos/400/250?random=2",
  },
  {
    id: 3,
    title: "College Event Website",
    description: "A responsive event site for managing college fests.",
    domain: "Web Development",
    level: "Beginner",
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://picsum.photos/400/250?random=3",
  },
  // Add more projects here
];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDomain, setFilterDomain] = useState("All");

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDomain =
      filterDomain === "All" || project.domain === filterDomain;

    return matchesSearch && matchesDomain;
  });

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          🚀 Student Project Ideas
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Explore projects built by your seniors and developers. Learn, adapt,
          and innovate.
        </p>
        <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Share Your Project
        </button>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search projects..."
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
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
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400">
            No projects found.
          </p>
        )}
      </div>
    </div>
  );
}
