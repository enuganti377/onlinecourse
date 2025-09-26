import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Course() {
 
  const [loading , setLoading] = useState(true);

   const navigate = useNavigate() ;
useEffect(() => {
  const verifyUser = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      await axios.get("https://onlinecourse-efpg.onrender.com/course", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setLoading(false);
    } catch (error) {
      console.error("Not Authorized:", error);
      navigate("/login");
    }
  };

  verifyUser();
}, [navigate]);
   


    if (loading) {
  return <h3>Loading...</h3>;
}

 
  

  
  return (
    <div>
     <div>
      <b>
      <h1 style={{color:"black",fontFamily:"arial",paddingTop:"20px",paddingLeft:"20px"}}>course</h1>
      </b>
     </div>
 

<div style={{display:"flex",justifyContent:"center" ,}}>
  
  <div  onClick={()=> navigate('/javaFullstack')}style={{height:"400px",width:"430px",borderRadius:"20px", textShadow: "0 2px 6px rgba(0,0,0,0.5)", marginRight:"10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}>
   <img src='https://datavalley-ai-prod.s3.amazonaws.com/files/20240504055953/Java-Full-Stack-1-1024x626.jpg' alt='java' style={{height:"250px",width:"400px",borderRadius:"20px",paddingLeft:"15px",paddingTop:"10px"}}/>
  <b> <h3 style={{fontFamily:"arial",paddingLeft:"20px"}}>  The Complate Java full stack</h3></b>
  <div style={{display:"flex",paddingLeft:"20px"}}>
   <img src='https://tutorssa.com.au/wp-content/uploads/2022/02/Ryan-Clarke.png' alt='sir' style={{borderRadius:"70px",height:"50px",width:"30px"}}/>
   <h3 style={{ paddingLeft:"10px"}} >John Does</h3>
   </div>
  </div>
  
  


  <div  onClick={()=> navigate('/Python')} style={{height:"400px",width:"430px",borderRadius:"20px", textShadow: "0 2px 6px rgba(0,0,0,0.5)", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"}}>
   <img src='https://tse2.mm.bing.net/th/id/OIP.ZIHkDjUIwSCiEqKjeSi28QHaE8?pid=Api&P=0&h=180' alt='java' style={{height:"250px",width:"400px",borderRadius:"20px",paddingLeft:"15px",paddingTop:"10px"}}/>
  <b> <h3 style={{fontFamily:"arial",paddingLeft:"20px"}}>  Introudaction to python</h3></b>
  <div style={{display:"flex",paddingLeft:"20px"}}>
<img src='https://tse3.mm.bing.net/th/id/OIP.xJP7cm5iFXSmhqdluXrPLgHaHa?pid=Api&P=0&h=180' alt='sir' style={{borderRadius:"70px",height:"50px",width:"30px"}}/>
<h3 style={{ paddingLeft:"10px"}} >Aryan</h3>
</div>
  </div>



  <div   onClick={()=> navigate('/Mern')}style={{height:"400px",width:"430px",borderRadius:"20px", textShadow: "0 2px 6px rgba(0,0,0,0.5)", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",marginLeft:"10px"}}>
   <img src='https://wallpapercave.com/wp/wp8725091.jpg' alt='java' style={{height:"250px",width:"400px",borderRadius:"20px",paddingLeft:"15px",paddingTop:"10px"}}/>
  <b> <h3 style={{fontFamily:"arial",paddingLeft:"20px"}}>  The Complate MERN full stack</h3></b>
  <div style={{display:"flex",paddingLeft:"20px"}}>
<img src='https://go2tutors.com/wp-content/uploads/2025/08/image_1756216923760.jpg' alt='sir' style={{borderRadius:"70px",height:"50px",width:"30px"}}/>
<h3 style={{ paddingLeft:"10px"}} >Ishaan</h3>
</div>
  </div>


  
</div>
<div onClick={()=> navigate('/DEVOPS')}style={{display:"flex",justifyContent:"center",marginTop:"50px"}}>
  <div style={{height:"400px",width:"430px",borderRadius:"20px", textShadow: "0 2px 6px rgba(0,0,0,0.5)", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",marginRight:"10px"}}>
   <img src='https://thumbs.dreamstime.com/z/devops-software-development-concept-devops-software-development-concept-172247523.jpg' alt='java' style={{height:"250px",width:"400px",borderRadius:"20px",paddingLeft:"15px",paddingTop:"10px"}}/>
  <b> <h3 style={{fontFamily:"arial",paddingLeft:"20px"}}>  DEVOPS</h3></b>
  <div style={{display:"flex",paddingLeft:"20px"}}>
   <img src='https://tse4.mm.bing.net/th/id/OIP.hhiuEV5go8oZ1bK5reCvsQHaE7?pid=Api&P=0&h=180' alt='sir' style={{borderRadius:"70px",height:"50px",width:"30px"}}/>
   <h3 style={{ paddingLeft:"10px"}} >Vikram</h3>
   </div>
  </div>
  
  <div onClick={()=> navigate('/UI')} style={{height:"400px",width:"430px",borderRadius:"20px", textShadow: "0 2px 6px rgba(0,0,0,0.5)", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"}}>
   <img src='https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct/What-is-UI-UX-Design.jpg' alt='java' style={{height:"250px",width:"400px",borderRadius:"20px",paddingLeft:"15px",paddingTop:"10px"}}/>
  <b> <h3 style={{fontFamily:"arial",paddingLeft:"20px"}}> UI & UX Design</h3></b>
  <div style={{display:"flex",paddingLeft:"20px"}}>
<img src='https://hily.com/wp-content/uploads/2023/02/image-1-2.png' alt='sir' style={{borderRadius:"70px",height:"50px",width:"30px"}}/>
<h3 style={{ paddingLeft:"10px"}} >Arush</h3>
</div>
  </div>

  <div onClick={()=> navigate('/AI')} style={{height:"400px",width:"430px",borderRadius:"20px", textShadow: "0 2px 6px rgba(0,0,0,0.5)", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",marginLeft:"10px"}}>
   <img src='https://erode-sengunthar.ac.in/wp-content/uploads/2024/02/aiml-image-1.png' alt='java' style={{height:"250px",width:"400px",borderRadius:"20px",paddingLeft:"15px",paddingTop:"10px"}}/>
  <b> <h3 style={{fontFamily:"arial",paddingLeft:"20px"}}>AI & ML</h3></b>
  <div style={{display:"flex",paddingLeft:"20px"}}>
<img src='https://lh3.googleusercontent.com/AVf8QID77dbLZdu-PqPAhwjNtbJ9RhqrOPmeo7PVhwRInnJxaCgLU_8gzquMDUdDebUi42LKsfo56AzjMxC8e0BjSQ99hcMRPfk' alt='sir' style={{borderRadius:"70px",height:"50px",width:"30px"}}/>
<h3 style={{ paddingLeft:"10px"}} >Ishita</h3>
</div>
  </div>
  
  
</div>

    </div>
  )
}
