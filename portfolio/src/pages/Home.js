import React from "react";
import { useNavigate } from "react-router-dom";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Achievement from "../components/Achievements";
import Navbar from "../components/Navbar";

import "../pages/Home.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="intro-background">
        <div className="intro">
          <h1 className="intro-title">Hi, I’m Harsh</h1>
          <h2 className="intro-subtitle">Developer and Creator</h2>
          <p className="intro-description">
            Welcome to my portfolio of work. I am a developer based in India,
            building efficient, innovative and interactive digital solutions
            that deliver real results
          </p>
          <button className="hero-btn" onClick={() => navigate("/contact")}>
            ASK ME A QUESTION
          </button>
          <div className="scroll-down-container">
            <span className="scroll-down"></span>
          </div>
        </div>
      </div>
      <Navbar />
      <div className="flex-container">
        <div className="flex-projects">
          <Projects />
        </div>
        <div className="flex-skills">
          <Skills />
        </div>
        <div className="flex-achievements">
          <Achievement />
        </div>
      </div>
    </>
  );
}
