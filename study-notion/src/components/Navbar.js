import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import logo from "../assets/Logo.svg";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  let Navigate = useNavigate();
  return (
    <div className="navbar">
      <Link to="/">
        <img
          className="left-navbar"
          src={logo}
          alt="image1"
          width={160}
          height={32}
          loading="lazy"
        ></img>
      </Link>

      <nav>
        <ul className="mid-navbar">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="right-navbar">
        {!isLoggedIn && (
          <Link className="navbar-button" to="/login">
            <button>Login</button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link className="navbar-button" to="/signup">
            <button>Sign Up</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link className="navbar-button" to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out!");
                Navigate("/");
              }}
            >
              Log Out
            </button>
          </Link>
        )}

        {isLoggedIn && (
          <Link className="navbar-button" to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
