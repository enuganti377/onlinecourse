import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/signup", formData);
      console.log("Signup successful:", response.data);
      navigate("/login"); 
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
    }
  };

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
          <h1>Signup</h1>
        </div>

        <input
          type="text"
          id="username"
          placeholder="Username"
          value={formData.username}
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
            background: "green",
            color: "white",
            borderRadius: "10px",
            height: "40px",
            width: "90px"
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
} 
