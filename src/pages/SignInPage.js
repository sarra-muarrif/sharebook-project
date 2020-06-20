import React from "react";
import { NavLink } from "react-router-dom";
class SignInPage extends React.Component {
  render() {
    return (
      <section className="section-signin">
        <div className="container">
          <h2 className="header-singin">sign in</h2>
          <div className="hero-singin">
            <h2>sharebook</h2>
            <p>
              new customer? start here
              <NavLink exact to="/sign-up">
                <span className="sign-up-now"> sign up</span>now!
              </NavLink>
            </p>
          </div>
          <div className="reader-seller-btn">
            <NavLink exact to="./sign-in">
              Reader
            </NavLink>
            <NavLink exact to="/seller">
              Seller
            </NavLink>
          </div>
          <form className="form-signin">
            <input
              id="email-signin"
              type="Email"
              placeholder="Email"
              required
            />
            <input
              id="password-signin"
              type="password"
              placeholder="password"
              required
            />
            <button className="sign-in-btn">SIGN IN</button>
          </form>
        </div>
      </section>
    );
  }
}
export default SignInPage;
