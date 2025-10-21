"use client";
import React from "react";

export default function HomeSection({ setPage }) {
  return (
    <section
      style={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "50px 20px",
      }}
    >
      <img
        src="/profile.jpg"
        alt="Profile"
        style={{
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "25px",
          border: "3px solid #007bff",
        }}
      />
      <h1 style={{ fontSize: "2.3rem", marginBottom: "10px" }}>
        Hi, I’m <span style={{ color: "#007bff" }}>Chinecherem Divine</span>
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
          lineHeight: "1.6",
          marginBottom: "30px",
          color: "inherit",
        }}
      >
        I’m a passionate Frontend Developer focused on crafting clean, beautiful, and
        user-friendly web experiences. I love turning ideas into interactive digital realities.
      </p>

      <button
        onClick={() => setPage("projects")}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "12px 25px",
          border: "none",
          borderRadius: "25px",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "bold",
          transition: "0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        View My Work
      </button>
    </section>
  );
}
