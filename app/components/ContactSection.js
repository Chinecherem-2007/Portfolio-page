"use client";
import React from "react";

export default function ContactSection() {
  const email = "chinecheremugwuarua@gmail.com";
  const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}`;

  return (
    <section className="contact-section">
      <div className="container contact-inner">
        <h2>Contact</h2>

        <p>
          <strong>Email:</strong>{" "}
          {/* open Gmail compose in a new tab, but keep mailto fallback */}
          <a href={gmailCompose} target="_blank" rel="noopener noreferrer">
            {email} (Open in Gmail)
          </a>{" "}
          •{" "}
          <a href={`mailto:${email}`} title="Open default mail client">
            Use mail client
          </a>
        </p>

        <p>
          <strong>WhatsApp:</strong>{" "}
          <a
            href="https://wa.me/2347076798989"
            target="_blank"
            rel="noopener noreferrer"
          >
            +234 707 679 8989
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/chinecherem-divine-b3108a34a"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/chinecherem-divine-b3108a34a
          </a>
        </p>

        <p className="contact-note">
          Prefer another platform? Let me know and I’ll add it here.
        </p>
      </div>
    </section>
  );
}
