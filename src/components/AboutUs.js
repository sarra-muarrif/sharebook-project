import React from "react";
import aboutUsImg from "../img/All-About-Us.png";

class AboutUs extends React.Component {
  render() {
    return (
      <section className="section-about-us">
        <div className="container">
          <div className="about-us-cover">
            <img
              src={aboutUsImg}
              alt="AboutUsCover"
              width="350px"
              height="412px"
            />
          </div>
          <div className="about-us-desc">
            <p className="about-us-title">all about </p>
            <span
              style={{
                color: "red",
                fontSize: "80px",
                fontFamily: "AvenirNext-Regular",
                fontStyle: "italic",
                position: "relative",
                top: "230px",
                right: "210px",
              }}
            >
              us
            </span>
            <p className="about-us-pargraph">
              sharkbook is the largest online used bookstore in the Middle East,
              offering more than 9.5 million titles of english books with home
              delivery.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutUs;
