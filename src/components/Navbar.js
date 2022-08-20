import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Experience from '../pages/Experience'
import Home from '../pages/Home'
import Layout from '../pages/Layout'
import Work from '../pages/Work'


const Navbar = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="About" element={<About />}/>
                <Route path="Experience" element={<Experience />}/>
                <Route path="Work" element={<Work />}/>
                <Route path="Contact" element={<Contact />}/>
             </Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Navbar