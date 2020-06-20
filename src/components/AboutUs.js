import React from "react";
import aboutUsImg from "../img/All-About-Us.png";

class AboutUs extends React.Component {
  render() {
    return (
      <section id="about-us" className="section-about-us" >
        <div className="container">
          <div className="about-us-cover">
            <img src={aboutUsImg} alt="AboutUsCover" />
            <p className="all-about">all about <span id="us">us</span></p> 
            <div className="about-us-background">
            <p className="about-us-pargraph">
              sharkbook is the largest online used bookstore in the Middle East,
              offering more than 9.5 million titles of english books with home
              delivery.
            </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutUs;
