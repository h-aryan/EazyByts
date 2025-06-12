import React, { useEffect, useState } from "react";
import sanityClient from "../sanity";
import "./Skills.css";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "skill"]{ title, level, icon }`)
      .then((data) => setSkills(data))
      .catch(console.error);
  }, []);

  return (
    <section className="skills-section" id="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill.icon && <img src={skill.icon} alt={skill.title} />}
            <h3>{skill.title}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
