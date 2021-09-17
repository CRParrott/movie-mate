import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row navbar-nav ml-auto">
          <li className ="mx-1">
            <form className = "form-inline">
              <input type="text" className="form-control bg-dark text-white" id="search-form" placeholder="Search"></input>
            </form>
          </li>
          <li className="mx-1">
            <Link to="/profile" >
              Profile
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
          // <div className="justify-content-end" style={{ width: "100%" }}>
        <ul className="flex-row mr-auto"   >
            <li className ="mx-1">
              <form className = "form-inline">
                <input type="text" className="form-control bg-dark text-white" id="search-form" placeholder="Search"></input>
             </form>
          </li>
          <li className="mx-1 mr-auto">
            <Link to="/signup"className="ml-auto">
              Signup
            </Link>
          </li>
          <li className="mx-1 ml-auto">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
        // </div>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1 className="navbar-title">
        <Link to="/">
          Movie Mate
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;