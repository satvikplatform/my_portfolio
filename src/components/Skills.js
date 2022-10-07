import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
/* import Node from '../assets/node.png'; */
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';


const Skills = () => {
  return (
    <div name="skills" className="text-white w-full h-[800px] border-[#c31432] border-l-2">
      <div className="flex flex-col justify-start items-start max-w-[100%] md:max-w-[50%]  h-full">
        <div className="px-4 sm:mx-6 animation-one">
          <h1 className="text-3xl  md:text-4xl  border-b-4 inline-block border-b-[#eb1c3e]  font-bold pt-14 ">Skills:</h1>
          <p className="text-sm sm:text-lg font-medium text-justify py-1">//A small gallery of my technical skills</p>
        </div>
        <div className="flex justify-center flex-wrap animation-two">
          <div className=" flex flex-col  items-center justify-center w-20  sm:w-24 m-6 hover:scale-110 duration-300  shadow-lg shadow-gray-900">
             <img  src={HTML} alt="HTML logo" className="" style={{width: "70%"}} />
             <p className="text-xs uppercase sm:text-base py-2 font-semibold">HTML</p>
          </div>
          <div className="flex flex-col items-center justify-center w-20  sm:w-24 m-6 hover:scale-110 duration-300 shadow-lg shadow-gray-900">
             <img src={CSS} alt="CSS logo" style={{width:"70%"}} />
             <p className="text-xs uppercase sm:text-base py-2 font-semibold">CSS</p>
          </div>
          <div className="flex flex-col items-center justify-center w-20  sm:w-24 m-6 hover:scale-110 duration-300 shadow-lg shadow-gray-900">
             <img src={JavaScript} alt="JavaScript logo" style={{width:"70%"}} />
             <p className="text-xs uppercase sm:text-base py-2 font-semibold">JavaScript</p>
          </div>
          <div className="flex flex-col items-center justify-center w-20  sm:w-24 m-6 hover:scale-110 duration-300 shadow-lg shadow-gray-900">
             <img src={Tailwind} alt="Tailwind logo" style={{width:"70%"}} />
             <p className="text-xs uppercase sm:text-base py-2 font-semibold">Tailwind</p>
          </div>
          <div className="flex flex-col items-center justify-center w-20  sm:w-24 m-6 hover:scale-110 duration-300 shadow-lg shadow-gray-900">
             <img src={ReactImg} alt="React logo" style={{width:"70%"}} />
             <p className="text-xs uppercase sm:text-base py-2 font-semibold">ReactJs</p>
          </div>
          <div className="flex flex-col items-center justify-center w-20  sm:w-24 m-6 hover:scale-110 duration-300 shadow-lg shadow-gray-900">
             <img src={GitHub} alt="GitHub logo" style={{width:"70%"}} />
             <p className="text-xs uppercase sm:text-base py-2 font-semibold">GitHub</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Skills;