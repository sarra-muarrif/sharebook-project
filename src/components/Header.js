import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="section-header">
        <div className="container">
          <div className="web-title">
            <h1>ShareBook</h1>
          </div>
          <div className="group-header-items">
            <div className="icon">
              <NavLink exact to="./sign-in">
                sign in
              </NavLink>
              <NavLink exact to="./sign-up">
                sign up
              </NavLink>
            </div>
            <ul className="navbar-menue">
              <li>
                <NavLink exact to="./about" className="navebar-item acive">
                  about
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/" className="navebar-item acive">
                  home
                </NavLink>
              </li>
              <li>
                <NavLink exact to="./books" className="navebar-item acive">
                  books
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/contact" className="navebar-item acive">
                  contact
                </NavLink>
              </li>
            </ul>
            <div className="cart-icon">
              <NavLink exact to="/cart">
                <i className="fas fa-shopping-cart"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
