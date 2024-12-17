import React from "react";
import bostonEat from "../../assets/boston-eat.png";
import streamIt from "../../assets/stream-it.png";
import feedable from "../../assets/feedable.png";
import realtorsInc from "../../assets/realtors-inc.png";
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects-dev" className="projects-section">
      <div className="projects-intro">Projects</div>

      {/* Project 1: Boston-Eat */}
      <div className="projects-container">
        <div className="project-list">
          <div className="image-container">
            <img className="project-image" src={bostonEat} alt="Boston-Eat" />
          </div>
          <div className="project-description">
            <div className="title">Boston-Eat</div>
            <p><strong>Project Overview:</strong> A web app for Boston eatery, accessible by categories, cuisine, and ratings using Zomato API. I was responsible for full-stack development.</p>
            <a href="https://boston-eat.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button className="btn">Visit Site</button>
            </a>
            <a href="https://github.com/dawit-design/Boston-Eat" target="_blank" rel="noopener noreferrer">
              <button className="btn">Code</button>
            </a>
          </div>
        </div>

        {/* Project 2: Stream-It */}
        <div className="project-list">
          <div className="image-container">
            <img className="project-image" src={streamIt} alt="Stream-It" />
          </div>
          <div className="project-description">
            <div className="title">Stream-it</div>
            <p><strong>Project Overview:</strong> An Airtable and React full CRUD app that suggests favorite movies and shows on different streaming services.</p>
            <a href="https://stream-it.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button className="btn">Visit Site</button>
            </a>
            <a href="https://github.com/dawit-design/stream-it" target="_blank" rel="noopener noreferrer">
              <button className="btn">Code</button>
            </a>
          </div>
        </div>

        {/* Project 3: Feedable */}
        <div className="project-list">
          <div className="image-container">
            <img className="project-image" src={feedable} alt="Feedable" />
          </div>
          <div className="project-description">
            <div className="title">Feedable</div>
            <p><strong>Project Overview:</strong> A full-stack app with full CRUD and user authentication for a real-time e-commerce food product platform.</p>
            <a href="https://feedable.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button className="btn">Visit Site</button>
            </a>
            <a href="https://github.com/dawit-design/Feedable" target="_blank" rel="noopener noreferrer">
              <button className="btn">Code</button>
            </a>
          </div>
        </div>

        {/* Project 4: Realtors-Inc */}
        <div className="project-list">
          <div className="image-container">
            <img className="project-image" src={realtorsInc} alt="Realtors-Inc" />
          </div>
          <div className="project-description">
            <div className="title">Realtors-Inc</div>
            <p><strong>Project Overview:</strong> A full-stack app with full CRUD and user authentication for the property market built using React and Ruby on Rails.</p>
            <a href="https://realtors-inc.netlify.app/landing" target="_blank" rel="noopener noreferrer">
              <button className="btn">Visit Site</button>
            </a>
            <a href="https://github.com/dawit-design/realtors-inc" target="_blank" rel="noopener noreferrer">
              <button className="btn">Code</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}