import React from "react";
import { NavLink } from "react-router-dom";
import { FaAirbnb } from "react-icons/fa6";
import "../ComponentCSS/header.css";
import { FaHome } from "react-icons/fa";
const Header = () => {
  return (
    <header>
      <div className="innerwidth flexRow">
        <div className="logo">
          <p>
            Cozy
            <br />
            <span>Homes</span>
          </p>
        </div>

        <nav className="linksBX flexRow flexSpaceAround">
          <ul >
            <li className="link">
              <NavLink to="/" className="navlink"><FaHome className="nav-icon" size={20}/>Home</NavLink>
            </li>
            <li className="link">
              <NavLink to="/airbnbs" className="navlink"><FaAirbnb className="nav-icon" size={20}/>Airbnbs</NavLink>
            </li>
          </ul>
          <button className="btn">
            <NavLink to="/login" className="navBtn">Login</NavLink>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
