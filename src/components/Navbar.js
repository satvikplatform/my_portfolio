import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Resume from "../assets/Dorian_Dominguez_Resume.pdf";



const Navbar = () => {
   const [mobileList, setMobileList] = useState(false);
   const [state, setState] = useState({
      main: {
         borderBottom: "3px solid cyan",
         color: "rgb(105, 250, 255)",
         textShadow: "0px 0px 5px rgb(90, 255, 250)",
      },
      about: {
         borderBottom: "",
         color: "",
         textShadow: "",
      },
      skills: {
         borderBottom: "",
         color: "",
         textShadow: "",
      },
      work: {
         borderBottom: "",
         color: "",
         textShadow: "",
      },
      contact: {
         borderBottom: "",
         color: "",
         textShadow: "",
      },
   });

   const clickHandler = () => {
      setMobileList((prevState) => { return prevState === false ? true : false });
   }
   const homeHandler = () => {
      setState(() => { return { about: {}, skills: {}, work: {}, contact: {}, main: { borderBottom: "3px solid cyan", color: "rgb(105, 250, 255)", textShadow: "0px 0px 5px rgb(90, 255, 250)" } } });
   }
   const aboutHandler = () => {
      setState(() => {
         return {
            main: {}, skills: {}, work: {}, contact: {}, about: {
               borderBottom: "3px solid cyan", color: "rgb(105, 250, 255)",
               textShadow: "0px 0px 5px rgb(90, 255, 250)"
            }
         }
      });
   }
   const skillsHandler = () => {
      setState(() => {
         return {
            main: {}, about: {}, work: {}, contact: {}, skills: {
               borderBottom: "3px solid cyan", color: "rgb(105, 250, 255)",
               textShadow: "0px 0px 5px rgb(90, 255, 250)"
            }
         }
      });
   }
   const workHandler = () => {
      setState(() => {
         return {
            main: {}, about: {}, skills: {}, contact: {}, work: {
               borderBottom: "3px solid cyan", color: "rgb(105, 250, 255)",
               textShadow: "0px 0px 5px rgb(90, 255, 250)"
            }
         }
      });
   }
   const contactHandler = () => {
      setState(() => {
         return {
            main: {}, about: {}, skills: {}, work: {}, contact: {
               borderBottom: "3px solid cyan", color: "rgb(105, 250, 255)",
               textShadow: "0px 0px 5px rgb(90, 255, 250)"
            }
         }
      });
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
                  <Link onClick={homeHandler} className='font-medium' style={state.main} to="/">Home</Link>
               </li>
               <li>
                  <Link onClick={aboutHandler} className='font-medium' style={{ borderBottom: state.about.borderBottom, color: state.about.color, textShadow: state.about.textShadow }} to="/About">About</Link>
               </li>
               <li>
                  <Link onClick={skillsHandler} className='font-medium' style={{ borderBottom: state.skills.borderBottom, color: state.skills.color, textShadow: state.skills.textShadow }} to="/Skills">Skills</Link>
               </li>
               <li>
                  <Link onClick={workHandler} className='font-medium' style={{ borderBottom: state.work.borderBottom, color: state.work.color, textShadow: state.work.textShadow }} to="/Work">Work</Link>
               </li>
               <li>
                  <a href={Resume} className='font-medium' target="_blank">Resume</a>
               </li>
               <li>
                  <Link onClick={contactHandler} className='font-medium' style={{ borderBottom: state.contact.borderBottom, color: state.contact.color, textShadow: state.contact.textShadow }} to="/Contact">Contact</Link>
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
                        <Link style={state.main} onClick={() => { clickHandler(); homeHandler(); }} to="/">Home</Link>
                     </li>
                     <li className="py-7">
                        <Link style={{
                           borderBottom: state.about.borderBottom, color: state.about.color,
                           textShadow: state.about.textShadow
                        }} onClick={() => { clickHandler(); aboutHandler(); }} to="/About">About</Link>
                     </li>
                     <li className="py-7">
                        <Link style={{
                           borderBottom: state.skills.borderBottom, color: state.skills.color,
                           textShadow: state.skills.textShadow
                        }} onClick={() => { clickHandler(); skillsHandler(); }} to="/Skills">Skills</Link>
                     </li>
                     <li className="py-7">
                        <Link style={{
                           borderBottom: state.work.borderBottom, color: state.work.color,
                           textShadow: state.work.textShadow
                        }} onClick={() => { clickHandler(); workHandler(); }} to="/Work">Work</Link>
                     </li>
                     <li className="py-7">
                        <a href={Resume} target="_blank">Resume</a>
                     </li>
                     <li className="py-7">
                        <Link style={{
                           borderBottom: state.contact.borderBottom, color: state.contact.color,
                           textShadow: state.contact.textShadow
                        }} onClick={() => { clickHandler(); contactHandler(); }} to="/Contact">Contact</Link>
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