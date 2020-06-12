import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="section-header">
        <div className="container">
          <div className="web-title">
            <h1>shark book</h1>
          </div>
          <div className="group-header-items">
            <div className="icon">
              <p>Log in</p>
              <p>Register</p>
            </div>
            <ul className="navbar-menue">
              <li>
                <a href="#" className="navebar-item">
                  about
                </a>
              </li>
              <li>
                <a href="#" className="navebar-item">
                  home
                </a>
              </li>
              <li>
                <a href="#" className="navebar-item">
                  books
                </a>
              </li>
              <li>
                <a href="#" className="navebar-item">
                  contact
                </a>
              </li>
            </ul>
            <div className="cart-icon">
              <a>
                <span className="material-icons">add_shopping_cart</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
