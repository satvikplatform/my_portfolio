import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>

    <nav class=" ">
      <ul class="fixed flex w-full h-[80px] bg-[lightblue]  ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Experience">Experience</Link>
        </li>
        <li>
          <Link to="/Work">Work</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
    </>
  )
}

export default Layout