import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault(); 
    try{
      const response = await axios.post("http://localhost:4000/login",formData)
      const token = response.data.token;
      localStorage.setItem("authToken", token);
      console.log("Login successful. Token stored.");
     navigate("/home");

    
    }
   catch (error) {
  console.error("Login failed:", error.response?.data || error.message);
}


  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        backgroundColor: "white",
        marginBottom: "400px",
        height: "500px"
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
        }}
      >
        <div style={{ color: "green" }}>
          <h1>Login</h1>
        </div>

        <input
          type="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            display: "block",
            margin: "10px auto",
            padding: "10px",
            width: "250px",
            borderRadius: "10px",
            border: "3px solid grey"
          }}
        />

        <input
          type="password"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={{
            display: "block",
            margin: "10px auto",
            padding: "10px",
            width: "250px",
            borderRadius: "10px",
            border: "3px solid grey"
          }}
        />

        <button
          type="submit"
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "green",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
