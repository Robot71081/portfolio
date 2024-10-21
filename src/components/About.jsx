import React from 'react';

const About = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView(); // Removed smooth behavior
  };

  return (
    <>
      <div className='relative p-10 rounded-lg shadow-lg backdrop-blur-3xl bg-opacity-50 mb-6'>
        <div className='text-white text-center flex flex-col'>
          <span className='text-4xl text-left font-bold p-3 relative'>
            <i className='fas fa-user h-5 w-5 text-yellow-400 mr-3 p-2'></i>
            <span className='p-4'>About Me.</span>
            <div className='absolute inset-x-0 bottom-0 h-1 bg-yellow-400 rounded-full' />
          </span>
          <div className='bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg'>
            <div className='mt-4'>
              <span className='text-xl font-semibold text-white italic'>
                Enthusiastic and detail-oriented web developer with a Master's in Computer Applications (MCA) from LPU Distance Education and a strong proficiency in the MERN stack (MongoDB, Express.js, React, Node.js). Passionate about building responsive, user-centric web applications and optimizing performance for seamless user experiences.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='relative p-10 rounded-lg shadow-lg backdrop-blur-3xl bg-opacity-50 mb-6'>
        <div className='text-white text-center flex flex-col'>
          <span className='text-4xl text-left font-bold p-3 relative'>
            <i className='fas fa-graduation-cap h-5 w-5 text-yellow-400 mr-3'></i>
            <span className='p-4'>Education.</span>
            <div className='absolute inset-x-0 bottom-0 h-1 bg-red-400 rounded-full' />
          </span>
          <div className='bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg'>
            <div className='mt-6'>
              <div className='mb-6 p-4 bg-gray-800 rounded-lg shadow-lg'>
                <div className='flex items-center mb-2'>
                  <i className='fas fa-graduation-cap h-6 w-6 text-yellow-400 mr-2'></i>
                  <span className='text-xl font-bold'>MCA</span>
                </div>
                <span className='text-md text-gray-300'>LPU Distance Education</span>
                <div className='mt-2 text-sm italic text-gray-400'>Sept 2022 to Sept 2024</div>
              </div>

              <div className='p-4 bg-gray-800 rounded-lg shadow-lg'>
                <div className='flex items-center mb-2'>
                  <i className='fas fa-graduation-cap h-6 w-6 text-yellow-400 mr-2'></i>
                  <span className='text-xl font-bold'>BSc (Computer Science)</span>
                </div>
                <span className='text-md text-gray-300'>VNSGU (Veer Narmad South Gujarat University)</span>
                <div className='mt-2 text-sm italic text-gray-400'>July 2019 to May 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='relative p-10 rounded-lg shadow-lg backdrop-blur-3xl bg-opacity-50 mb-6'>
        <div className='text-white text-center flex flex-col'>
          <span className='text-4xl text-left font-bold p-3 relative'>
            <i className='fas fa-tools h-5 w-5 text-yellow-400 mr-3'></i>
            <span className='p-4'>Skills.</span>
            <div className='absolute inset-x-0 bottom-0 h-1 bg-green-400 rounded-full' />
          </span>
          <div className='bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg text-xl'>
            <div className='mt-6 bg-gray-800 p-4 rounded-lg shadow-lg'>
              <div className='mb-4'>
                <div className='flex items-center'>
                  <i className='fab fa-html5 h-5 w-5 text-orange-500 mr-2'></i>
                  <h3 className='font-semibold text-xl'>Frontend:</h3>
                </div>
                <p className='text-gray-300'>HTML5, CSS, JavaScript, React.js, Redux</p>
              </div>

              <div className='mb-4'>
                <div className='flex items-center'>
                  <i className='fas fa-server h-5 w-5 text-blue-500 mr-2'></i>
                  <h3 className='font-semibold text-xl'>Backend:</h3>
                </div>
                <p className='text-gray-300'>Node.js, Express, Socket.io</p>
              </div>

              <div className='mb-4'>
                <div className='flex items-center'>
                  <i className='fas fa-database h-5 w-5 text-green-500 mr-2'></i>
                  <h3 className='font-semibold text-xl'>Database:</h3>
                </div>
                <p className='text-gray-300'>MySQL, MongoDB</p>
              </div>

              <div className='mb-4'>
                <div className='flex items-center'>
                  <i className='fa-solid fa-screwdriver-wrench mr-2'></i>
                  <h3 className='font-semibold text-xl'>Tools:</h3>
                </div>
                <p className='text-gray-300'>VsCode, GitHub, Postman, ThunderClient</p>
              </div>

              <div className='mb-4'>
                <div className='flex items-center'>
                  <i className='fab fa-git-square h-5 w-5 text-gray-500 mr-2'></i>
                  <h3 className='font-semibold text-xl'>Version Control:</h3>
                </div>
                <p className='text-gray-300'>Git</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
