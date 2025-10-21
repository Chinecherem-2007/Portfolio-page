"use client";
import React from "react";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="container about-inner">
        <h2>About Me</h2>

        <p className="about-lead">
          I’m a professional Front-End Developer with a focus on building
          accessible, responsive and maintainable user interfaces. I turn
          designs into polished, production-ready experiences using modern web
          technologies.
        </p>

        <div className="about-grid">
          <div className="about-block">
            <h3>Core Skills</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Next.js</li>
              <li>React.js</li>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </div>

          <div className="about-block">
            <h3>Tools & Workflow</h3>
            <ul>
              <li>VS Code</li>
              <li>Chrome DevTools</li>
              <li>Git & GitHub (PRs, branches)</li>
            </ul>
          </div>
        </div>

        <p className="about-cta">
          I’m available for freelance work and collaborations — feel free to
          reach out via the contact section.
        </p>
      </div>
    </section>
  );
}
