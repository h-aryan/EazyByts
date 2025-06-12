import React from "react";

export default function About() {
  return (
    <section
      style={{
        padding: "6rem 2rem",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "left",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "800",
          marginBottom: "1.5rem",
          alignSelf: "flex-start",
        }}
      >
        About Me
      </h1>
      <div style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#ccc" }}>
        <p style={{ marginBottom: "1rem" }}>
          Hello! I'm Harsh Aryan, a passionate full-stack developer with a
          strong foundation in both frontend and backend technologies. I love
          building fast, responsive, and scalable web applications that solve
          real-world problems.
        </p>
        <p style={{ marginBottom: "1rem" }}>
          My tech stack includes React, Node.js, Express, and MongoDB, and I'm
          also experienced in creating RESTful APIs, working with CMS platforms
          like Sanity, and designing elegant UIs with CSS and Tailwind.
        </p>
        <p style={{ marginBottom: "1rem" }}>
          Whether it's a dynamic portfolio site, a login-protected dashboard, or
          a backend authentication system, I enjoy every part of the
          process—from idea to deployment.
        </p>
        <p>
          Outside of coding, I actively participate in technical communities,
          organize events, and love to explore creative and impactful side
          projects.
        </p>
      </div>
    </section>
  );
}
