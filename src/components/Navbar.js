import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm px-sm-4">
        <Link to="/">
          <img src={logo} alt="EShop" className="navbar-brand"></img>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-2">
            <Link to="/" className="nav-link">
              <button className="btn btn-lg btn-dark">
              <span className="mr-2">
                <i className="fas fa-home"></i>
              </span>
              Home
              </button>
            </Link>
          </li>
        </ul>
        <div className="btn-group btn-group-lg ml-auto" role="group">
          <Link to="/notify">
            <button className="btn btn-lg btn-dark">
              <span>
                <i className="fas fa-bell"></i>
              </span>
            </button>
          </Link>
          <Link to="/cart">
            <button className= "btn btn-lg btn-dark">
              <span>
              <i className="fas fa-cart-plus"></i>
              </span>
            </button>
          </Link>
        </div>
      </nav>
    );
  }
}
