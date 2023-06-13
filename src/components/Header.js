import React from 'react'
import Typed from 'react-typed'

export default function Header() {
  return (
    <div id="/" className='header-wrapper'>
      <div className='main-info'>
        <h1>Software Engineering Immersive Graduate</h1>
        <Typed
          className='typed-text'
          strings={["Web Design", "Web Development", "Graphic Design"]}
          typeSpeed={40}
          backSpeed={60}
          loop={true}
        />
        <a href="https://drive.google.com/file/d/1yaQhvWg86antJ3t5xG4KunMUxqZLBuzr/view?usp=sharing" className="btn-cv-show">Resume</a>
      </div>

    </div>
  )
}
