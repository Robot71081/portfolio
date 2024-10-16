import React, { useState } from 'react';


const CarUsel = ({ project }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % project.imgs.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + project.imgs.length) % project.imgs.length);
    };

    return (
        <div className='flex flex-col items-center justify-center mb-4'>
            <img 
                src={`/assets/imgs/${project.imgs[currentIndex]}`} 
                alt={`${project.title} image ${currentIndex + 1}`} 
                className='sm:w-[800px] sm:h-[450px] w-[250px] h-[320px] p-4 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105'
            />
            <div className='flex justify-between w-full mt-4'>
                <button 
                    onClick={prevImage} 
                    className={`p-2 flex items-center bg-gray-300 rounded-md hover:bg-gray-400 transition duration-300 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} 
                    disabled={currentIndex === 0}
                    aria-label="Previous image"
                >
                    
                    Previous
                </button>
                <button 
                    onClick={nextImage} 
                    className={`p-2 flex items-center bg-gray-300 rounded-md hover:bg-gray-400 transition duration-300 ${currentIndex === project.imgs.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`} 
                    disabled={currentIndex === project.imgs.length - 1}
                    aria-label="Next image"
                >
                    Next
                   
                </button>
            </div>
        </div>
    );
};

export default CarUsel;
