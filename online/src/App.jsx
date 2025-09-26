
import React from "react";
import Navbar from "./assets/component/Navbar.jsx";
import Home from "./Home.jsx";
import Course from "./assets/Pages/Course.jsx";
import About from "./assets/Pages/About.jsx";
import Campus from "./assets/Pages/Campus.jsx";
import Signup from "./assets/Pages/Signup.jsx";
import Login from "./assets/Pages/Login.jsx";
import Footer from "./assets/component/Footer.jsx";
import JavaFullstack from "./assets/Pages/javaFullstack.jsx";
import Python from "./assets/Pages/python.jsx";
import AI  from "./assets/Pages/AI.jsx";
import DEVOPS from "./assets/Pages/DEVOPS.jsx";
import UI from "./assets/Pages/UI.jsx";
import MERN  from "./assets/Pages/mern.jsx";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
      <Navbar />
      
       <Routes>
 <Route path="/" element={<Home />} /> 
  <Route path="/course" element={<Course />} />
  <Route path="/about" element={<About />} />
  <Route path="/campus" element={<Campus />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/login" element={<Login />} />
  <Route path="/javaFullstack" element={<JavaFullstack />} />
   <Route path="/python" element={< Python/>} />
   <Route path="/AI" element={< AI/>} />
   <Route path="/DEVOPS" element={< DEVOPS/>} />
    <Route path="/UI" element={< UI/>} /> 
    <Route path="/MERN" element={< MERN/>} /> 

</Routes>

      
      <Footer />
    </>
  );
}
