"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ onProjectClick }) {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      description: "A weather forecast app that displays live weather conditions and temperatures for any city.",
      image: "/weather.jpg", // You can replace this later with your project thumbnail
      link: "https://chinecherem-2007.github.io/Weather-app/",
    },
    {
      id: 2,
      title: "Calculator",
      description: "A responsive calculator web app with simple, elegant design and smooth functionality.",
      image: "/calculator.jpg",
      link: "https://chinecherem-2007.github.io/calculator/",
    },
    {
      id: 3,
      title: "Login Form",
      description: "A clean and modern login form with responsive design and form validation.",
      image: "/login.jpg",
      link: "https://chinecherem-2007.github.io/Login/",
    },
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", color: "#007bff", marginBottom: "40px" }}>
        My Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => onProjectClick(project)}
          />
        ))}
      </div>
    </section>
  );
}
