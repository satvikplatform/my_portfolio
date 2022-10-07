import React from 'react';
import { FaGithub, FaLinkedin, FaHandPointLeft } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill, BsFillTelephoneFill, MdOutgoingMail } from 'react-icons/bs';

const Contact = () => {
  return (
    <>
      <div name="contact" className='w-full h-screen border-l-2 border-[#c31432] text-white animation-one'>
        <h1 className=" mx-4 sm:px-0 sm:mx-6 text-2xl text-white md:text-4xl pt-10  border-b-4 inline-block border-b-[#eb1c3e]  font-bold">Drop Me A Line:</h1>
        <div className='m-10 flex items-center'>
          <p className='font-bold mr-5'>Phone -</p>
          <div className='mx-2'>
            <BsFillTelephoneFill />
          </div>
          <a className='font-mono  border-b-2 border-blue-600' href="tel: 9966774178">+919966774178</a>
          <div className='ml-2 w-[20%] hidden lg:flex items-center '>
            <FaHandPointLeft  /><span className='ml-1'>(Click to connect)</span>
          </div>

        </div>
        <div className='m-10 flex items-center'>
          <p className='font-bold mr-5'>Gmail -</p>
          <div className='mx-2'>
            <HiOutlineMail size={20} />
          </div>
          <a className='font-semibold text-xs sm:text-base   border-b-2 border-blue-600' href="mailto:ksvsatvik@gmail.com">ksvsatvik@gmail.com</a>
          <div className='ml-2 w-[20%] hidden lg:flex items-center '>
            <FaHandPointLeft  /><span className='ml-1'>(Click to connect)</span>
          </div>
        </div>
      </div>


    </>
  )
}

export default Contact;



{/*  <div className='sm:mt-14 w-[100%] sm:w-[50%] h-[30%] relative sm:h-[50%]'>
         <a href="https://goo.gl/maps/mSkJguE93MxdD5eg9" target="_blank" >
          <img src={Map} className="rounded" alt="Satvik Location" style={{width:"100%",height:"100%"}}></img>
          <div className='absolute bottom-2 left-2 sm:bottom-6 sm:left-6'>
         <p className=' font-sans font-semibold p-2 text-white rounded-md custom-p'>2-5-90/3,<br/>Satram Street,<br/>Allagadda - 518543,<br/>
         Nandyal District,<br/>Andhra Pradesh<br/><br/>ksvsatvik@gmail.com</p>
         </div>
        </a>
        </div> */}



{/*  <div className='px-4 sm:px-0 sm:mx-6 '>
            <h1 className="text-3xl text-white md:text-4xl pt-10  border-b-4 inline-block border-b-[#eb1c3e]  font-bold">Connect:</h1>
          </div>
          <div className='border-2 border-orange-600 w-[100%] h-[50%] flex justify-center'>
              <div className='border-red-600 border-2 w-[50%] h-[100%] '>
                  <div className='border-yellow-400 border-2 text-blue-600 hover:text-[lightgreen]'>
                      <a href="#" ><FaLinkedin size={50} /></a>
                  </div>
                  <div>
                    <a href="#" ><FaLinkedin size={50} /></a>
                  </div>
              </div>
          </div> */}