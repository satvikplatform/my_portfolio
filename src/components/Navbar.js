import React, { useState } from 'react'
import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin, } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';



const Navbar = () => {
   const [mobileList, setMobileList] = useState(false);

   const clickHandler = () => {
      setMobileList(() => { return mobileList === false ? true : false });
   }
   return (
      <>
         <div className=" bg-gradient-to-r from-[#c31432] to-[#2b0c41] border-blue-500 text-white text-xl sticky top-0 left-0 right-0 z-50 flex justify-between items-center w-full h-[110px]">
               <div>
                 {/*  <img src={Logo} alt="Logo Image" style={{ height: "100%" }} /> */}
                 <h1 className="uppercase text-2xl lg:text-3xl font-bold mx-8 flex justify-center items-center font-mono"></h1>
               </div>
               <ul className="hidden md:flex">
                  <li>
                     <a href="/">Home</a>
                  </li>
                  <li>
                     <a href="/About">About</a>
                  </li>
                  <li>
                     <a href="/Skills">Skills</a>
                  </li>
                  <li>
                     <a href="/Work">Work</a>
                  </li>
                  <li>
                     <a href="/Contact">Contact</a>
                  </li>
               </ul>
               {/*Hamburger */}
               <div onClick={clickHandler} className="m-2 md:hidden">
                  {mobileList ? <FaTimes /> : <FaBars />}
               </div>
               {/*Mobile List*/}
               {mobileList &&
                  <div className="text-white bg-gradient-to-t from-[#c31432] to-[#2b0c41]  w-48 h-screen  font-bold text-sm absolute top-[110px] right-0 md:hidden">
                     <ul className="flex flex-col items-center h-screen">
                        <li className="py-8">
                           <a href="/">Home</a>
                        </li>
                        <li className="py-8">
                           <a href="/About">About</a>
                        </li>
                        <li className="py-8">
                           <a href="/Skills">Skills</a>
                        </li>
                        <li className="py-8">
                           <a href="/Work">Work</a>
                        </li>
                        <li className="py-8">
                           <a href="/Contact">Contact</a>
                        </li>
                     </ul>
                  </div>
               }
               {/*  Social Media Icons*/}
               <div className=" hidden lg:flex text white  fixed top-[110px] left-[10%] bg-slate-500 h-[20px] ">
                  <ul className="flex">
                     <li className="bg-blue-500 hover:bg-blue-900 hover:mt-[10px] duration-300  w-[40px] h-[40px] flex flex-col items-center justify-center">
                        <a title="Linkedin" href="/"><FaLinkedin size={20} /></a>
                     </li>
                     <li className="bg-[#333333] hover:bg-black hover:mt-[10px] duration-300   w-[40px] h-[40px] flex flex-col items-center justify-center">
                        <a  href="/" title='Github'><FaGithub size={20} /></a>
                     </li>
                     <li  className="bg-[teal] hover:bg-green-800 hover:mt-[10px] duration-300   w-[40px] h-[40px] flex flex-col items-center justify-center">
                        <a title="Email" href="/"> <HiOutlineMail size={20} /></a>
                     </li>
                     <li  className="bg-indigo-600 hover:bg-indigo-900 hover:mt-[10px] duration-300   w-[40px] h-[40px] flex flex-col items-center justify-center">
                        <a title="Resume" href="/"> <BsFillPersonLinesFill size={20} /></a>
                     </li>
                  </ul>
               </div>
         </div>
           </>
   )
}

export default Navbar