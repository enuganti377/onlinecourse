import React from "react";
import { Link } from "react-router-dom";
import  Signup from "../Pages/Signup";
import Login from "../Pages/Login";

export default function Navbar() {
  return (
    <div style={{ 
                 position: "sticky",
                   top: 0, 
        zIndex: 1000,
        display: "flex",
        alignItems: "center", 
        justifyContent: "space-around", 
        background: "white",
        height: "95px",
        borderRadius: "10px", 
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
        padding: "0 20px",
        justifyItems:"center" ,
        
        
   
    }}>
         <div style={{cursor:"hower"}}>
        <img src="https://template.canva.com/EAGNWJ-U2ek/1/0/1600w-RHjjgo3tsb4.jpg" alt="ny course" style={{height:"95px",width:"180px",}}/>
    </div>

    
   <div style={{display:"flex", gap:"30px",fontSize:"20px",paddingLeft:"250px"}}>
           <b> <Link to="/" style={{ textDecoration: "none", color: "black", }}>Home</Link></b>
            <b> <Link to="/course" style={{ textDecoration: "none", color: "black" }}>Courses</Link></b>
          <b><Link to="/about" style={{ textDecoration: "none", color: "black" }}>About</Link></b>
           <b> <Link to="/campus" style={{ textDecoration: "none", color: "black" }}>Campus</Link></b>
        </div>
     <div style={{display:"flex", gap:"15px"}}>
            <button className="btn1"  style={{background:" #8e24aa",borderRadius:"8px", width:"90px"}}><b> <Link to="/Signup" style={{textDecoration:"none",fontSize:"20px",color:"white"}}>Sigin</Link> </b></button>
             <button className="btn2" style={{background:" #8e24aa",borderRadius:"8px", width:"90px"}}> <b><Link to="/Login" style={{textDecoration:"none",fontSize:"20px",color:"white"}}>Login</Link></b> </button>
        </div>




    </div>

   


      
  );
}
