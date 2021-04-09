import React from 'react'
import dawit from '../dawit.jpg'
export default function About() {
  return (
    <div className="about-card-wrapper">
      <div className="about-card">
        <img className="circular--landscape" src={dawit} alt="profile-image" />
        <h1 className="fullname">Dawit Awegchow</h1>
        <p className="job">Web Developer</p>
        <p className="about-me">"I am a passionate and higly driven person and I believe in always learning and improving my self. I always set goals to acheive and challenge myslef and I am very good communicator and team player!"</p>
        <a className="btn" href="mailto:dawitawegchow@gmail.com">Contact Me</a>
        <ul className="social-icons">
            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.linkedin.com/in/dawit-endaylalu-0ab8a41b3/"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fab fa-github"></i></a></li>
            
        </ul>
     </div>   
   </div>
  )
}
