import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Work from "./components/Work.js";
import Contact from "./components/Contact.js";
import HomeTwo from "./components/HomeTwo.js";
import Button from "./components/Button.js";
/* import Home from "./assignment/assignment_components/Home.js";
import AboutUs from "./assignment/assignment_components/AboutUs.js";
import Courses from "./assignment/assignment_components/Courses.js";
import ConnectWithUs from "./assignment/assignment_components/ConnectWithUs.js"; 
import NavbarAssignment from "./assignment/NavbarAssignment.js";*/


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<HomeTwo />}></Route>
          <Route path="About" element={<About />}></Route>
          <Route path="About" element={<Button />}></Route>
          <Route path="Skills" element={<Skills />}></Route>
          <Route path="Work" element={<Work />}></Route>
          <Route path="Contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

{/* <Navbar />
    <HomeTwo />
    <About />
    <Skills />
    <Work />
    <Contact /> */}

{/* <BrowserRouter>
        <NavbarAssignment />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="AboutUs" element={<AboutUs />}></Route>
          <Route path="Courses" element={<Courses />}></Route>
          <Route path="ConnectWithUs" element={<ConnectWithUs />}></Route>
        </Routes>
      </BrowserRouter> */}