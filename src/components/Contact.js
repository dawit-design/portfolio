import React from 'react'

export default function Contact() {
  return (
    <div>
      <section className="contact">
        <div className="container">
          <h1>Contact Me</h1>
          <div className="row">
            <div className="col-md-6">
              <form className="contact-form">
                <div className="form-group">
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
                </div>
                <a className="btn" href="mailto:dawitawegchow@gmail.com">Contact Me</a>
              </form>
            </div>
            <div className="col-md-6 contact-info">
              <div className="follow"><b>Adress:</b><i className="fas fa-map-marker-alt"></i> Sarbet Road, Addis Ababa, Ethiopia</div>
              <div className="follow"><b>Phone:</b><i className="fas fa-phone"></i> +251 937809496</div>
              <div className="follow"><b>Email:</b><i className="fas fa-envelope"></i> example@gmail.com</div>
              <div className="follow"><label><b>Get Social:</b></label> Get Social:</div>
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
              <a href="#"><i className="fa fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
