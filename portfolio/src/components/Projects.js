import React, { useEffect, useState } from "react";
import sanityClient from "../sanity";
import "../components/Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          title,
          description,
          link,
          image {
            asset -> {
              _id,
              url
            }
          }
        }`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  return (
    <section className="projects-section">
      <h2 className="section-heading">Projects</h2>
      <div className="projects-wrapper">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image?.asset?.url}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
