import React from 'react'

export default function Contact() {
  return (
    <div id="contact">
      <section className="contact">
        <div className="container">
          <h1 className="contact-intro">Contact Me</h1>
          <div className="row">
            <div className="col-md-6">
            <form action="https://getform.io/f/049dc321-e767-41dd-847b-66fba12939ed" method="POST">
                  <input type="text" name="name" />
                  <input type="email" name="email" />
                  <textarea type="text" name="message" />
                  <button type="submit">Send</button>
                </form>
                
            </div>
            <div className="col-md-6 contact-info">
              <div className="social-icons"><b>Adress:</b><i className="fas fa-map-marker-alt"></i> Somerville, MA</div>
              <div className="social-icons"><b>Phone:</b><i className="fas fa-phone"></i> +1 201 995 3890</div>
              <div className="social-icons"><b>Email:</b><i className="fas fa-envelope"></i> dawitawegchow@gmail.com</div>
              <div className="social-icons"><label><b>Get Social:</b></label></div>
              <a className="social-icons" href="https://github.com/dawit-design"><i class="fab fa-github"></i></a>
              <a className="social-icons" href="https://www.linkedin.com/in/dawit-endaylalu-0ab8a41b3/"><i className="fa fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
