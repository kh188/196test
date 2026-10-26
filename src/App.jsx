import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Settings from "./pages/Settings";
import About from "./pages/About";
import Projects from "./pages/projects";
import Contact from "./pages/contacts";

const App = () =>{
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contacts" element={<Contact/>}/>

        
      </Routes>
    </div>
  )
}

export default App