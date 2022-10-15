import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import SkillsImage from "../assets/skills_image.png";


const Skills = () => {
  return (
    <div name="skills" className="text-white w-full h-screen border-[#c31432] border-l-2 flex flex-col md:flex-row justify-center items-center">
      <div className="flex flex-col md:flex-row md:items-center justify-start items-start max-w-[100%] md:max-w-[50%] 2xl:max-w-[30%]   h-full">
        <div className='xl:mr-24'>
          <div className="px-4 sm:mx-6  animation-one">
            <h1 className="text-3xl  md:text-4xl  border-b-4 inline-block border-b-[#eb1c3e]  font-bold pt-14 ">Skills:</h1>
            <p className="text-sm sm:text-lg font-medium text-justify py-1">//A small gallery of my technical skills</p>
          </div>
          <div className="flex justify-center flex-wrap animation-two">
            <div className=" flex flex-col  items-center justify-center w-20  sm:w-24 m-6 hover:scale-110 duration-300  shadow-lg shadow-gray-900">
              <img src={HTML} alt="HTML logo" className="" style={{ width: "70%" }} />
              <p className="text-xs uppercase sm:text-base py-2 font-semibold">HTML</p>
            </div>
            <div className="flex flex-col items-center justify-center w-20  sm:w-24 m-6 hover:scale-110 duration-300 shadow-lg shadow-gray-900">
              <img src={CSS} alt="CSS logo" style={{ width: "70%" }} />
              <p className="text-xs uppercase sm:text-base py-2 font-semibold">CSS</p>
            </div>
            <div className="flex flex-col items-center justify-center w-20  sm:w-24 m-6 hover:scale-110 duration-300 shadow-lg shadow-gray-900">
              <img src={JavaScript} alt="JavaScript logo" style={{ width: "70%" }} />
              <p className="text-xs uppercase sm:text-base py-2 font-semibold">JavaScript</p>
            </div>
            <div className="flex flex-col items-center justify-center w-20  sm:w-24 m-6 hover:scale-110 duration-300 shadow-lg shadow-gray-900">
              <img src={Tailwind} alt="Tailwind logo" style={{ width: "70%" }} />
              <p className="text-xs uppercase sm:text-base py-2 font-semibold">Tailwind</p>
            </div>
            <div className="flex flex-col items-center justify-center w-20  sm:w-24 m-6 hover:scale-110 duration-300 shadow-lg shadow-gray-900">
              <img src={ReactImg} alt="React logo" style={{ width: "70%" }} />
              <p className="text-xs uppercase sm:text-base py-2 font-semibold">ReactJs</p>
            </div>
            <div className="flex flex-col items-center justify-center w-20  sm:w-24 m-6 hover:scale-110 duration-300 shadow-lg shadow-gray-900">
              <img src={GitHub} alt="GitHub logo" style={{ width: "70%" }} />
              <p className="text-xs uppercase sm:text-base py-2 font-semibold">GitHub</p>
            </div>
          </div>
        </div>
      </div>
      <div className=' mt-10 xl:mt-10 sm:w-[70%]  md:h-[70%] xl:h-[90%] 2xl:h-[70%] 2xl:w-[30%] xl:w-[40%] flex justify-center items-center'>
        <img className='animation-four' src={SkillsImage} alt="of web developer" style={{ width: "100%", height: "80%" }} />
      </div>

    </div>
  )
}
export default Skills;