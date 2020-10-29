import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import { AuthContext } from "../features/Auth/Auth";
import "../components/Styles/lineHover.css";

export default function Nav() {
  const { isAuthenticated, user } = useContext(AuthContext);

  function handleLogout(e) {
    e.preventDefault();

    firebase
      .auth()
      .signOut()
      .catch(function (error) {
        console.warn(error);
      });
  }

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link className="navbar-brand font" to="/">
        Car2Ride
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav w-100">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">
              Rent a Car
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" exact to="/van">
              Rent a Van
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" exact to="/rentyourvehicle">
              Rent your vehicle
            </NavLink>
          </li>

          <li className="nav-item mr-auto">
            <NavLink className="nav-link" exact to="/contact">
              Contact
            </NavLink>
          </li>

          {isAuthenticated ? (
            <>
              <li className="nav-item">
                <span className="navbar-text">Welcome {user.email} !</span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/login">
                  Login
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" exact to="/register">
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
