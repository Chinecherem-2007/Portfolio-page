"use client";
import React from "react";

export default function ProjectView({ project, onBack }) {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          color: "#007bff",
          marginBottom: "25px",
        }}
      >
        {project.title}
      </h2>

      <p
        style={{
          fontSize: "1.1rem",
          maxWidth: "700px",
          margin: "0 auto 30px auto",
          lineHeight: "1.6",
        }}
      >
        {project.description}
      </p>

      {/* Embedded Live Project */}
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "500px",
          margin: "0 auto",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          marginBottom: "30px",
        }}
      >
        <iframe
          src={project.link}
          title={project.title}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      </div>

      <button
        onClick={onBack}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "25px",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "background 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        ← Back to Projects
      </button>
    </section>
  );
}
