import React from 'react'

const Home = () => {
  return (
    <div className="w-full" >
    <div name="home" className=" border-red-500 border-2 max-w-[100%] md:max-w-[55%] pt-16 sm:pt-0  h-[500px] sm:h-[600px] flex flex-col justify-start   text-gray-100">
      <div className="px-4 sm:mt-[18%]  sm:max-w-[800px] sm:mx-6">
      <h1 className="text-xl  font-bold">Hi,</h1>
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">Im Satvik,</h1>
      <h1 className="text-xl md:text-4xl lg:text-6xl font-bold capitalize">front end developer.</h1>
      <p className="text-sm sm:text-lg font-medium text-justify py-1">Specialized in building responsive websites from scratch and make it as
        WCAG compliant by writing optimal code, and also capable of creating better UI/UX with advanced
        frameworks.
      </p>
      <button className="  bg-gradient-to-r from-[#0e5381] to-[#130F40] text-black hover:text-white button-home text-sm  rounded px-4 md:px-8 flex items-center  mt-2 py-2">View more</button>
      </div>
    </div>
    </div>
  )
}

export default Home
