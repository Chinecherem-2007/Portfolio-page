"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import ProjectView from "./components/ProjectView";
import "./globals.css";

export default function Page() {
  const [page, setPage] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Add or remove the global class on <body> so CSS variables apply everywhere
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    // cleanup not strictly necessary here but safe
    return () => {
      document.body.classList.remove("dark-mode");
    };
  }, [darkMode]);

  const projects = [
    {
      title: "Weather App",
      description: "Check real-time weather for any city.",
      link: "https://chinecherem-2007.github.io/Weather-app/",
    },
    {
      title: "Calculator",
      description: "A simple calculator built with JavaScript.",
      link: "https://chinecherem-2007.github.io/calculator/",
    },
    {
      title: "Login Form",
      description: "A stylish responsive login form.",
      link: "https://chinecherem-2007.github.io/Login/",
    },
  ];

  const openProject = (project) => {
    setSelectedProject(project);
    setPage("projectView");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeProject = () => {
    setSelectedProject(null);
    setPage("projects");
  };

  return (
    <div className="app-root">
      <Navbar
        setPage={setPage}
        page={page}
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode((s) => !s)}
      />

      {page === "home" && <HomeSection setPage={setPage} />}
      {page === "about" && <AboutSection />}
      {page === "projects" && (
        <ProjectsSection onProjectClick={openProject} projects={projects} />
      )}
      {page === "contact" && <ContactSection />}
      {page === "projectView" && selectedProject && (
        <ProjectView project={selectedProject} onBack={closeProject} />
      )}
    </div>
  );
}
