import React from "react";
import { NavLink } from "react-router-dom";
class SignInPage extends React.Component {
  state = { email: "", password: "" };
  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.handleSignIn();
  };
  signIn = (Email) => {
    fetch(`/api/v1/users/${Email}`)
      .then((res) => res.json())
      .then((res) => this.props.handleUserName(res[0].firstName))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <section className="section-signin">
        <div className="container">
          <h2 className="header-singin">sign in</h2>
          <div className="hero-singin">
            <h2>sharebook</h2>
            <p>
              new customer? start here
              <NavLink exact to="./sign-up" className="sign-up-now">
                {" "}
                sign up
              </NavLink>
              now!
            </p>
          </div>
          <form className="form-signin">
            <input
              id="email-signin"
              name="email"
              type="Email"
              placeholder="email"
              required
              onChange={this.handleInput}
            />
            <input
              id="password-signin"
              name="password"
              type="password"
              placeholder="password"
              required
              onChange={this.handleInput}
            />
            <NavLink exact to="/">
              <button id="sign-in-btn" onClick={this.signIn(this.state.email)}>
                sign in
              </button>
            </NavLink>
          </form>
        </div>
      </section>
    );
  }
}
export default SignInPage;
