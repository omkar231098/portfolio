import * as React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-white dark:bg-gradient-to-r to-[#0a0d37] w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text font-bold lg:text-xl">
          {project.name}
        </p>
      </div>

      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 flex flex-col space-y-6">
        {/* Top section with image and buttons */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src={project.image}
            alt={project.name}
            className="w-auto h-auto object-cover rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
          />
     <div className="flex space-x-4">
  <a
    href={project.deployedLink}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gradient-to-r from-pink-500 via-violet-600 to-blue-800 text-white px-4 py-2 rounded-md hover:from-pink-600 hover:via-violet-700 hover:to-blue-900 transition-colors"
  >
    Deployed Link
  </a>
  <a
    href={project.githubRepo}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gradient-to-r from-pink-500 via-violet-600 to-blue-800 text-white px-4 py-2 rounded-md hover:from-pink-600 hover:via-violet-700 hover:to-blue-900 transition-colors"
  >
    GitHub Repo
  </a>
</div>



        </div>

        {/* Bottom section with description */}
        <div className="p-4 rounded-lg 
             bg-gradient-to-r from-[#0d1224] to-[#0a0d36] 
             dark:bg-gradient-to-r dark:from-[#1b2c68a0] dark:to-[#0d1224]">
          <h3 className="text-lg lg:text-xl font-semibold text-[#16f2b3] mb-2">
            Project Details
          </h3>
          <ul className="space-y-2 text-white">
            <li>
              <strong className="text-pink-500">Name:</strong>{' '}
              <span className="text-amber-300">{project.name}</span>
            </li>
            <li>
              <strong className="text-pink-500">Tools:</strong>{' '}
              <span className="text-amber-300">
                {project.tools.join(', ')}
              </span>
            </li>
            {/* <li>
              <strong className="text-pink-500">Role:</strong>{' '}
              <span className="text-orange-400">{project.role}</span>
            </li> */}
            <li>
              <strong className="text-pink-500">Description:</strong>{' '}
              <span className="text-cyan-400">{project.description}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
