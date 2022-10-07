import React from 'react';
import workImg from "../assets/workImg.jpeg";
import realEstate from "../assets/realestate.jpg";



const Work = () => {
  return (
    <div name="work" className="text-white h-[900px] sm:h-screen  border-[#c31432] border-l-2">
      <div className="px-4 sm:mx-6 animation-one">
        <h1 className="text-3xl  md:text-4xl border-b-4 pt-10  inline-block border-b-[#eb1c3e]  font-bold">Work:</h1>
        <p className="text-sm sm:text-lg font-medium text-justify py-1">//Projects which i have done</p>
      </div>
      <div className='flex overflow-auto flex-wrap justify-center animation-three'>
        <div className='w-full z-[-10] xl:z-40 relative rounded-lg group opacity-80 hover:opacity-100 hover:scale-110  m-2    flex justify-center items-center  font-bold  sm:w-1/3 md:1/3 xl:w-1/4 h-[180px] sm:h-[200px] xl:h-[230px]'>
          <img src={realEstate} className="rounded-lg" alt="Project Title" style={{ width: "100%", height: "100%" }} />
          {/*  <h1 className='flex justify-center items-center'>project 1</h1> */}
          <div className='hidden absolute group-hover:flex duration-300'>
            <button className='bg-green-300 hover:bg-sky-400  text-black w-16 h-16 p-10 text-center flex justify-center items-center rounded-full text-xs'>View Project</button>
          </div>
        </div>
        <div className='w-full z-[-10] xl:z-40 relative rounded-lg group opacity-80 hover:opacity-100  hover:scale-110  m-2    flex justify-center items-center  font-bold  sm:w-1/3 md:1/3 xl:w-1/4 h-[180px] sm:h-[200px] xl:h-[230px]'>
          <img src={workImg} className="rounded-lg" alt="Project Title" style={{ width: "100%", height: "100%" }} />
          {/*  <h1 className='flex justify-center items-center'>project 1</h1> */}
          <div className='hidden absolute group-hover:flex duration-300'>
            <button className='bg-green-300 hover:bg-sky-400  text-black w-16 h-16 p-10 text-center flex justify-center items-center rounded-full text-xs'>View Project</button>
          </div>
        </div>
        <div className='w-full z-[-10] xl:z-40 relative rounded-lg group opacity-80 hover:opacity-100  hover:scale-110  m-2    flex justify-center items-center  font-bold  sm:w-1/3 md:1/3 xl:w-1/4 h-[180px] sm:h-[200px] xl:h-[230px]'>
          <img src={realEstate} className="rounded-lg" alt="Project Title" style={{ width: "100%", height: "100%" }} />
          {/*  <h1 className='flex justify-center items-center'>project 1</h1> */}
          <div className='hidden absolute group-hover:flex duration-300'>
            <button className='bg-green-300 hover:bg-sky-400  text-black w-16 h-16 p-10 text-center flex justify-center items-center rounded-full text-xs'>View Project</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work;