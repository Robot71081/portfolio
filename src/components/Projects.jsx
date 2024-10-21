import React from 'react';
import { sample } from '../sample';
import { Link } from 'react-router-dom';
import CarUsel from './CarUsel';

const Projects = () => {
  return (
    <div className="container mx-auto p-6">
      {sample.map(project => (
        <div
          className='relative p-10 rounded-lg shadow-lg backdrop-blur-3xl bg-opacity-50 mb-6'
          key={project.id}
        >
          <div className='text-white text-center flex flex-col'>
            <span className='text-4xl text-left font-bold p-3 relative'>
              {project.title}
              <div className={`absolute inset-x-0 bottom-0 h-1 bg-${project.color}-400 rounded-full transform translate-y-1/2`} />
            </span>
            <div className='bg-gray-800 bg-opacity-80 flex flex-col items-center p-6 rounded-lg shadow-lg'>
              <div className='flex items-center justify-center mb-4 rounded-lg bg-gray-900'>
                <CarUsel project={project} />
              </div>
              <div className='text-center'>
                <span className='text-white flex flex-row items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300'>
                 {project.demo && <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gray-400 flex items-center justify-center p-4"
                    disabled={!project.demo}
                  >
                    <i className="fas fa-eye h-6 w-6 mr-2 flex items-center"></i>
                    Preview
                  </a>
                 } 

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gray-400 flex items-center justify-center  p-4"
                    disabled={!project.github}
                  >
                    <i className="fab fa-github h-6 w-6 mr-2 flex items-center"></i>
                    GitHub
                  </a>

                
                </span>
                <div className='mt-4 text-xl text-center'>
  <h2 className='text-white font-bold mb-4'>Project Details</h2>
  <div className='flex items-center mb-2 justify-center'>
    <i className="fas fa-code h-5 w-5 text-green-400 mr-3"></i>
    <p className=' flex items-center'>
      Frontend
    </p>
   
  </div>
  <div className='font-semibold ml-1 text-gray-300 mb-3'>{project.frontend}</div>
  <div className='flex items-center mb-2 justify-center'>
    <i className="fas fa-server h-5 w-5 text-blue-400 mr-3"></i>
    <p className=' flex items-center'>
      Backend 
    </p>
  </div>
  <div className='font-semibold ml-1 text-gray-300 mb-3'>{project.backend}</div>
  <div className='flex items-center mb-2 justify-center'>
    <i className="fas fa-eye h-5 w-5 text-yellow-400 mr-3"></i>
    <p className=' flex items-center'>
      Description
    </p>
   
  </div>
  <div className='font-semibold ml-1 text-gray-300'>{project.description}</div>
</div>


              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
