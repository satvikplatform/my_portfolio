import React from 'react'

const About = () => {
  return (
    <div name="about" class="h-screen border-yellow-500 border-l-2 sm:h-screen w-full text-white ">
      <div className='sm:w-[50%] sm:flex flex-col justify-center  px-4 h-[100%] sm:mx-6'>
        <div className='mt-16 sm:mt-0'>
          <h1 className="text-3xl my-2  md:text-4xl font-bold sm:py-2 border-b-4 inline-block border-b-[#eb1c3e] ">About:</h1>
          <h3 className="text-2xl md:text-4xl font-bold sm:py-4">Hello, nice to meet you.</h3>
          <p className="text-sm sm:text-lg font-medium text-justify py-2">I am specialized in building responsive
          websites from scratch using <span title="HTML, CSS, JavaScript" className='text-[#3bffe2] cursor-cell'>"Cores"</span> and also with advanced frameworks like ReactJs and
          TailWind CSS..,etc. </p>
          <p className="text-sm sm:text-lg font-medium text-justify py-2">I am fluent in modern web design concepts
          like mobile first design, cross browser compatibility, search engine optimization.
          </p>
          <p className="text-sm sm:text-lg font-medium text-justify py-2">I have serious passion for creating
          better UI and UX, which gives ease to access and control the Website.</p>
          <p className="text-sm sm:text-lg font-medium text-justify py-2">Well aware of creating content for everyone
          by following the WCA guideliness and make website as WCAG compliant.</p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default About;