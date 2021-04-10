import React from 'react'

export default function Contact() {
  return (
    <div id="contact">
      <section className="contact">
        <div className="container">
          <h1 className="contact-intro">Contact Me</h1>
          <div className="row">
            <div className="col-md-6">
              <form className="contact-form">
                {/* <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your-name" />
                </div>
                <div className="form-group">
                  <input type="number" className="form-control" placeholder="Phone-number" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email-id" />
                </div>
                <div className="form-group">
                  <textarea  className="form-control" rows="4" placeholder="Message"></textarea>
                </div> */}
                <a className="btn" href="mailto:dawitawegchow@gmail.com">Contact Me</a>
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
