import React from "react";
import bostonEat from "../boston-eat.png";
import streamIt from "../stream-it.png";
import feedable from "../feedable.png";
import realtorsInc from "../realtors-inc.png";
import Card from 'react-bootstrap/Card';

export default function Projects() {
  return (
    <div id="projects-dev" className="intro">
      <div className="projects-intro">Projects</div>
      <div className="projects-container">
        <div className="project-list">
          <div className="image-container">
            <img className="project-image" src={bostonEat} />
            <div className="title">Boston-Eat</div>
          </div>
          <div className="projects-details">
            <div>
              <div className="description">
                web app for boston eatery that can be accessible by catagories,
                Cuisine and ratings using zomato api.
              </div>
            </div>
          </div>
          <div className="buttons">
            <a href="https://boston-eat.netlify.app/" target="_blank">
              <button className="site-button">Visit Site</button>
            </a>
            <a
              href="https://github.com/dawit-design/Boston-Eat"
              target="_blank"
            >
              <button className="code-button">Code</button>
            </a>
          </div>
        </div>
        <div className="project-list">
          <div className="image-container">
            <img className="project-image" src={streamIt} />
            <div className="title">Stream-it</div>
          </div>
          <div className="details">
            <div>
              <div className="description">
                an Airtable and React full CRUD app that suggests favorite
                movies and shows on different streaming services. Allows users
                to post their favorite movies and find the movie through the
                streaming service
              </div>
            </div>
          </div>
          <div className="buttons">
            <a href="https://stream-it.netlify.app/" target="_blank">
              <button className="site-button">Visit Site</button>
            </a>
            <a href="https://github.com/dawit-design/stream-it" target="_blank">
              <button className="code-button">Code</button>
            </a>
          </div>
        </div>
        <div className="project-list">
          <div className="image-container">
            <img className="project-image" src={feedable} />
            <div className="title">Feedable</div>
          </div>
          <div className="details">
            <div>
              <div className="description">
                a full-stack app with full CRUD and user authentication and
                authorization for real time e-commerce web app for food products
                build using Mongo DB, Express, React and Node.js stack..
              </div>
            </div>
          </div>
          <div className="buttons">
            <a href="https://feedable.netlify.app/" target="_blank">
              <button className="site-button">Visit Site</button>
            </a>
            <a href="https://github.com/dawit-design/Feedable" target="_blank">
              <button className="code-button">Code</button>
            </a>
          </div>
        </div>
        <div className="project-list">
          <div className="image-container">
            <img className="project-image" src={realtorsInc} />
            <div className="title">realtors-inc</div>
          </div>
          <div className="details">
            <div>
              <div className="description">
                a full-stack app with full CRUD and user authentication and
                authorization for property market build using React and Ruby on
                rails.
              </div>
            </div>
          </div>
          <div className="buttons">
            <a href="https://realtors-inc.netlify.app/landing" target="_blank">
              <button className="site-button">Visit Site</button>
            </a>
            <a
              href="https://github.com/dawit-design/realtors-inc"
              target="_blank"
            >
              <button className="code-button">Code</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
