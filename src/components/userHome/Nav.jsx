import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
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
        onClick={addActiveLinkClass}
      >
        Logout
      </Link>
    </nav>
  );
}
