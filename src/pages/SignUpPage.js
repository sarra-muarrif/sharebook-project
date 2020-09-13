import React from "react";
import { NavLink } from "react-router-dom";
import { USER_URL } from "../constants/urls";
class SignUpPage extends React.Component {
  state = { firstName: "", lastName: "", email: "", password: "" };
  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  signUp = () => {
    fetch(USER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `firstName=${this.state.firstName}&lastName=${this.state.lastName}&email=${this.state.email}&password=${this.state.password}`,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
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
          <form className="form-signup">
            <input
              id="first-name"
              name="firstName"
              type="text"
              placeholder="first name"
              required
              onChange={this.handleInput}
            />
            <input
              id="last-name"
              name="lastName"
              type="text"
              placeholder="last name"
              onChange={this.handleInput}
            />
            <input
              id="email-signup"
              name="email"
              type="Email"
              placeholder="email"
              required
              onChange={this.handleInput}
            />
            <input
              id="password-signup"
              name="password"
              type="password"
              placeholder="password"
              required
              onChange={this.handleInput}
            />
            <input
              id="confirm-password"
              type="password"
              placeholder="confirm password"
              required
            />
            <NavLink exact to="/sign-in">
              <button id="signup-btn" onClick={this.signUp}>
                sign up
              </button>
            </NavLink>
          </form>
        </div>
      </section>
    );
  }
}
export default SignUpPage;
