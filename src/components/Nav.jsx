import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav({ handleLoginClick }) {
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

  // const handleClick = () => {
  //   console.log("clicked");
  //   handleLoginClick();
  // };

  return (
    <nav className="nav flex-container header-element">
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
      <div id="Login-link" className="nav-element" onClick={handleLoginClick}>
        Log-In
      </div>
    </nav>
  );
}
