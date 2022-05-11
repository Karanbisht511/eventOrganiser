import Card from "./Card";
import "./Features.css";
import { Link } from "react-router-dom";

export default function Features() {
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
        <Link to="/explore">
          <Card content="Explore" />
        </Link>
      </div>
    </div>
  );
}
