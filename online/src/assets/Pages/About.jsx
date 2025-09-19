import React from "react";

const statsData = [
  { icon: "🌐", value: "3+", label: "Years of Language Education Experience" },
  { icon: "💻", value: "99+", label: "Innovative Foreign Online Courses" },
  { icon: "👩‍🏫", value: "10+", label: "Qualified Teachers and Language Experts" },
  { icon: "📖", value: "11+", label: "Learners Enrolled in Educational Courses" },
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          backgroundImage:
            "url(https://i.pinimg.com/736x/e3/98/2c/e3982cc208873792337b423d9e7714b3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px",
          height: "500px",
          overflow: "hidden",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        {/* Text Content */}
        <div
          style={{
            position: "absolute",
            bottom: 50,
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            maxWidth: "80%",
            textAlign: "center",
            textShadow: "0 2px 6px rgba(0,0,0,0.5)",
            marginBottom:"100px"
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 36,
              fontWeight: 800,
              letterSpacing: 0.2,
            }}
          >
            Learn Smarter, Not Harder
          </h2>
          <p style={{ fontSize: 16, opacity: 0.95 }}>
            Hand-crafted courses with real projects and clear explanations.
          </p>

          <button
            style={{
              marginTop: 14,
              padding: "10px 16px",
              background: "white",
              color: "#111",
              border: "none",
              borderRadius: 999,
              fontWeight: 700,
              cursor: "pointer",
            }}
            onClick={() => alert("CTA clicked")}
          >
            Explore Courses
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          textAlign: "center",
          padding: "40px 0",
          background: "#f9f9f9",
          borderRadius: "10px",
          marginTop: "30px",marginLeft:"200px",
          marginRight:"200px"
        }}
      >
        {statsData.map((stat, index) => (
          <div key={index} style={{ flex: "1", margin: "0 10px" }}>
            <div style={{ fontSize: "40px", marginBottom: "10px" }}>
              {stat.icon}
            </div>
            <h2
              style={{
                color: "#3b82f6",
                fontSize: "28px",
                margin: "5px 0",
              }}
            >
              {stat.value}
            </h2>
            <p style={{ fontSize: "14px", color: "#555" }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
