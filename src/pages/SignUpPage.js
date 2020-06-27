import React from "react";
import { NavLink } from "react-router-dom";
class SignUpPage extends React.Component {
  render() {
    return (
      <section className="section-signup">
        <div className="container">
          <h2 className="header-singup">sign up</h2>
          <div className="hero-singup">
            <h2>sharebook</h2>
            <p>
              do you have an account?
              <NavLink exact to="./sign-in" className="sign-in-now">
                {" "}
                sign in{" "}
              </NavLink>
            </p>
          </div>
          <div className="reader-seller-btn">
            <NavLink exact to="/sign-up">
              Reader
            </NavLink>
            <NavLink exact to="./seller">
              Seller
            </NavLink>
          </div>
          <form className="form-signin">
            <input
              id="first-name"
              type="text"
              placeholder="frist name"
              required
            />
            <input
              id="last-name"
              type="text"
              placeholder="last name"
              required
            />
            <input
              id="email-signup"
              type="Email"
              placeholder="email"
              required
            />
            <input
              id="password-signup"
              type="password"
              placeholder="password"
              required
            />
            <input
              id="confirm-password"
              type="password"
              placeholder="confirm password"
              required
            />
            <input id="signup-btn" type="button" value="sign up" />
          </form>
        </div>
      </section>
    );
  }
}
export default SignUpPage;
