"use client";

import { useState } from 'react';
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {
  const initialVisibleCount = 2; // Initial number of projects to show
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const handleViewMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 2, projectsData.length));
  };

  const handleViewLess = () => {
    setVisibleCount((prevCount) => Math.max(prevCount - 2, initialVisibleCount));
  };

  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24">
      {/* Header Section */}
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-gradient-to-r from-pink-500 to-violet-600 absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#E9EBEE] dark:bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Projects Section */}
      <div className="pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.slice(0, visibleCount).map((project, index) => (
            <div
              id={`card-${index + 1}`}
              key={index}
              className="card w-full mx-auto max-w-lg"
            >
              <div className="box-border flex flex-col items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>

        {/* View More and View Less Buttons */}
        <div className="flex justify-center mt-6 space-x-4">
          {visibleCount < projectsData.length && (
            <button
              onClick={handleViewMore}
              className="bg-gradient-to-r from-pink-500 to-violet-600 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
            >
              View More
            </button>
          )}
          {visibleCount > initialVisibleCount && (
            <button
              onClick={handleViewLess}
              className="bg-gradient-to-r from-pink-500 to-violet-600 text-white px-6 py-3 rounded-md hover:bg-red-600 transition duration-300"
            >
              View Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
