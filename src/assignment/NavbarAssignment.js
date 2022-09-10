import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, } from "react-icons/fa";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

const NavbarAssignment = () => {
    const [state, setState] = useState({
        show: false,
        companyBtn: "",
        academyBtn: "",
        text: "",
    });

    const sideBarHandler = () => {
        setState((prevState) => { return { ...prevState, show: prevState.show ? false : true } });
    };
    const companyBtnHandler = () => {
        setState((prevState) => { return { ...prevState, companyBtn: "lightblue", academyBtn: "", text: "Company" } });

    };
    const academyBtnHandler = () => {
        setState((prevState) => { return { ...prevState, academyBtn: "lightpink", companyBtn: "", text: "Academy" } });
    };
    return (
        <>
            <div className='w-full h-[60px]  flex justify-between items-center'>
                <div className='flex items-center'>
                    <div className='mx-2 cursor-pointer duration-300'>
                        <FaBars onClick={sideBarHandler} />
                    </div>
                    <div className='select-none'>
                        <h1 className='font-bold text-lg md:text-2xl pl-2'>SifitingBytes</h1>
                    </div>
                </div>
                <div>
                    <button onClick={companyBtnHandler} style={{ backgroundColor: state.companyBtn }} className='border-2 text-sm px-1  py-1 md:text-base mr-2 border-black md:px-2 md:py-1 md:mx-2'>Company</button>
                    <button onClick={academyBtnHandler} style={{ backgroundColor: state.academyBtn }} className='border-2 text-sm px-1 py-1 md:text-base border-black md:px-2 md:py-1'>Academy</button>
                </div>
                <div className='hidden md:flex'>
                    <button className='border-2 border-black px-2 py-1 mx-2'>Login</button>
                    <button className='border-2 border-black px-2 py-1 mr-2'>Signup</button>
                </div>
                {state.show &&
                    <div className='w-[200px] md:w-[240px] h-screen bg-white z-2 border-2 border-blue-600 absolute top-[60px] left-0'>
                        <ul className='h-full flex flex-col items-center'>
                            <li onClick={sideBarHandler}>
                                <Link to="/">{state.text} Home</Link>
                            </li>
                            <li onClick={sideBarHandler}>
                                <Link to = "/AboutUs">{state.text} About Us</Link>
                            </li>
                            <li onClick={sideBarHandler}>
                               <Link to = "/Courses">{state.text} Courses</Link>
                            </li>
                            <li onClick={sideBarHandler}>
                               <Link to = "ConnectWithUs">{state.text} Connect with us</Link>
                            </li>
                            <li className='md:hidden'>Login</li>
                            <li className='md:hidden'>signup</li>
                        </ul>
                    </div>
                }

            </div>
            <Outlet />
        </>
    )
}

export default NavbarAssignment