import React, { useEffect, useState } from "react";
import sanityClient from "../sanity";
import "./Achievements.css";

function Achievements() {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "achievement"]{ title, description, date }`)
      .then((data) => setAchievements(data))
      .catch(console.error);
  }, []);

  return (
    <section className="achievements-section" id="achievements">
      <h2>Achievements</h2>
      <div className="achievements-list">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span>{item.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
