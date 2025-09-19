import React from "react";

export default function Campus() {
  return (
    <div>
      <div
        style={{
          position: "relative",
          backgroundImage:
            "url(https://jcpatriot.com/wp-content/uploads/2016/04/REAL-university-of-florida-pic.jpg)",
          height: "600px",
          backgroundSize: "cover",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 100%)",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "200px",
              left: "500px",
          color:"white"
              
            }}
          >
            <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          WelCome To Our Campus<br /> 
        </h1>
        <b><p style={{paddingLeft:"60px",fontFamily:"arial",}}>Connect, Learn and Grow with our Borlcelle Online Academy </p></b>
          </div>
        </div>
      </div>

      <div >
        <h1 style={{paddingLeft:"600px",fontWeight:"bold"}}>About our campus</h1>
        <div  style={{paddingLeft:"500px"}}>
    <p style={{fontWeight:"bold"}}>Our Borlcelle Online Academy is designed to bring students, instructors,</p>
          <p style={{paddingLeft:"20px",fontWeight: "bold"}}> and mentors to engage a discussions, join a collaborative </p>
            <p style={{paddingLeft:"30px",fontWeight:"bold"}}> environment. Participate in discussions, join clubs.</p>
            </div>
      </div>

      <div >
        <div style={{display:"flex",justifyContent:"center"}}>
        <h1>Community Highligths</h1></div>
      </div>

      <div style={{display:"flex",justifyContent:"center"}}> 
        <div style={{height:"200px",width:"300px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",marginRight:"10px"}}>
  <h2 style={{paddingLeft:"50px",fontWeight:"bold",paddingTop:"20px",fontFamily:"arial"}} >  Student Clubs</h2>
  <p style={{marginLeft:"50px"}}>join Coding , Design </p>
      <p style={{paddingLeft:"50px"}}>  and AI clubs</p>
        </div>
      
      <div style={{height:"200px",width:"300px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"}}>
  <h2 style={{paddingLeft:"50px",fontWeight:"bold",paddingTop:"20px",fontFamily:"arial"}} > Discussion Forums</h2>
  <p style={{marginLeft:"50px"}}>collaborate With peer </p>
      <p style={{paddingLeft:"50px"}}>  And Mentors</p>
        </div>
        <div style={{height:"200px",width:"300px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",marginLeft:"10px"}}>
  <h2 style={{paddingLeft:"50px",fontWeight:"bold",paddingTop:"20px",fontFamily:"arial"}} >  Peer Learning</h2>
  <p style={{marginLeft:"50px"}}>Study with like minded </p>
      <p style={{paddingLeft:"50px"}}> Learners</p>
        </div>
        </div>

        <div>
        <div style={{display:"flex",justifyContent:"center"}}>
        <h1>Campus Resources</h1></div>
      </div>

      <div style={{display:"flex",justifyContent:"center"}}> 
        <div style={{height:"100px",width:"300px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",marginRight:"10px"}}>
  <h2 style={{paddingLeft:"50px",fontWeight:"bold",paddingTop:"20px",fontFamily:"arial"}} > Digital Library</h2>
        </div>
      
      <div style={{height:"100px",width:"300px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"}}>
  <h2 style={{paddingLeft:"50px",fontWeight:"bold",paddingTop:"20px",fontFamily:"arial"}} > Study Materials</h2>
 
        </div>
        <div style={{height:"100px",width:"300px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",marginLeft:"10px"}}>
  <h2 style={{paddingLeft:"50px",fontWeight:"bold",paddingTop:"20px",fontFamily:"arial"}} >Mentorship Programs</h2>
  
        </div>
        </div>
    </div>
  );
}
