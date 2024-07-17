import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaAirbnb } from "react-icons/fa6";
import "../ComponentCSS/header.css";
import { FaHome } from "react-icons/fa";
import { Context } from "../context";
const Header = () => {
  const { state } = useContext(Context);
  const User = state.user;
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
          <ul>
            <li className="link">
              <NavLink to="/" className="navlink">
                <FaHome className="nav-icon" size={20} />
                Home
              </NavLink>
            </li>
            <li className="link">
              <NavLink to="/airbnbs" className="navlink">
                <FaAirbnb className="nav-icon" size={20} />
                Airbnbs
              </NavLink>
            </li>
          </ul>
          {User.length ? (
            <div
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",

                backgroundColor: "#072352b9",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {User.map((user) => (
                <NavLink
                  to="/dashboard"
                  style={{
                    textDecoration: "none",
                    color: "white"
                  }}
                  key={user._id}
                >
                  {user.username.charAt(0).toUpperCase()}
                </NavLink>
              ))}
            </div>
          ) : (
            <button className="btn">
              <NavLink to="/login" className="navBtn">
                Login
              </NavLink>
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
