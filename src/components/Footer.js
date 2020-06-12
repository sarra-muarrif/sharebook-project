import React from "react";

import truck from "../icons/truck.svg";
import visa from "../icons/visa.svg";
import mastercard from "../icons/mastercard.svg";
import paypal from "../icons/paypal.svg";

class Footer extends React.Component {
  render() {
    return (
      <section className="section-footer">
        <div className="container">
          <div className="contact-info">
            <h3>contact</h3>
            <h4>012-22337</h4>
            <h4>sharkbook@book.com</h4>
          </div>
          <div className="delivery-info">
            <div className="delivery">
              <img src={truck} alt="truck" width="50px" />
              <h3> delivery is available in your country</h3>
            </div>
            <h3> copyright © charkbook. all rights reserved 2020 </h3>
            <div className="payment-methods">
              <h3>payment methods</h3>
              <img src={visa} alt="visa" width="50px" />
              <img src={mastercard} alt="matercard" width="50px" />
              <img src={paypal} alt="paypal" width="50px" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
