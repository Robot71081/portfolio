import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();
  return (
    <div className='flex flex-col py-8 '>
    <div className='flex flex-col md:flex-row justify-between items-center mx-4 md:mx-16'>
     <div className='mb-4 md:mb-0 p-4  text-center'>
    <span className='text-white text-3xl font-bold'>Portfolio</span>
    <br />
    
</div>

       
        <nav className="shadow-lg backdrop-blur-3xl bg-opacity-50 py-4 rounded-full border border-gray-500/30 w-full md:w-auto mb-4 md:mb-0">
            <div className="container mx-auto flex justify-center">
                <ul className="flex space-x-4 md:space-x-8 bg-opacity-50 rounded-full px-4">
                <li>
                        <Link 
                            to="/" 
                            className={`rounded-full px-3 py-2 transition-colors duration-300 ${location.pathname === '/' ? 'text-black bg-gray-300' : 'text-gray-300 hover:bg-gray-600'}`}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/projects" 
                            className={`rounded-full px-3 py-2 transition-colors duration-300 ${location.pathname === '/projects' ? 'text-black bg-gray-300' : 'text-gray-300 hover:bg-gray-600'}`}
                        >
                            Projects
                        </Link>
                    </li>
                   
                </ul>
            </div>
        </nav>

        <div className='flex space-x-4 text-[36px] '>
            <span className='text-white  cursor-pointer opacity-80 hover: p-2 transition-colors duration-300'>
                <a href="https://www.linkedin.com/in/rohit-pawar-28913b24a/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <i className="fab fa-linkedin h-6 w-6"></i>
                </a>
            </span>
            <span className='text-white  cursor-pointer opacity-80 hover: p-2 transition-colors duration-300'>
                <a href="https://github.com/Robot71081" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-400">
                    <i className="fab fa-github h-6 w-6"></i>
                </a>
            </span>
            <span className='text-white  cursor-pointer opacity-80 hover: p-2 transition-colors duration-300'>
                <a href="https://x.com/Rohit71081" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                    <i className="fab fa-twitter h-6 w-6"></i>
                </a>
            </span>
            <span className='text-white  cursor-pointer opacity-80 hover:l p-2 transition-colors duration-300'>
                <a href="/assets/Resume/Rohit-Resume.pdf" target="_blank" rel="noopener noreferrer" download className="text-gray-300 hover:text-gray-400">
                    <i className="fas fa-file-alt h-6 w-6"></i>
                </a>
            </span>
        </div>
    </div>
</div>


  )
}

export default Header
