import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "#fff",
        textAlign: "center",
        padding: "20px 0",
        marginTop: "40px",
        borderRadius:"10px"
      }}
    >
      <p>© {new Date().getFullYear()} Online Course Website. All Rights Reserved.</p>
     
    </footer>
  );
}
