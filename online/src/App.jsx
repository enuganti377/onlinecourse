import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/component/Navbar";
import Home from "./assets/Pages/Home";
import Course from "./assets/Pages/Course";
import About from "./assets/Pages/About";
import Campus from "./assets/Pages/Campus";
import Signup from "./assets/Pages/Signup";
import Login from "./assets/Pages/Login";
import Footer from "./assets/component/Footer";
import JavaFullstack from "./assets/Pages/javaFullstack";

export default function App() {
  return (
    <>
      <Navbar />
      
       <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/home" element={<Home />} /> 
  <Route path="/course" element={<Course />} />
  <Route path="/about" element={<About />} />
  <Route path="/campus" element={<Campus />} />
  <Route path="/Signup" element={<Signup />} />
  <Route path="/Login" element={<Login />} />
  <Route path="/javaFullstack" element={<JavaFullstack />} />
</Routes>

      
      <Footer />
    </>
  );
}
