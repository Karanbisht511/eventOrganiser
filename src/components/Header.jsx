import { Outlet } from "react-router";
import "./Header.css";
import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <header id="header">
        <Nav />
      </header>
      {/* <Outlet /> */}
    </>
  );
}
