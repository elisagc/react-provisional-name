import React, { Component } from "react";
import logo from "../images/LogoSinFondo.png";

export default class Navbar extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
          <img src={logo} alt="pingus" />
        </div>
        <nav className="navbar">
          <div className="buttons-container">
            <a href="/">Menu</a>
            <a href="/">Menu</a>
            <a href="/">Menu</a>
          </div>
        </nav>
      </header>
    );
  }
}
