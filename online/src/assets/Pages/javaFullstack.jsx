import React from "react";

export default function JavaFullstack() {
  return (
    <div
      style={{
        background: "black",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div style={{ marginTop: "20px" }}>
        <iframe
          width="400"
          height="300"
          src="https://www.youtube.com/embed/BZoBIyrmmC4"

          title="Java Full Stack Course"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: "10px" }}
        ></iframe>
        <div><h2>java introduction</h2></div>
      </div>
    </div>
  );
}
