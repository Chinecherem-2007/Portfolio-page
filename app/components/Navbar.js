"use client";
import React from "react";

export default function Navbar({ setPage, page, darkMode, toggleDarkMode }) {
  return (
    <nav
      style={{
        backgroundColor: darkMode ? "#111" : "#f8f9fa",
        color: darkMode ? "#f8f9fa" : "#111",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1.4rem",
        }}
        onClick={() => setPage("home")}
      >
        Chinecherem.dev
      </h2>

      <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
        {["home", "about", "projects", "contact"].map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            style={{
              background: "transparent",
              border: "none",
              color: page === p ? (darkMode ? "#0dcaf0" : "#007bff") : "inherit",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "color 0.3s ease",
            }}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}

        <button
          onClick={toggleDarkMode}
          style={{
            border: "1px solid",
            borderColor: darkMode ? "#0dcaf0" : "#007bff",
            background: "transparent",
            padding: "6px 12px",
            borderRadius: "20px",
            cursor: "pointer",
            color: darkMode ? "#0dcaf0" : "#007bff",
            fontWeight: "bold",
          }}
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
