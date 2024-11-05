import React from 'react';
import { sample } from '../sample';
import CarUsel from './CarUsel';

const Projects = () => {
  return (
    <div className="container mx-auto p-6 mt-12">
      <h3 className="text-[60px] font-bold mb-6 text-center text-white">Projects</h3>
      {sample.map(project => (
        <div className='bg-[#1F2937] text-yellow-400 rounded-3xl shadow-md p-6 mb-6' key={project.id}>
          <h4 className='text-3xl font-bold mb-2 text-center'>{project.title}</h4>
          <div className='flex items-center justify-center mb-4'>
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2"> {/* Adjusted width for mobile */}
              <CarUsel project={project} />
            </div>
          </div>
          <div className='text-center mb-4'>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400 flex items-center justify-center mb-2"
              >
                <i className="fas fa-eye h-6 w-6 mr-2"></i>
                Preview
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-400 flex items-center justify-center"
            >
              <i className="fab fa-github h-6 w-6 mr-2"></i>
              GitHub
            </a>
          </div>
          <div className='mt-4 text-center'>
            <h5 className='text-white font-bold mb-2 text-2xl'>Project Details</h5>
            <div className='mb-2 flex flex-col'>
              <span className='font-semibold text-lg'>Frontend: </span>
              <span className='text-gray-300 text-lg'>{project.frontend}</span>
            </div>
            <div className='mb-2 flex flex-col'>
              <span className='font-semibold text-lg'>Backend: </span>
              <span className='text-gray-300 text-lg'>{project.backend}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
