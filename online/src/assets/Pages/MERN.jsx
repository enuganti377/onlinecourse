import React from "react";
import { Link } from "react-router-dom";

export default function MERN() {
  return (
    <div
      style={{
        background: "black",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "black",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "white" }}> No content here yet! </h1>
        <p style={{ color: "white", marginTop: "10px" }}>
          Please check back later.
          <br></br>
          <br></br>
           <Link to="/course">navigate to course</Link>
        </p>
      </div>
    </div>
  );
}
