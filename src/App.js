import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Resume from "./pages/Resume"
import Project from "./pages/Project"
import Service from "./pages/Service"
import Contact from "./pages/Contact"
import Navbar from "./router/navbar";
import './App.css'


const App =()=> {
  return (
    <div className="App">
     <Router>
      <Navbar/>

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume"  element={<Resume/>} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App