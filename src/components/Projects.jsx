import React from 'react'
import { sample } from '../sample'

;
import { Link } from 'react-router-dom';


const Projects = () => {
  return (
   
    <div>
 
        
    {sample.map(project => (
       
       <div className='relative p-10 rounded-lg shadow-lg backdrop-blur-3xl bg-opacity-50 mb-6' key={project.id}>
       <div className='text-white text-center flex flex-col'>
           <span className='text-4xl text-left font-bold p-3 relative'>
               {project.title}
               <div className={`absolute inset-x-0 bottom-0 h-1 bg-${project.color}-400 rounded-full transform translate-y-1/2`} />
           </span>
           <div className='bg-gray-800 bg-opacity-80 flex flex-col items-center p-6 rounded-lg shadow-lg'>
    <div className='flex items-center justify-center mb-4'>
        <img 
            src={`/src/assets/imgs/${project.img[0]}`} 
            alt={project.title} 
            className='sm:w-[800px] sm:h-[450px] w-[200px] h-[320px] transition-transform duration-300 transform hover:scale-105' 
        />
    </div>
    <div className='text-center'>
        <span className='text-white items-center justify-center cursor-pointer flex flex-row opacity-80 hover:opacity-100 transition-opacity duration-300'>
            <a 
            
                 href={ project.demo}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-gray-400 flex items-center p-4 justify-center"
                disabled={!project.demo}
            >
                <i className="fas fa-link h-6 w-6 "></i>
                Demo
            </a>

            <a 
        href={project.github} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-300 hover:text-gray-400 flex items-center p-4"
        disabled={!project.github}
    >
        <i className="fab fa-github h-6 w-6 "></i>
        GitHub
    </a>

          

            <Link
                to={`/projectDetails/${project.id}`}
               
                className="text-gray-300 hover:text-gray-400 flex items-center justify-center p-4"
            >
                <i className="fas fa-info-circle h-6 w-6 "></i>
                About
            </Link>

            

        </span>
        <div className='mt-4 text-xl'>
    <div className='flex items-center mb-2'>
        <i className="fas fa-code h-5 w-5 text-green-400 mr-3"></i>
        <p className='text-gray-300'>
            Frontend: <span className='font-semibold'>{project.frontend}</span>
        </p>
    </div>
    <div className='flex items-center mb-2'>
        <i className="fas fa-server h-5 w-5 text-blue-400 mr-3"></i>
        <p className='text-gray-300'>
            Backend: <span className='font-semibold'>{project.backend}</span>
        </p>
    </div>
    <div className='flex items-center mb-2'>
        <i className="fas fa-eye h-5 w-5 text-yellow-400 mr-3"></i>
        <p className='text-gray-300'>
            Preview: <span className='font-semibold'>{project.preview}</span>
        </p>
    </div>
</div>


    </div>
</div>

       </div>
   </div>
        
    ))}

</div>
        );
    };
    
    
    
  


export default Projects
