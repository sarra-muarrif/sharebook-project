import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <section className="section-footer">
        <div className="container">
          <div className="section-desc">
            <div className="contact-info">
              <h3>contact</h3>
              <h4>012-22337</h4>
              <h4>ShareBook@book.com</h4>
            </div>
            <div className="delivery">
              <h3>
                <i className="fas fa-truck"></i>delivery is available in your
                country
              </h3>
              <h3> copyright © ShareBook. all rights reserved 2020 </h3>
            </div>
            <div className="payment-methods">
              <h3>payment methods</h3>
              <i className="fab fa-cc-visa"></i>
              <i className="fab fa-cc-mastercard"></i>
              <i className="fab fa-cc-paypal"></i>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
