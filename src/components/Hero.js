import React from "react";

import instagram from "../icons/instagram.svg";
import facebook from "../icons/facebook.svg";
import twitter from "../icons/twitter.svg";

class Hero extends React.Component {
  render() {
    return (
      <section className="section hero-home ">
        <div className="container">
          <div className="hero-img">
            <div className="hero-img-bacground">
              <p>“GOOD FRIENDS, GOOD BOOKS”</p>
              <div className="soical-media">
                <p>FOLLOW US ON</p>
                <img src={instagram} width="50px" alt="instagram" />
                <img src={facebook} width="50px" alt="twitter" />
                <img src={twitter} width="50px" alt="facebook" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
