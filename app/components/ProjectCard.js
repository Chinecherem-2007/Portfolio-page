"use client";
import React from "react";

export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: "rgba(0, 123, 255, 0.05)",
        border: "1px solid #007bff",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        color: "inherit",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
          }}
        />
      )}

      <div style={{ padding: "20px" }}>
        <h3 style={{ color: "#007bff", marginBottom: "10px" }}>
          {project.title}
        </h3>
        <p style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>
          {project.description}
        </p>
      </div>
    </div>
  );
}
