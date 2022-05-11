import Nav from "./Nav";

export default function Header({ handleLoginClick }) {
  return (
    <header className="header">
      <Nav handleLoginClick={handleLoginClick} />
    </header>
  );
}
