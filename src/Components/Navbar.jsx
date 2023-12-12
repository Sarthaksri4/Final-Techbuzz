import React from "react";
import logo from "../assets/ccc logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="navbar-container">
        <div className="ccc-logo">
          <img src={logo} alt="ImageNA"></img>
        </div>
        <div>
          <Link to="/" className="link">
            Home
          </Link>{" "}
        </div>
        <div>
          <Link to="/about" className="link">
            About
          </Link>
        </div>
        <div>
          <Link to="/faculty" className="link">
            Faculty
          </Link>
        </div>
        <div>
          <Link to="/register" className="link">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
