import React from "react";

class HeroHome extends React.Component {
  render() {
    return (
      <section className="section hero-home ">
        <div className="container">
          <div className="hero-img">
            <div className="hero-img-bacground">
              <p>“GOOD FRIENDS, GOOD BOOKS”</p>
              <div className="soical-media">
                <div className=" soical-media border-line">
                </div>
                <h2>FOLLOW US ON</h2>
                <div className="soical-media icons">
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook-square"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroHome;
