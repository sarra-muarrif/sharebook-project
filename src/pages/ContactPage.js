import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class ContactPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section className="section-contant">
          <div className="container">
            <h2 className="contact-us">Contact Us</h2>
            <form className="contact-form" action="submit">
              <div className="dialer-info">
                <div className="dialer-name">
                  <label for="name">name</label>
                  <input id="name" type="text" placeholder="Enter Your Name" />
                </div>
                <div className="dialer-email">
                  <label for="email">email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter Your Email"
                  />
                </div>
              </div>
              <div className="dialer-message">
                <textarea
                  id="message"
                  type="Text"
                  cols="40"
                  rows="5"
                  placeholder="Leave Your Message Here"
                ></textarea>
                <button className="send-btn">Send</button>
              </div>
            </form>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
export default ContactPage;
