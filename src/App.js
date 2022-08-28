import React from "react";
/* import { BrowserRouter, Routes, Route } from "react-router-dom"; */
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Work from "./components/Work.js";
import Contact from "./components/Contact.js";
import HomeTwo from "./components/HomeTwo.js";






function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
                <Route index element={<Home />}></Route>
                <Route path="About" element={<About />}></Route>
                <Route path="Skills" element={<Skills />}></Route>
                <Route path="Work" element={<Work />}></Route>
                <Route path="Contact" element={<Contact />}></Route>
        </Routes>
    </BrowserRouter> */}
    <Navbar />
    <HomeTwo />
    <About />
    <Skills />
    <Work />
    <Contact />
    </div>
  );
}

export default App;
