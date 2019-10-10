import React from 'react'

const ContactMain = () => {
  return (
    <section id="main" className="container medium">
      <header>
        <h2>Contact Us</h2>
        <p>Tell us what you think about our little operation.</p>
      </header>
      <div className="box">
        <form method="post" action="/">
          <div className="row gtr-50 gtr-uniform">
            <div className="col-6 col-12-mobilep">
              <input type="text" name="name" id="name" value="" placeholder="Name" />
            </div>
            <div className="col-6 col-12-mobilep">
              <input type="email" name="email" id="email" value="" placeholder="Email" />
            </div>
            <div className="col-12">
              <input type="text" name="subject" id="subject" value="" placeholder="Subject" />
            </div>
            <div className="col-12">
              <textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
            </div>
            <div className="col-12">
              <ul className="actions special">
                <li><input type="submit" value="Send Message" /></li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactMain