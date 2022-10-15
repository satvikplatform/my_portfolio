import React from 'react';
import { FaHandPointLeft } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import ContactImage from "../assets/contact_image.png";

const Contact = () => {
  return (
    <>
      <div name="contact" className='w-full h-screen border-l-2 border-[#c31432] text-white animation-one md:flex '>
        <div className=' w-[100%]  md:w-[50%] md:h-[100%]  mb-20'>
          <h1 className=" mx-4 sm:px-0 sm:mx-6 text-2xl text-white md:text-4xl pt-10  border-b-4 inline-block border-b-[#eb1c3e]  font-bold">Drop Me A Line:</h1>
          <div className='m-10 flex items-center w-[100%]'>
            <p className='font-bold mr-5'>Phone -</p>
            <div className='mx-2'>
              <BsFillTelephoneFill />
            </div>
            <a className='font-mono  border-b-2 border-blue-600' href="tel: 9966774178">+919966774178</a>
            <div className='ml-2 w-[40%] hidden lg:flex items-center '>
              <FaHandPointLeft /><span className='ml-1'>(Click to connect)</span>
            </div>

          </div>
          <div className='m-10 flex items-center w-[100%]'>
            <p className='font-bold mr-5'>Email -</p>
            <div className='mx-2'>
              <HiOutlineMail size={20} />
            </div>
            <a className='font-semibold text-xs sm:text-base   border-b-2 border-blue-600' href="mailto:ksvsatvik@gmail.com">ksvsatvik@gmail.com</a>
            <div className='ml-2 w-[40%] hidden lg:flex items-center '>
              <FaHandPointLeft /><span className='ml-1'>(Click to connect)</span>
            </div>
          </div>
        </div>
        <div className=' w-[100%] h-[100%] md:w-[50%] md:h-[100%]'>
          <div className=' w-[100%]  h-[40%] sm:w-[70%] sm:h-[60%] xl:w-[70%] xl:h-[80%] 2xl:h-[60%]  '>
            <img src={ContactImage} alt="contact" style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;







