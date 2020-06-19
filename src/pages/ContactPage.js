import React from "react";

class ContactPage extends React.Component {
  render() {
    return (
      <>
        <h2>Contact Us</h2>
        <form action="submit">
          <div className="container">
            <div className="dialer-info">
              <div className="dialer-name">
                <label for="name">NAME</label>
                <input type="text" placeholder="Enter Your Name" />
              </div>
              <div className="dialer-email">
                <label for="email">EMAIL</label>
                <input type="email" placeholder="Enter Your Email" />
              </div>
            </div>
            <div className="dialer-message">
              <textarea
                name="Text"
                cols="40"
                rows="5"
                placeholder="Leave Your Message Here"
              ></textarea>
              <button className="send-btn">Send</button>
            </div>
          </div>
        </form>
      </>
    );
  }
}
export default ContactPage;
