import React from 'react';
import './Contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      {/* Introduction */}
      <div className="contact-intro">
        <h1>Contact Me</h1>
        <p>I'm always open to hearing from you. Feel free to drop a message or connect on social media.</p>
      </div>

      {/* Contact Form */}
      <form
        action="https://getform.io/f/049dc321-e767-41dd-847b-66fba12939ed"
        method="POST"
        className="contact-form"
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="contact-form-input"
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="contact-form-input"
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone-number">Phone Number</label>
          <input
            className="contact-form-input"
            type="tel"
            name="phone-number"
            id="phone-number"
            placeholder="Your phone number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="contact-form-input"
            name="message"
            id="message"
            placeholder="Your message"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="form-submit">
          <button className="form-button" type="submit">
            Send Message
          </button>
        </div>
      </form>

      {/* Social Media Links */}
      <div className="social-links">
        <ul className="social-icons">
          <li>
            <a href="https://www.linkedin.com/in/dawit-endaylalu/" className="linkedin-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://github.com/dawit-design" className="github-icon">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}