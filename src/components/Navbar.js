import React, { useState } from 'react'
import { Outlet, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Resume from "../assets/Dorian_Dominguez_Resume.pdf";



const Navbar = () => {
   const [mobileList, setMobileList] = useState(false);
  /*  const [state, setState] = useState({
      main: {
         borderBottom: "3px solid cyan",
         color: "rgb(105, 250, 255)",
         textShadow: "0px 0px 5px rgb(90, 255, 250)",
      },
   }); */

   const clickHandler = () => {
      setMobileList((prevState) => { return prevState === false ? true : false });
   }
  
 
   return (
      <>
         <div className=" bg-gradient-to-r from-[#c31432] to-[#2b0c41]   text-xl sticky top-0 left-0 right-0 z-50 flex justify-between items-center w-full h-[100px]">
            <div className='flex justify-center xl:justify-start items-center w-[40%] sm:w-[20%] lg:w-[30%] h-[100%]'>
               <div className='mx-10 w-[50%] sm:w-[70%] lg:w-[30%] xl:w-[25%] 2xl:w-[20%] h-[70%] sm:h-[70%] lg:h-[90%]   flex justify-center items-center box' style={{ textShadow: "0px 0px 5px rgb(90, 255, 250)" }}>
                  <span style={{color: "rgb(105, 250, 255)"}} className='text-3xl z-10  lg:text-5xl font-semibold'>K</span>
                  <span style={{color: "rgb(105, 250, 255)"}} className='text-3xl z-10  lg:text-5xl font-semibold'>S</span>
               </div>
            </div>

            <ul className="hidden md:flex text-gray-200">
               <li>
                  <NavLink  className='font-medium'  to="/">Home</NavLink>
               </li>
               <li>
                  <NavLink  className='font-medium'  to="/About">About</NavLink>
               </li>
               <li>
                  <NavLink  className='font-medium'  to="/Skills">Skills</NavLink>
               </li>
               <li>
                  <NavLink  className='font-medium'  to="/Work">Work</NavLink>
               </li>
               <li>
                  <a href={Resume} className='font-medium' target="_blank">Resume</a>
               </li>
               <li>
                  <NavLink  className='font-medium'  to="/Contact">Contact</NavLink>
               </li>
            </ul>
            {/*Hamburger */}
            <div onClick={clickHandler} className="mx-6 md:hidden text-white">
               {mobileList ? <FaTimes /> : <FaBars />}
            </div>
            {/*Mobile List*/}
            {mobileList &&
               <div className="text-white bg-gradient-to-t from-[#c31432] to-[#2b0c41]  w-48 h-screen  font-semibold text-sm absolute top-[100px] right-0 md:hidden">
                  <ul className="flex flex-col items-center h-screen">
                     <li className="py-7">
                        <NavLink  onClick={clickHandler} to="/">Home</NavLink>
                     </li>
                     <li className="py-7">
                        <NavLink onClick={clickHandler} to="/About">About</NavLink>
                     </li>
                     <li className="py-7">
                        <NavLink onClick={clickHandler} to="/Skills">Skills</NavLink>
                     </li>
                     <li className="py-7">
                        <NavLink  onClick={clickHandler} to="/Work">Work</NavLink>
                     </li>
                     <li className="py-7">
                        <a href={Resume} target="_blank">Resume</a>
                     </li>
                     <li className="py-7">
                        <NavLink  onClick={clickHandler} to="/Contact">Contact</NavLink>
                     </li>
                  </ul>
               </div>
            }
            {/*   Social Media Icons */}
            <div className=" hidden text-white lg:flex flex-col fixed top-[40%] right-0">
               <ul>
                  <li className="bg-[#0072b1] px-3 fixed top-[40%] right-0 opacity-80 hover:opacity-100  hover:bg-blue-900 flex justify-start items-center duration-300 w-[120px] h-[40px] mr-[-80px] hover:mr-[-10px]">
                     <a className='text-sm font-semibold w-full h-full flex items-center justify-between' title="Linkedin" href="/"><FaLinkedin size={20} />Linkedin</a>
                  </li>
                  <li className="bg-[#333333] fixed top-[46.9%] right-0 px-3 opacity-80 hover:opacity-100 hover:bg-black duration-300 flex justify-start items-center  w-[120px] h-[40px]  mr-[-80px] hover:mr-[-10px]">
                     <a className='text-sm font-semibold w-full h-full flex items-center justify-between' href="/" title='Github'><FaGithub size={20} />Github</a>
                  </li>
                  <li className="bg-blue-600 px-3 fixed top-[53.9%] right-0 opacity-80 hover:opacity-100  hover:bg-blue-900 flex justify-start items-center duration-300 w-[120px] h-[40px] mr-[-80px] hover:mr-[-10px]">
                     <a className='text-sm font-semibold w-full h-full flex items-center justify-between' title="Facebook" href="https://www.facebook.com/satvik.karanam" target="_blank"><FaFacebook size={20} />Facebook</a>
                  </li>
               </ul>
            </div>
         </div>
         <Outlet />
      </>
   )
}

export default Navbar

{/* <li className="bg-[teal] hover:bg-green-800 hover:mt-[10px] duration-300   w-[40px] h-[40px] flex flex-col items-center justify-center">
                     <a title="Email" href="/"> <HiOutlineMail size={20} /></a>
                  </li>
                  <li className="bg-indigo-600 hover:bg-indigo-900 hover:mt-[10px] duration-300   w-[40px] h-[40px] flex flex-col items-center justify-center">
                     <a title="Resume" href="/"> <BsFillPersonLinesFill size={20} /></a>
                  </li> */}