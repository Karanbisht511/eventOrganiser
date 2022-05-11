import Card from "../Card";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Explore() {
  return (
    <div id="Features" className="feature-wrapper">
      <h1 style={{ textAlign: "center", fontSize: "4rem" }}>Features</h1>
      <div className="flex-container feature-container">
        {/* <Router> */}
        <Link to="/invitationTemplates">
          <Card content="Invitation Templates" />
        </Link>
        <Link to="/sendInvites">
          <Card content="Sending invites to relatives" />
        </Link>
        <Link to="/weddingResorts">
          <Card content="Book Wedding Resorts" />
        </Link>
        <Link to="/photoVideoPortal">
          <Card content="Book Photographer/Videographer" />
        </Link>
        <Link to="/decorators">
          <Card content="Book Decorators" />
        </Link>
        <Link to="/honeymoon">
          <Card content="Book Honeymoon Packages" />
        </Link>
      </div>
    </div>
  );
}
