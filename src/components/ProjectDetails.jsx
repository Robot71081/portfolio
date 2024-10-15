import React from 'react'
import { useParams } from 'react-router-dom';
import { sample } from '../sample';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = sample.find(p => p.id === parseInt(id));
    
  return (
    <div className='relative p-10 rounded-lg shadow-lg backdrop-blur-3xl bg-opacity-50 mb-6'>
    <div className='text-white text-center flex flex-col'>
        <span className='text-4xl text-left font-bold p-3 relative'>
            {project.title}
            <div className='absolute inset-x-0 bottom-0 h-1 bg-green-400 rounded-full transform translate-y-1/2' />
        </span>
        <div className='bg-gray-800 bg-opacity-80 flex flex-col items-center p-6 rounded-lg shadow-lg'>
            <div className='flex flex-col items-center justify-center mb-4'>
                {project.img.map((image, index) => (
                    <img 
                        key={index}
                        src={`/public/assets/imgs/${image}`} 
                        alt={`${project.title} image ${index + 1}`} // More descriptive alt text
                        className='sm:w-[800px] sm:h-[450px] w-[400px] h-[320px] p-4 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105'
                    />
                ))}
            </div>
            <div className='text-center'>
                <span className='text-white items-center justify-center cursor-pointer flex flex-row opacity-80 hover:opacity-100 transition-opacity duration-300'>
               { console.log(project.demo)}
                    <a 
                        href={project.demo}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-300 hover:text-gray-400 flex items-center p-4"
                        disabled={!project.demo}
                    >
                        <i className="fas fa-link h-6 w-6"></i>
                        Demo
                    </a>
                    <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-300 hover:text-gray-400 flex items-center p-4"
                        disabled={!project.github}
                    >
                        <i className="fab fa-github h-6 w-6"></i>
                        GitHub
                    </a>
                </span>
                <p className='text-gray-300 mt-2 text-lg leading-relaxed'>
    {project.description}
</p>

            </div>
        </div>
    </div>
</div>

  )
}

export default ProjectDetails
