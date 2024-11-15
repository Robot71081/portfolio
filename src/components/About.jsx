import React from 'react';


import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiJsonwebtokens, SiSocketdotio, SiMongodb, SiMysql, SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const About = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView(); // Removed smooth behavior
  };

  return (
    <>
       <div class="text-center p-4 ">
        <h1 class="text-8xl py-2 text-teal-400  font-bold md:text-9xl font-acorn">Rohit Pawar</h1>
        <h3 class="text-3xl  py-2 text-white font-semibold ">Web Developer</h3>
        </div>

        <div className="bg-[#1F2937] text-teal-400 rounded-3xl  shadow-md p-6 mb-4 mt-12">
    <h3 className="text-[50px] font-bold mb-2 text-center text-white" >Skills</h3>
    <h3 className="text-3xl font-bold mb-6 mt-8 text-center text-white">Frontend</h3>
    <div className="flex flex-col mt-4">
    <div className="flex justify-center">
    <span className="flex flex-wrap items-center justify-center space-x-4 w-auto font-semibold text-[#111827] text-2xl rounded-full p-3 m-2 shadow-lg backdrop-blur-lg bg-opacity-40">
  {[ 
    { icon: <IoLogoHtml5 />, label: 'HTML' },
    { icon: <FaCss3Alt />, label: 'CSS' },
    { icon: <SiTailwindcss />, label: 'Tailwind' },
    { icon: <IoLogoJavascript />, label: 'JS' },
    { icon: <RiReactjsLine />, label: 'React' },
    { icon: <TbBrandRedux />, label: 'Redux' },
  ].map((skill) => (
    <span
      key={skill.label}
      className="flex items-center space-x-2 px-4 py-2 m-2 bg-yellow-400 text-[#111827] text-lg rounded-full shadow-lg backdrop-blur-sm hover:bg-yellow-300 transition duration-300"
    >
      {skill.icon}
      <span>{skill.label}</span>
    </span>
  ))}
</span>

</div>


        <h3 className="text-3xl font-bold mb-6 mt-8 text-center text-white">Backend</h3>
        <div className="flex justify-center">
        <span className="flex flex-wrap items-center justify-center space-x-4 w-auto font-semibold text-[#111827] text-2xl rounded-full p-3 m-2 backdrop-blur-lg bg-opacity-40">
  {[ 
    { icon: <FaNodeJs />, label: 'Node.Js' },
    { icon: <span></span>, label: 'Express.js' }, // Add an appropriate icon if needed
    { icon: <SiJsonwebtokens />, label: 'JWT' },
    { icon: <SiSocketdotio />, label: 'Socket.io' },
    { icon: <span></span>, label: 'Mongoose' },  // Add an appropriate icon if needed
  ].map((skill) => (
    <span
      key={skill.label}
      className="flex items-center space-x-2 px-4 py-2 m-2 bg-yellow-400 text-[#111827] text-lg rounded-full shadow-lg backdrop-blur-sm hover:bg-yellow-300 transition duration-300"
    >
      {skill.icon}
      <span>{skill.label}</span>
    </span>
  ))}
</span>

</div>
    


                        <h3 className="text-3xl font-bold mb-6 mt-8 text-center text-white">Database</h3>
                        <div className="flex justify-center">
                        <span className="flex flex-wrap items-center justify-center space-x-4 w-auto font-semibold text-[#111827] text-2xl rounded-full p-3 m-2 backdrop-blur-lg bg-opacity-40">
  {[ 
    { icon: <SiMongodb />, label: 'MongoDB' },
    { icon: <SiMysql />, label: 'MySQL' },
  ].map((skill) => (
    <span
      key={skill.label}
      className="flex items-center space-x-2 px-4 py-2 m-2 bg-yellow-400 text-[#111827] text-lg rounded-full shadow-lg backdrop-blur-sm hover:bg-yellow-300 transition duration-300"
    >
      {skill.icon}
      <span>{skill.label}</span>
    </span>
  ))}
</span>

</div>

                     
                        <h3 className="text-3xl font-bold mb-6 mt-8 text-center text-white">Tools</h3>

                        <div className="flex justify-center">
                        <span className="flex flex-wrap items-center justify-center space-x-4 w-auto font-semibold text-[#111827] text-2xl rounded-full p-3 m-2 backdrop-blur-lg bg-opacity-40">
  {[ 
    { icon: <FaGithub />, label: 'GitHub' },
    { icon: <SiPostman />, label: 'Postman' },
  ].map((skill) => (
    <span
      key={skill.label}
      className="flex items-center space-x-2 px-4 py-2 m-2 bg-yellow-400 text-[#111827] text-lg rounded-full shadow-lg backdrop-blur-sm hover:bg-yellow-300 transition duration-300"
    >
      {skill.icon}
      <span>{skill.label}</span>
    </span>
  ))}
</span>

</div>

                     

                        
    </div>
</div>


<div className="flex flex-col items-center space-y-4 mt-12">
    <div className="bg-[#1F2937] text-yellow-400 rounded-3xl w-full shadow-md p-6">
        <h3 className="text-[60px] font-bold mb-6 text-center text-white">Education</h3>
        <div className="flex flex-wrap justify-center">
            {[
                {
                    title: "Masters in Computer Application (Online Mode)",
                    institution: "Lovely Professional University",
                    dates: "Sept 2022 - Sept 2024",
                },
                {
                    title: "B.Sc in Computer Science",
                    institution: "Veer Narmad South Gujarat University",
                    dates: "July 2019 - July 2022",
                },
            ].map((edu, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 w-96 font-semibold bg-yellow-400 text-[#111827] text-xl rounded-3xl p-6 m-2 shadow-lg hover:bg-yellow-300 transition duration-300">
                    <div className="flex flex-col">
                        <h3 className="text-2xl font-bold">{edu.title}</h3>
                        <h4 className="text-lg font-semibold">{edu.institution}</h4>
                        <p className="text-lg">{edu.dates}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>





      
    </>
  );
}

export default About;
