import React from "react";

export default function JavaFullstack() {
  return (

    <div>
     <div style={{ backgroundColor: "black", color: "white", height: "10px", display: "flex" }}>
  <h3 style={{ marginLeft: "50px" }}>Java Fullstack</h3>
</div>


    <div
      style={{
        background: "black",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
        display:"flex",
        gap:"60px"
      }}
    >
          
      <div style={{ marginTop: "20px" }}>
        <video
          width="400"
          height="300"
          controls
          style={{ borderRadius: "10px" }}
        >
          
          <source src="/video/task-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div>
          <h3>Title:  Java Introduction</h3>
          
        </div>
      </div>

       <div style={{ marginTop: "20px" }}>
        <video
          width="400"
          height="300"
          controls
          style={{ borderRadius: "10px" }}
        >
          <source src="/video/task3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div>
            <h3>Title: core Java</h3>
        </div>
      </div>
    </div>
    </div>
  
  );
}
