import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";



export default function Home() {
  const navigate = useNavigate();

  return (
 
      <div>
        {/* Hero Section */}
        <div
          style={{
            position: "relative",
            height: "80vh",
            backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/010/495/822/large_2x/group-of-five-african-college-students-spending-time-together-on-campus-at-university-yard-black-afro-friends-sitting-on-grass-and-studying-with-laptops-photo.jpg")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "white",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.5)",
              zIndex: 1,
            }}
          ></div>

          <div
            style={{
              position: "relative",
              zIndex: 2,
              maxWidth: "800px",
              padding: "20px",
            }}
          >
            <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
              We Ensure better education <br /> for a better world
            </h1>
            <p style={{ margin: "20px 0", fontSize: "1.2rem" }}>
              Our cutting-edge curriculum is designed to empower students with
              the knowledge, skills, and experiences needed to excel in the
              dynamic field of education.
            </p>
            <button onClick={() => navigate("/course")}
              style={{
                background: "white",
                color: "black",
                border: "none",
                padding: "10px 20px",
                borderRadius: "25px",
                fontSize: "1rem",
                cursor: "pointer",
                
              }}
            >
              Explore more →
            </button>
          </div>
        </div>

        {/* Program Section */}
        <div>
          <h3
            style={{
              color: "blue",
              fontFamily: "arial",
              paddingLeft: "700px",
              paddingTop: "20px",
            }}
          >
            OUR PROGRAM
          </h3>
          <h2
            style={{
              color: "black",
              fontFamily: "arial",
              paddingLeft: "680px",
              marginTop: "10px",
            }}
          >
            <b>What We Offer</b>
          </h2>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div onClick={() => navigate("/course")}>
            <img
              src="https://wallpapers.com/images/hd/graduation-ceremony-1920-x-1080-wallpaper-ti6ja27d34102u79.jpg"
              alt="offer"
              style={{
                height: "250px",
                width: "200px",
                borderRadius: "10px",
                marginRight: "80px",
                cursor: "pointer",
              }}
            />
          </div>
          <div onClick={() => navigate("/course")}>
            <img
              src="https://wallpapers.com/images/hd/graduation-pictures-j6ftmgr1hti1z6go.jpg"
              alt="thi"
              style={{
                height: "250px",
                width: "200px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            />
          </div>
          <div onClick={() => navigate("/course")}>
            <img
              src="https://c1.wallpaperflare.com/preview/357/897/87/young-face-woman-portrait.jpg"
              alt="second"
              style={{
                height: "250px",
                width: "200px",
                borderRadius: "10px",
                marginLeft: "80px",
                cursor: "pointer",
              }}
            />
          </div>
        </div>

        {/* About Section */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <div>
            <img
              src="https://wallpapercave.com/wp/wp4064802.jpg"
              alt="oo"
              style={{ height: "350px", width: "300px" }}
            />
          </div>
          <div
            style={{
              background: "white",
              width: "800px",
              height: "250px",
              marginLeft: "40px",
              padding: "10px",
            }}
          >
            <h3 style={{ color: "blue", fontFamily: "arial" }}> ABOUT UNIVERSITY</h3>
            <b>
              <h2 style={{ lineHeight: "1.5px" }}>Nurturing Tomorrow's</h2>
              <h2>Leaders Today</h2>
            </b>
            <div style={{ fontFamily: "sans-serif", fontSize: "15px" }}>
              <p>
                Embark on a transformative educational journey with our university
                comprehensive education programs. Our cutting-edge curriculum is
                designed to empower students with the knowledge, skills, and
                experiences needed to excel in the dynamic field of education
              </p>
              <p>
                With a focus on innovation, hands-on learning, and personalized
                mentorship, our programs prepare aspiring educators to make a
                meaningful impact in classrooms, schools, and communities.
              </p>
              <p>
                Whether you aspire to become a teacher, counselor, or educational
                leader, our diverse range of programs offers the perfect pathway to
                achieve your goals.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div>
          <h3
            style={{
              color: "blue",
              fontFamily: "arial",
              paddingLeft: "700px",
              paddingTop: "20px",
              lineHeight: "1.5px",
            }}
          >
            GALLERY
          </h3>
          <h2
            style={{
              color: "black",
              fontFamily: "arial",
              paddingLeft: "650px",
              marginTop: "10px",
              fontSize: "20px",
            }}
          >
            <b>Campus Photos</b>
          </h2>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://www.campusfrance.org/sites/default/files/medias/images/2024-01/Etudiants_internationaux_campus_universite.jpg"
            alt="offer"
            style={{
              height: "250px",
              width: "200px",
              borderRadius: "10px",
              marginRight: "50px",
            }}
          />
          <img
            src="https://www.iii.org/sites/default/files/p_collegecampus_522307288.jpg"
            alt="offer"
            style={{
              height: "250px",
              width: "200px",
              borderRadius: "10px",
              marginRight: "50px",
            }}
          />
          <img
            src="https://s3.envato.com/files/241321071/MON1095002.jpg"
            alt="offer"
            style={{
              height: "250px",
              width: "200px",
              borderRadius: "10px",
              marginRight: "50px",
            }}
          />
          <img
            src="https://www.clarknexsen.com/wp-content/uploads/2016/10/douthit-pool-1920x1160.jpg"
            alt="offer"
            style={{
              height: "250px",
              width: "200px",
              borderRadius: "10px",
              marginRight: "50px",
            }}
          />
        </div>
      </div>
    
  );
}
