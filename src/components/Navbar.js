import React from 'react'
import logo from '../dawitLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" href="#">About Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" href="">Projects</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://drive.google.com/file/d/1zLeSI_nKNVn5Y50hHZLk01bQkZa_cZjW/view?usp=sharing">Resume</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" href="#">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
