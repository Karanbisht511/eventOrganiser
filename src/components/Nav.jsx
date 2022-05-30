// ****NOTE****
// Use redux global state of useinfo to show additional nav items

import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav({ handleLoginClick, navs }) {
  const addActiveLinkClass = (e) => {
    const nav = document.querySelector(".nav");
    const links = nav.childNodes;
    links.forEach((link) => {
      link.classList.remove("active-link");
    });
    // console.log(e.target.id);
    const id = e.target.id;
    const currentLink = document.querySelector(`#${id}`);
    currentLink.classList.add("active-link");
  };

  return (
    <nav className="nav flex-container header-element">
      {sessionStorage.getItem("userInformation") ? (
        <>
          <Link
            to="/"
            id="Home-link"
            className="nav-element active-link"
            onClick={addActiveLinkClass}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            // href="#Explore"
            id="dashboard-link"
            className="nav-element"
            onClick={addActiveLinkClass}
          >
            Dashboard
          </Link>
          <Link
            to="/logout"
            // href="#Explore"
            id="logout-link"
            className="nav-element"
            onClick={() => {
              sessionStorage.clear();
              window.location.href = "http://localhost:4001";
            }}
          >
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link
            to="/"
            // href="#Home"
            id="Home-link"
            className="nav-element active-link"
            onClick={addActiveLinkClass}
          >
            Home
          </Link>
          <a
            href="#Features"
            id="Feature-link"
            className="nav-element"
            onClick={addActiveLinkClass}
          >
            Features
          </a>
          <Link
            to="/explore"
            // href="#Explore"
            id="Explore-link"
            className="nav-element"
            onClick={addActiveLinkClass}
          >
            Explore
          </Link>
          <a
            href="#AboutUs"
            id="AboutUs-link"
            className="nav-element"
            onClick={addActiveLinkClass}
          >
            About Us
          </a>
          <div
            id="Login-link"
            className="nav-element"
            onClick={handleLoginClick}
          >
            Log-In
          </div>
        </>
      )}
    </nav>
  );
}
