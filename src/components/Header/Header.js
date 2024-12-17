import React from "react";
import Typed from "react-typed";
import proImg from '../../assets/proImg.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import './Header.css'
export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <div id="home" className="header-wrapper">
        <div className="main-info">
          <Typed
            className="typed-text"
            strings={[
              "Building Scalable Web Applications",
              "Creating Intuitive User Experiences",
              "Developing Mobile Apps with React Native",
              "Transforming Ideas into Code",
            ]}
            typeSpeed={50}
            backSpeed={70}
            loop={true}
          />
          <a href="projects-dev" className="btn-show-projects">
            View My Work
          </a>
        </div>
      </div>

      {/* About Me Section */}
      <div id="about" className="about-section">
        <div className="about-card-wrapper">
          <div className="about-card">
            <img className="circular--landscape" src={proImg} alt="profile" />
            <h3 className="fullname">Dawit Endaylalu</h3>
            <p className="job">Software Engineer/Graphic Designer</p>
            <p className="about-me">
              "A passionate software engineer with experience in object-oriented programming languages like Ruby and JavaScript, combined with a background in graphic design. Constantly learning and eager to innovate, solve problems, and create high-quality software."
            </p>
            <a className="btn-contact" href="mailto:dawitawegchow@gmail.com">Contact Me</a>
            <ul className="social-icons">
              <li>
                <a href="https://www.linkedin.com/in/dawit-endaylalu/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="https://github.com/dawit-design">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}