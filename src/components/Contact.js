import React from 'react'

export default function Contact() {
  return (

    <div className="contact-form">
      <div>
        <h1 className="contact-intro">Contact Me</h1>
      </div>
      <form action="https://getform.io/f/049dc321-e767-41dd-847b-66fba12939ed" method="POST">
        <div>
          <label>Name</label> <br/>
          <input className="contact-form-input" type="text" name="name" required />
        </div>
        <div>
          <label >Email</label> <br/>
          <input className="contact-form-input" type="email" name="email" required />
        </div>
        <div>
          <label >Phone Number</label> <br/>
          <input className="contact-form-input" type="number" name="phone-number" required />
        </div>
        <div>
          <label >Message</label> <br/>
          <textarea className="contact-form-input" type="text" name="message" required />
        </div>
        <div className="contact-button-div">
        <button className="form-button" type="submit">Send</button>
        </div>
      </form>
      
      <div className="social">
        <a className="social-icon" href="https://github.com/dawit-design"><i class="fab fa-github"></i></a>
        <a className="social-icon" href="https://www.linkedin.com/in/dawit-endaylalu/"><i className="fa fa-linkedin"></i></a>
      </div>
    </div>

  )
}
