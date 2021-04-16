import React from 'react'
import proImg from '../proImg.jpg'
export default function About() {
  return (
    <div id="about" className="about-dev">
      <div className="about-me-intro">About Me</div>
      <div className="about-card-wrapper">
        <div className="about-card">
          <img className="circular--landscape" src={proImg} alt="profile-image" />
          <h1 className="fullname">Dawit Awegchow</h1>
          <p className="job">Web Developer</p>
          <p className="about-me">"An enthusiastic software engineer experienced in object-oriented programming languages including Ruby and JavaScript based programming, with a background in graphic design, sales and service industries. A passionate learner excited to strengthen skill set through innovation, problem solving, and quality software builds. With an emphasis on team-oriented and collaborative spirit, I excel at developing strong relationships with clients and delivering on their needs in a timely manner."</p>
          <a className="btn" href="mailto:dawitawegchow@gmail.com">Contact Me</a>
          <ul className="social-icons">
            <li><a href="https://www.linkedin.com/in/dawit-endaylalu/"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://github.com/dawit-design"><i class="fab fa-github"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
